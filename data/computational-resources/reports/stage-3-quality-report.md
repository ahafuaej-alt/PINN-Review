# Computational Resources Stage 3 Quality Report

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current status

- Latest completed checkpoint: `Stage3-S234`
- Latest checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC07` — **PASS (count-neutral CR000274 provenance/evidence-use normalization)**
- Latest completed aggregate batch: `SOB026` — **PASS (10/10)**
- Current aggregate batch: `SOB027` — **3/10**
- Schema drift: **none detected**
- Methodology drift: **none detected**
- Stage-boundary violations: **none detected**
- Scientific execution: **none performed**
- R5 records: **0**

## Cumulative counts

| Item | Count |
|---|---:|
| Resources | 273 |
| Experiments | 368 |
| Configurations | 649 |
| Technical evidence | 2740 |
| Reproducibility assessments | 273 |
| Unresolved findings | 1573 |
| Explicit conflicts | 146 |

## Latest checkpoint QA — Stage3-S234

| Gate | Result |
|---|---|
| Schema validation | PASS |
| Cumulative ID uniqueness | PASS |
| Evidence-reference integrity | PASS |
| Resource → experiment → configuration cross-references | PASS |
| Evidence-use completeness | PASS |
| Stage-2 authority resolution | PASS |
| Source-scope discipline | PASS |
| Missing-value semantics | PASS |
| Inference labeling | PASS |
| Reproducibility classification | PASS |
| R5 exclusion | PASS |
| Repository-scope safety | PASS |
| Stage-1 / Stage-2 / public-Atlas / curated / methodology / schema boundaries | PASS |
| Static-execution boundary | PASS |
| Provenance-text screening | PASS |
| Branch-head stability before publication | PASS |

S234 adds `CR000275` and `CR000276` as bounded provider-hosted dataset/project records. Provider metadata and final Stage-2 identity/relationship state are preserved without opening dataset payloads or inferring unavailable licenses. Both reproducibility assessments are `R2`. No new explicit conflict is introduced.

## Aggregate status

`SOB026` remains **PASS (10/10)**. `SOB027` now contains three independently extractable resources and therefore does not yet require aggregate closure QA.
