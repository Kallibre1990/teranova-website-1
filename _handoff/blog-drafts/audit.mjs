// Сплошной офлайн-аудит сборки dist/ сайта Teranova.
// Проверки: битые внутренние ссылки, битые картинки/PDF, hreflang,
// запрещённые слова, кириллица на нерусских страницах, чужие бренды
// на страницах поставщиков, паритет каталогов по языкам, JSON-LD.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';

const DIST = '/Users/madelkanov/teranovagroup/teranova-website/dist';
const LANGS = ['ru','en','ko','zh','ja','it','de','fr','tr','es','pt'];
const SUPPLIERS = ['sante','dreamcos','dongdonggurimoo','ck-regeon','jetsglobal','pineworld','kift','icelmedi','three-days-love','licorne','cubecap','doobom','cocospack','multifit'];

// имена брендов для проверки перекрёстных утечек (страница поставщика X не должна упоминать бренд Y)
const BRAND_MARKS = {
  'sante': ['Dr.SANTE','Dr. SANTE','SANTE COSMETIC'],
  'dreamcos': ['DREAMCOS','Dreamcos'],
  'dongdonggurimoo': ['DONGDONGGURIMOO','LEBELAGE','HEEYUL'],
  'ck-regeon': ['CK REGEON','DermaRegeon','HAIRREGEON','HERIBON'],
  'jetsglobal': ['JETSGLOBAL','TOM-TIT-TOT'],
  'pineworld': ['PINE WORLD','PINEWORLD'],
  'kift': ['KIFT'],
  'icelmedi': ['iCELmedi','ICELMEDI'],
  'three-days-love': ['THREE DAYS LOVE'],
  'licorne': ['LICORNE'],
  'cubecap': ['CUBE CAP','COCAPS'],
  'doobom': ['DOOBOM','Vol-New-Up','Slim Ultra Max'],
  'cocospack': ['COCOSPACK'],
  'multifit': ['MULTIFIT'],
};

const pages = [];
(function walk(dir){
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    const st = statSync(p);
    if (st.isDirectory()) walk(p);
    else if (e.endsWith('.html')) pages.push(p);
  }
})(DIST);

const issues = [];
const add = (type, page, detail) => issues.push({ type, page: page.replace(DIST,''), detail });

// текст без тегов, скриптов и стилей
const visibleText = (html) => html
  .replace(/<script[\s\S]*?<\/script>/gi,' ')
  .replace(/<style[\s\S]*?<\/style>/gi,' ')
  .replace(/<[^>]+>/g,' ');

const fileForUrl = (url) => {
  let u = url.split('#')[0].split('?')[0];
  if (!u) return true;
  if (/^(https?:|mailto:|tel:|javascript:|data:)/.test(u)) return true; // внешнее не проверяем офлайн
  if (!u.startsWith('/')) return true; // относительных быть не должно, но не считаем ошибкой пути
  let f = join(DIST, decodeURIComponent(u));
  if (u.endsWith('/')) f = join(f, 'index.html');
  if (existsSync(f)) return true;
  if (existsSync(f + '.html')) return true;
  if (existsSync(join(f, 'index.html'))) return true;
  return false;
};

const catalogCounts = {}; // supplier -> lang -> count
const langOfPage = (rel) => {
  const m = rel.match(/^\/(en|ko|zh|ja|it|de|fr|tr|es|pt)\//);
  return m ? m[1] : 'ru';
};
const supplierOfPage = (rel) => {
  const m = rel.match(/\/catalog\/([a-z0-9-]+)\//);
  return m && SUPPLIERS.includes(m[1]) ? m[1] : null;
};

for (const p of pages) {
  const rel = p.replace(DIST,'');
  const html = readFileSync(p,'utf8');
  const lang = langOfPage(rel);
  const sup = supplierOfPage(rel);

  // 1) ссылки и ресурсы
  for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const u = m[1];
    if (!fileForUrl(u)) add('broken-ref', rel, u);
  }
  for (const m of html.matchAll(/srcset="([^"]+)"/g)) {
    for (const part of m[1].split(',')) {
      const u = part.trim().split(/\s+/)[0];
      if (u && !fileForUrl(u)) add('broken-srcset', rel, u);
    }
  }

  // 2) hreflang: на индексируемых страницах ждём полный набор
  const hreflangs = [...html.matchAll(/hreflang="([^"]+)"/g)].map(m=>m[1]);
  if (hreflangs.length > 0) {
    for (const l of ['ru','en','ko']) {
      if (!hreflangs.includes(l)) add('hreflang-missing', rel, l);
    }
  }

  // 3) запрещённые слова в видимом тексте
  const text = visibleText(html);
  for (const bad of [/\bгарант/i, /\bguarantee/i, /\bBusan\b/i, /Пусан/i, /부산/]) {
    const m = text.match(bad);
    if (m) add('forbidden-word', rel, m[0]);
  }

  // 4) кириллица на нерусских страницах (кроме переключателя языков)
  if (lang !== 'ru') {
    // вырежем переключатель языков и hidden-элементы приблизительно по известным словам
    const t = text.replace(/Русский/g,'');
    const m = t.match(/[А-Яа-яЁё]{4,}/);
    if (m) add('cyrillic-leak', rel, m[0]);
  }

  // 5) чужие бренды на странице поставщика
  if (sup) {
    for (const [other, marks] of Object.entries(BRAND_MARKS)) {
      if (other === sup) continue;
      for (const mark of marks) {
        if (text.includes(mark)) add('foreign-brand', rel, `${other}: ${mark}`);
      }
    }
    // 6) паритет каталога: считаем карточки
    const cards = (html.match(/class="[^"]*catalog-card/g) || []).length;
    (catalogCounts[sup] ||= {})[lang] = cards;
  }

  // 7) JSON-LD парсится
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch(e){ add('jsonld-broken', rel, e.message.slice(0,80)); }
  }

  // 8) пустой title / description
  if (!/<title>[^<]+<\/title>/.test(html)) add('no-title', rel, '');
  if (!/name="description" content="[^"]+"/.test(html)) add('no-description', rel, '');
}

// сводка паритета каталогов
const parity = [];
for (const [sup, byLang] of Object.entries(catalogCounts)) {
  const counts = new Set(Object.values(byLang));
  if (counts.size > 1) parity.push({ sup, byLang });
}

// вывод
const byType = {};
for (const i of issues) (byType[i.type] ||= []).push(i);
console.log('=== СВОДКА ===');
console.log('страниц проверено:', pages.length);
for (const [t, list] of Object.entries(byType)) {
  console.log(`\n--- ${t}: ${list.length} ---`);
  const uniq = new Map();
  for (const i of list) {
    const k = i.type + '|' + i.detail;
    if (!uniq.has(k)) uniq.set(k, { ...i, n: 0 });
    uniq.get(k).n++;
  }
  for (const i of [...uniq.values()].slice(0, 40)) console.log(`  [${i.n}x] ${i.page}  →  ${i.detail}`);
  if (uniq.size > 40) console.log(`  ... и ещё ${uniq.size - 40} уникальных`);
}
console.log('\n=== ПАРИТЕТ КАТАЛОГОВ ===');
if (!parity.length) console.log('расхождений нет');
for (const p of parity) console.log(p.sup, JSON.stringify(p.byLang));
console.log('\n=== КАРТОЧЕК В КАТАЛОГАХ (ru) ===');
for (const [sup, byLang] of Object.entries(catalogCounts)) console.log(`  ${sup}: ${byLang.ru ?? '-'}`);
