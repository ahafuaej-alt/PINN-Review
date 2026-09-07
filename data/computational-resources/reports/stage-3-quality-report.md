# Computational Resources Stage 3 Quality Report

Date: 2026-09-07  
Branch: `data/computational-resources-stage3`

## Latest checkpoint and aggregate batch

- Checkpoint: `Stage3-S104`
- Resource: `CR000117`
- Checkpoint status: **PASS**
- Completed batch: `SOB011` — **PASS (10/10)**
- Next batch: `SOB012` — **0/10**

## S104 checkpoint counts

- Resources: **1**
- Experiments: **0**
- Configurations: **0**
- Technical-evidence records: **8**
- Reproducibility assessments: **1**
- New unresolved findings: **6**
- New explicit conflicts: **0**

## SOB011 aggregate counts

- Resources: **10**
- Experiments: **5**
- Configurations: **10**
- Technical-evidence records: **80**
- Reproducibility assessments: **10**
- New unresolved findings: **58**
- New explicit conflicts: **2**

## Cumulative counts through S104

- Resources: **120**
- Experiments: **206**
- Configurations: **402**
- Technical-evidence records: **1422**
- Reproducibility assessments: **120**
- Unresolved findings: **767**
- Explicit conflicts: **103**
- Independently extractable resources remaining: **243**

## QA gates

S104 checkpoint schema validation, cumulative ID uniqueness, evidence-reference integrity, resource→experiment→configuration cross-references, inference labeling, reproducibility classification, R5 exclusion, repository-scope safety, Stage-1/Stage-2/public-Atlas/curated/schema write boundaries, execution boundary, provenance-text screening, and branch-head stability all **PASS**.

SOB011 aggregate planned-resource completion, canonical membership, cumulative-count reconciliation, cross-corpus ID/reference checks, source-scope sample, missing-value semantics, methodology/schema drift, stage boundary, execution boundary, and provenance screening all **PASS**.

## Scientific/reproducibility note

`CR000117` is supplementary code for the Atlas-701 study on physics-informed power-grid frequency modeling. The paper combines a stochastic differential equation with a neural network that predicts time-varying system parameters from external drivers. This role is retained as `mixed_other`, rather than being collapsed into a PDE-residual PINN implementation.

R1 is conservative because DOI identity, paper relationship and scientific workflow are established, while archive-internal files, software environment, installation, dependency pins, entry point, seeds, trained artifacts and exact source-to-paper execution mapping remain incomplete.

## Continuation

Exact next resource: `CR000118`. Exact next checkpoint: `Stage3-S105`. `SOB012` begins there.
