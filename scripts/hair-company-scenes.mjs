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
import { join } from 'node:path';

const ROOT = process.cwd();
const OUT = join(ROOT, 'public/img/beauty/scenes');
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
   Два соответствия неслучайны и объяснимы: Sunpure поставляет производные
   куркумы, а HEEYUL компании DONGDONGGURIMOO построена на корейской
   фитотерапии, отсюда солодка. Остальные распределены по сюжету так, чтобы
   соседние блоки не были похожи. */
const PLAN = {
  'ck-regeon':       ['scenes/hair-1600.webp',            '620x700+880+200',  'поднос с ампулой и пипеткой'],
  'rnh-bio':         ['ingredients/babchi-900.webp',      '620x560+40+300',   'бабчи: семена и цветок'],
  'dongdonggurimoo': ['ingredients/licorice-900.webp',    '620x520+60+330',   'корень солодки'],
  'dreamcos':        ['ingredients/licorice-900.webp',    '470x430+400+60',   'зелёные листья'],
  'sante':           ['scenes/hair-1600.webp',            '780x700+400+40',   'волна волос'],
  'hanscos':         ['scenes/hair-1600.webp',            '700x420+400+470',  'гребень и розмарин'],
  'skinroom':        ['ingredients/babchi-900.webp',      '480x520+400+280',  'золотой папоротник'],
  'sunpure':         ['ingredients/turmeric-900.webp',    '640x540+120+330',  'корень куркумы'],
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
  const src = join(ROOT, 'public/img/beauty', rel);
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
