# Computational Resources Stage 3 Quality Report

Date: 2026-09-11
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S192`
Status: **PASS**

## Checkpoint S192

- Resources: **1** (`CR000214`)
- Experiments: **1**
- Configurations: **1**
- Technical-evidence records: **12**
- Reproducibility assessments: **1**
- New unresolved findings: **6**
- New explicit conflicts: **1**
- Reproducibility: **R2**

All required checkpoint validation gates pass. Stage-2 authority and source scope are preserved. The exact pinned TensorFlowFoam snapshot was inspected statically; only the mature ML_RANS train/export/deploy/test workflow is promoted to an experiment/configuration, ML_LES and IN_SITU remain explicitly work in progress, bundled archives/binaries remain unexecuted, and the README-versus-source activation disagreement is retained as conflicting evidence.

## Aggregate batch QA

`SOB020` remains **10/10 — PASS**. `SOB021` advances to **5/10** with exact next resource `CR000215`.