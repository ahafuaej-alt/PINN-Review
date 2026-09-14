# Computational Resources Stage 3 Progress

Date: 2026-09-14
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S297`
- Latest completed resource: `CR000348`
- Latest completed aggregate batch: `SOB033` - **PASS (10/10)**
- Current batch: `SOB034` - **5/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000349`
- Exact next checkpoint: `Stage3-S298`

## Cumulative counts through S297 / RC09

- Resources: **345**
- Experiments: **361**
- Configurations: **651**
- Technical-evidence records: **3396**
- Reproducibility assessments: **345**
- Unresolved findings: **1611**
- Explicit conflicts: **158**
- Independently extractable resources remaining: **18**

## S297

`CR000348` preserves final Stage-2 identity as the official SKA Science Data Challenge 3a foregrounds dataset release and verified `PRL000330` for Atlas paper 854. Current official SKA documentation describes the complete SDC3a dataset as a visibility measurement set, imaging products and ancillary data, and separately exposes test/truth products. These release boundaries are preserved without substituting test data for the paper-linked challenge release. Exact immutable release version, item-level licence and the paper-specific file/subset snapshot remain unresolved. CR000348 is assessed at `R2`; no dataset payload was downloaded or opened and no scientific workload was executed.

## Aggregate batch QA

`SOB033` remains **PASS (10/10)**. `SOB034` is now **5/10** with `CR000344`, `CR000345`, `CR000346`, `CR000347` and `CR000348`.

## Report-state synchronization

The lowercase Stage3-SO-D01 control reports and uppercase compatibility counterparts remain synchronized at S297.

## Continuation

Continue with `Stage3-S298` at `CR000349`.
