# Computational Resources Stage 3 Progress

Date: 2026-09-07  
Branch: `data/computational-resources-stage3`  
Methodology: `Stage3-D01` accepted without modification

## Current authoritative state

- Latest completed checkpoint: `Stage3-S108`.
- Latest completed canonical batch: `SOB011` — **PASS**.
- Current canonical batch: `SOB012`.
- Current batch status: **4/10 independently extractable members complete**.
- Latest completed resource: `CR000121`.
- Checkpoint QA: **PASS**.
- Exact next independently extractable resource: `CR000122`.
- Next checkpoint: `Stage3-S109`.
- Pilot-complete resources remain excluded and must not be reprocessed.

## Cumulative Stage-3 counts

- Technical resource records: **124**
- Experiments: **210**
- Configurations: **407**
- Technical-evidence records: **1458**
- Static reproducibility assessments: **124**
- Unresolved findings: **794**
- Explicit conflicts: **107**
- Independently extractable resources remaining: **239**

## Latest checkpoint

`Stage3-S108` completed `CR000121`, preserving the final Stage-2 identity for `Rose-STL-Lab/Turbulent-Flow-Net`, pinned SHA `6ba78055e3afa20a2f4181ca3058b0b9e9b1be74`, and verified `PRL000236` paper-resource mention to Atlas 716.

The pinned repository documents TF-Net, a physics-informed turbulent-flow prediction model combining trainable turbulent-flow decomposition with a specialized U-Net-like architecture and divergence-free regularization. Bounded extraction records one Rayleigh-Benard velocity-prediction experiment and one explicit README training configuration.

Two reproducibility conflicts remain explicit. The README prose names `data_prep.py`, while its command and pinned tree use `data_gen.py`. The README also instructs `pip install -r requirements.txt`, while that manifest contains environment-manager/runtime entries that are not a reconstructable ordinary pip requirements set.

CR000121 is classified R1. Source, pinned version metadata, preprocessing, architecture, training command, seed and evaluation surfaces are inspectable, but installation reconstruction is internally inconsistent, licensing is unavailable, the external dataset was not loaded, and no released checkpoint was verified.

No scientific software, model, dataset, training, inference, evaluation, test, environment, dependency, container, accelerator, or benchmark workload was executed.

## Batch status

`SOB011` remains the latest completed aggregate batch and is **PASS**.

`SOB012` now contains `CR000118`, `CR000119`, `CR000120`, and `CR000121` and is **4/10**. Aggregate batch QA is not yet due.

## Continuation

Resume only from `CR000122` for `Stage3-S109`.
