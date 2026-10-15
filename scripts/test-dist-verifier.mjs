// Exercise the real verifier against a private HTML/XML snapshot. No asset
// downloads, HTTP calls or writes to the original dist.
import assert from 'node:assert/strict';
import { mkdtempSync, readdirSync, mkdirSync, symlinkSync, readFileSync, unlinkSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { resolve, join } from 'node:path';
import { spawnSync } from 'node:child_process';

const source = resolve('dist');
const snapshot = mkdtempSync(join(tmpdir(), 'teranova-i18n-negative-'));
function mirror(from, to) {
  mkdirSync(to, { recursive: true });
  for (const entry of readdirSync(from, { withFileTypes: true })) {
    if (entry.isDirectory()) mirror(join(from, entry.name), join(to, entry.name));
    else if (entry.name === 'index.html' || /\.xml$/.test(entry.name) || ['robots.txt', '_redirects'].includes(entry.name)) {
      symlinkSync(join(from, entry.name), join(to, entry.name));
    }
  }
}
const run = () => spawnSync(process.execPath, ['scripts/verify-i18n-dist.mjs', snapshot, '--json'], { encoding: 'utf8' });
try {
  mirror(source, snapshot);
  const baseline = run();
  assert.equal(baseline.status, 0, baseline.stdout + baseline.stderr);
  const home = join(snapshot, 'index.html');
  const original = readFileSync(home, 'utf8');
  // Break the symlink before writing; the input dist remains untouched.
  unlinkSync(home);
  for (const [name, transform, expected] of [
    ['canonical', (html) => html.replace('rel="canonical" href="https://teranovagroup.com/"', 'rel="canonical" href="https://example.invalid/"'), 'canonical must point'],
    ['lang', (html) => html.replace('<html lang="en"', '<html lang="ru"'), 'lang=ru; expected en'],
    ['alternate', (html) => html.replace(/<link rel="alternate" hreflang="ko"[^>]*>/, ''), 'hreflang cluster'],
  ]) {
    const mutated = transform(original);
    assert.notEqual(mutated, original, `${name}: fixture did not mutate`);
    writeFileSync(home, mutated);
    const result = run();
    assert.equal(result.status, 1, `${name}: verifier accepted broken HTML`);
    assert.ok(JSON.parse(result.stdout).failures.some((failure) => failure.includes(expected)), result.stdout);
    console.log(`${name}: detected`);
  }
  writeFileSync(home, original);
  assert.equal(run().status, 0, 'Restored snapshot should pass');
  assert.equal(readFileSync(join(source, 'index.html'), 'utf8'), original, 'Source dist changed');
  console.log('Dist verifier positive control and three independent mutations: PASS');
} finally { rmSync(snapshot, { recursive: true, force: true }); }
