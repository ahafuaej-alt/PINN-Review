# Computational Resources Stage 3 Quality Report

Date: 2026-09-07  
Branch: `data/computational-resources-stage3`

## Latest checkpoint and aggregate batch

- Checkpoint: `Stage3-S107`
- Resource: `CR000120`
- Checkpoint status: **PASS**
- Latest completed batch: `SOB011` — **PASS (10/10)**
- Current batch: `SOB012` — **3/10**

## S107 checkpoint counts

- Resources: **1**
- Experiments: **1**
- Configurations: **1**
- Technical-evidence records: **10**
- Reproducibility assessments: **1**
- New unresolved findings: **7**
- New explicit conflicts: **1**

## Cumulative counts through S107

- Resources: **123**
- Experiments: **209**
- Configurations: **406**
- Technical-evidence records: **1448**
- Reproducibility assessments: **123**
- Unresolved findings: **786**
- Explicit conflicts: **105**
- Independently extractable resources remaining: **240**

## QA gates

S107 schema validation, cumulative ID uniqueness, evidence-reference integrity, resource→experiment→configuration cross-references, inference labeling, reproducibility classification, R5 exclusion, source-scope discipline, missing-value semantics, repository-scope safety, Stage-1/Stage-2/public-Atlas/curated/methodology/schema write boundaries, execution boundary, provenance-text screening, and branch-head stability all **PASS**.

`SOB012` is 3/10, so aggregate batch QA is not yet due. `SOB011` remains the latest completed aggregate batch and is **PASS**.

## Scientific/reproducibility note

`CR000120` preserves the Stage-2 pinned MeshfreeFlowNet snapshot and verified Atlas-716 paper-resource attribution. One RB2D experiment and one source-explicit launcher configuration are represented without proliferating framework examples.

The experiment README's `run_experiments.sh` reproduction command conflicts with the pinned tree's singular `run_experiment.sh`; the mismatch is recorded explicitly. R1 is retained because environment reconstruction and installation are incomplete despite detailed source, hyperparameter, seed, dataset and evaluation documentation.

## Continuation

Exact next resource: `CR000121`. Exact next checkpoint: `Stage3-S108`.
