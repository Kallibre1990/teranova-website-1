/* Подложки страницы «Уход за волосами и кожей головы».
 *
 *   node scripts/hair-scenes.mjs
 *
 * Правило этой страницы: сюжет строго по теме. На витрине косметики подложка
 * собирается из товара всей категории (scripts/beauty-scenes.mjs), здесь так
 * нельзя — тональные кремы и солнцезащита за блоком про шампуни читаются как
 * случайный набор. Поэтому кадры перечислены поимённо: каждый — настоящий
 * снимок средства для волос или кожи головы из каталога.
 *
 * Кадры не являются доказательством производства или визита. Это витрина
 * товара, который в каталоге действительно есть.
 */
import { existsSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';

const ROOT = process.cwd();
const OUT = join(ROOT, 'public/img/beauty/scenes');
mkdirSync(OUT, { recursive: true });
const TMP = (process.env.TMPDIR || '/tmp/') + 'hairscn';
mkdirSync(TMP, { recursive: true });

/* Порядок кадров чередует компании: две плитки одной марки рядом читаются
   как её реклама, а подборка должна показывать категорию, а не фаворита. */
const SHELVES = {
  'hair-shelf-a': [
    'ck-regeon/products/heribon-wnt-on-scalp-scaler.jpg',
    'dreamcos/products/duftndoft-perfume-hair-shampoo.jpg',
    'rnh-bio/products/luna-scalp-booster-activator.jpg',
    'hanscos/products/essential-repair-shampoo-rinse.jpg',
    'ck-regeon/products/heribon-wnt-on-hair-treatment.jpg',
    'skinroom/products/lapin-dreaming-shampoo-conditioner.jpg',
    'rnh-bio/products/scalp-booster-ampoule-set.jpg',
    'dreamcos/products/duftndoft-caffeine-hair-tonic.jpg',
    'ck-regeon/products/heribon-wnt-on-shampoo.jpg',
    'sante/products/azulene-soother-shampoo.png',
    'rnh-bio/products/noggin-scalp-exonova.jpg',
    'ck-regeon/products/ptd-dbm-hair-booster.jpg',
  ],
  'hair-shelf-b': [
    'ck-regeon/products/heribon-wnt-on-hair-tonic.jpg',
    'rnh-bio/products/scalp-booster-ampoule.jpg',
    'dreamcos/products/duftndoft-perfume-hair-rinse.jpg',
    'sante/products/azulene-soother-treatment.png',
    'hanscos/products/pure-sphere-perfume-hair-mist.jpg',
    'rnh-bio/products/scalp-booster-set.jpg',
    'dreamcos/products/duftndoft-hair-body-mist.jpg',
    'ck-regeon/products/heribon-wnt-on-scalp-scaler.jpg',
  ],
};

for (const [name, rels] of Object.entries(SHELVES)) {
  const missing = rels.filter((r) => !existsSync(join(ROOT, 'public/img/suppliers', r)));
  if (missing.length) { console.error(`${name}: нет файлов — ${missing.join(', ')}`); process.exitCode = 1; continue; }

  const tiles = rels.map((rel, i) => {
    const tile = join(TMP, `${name}-${i}.png`);
    execFileSync('magick', [join(ROOT, 'public/img/suppliers', rel),
      '-resize', '520x520^', '-gravity', 'center', '-extent', '520x520',
      '-background', '#0b1b35', '-alpha', 'remove', tile]);
    return tile;
  });

  /* Две строки, а не одна лента: полоса 12:1 при `cover` растягивается и мылит
     кадр. Мозаика в две строки даёт близкое к 3:1 и попадает в полосу почти
     без апскейла. */
  const half = tiles.length / 2;
  const rowA = join(TMP, `${name}-A.png`), rowB = join(TMP, `${name}-B.png`);
  execFileSync('magick', [...tiles.slice(0, half), '+append', rowA]);
  execFileSync('magick', [...tiles.slice(half), '+append', rowB]);

  const out = join(OUT, `${name}.webp`);
  execFileSync('magick', [rowA, rowB, '-append', '-resize', '2000x',
    '-blur', '0x2.4',            // мягкость: подложка, а не вторая витрина
    '-modulate', '58,124,100',   // темнее и насыщеннее — слой даёт цвет, не свет
    '-fill', '#0b1b35', '-colorize', '52',  // связь с бархатной рамой
    '-quality', '80', out]);

  const size = execFileSync('magick', ['identify', '-format', '%wx%h', out]).toString();
  const kb = Math.round(execFileSync('stat', ['-f%z', out]).toString().trim() / 1024);
  console.log(`${name}: ${rels.length} настоящих кадров → ${size}, ${kb} KB`);
}
