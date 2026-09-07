# Computational Resources Stage 3 Quality Report

Date: 2026-09-07  
Branch: `data/computational-resources-stage3`

## Latest checkpoint and aggregate batch

- Checkpoint: `Stage3-S114`
- Resource: `CR000129`
- Checkpoint status: **PASS**
- Latest completed batch: `SOB012` — **PASS (10/10)**
- Current batch: `SOB013` — **2/10**

## S114 checkpoint counts

- Resources: **1**
- Experiments: **1**
- Configurations: **1**
- Technical-evidence records: **10**
- Reproducibility assessments: **1**
- New unresolved findings: **5**
- New explicit conflicts: **1**

## Cumulative counts through S114

- Resources: **132**
- Experiments: **217**
- Configurations: **414**
- Technical-evidence records: **1515**
- Reproducibility assessments: **132**
- Unresolved findings: **840**
- Explicit conflicts: **110**
- Independently extractable resources remaining: **231**

## QA gates

S114 schema validation, cumulative ID uniqueness, evidence-reference integrity, resource→experiment→configuration cross-references, inference labeling, reproducibility classification, R5 exclusion, source-scope discipline, missing-value semantics, repository-scope safety, Stage-1/Stage-2/public-Atlas/curated/methodology/schema write boundaries, execution boundary, provenance-text screening, and branch-head stability all **PASS**.

The latest aggregate batch remains `SOB012` — **PASS**. `SOB013` is not yet due for aggregate QA.

## Scientific/reproducibility note

CR000129 is a pinned multi-problem classical PINN platform. The default HeatEquation workflow is source-explicit and receives experiment/configuration records; the additional four problem families are preserved at resource scope. MIT licensing, pinned requirements, installation, entrypoint, seeds, training and evaluation surfaces support R2. Hardware, released checkpoints, expected numerical baselines and exact paper-to-current-module attribution remain unresolved. The configured Sobol point label conflicts with the default HeatEquation implementation's Cartesian/linspace construction and is retained explicitly.

## Continuation

Exact next resource: `CR000130`. Exact next checkpoint: `Stage3-S115`.
