# Computational Resources Stage 3 Progress

Date: 2026-09-12
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S222`
- Latest completed resource: `CR000258`
- Latest completed aggregate batch: `SOB024` — **PASS (10/10)**
- Current batch: `SOB025` — **6/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC07` — **PASS**
- Exact next independently extractable resource: `CR000259`
- Exact next checkpoint: `Stage3-S223`

## Cumulative counts through S222 / RC07

- Resources: **256**
- Experiments: **343**
- Configurations: **622**
- Technical-evidence records: **2615**
- Reproducibility assessments: **256**
- Unresolved findings: **1402**
- Explicit conflicts: **146**
- Independently extractable resources remaining: **107**

## S222

`CR000257` preserves the exact Leon Bottou Oquab-2014 publication-page identity and `PRL000293`. Static inspection confirms the author-hosted paper title, authorship, CVPR 2014 bibliographic record, abstract, BibTeX, and publication files, but no current code or executable-software link. It is therefore retained as a publication resource with no promoted experiment or configuration and an `R0` reproducibility assessment.

`CR000258` preserves the historical HKUST transfer-learning resource/software-index identity and `PRL000294`. The authoritative Stage-2 redirect state remains Page Not Found; the failed target is not promoted as an alias and no replacement artifact is inferred. It remains `R0` with no experiments or configurations.

## Aggregate batch QA

`SOB024` remains **10/10 — PASS**. `SOB025` is now **6/10**; aggregate QA is not yet due.

## Continuation

Stage3-RC02 through Stage3-RC07 remain authoritative and count-neutral for their accepted scopes. RC07 normalizes 58 enum-invalid values in 35 records from S183–S202 without changing counts or scientific facts.

Continue with `Stage3-S223` at `CR000259`.
