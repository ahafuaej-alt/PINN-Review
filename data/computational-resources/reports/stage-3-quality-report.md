# Computational Resources Stage 3 Quality Report

Date: 2026-09-07  
Branch: `data/computational-resources-stage3`

## Latest checkpoint and aggregate batch

- Checkpoint: `Stage3-S116`
- Resource: `CR000131`
- Checkpoint status: **PASS**
- Latest completed batch: `SOB012` — **PASS (10/10)**
- Current batch: `SOB013` — **4/10**

## S116 checkpoint counts

- Resources: **1**
- Experiments: **1**
- Configurations: **1**
- Technical-evidence records: **9**
- Reproducibility assessments: **1**
- New unresolved findings: **6**
- New explicit conflicts: **1**

## Cumulative counts through S116

- Resources: **134**
- Experiments: **219**
- Configurations: **416**
- Technical-evidence records: **1532**
- Reproducibility assessments: **134**
- Unresolved findings: **853**
- Explicit conflicts: **111**
- Independently extractable resources remaining: **229**

## QA gates

S116 schema validation, cumulative ID uniqueness, evidence-reference integrity, resource→experiment→configuration cross-references, inference labeling, reproducibility classification, R5 exclusion, source-scope discipline, missing-value semantics, repository-scope safety, Stage-1/Stage-2/public-Atlas/curated/methodology/schema write boundaries, execution boundary, provenance-text screening, and branch-head stability all **PASS**.

Latest aggregate batch remains `SOB012` — **PASS**. `SOB013` is not yet due for aggregate QA.

## Scientific/reproducibility note

CR000131 is a pinned comparative repository with paired FEM/PINN implementations for six PDE problem families. Representative 1D Poisson exposes the PINN's Adam→L-BFGS workflow, Latin-hypercube collocation, architecture sweep, and the FEM mesh/solver sweep. The repository lacks a license and complete environment manifest, and its own JAX version/API comment is internally contradictory; the bounded assessment is **R1**.

## Continuation

Exact next resource: `CR000132`. Exact next checkpoint: `Stage3-S117`.
