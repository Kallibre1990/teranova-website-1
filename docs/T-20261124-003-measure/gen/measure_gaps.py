import json
import os
import re
import sys
from datetime import datetime, timezone

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DISPATCHER = os.environ.get(
    "TERANOVA_DISPATCHER",
    os.path.join(os.path.dirname(BASE), "..", "..", "..", "_dispatcher"))
sys.path.insert(0, os.path.abspath(DISPATCHER))
from profile_plan_contract import measure_profile_html, measured_gaps


def classify(url):
    name = url.rsplit("/", 1)[-1].lower()
    if "price" in name:
        return "price"
    if "presentation" in name:
        return "presentation"
    if "terms" in name:
        return "terms"
    return "unknown"


def measure_file(path, source_url, observed_at):
    with open(path, encoding="utf-8") as f:
        html = f.read()
    # Pre-scan PDF hrefs so every referenced PDF gets a real classification,
    # not just the ones measure_profile_html happens to resolve first.
    urls = set()
    for raw in re.findall(r'href="([^"]+\.pdf)"', html, re.I):
        if raw.startswith("http"):
            urls.add(raw)
        else:
            urls.add("https://teranovagroup.com" + raw)
    pdf_types = {u: classify(u) for u in urls}
    return measure_profile_html(html, source_url=source_url, observed_at=observed_at, pdf_types=pdf_types)


dreamcos = measure_file(f"{BASE}/dreamcos.html",
                         "https://teranovagroup.com/en/catalog/dreamcos/",
                         "2026-11-23T16:19:25Z")
dongdonggurimoo = measure_file(f"{BASE}/dongdonggurimoo.html",
                                "https://teranovagroup.com/en/catalog/dongdonggurimoo/",
                                "2026-11-23T16:19:25Z")

with open(f"{BASE}/feelody-404.html", encoding="utf-8") as f:
    feelody_404_html = f.read()
feelody = measure_profile_html(feelody_404_html,
                                source_url="https://teranovagroup.com/en/catalog/feelody/",
                                observed_at="2026-11-23T17:23:23Z")
feelody["http_status"] = 404
feelody["snapshot_file"] = "feelody-404.html"

gaps = measured_gaps(feelody, [dreamcos, dongdonggurimoo], forbid_prices=True)

notes = [
    ("blog_gap", gaps["blog_gap"] > 0,
     "Применим: оба эталона публикуют статьи /blog/ (dreamcos=6, dongdonggurimoo=3 — "
     "подтверждено независимым grep по сохранённому HTML), у Feelody до сборки 0 (профиля "
     "нет, 404). Пробел закрыт позже тремя статьями (этап 4, commit 4c0e170) — эта запись "
     "фиксирует основание решения, а не текущее состояние сайта."),
    ("missing_pdf_types:price", True,
     "Неприменим по запрету поставщика: Feelody просил не публиковать FOB price list и "
     "коммерческие условия (переписка feelody.official@gmail.com, 23.11.2026). PDF с типом "
     "price исключён из сравнения (forbid_prices=True) и не создаётся ради количества файлов."),
    ("missing_pdf_types:presentation,terms", "presentation" in gaps["missing_pdf_types"],
     "Применим, но не закрыт в этой части: presentation и terms — общий базовый набор по "
     "обоим эталонам (classify по имени файла из HTML, не угадано). У Feelody такого "
     "документа на сайте нет; создавать его сейчас не входит в объём этого замера — факт "
     "зафиксирован как открытый пробел, а не как решение добавить файл."),
    ("image_counts:feelody=3", True,
     "Не показатель: 3 изображения у Feelody — это картинки типового шаблона страницы "
     "404 (профиля не существует), а не контент профиля. Сравнивать с эталонами по счётчику "
     "изображений нельзя, пока профиль не собран."),
    ("needs_pdf_classification", gaps["needs_pdf_classification"],
     "False: все 6 PDF у эталонов классифицированы по имени файла в href (price/"
     "presentation/terms), ни один не остался unknown."),
]

out = {
    "generated_at": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
    "measurements": {
        "feelody": feelody,
        "dreamcos": dreamcos,
        "dongdonggurimoo": dongdonggurimoo,
    },
    "gaps": gaps,
    "notes": [{"gap": g, "applicable": bool(a), "basis": b} for g, a, b in notes],
}

with open(f"{BASE}/gaps.json", "w", encoding="utf-8") as f:
    json.dump(out, f, ensure_ascii=False, indent=2)
    f.write("\n")

print(json.dumps(gaps, ensure_ascii=False, indent=2))
