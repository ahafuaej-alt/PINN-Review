# Computational Resources Stage 3 Progress

Date: 2026-09-09
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S161`
- Latest completed resource: `CR000180`
- Latest completed aggregate batch: `SOB017` — **PASS (10/10)**
- Current batch: `SOB018` — **2/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000181`
- Exact next checkpoint: `Stage3-S162`

## Cumulative counts through S161

- Resources: **182**
- Experiments: **267**
- Configurations: **476**
- Technical-evidence records: **2005**
- Reproducibility assessments: **182**
- Unresolved findings: **1123**
- Explicit conflicts: **124**
- Independently extractable resources remaining: **181**

## S161

CR000180 preserves the Stage-2-authoritative `dyelax/Adversarial_Video_Generation` repository at pinned SHA `458cef18dca1b5d13bee10f5ae39b85d602698f3`, its MIT license and the explicit no-Atlas-relationship boundary. It remains non-PINN research code.

Bounded static extraction maps the documented Ms. Pac-Man adversarial future-frame prediction workflow. The repository provides the TensorFlow-era runner, multiscale generator/discriminator configuration, external-data instructions and bundled historical result summaries. No formal dependency versions or installation procedure are provided, limiting static reproducibility to **R1**. The source default generator learning rate `0.00004` conflicts explicitly with its adjacent comment stating the paper value `0.04`; both values are retained without resolution.

No scientific workload was executed.

## Reconciled baseline

Stage3-RC02 remains authoritative for repaired pre-S123 metadata/reproducibility records. Stage3-RC03 remains authoritative for repaired S129/S132 enum labels. Accepted methodology and schemas are unchanged.

## Continuation

Continue with `Stage3-S162` at `CR000181` after published-head and checkpoint-QA readback. CR000181 is a large general-purpose framework/library and should receive the accepted single-resource treatment.
