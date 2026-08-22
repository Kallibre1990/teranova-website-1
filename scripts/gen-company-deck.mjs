#!/usr/bin/env node
/* Сборка продающей презентации компании в PDF.
     node scripts/gen-company-deck.mjs [lang ...]
   Выход: public/docs/teranova-company-<lang>.pdf

   Снимок витрины берётся из public/img/deck/showcase.png — реальный экран
   страницы поставщика, а не рисунок. Обновить: node scripts/shots.mjs ... */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';
import { companyDeckHTML } from './company-deck.mjs';
import { TEXTS } from './company-deck-text.mjs';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'public/docs');
const SHOT = path.join(ROOT, 'public/img/deck/showcase.png');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PROF = fs.mkdtempSync(path.join(os.tmpdir(), 'cdeck-prof-'));
const ARGS = ['--headless', '--disable-gpu', '--no-pdf-header-footer', '--no-first-run',
  '--no-default-browser-check', '--disable-extensions', '--disable-background-networking',
  '--disable-sync', '--disable-default-apps', `--user-data-dir=${PROF}`];
const hash = (s) => { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return h; };

/* Все цифры — из данных на момент сборки. Вписанная руками цифра устаревает
   молча и превращается во враньё в документе, который уже разослан. */
function stats() {
  const src = fs.readFileSync(path.join(ROOT, 'src/data/suppliers.ts'), 'utf8');
  const rows = [...src.matchAll(/slug: '([^']+)',\s*\n\s*category: '([^']+)',(?:\s*\n\s*country: '([^']+)',)?\s*\n\s*name: '([^']+)'/g)];
  const total = rows.length;
  const korea = rows.filter((r) => !r[3] || r[3] === 'kr').length;
  const posts = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/data/blog.json'), 'utf8')).length;
  const pdfs = fs.readdirSync(path.join(ROOT, 'public/docs')).filter((f) => f.endsWith('.pdf')).length;
  const dist = path.join(ROOT, 'dist');
  let pages = 0;
  if (fs.existsSync(dist)) {
    const walk = (d) => { for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      if (e.isDirectory()) walk(path.join(d, e.name)); else if (e.name === 'index.html') pages++; } };
    walk(dist);
  }
  return { total, korea, posts, pdfs, pages };
}

async function toPDF(html, outfile) {
  const tmp = path.join(os.tmpdir(), `cdeck-${Math.abs(hash(outfile))}.html`);
  fs.writeFileSync(tmp, html);
  try { fs.unlinkSync(outfile); } catch { /* первый запуск */ }
  const ch = spawn(CHROME, [...ARGS, `--print-to-pdf=${outfile}`, `file://${tmp}`], { stdio: 'ignore', detached: true });
  const t0 = Date.now();
  let last = -1, stable = 0, ok = false;
  while (Date.now() - t0 < 40000) {
    await sleep(350);
    if (fs.existsSync(outfile)) {
      const sz = fs.statSync(outfile).size;
      if (sz > 1200 && sz === last) { if (++stable >= 2) { ok = true; break; } } else stable = 0;
      last = sz;
    }
  }
  try { process.kill(-ch.pid, 'SIGKILL'); } catch { /* уже мертва */ }
  try { ch.kill('SIGKILL'); } catch { /* already gone */ }
  await sleep(120);
  fs.unlinkSync(tmp);
  if (!ok) throw new Error(`PDF не собран: ${outfile}`);
}

if (!fs.existsSync(SHOT)) {
  console.error(`нет снимка витрины: ${path.relative(ROOT, SHOT)}`);
  process.exit(1);
}
const shotUri = 'data:image/png;base64,' + fs.readFileSync(SHOT).toString('base64');

const asked = process.argv.slice(2).filter((l) => TEXTS[l]);
const targets = asked.length ? asked : Object.keys(TEXTS);
const s = stats();
console.log(`витрина: производителей ${s.total} (корейских ${s.korea}), статей ${s.posts}, PDF ${s.pdfs}, страниц ${s.pages}`);
for (const lang of targets) {
  const T = TEXTS[lang](s);
  const file = path.join(OUT, `teranova-company-${lang}.pdf`);
  await toPDF(companyDeckHTML(T, shotUri), file);
  console.log(`  ${lang} → ${path.relative(ROOT, file)} (${Math.round(fs.statSync(file).size / 1024)} КБ)`);
}
fs.rmSync(PROF, { recursive: true, force: true });
console.log('Готово.');
