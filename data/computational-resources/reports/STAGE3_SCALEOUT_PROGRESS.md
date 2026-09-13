# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S292`
- Latest completed resource: `CR000343`
- Latest completed aggregate batch: `SOB033` - **PASS (10/10)**
- Current batch: `SOB034` - **0/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000344`
- Exact next checkpoint: `Stage3-S293`

## Cumulative counts through S292 / RC09

- Resources: **340**
- Experiments: **361**
- Configurations: **651**
- Technical-evidence records: **3362**
- Reproducibility assessments: **340**
- Unresolved findings: **1597**
- Explicit conflicts: **158**
- Independently extractable resources remaining: **23**

## S292

`CR000343` preserves the final Stage-2 correction of the ACS Stiff-PINN article and Supporting Information landing page from a dataset classification to `publication_and_supporting_information_landing_page`, with `PRL000260` retained as a verified `paper_resource_mention` for Atlas paper 739. The publisher describes free Supporting Information containing the POLLU full model, QSSA reduction and regular-PINN training results; the primary paper documents the Stiff-PINN QSSA strategy and the POLLU stiff-kinetics case. The separately identified `DENG-MIT/Stiff-PINN` GitHub implementation remains a distinct resource identity. Because CR000343 is a documentary publication/SI landing page rather than an executable or structured data artifact, S292 creates no experiment or configuration identities. CR000343 is assessed at `R1`; the Supporting Information PDF was not downloaded or opened, no cross-resource implementation state was borrowed, and no scientific workflow was executed.

## Aggregate batch QA

`SOB033` is now **PASS (10/10)** with `CR000334–CR000343`. `SOB034` is **0/10** and starts at `CR000344`.

## Report-state synchronization

The lowercase Stage3-SO-D01 control reports and uppercase compatibility counterparts remain synchronized at S292.

## Continuation

Continue with `Stage3-S293` at `CR000344`.
