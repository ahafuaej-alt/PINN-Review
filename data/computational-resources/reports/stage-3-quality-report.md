# Computational Resources Stage 3 Quality Report

Date: 2026-09-07  
Branch: `data/computational-resources-stage3`

## Latest checkpoint

- Checkpoint: `Stage3-S103`
- Batch: `SOB011` — **9/10 complete**
- Resource: `CR000116`
- Checkpoint status: **PASS**
- Latest aggregate batch QA: `SOB010` — **PASS**

## S103 checkpoint counts

- Resources: **1**
- Experiments: **0**
- Configurations: **0**
- Technical-evidence records: **8**
- Reproducibility assessments: **1**
- New unresolved findings: **6**
- New explicit conflicts: **0**

## Cumulative counts through S103

- Resources: **119**
- Experiments: **206**
- Configurations: **402**
- Technical-evidence records: **1414**
- Reproducibility assessments: **119**
- Unresolved findings: **761**
- Explicit conflicts: **103**
- Independently extractable resources remaining: **244**

## QA gates

Schema validation, cumulative ID uniqueness, evidence-reference integrity, resource→experiment→configuration cross-references, inference labeling, reproducibility classification, R5 exclusion, repository-scope safety, Stage-1/Stage-2/public-Atlas/curated/schema write boundaries, execution boundary, provenance-text screening, and branch-head stability all **PASS** for S103.

`SOB011` is 9/10; aggregate SOB011 QA is not yet due. Latest completed aggregate remains SOB010 — **PASS**.

## Scientific/reproducibility note

`CR000116` is a DOI-hosted software artifact containing the code supporting the physics-informed airfoil surrogate and PDE-constrained optimization study linked to Atlas 697. Provider metadata identifies one Python file under CC BY 4.0. The paper documents steady incompressible Navier-Stokes enforcement, adaptive collocation sampling, Adam network training, L-BFGS design optimization, a single-parameter angle-of-attack example, and an eleven-parameter PARSEC geometry example.

R1 is conservative because the source-file payload, reconstructable environment, dependency pins, installation procedure, seed provenance, and source-to-paper parameter correspondence were not directly verified. No source-internal experiment/configuration records were manufactured.

## Continuation

Exact next resource: `CR000117`. Exact next checkpoint: `Stage3-S104`. Because CR000117 completes SOB011 at 10/10, S104 must also complete the required SOB011 aggregate batch QA before advancement.
