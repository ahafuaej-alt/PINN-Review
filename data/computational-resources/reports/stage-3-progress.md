# Computational Resources Stage 3 Progress

Date: 2026-09-14
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S307`
- Latest completed resource: `CR000358`
- Latest completed aggregate batch: `SOB034` - **PASS (10/10)**
- Current batch: `SOB035` - **5/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000359`
- Exact next checkpoint: `Stage3-S308`

## Cumulative counts through S307 / RC09

- Resources: **355**
- Experiments: **365**
- Configurations: **660**
- Technical-evidence records: **3480**
- Reproducibility assessments: **355**
- Unresolved findings: **1640**
- Explicit conflicts: **158**
- Independently extractable resources remaining: **8**

## S307

`CR000358` preserves the final Stage-2 standalone profile-discovery identity, pinned repository SHA `f6eacf7d773e9d6b9327a0f5c234692074bb1e4a` and Stage2-RC01 closure that no relationship to Atlas paper 778 is established. Static source inspection identifies four workflow families—high-speed 1-D advection, cantilever dynamics, flag fluid-structure interaction and a supplementary beam loss-weight sweep—represented as four experiments and nine bounded configurations. Code-defined seeds, architectures, Adam/L-BFGS-B training and archived outputs are preserved, while licensing, dependency versions, hardware and complete output provenance remain unresolved. CR000358 is assessed at `R2`; no clone, installation, checkpoint loading or scientific workload was executed.

## Count-neutral authority readback correction

Post-S298 readback corrected S297/CR000348 to the final Stage-2 authority: `PRL000330` links the SDC3a Foregrounds resource to Atlas paper **853** with relationship `paper_dataset_mention`. Stage 2 also preserves SKAO's explicit statement that data-challenge usage is unrestricted while leaving the SPDX licence identifier unresolved. S297 counts, IDs, batch membership and R2 classification are unchanged.

## Aggregate batch QA

`SOB034` remains **PASS (10/10)**. `SOB035` is now **5/10** with `CR000354` through `CR000358`.

## Report-state synchronization

The lowercase Stage3-SO-D01 control reports and uppercase compatibility counterparts remain synchronized at S307, including SOB034 aggregate closure and the count-neutral S297 authority readback correction.

## Continuation

Continue with `Stage3-S308` at `CR000359`.
