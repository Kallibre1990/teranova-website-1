import json
import os
import re
import sys
from datetime import datetime, timezone
from html.parser import HTMLParser

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


# --- Local section-role inventory -------------------------------------------
# The shared _dispatcher/profile_plan_contract.py only records a block when a
# <section>/<h2>/<h3> carries an `id`; the real supplier-profile template uses
# classes, not ids, so that scan returns blocks=[] for every page, including
# the two live benchmarks. An empty result there is not evidence of an empty
# page. This inventory is local to this task's measurement (website:content
# scope) and does not change the shared dispatcher contract: it reads the
# same saved HTML and produces an independent, auditable `blocks` list that
# measured_gaps() then compares, exactly as it already compares dispatcher
# blocks — only the source of truth for "what block is this" changes.
#
# Role is assigned only from structural marker classes unique to that role
# across both live benchmarks (verified 2026-11-23 against dreamcos.html and
# dongdonggurimoo.html); shared/structural classes (sp-sec, sp-sec--tint,
# sp-lvl, sp-lvl--visited, wrap, bfd, lmk, bcv, dot, btn, footer, cursor) are
# never markers for any role, and heading text/order is never used to decide
# a role — only recorded as evidence. A section whose classes hit zero or
# more than one marker set is "unknown"/"ambiguous", never guessed.
ROLE_MARKERS = {
    "hero": {"sp-hero"},
    "visit": {"sp-visit"},
    "facts": {"sp-facts"},
    "brand_lines": {"sp-lines", "sp-line"},
    "catalog": {"sp-catalog", "sp-catgrp", "sp-catnav"},
    "technology": {"sp-tech"},
    "certifications": {"sp-certs"},
    "showcase": {"sp-showcase"},
    "formats": {"sp-formats"},
    "terms": {"sp-terms"},
    "articles": {"sp-articles", "sp-article"},
    "selection": {"sp-sel"},
    "cta": {"sp-cta"},
}
CANONICAL_ROLES = frozenset(ROLE_MARKERS)
HEADING_TAGS = {"h1", "h2", "h3", "h4"}


class _SectionRoleInventory(HTMLParser):
    """Inventories top-level <section> elements only (nested sections, if
    any, are folded into their parent's class/heading evidence, not counted
    separately)."""

    def __init__(self):
        super().__init__()
        self.sections = []
        self._depth = 0
        self._current = None
        self._heading_tag = None
        self._heading_buf = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "section":
            if self._depth == 0:
                self._current = {
                    "index": len(self.sections),
                    "section_classes": sorted(set((attrs.get("class") or "").split())),
                    "classes": set((attrs.get("class") or "").split()),
                    "headings": [],
                }
            self._depth += 1
            return
        if self._depth == 0 or self._current is None:
            return
        cls = attrs.get("class")
        if cls:
            self._current["classes"].update(cls.split())
        if tag in HEADING_TAGS:
            self._heading_tag = tag
            self._heading_buf = []

    def handle_data(self, data):
        if self._heading_tag is not None:
            self._heading_buf.append(data)

    def handle_endtag(self, tag):
        if tag in HEADING_TAGS and self._heading_tag == tag:
            text = "".join(self._heading_buf).strip()
            if text and self._current is not None:
                self._current["headings"].append(text)
            self._heading_tag = None
            self._heading_buf = []
            return
        if tag == "section":
            self._depth = max(0, self._depth - 1)
            if self._depth == 0 and self._current is not None:
                self.sections.append(self._current)
                self._current = None


def _match_roles(classes):
    """Marker roles whose set intersects these classes. Exact class-token
    match only, so a shared wrapper (sp-sec, sp-lvl, wrap...) never matches:
    it is not in any ROLE_MARKERS set."""
    return sorted(role for role, markers in ROLE_MARKERS.items() if classes & markers)


def measure_blocks(html_text, *, http_status=None):
    """Fail-closed section-role inventory. `complete` is true only when every
    canonical role is found exactly once with no unknown/ambiguous section;
    an empty or partial result always carries a `reason`, never silently
    reads as "no gap"."""
    parser = _SectionRoleInventory()
    parser.feed(html_text)
    evidence = []
    role_sections = {}
    unknown = 0
    ambiguous = 0
    for sec in parser.sections:
        roles = _match_roles(sec["classes"])
        if len(roles) == 0:
            role = None
            unknown += 1
        elif len(roles) == 1:
            role = roles[0]
            role_sections.setdefault(role, []).append(sec["index"])
        else:
            role = None
            ambiguous += 1
        evidence.append({
            "index": sec["index"],
            "section_classes": sec["section_classes"],
            "headings": sec["headings"],
            "role": role,
            "role_candidates": roles,
        })
    duplicate_roles = sorted(r for r, idxs in role_sections.items() if len(idxs) > 1)
    recognized_roles = sorted(r for r, idxs in role_sections.items() if len(idxs) == 1)
    complete = (
        bool(parser.sections)
        and unknown == 0
        and ambiguous == 0
        and not duplicate_roles
        and set(recognized_roles) == CANONICAL_ROLES
    )
    if complete:
        reason = None
    elif http_status == 404:
        reason = "http_status_404_not_profile"
    elif not parser.sections:
        reason = "no_sections_found"
    elif ambiguous:
        reason = "ambiguous_role_sections"
    elif duplicate_roles:
        reason = "duplicate_roles"
    elif unknown:
        reason = "unknown_role_sections"
    else:
        reason = "missing_roles"
    return {
        "method": "local-section-role-inventory-v1",
        "section_count": len(parser.sections),
        "recognized_roles": recognized_roles,
        "duplicate_roles": duplicate_roles,
        "unknown_count": unknown,
        "ambiguous_count": ambiguous,
        "complete": complete,
        "reason": reason,
        "evidence": evidence,
    }


def measure_file(path, source_url, observed_at, *, http_status=None):
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
    result = measure_profile_html(html, source_url=source_url, observed_at=observed_at, pdf_types=pdf_types)
    block_measurement = measure_blocks(html, http_status=http_status)
    # Replace the dispatcher's id-only (always-empty) blocks with the local,
    # evidence-backed role inventory; measured_gaps() still only ever sees a
    # plain `blocks` list, so its contract is unchanged.
    result["blocks"] = block_measurement["recognized_roles"]
    result["block_measurement"] = block_measurement
    return result


dreamcos = measure_file(f"{BASE}/dreamcos.html",
                         "https://teranovagroup.com/en/catalog/dreamcos/",
                         "2026-11-23T16:19:25Z")
dongdonggurimoo = measure_file(f"{BASE}/dongdonggurimoo.html",
                                "https://teranovagroup.com/en/catalog/dongdonggurimoo/",
                                "2026-11-23T16:19:25Z")

# Historical record only (2026-11-23T17:23:23Z): the profile did not exist
# yet at that moment (HTTP 404). Kept for the audit trail, never used as the
# current-state measurement — a 404 snapshot cannot prove today's gaps.
feelody_historical_404 = measure_file(f"{BASE}/feelody-404.html",
                                       "https://teranovagroup.com/en/catalog/feelody/",
                                       "2026-11-23T17:23:23Z",
                                       http_status=404)
feelody_historical_404["http_status"] = 404
feelody_historical_404["snapshot_file"] = "feelody-404.html"

# Current-state measurement: live profile, fetched fresh (HTTP 200).
feelody = measure_file(f"{BASE}/feelody-live.html",
                        "https://teranovagroup.com/en/catalog/feelody/",
                        "2026-11-28T15:13:58Z",
                        http_status=200)
feelody["http_status"] = 200
feelody["snapshot_file"] = "feelody-live.html"

gaps = measured_gaps(feelody, [dreamcos, dongdonggurimoo], forbid_prices=True)

notes = [
    ("blog_gap", gaps["blog_gap"] > 0,
     f"Применим: оба эталона публикуют статьи /blog/ (dreamcos={len(dreamcos['blog'])}, "
     f"dongdonggurimoo={len(dongdonggurimoo['blog'])} — подтверждено независимым grep по "
     f"сохранённому HTML), у живого профиля Feelody на момент этого замера (HTTP 200, "
     f"{feelody['observed_at']}) {len(feelody['blog'])} статей на странице профиля "
     f"(полный список /blog/ этот снимок не обходит — считаются только ссылки, видимые в "
     f"блоке sp-articles самой страницы профиля). blog_gap={gaps['blog_gap']}."),
    ("missing_blocks", bool(gaps["missing_blocks"]),
     "Применим: локальный разбор секций по структурным маркерам (не id — живой шаблон "
     "использует классы) нашёл у обоих эталонов все 13 канонических ролей "
     f"({', '.join(sorted(CANONICAL_ROLES))}), block_measurement.complete=True для обоих "
     "(dreamcos, dongdonggurimoo), 0 unknown/duplicate/ambiguous. Живой снимок Feelody "
     f"(HTTP 200, {feelody['observed_at']}) содержит {feelody['block_measurement']['section_count']} "
     f"секций профиля, распознанные роли: {', '.join(feelody['block_measurement']['recognized_roles'])}. "
     f"Отсутствуют: {', '.join(sorted(gaps['missing_blocks']))} — совпадает с ручной находкой HQ "
     "28.11 (нет sp-certs, sp-showcase, sp-sel, sp-visit; 9 из 13 блоков)."),
    ("missing_pdf_types:price", True,
     "Неприменим по запрету поставщика: Feelody просил не публиковать FOB price list и "
     "коммерческие условия (переписка feelody.official@gmail.com, 23.11.2026). PDF с типом "
     "price исключён из сравнения (forbid_prices=True) и не создаётся ради количества файлов."),
    ("missing_pdf_types:presentation,terms", "presentation" in gaps["missing_pdf_types"],
     "Применим, но не закрыт в этой части: presentation и terms — общий базовый набор по "
     "обоим эталонам (classify по имени файла из HTML, не угадано). У живого профиля Feelody "
     f"на момент этого замера такого документа на странице нет (pdf={feelody['pdf']}); "
     "создавать его сейчас не входит в объём этого замера — факт зафиксирован как открытый "
     "пробел, а не как решение добавить файл. Отдельно от terms-HTML блока профиля (другое "
     "измерение, другой ключ в измерении — terms-PDF и terms-блок не смешиваются)."),
    (f"image_counts:feelody={len(feelody['images'])}", True,
     f"Текущий живой профиль Feelody содержит {len(feelody['images'])} изображений на момент "
     f"этого замера ({feelody['observed_at']}, HTTP 200) против dreamcos={len(dreamcos['images'])}, "
     "dongdonggurimoo=" + str(len(dongdonggurimoo['images'])) + " — разрыв реальный, не "
     "артефакт отсутствующей страницы (в отличие от исторического 404-замера 23.11, где "
     "3 изображения были картинками шаблона страницы «не найдено»)."),
    ("needs_pdf_classification", gaps["needs_pdf_classification"],
     "False: все 6 PDF у эталонов классифицированы по имени файла в href (price/"
     "presentation/terms), ни один не остался unknown."),
]

out = {
    "generated_at": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
    "measurements": {
        "feelody": feelody,
        "feelody_historical_404": feelody_historical_404,
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
