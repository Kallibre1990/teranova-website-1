import type { ImageMetadata } from 'astro';

/* Team portraits live in src/assets so Astro can optimise them (WebP + sized srcset).
   Keyed by file name so callers can map from the dictionary's `photo` path
   (e.g. '/img/team/anton-madelkanov.jpg' -> 'anton-madelkanov.jpg'). */
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/team/*.jpg', { eager: true });

const byName: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(files).map(([path, mod]) => [path.split('/').pop()!, mod.default]),
);

/** Optimised portrait for a member's `photo` value (full path or bare filename). */
export function teamPhoto(photo: string): ImageMetadata {
  return byName[photo.split('/').pop()!];
}
