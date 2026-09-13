# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S252`
- Latest completed resource: `CR000300`
- Latest completed aggregate batch: `SOB028` — **PASS (10/10)**
- Current batch: `SOB029` — **7/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC08` — **PASS (count-neutral report-state continuity repair)**
- Exact next independently extractable resource: `CR000301`
- Exact next checkpoint: `Stage3-S253`

## Cumulative counts through S252 / RC08

- Resources: **297**
- Experiments: **343**
- Configurations: **622**
- Technical-evidence records: **2881**
- Reproducibility assessments: **297**
- Unresolved findings: **1457**
- Explicit conflicts: **148**
- Independently extractable resources remaining: **66**

## S252

`CR000300` preserves the historically verified GIMIAS dataset identity and `PRL000090` relationship for Atlas paper 378. The primary paper explicitly reports public computed-tomography data of a human subject from the exact GIMIAS URL for ventricular-structure visualization in Figure 1, while final Stage-2 authority records that the original item page is no longer available and redirects to an empty lander. Current item title, creator, file inventory, access path, and reuse licence therefore remain unavailable rather than inferred. No medical-image payload was downloaded or opened. The resource is assessed at `R0` because the historical identity and use are established but no usable current source/equivalent technical artifact is available.

## Aggregate batch QA

`SOB028` remains **PASS (10/10)**. `SOB029` is now **7/10**.

## Continuation

Continue with `Stage3-S253` at `CR000301`.
