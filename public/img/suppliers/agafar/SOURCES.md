# Agafar image sources

Prepared for `T-20261024-091` on 2026-10-24 KST. Every file in this directory
was made from local materials already supplied by Agafar or from the local copy
of public `agafar.com` assets prepared by HQ. No supplier site, Instagram, or
closed Google Drive link was opened during this pass.

## Source files

- `DERMA_MODE_PROGRAM_whatsapp_2026-07-01.pdf` — supplied catalogue received by
  WhatsApp; SHA-256 `b4e5773aa6d6d379b5ef6b46b183272b4d4fcfa6f1e100a255eae4183fe13c8f`.
- `drive_2026-10-20/areiv.zip` — locally supplied a'reiv archive; SHA-256
  `4fb4ac78cb053f79bf2cf8903c12ca9054dde02518ab315fadb5357cc1494fcc`.
- `drive_2026-10-20/agafar dermatology machines.pdf` — locally supplied
  machines catalogue; SHA-256 `337988318c62e9d27e6eb3b00f2d1222bdbbd5e01933fb4fe989dc247d971b33`.
- `site_agafar.com_2026-10-24/products/` — local copy of 20 public product
  images from `agafar.com`, prepared by HQ; each original URL and product name
  is recorded in `_MATERIALY_POSTAVSHCHIKOV/AGAFAR/site_agafar.com_2026-10-24/SOURCES.md`.

The originals are under
`_MATERIALY_POSTAVSHCHIKOV/AGAFAR/` and the temporary local extraction is under
`scratchpad/T-20261024-091/`.  This directory intentionally contains derived
WebP files only.

## Derived files

| Output | Local source |
| --- | --- |
| `products/derma-mode-01.webp` … `products/derma-mode-20.webp` | Embedded product images `image-002.jpg` … `image-040.jpg` (even numbers) extracted from `DERMA_MODE_PROGRAM_whatsapp_2026-07-01.pdf` |
| `products/exoxen-booster.webp` | `areiv.zip` → `1. EXOXEN Booster (3ml10ea Total 30ml)/1. EXOXEN BOOSTER.jpg` |
| `products/calming-sun-cream.webp` | `areiv.zip` → `2. Calming Sun Cream (50ml)/2. Calming Sun Cream (50ml).jpg` |
| `products/lab-laboratory-mask.webp` | `areiv.zip` → `3. Lab Laboratory Mask (25ml)/3. Lab Laboratory Mask (25ml).jpg` |
| `products/agafar-site-01.webp` … `products/agafar-site-20.webp` | Local public-site copy `site_agafar.com_2026-10-24/products/01-*.jpg` … `20-*.jpg`; the source manifest names the corresponding product and URL for each number |
| `cutout/exoxen-booster.webp` | `areiv.zip` → `1. EXOXEN Booster (3ml10ea Total 30ml)/… 01.png` |
| `cutout/exoxen-booster-set.webp` | `areiv.zip` → `1. EXOXEN Booster (3ml10ea Total 30ml)/… 02.png` |
| `cutout/lab-laboratory-mask.webp` | `areiv.zip` → `3. Lab Laboratory Mask (25ml)/3. Lab Laboratory Mask (25ml) 01.png` |
| `scenes/exoxen-booster-01.webp`, `scenes/exoxen-booster-02.webp` | `areiv.zip` → EXOXEN `0001_01 (1).jpg`, `0001_05 (1).jpg` |
| `scenes/calming-sun-cream-01.webp` | `areiv.zip` → Calming Sun Cream `0001_03.jpg` |
| `scenes/lab-laboratory-mask-01.webp` | `areiv.zip` → Lab Laboratory Mask `0001_01.jpg` |
| `scenes/plazion.webp`, `scenes/agafar-point-plus.webp` | Embedded images `image-006.jpg`, `image-003.jpg` extracted from `agafar dermatology machines.pdf` |

## Processing

All outputs were converted with `cwebp`: product and scene images at quality 78
and a maximum width of 1600 px; transparent cutouts at quality 80 and a maximum
width of 1200 px.  The largest derived file is below 201 KB.  The `plazion.webp`
name is retained for the requested apparatus slot; source confirmation of the
model name is still required before it is shown to users.

## Explicit exclusions

No image from the inaccessible Drive links owned by Irina was used.
