# Computational Resources Stage 3 Progress

Date: 2026-09-09
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S160`
- Latest completed resource: `CR000179`
- Latest completed aggregate batch: `SOB017` — **PASS (10/10)**
- Current batch: `SOB018` — **1/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000180`
- Exact next checkpoint: `Stage3-S161`

## Cumulative counts through S160

- Resources: **181**
- Experiments: **266**
- Configurations: **475**
- Technical-evidence records: **1997**
- Reproducibility assessments: **181**
- Unresolved findings: **1118**
- Explicit conflicts: **123**
- Independently extractable resources remaining: **182**

## S160

CR000179 preserves the Stage-2-authoritative `bawalla2/JMLR-2024` repository at pinned SHA `f73f2fc5c1ba2484e60e3db101bff18139fd1cef` and the official relationship to Atlas paper 314. Its accepted role remains adjacent physics-informed continuous-time reinforcement-learning research code rather than a PINN implementation.

Bounded static extraction maps the default inverted-pendulum RCI modeling-error training sweep selected by `main.m`. The pinned workflow uses the RCI-only training-group path, bundled model/data products and documented loop controls. Missing MATLAB/toolbox environment specifications, installation instructions and repository license limit the static reproducibility assessment to **R1**.

No scientific workload was executed.

## Reconciled baseline

Stage3-RC02 remains authoritative for repaired pre-S123 metadata/reproducibility records. Stage3-RC03 remains authoritative for repaired S129/S132 enum labels. Accepted methodology and schemas are unchanged.

## Continuation

Continue with `Stage3-S161` at `CR000180` after published-head and checkpoint-QA readback.
