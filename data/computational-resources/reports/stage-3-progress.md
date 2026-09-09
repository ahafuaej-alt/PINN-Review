# Computational Resources Stage 3 Progress

Date: 2026-09-09
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S167`
- Latest completed resource: `CR000187`
- Latest completed aggregate batch: `SOB017` — **PASS (10/10)**
- Current batch: `SOB018` — **9/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000188`
- Exact next checkpoint: `Stage3-S168`

## Cumulative counts through S167

- Resources: **189**
- Experiments: **275**
- Configurations: **490**
- Technical-evidence records: **2078**
- Reproducibility assessments: **189**
- Unresolved findings: **1158**
- Explicit conflicts: **126**
- Independently extractable resources remaining: **174**

## S167

CR000187 preserves the Stage-2-authoritative `ms140429/PIML_Converter` repository at pinned SHA `90ac1bfe954b93dfce9f27d1de5ae912d9a66682`, its MIT license, paper DOI and no-Atlas-relationship boundary. It is a PINN/PIML implementation for estimating ten DC-DC buck-converter parameters.

Bounded static extraction maps one seven-case experiment, seven dataset-linked configurations, the five-input/tanh/implicit-Runge-Kutta architecture, fixed NumPy and TensorFlow seeds, Adam plus L-BFGS-B training controls, MATLAB data generation and reported per-case errors. The static level is **R1**: the accepted hierarchical model blocks R2 and higher because no installation workflow or substantially specified environment exists. The unused declared Adam learning rate, unproven result provenance and unexecuted workload add further limits. Documentation's “six files” statement conflicts with the seven named and bundled datasets and is retained explicitly. SOB018 advances to 9/10.

No scientific workload was executed.

## Reconciled baseline

Stage3-RC02 remains authoritative for repaired pre-S123 metadata/reproducibility records. Stage3-RC03 remains authoritative for repaired S129/S132 enum labels. Accepted methodology and schemas are unchanged.

## Continuation

Continue with `Stage3-S168` at `CR000188` after published-head and checkpoint-QA readback.
