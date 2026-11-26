"""Check emitted EXSOLU HTML and sitemap; run after npm run build."""
from pathlib import Path
from html.parser import HTMLParser
import json
import xml.etree.ElementTree as ET

ROOT = Path('dist')
SITE = 'https://teranovagroup.com'
LANGS = ['ru', 'en', 'ko', 'ja', 'zh', 'de', 'fr', 'it', 'es', 'pt', 'tr']


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links, self.nav, self.ld = [], [], []
        self.capture, self.buf = False, ''

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'link':
            self.links.append(attrs)
        if tag == 'a' and '/catalog/exsolu' in attrs.get('href', ''):
            self.nav.append(attrs['href'])
        if tag == 'script' and attrs.get('type') == 'application/ld+json':
            self.capture, self.buf = True, ''

    def handle_data(self, data):
        if self.capture:
            self.buf += data

    def handle_endtag(self, tag):
        if tag == 'script' and self.capture:
            self.ld.append(json.loads(self.buf))
            self.capture = False


def emitted(url):
    return ROOT / url.removeprefix(SITE).strip('/') / 'index.html'


expected_urls = set()
for lang in LANGS:
    for view, count in [('', 0), ('/skin-boosters', 17), ('/skincare', 5)]:
        path = ('/' if lang == 'ru' else '/' + lang + '/') + 'catalog/exsolu' + view + '/'
        url = SITE + path
        expected_urls.add(url)
        html = emitted(url).read_text()
        page = Page()
        page.feed(html)
        assert [x['href'] for x in page.links if x.get('rel') == 'canonical'] == [url]
        alternates = [x for x in page.links if x.get('rel') == 'alternate']
        assert {x['hreflang'] for x in alternates} == set(LANGS + ['x-default'])
        assert len(alternates) == 12
        for link in alternates:
            assert emitted(link['href']).exists(), link
        for href in page.nav:
            assert emitted(href).exists(), href
        products = [x for x in page.ld if x.get('@type') == 'Product']
        assert len(products) == count
        for product in products:
            assert product['name'] in html
            assert (ROOT / product['image'].removeprefix(SITE).lstrip('/')).exists()
            assert 'offers' not in product
        assert any(x.get('@type') == 'Organization' for x in page.ld)
        assert any(x.get('@type') == 'BreadcrumbList' for x in page.ld)

ns = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9', 'x': 'http://www.w3.org/1999/xhtml'}
found = set()
for file in ROOT.glob('sitemap*.xml'):
    for entry in ET.parse(file).getroot().findall('s:url', ns):
        url = entry.findtext('s:loc', namespaces=ns)
        if '/catalog/exsolu/' in url:
            found.add(url)
            links = entry.findall('x:link', ns)
            assert len(links) == 12
            assert {x.get('hreflang') for x in links} == set(LANGS + ['x-default'])
            assert all(emitted(x.get('href')).exists() for x in links)
assert found == expected_urls
print('PASS: 33 routes; canonical; reciprocal existing alternates; EXSOLU links; JSON-LD; images; sitemap')
