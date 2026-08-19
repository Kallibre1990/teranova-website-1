/* Generate illustration covers for blog posts that have no real product photo.
   Run: node scripts/gen-blog-art.mjs
   Output: public/img/blog/art-<slug>.png (1200x480)

   Per docs/IMAGERY.md these are ILLUSTRATIONS, not evidence: abstract, drawn in
   the brand palette, never imitating a documentary photo of a real factory,
   room or person. Real product photos always win — this only fills the gaps.
   Everything is vector, built here in code, so it is reproducible and free of
   third-party rights. */
import sharp from 'sharp';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, '../public/img/blog');
const W = 1200;
const H = 480;

/* Brand palette (src/styles) */
const NAVY = '#0b1b35';
const NAVY2 = '#0e2243';
const NAVY3 = '#13294e';
const COBALT = '#2563d4';
const COBALT_L = '#3f7ae0';
const SILVER = '#c3d0e2';
const ICE = '#eaf1fb';

const shell = (body, glow = '72% 18%') => `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="${W}" y2="${H}" gradientUnits="userSpaceOnUse">
      <stop stop-color="${NAVY}"/><stop offset="0.55" stop-color="${NAVY2}"/><stop offset="1" stop-color="${NAVY3}"/>
    </linearGradient>
    <radialGradient id="glow" cx="${glow.split(' ')[0]}" cy="${glow.split(' ')[1]}" r="62%">
      <stop offset="0%" stop-color="${COBALT}" stop-opacity="0.46"/>
      <stop offset="100%" stop-color="${COBALT}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="edge" x1="0" y1="0" x2="0" y2="${H}" gradientUnits="userSpaceOnUse">
      <stop stop-color="${ICE}" stop-opacity="0.92"/><stop offset="1" stop-color="${COBALT_L}" stop-opacity="0.34"/>
    </linearGradient>
    <linearGradient id="sheen" x1="0" y1="0" x2="${W}" y2="0" gradientUnits="userSpaceOnUse">
      <stop stop-color="${COBALT_L}" stop-opacity="0.15"/><stop offset="0.5" stop-color="${ICE}" stop-opacity="0.5"/>
      <stop offset="1" stop-color="${COBALT_L}" stop-opacity="0.15"/>
    </linearGradient>
    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M60 0H0V60" fill="none" stroke="#4c74b4" stroke-opacity="0.15" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${body}
  <rect y="${H - 5}" width="${W}" height="5" fill="${COBALT}" opacity="0.8"/>
</svg>`;

/* ---- building blocks ---------------------------------------------------- */

/* Stylised sheet of paper with lines and a seal — documents / registrations. */
const sheet = (x, y, w, h, rot, sealed) => `
<g transform="translate(${x} ${y}) rotate(${rot})">
  <rect width="${w}" height="${h}" rx="8" fill="${NAVY3}" stroke="url(#edge)" stroke-width="1.6" opacity="0.96"/>
  ${[0, 1, 2, 3, 4].map((i) => `<rect x="${w * 0.12}" y="${h * 0.18 + i * h * 0.115}" width="${w * (i === 4 ? 0.42 : 0.72)}" height="4" rx="2" fill="${SILVER}" opacity="${0.34 - i * 0.03}"/>`).join('')}
  ${sealed ? `<circle cx="${w * 0.74}" cy="${h * 0.76}" r="${w * 0.13}" fill="none" stroke="${COBALT_L}" stroke-width="2.2" opacity="0.9"/>
     <path d="M${w * 0.68} ${h * 0.76} l${w * 0.04} ${w * 0.04} l${w * 0.08} -${w * 0.09}" fill="none" stroke="${ICE}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>` : ''}
</g>`;

/* Rounded node box with a label bar inside — process steps. */
const node = (x, y, w, h, accent) => `
<g transform="translate(${x} ${y})">
  <rect width="${w}" height="${h}" rx="12" fill="${accent ? COBALT : NAVY3}" fill-opacity="${accent ? 0.3 : 0.92}" stroke="url(#edge)" stroke-width="1.6"/>
  <rect x="18" y="${h / 2 - 9}" width="${w - 36}" height="5" rx="2.5" fill="${ICE}" opacity="0.55"/>
  <rect x="18" y="${h / 2 + 2}" width="${(w - 36) * 0.6}" height="5" rx="2.5" fill="${SILVER}" opacity="0.32"/>
</g>`;

const arrow = (x1, y, x2) => `
<g stroke="${COBALT_L}" stroke-width="2" opacity="0.75">
  <path d="M${x1} ${y} H${x2 - 10}" stroke-linecap="round"/>
  <path d="M${x2 - 16} ${y - 6} l6 6 -6 6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>`;

/* Triple helix — collagen. */
const helix = (cx, cy, len, amp, turns) => {
  const pts = (phase) => {
    let d = '';
    for (let i = 0; i <= 120; i++) {
      const t = i / 120;
      const x = cx - len / 2 + len * t;
      const yy = cy + Math.sin(t * Math.PI * 2 * turns + phase) * amp;
      d += `${i ? 'L' : 'M'}${x.toFixed(1)} ${yy.toFixed(1)}`;
    }
    return d;
  };
  const rungs = Array.from({ length: 15 }, (_, i) => {
    const t = (i + 0.5) / 15;
    const x = cx - len / 2 + len * t;
    const a = cy + Math.sin(t * Math.PI * 2 * turns) * amp;
    const b = cy + Math.sin(t * Math.PI * 2 * turns + 2.1) * amp;
    return `<path d="M${x.toFixed(1)} ${a.toFixed(1)} L${x.toFixed(1)} ${b.toFixed(1)}" stroke="${SILVER}" stroke-opacity="0.28" stroke-width="1.4"/>`;
  }).join('');
  return `<g fill="none" stroke-linecap="round">
    ${rungs}
    <path d="${pts(0)}" stroke="${ICE}" stroke-opacity="0.85" stroke-width="2.6"/>
    <path d="${pts(2.1)}" stroke="${COBALT_L}" stroke-opacity="0.85" stroke-width="2.6"/>
    <path d="${pts(4.2)}" stroke="${COBALT}" stroke-opacity="0.6" stroke-width="2.2"/>
  </g>`;
};

/* Hex mesh — molecular network (hyaluronic acid / actives). */
const hexMesh = (cx, cy, r, cols, rows) => {
  const hex = (x, y, rr, op) => {
    const p = Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 3) * i - Math.PI / 6;
      return `${(x + rr * Math.cos(a)).toFixed(1)},${(y + rr * Math.sin(a)).toFixed(1)}`;
    }).join(' ');
    return `<polygon points="${p}" fill="none" stroke="${COBALT_L}" stroke-opacity="${op}" stroke-width="1.8"/>`;
  };
  let out = '';
  const dx = r * Math.sqrt(3);
  const dy = r * 1.5;
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      const x = cx + (i - (cols - 1) / 2) * dx + (j % 2 ? dx / 2 : 0);
      const y = cy + (j - (rows - 1) / 2) * dy;
      const d = Math.hypot(x - cx, y - cy) / (cols * dx * 0.5);
      out += hex(x, y, r, Math.max(0.12, 0.75 - d * 0.7));
    }
  }
  return `<g>${out}</g>`;
};

/* Water drop with a highlight — hydration. */
const drop = (cx, cy, s, op = 1) => `
<g transform="translate(${cx} ${cy}) scale(${s})" opacity="${op}">
  <path d="M0 -46 C 26 -14, 34 4, 34 16 A 34 34 0 0 1 -34 16 C -34 4, -26 -14, 0 -46 Z"
        fill="${COBALT}" fill-opacity="0.26" stroke="url(#edge)" stroke-width="2"/>
  <ellipse cx="-11" cy="10" rx="7" ry="10" fill="${ICE}" opacity="0.5"/>
</g>`;

/* Skin layers — cross-section abstraction, no realistic depiction. */
const layers = (x, y, w) => `
<g transform="translate(${x} ${y})">
  ${[0, 1, 2].map((i) => `<path d="M0 ${i * 34} q ${w * 0.25} -18 ${w * 0.5} 0 t ${w * 0.5} 0"
      fill="none" stroke="${i === 0 ? ICE : COBALT_L}" stroke-opacity="${0.75 - i * 0.2}" stroke-width="${2.6 - i * 0.5}"/>`).join('')}
</g>`;

/* Node-and-line network — industry / connections. */
const network = (nodes, edges) => `
<g>
  <g stroke="${COBALT_L}" stroke-opacity="0.42" stroke-width="1.5" fill="none">
    ${edges.map(([a, b]) => `<path d="M${nodes[a][0]} ${nodes[a][1]} L${nodes[b][0]} ${nodes[b][1]}"/>`).join('')}
  </g>
  ${nodes.map(([x, y, r = 7], i) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${i === 0 ? ICE : COBALT_L}" opacity="${i === 0 ? 0.95 : 0.8}"/>`).join('')}
</g>`;

/* Hair strands over a follicle-free abstraction — scalp care. */
const strands = (cx, cy) => `
<g fill="none" stroke-linecap="round">
  ${Array.from({ length: 9 }, (_, i) => {
    const x = cx - 200 + i * 50;
    const sway = (i % 3) * 14 - 14;
    return `<path d="M${x} ${cy + 120} C ${x + sway} ${cy + 30}, ${x - sway} ${cy - 40}, ${x + sway * 1.5} ${cy - 120}"
      stroke="${i % 2 ? COBALT_L : SILVER}" stroke-opacity="${i % 2 ? 0.7 : 0.4}" stroke-width="${2.4 - (i % 3) * 0.5}"/>`;
  }).join('')}
  <ellipse cx="${cx}" cy="${cy + 132}" rx="230" ry="26" fill="${COBALT}" fill-opacity="0.18" stroke="url(#edge)" stroke-width="1.6"/>
</g>`;

/* ---- one composition per article --------------------------------------- */

const ART = {
  /* Три активных вещества как три капли: абстракция, не фото продукта. */
  'rudia-active-ingredients-2026': shell(`
    ${drop(330, 214, 1.45, 0.9)}
    ${drop(600, 188, 1.95, 1)}
    ${drop(870, 214, 1.45, 0.9)}
    <g opacity="0.75">${hexMesh(600, 392, 16, 7, 2)}</g>
  `, '50% 14%'),

  /* Registrations and dossiers: sheets with check-seals. */
  'korean-cosmetics-certifications': shell(`
    ${sheet(300, 96, 190, 268, -7, true)}
    ${sheet(505, 76, 190, 268, 0, true)}
    ${sheet(710, 96, 190, 268, 7, true)}
    <rect x="505" y="386" width="190" height="6" rx="3" fill="url(#sheen)"/>
  `),

  /* Brand brief travels to contract production and back as a finished product. */
  'oem-odm-korea-guide': shell(`
    ${node(150, 196, 210, 92, true)}
    ${arrow(370, 242, 470)}
    ${node(470, 196, 210, 92, false)}
    ${arrow(690, 242, 790)}
    ${node(790, 196, 210, 92, true)}
    <g opacity="0.85">${drop(255, 150, 0.5, 0.7)}</g>
    ${layers(470, 330, 210)}
  `, '50% 12%'),

  /* Korea as a dense hub of makers — network, not a map of a real place. */
  'why-korea-kbeauty': shell(network(
    [[600, 232, 13], [420, 150], [760, 138], [330, 300], [860, 300], [530, 356], [700, 358], [250, 210], [950, 208]],
    [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [1, 7], [2, 8], [3, 5], [4, 6], [1, 2]],
  ) + `<circle cx="600" cy="232" r="120" fill="none" stroke="${COBALT_L}" stroke-opacity="0.25" stroke-width="1.4"/>
       <circle cx="600" cy="232" r="184" fill="none" stroke="${COBALT_L}" stroke-opacity="0.14" stroke-width="1.2"/>`),

  /* Brand owner vs plant: two blocks, one link, no claim about a real site. */
  'jets-oem-odm-brand-owner': shell(`
    ${node(210, 178, 250, 124, true)}
    ${node(740, 178, 250, 124, false)}
    ${arrow(470, 240, 730)}
    <path d="M470 288 H730" stroke="${SILVER}" stroke-opacity="0.3" stroke-width="1.4" stroke-dasharray="6 8"/>
    <g opacity="0.9">${hexMesh(600, 396, 17, 7, 2)}</g>
  `, '30% 15%'),

  /* Collagen: the triple helix is the molecule's own signature. */
  'collagen-leader-line': shell(`
    ${helix(600, 224, 700, 74, 3)}
    <g opacity="0.75">${hexMesh(600, 396, 16, 9, 2)}</g>
  `),

  /* Hyaluronic core: mesh holding water. */
  'hyalquad-core-line': shell(`
    ${hexMesh(600, 226, 40, 7, 4)}
    ${drop(600, 214, 1.5)}
    ${layers(430, 372, 340)}
  `, '62% 22%'),

  /* Age + hydration: layered surface with drops sinking in. */
  'anti-age-hydration': shell(`
    ${drop(420, 172, 1.25, 0.95)}
    ${drop(600, 138, 1.7)}
    ${drop(780, 176, 1.15, 0.85)}
    ${layers(250, 300, 700)}
    ${layers(250, 372, 700)}
  `, '50% 10%'),

  /* Two molecules side by side — the comparison itself. */
  'hyaluronic-vs-collagen': shell(`
    <g transform="translate(-262 0)">${hexMesh(600, 226, 34, 5, 3)}</g>
    <path d="M600 118 V346" stroke="${SILVER}" stroke-opacity="0.28" stroke-width="1.4" stroke-dasharray="7 9"/>
    <g transform="translate(268 0)">${helix(600, 226, 330, 62, 2)}</g>
    ${drop(338, 226, 0.62, 0.9)}
    <g opacity="0.9"><circle cx="862" cy="226" r="9" fill="${ICE}" opacity="0.8"/></g>
  `, '50% 14%'),

  /* Scalp care: strands rising from an abstract surface. */
  'korean-scalp-care-category': shell(`
    ${strands(600, 196)}
    ${drop(300, 150, 0.85, 0.75)}
    ${drop(905, 168, 0.7, 0.6)}
  `, '55% 8%'),
};

fs.mkdirSync(OUT, { recursive: true });
let n = 0;
for (const [slug, svg] of Object.entries(ART)) {
  const file = resolve(OUT, `art-${slug}.png`);
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(file);
  const kb = (fs.statSync(file).size / 1024).toFixed(0);
  console.log(`  art-${slug}.png  ${kb} KB`);
  n++;
}
console.log(`\nГотово: ${n} иллюстраций в public/img/blog/`);
