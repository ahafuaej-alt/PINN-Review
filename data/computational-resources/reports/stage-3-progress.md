# Computational Resources Stage 3 Progress

Date: 2026-09-07  
Branch: `data/computational-resources-stage3`  
Methodology: `Stage3-D01` accepted without modification

## Current authoritative state

- Latest completed checkpoint: `Stage3-S110`.
- Latest completed canonical batch: `SOB011` — **PASS**.
- Current canonical batch: `SOB012`.
- Current batch status: **7/10 independently extractable members complete**.
- Latest completed resource: `CR000124`.
- Checkpoint QA: **PASS**.
- Exact next independently extractable resource: `CR000125`.
- Next checkpoint: `Stage3-S111`.
- Pilot-complete resources remain excluded and must not be reprocessed.

## Cumulative Stage-3 counts

- Technical resource records: **127**
- Experiments: **213**
- Configurations: **410**
- Technical-evidence records: **1479**
- Static reproducibility assessments: **127**
- Unresolved findings: **813**
- Explicit conflicts: **109**
- Independently extractable resources remaining: **236**

## Latest checkpoint

`Stage3-S110` completed `CR000124`. The resource preserves pinned SHA `d1229aef09747dbc724c5786bffea90bc16df223` and verified `PRL000239` paper-resource mention to Atlas 716. The pinned PGA_LSTM repository implements physics-guided recurrent architectures for Lake Mendota and Falling Creek Reservoir, using monotonicity-preserving LSTM structure, physically meaningful density intermediates, bundled lake datasets, and Monte Carlo-dropout uncertainty evaluation.

Two source-explicit experiments and two corresponding default configurations are recorded. PGA-LSTM remains classified as physics-guided architecture research code, not as a classical PDE-residual PINN.

One source conflict remains explicit: `Models/FCR_PGA_LSTM.py` is FCR-designated and writes to an FCR results directory, but its data loader reads `ROA_temporal_mendota_train_test_split_4_year_train_new.mat`; the inspected repository does not resolve this naming/provenance mismatch.

CR000124 is R1. No scientific software, model, dataset, training, inference, evaluation, test, environment, dependency, container, accelerator, or benchmark workload was executed.

## Batch status

`SOB011` remains the latest completed aggregate batch and is **PASS**.

`SOB012` now contains `CR000118` through `CR000124` and is **7/10**. Aggregate batch QA is not yet due.

## Continuation

Resume only from `CR000125` for `Stage3-S111`.
