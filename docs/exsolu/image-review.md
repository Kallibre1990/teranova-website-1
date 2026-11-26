# EXSOLU image preparation — T-20261126-025, stage 2

Reviewed locally by Codex, 2026-11-26 18:57 KST. No external actions.

22 product assets are in `public/images/exsolu/`; `image-manifest.json`
records the source PDF hash, page, extraction method and output hash for each.
The existing source manifest hashes were checked before extraction.

## Visual review

All 17 booster clips were opened individually and compared with manufacturer
pages 2–5. Each shows the complete vial, cap and base, with surrounding neutral
space, without adjacent claims, product names or commercial text. The five
skincare images were opened individually from the native extraction; the final
files are byte-identical copies of those inspected assets. Product identity:
S0 spider-silk mask (pink label), S1 rose (pink liquid), S2 ginseng (amber
liquid), S3 vesicles intensive (10 mL), S4 vesicles daily (30 mL).

These are manufacturer-supplied renderings, not newly photographed or generated
studio images. No labels, geometry, colours or packaging were reconstructed.
Poppler performs normal PDF rendering / CMYK-to-RGB conversion. No generative
image processing or raster editing was used.

## Rendering constraints for stage 3

- Use proportional sizing and `object-fit: contain`; preserve the whole asset.
- Wellness source clips are only 155 × 140 px, with small vials inside them.
  Display at native size or smaller. They are usable catalogue thumbnails,
  not suitable hero imagery or large product packshots.
- Exosome clips are 315 × 275 px; filling clips are 515 × 715 / 515 × 710 px;
  firming clips are 430 × 470 px. Do not upscale to fill large cards.
- Skincare originals are 768 × 1376 (S1/S2/S4), 1024 × 1536 (S0), and
  2000 × 1334 (S3). S0/S3 have ample white margins from the original source;
  do not stretch or crop away packaging to equalise apparent size.
- Source packaging text is the manufacturer's original. It does not substitute
  for translated visible product descriptions or attribution on the site.

## Reproduce and verify

From the existing website worktree:

```sh
/usr/bin/python3 docs/exsolu/extract-images.py /Users/madelkanov/teranovagroup
/usr/bin/python3 docs/exsolu/validate-images.py
```

Validation: PASS, 22 products; each asset hash, source hash reference, page,
PNG integrity and dimensions checked. Negative controls rejected a missing
product, incorrect asset hash and source absent from the approved manifest.
This is asset QA only. Build, eleven-language HTML, structured data and layout
QA remain stages 3–5; no completion claim for the full card.
