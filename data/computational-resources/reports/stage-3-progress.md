# Computational Resources Stage 3 Progress

Date: 2026-09-08
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S131`
- Latest completed resource: `CR000148`
- Latest completed aggregate batch: `SOB014` — **PASS (10/10)**
- Current batch: `SOB015` — **1/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000149`
- Exact next checkpoint: `Stage3-S132`

## Cumulative counts through S131

- Resources: **151**
- Experiments: **238**
- Configurations: **437**
- Technical-evidence records: **1698**
- Reproducibility assessments: **151**
- Unresolved findings: **956**
- Explicit conflicts: **115**
- Independently extractable resources remaining: **212**

## S131

CR000148 preserves the pinned PICNN repository and official Atlas-802 relationship. The bounded representative homogeneous 20x20 workflow implements a physics-informed CNN pressure solver with an implicit pressure-balance residual and explicit saturation update. Static inspection also establishes a direct entrypoint blocker: `main_homo_bound.py` opens `samplesperm.txt`, but that file is absent from the pinned repository. The heterogeneous workflow separately requires user-supplied permeability data and grid-specific source edits. With no dependency manifest, installation workflow, fixed runtime versions, seed policy or released checkpoint, static reproducibility is **R1**.

No scientific workload was executed.

## Reconciled baseline

The count-neutral [Stage3-RC02 reconciliation](stage-3-cumulative-reconciliation-2026-09-08.md) remains authoritative for repaired pre-S123 metadata and reproducibility assessments. Accepted methodology and schemas are unchanged.

## Continuation authority note

`CR000149` is present in the accepted Stage-1 inventory as the normalized `lsj1211/PIRBFNN-for-modeling-two-phase-mutil-well-Darcy-flow` identity and is not excluded by Stage3-SO-D01. Its absence from the historical Stage-2 Batch-006 resource output must therefore be resolved through final Stage-2 authority before technical extraction; it must not be silently skipped.

## Continuation

Continue with `Stage3-S132` at `CR000149` after published-head and checkpoint-QA readback.
