# Computational Resources Stage 3 Quality Report

Date: 2026-09-07  
Branch: `data/computational-resources-stage3`

## Latest checkpoint and aggregate batch

- Checkpoint: `Stage3-S111`
- Resources: `CR000125`
- Checkpoint status: **PASS**
- Latest completed batch: `SOB011` — **PASS (10/10)**
- Current batch: `SOB012` — **8/10**

## S111 checkpoint counts

- Resources: **1**
- Experiments: **0**
- Configurations: **0**
- Technical-evidence records: **6**
- Reproducibility assessments: **1**
- New unresolved findings: **6**
- New explicit conflicts: **0**

## Cumulative counts through S111

- Resources: **128**
- Experiments: **213**
- Configurations: **410**
- Technical-evidence records: **1485**
- Reproducibility assessments: **128**
- Unresolved findings: **819**
- Explicit conflicts: **109**
- Independently extractable resources remaining: **235**

## QA gates

S111 schema validation, cumulative ID uniqueness, evidence-reference integrity, resource→experiment→configuration cross-references, inference labeling, reproducibility classification, R5 exclusion, source-scope discipline, missing-value semantics, repository-scope safety, Stage-1/Stage-2/public-Atlas/curated/methodology/schema write boundaries, execution boundary, provenance-text screening, and branch-head stability all **PASS**.

`SOB012` is 8/10, so aggregate batch QA is not yet due. `SOB011` remains the latest completed aggregate batch and is **PASS**.

## Scientific/reproducibility note

CR000125 is bounded as research code associated with weather and climate modeling. Final Stage-2 authority verifies the exact public GitLab project and its relationship to Atlas 716 but provides no immutable commit SHA. Current mutable project visibility is therefore used only as availability evidence, not as a substitute pinned snapshot. No source-internal experiments or configurations are manufactured, and the resource is not relabeled as a classical PDE-residual PINN.

R1 is conservative because project identity and paper relationship are verified while immutable source-version provenance, license, reconstructable environment, pinned training details, hardware/evaluation provenance and released checkpoints remain insufficient.

## Continuation

Exact next resource: `CR000126`. Exact next checkpoint: `Stage3-S112`.
