# Computational Resources Stage 3 Progress

Date: 2026-09-09
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S165`
- Latest completed resources: `CR000184`, `CR000185`
- Latest completed aggregate batch: `SOB017` — **PASS (10/10)**
- Current batch: `SOB018` — **7/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000186`
- Exact next checkpoint: `Stage3-S166`

## Cumulative counts through S165

- Resources: **187**
- Experiments: **273**
- Configurations: **482**
- Technical-evidence records: **2057**
- Reproducibility assessments: **187**
- Unresolved findings: **1148**
- Explicit conflicts: **124**
- Independently extractable resources remaining: **176**

## S165

CR000184 is the Stage-2-authoritative canonical Delta-PINNs implementation for the broken-owner alias CR000021 and official resource for Atlas paper 312. Two notebook experiments map coil-surface Eikonal and heat-transfer workflows using Laplace-Beltrami eigenfunction positional encoding. Pinned source, seeds, data and training controls are present, but no license, dependency manifest, installation procedure or tests are available, limiting the static assessment to **R1**.

CR000185 retains the Google Research monorepo authority at pinned SHA `041338718b4e8151372fd63677104c65b73a0a4e`. The original resource link identifies `jax_dft`; one non-interacting one-dimensional H2 calculation, differentiable Kohn-Sham source, local requirements, runner, tests and bundled project artifacts are mapped at **R3**. Root source/data licensing remains distinct.

QA corrected an initial eligibility assumption before publication: CR000184 was complete in Stage 2, not Stage 3, and therefore is included in this two-resource checkpoint. SOB018 advances from 5/10 to 7/10.

No scientific workload was executed.

## Reconciled baseline

Stage3-RC02 remains authoritative for repaired pre-S123 metadata/reproducibility records. Stage3-RC03 remains authoritative for repaired S129/S132 enum labels. Accepted methodology and schemas are unchanged.

## Continuation

Continue with `Stage3-S166` at `CR000186` after published-head and checkpoint-QA readback.
