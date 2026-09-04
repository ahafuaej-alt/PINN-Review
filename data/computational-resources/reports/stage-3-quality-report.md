# Computational Resources Stage 3 — Quality Report

Status date: 2026-09-04  
Acceptance checkpoint: Stage3-A01  
Pilot extraction checkpoint: Stage3-P07  
Latest scale-out checkpoint: Stage3-S069

## Current QA status

Status: **PASS**

Stage3-D01 remains accepted without schema modification. Static-only execution boundaries, Stage-2 authority, source-scope semantics, missing-value semantics, identifier continuity, resource → experiment → configuration ontology, type-specific profiles, and the R0–R4 ceiling remain unchanged.

## Stage3-S069 checkpoint

`CR000079` preserves final Stage-2 identity for `romiele/W-NetGAN` at pinned commit `48e692a835d16385aac8122ac756828ae11730f5`, with verified official relationship `PRL000173` to Atlas paper 568. Repository license remains unknown.

Material complexity is established by two distinct inversion entrypoints (synthetic and Norne), custom W-NetGAN/forward-model modules, bundled data/simulator artifacts, and an optional DSS executable path. The accepted single-resource complexity rule therefore applies. Bounded extraction records **2 experiments and 2 configurations**.

The synthetic workflow defaults to 501 epochs, batch size 128, Adam at 1e-3, StepLR decay 0.5 every 20 epochs, 16 simulations, a 100×1×80 grid, and no content-loss term. The Norne workflow defaults to the same epoch/batch/learning-rate baseline, StepLR every 50 epochs, content-loss weight 1, 16 simulations, and a 109×79×75 grid. Both entrypoints use a host-specific `D:/` root. The GAN architecture uses transposed-convolutional generators and a three-stream discriminator over facies, seismic, and joint facies-seismic representations.

One explicit source-scope conflict is preserved: Stage 2 states `no_bundled_research_dataset_identified`, while the pinned tree includes `Dataset_norne` data and simulator-output artifacts. This does not alter Stage-2 authority.

Static reproducibility is **R1**. Source, entrypoints, architecture, data artifacts, training logic, hyperparameters and evaluation code are available, but exact dependency versions, installation procedure, explicit random seeds, hardware/runtime provenance, portable path configuration, and executable/simulator reconstruction are not pinned.

Checkpoint additions: **1 resource, 2 experiments, 2 configurations, 12 technical-evidence records, 1 reproducibility assessment, 9 unresolved findings, 1 explicit conflict**.

No dependency installation, simulator execution, dataset generation, model loading, training, inference, evaluation, test, benchmark, container, accelerator workload, or external service was executed.

## Aggregate batch state

Canonical aggregate QA is **PASS for SOB001–SOB007**. `SOB008` is in progress at **4 / 10** with `CR000076`–`CR000079` complete. Aggregate SOB008 QA is not yet due.

## Current cumulative totals

After `Stage3-S069`: **84 resources, 145 experiments, 302 configurations, 1096 technical-evidence records, 84 reproducibility assessments, 540 unresolved findings, 96 explicit conflicts**.

## Registry accounting

With 363 independently extractable technical identities and 84 completed Stage-3 technical records, **279** remain.

## Continuation QA

`Stage3-S069` QA is PASS. The latest applicable aggregate QA remains `SOB007` PASS. The exact next independently extractable resource is **`CR000080`**, to be processed as `Stage3-S070`.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. No scientific workload execution occurred. R5 remains prohibited.
