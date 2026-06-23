/* Optional real photos for the trust slots (about / verify). Drop a file into
   src/assets/about/ or src/assets/verify/ named exactly as the slot expects and
   it appears, optimised; until then the component shows its placeholder/nothing.
   Mirrors the teamPhoto() pattern. */
import type { ImageMetadata } from 'astro';

const about = import.meta.glob<{ default: ImageMetadata }>('../assets/about/*.{jpg,jpeg,png,webp}', { eager: true });
const verify = import.meta.glob<{ default: ImageMetadata }>('../assets/verify/*.{jpg,jpeg,png,webp}', { eager: true });

function byName(files: Record<string, { default: ImageMetadata }>): Record<string, ImageMetadata> {
  return Object.fromEntries(
    Object.entries(files).map(([p, m]) => [p.split('/').pop()!.replace(/\.[a-z]+$/i, ''), m.default]),
  );
}

const maps = { about: byName(about), verify: byName(verify) } as const;

export function assetPhoto(dir: 'about' | 'verify', name: string): ImageMetadata | undefined {
  return maps[dir][name];
}
