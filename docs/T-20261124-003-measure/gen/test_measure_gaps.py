"""Mutation tests proving the local section-role inventory is fail-closed.

Run: python3 -I gen/test_measure_gaps.py   (from docs/T-20261124-003-measure/)
Reads only the saved benchmark snapshots; writes nothing.
"""
import os
import re
import sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from measure_gaps import measure_blocks, CANONICAL_ROLES  # noqa: E402

with open(f"{BASE}/dreamcos.html", encoding="utf-8") as f:
    DREAMCOS = f.read()
with open(f"{BASE}/dongdonggurimoo.html", encoding="utf-8") as f:
    DONGDONGGURIMOO = f.read()
with open(f"{BASE}/feelody-404.html", encoding="utf-8") as f:
    FEELODY_404 = f.read()

failures = []


def check(name, cond):
    status = "ok" if cond else "FAIL"
    print(f"[{status}] {name}")
    if not cond:
        failures.append(name)


# 1. Baseline: both live benchmarks recognise all 13 roles exactly once.
for name, html in (("dreamcos", DREAMCOS), ("dongdonggurimoo", DONGDONGGURIMOO)):
    m = measure_blocks(html)
    check(f"{name}: 13/13 recognised, complete=True",
          m["complete"] and m["section_count"] == 13
          and set(m["recognized_roles"]) == CANONICAL_ROLES
          and m["unknown_count"] == 0 and m["ambiguous_count"] == 0
          and not m["duplicate_roles"])

# 2. Feelody 404 snapshot: 1 unrecognised section, never "complete".
m404 = measure_blocks(FEELODY_404, http_status=404)
check("feelody-404: 1 section, unknown, complete=False, reason=http_status_404_not_profile",
      m404["section_count"] == 1 and m404["unknown_count"] == 1
      and not m404["complete"] and m404["reason"] == "http_status_404_not_profile")
m404_no_status = measure_blocks(FEELODY_404)
check("feelody-404 without http_status hint: still complete=False, reason=unknown_role_sections",
      not m404_no_status["complete"] and m404_no_status["reason"] == "unknown_role_sections")

# 3. Delete certs: remove the certifications section's only marker class.
mutated = DREAMCOS.replace('class="sp-certs"', 'class="sp-removed"').replace(
    'class="sp-certs__note"', 'class="sp-removed__note"')
assert "sp-certs" not in mutated, "mutation did not remove the marker"
m = measure_blocks(mutated)
check("delete certs marker: certifications missing, complete=False, reason=unknown_role_sections",
      not m["complete"] and "certifications" not in m["recognized_roles"]
      and m["unknown_count"] == 1 and m["reason"] == "unknown_role_sections")

# 4. Rename a heading: role detection must be classes-only, headings are
#    evidence, never a classification signal.
assert "Interested in this manufacturer?" in DREAMCOS, "fixture heading text not found"
mutated = DREAMCOS.replace(
    "Interested in this manufacturer?", "Completely Different Heading Text", 1)
m_baseline = measure_blocks(DREAMCOS)
m_renamed = measure_blocks(mutated)
check("rename heading text: role set unaffected (headings are evidence, not signal)",
      m_renamed["complete"] == m_baseline["complete"]
      and set(m_renamed["recognized_roles"]) == set(m_baseline["recognized_roles"]))

# 5. Reorder sections: swap two whole <section>...</section> blocks bodily.
#    Role identity must survive reordering (no ordinal/position-based keys).
section_re = re.compile(r"<section\b.*?</section>", re.S)
secs = section_re.findall(DREAMCOS)
assert len(secs) == 13
swapped = secs[1], secs[5]
reordered_secs = list(secs)
reordered_secs[1], reordered_secs[5] = swapped[1], swapped[0]
mutated = DREAMCOS
for old, new in zip(secs, reordered_secs):
    if old != new:
        mutated = mutated.replace(old, new, 1)
m = measure_blocks(mutated)
check("reorder two sections: same 13 roles recognised regardless of position",
      m["complete"] and set(m["recognized_roles"]) == CANONICAL_ROLES)

# 6. Add an unrecognised section: must surface as unknown, not silently ignored.
mutated = DREAMCOS.replace(
    "</section>", '</section><section class="sp-mystery"><h2>Mystery</h2></section>', 1)
m = measure_blocks(mutated)
check("add unknown-role section: section_count+1, unknown=1, complete=False",
      m["section_count"] == 14 and m["unknown_count"] == 1 and not m["complete"])

# 7. Duplicate a role: relabel the certifications section as technology.
mutated = DREAMCOS.replace('class="sp-certs"', 'class="sp-tech"').replace(
    'class="sp-certs__note"', 'class="sp-tech__note"')
m = measure_blocks(mutated)
check("duplicate technology role: duplicate_roles=['technology'], complete=False",
      m["duplicate_roles"] == ["technology"] and not m["complete"]
      and m["reason"] == "duplicate_roles")

print()
if failures:
    print(f"{len(failures)} mutation test(s) FAILED: {failures}")
    sys.exit(1)
print("All mutation tests passed.")
