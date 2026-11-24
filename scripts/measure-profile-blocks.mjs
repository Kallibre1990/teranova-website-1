/* Measures the real content blocks of an already-saved supplier-profile HTML
   page by its literal section-label comments (e.g. `<!-- PRODUCT CATALOG -->`),
   which SupplierProfile.astro emits before every section regardless of
   locale or supplier data. Stands in for the generic block parser in
   _dispatcher/profile_plan_contract.py, which keys sections by `id` — these
   profile templates mark sections by `class`, so that parser always reports
   zero blocks here. Pure read of saved files, no live fetch, no edit to the
   shared dispatcher script (out of this task's scope). */
import { readFileSync } from 'node:fs';

export function measureBlocks(html) {
  const comments = [...html.matchAll(/<!--(.*?)-->/gs)].map((m) => m[1].trim());
  const labels = [];
  for (const comment of comments) {
    const words = comment.split(/\s+/);
    const labelWords = [];
    for (const word of words) {
      if (/^[A-Z0-9]+$/.test(word)) { labelWords.push(word); continue; }
      if (word === '+' && labelWords.length) continue;
      break;
    }
    if (labelWords.length && labelWords[0].length >= 3) labels.push(labelWords.join(' '));
  }
  return labels;
}

/** Gaps against an explicit baseline locale's block list — never an
    intersection of all locales, which would silently absorb a real gap into
    a smaller "common" set instead of naming it (the failure this script
    replaces: an empty blocks list reads as "no gap" instead of "unmeasured").
    A locale missing a block the baseline has gets that block named in its
    own list; a locale matching the baseline gets an empty list. */
export function blockGaps(byLocale, baselineLocale) {
  const baseline = byLocale[baselineLocale];
  if (!baseline) throw new Error(`Unknown baseline locale: ${baselineLocale}`);
  const missingByLocale = {};
  for (const locale of Object.keys(byLocale)) {
    missingByLocale[locale] = locale === baselineLocale ? [] : baseline.filter((label) => !byLocale[locale].includes(label));
  }
  return { baselineLocale, baselineBlocks: baseline, missingByLocale };
}

function main() {
  const [baselineLocale, ...files] = process.argv.slice(2);
  if (!baselineLocale || !files.length) {
    console.error('Usage: measure-profile-blocks.mjs <baseline-locale> <locale=file.html> [...]');
    process.exitCode = 64; return;
  }
  const byLocale = {};
  for (const arg of files) {
    const [locale, file] = arg.split('=');
    if (!locale || !file) { console.error(`Bad argument, expected locale=path: ${arg}`); process.exitCode = 64; return; }
    byLocale[locale] = measureBlocks(readFileSync(file, 'utf8'));
  }
  if (!byLocale[baselineLocale]) { console.error(`Baseline locale ${baselineLocale} not among the given files`); process.exitCode = 64; return; }
  console.log(JSON.stringify({ blocks: byLocale, ...blockGaps(byLocale, baselineLocale) }, null, 2));
}

if (import.meta.url === `file://${process.argv[1]}`) main();
