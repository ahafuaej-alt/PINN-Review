# Computational Resources Stage 3 — Quality Report

Status date: 2026-09-04  
Acceptance checkpoint: Stage3-A01  
Pilot extraction checkpoint: Stage3-P07  
Latest scale-out checkpoint: Stage3-S061

## Current QA status

Status: **PASS**

Stage3-D01 remains accepted without schema modification. Static-only execution boundaries, Stage-2 authority, evidence-source semantics, missing-value semantics, identifier continuity, resource → experiment → configuration ontology, type-specific profiles, and the R0–R4 ceiling remain unchanged.

## Recent checkpoint continuity

- `Stage3-S059`: CR000068 GradientPathologiesPINNs PINN implementation, R1 — PASS.
- `Stage3-S060`: CR000069 maziarraissi/PINNs canonical PINN implementation, R1 — PASS.
- `Stage3-S061`: CR000070 PINN-for-NS-equation PINN implementation, R1 — **PASS**.

## Stage3-S061 checkpoint

`CR000070` preserves final Stage-2 authority for `https://github.com/Shengfeng233/PINN-for-NS-equation`, pinned commit `961d1e23a1a41ec1d7072c81a4ee9d43444e125e`, no identified repository license, and verified official relationship `PRL000159` to Atlas paper 526.

### Scope classification

The resource is classified as a **PINN implementation**. One bounded workflow represents sparse-data reconstruction of two-dimensional unsteady incompressible flow past a circular cylinder at `Re=3900` from 36 measurement points. The code explicitly predicts `u`, `v`, and `p`, enforces continuity and two momentum residuals through PyTorch automatic differentiation, and supports input normalization.

`CR000071` was bounded-preinspected solely to decide checkpoint pairing. Its pinned repository contains several PDE families plus CausalPINNs, SPINN, PINNsformer and multiple DCGD optimizer variants. Pairing would make the checkpoint harder to audit, so the accepted single-resource complexity rule is applied and CR000071 is deferred to S062.

### Reproducibility

Static reproducibility is **R1**. The pinned source exposes architecture, physics residuals, major training hyperparameters, sparse bundled training data, Latin-hypercube sampling, relative-L2 evaluation code, a pretrained state-dict artifact, and comparison outputs. R2 is withheld because dependency versions and installation are unspecified, no seed or exact hardware provenance is provided, no repository license is identified, and the configured full validation MAT file is external rather than bundled.

Checkpoint additions:

- resources: **1**
- experiments: **1**
- configurations: **1**
- technical-evidence records: **10**
- reproducibility assessments: **1**
- unresolved findings: **8**
- new explicit conflicts: **0**

No dependency installation, external dataset download, model deserialization, training, evaluation, test or benchmark was performed.

## Aggregate batch state

Canonical aggregate QA remains PASS for **SOB001–SOB006**.

`SOB007` is in progress with **5 / 10** canonical members complete: CR000066, CR000067, CR000068, CR000069, and CR000070. Aggregate SOB007 QA is not yet due.

## Current cumulative totals

After `Stage3-S061`: **75 resources, 133 experiments, 279 configurations, 998 technical-evidence records, 75 reproducibility assessments, 473 unresolved findings, 89 explicit conflicts**.

## Registry accounting

With 363 independently extractable technical identities and 75 completed Stage-3 technical records, **288** remain.

## Continuation QA

`Stage3-S061` is PASS. The exact next independently extractable resource is **`CR000071`**, to be processed as `Stage3-S062`.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. No scientific workload execution occurred. R5 remains prohibited.
