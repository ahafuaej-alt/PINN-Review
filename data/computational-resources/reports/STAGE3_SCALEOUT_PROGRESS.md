# Computational Resources Stage 3 Progress

Date: 2026-09-14
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S304`
- Latest completed resource: `CR000355`
- Latest completed aggregate batch: `SOB034` - **PASS (10/10)**
- Current batch: `SOB035` - **2/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000356`
- Exact next checkpoint: `Stage3-S305`

## Cumulative counts through S304 / RC09

- Resources: **352**
- Experiments: **361**
- Configurations: **651**
- Technical-evidence records: **3447**
- Reproducibility assessments: **352**
- Unresolved findings: **1633**
- Explicit conflicts: **158**
- Independently extractable resources remaining: **11**

## S304

`CR000355` preserves final Stage-2 identity as the NetworkX scientific software library and verified `PRL000253` software relationship for Atlas paper 722. Current 3.6.1 provider documentation establishes complex-network creation/manipulation/analysis capabilities, installation routes, optional dependencies/backends, BSD-3-Clause licensing and citation metadata. Current documentation is not substituted for the unresolved paper-specific NetworkX version or environment. Exact graph-generation API calls, parameters and seeds remain unresolved. CR000355 is assessed at `R2`; no repository, package, test, graph or simulation was executed.

## Count-neutral authority readback correction

Post-S298 readback corrected S297/CR000348 to the final Stage-2 authority: `PRL000330` links the SDC3a Foregrounds resource to Atlas paper **853** with relationship `paper_dataset_mention`. Stage 2 also preserves SKAO's explicit statement that data-challenge usage is unrestricted while leaving the SPDX licence identifier unresolved. S297 counts, IDs, batch membership and R2 classification are unchanged.

## Aggregate batch QA

`SOB034` remains **PASS (10/10)**. `SOB035` is now **2/10** with `CR000354` and `CR000355`.

## Report-state synchronization

The lowercase Stage3-SO-D01 control reports and uppercase compatibility counterparts remain synchronized at S304, including SOB034 aggregate closure and the count-neutral S297 authority readback correction.

## Continuation

Continue with `Stage3-S305` at `CR000356`.
