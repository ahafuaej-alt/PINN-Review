# Computational Resources Stage 3 Progress

Date: 2026-09-08
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S137`
- Latest completed resource: `CR000154`
- Latest completed aggregate batch: `SOB014` — **PASS (10/10)**
- Current batch: `SOB015` — **7/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000155`
- Exact next checkpoint: `Stage3-S138`

## Cumulative counts through S137

- Resources: **157**
- Experiments: **245**
- Configurations: **444**
- Technical-evidence records: **1765**
- Reproducibility assessments: **157**
- Unresolved findings: **993**
- Explicit conflicts: **117**
- Independently extractable resources remaining: **206**

## S137

CR000154 is retained from the accepted Stage-1 inventory for `wandiab/PINNs_BuckleyLeverett`, but historical Stage-2 Batch-006 contains no CR000154 resource record. Stage 3 therefore does not manufacture a Stage-2 pinned SHA, license decision or verified paper relationship; the observed repository head is source-scoped only. A representative data-free Buckley-Leverett Colab notebook maps hard I/BC construction, bundled reference data and auxiliary weight files, MLP/attention code paths and training defaults. Missing environment version pins and manual Colab upload/path handling limit static reproducibility to **R1**.

No scientific workload was executed.

## Reconciled baseline

The count-neutral [Stage3-RC02 reconciliation](stage-3-cumulative-reconciliation-2026-09-08.md) remains authoritative for repaired pre-S123 metadata and reproducibility assessments. Accepted methodology and schemas are unchanged. [Stage3-RC03](stage-3-schema-reconciliation-2026-09-08-rc03.md) additionally corrects count-neutral S129/S132 enum labels.

## Continuation

Continue with `Stage3-S138` at `CR000155` after published-head and checkpoint-QA readback.
