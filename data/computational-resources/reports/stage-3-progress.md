# Computational Resources Stage 3 Progress

Date: 2026-09-11
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S195`
- Latest completed resource: `CR000219`
- Latest completed aggregate batch: `SOB020` — **PASS (10/10)**
- Current batch: `SOB021` — **9/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC05` — **PASS (count-neutral cumulative validation repair)**
- Exact next independently extractable resource: `CR000220`
- Exact next checkpoint: `Stage3-S196`

## Cumulative counts through S195 / RC05

- Resources: **219**
- Experiments: **339**
- Configurations: **609**
- Technical-evidence records: **2369**
- Reproducibility assessments: **219**
- Unresolved findings: **1316**
- Explicit conflicts: **144**
- Independently extractable resources remaining: **144**

## S195

`CR000217` is not re-extracted because the accepted Stage3-SO-D01 scale-out plan marks it pilot-complete. `CR000218` and `CR000219` are therefore the next two independently extractable resources.

`CR000218` preserves the Stage-2-authoritative `thunil/Physics-Based-Deep-Learning` repository at pinned commit `b901b50c7dccbb56d6ada2b621cdce57ef3f84e3`. It remains a book/bibliography/tutorial landing collection with no paper-specific local experiment promotion. Static reproducibility is `R1`.

`CR000219` preserves the Stage-2-authoritative archived `AndreWeiner/machine-learning-applied-to-cfd` repository at pinned commit `4c48c4aafe61f199ad68e89b1615bbbed7086904`. Its heterogeneous ML-for-CFD examples remain collection-level evidence and are not promoted into paper-specific experiments. Static reproducibility is `R2`.

## Aggregate batch QA

`SOB020` remains complete at 10/10 and **PASS**. `SOB021` is now 9/10.

## Reconciled baseline

Stage3-RC02, Stage3-RC03, Stage3-RC04 and Stage3-RC05 remain authoritative and count-neutral for their accepted scopes. Accepted methodology and schemas remain unchanged.

## Continuation

Continue with `Stage3-S196` at `CR000220`.