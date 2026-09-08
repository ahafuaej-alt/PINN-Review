# Computational Resources Stage 3 Progress

Date: 2026-09-08
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S135`
- Latest completed resource: `CR000152`
- Latest completed aggregate batch: `SOB014` — **PASS (10/10)**
- Current batch: `SOB015` — **5/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000153`
- Exact next checkpoint: `Stage3-S136`

## Cumulative counts through S135

- Resources: **155**
- Experiments: **243**
- Configurations: **442**
- Technical-evidence records: **1745**
- Reproducibility assessments: **155**
- Unresolved findings: **983**
- Explicit conflicts: **117**
- Independently extractable resources remaining: **208**

## S135

CR000152 preserves the pinned self-scaled quasi-Newton PINN implementation and official paper819 relationship. The bounded representative 1D Burgers workflow documents exact principal library versions, bundled reference data, hyperparameters, Adam plus RAD training, and quasi-Newton refinement. Manual SciPy-internal patching, unknown Python/hardware, and absence of a bundled checkpoint or quantitative acceptance threshold limit static reproducibility to **R3**.

No scientific workload was executed.

## Reconciled baseline

The count-neutral [Stage3-RC02 reconciliation](stage-3-cumulative-reconciliation-2026-09-08.md) remains authoritative for repaired pre-S123 metadata and reproducibility assessments. Accepted methodology and schemas are unchanged. [Stage3-RC03](stage-3-schema-reconciliation-2026-09-08-rc03.md) additionally corrects count-neutral S129/S132 enum labels.

## Continuation

Continue with `Stage3-S136` at `CR000153` after published-head and checkpoint-QA readback.
