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
from collections import deque
from pathlib import Path

from PIL import Image, ImageChops, ImageFilter


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
    "claymore-hand-cream.jpg": (8, [(205, 255, 420, 710), (430, 255, 650, 710)]),
    "be-brave-bb-essence.jpg": (10, [(160, 155, 415, 720), (420, 150, 655, 720)]),
}

BACKGROUND = (248, 247, 244, 255)


def render(raw: Path, rectangles: list[tuple[int, int, int, int]], target: Path) -> None:
    """Compose only the photographed pack areas; the slide body never survives."""
    source = Image.open(raw).convert("RGBA")
    pieces = [source.crop(rect) for rect in rectangles]
    # The presentation has a common 1600×901 artboard, so preserve each crop’s
    # relative placement rather than turning a boxed set into a vertical stack.
    left = min(rect[0] for rect in rectangles)
    top = min(rect[1] for rect in rectangles)
    right = max(rect[2] for rect in rectangles)
    bottom = max(rect[3] for rect in rectangles)
    product = Image.new("RGBA", (right - left, bottom - top), (0, 0, 0, 0))
    for piece, rect in zip(pieces, rectangles):
        product.alpha_composite(piece, (rect[0] - left, rect[1] - top))
    canvas = Image.new("RGBA", (1200, 900), BACKGROUND)
    product.thumbnail((760, 700), Image.Resampling.LANCZOS)
    # A faint grounded shadow keeps dark packs from looking pasted on.
    shadow = Image.new("RGBA", product.size, (41, 44, 50, 0))
    shadow.putalpha(product.getchannel("A").filter(ImageFilter.GaussianBlur(12)).point(lambda a: a // 5))
    x = (canvas.width - product.width) // 2
    y = (canvas.height - product.height) // 2 - 8
    canvas.alpha_composite(shadow, (x + 5, y + 14))
    canvas.alpha_composite(product, (x, y))
    target.parent.mkdir(parents=True, exist_ok=True)
    canvas.convert("RGB").save(target, "JPEG", quality=91, optimize=True, progressive=True)


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
