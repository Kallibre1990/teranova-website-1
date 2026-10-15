"""Verify rendered shared copy (including JSON-LD), independently of TS getters."""
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
import json
import re
import sys


class Page(HTMLParser):
    def __init__(self, html):
        super().__init__(convert_charrefs=True)
        self.skip = 0
        self.parts = []
        self.feed(html)

    def handle_starttag(self, tag, attrs):
        if tag in ('script', 'style'):
            self.skip += 1

    def handle_endtag(self, tag):
        if tag in ('script', 'style'):
            self.skip -= 1

    def handle_data(self, text):
        if not self.skip and text.strip():
            self.parts.append(text.strip())


root = Path(__file__).resolve().parents[1]
dist = Path(sys.argv[1]) if len(sys.argv) > 1 else root / 'dist'
catalog = json.loads((root / 'src/data/suppliers-i18n/doobom.catalog.json').read_text())
failures = []
checks = 0


def check(condition, label):
    global checks
    checks += 1
    if not condition:
        failures.append(label)


for lang in ('he', 'hi'):
    html = (dist / lang / 'catalog/doobom/index.html').read_text()
    parts = Page(html).parts
    check('Salon Programs' not in parts, f'{lang}: untranslated service group')
    for group in catalog:
        check(group['lineI18n'][lang] in parts, f'{lang}: missing group {group["line"]}')
        check(group['line'] not in parts, f'{lang}: untranslated group {group["line"]}')
        for item in group['items']:
            check(item['name'] in parts, f'{lang}: changed product name {item["name"]}')
            check(f'data-name="{item["name"]}"' in html, f'{lang}: changed lightbox identity')
            if 'volume' in item:
                expected = item.get('volumeI18n', {}).get(lang, item['volume'])
                check('· ' + expected in parts, f'{lang}: missing volume {expected}')
                if 'volumeI18n' in item:
                    check('· ' + item['volume'] not in parts, f'{lang}: untranslated volume')
    check(Counter(p for p in parts if p in {i['name'] for g in catalog for i in g['items']}) ==
          Counter(i['name'] for g in catalog for i in g['items']), f'{lang}: product count changed')
    skinroom = (dist / lang / 'catalog/skinroom/index.html').read_text()
    nodes = [json.loads(s) for s in re.findall(r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>', skinroom, re.S)]
    schema = [node for block in nodes for node in (block if isinstance(block, list) else [block])]
    org = next((node for node in schema if node.get('@type') == 'Organization' and node.get('name') == 'SkinRoom Co., Ltd.'), None)
    check(org is not None, f'{lang}: missing SkinRoom organization')
    if org:
        check(org.get('brand', {}).get('name') == 'SkinRoom', f'{lang}: incorrect brand identity')
        check(org.get('alternateName') == 'SkinRoom', f'{lang}: incorrect alternateName')
        check(not re.search('[А-Яа-яЁё]', json.dumps(org, ensure_ascii=False)), f'{lang}: Russian in JSON-LD')
    cosmetics = Page((dist / lang / 'catalog/cosmetics/index.html').read_text()).parts
    check('SkinRoom Co., Ltd.' in cosmetics, f'{lang}: missing company in catalog')
    check(any(p.startswith('SkinRoom · ') and ('OBM' in p) for p in cosmetics), f'{lang}: missing localized SkinRoom service description')
    for path in (dist / lang).rglob('*.html'):
        text = path.read_text()
        check('OBM — разработка марок под ключ' not in text, f'{path}: Russian shared identity')
        # The language switcher legitimately displays the native language name.
        visible = ' '.join(Page(text).parts).replace('Русский', '')
        check(not re.search('[А-Яа-яЁё]', visible), f'{path}: Cyrillic visible copy')

print(json.dumps({'checks': checks, 'failures': failures}, ensure_ascii=False, indent=2))
sys.exit(bool(failures))
