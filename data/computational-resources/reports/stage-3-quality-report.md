# Computational Resources Stage 3 — Quality Report

Status date: 2026-09-04  
Acceptance checkpoint: Stage3-A01  
Pilot extraction checkpoint: Stage3-P07  
Latest scale-out checkpoint: Stage3-S059

## Current QA status

Status: **PASS**

Stage3-D01 remains accepted without schema modification. Static-only execution boundaries, Stage-2 authority, evidence-source semantics, missing-value semantics, identifier continuity, resource → experiment → configuration ontology, type-specific profiles, and the R0–R4 ceiling remain unchanged.

## Recent checkpoint continuity

- `Stage3-S057`: CR000066 locally adaptive activation-functions mixed resource, R1 — PASS.
- `Stage3-S058`: CR000067 AdaHessian supporting optimizer software, R2 — PASS.
- `Stage3-S059`: CR000068 GradientPathologiesPINNs PINN implementation, R1 — **PASS**.

## Stage3-S059 checkpoint

`CR000068` preserves the final Stage-2 repository identity `https://github.com/PredictiveIntelligenceLab/GradientPathologiesPINNs`, pinned commit `93e752b0e3b541818d5cca49b681f4957bc36808`, and `PRL000157` official relationship to Atlas paper 525, *Understanding and Mitigating Gradient Flow Pathologies in Physics-Informed Neural Networks*.

### Scope classification

The resource is classified as a **PINN implementation**. The pinned repository has three distinct PDE workflow families—Helmholtz, nonlinear Klein–Gordon, and lid-driven-cavity Navier–Stokes—plus shared gradient-statistics adaptive weighting and modified network modes. This breadth triggers the accepted single-resource checkpoint rule.

### Ontology

Three experiments and three active M1 configurations are materialized:

- `CR000068-E001`: 2D Helmholtz, layers `[2,50,50,50,1]`, 40,001 iterations, batch 128.
- `CR000068-E002`: nonlinear Klein–Gordon, layers `[2,50,50,50,50,50,1]`, 40,001 iterations, batch 128.
- `CR000068-E003`: Re=100 lid-driven cavity Navier–Stokes, layers `[2,50,50,50,2]`, 40,001 iterations, batch 128, using bundled velocity reference CSVs.

The shared Helmholtz model implementation exposes Adam with initial learning rate `1e-3`, exponential decay, gradient-statistics adaptive boundary weighting, and M1–M4 architecture modes; M3/M4 use two learned encoder transforms in the forward pass.

### Reproducibility

Static reproducibility is **R1**. The pinned source clearly specifies equations, entrypoints, architectures, major training hyperparameters, evaluation metrics, and reference CSV use. R2 is withheld because no dependency/environment manifest, pinned package versions, installation instructions, explicit seed, hardware specification, or repository license is present in the inspected snapshot.

Checkpoint additions:

- resources: **1**
- experiments: **3**
- configurations: **3**
- technical-evidence records: **12**
- reproducibility assessments: **1**
- unresolved findings: **7**
- new explicit conflicts: **0**

No dependency installation, dataset download, model deserialization, training, evaluation, test or benchmark was performed.

## Aggregate batch state

Canonical aggregate QA remains PASS for **SOB001–SOB006**.

`SOB007` is in progress with **3 / 10** canonical members complete: CR000066, CR000067, and CR000068. Aggregate SOB007 QA is not yet due.

## Current cumulative totals

After `Stage3-S059`: **73 resources, 128 experiments, 274 configurations, 976 technical-evidence records, 73 reproducibility assessments, 458 unresolved findings, 89 explicit conflicts**.

## Registry accounting

With 363 independently extractable technical identities and 73 completed Stage-3 technical records, **290** remain.

## Continuation QA

`Stage3-S059` is PASS. The exact next independently extractable resource is **`CR000069`**, to be processed as `Stage3-S060`.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. No scientific workload execution occurred. R5 remains prohibited.
