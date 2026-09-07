# Computational Resources Stage 3 Progress

Date: 2026-09-07  
Branch: `data/computational-resources-stage3`  
Methodology: `Stage3-D01` accepted without modification

## Current authoritative state

- Latest completed checkpoint: `Stage3-S109`.
- Latest completed canonical batch: `SOB011` — **PASS**.
- Current canonical batch: `SOB012`.
- Current batch status: **6/10 independently extractable members complete**.
- Latest completed resource: `CR000123`.
- Checkpoint QA: **PASS**.
- Exact next independently extractable resource: `CR000124`.
- Next checkpoint: `Stage3-S110`.
- Pilot-complete resources remain excluded and must not be reprocessed.

## Cumulative Stage-3 counts

- Technical resource records: **126**
- Experiments: **211**
- Configurations: **408**
- Technical-evidence records: **1471**
- Static reproducibility assessments: **126**
- Unresolved findings: **806**
- Explicit conflicts: **108**
- Independently extractable resources remaining: **237**

## Latest checkpoint

`Stage3-S109` completed `CR000122` and `CR000123`. CR000122 preserves the verified `PRL000237` paper-resource mention to Atlas 716 while keeping unavailable source fields unknown; no experiment or configuration was manufactured.

CR000123 preserves pinned SHA `9946273eee53fa0a4ba44ad56900976be2d4f1ce` and verified `PRL000238` paper-resource mention to Atlas 716. The pinned repository combines a convolutional encoder-decoder and spatial transformer with bilinear interpolation with MATLAB code for a two-layer quasi-geostrophic LES solver. The bounded Python workflow trains one-step QG field prediction and performs an autoregressive rollout.

One source conflict remains explicit: `QG_STN.py` declares `num_epochs = 8` but the effective `model.fit` call hard-codes `epochs = 100`.

CR000122 is R0 and CR000123 is R1. No scientific software, model, dataset, training, inference, evaluation, test, environment, dependency, container, accelerator, or benchmark workload was executed.

## Batch status

`SOB011` remains the latest completed aggregate batch and is **PASS**.

`SOB012` now contains `CR000118` through `CR000123` and is **6/10**. Aggregate batch QA is not yet due.

## Continuation

Resume only from `CR000124` for `Stage3-S110`.
