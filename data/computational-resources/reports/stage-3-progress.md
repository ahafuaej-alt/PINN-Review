# Computational Resources Stage 3 Progress

Date: 2026-09-09
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S162`
- Latest completed resource: `CR000181`
- Latest completed aggregate batch: `SOB017` — **PASS (10/10)**
- Current batch: `SOB018` — **3/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000182`
- Exact next checkpoint: `Stage3-S163`

## Cumulative counts through S162

- Resources: **183**
- Experiments: **268**
- Configurations: **477**
- Technical-evidence records: **2015**
- Reproducibility assessments: **183**
- Unresolved findings: **1128**
- Explicit conflicts: **124**
- Independently extractable resources remaining: **180**

## S162

CR000181 preserves the Stage-2-authoritative `fastai/fastai` repository at pinned SHA `517e68da4779897e6d2668f07aa9aed52e0e4a89`, its Apache-2.0 license, peer-reviewed software citation and explicit no-Atlas-relationship boundary. It remains a general-purpose supporting deep-learning library rather than PINN code.

Bounded static extraction follows the original Stage-1 deep link to the current pinned one-cycle scheduling implementation. One experiment and one configuration capture the `Learner.fit_one_cycle` learning-rate/momentum schedule, exact defaults, callback integration and notebook assertions. Formal dependency declarations, installation instructions and test commands support **R3**; compatible ranges rather than a lockfile and the unexecuted boundary block R4. SOB018 advances to 3/10.

No scientific workload was executed.

## Reconciled baseline

Stage3-RC02 remains authoritative for repaired pre-S123 metadata/reproducibility records. Stage3-RC03 remains authoritative for repaired S129/S132 enum labels. Accepted methodology and schemas are unchanged.

## Continuation

Continue with `Stage3-S163` at `CR000182` after published-head and checkpoint-QA readback. CR000182 is a large general-purpose framework/library and should receive the accepted single-resource treatment.
