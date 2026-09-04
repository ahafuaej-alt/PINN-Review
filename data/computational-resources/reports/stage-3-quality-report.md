# Computational Resources Stage 3 — Quality Report

Status date: 2026-09-04  
Acceptance checkpoint: Stage3-A01  
Pilot extraction checkpoint: Stage3-P07  
Latest scale-out checkpoint: Stage3-S060

## Current QA status

Status: **PASS**

Stage3-D01 remains accepted without schema modification. Static-only execution boundaries, Stage-2 authority, evidence-source semantics, missing-value semantics, identifier continuity, resource → experiment → configuration ontology, type-specific profiles, and the R0–R4 ceiling remain unchanged.

## Recent checkpoint continuity

- `Stage3-S058`: CR000067 AdaHessian supporting optimizer software, R2 — PASS.
- `Stage3-S059`: CR000068 GradientPathologiesPINNs PINN implementation, R1 — PASS.
- `Stage3-S060`: CR000069 maziarraissi/PINNs canonical PINN implementation, R1 — **PASS**.

## Stage3-S060 checkpoint

`CR000069` preserves the Stage-2 pilot repository identity `https://github.com/maziarraissi/PINNs`, pinned commit `932f50a2d8ef4e80d1456bbae6887a73ff5166ef`, MIT license, and four verified source-scoped Atlas relationships. The expansion B003 sequence legitimately skips CR000069 because it was one of the mandatory Stage-2 pilot resources.

### Scope classification

The resource is classified as a **PINN implementation**. The canonical repository explicitly distinguishes continuous-time and discrete-time algorithms for both PDE solution and PDE discovery. Four bounded workflows are materialized: nonlinear Schrodinger inference, Navier-Stokes parameter identification, KdV parameter identification, and Allen-Cahn inference. This breadth triggers the accepted single-resource checkpoint rule.

### Reproducibility

Static reproducibility is **R1**. The pinned source includes bundled MAT datasets, IRK weights, exact entrypoints, major architectures/hyperparameters, NumPy/TensorFlow seeds, evaluation logic, citation metadata, and MIT licensing. R2 is withheld because dependency versions, installation instructions, exact historical TensorFlow compatibility, and hardware provenance are not specified. The README states that the repository is no longer actively maintained; newer provider-linked implementations are not substituted for the pinned Stage-2 identity.

Checkpoint additions:

- resources: **1**
- experiments: **4**
- configurations: **4**
- technical-evidence records: **12**
- reproducibility assessments: **1**
- unresolved findings: **7**
- new explicit conflicts: **0**

No dependency installation, dataset download, model deserialization, training, evaluation, test or benchmark was performed.

## Aggregate batch state

Canonical aggregate QA remains PASS for **SOB001–SOB006**.

`SOB007` is in progress with **4 / 10** canonical members complete: CR000066, CR000067, CR000068, and CR000069. Aggregate SOB007 QA is not yet due.

## Current cumulative totals

After `Stage3-S060`: **74 resources, 132 experiments, 278 configurations, 988 technical-evidence records, 74 reproducibility assessments, 465 unresolved findings, 89 explicit conflicts**.

## Registry accounting

With 363 independently extractable technical identities and 74 completed Stage-3 technical records, **289** remain.

## Continuation QA

`Stage3-S060` is PASS. The exact next independently extractable resource is **`CR000070`**, to be processed as `Stage3-S061`.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. No scientific workload execution occurred. R5 remains prohibited.
