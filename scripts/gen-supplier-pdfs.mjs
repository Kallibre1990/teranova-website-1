/* Generator for supplier terms/price PDFs (all languages), rendered locally with a
   full CJK font so Japanese/Chinese glyphs are not dropped.

   Background: the previous PDFs were printed in an environment without CJK fonts, so
   kanji/hanzi silently fell out (empty gaps) in ja/zh — see decision journal D-175.
   This script re-generates all 22 PDFs from the SAME data the website uses, so the
   text is guaranteed complete and consistent across languages.

   Content sources (single source of truth = the site data, no invented text):
   - Terms  : content.terms[] + content.descriptor + ui.terms_h + ui.terms_disc
              (ru mirrors src/data/suppliers.ts `santeRu`; other langs read the JSON).
   - Price  : neutral rows from src/data/suppliers-i18n/sante.price.json (name/volume/
              price are language-neutral); localized headings below.
   - Footer disclaimer of BOTH docs = ui.terms_disc (unified, complete in all langs).

   Run:  node scripts/gen-supplier-pdfs.mjs   (macOS, Google Chrome + Noto Sans CJK)
   Output overwrites public/docs/sante-<terms|price>-<lang>.pdf                        */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DATA = path.join(ROOT, 'src/data/suppliers-i18n');
const OUT = process.env.PDF_OUT || path.join(ROOT, 'public/docs');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const LANGS = ['ru', 'en', 'ko', 'zh', 'ja', 'it', 'de', 'fr', 'tr', 'es', 'pt'];

/* Language-neutral brand bits */
const SUPPLIER = 'SANTE COSMETICS';
const BRAND = 'Dr.SANTE';
const SIGN = 'Teranova Group · info@teranovagroup.com · teranovagroup.com · 2026';
const COLORS = { deep: '#12306e', sky: '#4ca6fc', bg: '#f3f8ff', line: '#e6ebf3' };

/* ru terms — mirror of src/data/suppliers.ts `santeRu` (keep in sync). */
const RU_TERMS = {
  descriptor: 'Профессиональная эстетическая косметика из Кореи',
  terms_h: 'Условия сотрудничества',
  terms_disc:
    'Цены и условия ориентировочные и уточняются на стадии сделки через Teranova. Прямые контакты производителя не публикуются. Документ не является публичной офертой.',
  terms: [
    { label: 'Форматы сотрудничества', value: 'Оптовые поставки готовой продукции; OEM/ODM — собственная разработка и производство.' },
    { label: 'Минимальный заказ', value: 'Ориентировочно от $4 000 на первый заказ; небольшие партии по отдельным позициям.' },
    { label: 'Цены', value: 'Ориентировочный оптовый диапазон FOB; точные цены — по запросу на стадии сделки.' },
    { label: 'Как идёт работа', value: 'Заявка → проверка и согласование Teranova → переговоры и образцы → логистика, таможня и оплата под ключ.' },
  ],
};

/* Price-sheet headings per language. 9 langs are the exact strings from the existing
   good PDFs; ja/zh headings are restored to the intended standard terms (the old PDFs
   had these very words dropped by the missing font — 製品/容量 survived, 参考/価格/规格/
   批发价 were reconstructed). USD suffix is appended in the template. */
const PRICE_H = {
  ru: { title: 'Ориентировочный прайс-лист', product: 'Товар', volume: 'Объём', price: 'Опт. цена' },
  en: { title: 'Indicative price list', product: 'Product', volume: 'Volume', price: 'Wholesale' },
  ko: { title: '참고용 가격표', product: '제품', volume: '용량', price: '도매가' },
  zh: { title: '参考价格表', product: '产品', volume: '规格', price: '批发价' },
  ja: { title: '参考価格表', product: '製品', volume: '容量', price: '価格' },
  it: { title: 'Listino prezzi indicativo', product: 'Prodotto', volume: 'Formato', price: 'Ingrosso' },
  de: { title: 'Indikative Preisliste', product: 'Produkt', volume: 'Größe', price: 'Großhandel' },
  fr: { title: 'Liste de prix indicative', product: 'Produit', volume: 'Format', price: 'Gros' },
  tr: { title: 'Yaklaşık fiyat listesi', product: 'Ürün', volume: 'Hacim', price: 'Toptan' },
  es: { title: 'Lista de precios orientativa', product: 'Producto', volume: 'Volumen', price: 'Mayorista' },
  pt: { title: 'Lista de preços indicativa', product: 'Produto', volume: 'Volume', price: 'Atacado' },
};

const priceLines = JSON.parse(fs.readFileSync(path.join(DATA, 'sante.price.json'), 'utf8'));

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function termsData(lang) {
  if (lang === 'ru') return RU_TERMS;
  const j = JSON.parse(fs.readFileSync(path.join(DATA, `sante.${lang}.json`), 'utf8'));
  return { descriptor: j.content.descriptor, terms: j.content.terms, terms_h: j.ui.terms_h, terms_disc: j.ui.terms_disc };
}

const FONT = "'Noto Sans CJK JP','Noto Sans CJK SC','Noto Sans CJK KR','Hiragino Sans','PingFang SC','Apple SD Gothic Neo','Helvetica Neue',Arial,sans-serif";

const baseCSS = `
  @page { size: A4; margin: 16mm 16mm 14mm; }
  * { box-sizing: border-box; }
  body { font-family: ${FONT}; color: #1c2430; margin: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .hd { display: flex; justify-content: space-between; align-items: baseline; }
  .hd .b { font-weight: 800; letter-spacing: .06em; color: ${COLORS.deep}; font-size: 15px; }
  .hd .r { font-size: 10px; letter-spacing: .14em; text-transform: uppercase; color: ${COLORS.sky}; font-weight: 700; }
  hr.top { border: 0; border-top: 2px solid ${COLORS.deep}; margin: 8px 0 20px; }
  h1 { color: ${COLORS.deep}; font-size: 25px; font-weight: 800; margin: 0 0 4px; }
  .sub { color: #6b7583; font-size: 12px; margin: 0 0 20px; }
  .disc { color: #98a1ad; font-size: 10px; line-height: 1.55; margin-top: 16px; }
  .sign { color: #6b7583; font-size: 10px; font-weight: 700; margin-top: 8px; }
`;

function termsHTML(lang) {
  const d = termsData(lang);
  const rows = d.terms
    .map(
      (t) => `<div class="row"><div class="lab">${esc(t.label)}</div><div class="val">${esc(t.value)}</div></div>`
    )
    .join('');
  return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><style>${baseCSS}
    .row { display: grid; grid-template-columns: 32% 1fr; gap: 18px; padding: 12px 0; border-bottom: 1px solid ${COLORS.line}; }
    .lab { font-weight: 700; color: ${COLORS.deep}; font-size: 12.5px; }
    .val { color: #2c3542; font-size: 12.5px; line-height: 1.5; }
  </style></head><body>
    <div class="hd"><span class="b">TERANOVA GROUP</span><span class="r">${esc(d.terms_h)}</span></div>
    <hr class="top">
    <h1>${SUPPLIER} · ${BRAND}</h1>
    <div class="sub">${esc(d.descriptor)}</div>
    ${rows}
    <div class="disc">${esc(d.terms_disc)}</div>
    <div class="sign">${SIGN}</div>
  </body></html>`;
}

function priceHTML(lang) {
  const h = PRICE_H[lang];
  const disc = termsData(lang).terms_disc;
  let body = '';
  for (const grp of priceLines) {
    body += `<tr class="grp"><td colspan="3">${esc(grp.line)}</td></tr>`;
    for (const it of grp.items) {
      body += `<tr><td class="nm">${esc(it.name)}</td><td class="vol">${esc(it.volume)}</td><td class="pr">$${esc(it.price)}</td></tr>`;
    }
  }
  return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><style>${baseCSS}
    table { width: 100%; border-collapse: collapse; }
    thead th { background: ${COLORS.bg}; color: ${COLORS.deep}; font-size: 10.5px; letter-spacing: .04em; text-transform: uppercase; font-weight: 700; text-align: left; padding: 9px 10px; }
    thead th.pr { text-align: right; }
    tr.grp td { background: #eef4ff; color: ${COLORS.deep}; font-weight: 800; font-size: 12px; padding: 8px 10px; border-top: 1px solid ${COLORS.line}; }
    tbody td { font-size: 11px; padding: 6px 10px; border-bottom: 1px solid #eef1f6; }
    td.nm { color: #222b38; }
    td.vol { color: #5b6675; white-space: nowrap; }
    td.pr { text-align: right; color: ${COLORS.deep}; font-weight: 700; white-space: nowrap; }
  </style></head><body>
    <div class="hd"><span class="b">TERANOVA GROUP</span><span class="r">${SUPPLIER} · ${BRAND} · FOB Korea</span></div>
    <hr class="top">
    <h1>${esc(h.title)}</h1>
    <div class="sub">${SUPPLIER} · ${BRAND}</div>
    <table>
      <thead><tr><th>${esc(h.product)}</th><th>${esc(h.volume)}</th><th class="pr">${esc(h.price)}, USD</th></tr></thead>
      <tbody>${body}</tbody>
    </table>
    <div class="disc">${esc(disc)}</div>
    <div class="sign">${SIGN}</div>
  </body></html>`;
}

const PROF = fs.mkdtempSync(path.join(os.tmpdir(), 'spdf-prof-'));
const CHROME_ARGS = [
  '--headless', '--disable-gpu', '--no-pdf-header-footer', '--no-first-run',
  '--no-default-browser-check', '--disable-extensions', '--disable-background-networking',
  '--disable-sync', '--disable-default-apps', `--user-data-dir=${PROF}`,
];
/* Chrome (new headless) prints the PDF fine but sometimes never exits, so instead of
   waiting for the process we poll until the output file is written and its size is
   stable, then kill Chrome. */
async function toPDF(html, outfile) {
  const tmp = path.join(os.tmpdir(), `spdf-${Math.abs(hash(outfile))}.html`);
  fs.writeFileSync(tmp, html);
  try { fs.unlinkSync(outfile); } catch { /* first run */ }
  const ch = spawn(CHROME, [...CHROME_ARGS, `--print-to-pdf=${outfile}`, `file://${tmp}`], { stdio: 'ignore' });
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
  try { ch.kill('SIGKILL'); } catch { /* already gone */ }
  await sleep(120);
  fs.unlinkSync(tmp);
  if (!ok) throw new Error(`PDF not produced: ${outfile}`);
}
function hash(s) { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return h; }

let n = 0;
for (const lang of LANGS) {
  await toPDF(termsHTML(lang), path.join(OUT, `sante-terms-${lang}.pdf`));
  await toPDF(priceHTML(lang), path.join(OUT, `sante-price-${lang}.pdf`));
  n += 2;
  process.stdout.write(`  ${lang} `);
}
fs.rmSync(PROF, { recursive: true, force: true });
console.log(`\nГотово: ${n} PDF в ${path.relative(ROOT, OUT)}/`);
