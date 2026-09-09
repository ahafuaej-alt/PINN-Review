# Computational Resources Stage 3 Quality Report

Date: 2026-09-09
Branch: `data/computational-resources-stage3`

## Latest checkpoint

- Checkpoint: `Stage3-S155`
- Resources: CR000173
- Latest completed aggregate batch: `SOB016` — **PASS (10/10)**
- Current batch: `SOB017` — **5/10**
- Checkpoint QA: **PASS**

All schema, cross-reference, evidence-use, identifier-uniqueness, Stage-2 authority, missing-value, inference-labeling, reproducibility, execution-boundary and repository-scope checks pass. CR000173 retains the Stage-2 correction from non-PINN to the paper's official physics-informed EPNN implementation.

## Checkpoint counts

- Resources: **1**
- Experiments: **1**
- Configurations: **2**
- Technical-evidence records: **15**
- Reproducibility assessments: **1**
- New unresolved findings: **6**
- New explicit conflicts: **0**

## Cumulative counts

- Resources: **175**
- Experiments: **261**
- Configurations: **467**
- Technical-evidence records: **1940**
- Reproducibility assessments: **175**
- Unresolved findings: **1083**
- Explicit conflicts: **123**

## Scientific boundary

The exact pinned tree, source, requirements and dataset documentation were inspected statically. Four large pickle dataset blobs were identified but not loaded. No environment was created, training run performed, checkpoint loaded or scientific result reproduced.

## Continuation

Exact next resource: `CR000174`. Exact next checkpoint: `Stage3-S156`. Independently extractable resources remaining: **188**.
