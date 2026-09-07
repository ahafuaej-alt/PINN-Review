#!/usr/bin/env python3
"""Read-only drift validator for Task 3.5 Paper Profile specification."""
from __future__ import annotations
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
MA = ROOT / "docs" / "master-architecture"

SPEC = MA / "atlas-paper-profile-spec.json"
T31 = MA / "TASK-3.1-FIRST-CLASS-PAPER-PROFILE-SECTIONS.md"
T32 = MA / "TASK-3.2-PAPER-PROFILE-FIELD-SPECIFICATION.md"
T33 = MA / "TASK-3.3-CONDITIONAL-PROFILE-SECTIONS-AND-DISPLAY-LOGIC.md"
T34 = MA / "TASK-3.4-EVIDENCE-PROVENANCE-DRILLDOWN-BEHAVIOR.md"
ARCH = MA / "atlas-architecture-registry.json"

def fail(msg: str) -> None:
    raise AssertionError(msg)

def expand_ranges(spec: dict) -> list[str]:
    ids = []
    for section in spec["sections"]:
        sid = section["id"]
        for r in section["field_coordinate_ranges"]:
            for n in range(r["start"], r["end"] + 1):
                ids.append(f"{sid}.{r['prefix']}{n:02d}")
    return ids

def parse_task32(text: str):
    explicit = []
    nested = {}
    current = None
    explicit_re = re.compile(r"^\|\s*(PP-\d{2}\.(?:F|R|X|D|M)\d{2})\s+")
    nested_re = re.compile(r"^\|\s*↳\s+`([^`]+)`\s+\|")
    for line in text.splitlines():
        m = explicit_re.match(line)
        if m:
            current = m.group(1)
            explicit.append(current)
            continue
        n = nested_re.match(line)
        if n and current:
            key = n.group(1).replace("[]", "")
            nested.setdefault(current, []).append(key)
    return explicit, nested

def main() -> int:
    spec = json.loads(SPEC.read_text(encoding="utf-8"))
    t31 = T31.read_text(encoding="utf-8")
    t32 = T32.read_text(encoding="utf-8")
    t33 = T33.read_text(encoding="utf-8")
    t34 = T34.read_text(encoding="utf-8")
    arch = json.loads(ARCH.read_text(encoding="utf-8"))

    meta = spec["meta"]
    if meta["scientific_authority"] or meta["may_define_scientific_meaning"] or meta["may_modify_locked_v0_7"]:
        fail("Paper Profile machine-readable spec must remain non-authoritative scientifically")

    sections = spec["sections"]
    section_ids = [s["id"] for s in sections]
    expected_sections = [f"PP-{i:02d}" for i in range(1, 20)]
    if section_ids != expected_sections:
        fail(f"Section order/identity drift: {section_ids}")
    if [s["order"] for s in sections] != list(range(1, 20)):
        fail("Section order field drift")
    for sid in expected_sections:
        if sid not in t31:
            fail(f"Task 3.1 missing section {sid}")

    if spec["presentation"]["core_body_sections"] != ["PP-01", "PP-02", "PP-19"]:
        fail("Core body set drift")
    if len(spec["presentation"]["conditional_body_sections"]) != 16:
        fail("Conditional body count drift")
    for rule in spec["presentation"]["rules"]:
        if rule not in t33:
            fail(f"Task 3.3 missing display rule {rule}")

    expanded = expand_ranges(spec)
    parsed_explicit, parsed_nested = parse_task32(t32)
    if len(expanded) != spec["field_inventory"]["explicit_coordinates_expected"]:
        fail("Spec explicit-coordinate count drift")
    if len(set(expanded)) != len(expanded):
        fail("Duplicate explicit field IDs in spec")
    if set(expanded) != set(parsed_explicit):
        missing = sorted(set(parsed_explicit) - set(expanded))
        extra = sorted(set(expanded) - set(parsed_explicit))
        fail(f"Task 3.2 explicit field-coordinate drift; missing={missing}, extra={extra}")

    expected_nested = spec["field_inventory"]["nested_subfields"]
    if parsed_nested != expected_nested:
        fail(f"Task 3.2 nested-field drift; parsed={parsed_nested}, expected={expected_nested}")
    nested_count = sum(len(v) for v in expected_nested.values())
    if nested_count != spec["field_inventory"]["nested_subfields_expected"]:
        fail("Nested-field count drift")
    if len(expanded) + nested_count != spec["field_inventory"]["profile_field_ids_expected"]:
        fail("Total profile field-ID count drift")

    if "locked top-level fields mapped = **244/244**" not in t32:
        fail("Task 3.2 locked top-level count statement changed/missing")
    if "explicitly structured locked subfields mapped = **73/73**" not in t32:
        fail("Task 3.2 structured-subfield count statement changed/missing")
    if "locked field/subfield mappings total = **317/317**" not in t32:
        fail("Task 3.2 locked total mapping statement changed/missing")

    for fid in [f"PP-19.F{i:02d}" for i in range(1, 27)]:
        if fid not in t32:
            fail(f"Task 3.2 missing {fid}")
    for token in spec["evidence_drilldown"]["field_evidence_classes"]:
        if token not in t34:
            fail(f"Task 3.4 missing evidence class {token}")
    for token in spec["evidence_drilldown"]["verification_status"]:
        if token not in t34:
            fail(f"Task 3.4 missing verification status {token}")
    for token in spec["evidence_drilldown"]["support_status"]:
        if token not in t34:
            fail(f"Task 3.4 missing support status {token}")
    for token in spec["evidence_drilldown"]["evidence_source_role"]:
        if token not in t34:
            fail(f"Task 3.4 missing source role {token}")

    architecture_ids = set()
    for level in arch["levels"]:
        architecture_ids.add(level[0])
        for comp in level[4]:
            architecture_ids.add(comp[0])
    for section in sections:
        for ref in section["architecture_refs"]:
            if ref not in architecture_ids:
                fail(f"Unknown architecture reference {ref} in {section['id']}")

    if spec["validation_expectations"]["new_locked_v0_7_fields"] != 0:
        fail("Task 3.5 may not create locked v0.7 fields")
    if spec["validation_expectations"]["computational_resources_boundary_violations"] != 0:
        fail("Computational Resources boundary must remain intact")
    if spec["stop_boundary"] != "Task 3.6 not started":
        fail("Stop-boundary drift")

    print("PASS: Paper Profile machine-readable specification is internally consistent with Tasks 3.1–3.4.")
    print(f"sections={len(sections)} explicit_field_coordinates={len(expanded)} nested_subfields={nested_count} total_profile_field_ids={len(expanded)+nested_count}")
    return 0

if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except AssertionError as exc:
        print(f"FAIL: {exc}", file=sys.stderr)
        raise SystemExit(1)
