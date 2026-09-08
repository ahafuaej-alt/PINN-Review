# Computational Resources Stage 3 Progress

Date: 2026-09-08
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S138`
- Latest completed resource: `CR000155`
- Latest completed aggregate batch: `SOB014` — **PASS (10/10)**
- Current batch: `SOB015` — **8/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000156`
- Exact next checkpoint: `Stage3-S139`

## Cumulative counts through S138

- Resources: **158**
- Experiments: **246**
- Configurations: **445**
- Technical-evidence records: **1775**
- Reproducibility assessments: **158**
- Unresolved findings: **998**
- Explicit conflicts: **117**
- Independently extractable resources remaining: **205**

## S138

CR000155 preserves the Stage-2 pinned `pratikrathore8/opt_for_pinns` snapshot and official Atlas-823 relationship. Static inspection maps the repository's PINN optimizer-study surface, pinned Python requirements and a representative convection Adam→L-BFGS→NysNewton-CG configuration. The representative shell script references an undefined `switch_epochs` variable, while GPU indices and Weights & Biases dependencies remain environment-specific; static reproducibility is **R2**.

No scientific workload was executed.

## Reconciled baseline

Stage3-RC02 remains authoritative for repaired pre-S123 metadata/reproducibility records. Stage3-RC03 remains authoritative for repaired S129/S132 enum labels. Accepted methodology and schemas are unchanged.

## Continuation

Continue with `Stage3-S139` at `CR000156` after published-head and checkpoint-QA readback.
