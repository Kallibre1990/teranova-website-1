/* Compares a saved baseline opis (scripts/inventory-locale.mjs --full-keys
   output for a complete locale) against a measured target locale and lists,
   per category, what the target is missing. Used to confirm gaps for a
   staged locale (e.g. ar) before any content for it is written — a target
   that does not exist yet in dist/src is a 100% measured gap, not an
   invented one. Never creates content; read-only comparison. */
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { inventoryLocale, pdfFamilies, dictionaryKeys, supplierDataFiles } from './inventory-locale.mjs';
import { logicalPath } from '../src/i18n/locale-policy.mjs';

/* Kept in sync by hand with scripts/check-confidential-prices.mjs CONFIDENTIAL.
   Not imported from there: that module's body runs a build-gate check with
   its own process.exit(1) as a side effect of import, which must not leak
   into a read-only comparison. */
const PRICE_FORBIDDEN_SUPPLIERS = ['cellaheal', 'cheon365', 'feelody'];

function diffList(baseline, target) {
  const targetSet = new Set(target);
  return baseline.filter((item) => !targetSet.has(item));
}

export async function compareLocale(baseline, locale, distRoot) {
  const target = inventoryLocale(locale, distRoot);
  const baselineLogicalPages = baseline.pages.list.map(logicalPath);
  const targetLogicalPages = target.pages.list.map(logicalPath);

  /* Baseline PDF families come from the saved opis (baseline.pdf.families),
     never recomputed from the current dist/docs: a family that existed when
     the baseline was measured and later disappears must still show up as a
     gap, not silently vanish from both sides of the diff. Only the target
     side is read live, since the target locale has no saved opis yet. */
  if (!baseline.pdf?.families) throw new Error('Baseline must include pdf.families (regenerate with current inventory-locale.mjs)');
  const baselineFamilyInfo = new Map(baseline.pdf.families.map((f) => [f.family, f]));
  const baselineFamilies = [...baselineFamilyInfo.keys()];
  const currentFamilies = pdfFamilies(resolve(distRoot, 'docs'));
  const targetFamilyNames = new Set([...currentFamilies.entries()].filter(([, f]) => f.langs.has(locale)).map(([name]) => name));
  const missingPdfFamilies = baselineFamilies.filter((name) => {
    if (targetFamilyNames.has(name)) return false;
    const info = baselineFamilyInfo.get(name);
    return !(info.type === 'price' && PRICE_FORBIDDEN_SUPPLIERS.includes(info.slug));
  });
  const excludedPriceFamilies = baselineFamilies.filter((name) => {
    const info = baselineFamilyInfo.get(name);
    return info.type === 'price' && PRICE_FORBIDDEN_SUPPLIERS.includes(info.slug) && !targetFamilyNames.has(name);
  });

  const baselineDictKeys = baseline.dictionaryKeys ?? [];
  const targetDictKeys = (await dictionaryKeys(locale)) ?? [];
  const missingDictKeys = diffList(baselineDictKeys, targetDictKeys);

  const baselineSuppliers = baseline.supplierDataFiles.list;
  const targetSuppliers = supplierDataFiles(locale);
  const missingSupplierData = diffList(baselineSuppliers, targetSuppliers);

  return {
    baselineLocale: baseline.locale,
    targetLocale: locale,
    pages: { baseline: baselineLogicalPages.length, target: targetLogicalPages.length,
      missing: diffList(baselineLogicalPages, targetLogicalPages) },
    blog: { baseline: baseline.blog.count, target: target.blog.count,
      missing: diffList(baseline.blog.list, target.blog.list) },
    catalogProfiles: { baseline: baseline.catalogProfiles.count, target: target.catalogProfiles.count,
      missing: diffList(baseline.catalogProfiles.list, target.catalogProfiles.list) },
    pdfFamilies: { baseline: baselineFamilies.length, target: targetFamilyNames.size,
      missing: missingPdfFamilies, excludedPriceForbidden: excludedPriceFamilies },
    dictionaryKeys: { baseline: baselineDictKeys.length, target: targetDictKeys.length,
      missingCount: missingDictKeys.length, missing: missingDictKeys },
    supplierDataFiles: { baseline: baselineSuppliers.length, target: targetSuppliers.length,
      missing: missingSupplierData },
    images: { baselineTotal: baseline.images.total, baselineMissingAlt: baseline.images.missingAlt,
      targetTotal: target.images.total, targetMissingAlt: target.images.missingAlt },
    jsonLdPages: { baseline: baseline.jsonLdPages, target: target.jsonLdPages },
    ogPages: { baseline: baseline.ogPages, target: target.ogPages },
    metaPages: { baseline: baseline.metaPages, target: target.metaPages },
    llmsTxt: { baseline: baseline.llmsTxt, target: target.llmsTxt },
    sitemap: { baseline: baseline.sitemap, target: target.sitemap },
  };
}

async function main() {
  const [, , baselinePath, locale, distArg] = process.argv;
  if (!baselinePath || !locale) {
    console.error('Usage: compare-locale-opis.mjs <baseline-opis.json> <locale> [distDir]');
    process.exitCode = 64;
    return;
  }
  if (!existsSync(baselinePath)) { console.error(`Baseline not found: ${baselinePath}`); process.exitCode = 66; return; }
  const baseline = JSON.parse(readFileSync(resolve(baselinePath), 'utf8'));
  if (!baseline.dictionaryKeys) { console.error('Baseline must be generated with --full-keys'); process.exitCode = 65; return; }
  const distRoot = resolve(process.cwd(), distArg ?? 'dist');
  const report = await compareLocale(baseline, locale, distRoot);
  console.log(JSON.stringify(report, null, 2));
}

if (import.meta.url === `file://${process.argv[1]}`) await main();
