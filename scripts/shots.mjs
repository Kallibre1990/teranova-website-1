#!/usr/bin/env node
/* Screenshot a list of local pages with headless Chrome, for before/after review.
 *
 *   node scripts/shots.mjs <outDir> <url> [url ...]
 *
 * Animations are disabled through prefers-reduced-motion, so shots are stable
 * and never catch a half-finished fade. SHOT_SIZE=390,1400 for a phone-width pass.
 * Output: <outDir>/<n>-<slug>.png
 */
import { execFile } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
import { promisify } from 'node:util';
import path from 'node:path';

const run = promisify(execFile);
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const [outDir, ...urls] = process.argv.slice(2);
if (!outDir || !urls.length) {
  console.error('нужно: node scripts/shots.mjs <папка> <url> [url ...]');
  process.exit(1);
}
await mkdir(outDir, { recursive: true });

let i = 0;
for (const url of urls) {
  i++;
  const name = `${String(i).padStart(2, '0')}-${(url.replace(/\/$/, '').split('/').pop() || 'index').slice(0, 40)}.png`;
  const file = path.join(outDir, name);
  await run(CHROME, [
    '--headless',
    '--disable-gpu',
    '--hide-scrollbars',
    '--force-prefers-reduced-motion',
    `--window-size=${process.env.SHOT_SIZE || '1440,1500'}`,
    '--virtual-time-budget=6000',
    `--screenshot=${file}`,
    url,
  ]).catch((e) => console.error(`! ${url}: ${e.message.split('\n')[0]}`));
  console.log(`${name}  ←  ${url}`);
}
