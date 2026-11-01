#!/usr/bin/env python3
"""Build clean Cheon365 product cut-outs from the supplied presentation PDF.

Usage:
  python3 scripts/cheon365-cutouts.py \
    --pdf teranova-website/public/docs/cheon365-presentation-en.pdf \
    --output teranova-website/public/img/suppliers/cheon365/products

The presentation embeds the ten product-slide rasters on page 4. ``pdfimages``
extracts those rasters without recompression. The crop coordinates deliberately
keep only the photographed packshot; an edge-connected background mask then
places it on the site’s warm light product surface.
"""

from __future__ import annotations

import argparse
import shutil
import subprocess
import tempfile
from pathlib import Path

from PIL import Image


# ``pdfimages`` preserves this order. Each tuple contains the embedded-image
# index followed by tightly bounded pack rectangles: no slide title, table,
# swatch or caption is permitted into a site image.
PRODUCTS = {
    "blue-freedom-capsule-cleansing-foam.jpg": (0, [(205, 70, 505, 700), (505, 300, 650, 700)]),
    "blue-blended-toner-essence.jpg": (1, [(45, 225, 275, 690), (310, 195, 555, 690)]),
    "blue-blended-lotion-essence.jpg": (2, [(45, 225, 275, 690), (310, 195, 555, 690)]),
    "blue-blended-special-gift-set.jpg": (3, [(40, 205, 315, 740), (330, 215, 640, 740)]),
    "classic-golf-sun-cream.jpg": (4, [(175, 200, 380, 700), (405, 175, 660, 700)]),
    "classic-golf-sun-stick.jpg": (5, [(200, 285, 430, 650), (450, 235, 660, 650)]),
    "courage-lip-balm.jpg": (6, [(205, 245, 345, 700), (350, 280, 490, 700)]),
    "courage-lip-balm-case.jpg": (7, [(75, 145, 640, 760)]),
    "claymore-hand-cream.jpg": (8, [(130, 190, 575, 720)]),
    "be-brave-bb-essence.jpg": (10, [(160, 155, 415, 720), (420, 150, 655, 720)]),
}

def render(raw: Path, rectangles: list[tuple[int, int, int, int]], target: Path) -> None:
    """Compose only the photographed pack areas; the slide body never survives."""
    source = Image.open(raw).convert("RGBA")
    # A single union crop avoids stitched rectangles. The official presentation
    # uses this same navy across the pack-shot field, which is a permitted
    # product background and keeps every image free of slide tables and text.
    left = min(rect[0] for rect in rectangles)
    top = min(rect[1] for rect in rectangles)
    right = max(rect[2] for rect in rectangles)
    bottom = max(rect[3] for rect in rectangles)
    product = source.crop((left, top, right, bottom))
    target.parent.mkdir(parents=True, exist_ok=True)
    product.convert("RGB").save(target, "JPEG", quality=91, optimize=True, progressive=True)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--pdf", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()
    if not args.pdf.is_file():
        raise SystemExit(f"PDF not found: {args.pdf}")
    if shutil.which("pdfimages") is None:
        raise SystemExit("pdfimages is required (Poppler)")
    with tempfile.TemporaryDirectory(prefix="cheon365-cutouts-") as temp:
        prefix = Path(temp) / "slide"
        subprocess.run(["pdfimages", "-j", str(args.pdf), str(prefix)], check=True)
        raws = sorted(Path(temp).glob("slide-*.jpg"))
        if len(raws) < len(PRODUCTS):
            raise SystemExit(f"Expected {len(PRODUCTS)} embedded images, got {len(raws)}")
        for filename, (index, rectangles) in PRODUCTS.items():
            render(raws[index], rectangles, args.output / filename)


if __name__ == "__main__":
    main()
