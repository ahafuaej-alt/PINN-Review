# Computational Resources Stage 3 Quality Report

Date: 2026-09-07  
Branch: `data/computational-resources-stage3`

## Latest checkpoint and aggregate batch

- Checkpoint: `Stage3-S105`
- Resource: `CR000118`
- Checkpoint status: **PASS**
- Latest completed batch: `SOB011` — **PASS (10/10)**
- Current batch: `SOB012` — **1/10**

## S105 checkpoint counts

- Resources: **1**
- Experiments: **2**
- Configurations: **3**
- Technical-evidence records: **11**
- Reproducibility assessments: **1**
- New unresolved findings: **7**
- New explicit conflicts: **1**

## Cumulative counts through S105

- Resources: **121**
- Experiments: **208**
- Configurations: **405**
- Technical-evidence records: **1433**
- Reproducibility assessments: **121**
- Unresolved findings: **774**
- Explicit conflicts: **104**
- Independently extractable resources remaining: **242**

## QA gates

S105 schema validation, cumulative ID uniqueness, evidence-reference integrity, resource→experiment→configuration cross-references, inference labeling, reproducibility classification, R5 exclusion, source-scope discipline, missing-value semantics, repository-scope safety, Stage-1/Stage-2/public-Atlas/curated/methodology/schema write boundaries, execution boundary, provenance-text screening, and branch-head stability all **PASS**.

`SOB012` is 1/10, so aggregate batch QA is not yet due. `SOB011` remains the latest completed aggregate batch and is **PASS**.

## Scientific/reproducibility note

`CR000118` is an official PINN implementation for Atlas 711. The pinned source includes a data-only baseline, a warm-start Navier-Stokes PINN, and a transfer-learning warm-start PINN for evolving stretched aneurysm geometries. The shared network predicts three velocity components and pressure and enforces three-dimensional momentum plus incompressibility residuals.

The default transfer-learning configuration is marked `conflicting_evidence`: it requests 31 temporal snapshots while the implemented candidate construction cannot generate 31 unique time indices under the default 29-interval setting.

R1 is conservative because dependencies are unpinned, Python and installation specifications are absent, the external data payload was not inspected, random seeds and hardware are unspecified, released checkpoints were not verified, and the default transfer-learning path has the source-level sampling defect.

## Continuation

Exact next resource: `CR000119`. Exact next checkpoint: `Stage3-S106`.
