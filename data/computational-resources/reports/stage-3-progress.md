# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S246`
- Latest completed resource: `CR000293`
- Latest completed aggregate batch: `SOB028` — **PASS (10/10)**
- Current batch: `SOB029` — **0/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC08` — **PASS (count-neutral report-state continuity repair)**
- Exact next independently extractable resource: `CR000294`
- Exact next checkpoint: `Stage3-S247`

## Cumulative counts through S246 / RC08

- Resources: **290**
- Experiments: **343**
- Configurations: **622**
- Technical-evidence records: **2841**
- Reproducibility assessments: **290**
- Unresolved findings: **1450**
- Explicit conflicts: **147**
- Independently extractable resources remaining: **73**

## S246

`CR000292` preserves the Beyond Nyquist pretrained-model collection and `PRL000050`; four collection entries are visible, with one individual model card statically inspected. Collection-level and cross-model licence uniformity remain bounded and no model files were opened. `CR000293` preserves the IXI dataset, `PRL000051`, public NIFTI modalities, acquisition-site metadata and CC BY-SA 3.0 licensing without downloading or parsing payloads. Both resources are assessed at `R2`.

## Aggregate batch QA

`SOB028` is **PASS (10/10)** with membership `CR000284` through `CR000293`. `SOB029` starts at **0/10**.

## Continuation

Continue with `Stage3-S247` at `CR000294`.
