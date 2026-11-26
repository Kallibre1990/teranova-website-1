"""Validate local image provenance. Pillow only reads metadata, never edits images."""
import hashlib
import json
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
EXPECTED = {'pcl', 'dplla', 'daemu', 'yuri', 'pp', 'boost-solution', 'hydro-white',
            'exo-plus', 'exobene-s', 'exobene-h', 'sosu', 'samshin', 'nopa',
            'dangun-s', 'dangun-ss', 'dangun-sm', 'nad-air-shot',
            's0', 's1', 's2', 's3', 's4'}

def validate(manifest):
    records = manifest['images']
    assert len(records) == 22 and {r['product'] for r in records} == EXPECTED
    sources = {r['path']: r for r in json.loads((ROOT / 'docs/exsolu/source-manifest.json').read_text())}
    for r in records:
        assert r['source_sha256'] == sources[r['source']]['sha256']
        assert 1 <= r['page'] <= sources[r['source']]['pages']
        path = ROOT / 'public' / r['file'].lstrip('/')
        assert hashlib.sha256(path.read_bytes()).hexdigest() == r['sha256'], path
        assert path.stat().st_size == r['bytes']
        with Image.open(path) as im:
            im.verify()
        with Image.open(path) as im:
            if r['method'] == 'native-pdf-page-clip':
                assert im.size == tuple(r['clip'][2:])
            assert min(im.size) >= 100
    return len(records)

if __name__ == '__main__':
    manifest = json.loads((ROOT / 'docs/exsolu/image-manifest.json').read_text())
    print(f'PASS: {validate(manifest)} images, hashes, sources, pages, dimensions.')
    for label, mutate in [
        ('missing product', lambda m: m['images'].pop()),
        ('incorrect asset hash', lambda m: m['images'][0].update(sha256='0' * 64)),
        ('unmanifested source', lambda m: m['images'][0].update(source='unapproved.pdf')),
    ]:
        broken = json.loads(json.dumps(manifest))
        mutate(broken)
        try:
            validate(broken)
        except (AssertionError, KeyError):
            print(f'PASS negative control: rejected {label}.')
        else:
            raise AssertionError(f'Failed negative control: {label}')
