# Computational Resources Stage 3 Progress

Date: 2026-09-12
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S220`
- Latest completed resource: `CR000255`
- Latest completed aggregate batch: `SOB024` — **PASS (10/10)**
- Current batch: `SOB025` — **3/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC07` — **PASS**
- Exact next independently extractable resource: `CR000256`
- Exact next checkpoint: `Stage3-S221`

## Cumulative counts through S220 / RC07

- Resources: **253**
- Experiments: **341**
- Configurations: **618**
- Technical-evidence records: **2590**
- Reproducibility assessments: **253**
- Unresolved findings: **1395**
- Explicit conflicts: **146**
- Independently extractable resources remaining: **110**

## S220

`CR000255` preserves `VA000050`, the relocated Boqing Gong profile/software-index identity, and `PRL000291`. Static inspection of the linked official GFK archive records the GFK implementation, bundled four-domain feature data, one active 20-trial MATLAB experiment, and one active webcam-to-DSLR configuration. Missing licensing, environment/installation, seed and expected-result evidence bound reproducibility at `R1`.

## Aggregate batch QA

`SOB024` remains **10/10 — PASS**. `SOB025` is now **3/10**; aggregate QA is not yet due.

## Continuation

Stage3-RC02 through Stage3-RC07 remain authoritative and count-neutral for their accepted scopes. RC07 normalizes 58 enum-invalid values in 35 records from S183–S202 without changing counts or scientific facts.

Continue with `Stage3-S221` at `CR000256`.
