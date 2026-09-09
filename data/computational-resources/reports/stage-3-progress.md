# Computational Resources Stage 3 Progress

Date: 2026-09-09
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S150`
- Latest completed resource: `CR000168`
- Latest completed aggregate batch: `SOB016` — **PASS (10/10)**
- Current batch: `SOB017` — **0/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000169`
- Exact next checkpoint: `Stage3-S151`

## Cumulative counts through S150

- Resources: **170**
- Experiments: **255**
- Configurations: **454**
- Technical-evidence records: **1875**
- Reproducibility assessments: **170**
- Unresolved findings: **1055**
- Explicit conflicts: **121**
- Independently extractable resources remaining: **193**

## S150

CR000168 preserves the corrected official non-PINN repository identity and exact README-only snapshot. The paper's data-availability statement conflicts with the absence of code and data at the pinned commit. Static reproducibility is **R0**. SOB016 passes aggregate reconciliation at 10/10.

No scientific workload was executed.

## Reconciled baseline

Stage3-RC02 remains authoritative for repaired pre-S123 metadata/reproducibility records. Stage3-RC03 remains authoritative for repaired S129/S132 enum labels. Accepted methodology and schemas are unchanged.

## Continuation

Continue with `Stage3-S151` at `CR000169` after published-head, checkpoint-QA and SOB016 aggregate-QA readback.
