// Тесты scripts/release-main.mjs и .githooks/pre-push: провал локалей или сборки
// не пускает push в main; провал деплоя на Cloudflare сразу печатает лог.
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { chmodSync, copyFileSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { main, GATE_ENV } from './release-main.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SHA = 'a'.repeat(40);
const TOKEN = 'tok-FILE-ONLY-7f3c9d';
const tmp = mkdtempSync(join(tmpdir(), 'release-main-test-'));
const allLogs = [];

const repo = join(tmp, 'repo');
mkdirSync(join(repo, 'node_modules'), { recursive: true });
const envFile = join(tmp, 'cloudflare.env');
writeFileSync(envFile, `CLOUDFLARE_API_TOKEN=${TOKEN}\nCLOUDFLARE_ACCOUNT_ID=acc1\n`);

const dep = (status, name = status === 'success' ? 'deploy' : 'build') => ({
  id: 'dep-0001-xyz', url: 'https://x.pages.dev',
  deployment_trigger: { metadata: { commit_hash: SHA, branch: 'main' } },
  latest_stage: { name, status },
});

function harness({ fail = {}, deployments = [[dep('success')]] } = {}) {
  const calls = [];
  const fetches = [];
  const logs = [];
  let sleeps = 0;
  let poll = 0;
  const run = (cmd, args, opts = {}) => {
    calls.push({ cmd, args, env: opts.env });
    const line = `${cmd} ${args.join(' ')}`;
    if (line === 'git rev-parse HEAD') return { status: 0, stdout: `${SHA}\n`, stderr: '' };
    if (line.startsWith('git status')) return { status: 0, stdout: '', stderr: '' };
    if (line.includes('check-new-locales')) return { status: fail.locales ? 1 : 0, stdout: '', stderr: '' };
    if (line === 'npm run build') return { status: fail.build ? 1 : 0, stdout: '', stderr: '' };
    if (cmd === 'git' && args[0] === 'push') return { status: 0, stdout: '', stderr: '' };
    throw new Error(`unexpected command ${line}`);
  };
  const fetch = async (url, init) => {
    fetches.push({ url, auth: init.headers.Authorization });
    if (url.includes('/history/logs')) {
      return { ok: true, status: 200, json: async () => ({ success: true, result: { data: [
        { ts: 't1', line: 'Executing user command: npm run build' },
        { ts: 't2', line: 'he: 12 missing leaves' },
        { ts: 't3', line: 'Failed: build command exited with code: 1' },
      ] } }) };
    }
    const result = deployments[Math.min(poll++, deployments.length - 1)];
    return { ok: true, status: 200, json: async () => ({ success: true, result }) };
  };
  const deps = {
    repo, run, fetch,
    log: (m) => { logs.push(m); allLogs.push(m); },
    sleep: async () => { sleeps += 1; },
    now: () => sleeps * 15000,
  };
  return { deps, calls, fetches, logs, get sleeps() { return sleeps; } };
}
const pushes = (h) => h.calls.filter((c) => c.cmd === 'git' && c.args[0] === 'push');
const args = ['--cloudflare-env', envFile];

// 1. Провал check-new-locales --public-only («he/hi … missing leaves») → push не вызывается.
{
  const h = harness({ fail: { locales: true } });
  assert.equal(await main(args, h.deps), 2);
  assert.equal(pushes(h).length, 0);
  assert.equal(h.calls.some((c) => c.cmd === 'npm'), false, 'build не запускается после провала локалей');
  assert.equal(h.fetches.length, 0);
}

// 2. Провал npm run build → push не вызывается, код ненулевой.
{
  const h = harness({ fail: { build: true } });
  const code = await main(args, h.deps);
  assert.notEqual(code, 0);
  assert.equal(code, 2);
  assert.equal(pushes(h).length, 0);
}

// 3. Cloudflare сообщает failure → лог читается и печатается сразу, без ожидания таймаута.
{
  const h = harness({ deployments: [[dep('failure')]] });
  assert.equal(await main([...args, '--timeout', '900'], h.deps), 3);
  assert.equal(pushes(h).length, 1);
  assert.equal(h.sleeps, 0, 'при failure не ждём');
  assert.ok(h.fetches.some((f) => f.url.endsWith('/deployments/dep-0001-xyz/history/logs')));
  assert.ok(h.logs.some((l) => l.includes('he: 12 missing leaves')));
  assert.ok(h.logs.some((l) => l.includes('Failed: build command exited with code: 1')));
}

// 3а. Деплой появляется не сразу: сначала нет, потом building, потом failure.
{
  const h = harness({ deployments: [[], [dep('active')], [dep('failure')]] });
  assert.equal(await main(args, h.deps), 3);
  assert.equal(h.sleeps, 2);
}

// 4. Проверки и деплой успешны → push ровно один раз, в main, с меткой для хука.
{
  const h = harness({ deployments: [[dep('active', 'build')], [dep('success')]] });
  assert.equal(await main(args, h.deps), 0);
  const p = pushes(h);
  assert.equal(p.length, 1);
  assert.deepEqual(p[0].args, ['push', 'origin', `${SHA}:refs/heads/main`]);
  assert.equal(p[0].env[GATE_ENV], SHA);
  assert.ok(h.fetches.every((f) => f.url.startsWith('https://api.cloudflare.com/client/v4/accounts/acc1/pages/projects/teranova-website-1/')));
}

// 4а. Деплой не завершился за таймаут → код 4, а не вечное ожидание.
{
  const h = harness({ deployments: [[dep('active')]] });
  assert.equal(await main([...args, '--timeout', '60'], h.deps), 4);
}

// 4б. --dry-run: проверки идут, push нет.
{
  const h = harness();
  assert.equal(await main(['--dry-run'], h.deps), 0);
  assert.equal(pushes(h).length, 0);
  assert.equal(h.fetches.length, 0);
}

// 5. Токен только из .secrets/cloudflare.env; в вывод не попадает даже из ошибки API.
{
  const saved = process.env.CLOUDFLARE_API_TOKEN;
  process.env.CLOUDFLARE_API_TOKEN = 'tok-FROM-ENV-must-not-be-used';
  const h = harness();
  assert.equal(await main(args, h.deps), 0);
  assert.ok(h.fetches.every((f) => f.auth === `Bearer ${TOKEN}`));
  const e = harness();
  e.deps.fetch = async () => ({ ok: false, status: 403, json: async () => ({ success: false, errors: [{ message: `bad token ${TOKEN}` }] }) });
  assert.equal(await main(args, e.deps), 1);
  assert.ok(e.logs.some((l) => l.includes('bad token ***')));
  if (saved === undefined) delete process.env.CLOUDFLARE_API_TOKEN; else process.env.CLOUDFLARE_API_TOKEN = saved;
  // Нет файла → отказ до push, переменная окружения не подхватывается.
  const n = harness();
  assert.equal(await main(['--cloudflare-env', join(tmp, 'absent.env')], n.deps), 1);
  assert.equal(pushes(n).length, 0);
}

// 6. Настоящий git: хук .githooks/pre-push не пускает в main коммит, не прошедший проверки.
{
  const sh = (cmd, a, cwd, env = {}) => spawnSync(cmd, a, { cwd, encoding: 'utf8', env: { ...process.env, ...env } });
  const g = (a, cwd) => { const r = sh('git', a, cwd); assert.equal(r.status, 0, `git ${a.join(' ')}: ${r.stderr}`); return r.stdout.trim(); };
  const remote = join(tmp, 'remote.git');
  const work = join(tmp, 'work');
  g(['init', '--bare', '-q', remote], tmp);
  g(['init', '-q', '-b', 'feature', work], tmp);
  for (const [k, v] of [['user.email', 't@example.invalid'], ['user.name', 't'], ['core.hooksPath', '.githooks']]) g(['config', k, v], work);
  mkdirSync(join(work, 'scripts'));
  mkdirSync(join(work, '.githooks'));
  mkdirSync(join(work, 'node_modules'));
  copyFileSync(join(root, 'scripts/release-main.mjs'), join(work, 'scripts/release-main.mjs'));
  copyFileSync(join(root, '.githooks/pre-push'), join(work, '.githooks/pre-push'));
  chmodSync(join(work, '.githooks/pre-push'), 0o755);
  writeFileSync(join(work, 'scripts/check-new-locales.mjs'),
    "import { existsSync } from 'node:fs';\nif (existsSync('locales.bad')) { console.error('he/hi: 3 missing leaves'); process.exit(1); }\n");
  writeFileSync(join(work, 'package.json'), JSON.stringify({ name: 't', private: true, scripts: {
    build: "node -e \"process.exit(require('fs').existsSync('build.bad') ? 1 : 0)\"" } }));
  writeFileSync(join(work, '.gitignore'), 'node_modules/\n');
  g(['remote', 'add', 'origin', remote], work);
  const commit = (file, msg) => { writeFileSync(join(work, file), msg); g(['add', '-A'], work); g(['commit', '-q', '-m', msg], work); return g(['rev-parse', 'HEAD'], work); };
  const remoteMain = () => sh('git', ['rev-parse', '--verify', '-q', 'refs/heads/main'], remote).stdout.trim();

  commit('locales.bad', 'he/hi missing');
  let r = sh('git', ['push', 'origin', 'HEAD:main'], work);
  allLogs.push(r.stderr);
  assert.notEqual(r.status, 0, 'push с провалом локалей должен быть отклонён');
  assert.match(r.stderr, /check-new-locales --public-only: код 1/);
  assert.equal(remoteMain(), '', 'main на remote не создан');

  // Ветки, кроме main, хук не трогает.
  assert.equal(sh('git', ['push', 'origin', 'HEAD:feature'], work).status, 0);

  g(['rm', '-q', 'locales.bad'], work);
  commit('build.bad', 'build broken');
  r = sh('git', ['push', 'origin', 'HEAD:main'], work);
  assert.notEqual(r.status, 0, 'push с провалом сборки должен быть отклонён');
  assert.match(r.stderr, /npm run build: код 1/);
  assert.equal(remoteMain(), '');

  g(['rm', '-q', 'build.bad'], work);
  const good = commit('ok.txt', 'ok');
  r = sh('git', ['push', 'origin', 'HEAD:main'], work);
  assert.equal(r.status, 0, r.stderr);
  assert.equal(remoteMain(), good);

  // --dry-run release-скрипта на сломанном коммите: отказ до push.
  const bad = commit('locales.bad', 'he/hi missing again');
  r = sh('node', ['scripts/release-main.mjs', '--dry-run'], work);
  allLogs.push(r.stdout);
  assert.equal(r.status, 2);
  assert.equal(remoteMain(), good);
  assert.notEqual(bad, good);
}

// Ни одна строка вывода тестов не содержит токен.
assert.equal(allLogs.join('\n').includes(TOKEN), false);
rmSync(tmp, { recursive: true, force: true });
console.log('test-release-main: ok');
