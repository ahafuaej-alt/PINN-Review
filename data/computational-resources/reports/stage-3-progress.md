# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S269`
- Latest completed resource: `CR000318`
- Latest completed aggregate batch: `SOB030` - **PASS (10/10)**
- Current batch: `SOB031` - **5/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000319`
- Exact next checkpoint: `Stage3-S270`

## Cumulative counts through S269 / RC09

- Resources: **315**
- Experiments: **353**
- Configurations: **628**
- Technical-evidence records: **3069**
- Reproducibility assessments: **315**
- Unresolved findings: **1520**
- Explicit conflicts: **155**
- Independently extractable resources remaining: **48**

## S269

`CR000318` preserves the exact DTU DOI `10.11583/DTU.12245978` and verified `PRL000182` relationship for Atlas paper 590. The deposit is documented as a HAWC2 simulation database containing the turbine model, HAWC2 input files and post-processed simulation results. The primary paper documents a 30,000-point Monte Carlo source database simulated in HAWC2 under normal operating conditions, with wind speed, wind-speed standard deviation, row spacing, wake incidence angle and number of disturbing turbines as selected model inputs and electrical power as output. It further documents Mann-turbulence/DWM simulation context, post-processing to 10-minute statistics, and simulation-domain pre-training followed by SCADA recalibration through transfer learning for feed-forward ANN and autoencoder normal-behavior models. Exact DTU deposit file/case mapping, deposited post-processed file schema/units and an explicit dataset licence are not independently established by the bounded source set. No DTU payload, HAWC2 input/output file or archive was downloaded/opened and no scientific workflow was executed. The resource is assessed at `R2`.

## Aggregate batch QA

`SOB030` remains **PASS (10/10)**. `SOB031` is now **5/10**.

## Continuation

Continue with `Stage3-S270` at `CR000319`.
