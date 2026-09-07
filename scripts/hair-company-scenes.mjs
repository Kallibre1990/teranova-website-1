/* Подложка за блоком каждой компании в подборке «Волосы и кожа головы».
 *
 *   node scripts/hair-company-scenes.mjs
 *
 * Требование Антона 07.09.2026: «не должны быть одни и те же фото на заднем
 * фоне». Один общий кадр на восемь блоков подряд читается как повтор.
 *
 * Решение: четыре наших редакционных мастера сняты на ОДНОМ И ТОМ ЖЕ синем
 * бархате — постановка с волосами и три ботанических кадра сырья. Из них
 * нарезаются восемь разных сюжетов: волна волос, поднос с ампулой и пипеткой,
 * гребень с розмарином, камелия, солодка, её листья, бабчи с золотым папоротником,
 * куркума. Кадры разные, но серия одна, поэтому страница не рассыпается.
 *
 * Почему не товар компании: сначала я собрал подложки из снимков товара каждой
 * марки. На бархате они читались серой плитой — у товарной съёмки светлый фон,
 * и размытие превращает его в прямоугольник без сюжета. Плюс стена товара за
 * блоком компании читается как заявление о размере ассортимента, которого мы
 * не делали.
 *
 * Ни один кадр не выдаётся за съёмку компании, её завода или её товара:
 * это наши редакционные натюрморты, все с пустым `alt`.
 */
import { existsSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join, dirname, resolve } from 'node:path';

const ROOT = process.cwd();
const OUT = join(ROOT, 'public/img/beauty/scenes');

/* Часть мастеров лежит вне сайта, в доказательствах координации: по правилу
   манифеста мастер-PNG в сборку не попадают. Ищем каталог вверх по дереву,
   чтобы скрипт работал и из основного чекаута, и из worktree. */
const findEvidence = () => {
  for (let d = ROOT; d !== dirname(d); d = dirname(d)) {
    const c = join(d, 'AI_COORDINATION/Codex/evidence/T-20260907-010');
    if (existsSync(c)) return c;
  }
  return null;
};
const EVIDENCE = findEvidence();
const master = (rel) =>
  rel.startsWith('evidence/')
    ? (EVIDENCE ? resolve(EVIDENCE, rel.slice('evidence/'.length)) : '')
    : join(ROOT, 'public/img/beauty', rel);
mkdirSync(OUT, { recursive: true });
const TMP = (process.env.TMPDIR || '/tmp/') + 'hcscn';
mkdirSync(TMP, { recursive: true });

const VELVET = '#0b1b35';
const W = 1600, H = 900;   // кадр под широкий блок
const PANEL = 1000;        // сюжет занимает правую часть, слева стоит текст
const FADE = 300;          // левый край панели растворяется в бархат
const EDGE = 90;           // правый край — чтобы не было видно границы кадра
const VFADE = 150;         // верх и низ

/* slug → [мастер, вырез из мастера, подпись для манифеста].

   ПРАВИЛО. Узнаваемое растение рядом с названием компании читается как связь
   этого сырья с этой компанией — пустой `alt` и оговорка в манифесте посетителю
   не видны. Поэтому растение допускается только там, где связь подтверждена
   опубликованными данными самой компании.

   Такой случай один: Sunpure — куркума. В `sunpure.catalog.json` есть
   Tetrahydrocurcumin с Curcuma Longa (Turmeric) Rhizome и Turmeric Oil.

   За остальными семью блоками стоят предметы и текстуры по теме страницы:
   ампула, пипетка, гребень, аппликатор для кожи головы, пряди волос, бархат.
   Ни один из них не утверждает ничего о компании.

   История правила: сначала за DONGDONGGURIMOO стоял корень солодки — я вывел
   его из фразы про корейскую фитотерапию, но в данных компании солодки нет.
   Затем за RNH BIO стояли семена бабчи, потом цветы куркумы — та же ошибка в
   меньшем масштабе. Codex 07.09.2026 потребовал убрать растения у всех семи,
   и это правильно: половинчатая мера здесь ничего не решает.

   Мастер `hair-editorial-alternate-codex-v1.png` нарисовал Codex специально под эту задачу,
   SHA-256 637c10de6f94…4567a03, он снят на том же синем бархате, что и
   остальные три, поэтому серия не распадается. */
const PLAN = {
  'ck-regeon':       ['scenes/hair-1600.webp',   '260x300+1150+390', 'ампула и пипетка'],
  'rnh-bio':         ['evidence/hair-editorial-alternate-codex-v1.png',     '330x300+1240+440', 'золотой аппликатор для кожи головы'],
  'dongdonggurimoo': ['scenes/hair-1600.webp',   '520x230+880+665',  'серебряный поднос и гребень'],
  'dreamcos':        ['evidence/hair-editorial-alternate-codex-v1.png',     '620x400+390+490',  'пряди волос'],
  'sante':           ['scenes/hair-1600.webp',   '560x600+430+80',   'волна волос'],
  'hanscos':         ['evidence/hair-editorial-alternate-codex-v1.png',     '420x460+1170+115', 'серебряный гребень'],
  'skinroom':        ['evidence/hair-editorial-alternate-codex-v1.png',     '600x390+700+0',    'волосы на бархате'],
  'sunpure':         ['ingredients/turmeric-900.webp', '640x540+120+330', 'корень куркумы'],
};


/* Маска растворения: кадр гаснет с четырёх сторон и остаётся мягким пятном.
   `gradient:` идёт сверху вниз, поэтому white-black + поворот на 90° даёт
   нужное направление — проверено замером пикселей, а не по памяти. */
const hmask = join(TMP, 'hmask.png');
execFileSync('magick', ['-size', `${H}x${FADE}`, 'gradient:white-black', '-rotate', '90',
  '-size', `${PANEL - FADE - EDGE}x${H}`, 'xc:white',
  '-size', `${H}x${EDGE}`, 'gradient:black-white', '-rotate', '90',
  '+append', hmask]);
const vmask = join(TMP, 'vmask.png');
execFileSync('magick', ['-size', `${PANEL}x${VFADE}`, 'gradient:black-white',
  '-size', `${PANEL}x${H - 2 * VFADE}`, 'xc:white',
  '-size', `${PANEL}x${VFADE}`, 'gradient:white-black',
  '-append', vmask]);
const mask = join(TMP, 'mask.png');
execFileSync('magick', [hmask, vmask, '-compose', 'Multiply', '-composite', mask]);

let n = 0;
for (const [slug, [rel, crop, note]] of Object.entries(PLAN)) {
  const src = master(rel);
  if (!existsSync(src)) { console.error(`${slug}: нет файла ${rel}`); process.exitCode = 1; continue; }

  /* Вырез кладём панелью в правую часть кадра, а не растягиваем на всю ширину:
     растянутый сюжет в браузере ещё раз увеличивается по `cover`, и в блоке
     остаётся один огромный размытый флакон вместо натюрморта. */
  const shaped = join(TMP, `${slug}-shaped.png`);
  execFileSync('magick', [src, '-crop', crop, '+repage',
    '-resize', `${PANEL}x${H}^`, '-gravity', 'center', '-extent', `${PANEL}x${H}`, shaped]);

  const faded = join(TMP, `${slug}-faded.png`);
  execFileSync('magick', [shaped, mask, '-alpha', 'off', '-compose', 'CopyOpacity', '-composite', faded]);

  const out = join(OUT, `company-${slug}.webp`);
  execFileSync('magick', ['-size', `${W}x${H}`, `xc:${VELVET}`, faded,
    '-geometry', `+${W - PANEL}+0`, '-composite',
    '-blur', '0x3',              // мягко: кадр остаётся узнаваемым
    '-modulate', '78,112,100',   // мастера уже тёмные, сильно гасить нечего
    '-fill', VELVET, '-colorize', '20',
    '-quality', '82', out]);

  const kb = Math.round(execFileSync('stat', ['-f%z', out]).toString().trim() / 1024);
  console.log(`company-${slug}.webp  ←  ${rel} [${crop}]  ${note}  (${kb} KB)`);
  n++;
}
console.log(`готово: ${n} кадров`);
