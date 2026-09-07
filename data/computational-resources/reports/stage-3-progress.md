# Computational Resources Stage 3 Progress

Date: 2026-09-08  
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S119`
- Latest completed resource: `CR000134`
- Latest completed aggregate batch: `SOB012` — **PASS (10/10)**
- Current batch: `SOB013` — **7/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000135`
- Exact next checkpoint: `Stage3-S120`

## Cumulative counts through S119

- Resources: **137**
- Experiments: **223**
- Configurations: **420**
- Technical-evidence records: **1558**
- Reproducibility assessments: **137**
- Unresolved findings: **871**
- Explicit conflicts: **112**
- Independently extractable resources remaining: **226**

## S119

`Stage3-S119` records `CR000134` (`DENG-MIT/Stiff-PINN`) at Stage-2 pinned SHA `ec41e5e5702723113d5fd5dc082baa11a0e72499`, preserving the verified `PRL000259 → Atlas 739` official relationship. Stage 2 found no repository license.

The pinned repository implements regular and QSSA PINN variants for Robertson and pollution stiff chemical-kinetics ODE systems. Two bounded Robertson workflows are extracted to preserve the scientific comparison: regular PINN on the original stiff system and QSSA-reduced Stiff-PINN. The QSSA script defaults to restart mode and expects a checkpoint absent from the pinned tree, so this source-level reproducibility conflict is explicit. CR000134 is conservatively **R1**.

No scientific workload was executed.

## Batch status

`SOB012` remains **PASS (10/10)**. `SOB013` is **7/10**; aggregate QA is not yet due.

## Continuation

Continue with `Stage3-S120` at `CR000135`.
