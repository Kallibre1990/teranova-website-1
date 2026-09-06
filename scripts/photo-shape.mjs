#!/usr/bin/env node
/* Замер пропорций всех снимков поставщиков → src/data/photo-shape.json.
 *
 * Зачем. В каталоге 522 снимка, и 40 из них вырезаны из PDF узкими
 * полосками: до 1:3,8. В квадратной плашке такой кадр либо превращается в
 * ниточку, либо обрезается. Выбирать снимок для витрины вслепую нельзя —
 * нужен известный размер. Файл пересобирается этой командой, руками не
 * правится.
 */
import { readdirSync, statSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';

const ROOT = 'public/img/suppliers';
const out = {};
let n = 0;

const walk = (dir) => {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(jpe?g|png|webp)$/i.test(e)) out[p.replace('public', '')] = p;
  }
};
if (!existsSync(ROOT)) { console.error('нет папки', ROOT); process.exit(1); }
walk(ROOT);

const shape = {};
for (const [url, file] of Object.entries(out)) {
  try {
    const m = await sharp(file).metadata();
    if (m.width && m.height) { shape[url] = Number((m.width / m.height).toFixed(3)); n++; }
  } catch { /* нечитаемый файл пропускаем молча: он и так не покажется */ }
}
writeFileSync('src/data/photo-shape.json', JSON.stringify(shape, null, 0) + '\n');
console.log(`записано ${n} пропорций в src/data/photo-shape.json`);
