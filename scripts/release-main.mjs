// Штатный выпуск сайта в main: проверка → push → проверка Cloudflare.
//
// Зачем. 01.11.2026 коммиты 62b8c7e и 5157403 ушли в main и упали на Cloudflare
// в prebuild (`check-new-locales.mjs --public-only`: «he/hi … missing leaves»).
// Боевой остался на старой версии, исполнители ждали деплой, который не мог
// собраться. Теперь проверка идёт до push, а после push статус деплоя читается
// через API и при провале сборки лог печатается сразу.
//
//   node scripts/release-main.mjs              проверки → git push origin HEAD:main → ждать деплой
//   node scripts/release-main.mjs --dry-run    только проверки, без push
//   node scripts/release-main.mjs --checks-only [--sha <sha>]   то, что зовёт .githooks/pre-push
//   node scripts/release-main.mjs --watch <sha>                 только опрос деплоя уже запушенного коммита
//
// Хук включается один раз на репозиторий: git config core.hooksPath .githooks
//
// Токен Cloudflare читается только из файла .secrets/cloudflare.env (ищется
// вверх от репозитория; путь можно задать --cloudflare-env). Переменные
// окружения CLOUDFLARE_* не читаются, токен не печатается.
//
// Коды выхода: 0 — успех; 2 — проверка до push провалена, push не выполнялся;
// 3 — деплой на Cloudflare упал (лог напечатан); 4 — деплой не дождались;
// 64 — неверный вызов; 1 — прочие ошибки (git push, API, окружение).

import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const GATE_ENV = 'TERANOVA_RELEASE_GATE_PASSED';
export const CHECKS = [
  { name: 'check-new-locales --public-only', cmd: 'node', args: ['scripts/check-new-locales.mjs', '--public-only'] },
  { name: 'npm run build', cmd: 'npm', args: ['run', 'build'] },
];
const API = 'https://api.cloudflare.com/client/v4';

export function defaultRun(cmd, args, { cwd, env, capture = false } = {}) {
  const r = spawnSync(cmd, args, {
    cwd, env: env || process.env, encoding: 'utf8',
    stdio: capture ? ['ignore', 'pipe', 'pipe'] : 'inherit',
  });
  return { status: r.error ? 127 : r.status, stdout: r.stdout || '', stderr: r.stderr || '' };
}

export function findCloudflareEnv(start) {
  for (let dir = resolve(start); ; dir = dirname(dir)) {
    const file = join(dir, '.secrets', 'cloudflare.env');
    if (existsSync(file)) return file;
    if (dirname(dir) === dir) return null;
  }
}

export function readCloudflareEnv(file) {
  const env = {};
  for (const raw of readFileSync(file, 'utf8').split('\n')) {
    const line = raw.trim();
    if (!line || line.startsWith('#') || !line.includes('=')) continue;
    const at = line.indexOf('=');
    env[line.slice(0, at).replace(/^export\s+/, '').trim()] = line.slice(at + 1).trim().replace(/^(['"])(.*)\1$/, '$2');
  }
  if (!env.CLOUDFLARE_API_TOKEN || !env.CLOUDFLARE_ACCOUNT_ID) {
    throw new Error(`${file}: нет CLOUDFLARE_API_TOKEN или CLOUDFLARE_ACCOUNT_ID`);
  }
  return { token: env.CLOUDFLARE_API_TOKEN, account: env.CLOUDFLARE_ACCOUNT_ID };
}

function git(ctx, args) {
  const r = ctx.run('git', args, { cwd: ctx.repo, capture: true });
  if (r.status !== 0) throw new Error(`git ${args.join(' ')}: ${r.stderr.trim()}`);
  return r.stdout.trim();
}

// Проверки идут по рабочему дереву, поэтому оно обязано совпадать с коммитом,
// который уходит в main.
export function runChecks(ctx, sha) {
  const head = git(ctx, ['rev-parse', 'HEAD']);
  if (sha && sha !== head) {
    ctx.log(`✗ выпускается ${sha.slice(0, 7)}, а рабочее дерево на ${head.slice(0, 7)} — проверка была бы не того коммита. Перейдите на коммит или пушьте из его дерева.`);
    return false;
  }
  if (git(ctx, ['status', '--porcelain', '--untracked-files=no'])) {
    ctx.log('✗ в рабочем дереве незакоммиченные правки — проверка была бы не того коммита.');
    return false;
  }
  if (!existsSync(join(ctx.repo, 'node_modules'))) {
    ctx.log(`✗ нет node_modules в ${ctx.repo}. В отдельном дереве: ln -s <teranova-website>/node_modules node_modules`);
    return false;
  }
  for (const check of CHECKS) {
    ctx.log(`→ ${check.name}`);
    const r = ctx.run(check.cmd, check.args, { cwd: ctx.repo });
    if (r.status !== 0) {
      ctx.log(`✗ ${check.name}: код ${r.status}. Push в main не выполняется.`);
      return false;
    }
  }
  ctx.log(`✓ проверки пройдены для ${head.slice(0, 7)}`);
  return true;
}

function redact(text, token) {
  return token ? String(text).split(token).join('***') : String(text);
}

async function cf(ctx, creds, path) {
  const res = await ctx.fetch(`${API}/accounts/${creds.account}/pages/projects/${ctx.project}${path}`, {
    headers: { Authorization: `Bearer ${creds.token}` },
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok || body.success === false) {
    const why = (body.errors || []).map((e) => e.message).join('; ') || `HTTP ${res.status}`;
    throw new Error(redact(`Cloudflare API ${path}: ${why}`, creds.token));
  }
  return body.result;
}

// Ждёт деплой коммита на production. Провал сборки не ждёт таймаута: как только
// latest_stage = failure, читает и печатает лог.
export async function watchDeployment(ctx, sha) {
  const creds = readCloudflareEnv(ctx.cloudflareEnv);
  const deadline = ctx.now() + ctx.timeoutMs;
  let seen = '';
  for (;;) {
    const list = await cf(ctx, creds, '/deployments?env=production&per_page=10');
    const dep = list.find((d) => d.deployment_trigger?.metadata?.commit_hash === sha);
    if (dep) {
      const { name, status } = dep.latest_stage || {};
      const state = `${name}:${status}`;
      if (state !== seen) ctx.log(`Cloudflare ${dep.id.slice(0, 8)} ${state}`);
      seen = state;
      if (status === 'failure' || status === 'canceled') {
        ctx.log(`✗ деплой ${sha.slice(0, 7)} упал на этапе ${name}. Лог сборки:`);
        const logs = await cf(ctx, creds, `/deployments/${dep.id}/history/logs`);
        for (const entry of logs.data || []) ctx.log(redact(`  ${entry.ts} ${entry.line}`, creds.token));
        return 3;
      }
      if (name === 'deploy' && status === 'success') {
        ctx.log(`✓ деплой ${sha.slice(0, 7)} на production: ${dep.url || ''}`);
        return 0;
      }
    } else if (!seen) {
      ctx.log(`Cloudflare: деплой ${sha.slice(0, 7)} ещё не появился`);
      seen = 'none';
    }
    if (ctx.now() >= deadline) {
      ctx.log(`✗ за ${Math.round(ctx.timeoutMs / 1000)} с деплой ${sha.slice(0, 7)} не завершился (последнее: ${seen}).`);
      return 4;
    }
    await ctx.sleep(ctx.intervalMs);
  }
}

export function parseArgs(argv) {
  const o = { mode: 'release', sha: '', project: 'teranova-website-1', cloudflareEnv: '', timeout: 900, interval: 15 };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    const val = () => { if (i + 1 >= argv.length) throw new Error(`${a} требует значение`); return argv[++i]; };
    if (a === '--dry-run') o.mode = 'dry-run';
    else if (a === '--checks-only') o.mode = 'checks-only';
    else if (a === '--watch') { o.mode = 'watch'; o.sha = val(); }
    else if (a === '--sha') o.sha = val();
    else if (a === '--project') o.project = val();
    else if (a === '--cloudflare-env') o.cloudflareEnv = val();
    else if (a === '--timeout') o.timeout = Number(val());
    else if (a === '--interval') o.interval = Number(val());
    else throw new Error(`неизвестный аргумент ${a}`);
  }
  return o;
}

export async function main(argv, deps = {}) {
  const log = deps.log || ((m) => console.log(m));
  let o;
  try { o = parseArgs(argv); } catch (e) { log(`✗ ${e.message}`); return 64; }
  const repo = resolve(deps.repo || process.cwd());
  const ctx = {
    repo, log, project: o.project,
    run: deps.run || defaultRun,
    fetch: deps.fetch || globalThis.fetch,
    sleep: deps.sleep || ((ms) => new Promise((r) => setTimeout(r, ms))),
    now: deps.now || Date.now,
    timeoutMs: o.timeout * 1000, intervalMs: o.interval * 1000,
    cloudflareEnv: o.cloudflareEnv || findCloudflareEnv(repo),
  };
  const needsCloudflare = o.mode === 'release' || o.mode === 'watch';
  if (needsCloudflare && !(ctx.cloudflareEnv && existsSync(ctx.cloudflareEnv))) {
    log('✗ не найден .secrets/cloudflare.env — без него статус деплоя не проверить.');
    return 1;
  }
  try {
    if (o.mode === 'watch') return await watchDeployment(ctx, o.sha);
    const sha = o.sha || git(ctx, ['rev-parse', 'HEAD']);
    if (!runChecks(ctx, sha)) return 2;
    if (o.mode === 'checks-only') return 0;
    if (o.mode === 'dry-run') {
      log(`dry-run: git push origin ${sha.slice(0, 7)}:refs/heads/main не выполнялся`);
      return 0;
    }
    log(`→ git push origin ${sha.slice(0, 7)}:refs/heads/main`);
    const push = ctx.run('git', ['push', 'origin', `${sha}:refs/heads/main`], {
      cwd: repo, env: { ...process.env, [GATE_ENV]: sha },
    });
    if (push.status !== 0) { log(`✗ git push: код ${push.status}`); return 1; }
    return await watchDeployment(ctx, sha);
  } catch (e) {
    log(`✗ ${e.message}`);
    return 1;
  }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  process.exitCode = await main(process.argv.slice(2));
}
