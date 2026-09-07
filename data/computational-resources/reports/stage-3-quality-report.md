# Computational Resources Stage 3 Quality Report

Date: 2026-09-08  
Branch: `data/computational-resources-stage3`

## Latest checkpoint and aggregate batch

- Checkpoint: `Stage3-S120`
- Resource: `CR000135`
- Checkpoint status: **PASS**
- Latest completed batch: `SOB012` — **PASS (10/10)**
- Current batch: `SOB013` — **8/10**

## S120 checkpoint counts

- Resources: **1**
- Experiments: **1**
- Configurations: **1**
- Technical-evidence records: **9**
- Reproducibility assessments: **1**
- New unresolved findings: **5**
- New explicit conflicts: **0**

## Cumulative counts through S120

- Resources: **138**
- Experiments: **224**
- Configurations: **421**
- Technical-evidence records: **1567**
- Reproducibility assessments: **138**
- Unresolved findings: **876**
- Explicit conflicts: **112**
- Independently extractable resources remaining: **225**

## QA gates

S120 schema validation, cumulative ID uniqueness, evidence-reference integrity, resource→experiment→configuration cross-references, inference labeling, reproducibility classification, R5 exclusion, source-scope discipline, missing-value semantics, repository-scope safety, Stage-1/Stage-2/public-Atlas/curated/methodology/schema write boundaries, execution boundary, provenance-text screening, and branch-head stability all **PASS**.

Latest aggregate batch remains `SOB012` — **PASS**. `SOB013` is not yet due for aggregate QA.

## Scientific/reproducibility note

CR000135 preserves the immutable official Loss_Landscape_PINNs snapshot and verified Atlas relationship. The pinned source combines a reproducibility capsule, version-pinned Docker environment, deterministic seed control, a Burgers master workflow, and bundled trained-model/loss-landscape artifacts across a wider three-problem suite. The bounded assessment is **R2**.

## Continuation

Exact next resource: `CR000136`. Exact next checkpoint: `Stage3-S121`.
