# Computational Resources Stage 3 Progress

Date: 2026-09-09
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S148`
- Latest completed resource: `CR000166`
- Latest completed aggregate batch: `SOB015` — **PASS (10/10)**
- Current batch: `SOB016` — **8/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000167`
- Exact next checkpoint: `Stage3-S149`

## Cumulative counts through S148

- Resources: **168**
- Experiments: **255**
- Configurations: **454**
- Technical-evidence records: **1862**
- Reproducibility assessments: **168**
- Unresolved findings: **1046**
- Explicit conflicts: **120**
- Independently extractable resources remaining: **195**

## S148

CR000166 preserves the pinned official non-PINN notebook identity for interpretable machine learning in astronomy. Static source inspection identifies tabular SDSS and GalaxyMNIST workflows with tree, attention, gradient, LIME and SHAP explanations. External runtime downloads and incomplete unpinned inline installation keep static reproducibility at **R1**.

No scientific workload was executed.

## Reconciled baseline

Stage3-RC02 remains authoritative for repaired pre-S123 metadata/reproducibility records. Stage3-RC03 remains authoritative for repaired S129/S132 enum labels. Accepted methodology and schemas are unchanged.

## Continuation

Continue with `Stage3-S149` at `CR000167` after published-head and checkpoint-QA readback.
