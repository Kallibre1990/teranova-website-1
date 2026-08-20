# Сборка новых постов: RU-источник + переводы агентов → src/data/blog.json
# Валидация: структура секций совпадает с ru, запрещённые слова, латиница брендов.
import json, sys, os, re

SITE = '/Users/madelkanov/teranovagroup/teranova-website'
LANGS = ['en','ko','zh','ja','it','de','fr','tr','es','pt']
FORBIDDEN = [
    r'гарант', r'\bguarantee', r'\bgarantie', r'\bgaranzia', r'\bgarantía', r'\bgaranti\b',
    r'保证', r'保証', r'보장', r'Пусан', r'\bBusan\b', r'부산',
]
BRANDS = ['Teranova']  # обязany присутствовать в seoTitle каждого языка

posts = json.load(open('/tmp/site_audit/new_posts_ru.json'))
errors = []
for p in posts:
    slug = p['slug']
    tf = f'/tmp/site_audit/trans/{slug}.json'
    if not os.path.exists(tf):
        errors.append(f'{slug}: нет файла перевода'); continue
    tr = json.load(open(tf))
    ru = p['i18n']['ru']
    for l in LANGS:
        if l not in tr:
            errors.append(f'{slug}/{l}: язык отсутствует'); continue
        c = tr[l]
        for k in ['title','excerpt','seoTitle','seoDesc','sections']:
            if k not in c: errors.append(f'{slug}/{l}: нет ключа {k}')
        if len(c.get('sections',[])) != len(ru['sections']):
            errors.append(f"{slug}/{l}: секций {len(c.get('sections',[]))} vs ru {len(ru['sections'])}")
        else:
            for i,(sr,st) in enumerate(zip(ru['sections'], c['sections'])):
                if ('h' in sr) != ('h' in st): errors.append(f'{slug}/{l}: секция {i} h-рассинхрон')
                if len(sr['p']) != len(st.get('p',[])): errors.append(f"{slug}/{l}: секция {i} абзацев {len(st.get('p',[]))} vs {len(sr['p'])}")
        full = json.dumps(c, ensure_ascii=False)
        for pat in FORBIDDEN:
            m = re.search(pat, full, re.I)
            if m: errors.append(f'{slug}/{l}: запрещённое слово «{m.group(0)}»')
        if 'Teranova' not in c.get('seoTitle',''):
            errors.append(f'{slug}/{l}: seoTitle без Teranova')
        p['i18n'][l] = c

if errors:
    print('ОШИБКИ:'); [print(' -', e) for e in errors]
    sys.exit(1)

blog_path = f'{SITE}/src/data/blog.json'
blog = json.load(open(blog_path))
existing = {x['slug'] for x in blog}
added = 0
for p in posts:
    if p['slug'] in existing:
        blog = [p if x['slug']==p['slug'] else x for x in blog]
    else:
        blog.append(p); added += 1
json.dump(blog, open(blog_path,'w'), ensure_ascii=False, indent=1)
print(f'OK: добавлено {added}, всего постов {len(blog)}')
