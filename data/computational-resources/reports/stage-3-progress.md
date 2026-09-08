# Computational Resources Stage 3 Progress

Date: 2026-09-09
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S146`
- Latest completed resource: `CR000164`
- Latest completed aggregate batch: `SOB015` — **PASS (10/10)**
- Current batch: `SOB016` — **6/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000165`
- Exact next checkpoint: `Stage3-S147`

## Cumulative counts through S146

- Resources: **166**
- Experiments: **255**
- Configurations: **454**
- Technical-evidence records: **1845**
- Reproducibility assessments: **166**
- Unresolved findings: **1035**
- Explicit conflicts: **120**
- Independently extractable resources remaining: **197**

## S146

CR000164 preserves the pinned official non-PINN research-code identity for differential-equation solution fine-tuning and evaluation. Static inspection identifies transformer, Mamba and TeX-aware metric surfaces, but records no PINN experiment or configuration. The two-byte training workbook conflicts with the README's training-data claim; static reproducibility remains **R1**.

No scientific workload was executed.

## Reconciled baseline

Stage3-RC02 remains authoritative for repaired pre-S123 metadata/reproducibility records. Stage3-RC03 remains authoritative for repaired S129/S132 enum labels. Accepted methodology and schemas are unchanged.

## Continuation

Continue with `Stage3-S147` at `CR000165` after published-head and checkpoint-QA readback.
