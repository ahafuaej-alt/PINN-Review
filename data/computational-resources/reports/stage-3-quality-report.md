# Computational Resources Stage 3 Quality Report

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current status

- Latest completed checkpoint: `Stage3-S238`
- Latest checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC08` — **PASS (count-neutral report-state continuity repair)**
- Latest completed aggregate batch: `SOB026` — **PASS (10/10)**
- Current aggregate batch: `SOB027` — **9/10**
- Schema drift: **none detected**
- Methodology drift: **none detected**
- Stage-boundary violations: **none detected**
- Scientific execution: **none performed**
- R5 records: **0**

## Cumulative counts

| Item | Count |
|---|---:|
| Resources | 279 |
| Experiments | 343 |
| Configurations | 622 |
| Technical evidence | 2775 |
| Reproducibility assessments | 279 |
| Unresolved findings | 1439 |
| Explicit conflicts | 147 |

## Latest checkpoint QA — Stage3-S238

All required gates PASS: schema validation, cumulative ID uniqueness, evidence-reference integrity, resource→experiment→configuration cross-references, evidence-use completeness, Stage-2 authority resolution, source-scope discipline, missing-value semantics, inference labeling, reproducibility classification, R5 exclusion, repository-scope safety, protected write boundaries, static-execution boundary, provenance-text screening, and branch-head stability.

S238 adds CR000281 and CR000282 as bounded glacier dataset/data-portal resources. Final Stage-2 identity, paper relationships, persistent dataset identifiers and provider rights are preserved without downloading or opening payload data. Both resources are assessed R2.

## Aggregate status

`SOB026` remains **PASS (10/10)**. `SOB027` is now **9/10**; mandatory aggregate QA is due when CR000283 is published.
