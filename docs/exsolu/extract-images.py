"""Extract manufacturer PDF assets locally; no generated or retouched products.

Run: python3 docs/exsolu/extract-images.py /absolute/path/to/teranovagroup
PDF page clips are rendered directly with Poppler, preserving aspect ratio.
"""
import hashlib
import json
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile

ROOT = Path(__file__).resolve().parents[2]
HQ = Path(sys.argv[1]).resolve()
OUT = ROOT / 'public/images/exsolu'
OUT.mkdir(parents=True, exist_ok=True)
sources = json.loads((ROOT / 'docs/exsolu/source-manifest.json').read_text())
for source in sources:
    path = HQ / source['path']
    assert hashlib.sha256(path.read_bytes()).hexdigest() == source['sha256'], path
meso, skincare = sources[2], sources[1]
# name, page, rendered page width, x, y, clip width, clip height.
clips = [
    ('pcl', 2, 1800, 110, 515, 515, 715),
    ('dplla', 2, 1800, 110, 1360, 515, 710),
    ('daemu', 3, 1800, 110, 500, 430, 470),
    ('yuri', 3, 1800, 110, 1065, 430, 470),
    ('pp', 3, 1800, 110, 1630, 430, 470),
    ('boost-solution', 4, 1800, 105, 485, 315, 275),
    ('hydro-white', 4, 1800, 105, 835, 315, 275),
    ('exo-plus', 4, 1800, 105, 1185, 315, 275),
    ('exobene-s', 4, 1800, 105, 1535, 315, 275),
    ('exobene-h', 4, 1800, 105, 1885, 315, 275),
    ('sosu', 5, 1055, 60, 248, 155, 140),
    ('samshin', 5, 1055, 60, 412, 155, 140),
    ('nopa', 5, 1055, 60, 576, 155, 140),
    ('dangun-s', 5, 1055, 60, 740, 155, 140),
    ('dangun-ss', 5, 1055, 60, 904, 155, 140),
    ('dangun-sm', 5, 1055, 60, 1068, 155, 140),
    ('nad-air-shot', 5, 1055, 60, 1232, 155, 140),
]
records = []
for name, page, width, x, y, w, h in clips:
    target = OUT / name
    subprocess.run(['pdftoppm', '-f', str(page), '-l', str(page),
                    '-singlefile', '-png', '-scale-to-x', str(width),
                    '-scale-to-y', '-1', '-x', str(x), '-y', str(y),
                    '-W', str(w), '-H', str(h), str(HQ / meso['path']),
                    str(target)], check=True)
    records.append(dict(product=name, file=f'/images/exsolu/{name}.png',
                        source=meso['path'], source_sha256=meso['sha256'],
                        page=page, method='native-pdf-page-clip',
                        page_width=width, clip=[x, y, w, h],
                        quality_note=('Small source image; do not enlarge beyond native size.'
                                      if page == 5 else 'Manufacturer page image; no retouching.')))
with tempfile.TemporaryDirectory() as tmp:
    prefix = Path(tmp) / 'skincare'
    subprocess.run(['pdfimages', '-png', str(HQ / skincare['path']), str(prefix)], check=True)
    for code, number, page, object_id in [('s0', 3, 2, 1013), ('s1', 2, 2, 1012),
                                         ('s2', 7, 3, 1018), ('s3', 8, 3, 1019),
                                         ('s4', 12, 4, 1023)]:
        shutil.copyfile(Path(f'{prefix}-{number:03}.png'), OUT / f'{code}.png')
        records.append(dict(product=code, file=f'/images/exsolu/{code}.png',
                            source=skincare['path'], source_sha256=skincare['sha256'],
                            page=page, method='embedded-image-extraction',
                            pdf_object_id=object_id,
                            quality_note='Original image, Poppler CMYK-to-RGB conversion; no crop or retouching.'))
for record in records:
    path = ROOT / 'public' / record['file'].lstrip('/')
    record['sha256'] = hashlib.sha256(path.read_bytes()).hexdigest()
    record['bytes'] = path.stat().st_size
manifest = dict(task='T-20261126-025', images=records,
                status='prepared; visual review required before stage 2 completion',
                restrictions='No prices, no commercial PDFs; no AI reconstruction or product distortion.')
(ROOT / 'docs/exsolu/image-manifest.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + '\n')
print(f'Extracted {len(records)} assets with source hashes and page provenance.')
