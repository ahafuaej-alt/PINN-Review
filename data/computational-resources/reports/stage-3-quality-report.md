# Computational Resources Stage 3 — Quality Report

Status date: 2026-09-04  
Acceptance checkpoint: Stage3-A01  
Pilot extraction checkpoint: Stage3-P07  
Latest scale-out checkpoint: Stage3-S066

## Current QA status

Status: **PASS**

Stage3-D01 remains accepted without schema modification. Static-only execution boundaries, Stage-2 authority, source-scope semantics, missing-value semantics, identifier continuity, resource → experiment → configuration ontology, type-specific profiles, and the R0–R4 ceiling remain unchanged.

## Stage3-S066 checkpoint

`CR000075` preserves final Stage-2 authority for `mosaic-group/inverse-dirichlet-pinn` at pinned commit `157a3ed4f401e6d94940872ac6e91fa95c0405d3`, no identified repository license, and verified official relationship `PRL000166` to Atlas paper 540.

The bounded extraction records two representative experiments: a Poisson PINN loss-weighting comparison and a square-domain active-turbulence forward PINN. Nine configurations preserve implemented weighting branches across gradient-standard-deviation/inverse-Dirichlet, max-to-mean, MGDA-style, vanilla, and analytical-optimal forms where applicable.

One explicit conflict is retained: the Poisson CLI method comment (`0 vanilla, 1 ann, 2 old ann, 3 max avg, 4 optimal`) does not agree with the actual method branches, where method 0 performs gradient-standard-deviation adaptive weighting, method 3 invokes MGDA-style combination, method 4 is vanilla, and method 5 is the analytical optimal branch.

Static reproducibility is **R1**. The repository documents dependencies but no versions or environment lock; no installation procedure, exact runtime/OS/CUDA/PyTorch specification, or hardware provenance is present. Active-turbulence training data is external and the code expects a `../data/...mat` layout absent from the pinned tree. Source seeds, architectures, optimizer schedules, and many hyperparameters are explicit.

Checkpoint additions: **1 resource, 2 experiments, 9 configurations, 12 technical-evidence records, 1 reproducibility assessment, 8 unresolved findings, 1 explicit conflict**.

No dependency installation, notebook execution, dataset download, model loading, training, inference, evaluation, test, benchmark, or external service was executed.

## Aggregate batch state

Canonical aggregate QA is **PASS for SOB001–SOB007**. `SOB007` is complete with CR000066–CR000075 and reconciled batch counts of **10 resources, 18 experiments, 29 configurations, 116 evidence records, 10 reproducibility assessments, 76 new unresolved findings, and 5 new explicit conflicts**.

`SOB008` has not started. Its exact first resource is `CR000076`.

## Current cumulative totals

After `Stage3-S066`: **80 resources, 141 experiments, 298 configurations, 1060 technical-evidence records, 80 reproducibility assessments, 513 unresolved findings, 94 explicit conflicts**.

## Registry accounting

With 363 independently extractable technical identities and 80 completed Stage-3 technical records, **283** remain.

## Continuation QA

`Stage3-S066` and aggregate `SOB007` QA are PASS. The exact next independently extractable resource is **`CR000076`**, to be processed as `Stage3-S067`.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. No scientific workload execution occurred. R5 remains prohibited.