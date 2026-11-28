/* Opis (inventory) of one built locale, read from an already-built dist/ tree
   plus the src/ data that feeds it. Pure read: no network call, no fetch of a
   live URL — the website worker that runs this records dist's commit and the
   time of the run as the measurement's provenance. Reused by
   compare-locale-opis.mjs to find real, measured gaps for a staged locale. */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';
import { publicLocaleCodes, isRootEnglishPath, logicalPath } from '../src/i18n/locale-policy.mjs';
import { leaves } from './locale-coverage.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const attrs = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((m) => [m[1], m[2]]));
const tags = (html, tag) => [...html.matchAll(new RegExp(`<${tag}\\b[^>]*>`, 'g'))].map((m) => attrs(m[0]));

function walkHtml(distRoot) {
  const pages = new Map();
  const visit = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const p = resolve(dir, entry.name);
      if (entry.isDirectory()) visit(p);
      else if (entry.name === 'index.html') {
        const urlPath = '/' + relative(distRoot, p).replace(/index\.html$/, '').split('\\').join('/');
        pages.set(urlPath, readFileSync(p, 'utf8'));
      }
    }
  };
  visit(distRoot);
  return pages;
}

/** Same locale-detection rule as verify-i18n-dist.mjs: root is `en` only at
    `/`, or at a declared root-English path; every other unprefixed path is
    the Russian section default, not an absence of an `en` page. */
function pageLocale(urlPath) {
  const segments = urlPath.split('/').filter(Boolean);
  const hasLocalePrefix = publicLocaleCodes.includes(segments[0]);
  if (urlPath === '/') return 'en';
  if (hasLocalePrefix) return segments[0];
  return isRootEnglishPath(urlPath) ? 'en' : 'ru';
}

export function inventoryLocale(locale, distRoot) {
  if (!existsSync(distRoot)) {
    return { locale, pages: { count: 0, list: [] }, blog: { count: 0, list: [] },
      catalogProfiles: { count: 0, list: [] }, images: { total: 0, missingAlt: 0, pages: [] },
      jsonLdPages: { count: 0, list: [] }, ogPages: { count: 0, list: [] }, metaPages: { count: 0, list: [] },
      llmsTxt: false, sitemap: false };
  }
  const all = walkHtml(distRoot);
  const pages = [];
  for (const urlPath of all.keys()) if (pageLocale(urlPath) === locale) pages.push(urlPath);
  pages.sort();

  const blog = pages.filter((p) => /\/blog\/[^/]+\/$/.test(p));
  const catalogProfiles = pages.filter((p) => /\/catalog\/[^/]+\/$/.test(p) && !/\/catalog\/[^/]+\/[^/]+\/$/.test(p));

  /* Per-page detail, not just site-wide aggregates: lets compare-locale-opis.mjs
     name exactly which page/image a gap is in, and tell a pre-existing en
     defect (missingAlt on a baseline image that still exists in the target)
     apart from a real target-locale gap (the baseline image has no match in
     the target page at all). */
  let imgTotal = 0, imgMissingAlt = 0;
  const jsonLdList = [], ogList = [], metaList = [], imagesByPage = [];
  for (const urlPath of pages) {
    const html = all.get(urlPath);
    const path = logicalPath(urlPath);
    const imgs = tags(html, 'img');
    imgTotal += imgs.length;
    imgMissingAlt += imgs.filter((img) => !img.alt || !img.alt.trim()).length;
    if (imgs.length) imagesByPage.push({ path, images: imgs.map((img, i) => ({
      key: `${img.src ?? '(no-src)'}#${i}`, hasAlt: Boolean(img.alt && img.alt.trim()) })) });
    if (/<script[^>]*application\/ld\+json/i.test(html)) jsonLdList.push(path);
    const metas = tags(html, 'meta');
    if (metas.some((m) => m.property === 'og:title') && metas.some((m) => m.property === 'og:description')) ogList.push(path);
    const hasTitle = /<title>[^<]+<\/title>/i.test(html);
    const hasDescription = metas.some((m) => m.name === 'description' && m.content && m.content.trim());
    if (hasTitle && hasDescription) metaList.push(path);
  }

  return {
    locale,
    pages: { count: pages.length, list: pages },
    blog: { count: blog.length, list: blog.map(logicalPath) },
    catalogProfiles: { count: catalogProfiles.length, list: catalogProfiles.map(logicalPath) },
    images: { total: imgTotal, missingAlt: imgMissingAlt, pages: imagesByPage },
    jsonLdPages: { count: jsonLdList.length, list: jsonLdList },
    ogPages: { count: ogList.length, list: ogList },
    metaPages: { count: metaList.length, list: metaList },
    llmsTxt: existsSync(resolve(distRoot, 'llms.txt')),
    sitemap: existsSync(resolve(distRoot, 'sitemap-index.xml')),
  };
}

/** PDF families in dist/docs: `<slug>-<type>-<lang>.pdf`, or an untyped,
    language-less file counted as its own one-off family. */
export function pdfFamilies(docsDir) {
  const files = existsSync(docsDir) ? readdirSync(docsDir).filter((f) => /\.pdf$/i.test(f)) : [];
  const families = new Map();
  for (const file of files) {
    const typed = file.match(/^(.+)-(presentation|terms|price|catalog)-([a-z]{2})\.pdf$/i);
    if (typed) {
      const [, slug, type, lang] = typed;
      const family = `${slug}-${type}`;
      if (!families.has(family)) families.set(family, { slug, type, langs: new Set() });
      families.get(family).langs.add(lang);
    } else {
      const family = file.replace(/\.pdf$/i, '');
      if (!families.has(family)) families.set(family, { slug: family, type: 'other', langs: new Set() });
    }
  }
  return families;
}

export async function dictionaryKeys(locale) {
  const file = resolve(root, `src/i18n/locales/${locale}.ts`);
  if (!existsSync(file)) return null;
  const out = await build({
    absWorkingDir: root,
    stdin: { contents: `export { ${locale} } from './src/i18n/locales/${locale}';`, resolveDir: root, loader: 'ts' },
    bundle: true, write: false, platform: 'node', format: 'esm', logLevel: 'silent',
  });
  const mod = await import(`data:text/javascript;base64,${Buffer.from(out.outputFiles[0].text).toString('base64')}`);
  return [...leaves(mod[locale]).keys()];
}

export function supplierDataFiles(locale) {
  const dir = resolve(root, 'src/data/suppliers-i18n');
  if (!existsSync(dir)) return [];
  return readdirSync(dir).filter((f) => f.endsWith(`.${locale}.json`)).map((f) => f.slice(0, -(`.${locale}.json`.length)));
}

/* A locale key that is absent, null, an empty string or an empty array is
   the same gap as having no translation at all: the render path falls back
   to ru either way (src/i18n/strict-content.ts localizedContent). */
function hasLocaleContent(value) {
  if (value === undefined || value === null) return false;
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === 'string') return value.trim().length > 0;
  if (typeof value === 'object') return Object.keys(value).length > 0;
  return true;
}

/** Scans every `*.lines.json` line entry for a missing `i18n[locale]` block.
    Source-only: reads src/data directly, independent of any dist build or
    baseline locale, since a line's own i18n map either has the locale or
    doesn't — there is nothing to diff against. */
export function linePageI18nGaps(locale) {
  const dir = resolve(root, 'src/data/suppliers-i18n');
  if (!existsSync(dir)) return { total: 0, missing: [] };
  let total = 0;
  const missing = [];
  for (const file of readdirSync(dir).filter((f) => f.endsWith('.lines.json'))) {
    const lines = JSON.parse(readFileSync(resolve(dir, file), 'utf8'));
    for (const line of lines) {
      total += 1;
      if (!hasLocaleContent(line.i18n?.[locale])) missing.push(`${line.supplierSlug}/${line.slug}`);
    }
  }
  return { total, missing: missing.sort() };
}

/** Scans every `*.catalog.json` group/item for a missing `[locale]` entry in
    lineI18n / nameI18n / volumeI18n / activesI18n — only where that field
    exists at all (not every catalog translates these), matching the same
    "field present but locale missing" gap caught by strict-content.ts. */
export function catalogI18nGaps(locale) {
  const dir = resolve(root, 'src/data/suppliers-i18n');
  if (!existsSync(dir)) return { total: 0, missing: [] };
  let total = 0;
  const missing = [];
  for (const file of readdirSync(dir).filter((f) => f.endsWith('.catalog.json'))) {
    const slug = file.slice(0, -'.catalog.json'.length);
    const groups = JSON.parse(readFileSync(resolve(dir, file), 'utf8'));
    groups.forEach((group, gi) => {
      if (group.lineI18n) {
        total += 1;
        if (!hasLocaleContent(group.lineI18n[locale])) missing.push(`${slug}.catalog[${gi}].lineI18n`);
      }
      (group.items ?? []).forEach((item, ii) => {
        for (const field of ['nameI18n', 'volumeI18n', 'activesI18n']) {
          if (item[field]) {
            total += 1;
            if (!hasLocaleContent(item[field][locale])) missing.push(`${slug}.catalog[${gi}].items[${ii}].${field}`);
          }
        }
      });
    });
  }
  return { total, missing: missing.sort() };
}

async function main() {
  const locale = process.argv[2];
  if (!locale) { console.error('Usage: inventory-locale.mjs <locale> [distDir]'); process.exitCode = 64; return; }
  const distRoot = resolve(root, process.argv[3] ?? 'dist');
  const report = inventoryLocale(locale, distRoot);
  const families = pdfFamilies(resolve(distRoot, 'docs'));
  const forLocale = [...families.entries()].filter(([, f]) => f.langs.has(locale));
  report.pdf = { totalFamiliesSite: families.size, forLocale: forLocale.length,
    families: forLocale.map(([name, f]) => ({ family: name, slug: f.slug, type: f.type })) };
  report.dictionaryKeys = (await dictionaryKeys(locale)) ?? null;
  const dictCount = report.dictionaryKeys === null ? null : report.dictionaryKeys.length;
  report.dictionaryKeyCount = dictCount;
  if (!process.argv.includes('--full-keys')) delete report.dictionaryKeys;
  report.supplierDataFiles = { count: supplierDataFiles(locale).length, list: supplierDataFiles(locale) };
  console.log(JSON.stringify(report, null, 2));
}

if (import.meta.url === `file://${process.argv[1]}`) await main();
