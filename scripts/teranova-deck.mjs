/* Профиль компании Teranova — дек для производителя, который решает, размещаться
   у нас или нет.

   Почему он существует: 25 июля Ира пообещала английский профиль компании
   Dr.SANTE, 12 августа его же попросила kOnirica, и до 21 августа документа не
   было ни в каком виде. Текст здесь не выдуман: он повторяет страницы сайта
   «О компании», «Поставщикам» и «Как мы проверяем» и устав.

   Правила, которые тут соблюдаются жёстко:
   — слова «гарантия» нет ни в одной форме (устав);
   — цифры только проверяемые: число размещённых производителей берётся из
     src/data/suppliers.ts на момент сборки, а не вписывается руками;
   — про число сделок не говорится ничего, ни цифрой, ни намёком;
   — ставка комиссии не публикуется: она строка договора и зависит от сделки.  */
import { esc, chips, deckCSS, coverArt } from './pres-deck.mjs';

const C = { deep: '#0f2742', sky: '#2f6ea8', accent: '#7fb2dd', bg: '#eef4fa', line: '#dde7f2' };

const page = (lbl, title, body, extra = '') => `
  <div class="page"><div class="pad">
    <div class="lbl">${esc(lbl)}</div>
    <h2>${esc(title)}</h2>
    <div class="rule"></div>
    ${body}
    ${extra}
    <div class="foot"><span>Teranova Group · AIA Group Ltd.</span><span>teranovagroup.com</span></div>
  </div></div>`;

const cards = (arr) =>
  `<div class="cards">${arr.map((x) => `<div class="card"><div class="n">${esc(x.n)}</div><div class="d">${esc(x.d)}</div></div>`).join('')}</div>`;
const rows = (arr) =>
  `<div class="rows">${arr.map((x) => `<div class="row"><div class="n">${esc(x.n)}</div><div class="d">${esc(x.d)}</div></div>`).join('')}</div>`;
const steps = (arr) =>
  `<div class="rows">${arr.map((x, i) => `<div class="row"><div class="n">${i + 1}. ${esc(x.n)}</div><div class="d">${esc(x.d)}</div></div>`).join('')}</div>`;

export function teranovaDeckHTML(lang, T, stats) {
  const P = [];

  P.push(`
  <div class="page cover">
    ${coverArt('clinical', C.sky, C.accent)}
    <div class="cover__t">
      <div class="eyebrow">${esc(T.eyebrow)}</div>
      <h1>Teranova Group</h1>
      <div class="tag">${esc(T.tagline)}</div>
      <div class="desc">${esc(T.descriptor)}</div>
    </div>
    <div class="cover__t" style="flex:0 0 auto;padding-bottom:20mm;opacity:.9">
      <div class="desc" style="margin-top:0;font-weight:700">Teranova Group · AIA Group Ltd. · Korea</div>
      <div class="desc" style="margin-top:2mm">info@teranovagroup.com · teranovagroup.com</div>
    </div>
  </div>`);

  P.push(page(T.eyebrow, T.who_h,
    T.who.map((p) => `<p>${esc(p)}</p>`).join('') + `<div class="chips">${chips(T.who_facts)}</div>`));

  P.push(page(T.eyebrow, T.listing_h,
    `<p>${esc(T.listing_lead)}</p>` + cards(T.listing) +
    `<div class="disc">${esc(T.listing_note)}</div>`));

  P.push(page(T.eyebrow, T.verify_h,
    `<p>${esc(T.verify_lead)}</p>` + rows(T.verify) +
    `<div class="disc">${esc(T.verify_note)}</div>`));

  P.push(page(T.eyebrow, T.deal_h, steps(T.deal)));

  P.push(page(T.eyebrow, T.cost_h,
    `<p>${esc(T.cost_lead)}</p>` + rows(T.cost) + `<div class="disc">${esc(T.cost_note)}</div>`));

  P.push(page(T.eyebrow, T.markets_h,
    `<div class="lbl" style="margin-top:1mm">${esc(T.markets_sub1)}</div>
     <div class="chips">${chips(T.markets)}</div>
     <div class="lbl" style="margin-top:7mm">${esc(T.markets_sub2)}</div>
     <div class="chips">${chips(T.channels)}</div>
     <div class="lbl" style="margin-top:7mm">${esc(T.markets_sub3)}</div>
     <div class="chips">${chips(T.categories)}</div>
     <div class="disc">${esc(T.markets_note)}</div>`));

  P.push(page(T.eyebrow, T.need_h, `<p>${esc(T.need_lead)}</p>` + rows(T.need),
    `<div class="cta"><div class="h">${esc(T.cta_h)}</div>
       <div class="d">${esc(T.cta_d)}</div>
       <div class="d" style="font-weight:700">Teranova Group · info@teranovagroup.com · teranovagroup.com</div></div>`));

  return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8">
    <style>${deckCSS(C, 'clinical')}</style></head><body>${P.join('')}</body></html>`;
}
export { C as DECK_COLORS };
