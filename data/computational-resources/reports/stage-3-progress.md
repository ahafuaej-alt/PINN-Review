# Computational Resources Stage 3 Progress

Date: 2026-09-09
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S152`
- Latest completed resource: `CR000170`
- Latest completed aggregate batch: `SOB016` — **PASS (10/10)**
- Current batch: `SOB017` — **2/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000171`
- Exact next checkpoint: `Stage3-S153`

## Cumulative counts through S152

- Resources: **172**
- Experiments: **259**
- Configurations: **464**
- Technical-evidence records: **1902**
- Reproducibility assessments: **172**
- Unresolved findings: **1066**
- Explicit conflicts: **123**
- Independently extractable resources remaining: **191**

## S152

CR000170 preserves the official non-PINN MRI super-resolution repository and exact pinned snapshot. Static extraction maps the five compared 3D CNN architectures, external IXI data, versioned Conda environment, split manifests, representative training settings and inference path. A gradient-update defect and an evaluation model-label mismatch remain explicit conflicts, constraining reproducibility to **R2**. SOB017 advances to 2/10.

No scientific workload was executed.

## Reconciled baseline

Stage3-RC02 remains authoritative for repaired pre-S123 metadata/reproducibility records. Stage3-RC03 remains authoritative for repaired S129/S132 enum labels. Accepted methodology and schemas are unchanged.

## Continuation

Continue with `Stage3-S153` at `CR000171` after published-head and checkpoint-QA readback.
