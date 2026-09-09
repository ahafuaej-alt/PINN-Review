# Computational Resources Stage 3 Progress

Date: 2026-09-09
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S155`
- Latest completed resource: `CR000173`
- Latest completed aggregate batch: `SOB016` — **PASS (10/10)**
- Current batch: `SOB017` — **5/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000174`
- Exact next checkpoint: `Stage3-S156`

## Cumulative counts through S155

- Resources: **175**
- Experiments: **261**
- Configurations: **467**
- Technical-evidence records: **1940**
- Reproducibility assessments: **175**
- Unresolved findings: **1083**
- Explicit conflicts: **123**
- Independently extractable resources remaining: **188**

## S155

CR000173 preserves the corrected physics-informed identity of the official EPNN implementation for Atlas paper 539. Static extraction maps one training experiment, the active 16e-4 and documented 4e-4 synthetic-data configurations, three coupled subnetworks, the physics-constructed stress increment, pinned dependencies and evaluation protocol. Bundled data and detailed training controls support **R3**; missing reference outputs and complete paper-to-command mapping block R4. SOB017 advances to 5/10.

No scientific workload was executed.

## Reconciled baseline

Stage3-RC02 remains authoritative for repaired pre-S123 metadata/reproducibility records. Stage3-RC03 remains authoritative for repaired S129/S132 enum labels. Accepted methodology and schemas are unchanged.

## Continuation

Continue with `Stage3-S156` at `CR000174` after published-head and checkpoint-QA readback.
