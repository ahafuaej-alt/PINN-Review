# Computational Resources Stage 3 Quality Report

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current status

- Latest completed checkpoint: `Stage3-S239`
- Latest checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC08` — **PASS (count-neutral report-state continuity repair)**
- Latest completed aggregate batch: `SOB027` — **PASS (10/10)**
- Current aggregate batch: `SOB028` — **0/10**
- Schema drift: **none detected**
- Methodology drift: **none detected**
- Stage-boundary violations: **none detected**
- Scientific execution: **none performed**
- R5 records: **0**

## Cumulative counts

| Item | Count |
|---|---:|
| Resources | 280 |
| Experiments | 343 |
| Configurations | 622 |
| Technical evidence | 2781 |
| Reproducibility assessments | 280 |
| Unresolved findings | 1440 |
| Explicit conflicts | 147 |

## Latest checkpoint QA — Stage3-S239

All required checkpoint gates PASS. CR000283 preserves the Stage-2 legacy/current swisstopo location distinction, Atlas-paper relationship, release-specific product scope and custom OGD terms without downloading or opening payload data. Reproducibility is R2 and R5 remains prohibited.

## Aggregate QA — SOB027

SOB027 is **PASS (10/10)** for membership CR000274–CR000283. Membership, cumulative counts, identifier uniqueness, orphan-reference checks, source-scope sampling, missing-value semantics, methodology/schema drift, stage boundaries, execution boundary, provenance screening, R5 exclusion and Stage-2 authority readback all pass. Stage3-RC08 is included as the governing report-state continuity reconciliation.

Exact continuation: `CR000284 → Stage3-S240`.
