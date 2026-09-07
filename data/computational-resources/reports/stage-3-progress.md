# Computational Resources Stage 3 Progress

Date: 2026-09-07  
Branch: `data/computational-resources-stage3`  
Methodology: `Stage3-D01` accepted without modification

## Current authoritative state

- Latest completed checkpoint: `Stage3-S111`.
- Latest completed canonical batch: `SOB011` — **PASS**.
- Current canonical batch: `SOB012`.
- Current batch status: **8/10 independently extractable members complete**.
- Latest completed resource: `CR000125`.
- Checkpoint QA: **PASS**.
- Exact next independently extractable resource: `CR000126`.
- Next checkpoint: `Stage3-S112`.
- Pilot-complete resources remain excluded and must not be reprocessed.

## Cumulative Stage-3 counts

- Technical resource records: **128**
- Experiments: **213**
- Configurations: **410**
- Technical-evidence records: **1485**
- Static reproducibility assessments: **128**
- Unresolved findings: **819**
- Explicit conflicts: **109**
- Independently extractable resources remaining: **235**

## Latest checkpoint

`Stage3-S111` completed `CR000125`. Final Stage-2 authority verifies the public `mspritch/spcam3.0-neural-net` GitLab project, master default branch, and `PRL000240` paper-resource mention to Atlas 716, but no authoritative commit SHA was captured.

The current public project surface was inspected only as bounded availability evidence and was not promoted to an immutable historical snapshot. No source-internal experiment or configuration records were manufactured from mutable unpinned content. The resource remains research code related to weather/climate modeling and is not relabeled as a classical PDE-residual PINN.

CR000125 is R1. No scientific software, model, dataset, training, inference, evaluation, test, environment, dependency, container, accelerator, or benchmark workload was executed.

## Batch status

`SOB011` remains the latest completed aggregate batch and is **PASS**.

`SOB012` now contains `CR000118` through `CR000125` and is **8/10**. Aggregate batch QA is not yet due.

## Continuation

Resume only from `CR000126` for `Stage3-S112`.
