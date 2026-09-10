# Computational Resources Stage 3 Progress

Date: 2026-09-10
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S174`
- Latest completed resource: `CR000196`
- Latest completed aggregate batch: `SOB018` — **PASS (10/10)**
- Current batch: `SOB019` — **7/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC04` — **PASS (count-neutral CR000191 duplicate skip)**
- Exact next independently extractable resource: `CR000197`
- Exact next checkpoint: `Stage3-S175`

## Cumulative counts through S174 / RC04

- Resources: **197**
- Experiments: **283**
- Configurations: **500**
- Technical-evidence records: **2138**
- Reproducibility assessments: **197**
- Unresolved findings: **1193**
- Explicit conflicts: **137**
- Independently extractable resources remaining: **166**

## S174

CR000196 preserves the Stage-2-authoritative upstream `idrl-lab/PINNpapers` repository pinned at `058306e57ccf22c5e5aee09e9279f69cd6a823c8`, MIT licensed, with the distinct CR000194 fork retained separately and no inferred Atlas-paper relationship. The pinned surface matches the upstream bibliography identity: LICENSE, README and `ref_convert.py`, a BibTeX-to-Markdown formatting helper. No scientific PINN model, experiment, configuration, research dataset, or scientific execution surface is present.

The resource receives a role-aware **R0** reproducibility assessment with zero experiments and zero configurations. Scientific workflow fields are `not_applicable`; absence of repository citation metadata remains `not_available`. No helper script, scientific software, environment, dependency, training, inference, evaluation, test, model, notebook, dataset, container, accelerator, or scientific workload was executed.

## Reconciled baseline

Stage3-RC02, Stage3-RC03 and Stage3-RC04 remain authoritative for their accepted scopes. Accepted methodology and schemas are unchanged.

## Continuation

Continue with `Stage3-S175` at `CR000197` after published-head and checkpoint-QA readback.
