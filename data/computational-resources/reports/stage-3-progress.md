# Computational Resources Stage 3 Progress

Date: 2026-09-12
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S225`
- Latest completed resource: `CR000261`
- Latest completed aggregate batch: `SOB024` — **PASS (10/10)**
- Current batch: `SOB025` — **9/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC07` — **PASS**
- Exact next independently extractable resource: `CR000262`
- Exact next checkpoint: `Stage3-S226`

## Cumulative counts through S225 / RC07

- Resources: **259**
- Experiments: **343**
- Configurations: **622**
- Technical-evidence records: **2643**
- Reproducibility assessments: **259**
- Unresolved findings: **1410**
- Explicit conflicts: **146**
- Independently extractable resources remaining: **104**

## S225

`CR000261` preserves `VA000052`, the relocated Judy Hoffman Domain Adaptation Project identity, and `PRL000297`. The official project page documents transformation learning, MMDT, latent-domain/multi-source adaptation, associated Office/Office-Caltech/Bing-Caltech datasets, standard semi-supervised evaluation protocols, three code-download families, and their dependency/data boundaries. The official `jhoffman/MaxMarginDomainTransforms` repository at observed head `73fed23388ea8c0794976cf0d5f908637502ca1a` is retained only as source-scoped MMDT corroboration, not as a Stage-2 pin, alias, replacement resource, or asserted exact equivalent of the linked MMDT ZIP. Exact archive-level licensing/environment and external-dataset payload validation remain bounded gaps. Reproducibility is `R1`.

## Aggregate batch QA

`SOB024` remains **10/10 — PASS**. `SOB025` is now **9/10**; aggregate QA is not yet due.

## Continuation

Stage3-RC02 through Stage3-RC07 remain authoritative and count-neutral for their accepted scopes. RC07 normalizes 58 enum-invalid values in 35 records from S183–S202 without changing counts or scientific facts.

Continue with `Stage3-S226` at `CR000262`.
