import assert from 'node:assert/strict';
import { writeFileSync, rmSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { linePageI18nGaps, catalogI18nGaps } from './inventory-locale.mjs';

const dir = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'src/data/suppliers-i18n');
const linesFixture = resolve(dir, '__fixture-048__.lines.json');
const catalogFixture = resolve(dir, '__fixture-048__.catalog.json');

const cleanup = () => { for (const f of [linesFixture, catalogFixture]) rmSync(f, { force: true }); };
cleanup();

try {
  // Positive control: real repo data on 2026-11-28, before T-20261128-043..047
  // land, must show the exact gap T-20261128-041 found — proving the check
  // detects a real, already-known regression without a human reading pages.
  const realLines = linePageI18nGaps('ar');
  assert.ok(realLines.missing.includes('feelody/day-supreme'), 'known ar gap must be caught');
  const realCatalog = catalogI18nGaps('ar');
  assert.ok(realCatalog.missing.includes('veo-biotech.catalog[0].lineI18n'), 'known ar gap must be caught');

  // Negative control: *.lines.json i18n blocks (seoTitle/tagline/about —
  // real translated page copy) carry an explicit `en` entry everywhere, so
  // this must come back clean. (Unlike lines, catalog.json's nameI18n /
  // volumeI18n / lineI18n / activesI18n never carry `en` by design —
  // strict-content.ts's catalogText() reads the shared `source` field
  // directly for en and never looks at the i18n map — so an `en` check
  // there would flag every field as "missing" without that being a real
  // gap; this function stays correct for `ar` and any other translated
  // locale, just not meaningful for `en` on catalog data.)
  assert.equal(linePageI18nGaps('en').missing.length, 0);

  // Fixture positive/negative control for the two new functions themselves.
  writeFileSync(linesFixture, JSON.stringify([
    { slug: 'complete', supplierSlug: '__fixture-048__', i18n: { ru: {}, ar: { tagline: 'ok' } } },
    { slug: 'missing-key', supplierSlug: '__fixture-048__', i18n: { ru: {} } },
    { slug: 'empty-object', supplierSlug: '__fixture-048__', i18n: { ru: {}, ar: {} } },
  ]));
  const fixtureLines = linePageI18nGaps('ar');
  assert.equal(fixtureLines.missing.includes('__fixture-048__/complete'), false);
  assert.ok(fixtureLines.missing.includes('__fixture-048__/missing-key'));
  assert.ok(fixtureLines.missing.includes('__fixture-048__/empty-object'));

  writeFileSync(catalogFixture, JSON.stringify([
    { line: 'Group', lineI18n: { ru: 'Группа', ar: 'مجموعة' }, items: [
      { name: 'A', nameI18n: { ru: 'А' } },
      { name: 'B', volumeI18n: { ru: '50 ml', ar: '' } },
      { name: 'C', activesI18n: { ru: ['x'], ar: ['س'] } },
      { name: 'D' },
    ] },
    { line: 'Untranslated group', items: [{ name: 'E' }] },
  ]));
  const fixtureCatalog = catalogI18nGaps('ar');
  const slug = '__fixture-048__';
  // Scope to this fixture's own entries: the real suppliers scanned alongside
  // it legitimately have their own items[3]/catalog[1] gaps (see the known-
  // regression assertion above), so a bare .some() over the whole list would
  // pass or fail on unrelated real data instead of this fixture.
  const ownGaps = fixtureCatalog.missing.filter((m) => m.startsWith(`${slug}.`));
  assert.equal(ownGaps.includes(`${slug}.catalog[0].lineI18n`), false);
  assert.ok(ownGaps.includes(`${slug}.catalog[0].items[0].nameI18n`));
  assert.ok(ownGaps.includes(`${slug}.catalog[0].items[1].volumeI18n`));
  assert.equal(ownGaps.includes(`${slug}.catalog[0].items[2].activesI18n`), false);
  assert.equal(ownGaps.some((m) => m.includes('items[3]')), false);
  assert.equal(ownGaps.some((m) => m.includes('catalog[1]')), false);
  assert.equal(ownGaps.length, 2);

  console.log('compare-locale-opis ar i18n gaps: known regression, negative control, field-level fixture PASS');
} finally {
  cleanup();
}
