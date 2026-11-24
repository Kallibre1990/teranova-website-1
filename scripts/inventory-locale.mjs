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
      catalogProfiles: { count: 0, list: [] }, images: { total: 0, missingAlt: 0 },
      jsonLdPages: 0, ogPages: 0 };
  }
  const all = walkHtml(distRoot);
  const pages = [];
  for (const urlPath of all.keys()) if (pageLocale(urlPath) === locale) pages.push(urlPath);
  pages.sort();

  const blog = pages.filter((p) => /\/blog\/[^/]+\/$/.test(p));
  const catalogProfiles = pages.filter((p) => /\/catalog\/[^/]+\/$/.test(p) && !/\/catalog\/[^/]+\/[^/]+\/$/.test(p));

  let imgTotal = 0, imgMissingAlt = 0, jsonLdPages = 0, ogPages = 0;
  for (const urlPath of pages) {
    const html = all.get(urlPath);
    const imgs = tags(html, 'img');
    imgTotal += imgs.length;
    imgMissingAlt += imgs.filter((img) => !img.alt || !img.alt.trim()).length;
    if (/<script[^>]*application\/ld\+json/i.test(html)) jsonLdPages++;
    const metas = tags(html, 'meta');
    if (metas.some((m) => m.property === 'og:title') && metas.some((m) => m.property === 'og:description')) ogPages++;
  }

  return {
    locale,
    pages: { count: pages.length, list: pages },
    blog: { count: blog.length, list: blog.map(logicalPath) },
    catalogProfiles: { count: catalogProfiles.length, list: catalogProfiles.map(logicalPath) },
    images: { total: imgTotal, missingAlt: imgMissingAlt },
    jsonLdPages, ogPages,
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
  report.llmsTxt = existsSync(resolve(distRoot, 'llms.txt'));
  report.sitemap = existsSync(resolve(distRoot, 'sitemap-index.xml'));
  console.log(JSON.stringify(report, null, 2));
}

if (import.meta.url === `file://${process.argv[1]}`) await main();
