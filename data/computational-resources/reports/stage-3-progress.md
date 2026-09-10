# Computational Resources Stage 3 Progress

Date: 2026-09-10
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S180`
- Latest completed resource: `CR000202`
- Latest completed aggregate batch: `SOB019` — **PASS (10/10)**
- Current batch: `SOB020` — **3/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC05` — **PASS (count-neutral cumulative validation repair)**
- Exact next independently extractable resource: `CR000203`
- Exact next checkpoint: `Stage3-S181`

## Cumulative counts through S180 / RC05

- Resources: **203**
- Experiments: **308**
- Configurations: **545**
- Technical-evidence records: **2212**
- Reproducibility assessments: **203**
- Unresolved findings: **1229**
- Explicit conflicts: **138**
- Independently extractable resources remaining: **160**

## S180

`CR000202` preserves the Stage-2-authoritative `jdtoscano94/NABLA-SciML` identity at pinned SHA `b4664f8d042686d60a8613669b72a3b2ce1f3e2d`. Stage 2 classifies it as a paper-code/tutorial collection, records no repository-level license, module-specific citation metadata, a root `pyproject.toml`, and no asserted Atlas-paper relationship.

The bounded static extraction maps seven major in-repository scientific families: PINN tutorials, DeepONet tutorials, residual-based-attention PINN benchmarks, cPIKAN, KKAN, vRBA PINN studies, and vRBA operator-learning studies. Concrete problem/method variants are represented as configurations. Root Crunch infrastructure, stored result arrays, post-processing notebooks, caches and duplicate analysis artifacts remain supporting evidence. AIVT and MR-AIV code are externally hosted and excluded from CR000202 experiment scope.

The static reproducibility level is `R2` because a formal dependency manifest and explicit installation pathway are documented; runtime reproducibility was not tested. No scientific workload was executed.

## Reconciled baseline

Stage3-RC02, Stage3-RC03, Stage3-RC04 and Stage3-RC05 remain authoritative and count-neutral for their accepted scopes. Accepted methodology and schemas remain unchanged.

## Continuation

Continue with `Stage3-S181` at `CR000203`. Re-read the live branch, current reports, accepted scale-out plan, reconciliation authorities and latest checkpoint QA before starting.
