/* Дизайнерская презентация поставщика — единый эталон для всех.

   Раньше «красивые» деки собирались внешним инструментом, которого больше нет:
   отсюда разнобой (у одних 14 нарядных страниц, у других 2 текстовых) и враньё
   в шаблоне («355 позиций», «FDA») у тех, кому эти цифры не принадлежат. Здесь
   всё строится ТОЛЬКО из данных профиля, поэтому чужие факты попасть не могут.

   Вёрстка A4 без полей: обложка идёт навылет, внутренние страницы держат поля
   сами. Заглавные буквы к названиям брендов не применяем — турецкая локаль
   ломает на них i → İ (LICORNE → LİCORNE). */

const esc = (s) =>
  String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* Затемнить/осветлить фирменный цвет — из него строим фон обложки. */
function shade(hex, f) {
  const n = parseInt(String(hex).replace('#', ''), 16);
  const c = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((x) => Math.max(0, Math.min(255, Math.round(x * f))));
  return '#' + c.map((x) => x.toString(16).padStart(2, '0')).join('');
}

const chips = (arr, cls = 'chip') =>
  (arr || []).map((t) => `<span class="${cls}">${esc(t)}</span>`).join('');

function deckCSS(C) {
  const deep = C.deep || '#12306e';
  const sky = C.sky || '#4ca6fc';
  const bg = C.bg || '#f4f7fb';
  const line = C.line || '#e6ebf3';
  return `
  @page { size: A4; margin: 0; }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: -apple-system, "Helvetica Neue", "Arial Unicode MS", Arial, sans-serif;
    color: #1c2430; -webkit-print-color-adjust: exact; print-color-adjust: exact;
  }
  .page { width: 210mm; height: 297mm; position: relative; overflow: hidden; page-break-after: always; background: #fff; }
  .page:last-child { page-break-after: auto; }
  .pad { padding: 20mm 18mm 16mm; height: 100%; display: flex; flex-direction: column; }

  /* ── обложка: текст сверху, фото широкой полосой снизу.
     Фото у поставщиков горизонтальные — вертикальная колонка резала их неудачно. ── */
  .cover { background: linear-gradient(165deg, ${shade(deep, 1.0)}, ${shade(deep, 0.66)}); color: #fff;
           display: flex; flex-direction: column; }
  .cover__t { padding: 26mm 18mm 0; flex: 1; }
  .cover__ph { height: 42%; background: ${bg}; }
  .cover__ph img { width: 100%; height: 100%; object-fit: cover; object-position: center 62%; display: block; }
  /* Без text-transform: в турецкой локали заглавные превращают i в İ и коверкают
     названия брендов (LICORNE -> LİCORNE). Разрядки и размера достаточно. */
  .eyebrow { font-size: 8.5pt; letter-spacing: .22em; opacity: .72; font-weight: 700; }
  .cover h1 { font-size: 38pt; line-height: 1.02; margin: 9mm 0 0; font-weight: 800; letter-spacing: -.025em; }
  .cover .tag { font-size: 13pt; font-style: italic; opacity: .88; margin-top: 5mm; max-width: 150mm; }
  .cover .desc { font-size: 10.5pt; line-height: 1.6; opacity: .9; margin-top: 6mm; max-width: 150mm; }

  /* ── внутренние страницы ── */
  .lbl { font-size: 8pt; letter-spacing: .2em; color: ${sky}; font-weight: 800; }
  h2 { color: ${deep}; font-size: 21pt; font-weight: 800; margin: 3mm 0 0; letter-spacing: -.015em; line-height: 1.15; }
  .rule { width: 18mm; height: 3px; background: ${sky}; border-radius: 2px; margin: 4mm 0 6mm; }
  p { font-size: 10.5pt; line-height: 1.6; color: #2c3542; margin: 0 0 3.5mm; }
  .chips { display: flex; flex-wrap: wrap; gap: 2mm; margin-top: 2mm; }
  .chip { background: ${bg}; color: ${deep}; font-size: 8.5pt; font-weight: 700;
          padding: 1.8mm 3.6mm; border-radius: 20px; border: 1px solid ${line}; }

  .cards { display: grid; grid-template-columns: 1fr 1fr; gap: 4mm; margin-top: 2mm; }
  .card { border: 1px solid ${line}; border-left: 3px solid ${deep}; border-radius: 3mm;
          padding: 4mm 4.5mm; break-inside: avoid; background: #fff; }
  .card .n { font-weight: 800; color: ${deep}; font-size: 11pt; margin-bottom: 1.5mm; }
  .card .d { font-size: 9pt; line-height: 1.5; color: #48525f; }

  .rows { margin-top: 1mm; }
  .row { padding: 3.5mm 0; border-bottom: 1px solid ${line}; break-inside: avoid; }
  .row .n { font-weight: 800; color: ${deep}; font-size: 10.5pt; }
  .row .d { font-size: 9.5pt; line-height: 1.5; color: #48525f; margin-top: 1mm; }

  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 5mm; margin-top: 2mm; }
  .prod { break-inside: avoid; }
  .prod__ph { height: 34mm; background: ${bg}; border: 1px solid ${line}; border-radius: 3mm;
              display: flex; align-items: center; justify-content: center; overflow: hidden; }
  .prod__ph img { max-width: 88%; max-height: 88%; object-fit: contain; }
  .prod .n { font-size: 8.5pt; font-weight: 700; color: #1c2430; margin-top: 2mm; line-height: 1.35; }
  .prod .v { font-size: 8pt; color: #7b8593; margin-top: .8mm; }

  .terms .lab { font-weight: 800; color: ${deep}; font-size: 10pt; }
  .terms .val { font-size: 9.5pt; color: #48525f; line-height: 1.5; margin-top: 1mm; }
  .disc { color: #98a1ad; font-size: 8.5pt; line-height: 1.5; margin-top: 5mm; }
  .cta { margin-top: auto; background: ${bg}; border: 1px solid ${line}; border-radius: 4mm; padding: 6mm; }
  .cta .h { font-weight: 800; color: ${deep}; font-size: 13pt; }
  .cta .d { font-size: 9.5pt; color: #48525f; margin-top: 2mm; line-height: 1.55; }
  .foot { margin-top: auto; padding-top: 5mm; display: flex; justify-content: space-between;
          font-size: 7.5pt; color: #98a1ad; border-top: 1px solid ${line}; }
`;
}

/** Одна внутренняя страница. */
const page = (cfg, lbl, title, body, extra = '') => `
  <div class="page"><div class="pad">
    <div class="lbl">${esc(lbl)}</div>
    <h2>${esc(title)}</h2>
    <div class="rule"></div>
    ${body}
    ${extra}
    <div class="foot"><span>${esc(cfg.supplier)} · ${esc(cfg.brand)}</span><span>Teranova Group</span></div>
  </div></div>`;

/**
 * @param cfg   запись поставщика (supplier, brand, colors, certs)
 * @param lang  язык
 * @param d     данные презентации (presData): tagline/descriptor/about/facts/lines/tech/formats/exportNote/ui
 * @param t     данные условий (termsData): terms/terms_h/terms_disc
 * @param cat   каталог [{line, items:[{name, img, volume}]}] или null
 * @param hero  абсолютный путь к обложечному фото или null
 */
export function deckHTML(cfg, lang, d, t, cat, hero) {
  const u = d.ui || {};
  const P = [];

  /* 1. Обложка */
  P.push(`
  <div class="page cover">
    <div class="cover__t">
      <div class="eyebrow">Teranova · ${esc(u.profile_sup || 'Supplier profile')}</div>
      <h1>${esc(cfg.brand)}</h1>
      ${d.tagline ? `<div class="tag">${esc(d.tagline)}</div>` : ''}
      <div class="desc">${esc(d.descriptor)}</div>
    </div>
    <div class="cover__ph">${hero ? `<img src="file://${hero}">` : ''}</div>
  </div>`);

  /* 2. О компании */
  P.push(page(cfg, u.profile_sup || 'Supplier profile', u.about_h || 'About the company',
    (d.about || []).map((p) => `<p>${esc(p)}</p>`).join('') +
    `<div class="chips">${chips(d.facts)}</div>`));

  /* 3. Линейки */
  if ((d.lines || []).length) {
    P.push(page(cfg, cfg.supplier, u.lines_h || 'Product lines',
      `<div class="cards">${d.lines.map((l) => `<div class="card"><div class="n">${esc(l.name)}</div><div class="d">${esc(l.note)}</div></div>`).join('')}</div>`));
  }

  /* 4. Подход и производство */
  if ((d.tech || []).length) {
    P.push(page(cfg, cfg.supplier, u.tech_h || 'Approach and manufacturing',
      `<div class="rows">${d.tech.map((x) => `<div class="row"><div class="n">${esc(x.name)}</div><div class="d">${esc(x.note)}</div></div>`).join('')}</div>`));
  }

  /* 5. Каталог — до 9 позиций с фото */
  if (cat && cat.length) {
    const items = cat.flatMap((g) => g.items).slice(0, 12);
    P.push(page(cfg, cfg.supplier, u.catalog_h || u.products_h || 'Product catalog',
      (u.products_note ? `<p>${esc(u.products_note)}</p>` : '') +
      `<div class="grid">${items.map((it) => `
        <div class="prod">
          <div class="prod__ph">${it.abs ? `<img src="file://${it.abs}">` : ''}</div>
          <div class="n">${esc(it.name)}</div>
          ${it.volume ? `<div class="v">${esc(it.volume)}</div>` : ''}
        </div>`).join('')}</div>`));
  }

  /* 6. Сертификаты, форматы, экспорт */
  const certsBlock = (cfg.certs || []).length
    ? `<div class="lbl" style="margin-top:2mm">${esc(u.certs_h || 'Certifications')}</div>
       <div class="chips">${chips(cfg.certs)}</div>
       ${u.certs_note ? `<div class="disc">${esc(u.certs_note)}</div>` : ''}` : '';
  const formatsBlock = (d.formats || []).length
    ? `<div class="lbl" style="margin-top:7mm">${esc(u.formats_h || 'Product formats')}</div>
       <div class="chips">${chips(d.formats)}</div>` : '';
  P.push(page(cfg, cfg.supplier, u.export_h || 'Export and markets',
    `<p>${esc(d.exportNote)}</p>${certsBlock}${formatsBlock}`));

  /* 7. Условия и контакт */
  P.push(page(cfg, cfg.supplier, t.terms_h || 'Terms of cooperation',
    `<div class="terms">${(t.terms || []).map((x) => `<div class="row"><div class="lab">${esc(x.label)}</div><div class="val">${esc(x.value)}</div></div>`).join('')}</div>
     <div class="disc">${esc(t.terms_disc)}</div>`,
    `<div class="cta"><div class="h">${esc(u.cta_h || 'Interested in this supplier?')}</div>
       <div class="d">${esc(u.cta_d || '')}</div>
       <div class="d" style="font-weight:700">Teranova Group · info@teranovagroup.com · teranovagroup.com</div></div>`));

  return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8">
    <style>${deckCSS(cfg.colors || {})}</style></head><body>${P.join('')}</body></html>`;
}
