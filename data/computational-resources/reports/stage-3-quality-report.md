# Computational Resources Stage 3 Quality Report

Date: 2026-09-07  
Branch: `data/computational-resources-stage3`

## Latest checkpoint and aggregate batch

- Checkpoint: `Stage3-S117`
- Resource: `CR000132`
- Checkpoint status: **PASS**
- Latest completed batch: `SOB012` — **PASS (10/10)**
- Current batch: `SOB013` — **5/10**

## S117 checkpoint counts

- Resources: **1**
- Experiments: **1**
- Configurations: **1**
- Technical-evidence records: **8**
- Reproducibility assessments: **1**
- New unresolved findings: **6**
- New explicit conflicts: **0**

## Cumulative counts through S117

- Resources: **135**
- Experiments: **220**
- Configurations: **417**
- Technical-evidence records: **1540**
- Reproducibility assessments: **135**
- Unresolved findings: **859**
- Explicit conflicts: **111**
- Independently extractable resources remaining: **228**

## QA gates

S117 schema validation, cumulative ID uniqueness, evidence-reference integrity, resource→experiment→configuration cross-references, inference labeling, reproducibility classification, R5 exclusion, source-scope discipline, missing-value semantics, repository-scope safety, Stage-1/Stage-2/public-Atlas/curated/methodology/schema write boundaries, execution boundary, provenance-text screening, and branch-head stability all **PASS**.

Latest aggregate batch remains `SOB012` — **PASS**. `SOB013` is not yet due for aggregate QA.

## Scientific/reproducibility note

CR000132 preserves an immutable official source snapshot, BSD-2-Clause license, verified Atlas relationship, and a well-documented paper-level groundwater-flow/mass-balance study. However, final Stage 2 did not expose the recursive repository tree, so dependency/environment, entrypoint, seed and checkpoint provenance cannot be promoted to repository-verified facts. The bounded assessment is **R1**.

## Continuation

Exact next resource: `CR000133`. Exact next checkpoint: `Stage3-S118`.
