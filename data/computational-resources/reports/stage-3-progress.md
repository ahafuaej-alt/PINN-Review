# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S281`
- Latest completed resource: `CR000331`
- Latest completed aggregate batch: `SOB031` - **PASS (10/10)**
- Current batch: `SOB032` - **8/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000332`
- Exact next checkpoint: `Stage3-S282`

## Cumulative counts through S281 / RC09

- Resources: **328**
- Experiments: **358**
- Configurations: **637**
- Technical-evidence records: **3221**
- Reproducibility assessments: **328**
- Unresolved findings: **1560**
- Explicit conflicts: **157**
- Independently extractable resources remaining: **35**

## S281

`CR000331` preserves the verified `PRL000233` citation for Atlas paper 714 while correcting Stage-1 dataset semantics to a government intervention-news source. The official archive describes Minnesota COVID-19 actions, but the paper places its URL immediately after an Italy lockdown/NPI timeline claim. The citation provenance is verified; its scientific/geographic applicability to Italy is not, and one explicit conflict records that mismatch. Italy-specific official sources, exact cited items, an immutable archive snapshot and reuse licence remain unresolved. The resource is assessed at `R0`; no linked item or payload was opened and no scientific workflow executed.

## Aggregate batch QA

`SOB031` remains **PASS (10/10)**. `SOB032` is now **8/10** with `CR000324–CR000331`.

## Continuation

Continue with `Stage3-S282` at `CR000332`.
