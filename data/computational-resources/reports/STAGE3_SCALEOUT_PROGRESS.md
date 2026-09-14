# Computational Resources Stage 3 Progress

Date: 2026-09-14
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S310`
- Latest completed resource: `CR000362`
- Latest completed aggregate batch: `SOB034` - **PASS (10/10)**
- Current batch: `SOB035` - **9/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000363`
- Exact next checkpoint: `Stage3-S311`

## Cumulative counts through S310 / RC09

- Resources: **359**
- Experiments: **368**
- Configurations: **667**
- Technical-evidence records: **3524**
- Reproducibility assessments: **359**
- Unresolved findings: **1656**
- Explicit conflicts: **158**
- Independently extractable resources remaining: **4**

## S310

`CR000361` and `CR000362` preserve their final Stage-2 Power Grid Lib sibling identities at pinned SHAs `f928f95cde06d035554d92854f03950e074850e0` and `39a7f38cf4703de92f0291f0c873c2e98c789301`. Neither repository is promoted to an Atlas-paper relationship, including no relationship to Atlas paper 721. Static inspection resolves the HVDC OPF benchmark/model surface for CR000361 and the unit-commitment JSON/model surface for CR000362. Both are assessed at `R2`; external solver stacks and complete case-generation provenance remain bounded gaps. No optimization case, solver, dependency or scientific workload was executed.

## Count-neutral authority readback correction

Post-S298 readback corrected S297/CR000348 to the final Stage-2 authority: `PRL000330` links the SDC3a Foregrounds resource to Atlas paper **853** with relationship `paper_dataset_mention`. Stage 2 also preserves SKAO's explicit statement that data-challenge usage is unrestricted while leaving the SPDX licence identifier unresolved. S297 counts, IDs, batch membership and R2 classification are unchanged.

## Aggregate batch QA

`SOB034` remains **PASS (10/10)**. `SOB035` is now **9/10** with `CR000354` through `CR000362`.

## Report-state synchronization

The lowercase Stage3-SO-D01 control reports and uppercase compatibility counterparts remain synchronized at S310, including SOB034 aggregate closure and the count-neutral S297 authority readback correction.

## Continuation

Continue with `Stage3-S311` at `CR000363`.
