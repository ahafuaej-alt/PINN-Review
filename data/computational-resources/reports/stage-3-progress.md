# Computational Resources Stage 3 Progress

Date: 2026-09-12
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S221`
- Latest completed resource: `CR000256`
- Latest completed aggregate batch: `SOB024` — **PASS (10/10)**
- Current batch: `SOB025` — **4/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC07` — **PASS**
- Exact next independently extractable resource: `CR000257`
- Exact next checkpoint: `Stage3-S222`

## Cumulative counts through S221 / RC07

- Resources: **254**
- Experiments: **343**
- Configurations: **622**
- Technical-evidence records: **2605**
- Reproducibility assessments: **254**
- Unresolved findings: **1400**
- Explicit conflicts: **146**
- Independently extractable resources remaining: **109**

## S221

`CR000256` preserves `VA000051`, the repaired Mingsheng Long profile/software-index hostname, and the single repeated-method relationship `PRL000292`. Static inspection of the two linked official archives records ARTL and JDA implementations, bundled workflow data, two experiments, and four active driver configurations. Missing archive-level licensing, complete MATLAB environment/installation evidence and reference expected results, plus the absent JDA-referenced LIBLINEAR path and ARTL statistic-label ambiguity, bound reproducibility at `R1`.

## Aggregate batch QA

`SOB024` remains **10/10 — PASS**. `SOB025` is now **4/10**; aggregate QA is not yet due.

## Continuation

Stage3-RC02 through Stage3-RC07 remain authoritative and count-neutral for their accepted scopes. RC07 normalizes 58 enum-invalid values in 35 records from S183–S202 without changing counts or scientific facts.

Continue with `Stage3-S222` at `CR000257`.
