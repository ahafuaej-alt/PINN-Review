# Computational Resources Stage 3 Progress

Date: 2026-09-09
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S144`
- Latest completed resource: `CR000161`
- Latest completed aggregate batch: `SOB015` — **PASS (10/10)**
- Current batch: `SOB016` — **4/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000162`
- Exact next checkpoint: `Stage3-S145`

## Cumulative counts through S144

- Resources: **164**
- Experiments: **255**
- Configurations: **454**
- Technical-evidence records: **1832**
- Reproducibility assessments: **164**
- Unresolved findings: **1026**
- Explicit conflicts: **119**
- Independently extractable resources remaining: **199**

## S144

CR000161 preserves the Stage-2 pinned IEEE-system repository, GPL-3.0 license, official Atlas-843 relationship, bundled cases, saved simulations and trained model. Bounded extraction maps the shipped IEEE-30 configuration without loading binary artifacts. The absent dependency environment and training workflow, plus the empty default PINN list, limit static reproducibility to **R1**.

No scientific workload was executed.

## Reconciled baseline

Stage3-RC02 remains authoritative for repaired pre-S123 metadata/reproducibility records. Stage3-RC03 remains authoritative for repaired S129/S132 enum labels. Accepted methodology and schemas are unchanged.

## Continuation

Continue with `Stage3-S145` at `CR000162` after published-head and checkpoint-QA readback.
