# Computational Resources Stage 3 Quality Report

Date: 2026-09-07  
Branch: `data/computational-resources-stage3`

## Latest checkpoint and aggregate batch

- Checkpoint: `Stage3-S109`
- Resources: `CR000122`, `CR000123`
- Checkpoint status: **PASS**
- Latest completed batch: `SOB011` — **PASS (10/10)**
- Current batch: `SOB012` — **6/10**

## S109 checkpoint counts

- Resources: **2**
- Experiments: **1**
- Configurations: **1**
- Technical-evidence records: **13**
- Reproducibility assessments: **2**
- New unresolved findings: **12**
- New explicit conflicts: **1**

## Cumulative counts through S109

- Resources: **126**
- Experiments: **211**
- Configurations: **408**
- Technical-evidence records: **1471**
- Reproducibility assessments: **126**
- Unresolved findings: **806**
- Explicit conflicts: **108**
- Independently extractable resources remaining: **237**

## QA gates

S109 schema validation, cumulative ID uniqueness, evidence-reference integrity, resource→experiment→configuration cross-references, inference labeling, reproducibility classification, R5 exclusion, source-scope discipline, missing-value semantics, repository-scope safety, Stage-1/Stage-2/public-Atlas/curated/methodology/schema write boundaries, execution boundary, provenance-text screening, and branch-head stability all **PASS**.

`SOB012` is 6/10, so aggregate batch QA is not yet due. `SOB011` remains the latest completed aggregate batch and is **PASS**.

## Scientific/reproducibility note

CR000122 remains an unavailable-source R0 record with a verified Atlas-716 relationship. CR000123 is bounded as hybrid/data-driven geophysical-flow deep learning with physics-derived two-layer QG LES context, not as a classical PDE-residual PINN. Its pinned STN workflow is R1 because source, architecture, training and evaluation are inspectable while environment reconstruction, licensing, seed and bundled data remain insufficient.

The source-level `num_epochs=8` versus `model.fit(...epochs=100...)` inconsistency is explicit.

## Continuation

Exact next resource: `CR000124`. Exact next checkpoint: `Stage3-S110`.
