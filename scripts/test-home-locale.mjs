// Exercise the real home-locale verifier against a private HTML snapshot. No
// asset downloads, HTTP calls or writes to the original dist.
import assert from 'node:assert/strict';
import { mkdtempSync, readdirSync, mkdirSync, symlinkSync, readFileSync, unlinkSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { resolve, join } from 'node:path';
import { spawnSync } from 'node:child_process';

const source = resolve('dist');
const snapshot = mkdtempSync(join(tmpdir(), 'teranova-home-locale-'));
function mirror(from, to) {
  mkdirSync(to, { recursive: true });
  for (const entry of readdirSync(from, { withFileTypes: true })) {
    if (entry.isDirectory()) mirror(join(from, entry.name), join(to, entry.name));
    else if (entry.name === 'index.html' || /\.xml$/.test(entry.name) || ['robots.txt', '_redirects'].includes(entry.name)) {
      symlinkSync(join(from, entry.name), join(to, entry.name));
    }
  }
}
const run = () => spawnSync(process.execPath, ['scripts/verify-home-locale.mjs', snapshot], { encoding: 'utf8' });
try {
  mirror(source, snapshot);

  // Fixture 2: root page lang="en" plus /ru/ page lang="ru" (the shipped shape) builds clean.
  const baseline = run();
  assert.equal(baseline.status, 0, baseline.stdout + baseline.stderr);
  assert.match(baseline.stdout, /home-locale check: OK/);

  // Fixture 1: a root page with lang != "en" must fail the check and name the file.
  const home = join(snapshot, 'index.html');
  const original = readFileSync(home, 'utf8');
  unlinkSync(home); // break the symlink before writing; the real dist stays untouched
  const mutated = original.replace('<html lang="en"', '<html lang="ru"');
  assert.notEqual(mutated, original, 'lang fixture did not mutate root index.html');
  writeFileSync(home, mutated);
  const broken = run();
  assert.equal(broken.status, 1, 'verifier accepted a root page with lang="ru"');
  assert.match(broken.stderr, /index\.html: root language/, broken.stderr);
  console.log('root lang=ru: detected');

  writeFileSync(home, original);
  assert.equal(run().status, 0, 'restored snapshot should pass');
  assert.equal(readFileSync(join(source, 'index.html'), 'utf8'), original, 'source dist changed');
  console.log('Home-locale verifier positive control and root-lang mutation: PASS');
} finally { rmSync(snapshot, { recursive: true, force: true }); }
