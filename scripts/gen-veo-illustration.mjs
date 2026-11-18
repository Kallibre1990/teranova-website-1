/* Generate the one product illustration for VEO Biotech's Helio PDRN raw
   material. Per docs/IMAGERY.md: VEO sent no packshot (the material is a
   powder, not a bottled product), so a real-photo card would be a fake photo
   of goods. This draws an abstract DNA-fragment motif in the supplier's own
   logo colours instead of the "HP"/"HPS" text monogram — reproducible, no
   stock, no AI photo of a factory or product.
   Run: node scripts/gen-veo-illustration.mjs
   Output: public/img/suppliers/veo-biotech/catalog/helio-pdrn.png (1000x1000) */
import sharp from 'sharp';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, '../public/img/suppliers/veo-biotech/catalog');
const S = 1000;

/* Exact colours sampled from the supplier's own logo
   (_MAIL_CRM/contacts/helio-bio-com/files/image.png): navy "VEO"/"BIOTECH"
   wordmark and the teal triangle inside the "V" (T-20261116-012). */
const DEEP = '#053365';
const DEEP2 = '#0A4A8A';
const TEAL = '#05A5A4';
const TEAL_L = '#3FC9C7';
const ICE = '#EAFBFA';

const cx = S / 2;
const cy = S / 2;

/* Double helix — the two strands plus cross-rungs, same construction as
   scripts/gen-blog-art.mjs's helix(), recoloured and reoriented vertically
   to fit a 1:1 frame. */
function helix(len, amp, turns) {
  const pts = (phase) => {
    let d = '';
    for (let i = 0; i <= 140; i++) {
      const t = i / 140;
      const y = cy - len / 2 + len * t;
      const x = cx + Math.sin(t * Math.PI * 2 * turns + phase) * amp;
      d += `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`;
    }
    return d;
  };
  const rungs = Array.from({ length: 17 }, (_, i) => {
    const t = (i + 0.5) / 17;
    const y = cy - len / 2 + len * t;
    const a = cx + Math.sin(t * Math.PI * 2 * turns) * amp;
    const b = cx + Math.sin(t * Math.PI * 2 * turns + 2.1) * amp;
    return `<path d="M${a.toFixed(1)} ${y.toFixed(1)} L${b.toFixed(1)} ${y.toFixed(1)}" stroke="${ICE}" stroke-opacity="0.3" stroke-width="2.6"/>`;
  }).join('');
  return `<g fill="none" stroke-linecap="round">
    ${rungs}
    <path d="${pts(0)}" stroke="${ICE}" stroke-opacity="0.92" stroke-width="7"/>
    <path d="${pts(2.1)}" stroke="${TEAL_L}" stroke-opacity="0.92" stroke-width="7"/>
  </g>`;
}

/* Loose fragments breaking off the strand — PDRN is sold as fragmented DNA,
   not an intact polymer; small dashes read as "fragments" without claiming
   to be a real instrument image. */
function fragments() {
  const specs = [
    [250, 230, 60, 18], [720, 210, 50, -12], [200, 640, 46, 30],
    [760, 700, 58, -22], [300, 850, 40, 8], [690, 870, 44, -6],
    [130, 430, 34, 40], [850, 460, 36, -34],
  ];
  return specs.map(([x, y, w, rot]) => `
    <g transform="translate(${x} ${y}) rotate(${rot})" opacity="0.55">
      <rect x="${-w / 2}" y="-5" width="${w}" height="10" rx="5" fill="${TEAL_L}"/>
    </g>`).join('');
}

/* A dusting of dots — the cosmetic-grade powder the raw material actually
   ships as. */
function powder() {
  let out = '';
  let seed = 7;
  const rand = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
  for (let i = 0; i < 90; i++) {
    const x = rand() * S;
    const y = rand() * S;
    const r = 1.4 + rand() * 2.6;
    out += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(1)}" fill="${ICE}" opacity="${(0.12 + rand() * 0.22).toFixed(2)}"/>`;
  }
  return out;
}

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${S}" height="${S}" viewBox="0 0 ${S} ${S}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="${S}" y2="${S}" gradientUnits="userSpaceOnUse">
      <stop stop-color="${DEEP}"/><stop offset="1" stop-color="${DEEP2}"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="38%" r="60%">
      <stop offset="0%" stop-color="${TEAL}" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="${TEAL}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${S}" height="${S}" fill="url(#bg)"/>
  <rect width="${S}" height="${S}" fill="url(#glow)"/>
  ${powder()}
  ${fragments()}
  ${helix(760, 108, 3.4)}
</svg>`;

fs.mkdirSync(OUT, { recursive: true });
const file = resolve(OUT, 'helio-pdrn.png');
await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(file);
const kb = (fs.statSync(file).size / 1024).toFixed(0);
console.log(`helio-pdrn.png  ${kb} KB  -> ${file}`);
