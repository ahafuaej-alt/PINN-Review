# Computational Resources Stage 3 Progress

Date: 2026-09-07  
Branch: `data/computational-resources-stage3`  
Methodology: `Stage3-D01` accepted without modification

## Current authoritative state

- Latest completed checkpoint: `Stage3-S106`.
- Latest completed canonical batch: `SOB011` — **PASS**.
- Current canonical batch: `SOB012`.
- Current batch status: **2/10 independently extractable members complete**.
- Latest completed resource: `CR000119`.
- Checkpoint QA: **PASS**.
- Exact next independently extractable resource: `CR000120`.
- Next checkpoint: `Stage3-S107`.
- Pilot-complete resources remain excluded and must not be reprocessed.

## Cumulative Stage-3 counts

- Technical resource records: **122**
- Experiments: **208**
- Configurations: **405**
- Technical-evidence records: **1438**
- Static reproducibility assessments: **122**
- Unresolved findings: **779**
- Explicit conflicts: **104**
- Independently extractable resources remaining: **241**

## Latest checkpoint

`Stage3-S106` completed `CR000119`, preserving the final Stage-2 identity for `jinlong83/statistical-constrained-GANS` and the verified `PRL000234` paper-resource mention to Atlas 716.

The repository endpoint remains unavailable and Stage 2 established no pinned source snapshot. The verified paper attribution is therefore retained independently of source availability, while source-internal method role, architecture, training, evaluation and data wiring remain unknown. No experiments or configurations are manufactured.

CR000119 is classified R0 because source, license, environment, installation, dependencies, workflow, stochastic controls, hardware, checkpoints and expected outputs cannot be inspected. Citation linkage is the only strong reproducibility component.

No scientific software, model, dataset, training, inference, evaluation, test, environment, dependency, container, accelerator, or benchmark workload was executed.

## Batch status

`SOB011` remains the latest completed aggregate batch and is **PASS**.

`SOB012` now contains `CR000118` and `CR000119` and is **2/10**. Aggregate batch QA is not yet due.

## Continuation

Resume only from `CR000120` for `Stage3-S107`. Bounded pre-inspection found that its pinned MeshfreeFlowNet repository contains a reproduction-instruction filename mismatch, so it should receive single-resource treatment.
