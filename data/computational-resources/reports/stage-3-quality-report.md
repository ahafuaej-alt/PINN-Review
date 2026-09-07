# Computational Resources Stage 3 Quality Report

Date: 2026-09-07  
Branch: `data/computational-resources-stage3`

## Latest checkpoint and aggregate batch

- Checkpoint: `Stage3-S115`
- Resource: `CR000130`
- Checkpoint status: **PASS**
- Latest completed batch: `SOB012` — **PASS (10/10)**
- Current batch: `SOB013` — **3/10**

## S115 checkpoint counts

- Resources: **1**
- Experiments: **1**
- Configurations: **1**
- Technical-evidence records: **8**
- Reproducibility assessments: **1**
- New unresolved findings: **7**
- New explicit conflicts: **0**

## Cumulative counts through S115

- Resources: **133**
- Experiments: **218**
- Configurations: **415**
- Technical-evidence records: **1523**
- Reproducibility assessments: **133**
- Unresolved findings: **847**
- Explicit conflicts: **110**
- Independently extractable resources remaining: **230**

## QA gates

S115 schema validation, cumulative ID uniqueness, evidence-reference integrity, resource→experiment→configuration cross-references, inference labeling, reproducibility classification, R5 exclusion, source-scope discipline, missing-value semantics, repository-scope safety, Stage-1/Stage-2/public-Atlas/curated/methodology/schema write boundaries, execution boundary, provenance-text screening, and branch-head stability all **PASS**.

The latest aggregate batch remains `SOB012` — **PASS**. `SOB013` is not yet due for aggregate QA.

## Scientific/reproducibility note

CR000130 is pinned battery-degradation PIML research code with three source-explicit method families: a hybrid-loss PINN, a half-cell model and multi-fidelity co-kriging. The PINN example provides architecture, optimizer, hyperparameters and seed, but its dataset is confidential, required pretrained model files are absent, and no environment manifest or license is available. The bounded assessment is **R1**.

## Continuation

Exact next resource: `CR000131`. Exact next checkpoint: `Stage3-S116`.
