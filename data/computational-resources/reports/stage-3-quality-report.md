# Computational Resources Stage 3 Quality Report

Date: 2026-09-07  
Branch: `data/computational-resources-stage3`

## Latest checkpoint and aggregate batch

- Checkpoint: `Stage3-S106`
- Resource: `CR000119`
- Checkpoint status: **PASS**
- Latest completed batch: `SOB011` — **PASS (10/10)**
- Current batch: `SOB012` — **2/10**

## S106 checkpoint counts

- Resources: **1**
- Experiments: **0**
- Configurations: **0**
- Technical-evidence records: **5**
- Reproducibility assessments: **1**
- New unresolved findings: **5**
- New explicit conflicts: **0**

## Cumulative counts through S106

- Resources: **122**
- Experiments: **208**
- Configurations: **405**
- Technical-evidence records: **1438**
- Reproducibility assessments: **122**
- Unresolved findings: **779**
- Explicit conflicts: **104**
- Independently extractable resources remaining: **241**

## QA gates

S106 schema validation, cumulative ID uniqueness, evidence-reference integrity, resource→experiment→configuration cross-references, inference labeling, reproducibility classification, R5 exclusion, source-scope discipline, missing-value semantics, repository-scope safety, Stage-1/Stage-2/public-Atlas/curated/methodology/schema write boundaries, execution boundary, provenance-text screening, and branch-head stability all **PASS**.

`SOB012` is 2/10, so aggregate batch QA is not yet due. `SOB011` remains the latest completed aggregate batch and is **PASS**.

## Scientific/reproducibility note

`CR000119` retains a verified paper-resource mention to Atlas 716, but the recorded repository is unavailable and no pinned source snapshot exists. Stage 3 therefore preserves the attribution without promoting the historical broad research-code classification into a specific implementation profile.

R0 is required: source, license, environment, dependencies, installation, executable workflow, architecture, training, evaluation, seeds, hardware, checkpoints and machine-readable expected outputs cannot be inspected.

## Continuation

Exact next resource: `CR000120`. Exact next checkpoint: `Stage3-S107`. Bounded inspection already shows a repository documentation/script filename mismatch that warrants single-resource treatment.
