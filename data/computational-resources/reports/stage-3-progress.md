# Computational Resources Stage 3 Progress

Date: 2026-09-08
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S136`
- Latest completed resource: `CR000153`
- Latest completed aggregate batch: `SOB014` — **PASS (10/10)**
- Current batch: `SOB015` — **6/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000154`
- Exact next checkpoint: `Stage3-S137`

## Cumulative counts through S136

- Resources: **156**
- Experiments: **244**
- Configurations: **443**
- Technical-evidence records: **1755**
- Reproducibility assessments: **156**
- Unresolved findings: **988**
- Explicit conflicts: **117**
- Independently extractable resources remaining: **207**

## S136

CR000153 preserves the corrected AAF-for-PINNs identity, official paper821 relationship and Stage-2 pinned README-only default snapshot. Executable code, bundled benchmark data and result artifacts are separately source-scoped to the Stage-2-recorded master commit. A representative Burgers workflow uses a trainable L2-normalized assembly of sin, tanh, GELU, SiLU and softplus activations. Missing dependency/version/install specification and unresolved seed/result mapping limit static reproducibility to **R1**.

No scientific workload was executed.

## Reconciled baseline

The count-neutral [Stage3-RC02 reconciliation](stage-3-cumulative-reconciliation-2026-09-08.md) remains authoritative for repaired pre-S123 metadata and reproducibility assessments. Accepted methodology and schemas are unchanged. [Stage3-RC03](stage-3-schema-reconciliation-2026-09-08-rc03.md) additionally corrects count-neutral S129/S132 enum labels.

## Continuation

Continue with `Stage3-S137` at `CR000154` after published-head and checkpoint-QA readback.
