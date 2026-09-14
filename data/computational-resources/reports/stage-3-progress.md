# Computational Resources Stage 3 Progress

Date: 2026-09-14
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S308`
- Latest completed resource: `CR000359`
- Latest completed aggregate batch: `SOB034` - **PASS (10/10)**
- Current batch: `SOB035` - **6/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000360`
- Exact next checkpoint: `Stage3-S309`

## Cumulative counts through S308 / RC09

- Resources: **356**
- Experiments: **366**
- Configurations: **665**
- Technical-evidence records: **3493**
- Reproducibility assessments: **356**
- Unresolved findings: **1646**
- Explicit conflicts: **158**
- Independently extractable resources remaining: **7**

## S308

`CR000359` preserves the final Stage-2 HFM repository identity, pinned SHA `08f595e5165686eb0023ea3c2780e070d82385f1`, verified `PRL000333` supplementary-code relationship to Atlas paper 431 and separate Zenodo alias `VA000045`. The repository provides Nektar-based synthetic-flow simulation support, build guidance, MPI execution and five benchmark input families represented as one experiment with five configurations. A complete HFM neural-network training package is not inferred from the solver tree, and repository GPL-3.0 licensing is not propagated to the archive. CR000359 is assessed at `R2`; no compilation, simulation, archive access or scientific workload was executed.

## Count-neutral authority readback correction

Post-S298 readback corrected S297/CR000348 to the final Stage-2 authority: `PRL000330` links the SDC3a Foregrounds resource to Atlas paper **853** with relationship `paper_dataset_mention`. Stage 2 also preserves SKAO's explicit statement that data-challenge usage is unrestricted while leaving the SPDX licence identifier unresolved. S297 counts, IDs, batch membership and R2 classification are unchanged.

## Aggregate batch QA

`SOB034` remains **PASS (10/10)**. `SOB035` is now **6/10** with `CR000354` through `CR000359`.

## Report-state synchronization

The lowercase Stage3-SO-D01 control reports and uppercase compatibility counterparts remain synchronized at S308, including SOB034 aggregate closure and the count-neutral S297 authority readback correction.

## Continuation

Continue with `Stage3-S309` at `CR000360`.
