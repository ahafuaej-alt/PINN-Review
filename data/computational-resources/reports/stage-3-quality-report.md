# Computational Resources Stage 3 Quality Report

Date: 2026-09-08  
Branch: `data/computational-resources-stage3`

## Latest checkpoint and aggregate batch

- Checkpoint: `Stage3-S119`
- Resource: `CR000134`
- Checkpoint status: **PASS**
- Latest completed batch: `SOB012` — **PASS (10/10)**
- Current batch: `SOB013` — **7/10**

## S119 checkpoint counts

- Resources: **1**
- Experiments: **2**
- Configurations: **2**
- Technical-evidence records: **10**
- Reproducibility assessments: **1**
- New unresolved findings: **6**
- New explicit conflicts: **1**

## Cumulative counts through S119

- Resources: **137**
- Experiments: **223**
- Configurations: **420**
- Technical-evidence records: **1558**
- Reproducibility assessments: **137**
- Unresolved findings: **871**
- Explicit conflicts: **112**
- Independently extractable resources remaining: **226**

## QA gates

S119 schema validation, cumulative ID uniqueness, evidence-reference integrity, resource→experiment→configuration cross-references, inference labeling, reproducibility classification, R5 exclusion, source-scope discipline, missing-value semantics, repository-scope safety, Stage-1/Stage-2/public-Atlas/curated/methodology/schema write boundaries, execution boundary, provenance-text screening, and branch-head stability all **PASS**.

Latest aggregate batch remains `SOB012` — **PASS**. `SOB013` is not yet due for aggregate QA.

## Scientific/reproducibility note

CR000134 preserves the immutable official Stiff-PINN snapshot and verified Atlas relationship. The source separates regular and QSSA variants for Robertson and pollution stiff kinetics. The Robertson-QSSA default restart path requires a checkpoint absent from the pinned tree, while dependency/environment, complete seed control, hardware and installation provenance remain incomplete. The bounded assessment is **R1**.

## Continuation

Exact next resource: `CR000135`. Exact next checkpoint: `Stage3-S120`.
