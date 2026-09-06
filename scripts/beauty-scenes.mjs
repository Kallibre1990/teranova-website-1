/* Сцены-подложки собираются из НАСТОЯЩИХ снимков товара поставщиков.
   Это не доказательство визита и не съёмка конкретного места — это витрина
   товара, который реально есть в каталоге. Кадры с кривыми пропорциями
   (страничные полосы 1:3) отбрасываем: в мозаике они дают лапшу. */
import { readFileSync, readdirSync, existsSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';

const ROOT = process.cwd();
const SHAPE = JSON.parse(readFileSync(join(ROOT, 'src/data/photo-shape.json'), 'utf8'));
const OUT = join(ROOT, 'public/img/beauty/scenes');
mkdirSync(OUT, { recursive: true });
const TMP = process.env.TMPDIR + 'scn';
mkdirSync(TMP, { recursive: true });

const POOLS = {
  assortment: ['sante', 'licorne', 'three-days-love'],
  brands:     ['dreamcos', 'dongdonggurimoo', 'joycos'],
  pro:        ['icelmedi', 'doobom', 'skinroom'],
  actives:    ['rnh-bio', 'biopt', 'glow-pumpkin', 'aberede'],
  packaging:  ['cocospack', 'cubecap'],
  care:       ['slow-lounge', 'maoom', 'loobee', 'hanscos'],
  launch:     ['joycos', 'sante', 'dreamcos', 'kift'],
};

const wellShaped = (rel) => { const r = SHAPE[rel]; return r === undefined ? false : r >= 0.7 && r <= 1.45; };

const pick = (slugs, n) => {
  const perSlug = slugs.map((slug) => {
    const dir = join(ROOT, 'public/img/suppliers', slug);
    if (!existsSync(dir)) return [];
    /* Каталоги вложенные: gallery — живые кадры, products/lines — товар,
       cutout — вырезка на белом. Для подложки годится живое и товар;
       вырезка даёт белые дыры, поэтому идёт последней. */
    const walk = (d, acc = []) => {
      for (const e of readdirSync(d, { withFileTypes: true })) {
        const full = join(d, e.name);
        if (e.isDirectory()) walk(full, acc);
        else if (/\.(jpe?g|png|webp)$/i.test(e.name)) acc.push(full);
      }
      return acc;
    };
    const rank = (f) => (f.includes('/gallery/') ? 0 : f.includes('/cutout/') ? 2 : 1);
    return walk(dir)
      .map((f) => f.slice(join(ROOT, 'public').length))
      .filter(wellShaped)
      .sort((a, b) => rank(a) - rank(b));
  });
  // по очереди из каждой компании — чтобы одна не заняла всю мозаику
  const out = [];
  for (let i = 0; out.length < n; i++) {
    let added = false;
    for (const list of perSlug) if (list[i]) { out.push(list[i]); added = true; if (out.length === n) break; }
    if (!added) break;
  }
  return out;
};

for (const [name, slugs] of Object.entries(POOLS)) {
  const files = pick(slugs, 12);
  if (files.length < 6) { console.log(`ПРОПУСК ${name}: только ${files.length} годных кадров`); continue; }
  const tiles = files.map((rel, i) => {
    const src = join(ROOT, 'public', rel.replace(/^\//, ''));
    const tile = join(TMP, `${name}-${i}.png`);
    execFileSync('magick', [src, '-resize', '520x520^', '-gravity', 'center', '-extent', '520x520',
      '-background', '#0b1b35', '-alpha', 'remove', tile]);
    return tile;
  });
  /* Две строки, а не одна лента: полоса 12:1 при `cover` растягивается втрое
     и мылит кадр. Мозаика 6x2 даёт ~3:1 и попадает в полосу почти без апскейла. */
  const rowA = join(TMP, `${name}-rowA.png`);
  const rowB = join(TMP, `${name}-rowB.png`);
  execFileSync('magick', [...tiles.slice(0, 6), '+append', rowA]);
  execFileSync('magick', [...tiles.slice(6, 12), '+append', rowB]);
  const out = join(OUT, `${name}.webp`);
  execFileSync('magick', [rowA, rowB, '-append',
    '-resize', '2000x',
    '-blur', '0x2.2',          // лёгкая мягкость, кадр остаётся узнаваемым
    '-modulate', '62,132,100', // темнее и насыщеннее: слой добавляет цвет, а не свет
    '-fill', '#0b1b35', '-colorize', '46', // связь с бархатной рамой
    '-quality', '80', out]);
  const kb = Math.round(execFileSync('stat', ['-f%z', out]).toString().trim() / 1024);
  console.log(`${name}: ${files.length} настоящих кадров → ${kb} KB  [${slugs.join(', ')}]`);
}
