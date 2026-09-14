# Computational Resources Stage 3 Progress

Date: 2026-09-14
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S302`
- Latest completed resource: `CR000353`
- Latest completed aggregate batch: `SOB034` - **PASS (10/10)**
- Current batch: `SOB035` - **0/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000354`
- Exact next checkpoint: `Stage3-S303`

## Cumulative counts through S302 / RC09

- Resources: **350**
- Experiments: **361**
- Configurations: **651**
- Technical-evidence records: **3431**
- Reproducibility assessments: **350**
- Unresolved findings: **1627**
- Explicit conflicts: **158**
- Independently extractable resources remaining: **13**

## S302

`CR000353` preserves final Stage-2 identity as a provenance alias of canonical FCLAB institutional resource `CR000346`, not a second dataset. Verified `PRL000326` remains a `paper_resource_mention` for Atlas paper 842, which identifies FCLAB as the organization that collected and compiled the ageing-test data. Current institutional documentation confirms the FCLAB hydrogen-energy research/service identity but is not copied into a duplicate resource scope. Site-level reuse licensing remains unresolved. CR000353 is assessed at `R1`; no data file, archive, software or scientific workload was executed.

## Count-neutral authority readback correction

Post-S298 readback corrected S297/CR000348 to the final Stage-2 authority: `PRL000330` links the SDC3a Foregrounds resource to Atlas paper **853** with relationship `paper_dataset_mention`. Stage 2 also preserves SKAO's explicit statement that data-challenge usage is unrestricted while leaving the SPDX licence identifier unresolved. S297 counts, IDs, batch membership and R2 classification are unchanged.

## Aggregate batch QA

`SOB034` is **PASS (10/10)** with `CR000344` through `CR000353`. Its aggregate delta is 10 resources, 0 experiments, 0 configurations, 69 technical-evidence records, 10 reproducibility assessments, 30 unresolved findings and 0 new conflicts. `SOB035` is now **0/10**.

## Report-state synchronization

The lowercase Stage3-SO-D01 control reports and uppercase compatibility counterparts remain synchronized at S302, including SOB034 aggregate closure and the count-neutral S297 authority readback correction.

## Continuation

Continue with `Stage3-S303` at `CR000354`.
