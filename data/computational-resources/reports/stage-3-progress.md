# Computational Resources Stage 3 Progress

Date: 2026-09-10
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S173`
- Latest completed resource: `CR000195`
- Latest completed aggregate batch: `SOB018` — **PASS (10/10)**
- Current batch: `SOB019` — **6/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC04` — **PASS (count-neutral CR000191 duplicate skip)**
- Exact next independently extractable resource: `CR000196`
- Exact next checkpoint: `Stage3-S174`

## Cumulative counts through S173 / RC04

- Resources: **196**
- Experiments: **283**
- Configurations: **500**
- Technical-evidence records: **2134**
- Reproducibility assessments: **196**
- Unresolved findings: **1191**
- Explicit conflicts: **137**
- Independently extractable resources remaining: **167**

## S173

CR000194 preserves the Stage-2-authoritative `Steph-Yhf/PINNpapers` fork pinned at `058306e57ccf22c5e5aee09e9279f69cd6a823c8`, MIT licensed, with upstream identity CR000196 retained separately and no inferred Atlas-paper relationship. The pinned surface is a curated PINN bibliography plus `ref_convert.py`, a BibTeX-to-Markdown formatting helper. It contains no scientific PINN model or experiment surface.

CR000195 preserves the Stage-2-authoritative `Event-AHU/PINN_Paper_List` repository pinned at `e1ecc362aa811736284b6fb9fb83e9d8a42dd14d`, MIT licensed, with two Stage-1 mentions collapsed into the single Stage-2 identity and no inferred Atlas-paper relationship. The pinned surface is a curated PINN paper/software/tutorial/video catalog with bundled review/tutorial documents and no executable scientific project code.

Both resources receive role-aware **R0** reproducibility assessments with zero experiments and zero configurations. Missing scientific workflow fields are `not_applicable`, not silently converted to `unknown` or `false`. No helper script, scientific workload, bundled document, environment, dependency, training, inference, evaluation, test, model, notebook, dataset, container, or accelerator workload was executed.

## Reconciled baseline

Stage3-RC02, Stage3-RC03 and Stage3-RC04 remain authoritative for their accepted scopes. Accepted methodology and schemas are unchanged.

## Continuation

Continue with `Stage3-S174` at `CR000196` after published-head and checkpoint-QA readback.
