"""Read-only verification against the admitted local T-100 manifest.

Usage: python3 scripts/check-dr-papirub-catalog.py /absolute/path/to/public-v2
Run after npm run build. No network or source mutation.
"""
import hashlib
import json
from html.parser import HTMLParser
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path(sys.argv[1])
manifest_bytes = (SOURCE / 'catalog-manifest.json').read_bytes()
assert hashlib.sha256(manifest_bytes).hexdigest() == '128ed561c1605a92eea0d5e9429281580ee077c3587cfa705fdac7fe402bd99b'
manifest = json.loads(manifest_bytes)
expected = {p['id']: p for p in manifest['products'] if p['brand'] == 'Dr.Papirub' and p['id'] != 'two-tigers-dr-retinol-presentation'}
groups = json.loads((ROOT / 'src/data/suppliers-i18n/dr-papirub.catalog.json').read_text())
items = [i for g in groups for i in g['items']]
assert len(items) == len(expected) == 7
assert {i['manifestId'] for i in items} == set(expected)
for item in items:
    source = expected[item['manifestId']]
    for field in ('name', 'brand', 'volume'):
        assert item[field] == source[field], (source['id'], field)
    assert {a.lower() for a in item.get('actives', [])} == {a.lower() for a in source['properties']}
    assert not {'price', 'moq', 'ingredients', 'directions'} & item.keys()
    assert Path(item['img']).name == source['image']
    assert (ROOT / 'public' / item['img'].lstrip('/')).read_bytes() == (SOURCE / source['image']).read_bytes()
    if source.get('name_ko'):
        assert item['nameI18n']['ko'] == source['name_ko']
    for translation in item.get('activesI18n', {}).values():
        assert len(translation) == len(item['actives'])


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.cards = 0
        self.links = []
        self.images = []
        self.lang = None

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'html':
            self.lang = attrs.get('lang')
        if tag == 'button' and 'sp-prod' in attrs.get('class', '').split():
            self.cards += 1
        if tag == 'link':
            self.links.append(attrs)
        if tag == 'img':
            self.images.append(attrs.get('src', ''))


langs = ['ru', 'en', 'ko', 'zh', 'ja', 'it', 'de', 'fr', 'tr', 'es', 'pt', 'he', 'hi']
pages = []
reference = json.loads((ROOT / 'src/data/suppliers-i18n/dr-papirub.ru.json').read_text())


def shape(value):
    if isinstance(value, dict):
        return {key: shape(v) for key, v in value.items()}
    if isinstance(value, list):
        return [shape(v) for v in value]
    return type(value).__name__


for lang in langs:
    content = json.loads((ROOT / f'src/data/suppliers-i18n/dr-papirub.{lang}.json').read_text())
    assert shape(content) == shape(reference), lang
    path = f'/{lang}/catalog/dr-papirub/' if lang != 'ru' else '/catalog/dr-papirub/'
    html = (ROOT / 'dist' / path.lstrip('/') / 'index.html').read_text()
    parsed = Page()
    parsed.feed(html)
    assert parsed.lang == ('pt-BR' if lang == 'pt' else lang) and parsed.cards == 7, (lang, parsed.cards)
    assert 'retinol niacinamide' not in html.lower() and 'dr-10-1' not in html
    canonicals = [v['href'] for v in parsed.links if v.get('rel') == 'canonical']
    assert canonicals == ['https://teranovagroup.com' + path], canonicals
    alternates = {v['hreflang']: v['href'] for v in parsed.links if v.get('hreflang')}
    assert len(alternates) == 14 and 'x-default' in alternates, alternates
    for href in alternates.values():
        relative = href.removeprefix('https://teranovagroup.com').lstrip('/')
        assert (ROOT / 'dist' / relative / 'index.html').exists(), href
    for src in parsed.images:
        if src.startswith('/'):
            assert (ROOT / 'dist' / src.lstrip('/')).is_file(), src
    assert not any(ext in html.lower() for ext in ('.xlsx', '.xls"', '.pdf'))
    pages.append({'lang': lang, 'path': path, 'cards': parsed.cards, 'canonical': canonicals[0], 'alternates': len(alternates)})

print(json.dumps({'products': len(items), 'groups': len(groups), 'verified_images': len(items), 'source_sha256': hashlib.sha256(manifest_bytes).hexdigest(), 'pages': pages, 'layout': 'not measured; browser sandbox denies Chromium launch'}, ensure_ascii=False, indent=2))

# Verify every generated surface, including search, counters, SEO and JSON-LD.
for path in (ROOT / "dist").rglob("*"):
    assert path.name != "dr-10-1.webp", path
    if path.suffix in {".html", ".json", ".xml", ".txt", ".js"}:
        data = path.read_text(errors="ignore").lower()
        assert "retinol niacinamide serum" not in data and "dr-10-1.webp" not in data and "two-tigers-dr-retinol-presentation" not in data, path
