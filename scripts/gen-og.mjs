/* Generate per-page Open Graph share images (1200x630) so profiles, categories and
   blog posts get individual link previews instead of one generic card.
   Run: node scripts/gen-og.mjs
   Output: public/brand/og-<slug>.png (suppliers), og-cat-<key>.png (categories),
           og-blog-<slug>.png (articles). Language-neutral, EN text (Latin/Cyrillic
           safe for the bundled fonts). og-default.png stays as the fallback. */
import sharp from 'sharp';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, '../public/brand');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* naive word-wrap to N lines by max chars per line */
function wrap(text, max, maxLines) {
  const words = text.split(/\s+/);
  const lines = [];
  let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length > max && cur) { lines.push(cur); cur = w; }
    else cur = (cur + ' ' + w).trim();
    if (lines.length === maxLines - 1) { // last line: dump remaining
      const rest = words.slice(words.indexOf(w)).join(' ');
      cur = rest.length > max ? rest.slice(0, max - 1) + '…' : rest;
      lines.push(cur); return lines;
    }
  }
  if (cur) lines.push(cur);
  return lines.slice(0, maxLines);
}

function card({ eyebrow, title, accent = '#3F7AE0' }) {
  const lines = wrap(title, 26, 3);
  const fs0 = lines.length >= 3 ? 60 : 68;
  const startY = 300 - (lines.length - 1) * (fs0 * 0.58);
  const titleSvg = lines
    .map((l, i) => `<text x="96" y="${Math.round(startY + i * fs0 * 1.12)}" font-family="Manrope, 'DejaVu Sans', sans-serif" font-size="${fs0}" font-weight="800" letter-spacing="-1" fill="#F4F7FB">${esc(l)}</text>`)
    .join('');
  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="bg" cx="78%" cy="-10%" r="120%">
        <stop offset="0%" stop-color="#102a52"/><stop offset="48%" stop-color="#0b1b35"/><stop offset="100%" stop-color="#081325"/>
      </radialGradient>
      <radialGradient id="glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${accent}" stop-opacity="0.40"/><stop offset="70%" stop-color="${accent}" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="tile" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#3F7AE0"/><stop offset="1" stop-color="#0B1B35"/></linearGradient>
      <linearGradient id="metal" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="60%" stop-color="#CBD4E0"/><stop offset="100%" stop-color="#EDF1F6"/></linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <circle cx="980" cy="40" r="460" fill="url(#glow)"/>
    <g stroke="#ffffff" stroke-opacity="0.05" stroke-width="1">
      ${Array.from({ length: 14 }, (_, i) => `<line x1="${i * 96}" y1="0" x2="${i * 96}" y2="630"/>`).join('')}
      ${Array.from({ length: 8 }, (_, i) => `<line x1="0" y1="${i * 96}" x2="1200" y2="${i * 96}"/>`).join('')}
    </g>
    <rect x="96" y="86" width="12" height="34" rx="3" fill="${accent}"/>
    <text x="120" y="112" font-family="Manrope, 'DejaVu Sans', sans-serif" font-size="24" font-weight="700" letter-spacing="3" fill="#9FB3CE">${esc(eyebrow.toUpperCase())}</text>
    ${titleSvg}
    <g transform="translate(96 520)">
      <rect x="0" y="0" width="52" height="52" rx="14" fill="url(#tile)"/>
      <rect x="12" y="14" width="28" height="5.2" rx="2.6" fill="#EDF1F6"/>
      <rect x="23.3" y="14" width="5.2" height="25" rx="2.6" fill="#EDF1F6"/>
      <text x="70" y="26" font-family="Manrope, 'DejaVu Sans', sans-serif" font-size="27" font-weight="800" letter-spacing="-0.5" fill="url(#metal)">Teranova <tspan fill="${accent}">Group</tspan></text>
      <text x="70" y="48" font-family="Manrope, 'DejaVu Sans', sans-serif" font-size="17" font-weight="500" fill="#8598B4">Verified Korean suppliers · full deal support</text>
    </g>
  </svg>`;
}

async function render(name, opts) {
  await sharp(Buffer.from(card(opts))).png().toFile(resolve(OUT, name));
  process.stdout.write(` ${name.replace('og-', '').replace('.png', '')}`);
}

/* Data (EN, language-neutral). */
const CATS = {
  marine: 'Marine supply', cosmetics: 'Cosmetics & care (OEM/ODM)', medical: 'Medical & aesthetics',
  industrial: 'Industrial equipment', transport: 'Commercial & special vehicles', adjacent: 'Adjacent sectors', chemical: 'Chemicals & materials',
};
const SUPPLIERS = {
  sante: { eyebrow: 'Supplier profile', title: 'SANTE COSMETICS · Dr.SANTE — Korean aesthetic skincare' },
  dreamcos: { eyebrow: 'Supplier profile', title: 'DREAMCOS — Korean K-beauty group (OEM/ODM & brands)', accent: '#c9a15f' },
  dongdonggurimoo: { eyebrow: 'Supplier profile', title: 'LEBELAGE & HEEYUL — Korean cosmetics by DONGDONGGURIMOO', accent: '#4e9c7f' },
  'ck-regeon': { eyebrow: 'Supplier profile', title: 'CK REGEON — Korean scalp & hair care science', accent: '#4fbfae' },
  jetsglobal: { eyebrow: 'Supplier profile', title: 'TOM-TIT-TOT by JETSGLOBAL — Korean aesthetic skincare', accent: '#c19a5b' },
  pineworld: { eyebrow: 'Supplier profile', title: 'RAVIEL by PINE WORLD — Korean skincare (brightening, firmness, hydration)', accent: '#c68aa6' },
  kift: { eyebrow: 'Supplier profile', title: 'KIFT — Korean all-in-one high-efficiency skincare', accent: '#2f6fb0' },
  icelmedi: { eyebrow: 'Supplier profile', title: 'iCELmedi — cellmedics cosmeceuticals & KERASON devices', accent: '#17788f' },
  'three-days-love': { eyebrow: 'Supplier profile', title: 'THREE DAYS LOVE — K-beauty cosmeceuticals · SPICUS® & EXOMERE', accent: '#e0562e' },
  licorne: { eyebrow: 'Supplier profile', title: 'LICORNE by Limetree — Korean vegan skincare for sensitive skin', accent: '#4e9c6b' },
  cubecap: { eyebrow: 'Supplier profile', title: 'COCAPS by CUBE CAP — Korean single-dose cosmetic capsules', accent: '#1f7ec4' },
  doobom: { eyebrow: 'Supplier profile', title: 'DOOBOM — Korean professional aesthetic skincare & device programs', accent: '#2f9c8a' },
  cocospack: { eyebrow: 'Supplier profile', title: 'COCOSPACK — Korean cosmetic packaging (full in-house cycle)', accent: '#2d2da8' },
  multifit: { eyebrow: 'Supplier profile', title: 'MULTIFIT — pipe-cutting robots & industrial brushes', accent: '#f2b21c' },
};

const blog = JSON.parse(fs.readFileSync(resolve(__dirname, '../src/data/blog.json'), 'utf8'));

console.log('OG:');
for (const [k, name] of Object.entries(CATS)) await render(`og-cat-${k}.png`, { eyebrow: 'Category', title: name });
for (const [slug, s] of Object.entries(SUPPLIERS)) await render(`og-${slug}.png`, s);
for (const p of blog) {
  const en = p.i18n.en?.title || p.i18n.ru.title;
  await render(`og-blog-${p.slug}.png`, { eyebrow: p.category === 'overview' ? 'Insight' : 'Guide', title: en, accent: p.supplier === 'dreamcos' ? '#c9a15f' : '#3F7AE0' });
}
console.log(`\nГотово: ${Object.keys(CATS).length + Object.keys(SUPPLIERS).length + blog.length} OG-карточек в public/brand/`);
