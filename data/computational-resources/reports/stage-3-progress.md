# Computational Resources Stage 3 Progress

Date: 2026-09-10
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S181`
- Latest completed resource: `CR000203`
- Latest completed aggregate batch: `SOB019` — **PASS (10/10)**
- Current batch: `SOB020` — **4/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC05` — **PASS (count-neutral cumulative validation repair)**
- Exact next independently extractable resource: `CR000204`
- Exact next checkpoint: `Stage3-S182`

## Cumulative counts through S181 / RC05

- Resources: **204**
- Experiments: **309**
- Configurations: **548**
- Technical-evidence records: **2223**
- Reproducibility assessments: **204**
- Unresolved findings: **1235**
- Explicit conflicts: **138**
- Independently extractable resources remaining: **159**

## S181

`CR000203` preserves the Stage-2-authoritative `jdtoscano94/Instant-AIVT` identity at pinned SHA `6ac99a99d788f440e952a7bbdf84ac37750206bb`, the paper citation DOI `10.1126/sciadv.ads5236`, no repository-level license, and no asserted Atlas-paper relationship.

The bounded extraction maps one paper-scoped Rayleigh-Benard reconstruction experiment with three configurations: cKAN 149k, MLP 151k, and MLP 282k. The external dataset is not bundled; root and case documentation expose Dryad and Google Drive locations without establishing byte equivalence.

The static reproducibility level is `R1` because detailed notebook configurations are present, but no formal dependency manifest or versioned JAX/Optax environment exists and the required external dataset was not accessed. No scientific workload was executed.

## Reconciled baseline

Stage3-RC02, Stage3-RC03, Stage3-RC04 and Stage3-RC05 remain authoritative and count-neutral for their accepted scopes. Accepted methodology and schemas remain unchanged.

## Continuation

Continue with `Stage3-S182` at `CR000204`. Re-read the live branch, current reports, accepted scale-out plan, reconciliation authorities and latest checkpoint QA before starting.
