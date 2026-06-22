/* Generate abstract duotone "deep field" textures (navy + cobalt blooms + grain)
   to sit behind content as a code-drawn fabric. Run: node scripts/make-textures.mjs */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const dir = dirname(fileURLToPath(import.meta.url));
const out = resolve(dir, '../public/brand');

const W = 1600, H = 1000;
const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="base" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0c1f3d"/><stop offset="1" stop-color="#070f1f"/>
    </linearGradient>
    <radialGradient id="b1" cx="50%" cy="50%" r="50%">
      <stop offset="0" stop-color="#2563d4" stop-opacity="0.55"/><stop offset="100%" stop-color="#2563d4" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="b2" cx="50%" cy="50%" r="50%">
      <stop offset="0" stop-color="#3f7ae0" stop-opacity="0.4"/><stop offset="100%" stop-color="#3f7ae0" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="b3" cx="50%" cy="50%" r="50%">
      <stop offset="0" stop-color="#aebfdf" stop-opacity="0.22"/><stop offset="100%" stop-color="#aebfdf" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#base)"/>
  <ellipse cx="1180" cy="220" rx="720" ry="560" fill="url(#b1)"/>
  <ellipse cx="300" cy="840" rx="640" ry="520" fill="url(#b2)"/>
  <ellipse cx="820" cy="460" rx="520" ry="420" fill="url(#b3)"/>
  <g stroke="#9fb6da" stroke-opacity="0.05" stroke-width="1">
    ${Array.from({ length: 16 }, (_, i) => `<line x1="${-200 + i * 130}" y1="0" x2="${100 + i * 130}" y2="${H}"/>`).join('')}
  </g>
</svg>`;

await sharp(Buffer.from(svg)).webp({ quality: 72 }).toFile(resolve(out, 'tex-deep.webp'));

console.log('wrote', resolve(out, 'tex-deep.webp'));
