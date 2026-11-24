/* Measures the real content blocks of an already-saved supplier-profile HTML
   page. SupplierProfile.astro marks each block with a literal section-label
   comment (e.g. `<!-- PRODUCT CATALOG -->`), but that comment is static
   template text: it renders unconditionally even when the `<section>` that
   follows is wrapped in a truthy check and skipped (e.g. `<!-- PROMO -->` is
   written outside `{c.promo && (<section>...)}` in the source, so it survives
   in the output HTML with no promo section behind it, and a block whose
   `<section>` was stripped from the saved HTML but whose comment survived
   looks identical to a block that was never removed). A comment sighting is
   therefore not proof of content: this reads each label's window — from its
   comment to the next label comment (or end of file) — and only counts the
   block as present when that window actually contains a non-empty
   `<section>…</section>` pair. Stands in for the generic block parser in
   _dispatcher/profile_plan_contract.py, which keys sections by `id` — these
   profile templates mark sections by `class`, so that parser always reports
   zero blocks here. Pure read of saved files, no live fetch, no edit to the
   shared dispatcher script (out of this task's scope). */
import { readFileSync } from 'node:fs';

function labelAt(comment) {
  const words = comment.split(/\s+/);
  const labelWords = [];
  for (const word of words) {
    if (/^[A-Z0-9]+$/.test(word)) { labelWords.push(word); continue; }
    if (word === '+' && labelWords.length) continue;
    break;
  }
  return labelWords.length && labelWords[0].length >= 3 ? labelWords.join(' ') : null;
}

export function measureBlocks(html) {
  const marks = [...html.matchAll(/<!--(.*?)-->/gs)]
    .map((m) => ({ label: labelAt(m[1].trim()), end: m.index + m[0].length, start: m.index }))
    .filter((m) => m.label);
  const labels = [];
  for (let i = 0; i < marks.length; i++) {
    const windowEnd = i + 1 < marks.length ? marks[i + 1].start : html.length;
    const window = html.slice(marks[i].end, windowEnd);
    const section = window.match(/<section\b[^>]*>([\s\S]*?)<\/section>/);
    const hasContent = section && section[1].replace(/<[^>]+>/g, '').trim().length > 0;
    if (hasContent) labels.push(marks[i].label);
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
