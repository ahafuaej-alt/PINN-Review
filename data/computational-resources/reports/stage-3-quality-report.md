# Computational Resources Stage 3 — Quality Report

Status date: 2026-09-04  
Acceptance checkpoint: Stage3-A01  
Pilot extraction checkpoint: Stage3-P07  
Latest scale-out checkpoint: Stage3-S064

## Current QA status

Status: **PASS**

Stage3-D01 remains accepted without schema modification. Static-only execution boundaries, Stage-2 authority, evidence-source semantics, missing-value semantics, identifier continuity, resource → experiment → configuration ontology, type-specific profiles, and the R0–R4 ceiling remain unchanged.

## Recent checkpoint continuity

- `Stage3-S062`: CR000071 Dual-Cone-Gradient-Descent PINN implementation / PINN-optimization research code, R1 — PASS.
- `Stage3-S063`: CR000072 SGDR supporting optimizer software, R1 — PASS.
- `Stage3-S064`: CR000073 PINN-Preprocess PINN implementation, R1 — **PASS**.

## Stage3-S064 checkpoint

`CR000073` preserves final Stage-2 authority for `https://github.com/Shengfeng233/PINN-Preprocess`, pinned commit `ca2efdbe82792898ec7542c087a48c1df4a83609`, MIT license, and verified official relationship `PRL000162` to Atlas paper 533.

### Scope classification

The resource is classified as a **PINN implementation**. The pinned code implements preprocessing comparisons for 2D unsteady incompressible Navier–Stokes reconstruction with three modes: Baseline, InnerNorm, and Normalization. The README states broader PDE applicability, but Stage 3 does not promote that statement to implemented capability beyond the inspected Navier–Stokes source.

One bounded experiment represents the comparative workflow, with three configurations corresponding to the preprocessing modes. Four Reynolds-number flow cases remain parameterized within the experiment rather than being proliferated into separate records.

### Reproducibility

Static reproducibility is **R1**. Positive evidence includes the exact pinned source and MIT license, explicit training entrypoint, equations and residuals, network architecture, optimizer/scheduler, sweep grid, data-path mappings, checkpoint logic, and relative-L2 evaluation code.

R2 is withheld because no dependency/environment manifest or package-version pins are present, no installation procedure is documented, the MAT datasets are external, no explicit seed is set, exact hardware provenance is absent, W&B requires an external service/account, and no immutable pretrained checkpoints or archived run artifacts are bundled.

Checkpoint additions:

- resources: **1**
- experiments: **1**
- configurations: **3**
- technical-evidence records: **12**
- reproducibility assessments: **1**
- unresolved findings: **8**
- new explicit conflicts: **0**

No dependency installation, external dataset download, W&B execution, model loading, training, evaluation, test or benchmark was performed.

## Aggregate batch state

Canonical aggregate QA remains PASS for **SOB001–SOB006**.

`SOB007` is in progress with **8 / 10** canonical members complete: CR000066–CR000073. Aggregate SOB007 QA is not yet due.

## Current cumulative totals

After `Stage3-S064`: **78 resources, 138 experiments, 287 configurations, 1038 technical-evidence records, 78 reproducibility assessments, 498 unresolved findings, 93 explicit conflicts**.

## Registry accounting

With 363 independently extractable technical identities and 78 completed Stage-3 technical records, **285** remain.

## Continuation QA

`Stage3-S064` is PASS. The exact next independently extractable resource is **`CR000074`**, to be processed as `Stage3-S065`.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. No scientific workload execution occurred. R5 remains prohibited.
