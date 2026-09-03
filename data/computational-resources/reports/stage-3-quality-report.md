# Computational Resources Stage 3 — Quality Report

Status date: 2026-09-03  
Acceptance checkpoint: Stage3-A01  
Pilot extraction checkpoint: Stage3-P07  
Latest scale-out checkpoint: Stage3-S056

## Current QA status

Status: **PASS**

Stage3-D01 remains accepted without schema modification. The static-only boundary, Stage-2 authority, missing-value semantics, evidence-source semantics, identifier rules, resource → experiment → configuration ontology, type-specific profiles, and R0–R4 reproducibility ceiling remain unchanged.

The detailed quality report through `Stage3-S047` is preserved verbatim in `reports/stage-3-quality-report-through-s047.md`. Per-checkpoint machine-readable QA remains authoritative in `03-technical/batch-qa/scaleout-checkpoint-###-qa.json`; completed normal batches additionally require `scaleout-batch-###-aggregate-qa.json`.

## Recent checkpoint continuity

- `Stage3-S048`: corrective CR000049 recovery and canonical batch reconciliation — PASS.
- `Stage3-S049`: CR000057 PyDEns framework, resource-only, R2 — PASS.
- `Stage3-S050`: CR000058 hp-VPINNs, four experiments/four configurations, R2 — PASS.
- `Stage3-S051`: CR000060 Pair-wise Interaction Neural Network library, resource-only, R2 — PASS.
- `Stage3-S052`: CR000061 SciANN applications collection, one paper-scoped experiment/four configurations, R1 — PASS.
- `Stage3-S053`: CR000062 SciANN core framework, resource-only, R2 — PASS.
- `Stage3-S054`: CR000063 Elvet framework, resource-only, R2 — PASS.
- `Stage3-S055`: CR000064 PhyGeoNet implementation, five experiments/five configurations, R2 — PASS.
- `Stage3-S056`: CR000065 PN-Net non-PINN research code, one experiment/two configurations, R1 — **PASS**.

Historical S050/S051 pre-QA control deviations remain preserved without rewriting history. S052–S056 follow the normal one-post-QA-commit checkpoint policy.

## Stage3-S056 checkpoint

`CR000065` preserves the final Stage-2 identity `https://github.com/vbalnt/pnnet`, pinned commit `907364ceb2d95d73c64a3ab5c26915664095690f`, and `PRL000154` as the official relationship to Atlas paper 515, *PN-Net: Conjoined Triple Deep Network for Learning Local Image Descriptors*.

### Scope classification

The pinned source and paper establish a computer-vision patch-descriptor method, not a Physics-Informed Neural Network. Stage 3 therefore uses the accepted **`non_pinn_research_code`** profile and does not manufacture PINN-specific physics, PDE, residual or scientific-computing fields.

### Ontology

One stable experiment is materialized:

- **CR000065-E001 — PN-Net local image descriptor learning and benchmark evaluation.**

Two materially distinct configurations are retained:

1. **CR000065-E001-C001 — bundled Liberty 128-D model evaluation on Notre Dame 100k pairs.** The README documents a 128-D branch architecture and `eval.lua` allocates 128-D descriptors, loads `pnnet-liberty.t7` plus `stats-liberty.t7`, normalizes external `notredame.t7`, evaluates 100,000 ground-truth pairs on CUDA, and prints labels with L2 descriptor distances.
2. **CR000065-E001-C002 — active Notre Dame 256-D triplet training.** `train/run.lua` builds three parameter-sharing Torch7/cuDNN branches ending in `Linear(4096,256)`, generates 1,280,000 triplets, and trains with SGD for 1000 epochs at batch size 128, learning rate 0.1, momentum 0.9, weight decay 1e-4 and learning-rate decay 1e-6.

The custom `DistanceRatioCriterion` applies SoftMax followed by MSE to the pair `[minimum negative distance, positive distance]`. Triplets are generated randomly from class labels after global mean/std normalization. No explicit random seed is observed in the inspected training/sampling source.

### Preserved conflict

One new explicit conflict is retained:

- the primary paper reports a **128-dimensional** feature;
- `readme.org` documents `Linear(4096,128)`;
- `eval.lua` uses a 128-dimensional output tensor;
- the active `train/run.lua` constructs `Linear(4096,256)`.

These values are source-scoped. The 128-D evaluation and 256-D training paths remain separate configurations; no synthetic canonical descriptor dimension is inferred.

### Data, environment and artifacts

The pinned tree contains pretrained Liberty model/statistics artifacts but no PhotoTour `.t7` dataset payloads. README directs dataset acquisition to the separate `vbalnt/UBC-Phototour-Patches-Torch` repository.

No repository license, dependency/environment manifest, exact Torch7/CUDA/cuDNN compatibility matrix, or dependency-installation workflow is identified. README supplies `th eval.lua` / `th run.lua` usage commands and reports GTX TITAN X timing, but that is insufficient for the R2 environment/setup gate.

### Reproducibility

Static reproducibility is **R1**. Pinned source, official paper relationship, entrypoints, preprocessing, architecture, training/evaluation behavior, hyperparameters and pretrained artifacts are recoverable.

R2 is withheld because:

- repository licensing is unavailable;
- no dependency/environment manifest is present;
- exact Torch7/CUDA/cuDNN versions are unpinned;
- no installation/environment-creation workflow is documented;
- PhotoTour data are external;
- 128-D and 256-D architecture surfaces conflict;
- training random seed is unreported;
- pretrained model payloads were not deserialized and their exact run/environment provenance is incomplete.

Checkpoint additions:

- resources: **1**
- experiments: **1**
- configurations: **2**
- technical-evidence records: **13**
- reproducibility assessments: **1**
- unresolved findings: **10**
- new explicit conflicts: **1**

No dependency installation, dataset download, model deserialization, training, evaluation, ROC postprocessing or benchmark was performed.

## Aggregate batch state

Canonical aggregate QA is complete and passing for **`SOB001`–`SOB006`**.

### SOB006 — PASS

Canonical resources:

- `CR000054` — Stage3-S046
- `CR000055` — Stage3-S047
- `CR000057` — Stage3-S049
- `CR000058` — Stage3-S050
- `CR000060` — Stage3-S051
- `CR000061` — Stage3-S052
- `CR000062` — Stage3-S053
- `CR000063` — Stage3-S054
- `CR000064` — Stage3-S055
- `CR000065` — Stage3-S056

`CR000056` and `CR000059` are pilot-complete and are not reprocessed.

Aggregate counts:

- resources: **10**
- experiments: **16**
- configurations: **21**
- technical-evidence records: **144**
- reproducibility assessments: **10**
- new unresolved findings: **87**
- new explicit conflicts: **10**

The aggregate QA reconciles historical S046/S047 batch-label drift and preserves the documented S050/S051 control deviations without modifying historical checkpoint records.

## Current cumulative totals

After `Stage3-S056`:

- technical resource records: **70**
- experiments: **123**
- configurations: **269**
- technical-evidence records: **944**
- static reproducibility assessments: **70**
- unresolved findings: **437**
- explicit conflicting-evidence findings: **89**

## Registry accounting

The Stage-2 closure registry contains 364 entries. `CR000021` remains provenance for a non-independent identity canonically resolved to `CR000184`, leaving 363 independently extractable technical identities. With 70 completed Stage-3 resource records, **293** remain.

## Continuation QA

`SOB006` is closed and PASS. The forward frontier is `CR000065`. The exact next independently extractable resource is **`CR000066`**, to be processed as `Stage3-S057`, the first canonical member of `SOB007`.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. No scientific workload execution occurred. R5 remains prohibited.
