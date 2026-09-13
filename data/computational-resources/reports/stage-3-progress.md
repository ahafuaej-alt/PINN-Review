# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S283`
- Latest completed resource: `CR000334`
- Latest completed aggregate batch: `SOB032` - **PASS (10/10)**
- Current batch: `SOB033` - **1/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000335`
- Exact next checkpoint: `Stage3-S284`

## Cumulative counts through S283 / RC09

- Resources: **331**
- Experiments: **358**
- Configurations: **637**
- Technical-evidence records: **3250**
- Reproducibility assessments: **331**
- Unresolved findings: **1568**
- Explicit conflicts: **157**
- Independently extractable resources remaining: **32**

## S283

`CR000333–CR000334` form one atomic identity-reconciliation checkpoint for Atlas paper 716. Stage-2 alias `VA000036` establishes that EDI package `edi.200.6` and DOI `10.6073/pasta/8f19c5d19d816857e55077ba20570265` are portal and persistent access identities for one Carey et al. high-frequency reservoir-profile dataset. Both historical CR and PRL identities are preserved without treating them as independent scientific datasets. Exact paper-used site, fields, dates, files, checksums, transformations and package rights remain unresolved. Both records are assessed at `R1`; no payload was opened or workflow executed.

## Aggregate batch QA

`SOB032` is **PASS (10/10)** with `CR000324–CR000333`. Because S283 preserves the duplicate identity pair atomically, `CR000334` starts `SOB033`, now **1/10**.

## Continuation

Continue with `Stage3-S284` at `CR000335`.
