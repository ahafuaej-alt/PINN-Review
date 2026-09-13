# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S261`
- Latest completed resource: `CR000310`
- Latest completed aggregate batch: `SOB029` - **PASS (10/10)**
- Current batch: `SOB030` - **7/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC08` - **PASS (count-neutral report-state continuity repair)**
- Exact next independently extractable resource: `CR000311`
- Exact next checkpoint: `Stage3-S262`

## Cumulative counts through S261 / RC08

- Resources: **307**
- Experiments: **353**
- Configurations: **628**
- Technical-evidence records: **2980**
- Reproducibility assessments: **307**
- Unresolved findings: **1492**
- Explicit conflicts: **152**
- Independently extractable resources remaining: **56**

## S261

`CR000310` preserves the UNSW Gear wear run-to-failure dataset and verified `PRL000169` relationship for Atlas paper 555. Stage 2 already resolved the Stage-1 DOI transcription error through alias `VA000055`, preserving the stable CR identity while using authoritative Version-1 DOI `10.17632/p2yryg9k6z.1`. Mendeley Version 1 reports 100 kHz acquisitions lasting 10 seconds and a CC-BY-4.0 licence. The primary paper explicitly cites Version 1 but reports 11-second acquisitions, while Mendeley Version 2 later reports 11 seconds. Stage 3 preserves these claims as explicit conflicting evidence and does not silently substitute Version 2 for the paper-cited Version 1. The paper documents the UNSW gear-wear campaign, order tracking, filtering, downsampling, standardization, selected pitting levels and training/validation/testing segment counts. File-level continuity between Versions 1 and 2 and the exact raw-file mapping remain unresolved because no dataset file or internal readme was opened. The resource is assessed at `R2`.

## Aggregate batch QA

`SOB029` remains **PASS (10/10)**. `SOB030` is now **7/10**.

## Continuation

Continue with `Stage3-S262` at `CR000311`.
