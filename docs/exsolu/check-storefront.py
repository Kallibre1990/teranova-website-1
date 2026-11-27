"""Local structural acceptance, including negative controls; not visual QA."""
from html.parser import HTMLParser
from pathlib import Path
import json
import re

ROOT = Path(__file__).resolve().parents[2]
LOCALES = ['ru', 'en', 'ko', 'ja', 'zh', 'de', 'fr', 'it', 'es', 'pt', 'tr']
REJECTED = ['sosu', 'samshin', 'nopa', 'dangun-s', 'dangun-ss', 'dangun-sm', 'nad-air-shot']

class Page(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.tags = []
        self.feed(html)
    def handle_starttag(self, tag, attrs):
        self.tags.append((tag, dict(attrs)))
    def classes(self, cls):
        return [a for t, a in self.tags if cls in a.get('class', '').split()]

def storefront_failures(html, view):
    p = Page(html)
    rejected = any(t == 'img' and a.get('src', '').split('?')[0] in [f'/images/exsolu/{x}.png' for x in REJECTED] for t, a in p.tags)
    if not view:
        return (['rejected-low-quality-photo'] if rejected else []) + [name for name, ok in {
            'visual-ranges': len(p.classes('range')) == 2,
            'previews': len(p.classes('preview')) == 6,
            'articles': len(p.classes('article-card')) == 3,
            'counts': bool(re.search(r'class="count"[^>]*>17 ', html)) and bool(re.search(r'class="count"[^>]*>5 ', html)),
            'hero-image': len(p.classes('hero-image')) == 1,
        }.items() if not ok]
    count = 17 if view == 'skin-boosters' else 5
    failures = []
    if len(p.classes('product')) != count:
        failures.append('product-count')
    expected_missing = 7 if view == 'skin-boosters' else 0
    if len(p.classes('photo-pending')) != expected_missing:
        failures.append('undocumented-missing-photos')
    if rejected:
        failures.append('rejected-low-quality-photo')
    return failures

results = []
for lang in LOCALES:
    for view in ['', 'skin-boosters', 'skincare']:
        path = ('' if lang == 'ru' else lang + '/') + 'catalog/exsolu/' + (view + '/' if view else '')
        html = (ROOT / 'dist' / path / 'index.html').read_text()
        p = Page(html)
        sitemap = ''.join(f.read_text() for f in (ROOT / 'dist').glob('sitemap-*.xml'))
        assert 'https://teranovagroup.com/' + path in sitemap, path
        canonical = [a['href'] for t, a in p.tags if t == 'link' and a.get('rel') == 'canonical']
        assert canonical == ['https://teranovagroup.com/' + path], (path, canonical)
        langs = [a['hreflang'] for t, a in p.tags if t == 'link' and 'hreflang' in a]
        assert set(LOCALES + ['x-default']).issubset(langs), (path, langs)
        assert any(t == 'html' and a.get('lang', '').split('-')[0] == lang for t, a in p.tags), path
        for raw in re.findall(r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>', html, re.S):
            json.loads(raw)
        for t, a in p.tags:
            if t == 'img' and a.get('src', '').startswith('/'):
                assert (ROOT / 'public' / a['src'].lstrip('/')).is_file(), a['src']
        results.append({'path': path, 'products': len(p.classes('product')), 'articles': len(p.classes('article-card')), 'failures': storefront_failures(html, view)})

home = (ROOT / 'dist/en/catalog/exsolu/index.html').read_text()
line = (ROOT / 'dist/en/catalog/exsolu/skin-boosters/index.html').read_text()
negative = {
    'text-hub': bool(storefront_failures('<main><h1>EXSOLU</h1><p>17 / 5</p></main>', '')),
    'missing-17': 'product-count' in storefront_failures(line.replace('class="product"', 'class="removed"', 1), 'skin-boosters'),
    'missing-5': 'product-count' in storefront_failures('<main></main>', 'skincare'),
    'low-quality-photo': 'rejected-low-quality-photo' in storefront_failures(line.replace('class="photo-pending"', 'class="unavailable"') + '<img src="/images/exsolu/sosu.png">', 'skin-boosters'),
    'undocumented-missing-photos': 'undocumented-missing-photos' in storefront_failures(line.replace('class="photo-pending"', 'class="unavailable"', 1), 'skin-boosters'),
    'bad-photo-on-home': 'rejected-low-quality-photo' in storefront_failures(home + '<img src="/images/exsolu/sosu.png">', ''),
    'new-home-structure': not storefront_failures(home, ''),
}
assert all(negative.values()), negative
assert all(not r['failures'] for r in results), results
report = {'structural_pages': results, 'negative_controls': negative, 'visual_qa': 'not performed; browser unavailable', 'acceptance': 'structural only; seven unavailable photographs documented per HQ; visual QA incomplete'}
out = ROOT / 'docs/exsolu/T-20261127-037/structure.json'
out.write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n')
print(json.dumps({'pages': len(results), 'controls': negative, 'acceptance': report['acceptance']}))
