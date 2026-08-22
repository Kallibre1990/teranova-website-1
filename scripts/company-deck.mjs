/* Вёрстка продающей презентации компании (A4, печать в PDF через headless Chrome).

   Почему отдельно от pres-deck.mjs: тот модуль строит деки поставщиков в манере
   каждого бренда, здесь же одна фиксированная манера — наша. Цвет, крупные
   цифры и полосы во всю страницу нужны, чтобы документ читался как презентация,
   а не как справка: его открывают в письме и решают за первые два экрана. */

export const esc = (s) =>
  String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const C = {
  deep: '#0b2036',
  mid: '#14395e',
  sky: '#2f6ea8',
  accent: '#7fb2dd',
  gold: '#d8a657',
  bg: '#f2f6fb',
  line: '#dde7f2',
  ink: '#16202c',
  muted: '#5a6a80',
};

/* Мотив: поле ромбов из фирменного знака. Рисуется кодом, потому что устав
   запрещает фотобанк, а генерировать «документальный» фон нельзя. */
const diamondField = (opacity = 0.14) => `
<svg class="art" viewBox="0 0 800 1130" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="dia" width="88" height="88" patternUnits="userSpaceOnUse" patternTransform="rotate(0)">
      <path d="M44 8 80 44 44 80 8 44Z" fill="none" stroke="#ffffff" stroke-opacity="${opacity}" stroke-width="1.1"/>
    </pattern>
    <radialGradient id="glow" cx="72%" cy="18%" r="62%">
      <stop offset="0%" stop-color="${C.accent}" stop-opacity=".38"/>
      <stop offset="100%" stop-color="${C.accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="1130" fill="url(#dia)"/>
  <rect width="800" height="1130" fill="url(#glow)"/>
  <path d="M660 78 792 210 660 342 528 210Z" fill="${C.accent}" fill-opacity=".10"/>
  <path d="M660 128 742 210 660 292 578 210Z" fill="${C.accent}" fill-opacity=".14"/>
</svg>`;

const ICONS = {
  box: `<path d="M6 12 24 4l18 8v20l-18 8-18-8Z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><path d="M6 12l18 8 18-8M24 20v20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>`,
  flask: `<path d="M19 5h10M21 5v13L9 38a4 4 0 0 0 3.5 6h23A4 4 0 0 0 39 38L27 18V5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><path d="M15 30h18" stroke="currentColor" stroke-width="2.2"/>`,
  drop: `<path d="M24 5c8 10 13 16 13 23a13 13 0 0 1-26 0c0-7 5-13 13-23Z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><path d="M17 30a7 7 0 0 0 7 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>`,
};
const icon = (k) => `<svg class="ico" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">${ICONS[k] || ICONS.box}</svg>`;

export function companyDeckCSS() {
  return `
  @page { size: A4; margin: 0; }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: -apple-system, "Helvetica Neue", "Arial Unicode MS", Arial, sans-serif;
    color: ${C.ink}; -webkit-print-color-adjust: exact; print-color-adjust: exact;
  }
  .page { width: 210mm; height: 297mm; position: relative; overflow: hidden; page-break-after: always; background: #fff; }
  .page:last-child { page-break-after: auto; }
  .pad { padding: 19mm 17mm 14mm; height: 100%; display: flex; flex-direction: column; position: relative; z-index: 2; }
  .art { position: absolute; inset: 0; width: 100%; height: 100%; }
  /* Шапка вверху, подвал внизу, содержимое сразу под заголовком. Центрировать
     содержимое по остатку страницы пробовали: тогда под заголовком появлялся
     провал, а он читается хуже, чем воздух внизу. */
  .body { flex: 1; display: flex; flex-direction: column; justify-content: flex-start; min-height: 0; }

  /* тёмные страницы */
  .dark { background: linear-gradient(158deg, ${C.mid} 0%, ${C.deep} 62%, #071726 100%); color: #fff; }
  .dark h2, .dark .lbl { color: #fff; }
  .dark .lbl { opacity: .62; }

  .lbl { font-size: 7.6pt; letter-spacing: .22em; color: ${C.sky}; font-weight: 800; }
  h2 { font-size: 22pt; font-weight: 800; margin: 3.5mm 0 0; letter-spacing: -.02em; line-height: 1.12; color: ${C.deep}; }
  .rule { width: 22mm; height: 1.4mm; background: ${C.gold}; border-radius: 1mm; margin: 5mm 0 6mm; }
  .lead { font-size: 10.5pt; line-height: 1.62; color: ${C.muted}; max-width: 158mm; }
  .dark .lead { color: rgba(255,255,255,.82); }
  p { font-size: 10.3pt; line-height: 1.66; margin: 0 0 4mm; }
  .foot { margin-top: auto; padding-top: 6mm; border-top: .35mm solid ${C.line};
          display: flex; justify-content: space-between; font-size: 7.6pt; color: #97a6b8; }
  .dark .foot { border-top-color: rgba(255,255,255,.16); color: rgba(255,255,255,.5); }

  /* обложка */
  .cover .pad { padding: 34mm 17mm 20mm; }
  .cover .eyebrow { font-size: 8pt; letter-spacing: .24em; font-weight: 800; opacity: .7; }
  .cover h1 { font-size: 46pt; line-height: .98; margin: 12mm 0 0; font-weight: 800; letter-spacing: -.03em; }
  .cover .tag { font-size: 15pt; line-height: 1.3; margin-top: 8mm; max-width: 150mm; color: ${C.accent}; font-weight: 600; }
  .cover .desc { font-size: 10.5pt; line-height: 1.6; opacity: .82; margin-top: 6mm; max-width: 140mm; }
  .cover .bot { margin-top: auto; font-size: 9.5pt; opacity: .78; }
  .cover .bot b { display: block; font-size: 10.5pt; opacity: 1; margin-bottom: 2mm; }

  /* страница-заявление */
  .claim { font-size: 25pt; line-height: 1.24; font-weight: 800; letter-spacing: -.02em; max-width: 165mm; }
  .claim em { color: ${C.accent}; font-style: normal; }

  .chips { display: flex; flex-wrap: wrap; gap: 2.4mm; margin-top: 9mm; }
  .chip { font-size: 8.6pt; font-weight: 700; padding: 2.2mm 4mm; border-radius: 20mm;
          background: rgba(255,255,255,.12); border: .3mm solid rgba(255,255,255,.24); }

  /* три вида запросов */
  .kinds { display: flex; flex-direction: column; gap: 6mm; margin-top: 7mm; }
  .kind { border: .35mm solid ${C.line}; border-radius: 4mm; padding: 9mm 8mm 8.5mm; background: #fff;
          border-left: 1.6mm solid ${C.sky}; }
  .kind:nth-child(2) { border-left-color: ${C.gold}; }
  .kind:nth-child(3) { border-left-color: ${C.accent}; }
  .kind__top { display: flex; align-items: center; gap: 4mm; }
  .ico { width: 9mm; height: 9mm; color: ${C.sky}; flex: 0 0 auto; }
  .kind:nth-child(2) .ico { color: ${C.gold}; }
  .kind:nth-child(3) .ico { color: ${C.sky}; }
  .kind__n { font-size: 13pt; font-weight: 800; color: ${C.deep}; letter-spacing: -.01em; }
  .kind__d { font-size: 10.4pt; line-height: 1.6; color: ${C.muted}; margin-top: 3.5mm; }

  /* цифры */
  .nums { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6mm 5mm; margin-top: 8mm; }
  .num { border-radius: 4mm; background: ${C.bg}; padding: 10mm 6mm; }
  .num__v { font-size: 34pt; font-weight: 800; color: ${C.deep}; letter-spacing: -.03em; line-height: 1; }
  .num__l { font-size: 8.8pt; line-height: 1.45; color: ${C.muted}; margin-top: 3mm; }

  /* карточки */
  .cards { display: grid; grid-template-columns: 1fr 1fr; gap: 6mm; margin-top: 8mm; }
  .card { border: .35mm solid ${C.line}; border-radius: 4mm; padding: 8mm 7mm; background: #fff; }
  .card .n { font-size: 11pt; font-weight: 800; color: ${C.deep}; }
  .card .d { font-size: 10pt; line-height: 1.58; color: ${C.muted}; margin-top: 3mm; }

  /* строки */
  .rows { margin-top: 2mm; }
  .row { padding: 7mm 0; border-bottom: .3mm solid ${C.line}; }
  .row:last-child { border-bottom: 0; }
  .row .n { font-size: 11pt; font-weight: 800; color: ${C.deep}; }
  .row .d { font-size: 10.2pt; line-height: 1.6; color: ${C.muted}; margin-top: 2mm; }

  /* шаги сделки */
  .steps { margin-top: 2mm; }
  .step { display: flex; gap: 6mm; padding: 7mm 0; border-bottom: .3mm solid ${C.line}; }
  .step:last-child { border-bottom: 0; }
  .step__i { flex: 0 0 11mm; height: 11mm; border-radius: 50%; background: ${C.deep}; color: #fff;
             font-size: 11pt; font-weight: 800; display: flex; align-items: center; justify-content: center; }
  .step__n { font-size: 11.5pt; font-weight: 800; color: ${C.deep}; }
  .step__d { font-size: 10.2pt; line-height: 1.6; color: ${C.muted}; margin-top: 2mm; }

  /* снимок экрана */
  .shot { margin-top: 0; border-radius: 4mm; overflow: hidden; border: .35mm solid ${C.line};
          box-shadow: 0 3mm 9mm rgba(11,32,54,.14); }
  .shot__bar { background: ${C.bg}; padding: 3mm 4mm; display: flex; align-items: center; gap: 2mm;
               border-bottom: .3mm solid ${C.line}; }
  .dot { width: 2.6mm; height: 2.6mm; border-radius: 50%; background: #cfdae7; }
  .shot__url { font-size: 8pt; color: ${C.muted}; margin-left: 3mm; }
  .shot img { width: 100%; display: block; }
  .cap { font-size: 9pt; line-height: 1.55; color: ${C.muted}; margin-top: 5mm; max-width: 160mm; }

  /* крупное «ноль» */
  .big { font-size: 62pt; font-weight: 800; letter-spacing: -.04em; line-height: 1; color: ${C.gold}; }

  /* рынки */
  .mgroup { padding: 7mm 0; border-bottom: .3mm solid ${C.line}; }
  .mgroup:last-of-type { border-bottom: 0; }
  .mgroup .n { font-size: 8pt; letter-spacing: .16em; font-weight: 800; color: ${C.sky}; }
  .mgroup .v { font-size: 11.5pt; line-height: 1.5; color: ${C.deep}; margin-top: 2.5mm; font-weight: 600; }
  .lchips { display: flex; flex-wrap: wrap; gap: 2.4mm; margin-top: 4mm; }
  .lchip { font-size: 8.8pt; font-weight: 700; padding: 2.2mm 4mm; border-radius: 20mm;
           background: ${C.bg}; color: ${C.deep}; border: .3mm solid ${C.line}; }

  /* категории */
  .cats { display: grid; grid-template-columns: 1fr 1fr; gap: 5mm; margin-top: 8mm; }
  .cat { border-radius: 4mm; padding: 7.5mm 6mm; background: ${C.bg}; border-top: 1.2mm solid ${C.sky}; }
  .cat:nth-child(2n) { border-top-color: ${C.gold}; }
  .cat .n { font-size: 10.5pt; font-weight: 800; color: ${C.deep}; }
  .cat .d { font-size: 9pt; line-height: 1.5; color: ${C.muted}; margin-top: 2mm; }

  .disc { font-size: 8.6pt; line-height: 1.5; color: #8b9bb0; margin-top: 6mm; max-width: 162mm; }
  .dark .disc { color: rgba(255,255,255,.55); }

  /* финал */
  .cta h2 { font-size: 30pt; }
  .cta .big-mail { font-size: 16pt; font-weight: 800; margin-top: 10mm; color: ${C.accent}; }
  .cta .site { font-size: 12pt; margin-top: 3mm; opacity: .85; }
  `;
}

const foot = () => `<div class="foot"><span>Teranova Group · AIA Group Ltd.</span><span>teranovagroup.com</span></div>`;

const page = (lbl, title, body, opts = {}) => `
  <div class="page${opts.dark ? ' dark' : ''}">
    ${opts.dark ? diamondField(0.1) : ''}
    <div class="pad">
      <div class="lbl">${esc(lbl)}</div>
      <h2>${esc(title)}</h2>
      <div class="rule"></div>
      <div class="body">${body}</div>
      ${foot()}
    </div>
  </div>`;

export function companyDeckHTML(T, shotDataUri) {
  const P = [];

  /* 1 — обложка */
  P.push(`
  <div class="page dark cover">
    ${diamondField(0.16)}
    <div class="pad">
      <div class="eyebrow">${esc(T.eyebrow)}</div>
      <h1>${esc(T.h1)}</h1>
      <div class="tag">${esc(T.tagline)}</div>
      <div class="desc">${esc(T.descriptor)}</div>
      <div class="bot"><b>${esc(T.coverFoot)}</b>${esc(T.coverMail)}</div>
    </div>
  </div>`);

  /* 2 — заявление */
  P.push(`
  <div class="page dark">
    ${diamondField(0.1)}
    <div class="pad">
      <div class="lbl">${esc(T.claim_lbl)}</div>
      <div class="rule"></div>
      <div class="claim">${esc(T.claim)}</div>
      <div class="lead" style="margin-top:9mm">${esc(T.claim_sub)}</div>
      <div class="chips">${T.claim_facts.map((c) => `<span class="chip">${esc(c)}</span>`).join('')}</div>
      ${foot()}
    </div>
  </div>`);

  /* 3 — три вида запросов */
  P.push(page(T.kinds_lbl, T.kinds_h,
    `<div class="lead">${esc(T.kinds_lead)}</div>
     <div class="kinds">${T.kinds.map((k) => `
       <div class="kind">
         <div class="kind__top">${icon(k.i)}<div class="kind__n">${esc(k.n)}</div></div>
         <div class="kind__d">${esc(k.d)}</div>
       </div>`).join('')}</div>`));

  /* 4 — цифры */
  P.push(page(T.nums_lbl, T.nums_h,
    `<div class="lead">${esc(T.nums_lead)}</div>
     <div class="nums">${T.nums.map((n) => `
       <div class="num"><div class="num__v">${esc(n.v)}</div><div class="num__l">${esc(n.l)}</div></div>`).join('')}</div>
     <div class="disc">${esc(T.nums_note)}</div>`));

  /* 5 — что даёт размещение */
  P.push(page(T.listing_lbl, T.listing_h,
    `<div class="lead">${esc(T.listing_lead)}</div>
     <div class="cards">${T.listing.map((x) => `
       <div class="card"><div class="n">${esc(x.n)}</div><div class="d">${esc(x.d)}</div></div>`).join('')}</div>
     <div class="disc">${esc(T.listing_note)}</div>`));

  /* 6 — снимок витрины */
  P.push(page(T.shot_lbl, T.shot_h,
    `<div class="shot">
       <div class="shot__bar"><span class="dot"></span><span class="dot"></span><span class="dot"></span>
         <span class="shot__url">${esc(T.shot_url || 'teranovagroup.com/catalog/dreamcos/')}</span></div>
       <img src="${shotDataUri}" alt=""/>
     </div>
     <div class="cap">${esc(T.shot_cap)}</div>`));

  /* 7 — два статуса */
  P.push(page(T.verify_lbl, T.verify_h,
    `<div class="lead">${esc(T.verify_lead)}</div>
     <div class="rows">${T.verify.map((x) => `
       <div class="row"><div class="n">${esc(x.n)}</div><div class="d">${esc(x.d)}</div></div>`).join('')}</div>
     <div class="disc">${esc(T.verify_note)}</div>`));

  /* 8 — путь сделки */
  P.push(page(T.deal_lbl, T.deal_h,
    `<div class="steps">${T.deal.map((x, i) => `
       <div class="step"><div class="step__i">${i + 1}</div>
         <div><div class="step__n">${esc(x.n)}</div><div class="step__d">${esc(x.d)}</div></div></div>`).join('')}</div>`));

  /* 9 — деньги */
  P.push(`
  <div class="page dark">
    ${diamondField(0.1)}
    <div class="pad">
      <div class="lbl">${esc(T.cost_lbl)}</div>
      <div class="rule"></div>
      <div class="big">${esc(T.cost_big)}</div>
      <div class="lead" style="margin-top:7mm">${esc(T.cost_lead)}</div>
      <div class="rows" style="margin-top:8mm">${T.cost.map((x) => `
        <div class="row" style="border-bottom-color:rgba(255,255,255,.16)">
          <div class="n" style="color:#fff">${esc(x.n)}</div>
          <div class="d" style="color:rgba(255,255,255,.78)">${esc(x.d)}</div></div>`).join('')}</div>
      ${foot()}
    </div>
  </div>`);

  /* 10 — рынки */
  P.push(page(T.markets_lbl, T.markets_h,
    T.markets_groups.map((g) => `
      <div class="mgroup"><div class="n">${esc(g.n)}</div><div class="v">${esc(g.v)}</div></div>`).join('') +
    `<div class="mgroup"><div class="n">${esc(T.channels_h)}</div>
       <div class="lchips">${T.channels.map((c) => `<span class="lchip">${esc(c)}</span>`).join('')}</div></div>
     <div class="disc">${esc(T.markets_note)}</div>`));

  /* 11 — категории */
  P.push(page(T.cats_lbl, T.cats_h,
    `<div class="cats">${T.cats.map((c) => `
       <div class="cat"><div class="n">${esc(c.n)}</div><div class="d">${esc(c.d)}</div></div>`).join('')}</div>
     <div class="disc">${esc(T.cats_note)}</div>`));

  /* 12 — что нужно */
  P.push(page(T.need_lbl, T.need_h,
    `<div class="lead">${esc(T.need_lead)}</div>
     <div class="rows">${T.need.map((x) => `
       <div class="row"><div class="n">${esc(x.n)}</div><div class="d">${esc(x.d)}</div></div>`).join('')}</div>`));

  /* 13 — финал */
  P.push(`
  <div class="page dark cta">
    ${diamondField(0.16)}
    <div class="pad">
      <div class="lbl">Teranova Group</div>
      <div class="rule"></div>
      <h2>${esc(T.cta_h)}</h2>
      <div class="lead" style="margin-top:7mm">${esc(T.cta_d)}</div>
      <div class="big-mail">${esc(T.cta_mail)}</div>
      <div class="site">${esc(T.cta_site)}</div>
      <div class="disc" style="margin-top:12mm">${esc(T.cta_note)}</div>
      ${foot()}
    </div>
  </div>`);

  return `<!doctype html><html lang="${esc(T.lang)}"><head><meta charset="utf-8">
    <title>Teranova Group</title><style>${companyDeckCSS()}</style></head>
    <body>${P.join('')}</body></html>`;
}
