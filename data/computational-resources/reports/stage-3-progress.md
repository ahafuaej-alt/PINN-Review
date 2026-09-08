# Computational Resources Stage 3 Progress

Date: 2026-09-08
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S139`
- Latest completed resource: `CR000156`
- Latest completed aggregate batch: `SOB014` — **PASS (10/10)**
- Current batch: `SOB015` — **9/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000157`
- Exact next checkpoint: `Stage3-S140`

## Cumulative counts through S139

- Resources: **159**
- Experiments: **247**
- Configurations: **446**
- Technical-evidence records: **1784**
- Reproducibility assessments: **159**
- Unresolved findings: **1003**
- Explicit conflicts: **117**
- Independently extractable resources remaining: **204**

## S139

CR000156 preserves the Stage-2-authoritative move from `tianjuxue/jax-am` to `CMSL-HKUST/jax-am`, pinned SHA `b4ee1363cde4ce98a1532c5d255015014a6f74d7`, GPL-3.0 license and official Atlas-832 relationship. JAX-AM is a differentiable additive-manufacturing simulation toolbox spanning DEM, LBM, CFD, PFM and FEM, not a PINN implementation. Bounded static extraction maps one retained 3D linear-elasticity FEM demo. Unpinned runtime dependencies, petsc4py platform sensitivity, the FEM maintenance move to JAX-FEM and absence of a bounded numerical reference threshold limit static reproducibility to **R2**.

No scientific workload was executed.

## Reconciled baseline

Stage3-RC02 remains authoritative for repaired pre-S123 metadata/reproducibility records. Stage3-RC03 remains authoritative for repaired S129/S132 enum labels. Accepted methodology and schemas are unchanged.

## Continuation

Continue with `Stage3-S140` at `CR000157` after published-head and checkpoint-QA readback.
