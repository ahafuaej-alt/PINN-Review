# Computational Resources Stage 3 Quality Report

Date: 2026-09-07  
Branch: `data/computational-resources-stage3`

## Latest checkpoint and aggregate batch

- Checkpoint: `Stage3-S108`
- Resource: `CR000121`
- Checkpoint status: **PASS**
- Latest completed batch: `SOB011` — **PASS (10/10)**
- Current batch: `SOB012` — **4/10**

## S108 checkpoint counts

- Resources: **1**
- Experiments: **1**
- Configurations: **1**
- Technical-evidence records: **10**
- Reproducibility assessments: **1**
- New unresolved findings: **8**
- New explicit conflicts: **2**

## Cumulative counts through S108

- Resources: **124**
- Experiments: **210**
- Configurations: **407**
- Technical-evidence records: **1458**
- Reproducibility assessments: **124**
- Unresolved findings: **794**
- Explicit conflicts: **107**
- Independently extractable resources remaining: **239**

## QA gates

S108 schema validation, cumulative ID uniqueness, evidence-reference integrity, resource→experiment→configuration cross-references, inference labeling, reproducibility classification, R5 exclusion, source-scope discipline, missing-value semantics, repository-scope safety, Stage-1/Stage-2/public-Atlas/curated/methodology/schema write boundaries, execution boundary, provenance-text screening, and branch-head stability all **PASS**.

`SOB012` is 4/10, so aggregate batch QA is not yet due. `SOB011` remains the latest completed aggregate batch and is **PASS**.

## Scientific/reproducibility note

`CR000121` preserves the pinned TF-Net source and verified Atlas-716 paper-resource attribution. One Rayleigh-Benard turbulent-flow experiment and one source-explicit training configuration are represented without proliferating baseline modules.

TF-Net is retained as hybrid physics-informed turbulent-flow deep learning rather than collapsed into a classical PINN category. The preprocessing filename inconsistency and non-reconstructable pip/requirements pairing are explicit. R1 is retained because environment installation cannot be verified statically despite detailed source, version, seed, preprocessing, hyperparameter and evaluation documentation.

## Continuation

Exact next resource: `CR000122`. Exact next checkpoint: `Stage3-S109`.
