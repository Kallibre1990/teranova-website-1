/* Сборка профиля компании Teranova в PDF. Запуск: node scripts/gen-teranova-deck.mjs [lang ...]
   По умолчанию собирает все заведённые языки. Выход: public/docs/teranova-profile-<lang>.pdf */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';
import { teranovaDeckHTML } from './teranova-deck.mjs';
import { TEXTS } from './teranova-deck-text.mjs';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'public/docs');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PROF = fs.mkdtempSync(path.join(os.tmpdir(), 'tdeck-prof-'));
const CHROME_ARGS = [
  '--headless', '--disable-gpu', '--no-pdf-header-footer', '--no-first-run',
  '--no-default-browser-check', '--disable-extensions', '--disable-background-networking',
  '--disable-sync', '--disable-default-apps', `--user-data-dir=${PROF}`,
];
const hash = (s) => { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return h; };

/* Число размещённых производителей берём из данных сайта, а не вписываем руками:
   вписанная цифра устаревает молча и превращается во враньё в документе. */
function stats() {
  const src = fs.readFileSync(path.join(ROOT, 'src/data/suppliers.ts'), 'utf8');
  const rows = [...src.matchAll(/slug: '([^']+)',\s*\n\s*category: '([^']+)',(?:\s*\n\s*country: '([^']+)',)?\s*\n\s*name: '([^']+)'/g)];
  const total = rows.length;
  /* country отсутствует = Корея (см. комментарий к полю в suppliers.ts), поэтому
     считаем корейскими и записи без поля, и записи с 'kr'. */
  const korea = rows.filter((r) => !r[3] || r[3] === 'kr').length;
  return { total, korea, abroad: total - korea };
}

async function toPDF(html, outfile) {
  const tmp = path.join(os.tmpdir(), `tdeck-${Math.abs(hash(outfile))}.html`);
  fs.writeFileSync(tmp, html);
  try { fs.unlinkSync(outfile); } catch { /* first run */ }
  const ch = spawn(CHROME, [...CHROME_ARGS, `--print-to-pdf=${outfile}`, `file://${tmp}`],
    { stdio: 'ignore', detached: true });
  const t0 = Date.now();
  let last = -1, stable = 0, ok = false;
  while (Date.now() - t0 < 25000) {
    await sleep(350);
    if (fs.existsSync(outfile)) {
      const sz = fs.statSync(outfile).size;
      if (sz > 1200 && sz === last) { if (++stable >= 2) { ok = true; break; } } else stable = 0;
      last = sz;
    }
  }
  try { process.kill(-ch.pid, 'SIGKILL'); } catch { /* группа уже мертва */ }
  try { ch.kill('SIGKILL'); } catch { /* already gone */ }
  await sleep(120);
  fs.unlinkSync(tmp);
  if (!ok) throw new Error(`PDF не собран: ${outfile}`);
}

const langs = process.argv.slice(2).filter((l) => TEXTS[l]);
const targets = langs.length ? langs : Object.keys(TEXTS);
const s = stats();
console.log(`производителей на витрине: ${s.total} (в Корее ${s.korea}, вне Кореи ${s.abroad})`);
for (const lang of targets) {
  const T = typeof TEXTS[lang] === 'function' ? TEXTS[lang](s) : TEXTS[lang];
  const file = path.join(OUT, `teranova-profile-${lang}.pdf`);
  await toPDF(teranovaDeckHTML(lang, T, s), file);
  console.log(`  ${lang} → ${path.relative(ROOT, file)} (${Math.round(fs.statSync(file).size / 1024)} КБ)`);
}
fs.rmSync(PROF, { recursive: true, force: true });
console.log('Готово.');
