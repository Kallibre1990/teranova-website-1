#!/usr/bin/env node
/* Audit the built site for visual gaps, in every language.
 *
 * Checks per page: product-line cards with and without a photo, article covers,
 * and — the one that actually bites — image paths that point at a file which is
 * not in dist. A missing file is invisible in the HTML and shows up as a blank
 * box for the buyer.
 *
 *   node scripts/audit-visuals.mjs            # after npm run build
 */
import { readFile, readdir, access } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const DIST = path.join(ROOT, 'dist');
const LANGS = ['ru', 'en', 'ko', 'zh', 'ja', 'it', 'de', 'fr', 'tr', 'es', 'pt'];
const SUPPLIERS = [
  'sante',
  'dreamcos',
  'dongdonggurimoo',
  'ck-regeon',
  'jetsglobal',
  'pineworld',
  'kift',
  'icelmedi',
  'three-days-love',
  'licorne',
];

const pagePath = (lang, rest) => path.join(DIST, lang === 'ru' ? '' : lang, rest, 'index.html');
const count = (h, re) => (h.match(re) ?? []).length;

/* Every local image the page asks for, so a path that survives a rename can be
   caught before a buyer sees the empty frame. */
function imageRefs(html) {
  const out = new Set();
  for (const m of html.matchAll(/(?:src|srcset)="([^"]+)"/g)) {
    for (const part of m[1].split(',')) {
      const url = part.trim().split(' ')[0];
      if (url.startsWith('/') && /\.(webp|png|jpe?g|svg|avif)$/i.test(url)) out.add(url);
    }
  }
  return [...out];
}

const missing = new Map(); // url -> pages
const rows = [];
let pagesChecked = 0;

for (const slug of SUPPLIERS) {
  for (const lang of LANGS) {
    const file = pagePath(lang, `catalog/${slug}`);
    if (!existsSync(file)) {
      rows.push({ slug, lang, err: 'страницы нет' });
      continue;
    }
    const html = await readFile(file, 'utf8');
    pagesChecked++;
    const withPhoto = count(html, /sp-line__shot/g);
    const withoutPhoto = count(html, /sp-line__ic/g);
    const covers = count(html, /class="bcv /g);
    for (const url of imageRefs(html)) {
      const onDisk = path.join(DIST, decodeURIComponent(url));
      try {
        await access(onDisk);
      } catch {
        if (!missing.has(url)) missing.set(url, []);
        missing.get(url).push(`${lang}/${slug}`);
      }
    }
    rows.push({ slug, lang, withPhoto, withoutPhoto, covers });
  }
}

/* Same three numbers for the blog listing — that is where covers earn their keep. */
const blogRows = [];
for (const lang of LANGS) {
  const file = pagePath(lang, 'blog');
  if (!existsSync(file)) continue;
  const html = await readFile(file, 'utf8');
  pagesChecked++;
  blogRows.push({ lang, covers: count(html, /class="bcv /g), drawn: count(html, /class="bha"/g) });
  for (const url of imageRefs(html)) {
    const onDisk = path.join(DIST, decodeURIComponent(url));
    try {
      await access(onDisk);
    } catch {
      if (!missing.has(url)) missing.set(url, []);
      missing.get(url).push(`${lang}/blog`);
    }
  }
}

console.log('ЛИНЕЙКИ НА СТРАНИЦАХ ПОСТАВЩИКОВ (с фото / без фото), по языкам\n');
for (const slug of SUPPLIERS) {
  const mine = rows.filter((r) => r.slug === slug && !r.err);
  const shapes = new Set(mine.map((r) => `${r.withPhoto}/${r.withoutPhoto}`));
  const flag = shapes.size > 1 ? '  ⚠ РАЗНОБОЙ ПО ЯЗЫКАМ' : '';
  const sample = mine[0];
  console.log(
    `${slug.padEnd(18)} ${String(sample?.withPhoto ?? '-').padStart(2)} с фото, ${String(sample?.withoutPhoto ?? '-').padStart(2)} без` +
      `   обложек статей: ${sample?.covers ?? '-'}   языков: ${mine.length}${flag}`,
  );
  if (shapes.size > 1) for (const r of mine) console.log(`      ${r.lang}: ${r.withPhoto}/${r.withoutPhoto}`);
}

console.log('\nСПИСОК СТАТЕЙ (товарные обложки / нарисованные), по языкам');
const shapes = new Set(blogRows.map((r) => `${r.covers}/${r.drawn}`));
for (const r of blogRows) console.log(`  ${r.lang}: ${r.covers} товарных, ${r.drawn} нарисованных`);
if (shapes.size > 1) console.log('  ⚠ РАЗНОБОЙ ПО ЯЗЫКАМ');

console.log(`\nПРОВЕРЕНО СТРАНИЦ: ${pagesChecked}`);
if (missing.size) {
  console.log(`\n⚠ БИТЫЕ КАРТИНКИ: ${missing.size}`);
  for (const [url, where] of missing) console.log(`   ${url}  ← ${where.slice(0, 3).join(', ')}${where.length > 3 ? ` и ещё ${where.length - 3}` : ''}`);
} else {
  console.log('\nБитых картинок нет.');
}
