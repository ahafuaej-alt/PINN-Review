# Computational Resources Stage 3 Progress

Date: 2026-09-11
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S187`
- Latest completed resource: `CR000209`
- Latest completed aggregate batch: `SOB020` — **PASS (10/10)**
- Current batch: `SOB021` — **0/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC05` — **PASS (count-neutral cumulative validation repair)**
- Exact next independently extractable resource: `CR000210`
- Exact next checkpoint: `Stage3-S188`

## Cumulative counts through S187 / RC05

- Resources: **210**
- Experiments: **335**
- Configurations: **605**
- Technical-evidence records: **2293**
- Reproducibility assessments: **210**
- Unresolved findings: **1270**
- Explicit conflicts: **141**
- Independently extractable resources remaining: **153**

## S187

`CR000209` preserves the Stage-2-authoritative `hl4220/Extended-Physics-Informed-Neural-Operator` identity at pinned SHA `006fec6b3e5babf1723caf746e2f2f20b2d0f3c8`. The exact pinned tree contains 18 notebooks across six problem directories plus README and `Posting.zip`. README directs users to external Google Drive datasets.

Bounded static extraction maps six experiment families and eighteen notebook configurations across advection, Allen-Cahn, antiderivative, Burgers, Darcy flow and pendulum workflows. No formal dependency/environment manifest, repository license, or project self-citation metadata is present. `Posting.zip` remains uninspected and is not promoted to a dataset, result set, or experiment.

Static reproducibility is `R1`. No notebook, model, scientific dataset, archive payload, training, inference, evaluation, dependency environment, or scientific workload was executed.

## Aggregate batch QA

`SOB020` is complete at 10/10 and **PASS**. Membership, cumulative counts, identifiers, orphan references, source-scope sampling, missing-value semantics, methodology/schema drift, stage boundaries, execution boundary and provenance text all pass.

## Reconciled baseline

Stage3-RC02, Stage3-RC03, Stage3-RC04 and Stage3-RC05 remain authoritative and count-neutral for their accepted scopes. Accepted methodology and schemas remain unchanged.

## Continuation

Continue with `Stage3-S188` at `CR000210`. Re-read the live branch, current reports, accepted scale-out plan, reconciliation authorities and latest checkpoint and aggregate QA before starting.
