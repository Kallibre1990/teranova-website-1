/* Regenerate the Open Graph share image: node scripts/make-og.mjs
   Output: public/brand/og-default.png (1200x630). */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, '../public/brand/og-default.png');

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bg" cx="78%" cy="-10%" r="120%">
      <stop offset="0%" stop-color="#102a52"/>
      <stop offset="48%" stop-color="#0b1b35"/>
      <stop offset="100%" stop-color="#081325"/>
    </radialGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#2563d4" stop-opacity="0.42"/>
      <stop offset="70%" stop-color="#2563d4" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="tile" x1="0" y1="0" x2="1" y2="1">
      <stop stop-color="#3F7AE0"/>
      <stop offset="1" stop-color="#0B1B35"/>
    </linearGradient>
    <linearGradient id="metal" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="60%" stop-color="#CBD4E0"/>
      <stop offset="100%" stop-color="#EDF1F6"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="980" cy="40" r="460" fill="url(#glow)"/>
  <g stroke="#ffffff" stroke-opacity="0.05" stroke-width="1">
    ${Array.from({ length: 14 }, (_, i) => `<line x1="${i * 96}" y1="0" x2="${i * 96}" y2="630"/>`).join('')}
    ${Array.from({ length: 8 }, (_, i) => `<line x1="0" y1="${i * 96}" x2="1200" y2="${i * 96}"/>`).join('')}
  </g>

  <g transform="translate(96 250)">
    <rect x="0" y="0" width="104" height="104" rx="28" fill="url(#tile)"/>
    <rect x="48.7" y="28" width="10.4" height="52" rx="5.2" fill="#3F7AE0" opacity="0.55"/>
    <rect x="24" y="28" width="56" height="10.4" rx="5.2" fill="#EDF1F6"/>
    <rect x="46.7" y="28" width="10.4" height="50" rx="5.2" fill="#EDF1F6"/>
  </g>

  <text x="230" y="300" font-family="Manrope, 'DejaVu Sans', sans-serif" font-size="76" font-weight="800" letter-spacing="-1.5" fill="url(#metal)">Teranova</text>
  <text x="600" y="300" font-family="Manrope, 'DejaVu Sans', sans-serif" font-size="76" font-weight="800" letter-spacing="-1.5" fill="#3F7AE0">Group</text>

  <text x="232" y="356" font-family="Manrope, 'DejaVu Sans', sans-serif" font-size="30" font-weight="500" fill="#CBD4E0">Verified Korean suppliers · full deal support</text>

  <rect x="232" y="392" width="64" height="4" rx="2" fill="#2563d4"/>
  <text x="96" y="556" font-family="Manrope, 'DejaVu Sans', sans-serif" font-size="24" font-weight="600" letter-spacing="2" fill="#92A0B5">KOREA · JAPAN · CHINA · TÜRKIYE</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('Wrote', out);
