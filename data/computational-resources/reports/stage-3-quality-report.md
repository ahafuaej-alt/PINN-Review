# Computational Resources Stage 3 — Quality Report

Status date: 2026-09-04  
Acceptance checkpoint: Stage3-A01  
Pilot extraction checkpoint: Stage3-P07  
Latest scale-out checkpoint: Stage3-S065

## Current QA status

Status: **PASS**

Stage3-D01 remains accepted without schema modification. Static-only execution boundaries, Stage-2 authority, evidence-source semantics, missing-value semantics, identifier continuity, resource → experiment → configuration ontology, type-specific profiles, and the R0–R4 ceiling remain unchanged.

## Recent checkpoint continuity

- `Stage3-S063`: CR000072 SGDR supporting optimizer software, R1 — PASS.
- `Stage3-S064`: CR000073 PINN-Preprocess PINN implementation, R1 — PASS.
- `Stage3-S065`: CR000074 hamiltorch supporting probabilistic-inference software, R1 — **PASS**.

## Stage3-S065 checkpoint

`CR000074` preserves final Stage-2 authority for `https://github.com/AdamCobb/hamiltorch`, pinned commit `19b627b2aabc77c1b4b78db0f860372eb1bf9778`, BSD-2-Clause license, and `PRL000163` to Atlas paper 536 as `not_verified` with manual review required.

### Scope classification

The resource is classified as **supporting probabilistic-inference software**, not a PINN implementation. The pinned library exposes HMC, HMC_NUTS and RMHMC sampler surfaces, explicit/implicit/splitting integrators, and Hessian/SoftAbs/Jacobian-diagonal metric choices. No PINN or PDE implementation semantics are inferred from the paper context.

One bounded experiment represents the multiple-chain synthetic Gaussian HMC tutorial, with parallel and serial configurations. The target is a three-dimensional diagonal Gaussian; the notebook specifies 400 samples, step size 0.3, five integration steps per sample, four workers and seeds 0–7.

### Relationship handling

The Stage-2 relationship to Atlas paper 536 remains **not verified**. The paper cites Adam D. Cobb's HMC work but does not identify hamiltorch or the corrected repository URL. Stage 3 preserves that state exactly and does not use the relationship as provenance for implemented library capabilities.

### Reproducibility

Static reproducibility is **R1**. Positive evidence includes the exact pinned source and BSD license, package version 0.4.1, README installation command, `setup.py` requirements, notebook Python 3.8.8 metadata, a self-contained synthetic target, explicit HMC parameters and worker seeds, and archived serial/parallel outputs.

R2 is withheld because only PyTorch has a lower-bound version constraint, other dependencies are unpinned, there is no exact environment lock, the README installation command targets the mutable repository default, exact operating-system/runtime details are absent, and hardware provenance is limited to a narrative Mac note. Archived timing outputs are machine-specific observations and were not reproduced.

Checkpoint additions:

- resources: **1**
- experiments: **1**
- configurations: **2**
- technical-evidence records: **10**
- reproducibility assessments: **1**
- unresolved findings: **7**
- new explicit conflicts: **0**

No dependency installation, notebook execution, sampling, model loading, dataset download, training, inference, evaluation, test or benchmark was performed.

## Aggregate batch state

Canonical aggregate QA remains PASS for **SOB001–SOB006**.

`SOB007` is in progress with **9 / 10** canonical members complete: CR000066–CR000074. Aggregate SOB007 QA is not yet due.

## Current cumulative totals

After `Stage3-S065`: **79 resources, 139 experiments, 289 configurations, 1048 technical-evidence records, 79 reproducibility assessments, 505 unresolved findings, 93 explicit conflicts**.

## Registry accounting

With 363 independently extractable technical identities and 79 completed Stage-3 technical records, **284** remain.

## Continuation QA

`Stage3-S065` is PASS. The exact next independently extractable resource is **`CR000075`**, to be processed as `Stage3-S066`.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. No scientific workload execution occurred. R5 remains prohibited.
