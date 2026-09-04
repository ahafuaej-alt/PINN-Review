# Computational Resources Stage 3 — Quality Report

Status date: 2026-09-04  
Acceptance checkpoint: Stage3-A01  
Pilot extraction checkpoint: Stage3-P07  
Latest scale-out checkpoint: Stage3-S070

## Current QA status

Status: **PASS**

Stage3-D01 remains accepted without schema modification. Static-only execution boundaries, Stage-2 authority, source-scope semantics, missing-value semantics, identifier continuity, resource → experiment → configuration ontology, type-specific profiles, and the R0–R4 ceiling remain unchanged.

## Stage3-S070 checkpoint

`CR000080` preserves final Stage-2 identity for `qsxiong/ssm_cnn` at pinned commit `34edcc0e0f35607facd30d26b77d1e21ac147039`, with verified official relationship `PRL000174` to Atlas paper 569. Repository license remains unknown.

Material complexity is established by a 3,787,749-byte notebook containing a numerical MSDS study and a separate five-story-library experimental-validation study, with conventional CNN and physics-informed SSM-CNN variants in each. The accepted single-resource complexity rule therefore applies. Bounded extraction records **2 experiments and 4 configurations**.

The numerical workflow uses a 25% test split with `random_state=0`, 200 epochs, batch size 20, Adam at 1e-3 and patience 50. The experimental workflow uses a 20% validation split with `random_state=0`, 500 epochs, batch size 20, Adam at 1e-3 and patience 400. Baseline variants use MSE; physics-informed variants use a custom loss incorporating extended-state-space kinematic consistency through velocity/displacement reconstruction from predicted acceleration.

The repository contains only README.md and the notebook; required research data are external, and the experimental section hard-codes `D:/research work/Pyhsical SSM-CNN/data/`. These are represented as explicit reproducibility limitations, not silently normalized.

Static reproducibility is **R1**. Source, architectures, training logic, split seeds and key hyperparameters are available, but exact dependency versions, installation procedure, external datasets, complete model-training seed control, hardware/runtime provenance and pretrained checkpoints are not pinned.

Checkpoint additions: **1 resource, 2 experiments, 4 configurations, 12 technical-evidence records, 1 reproducibility assessment, 9 unresolved findings, 0 explicit conflicts**.

No notebook cell, dependency installation, dataset loading, model loading, training, inference, evaluation, test, benchmark, container, accelerator workload, or external service was executed.

## Aggregate batch state

Canonical aggregate QA is **PASS for SOB001–SOB007**. `SOB008` is in progress at **5 / 10** with `CR000076`–`CR000080` complete. Aggregate SOB008 QA is not yet due.

## Current cumulative totals

After `Stage3-S070`: **85 resources, 147 experiments, 306 configurations, 1108 technical-evidence records, 85 reproducibility assessments, 549 unresolved findings, 96 explicit conflicts**.

## Registry accounting

With 363 independently extractable technical identities and 85 completed Stage-3 technical records, **278** remain.

## Continuation QA

`Stage3-S070` QA is PASS. The latest applicable aggregate QA remains `SOB007` PASS. The exact next independently extractable resource is **`CR000081`**, to be processed as `Stage3-S071`.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. No scientific workload execution occurred. R5 remains prohibited.
