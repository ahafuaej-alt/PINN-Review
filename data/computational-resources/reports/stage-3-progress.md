# Computational Resources Stage 3 Progress

Date: 2026-09-08
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S134`
- Latest completed resource: `CR000151`
- Latest completed aggregate batch: `SOB014` — **PASS (10/10)**
- Current batch: `SOB015` — **4/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000152`
- Exact next checkpoint: `Stage3-S135`

## Cumulative counts through S134

- Resources: **154**
- Experiments: **242**
- Configurations: **441**
- Technical-evidence records: **1735**
- Reproducibility assessments: **154**
- Unresolved findings: **979**
- Explicit conflicts: **117**
- Independently extractable resources remaining: **209**

## S134

CR000151 preserves the pinned two-phase-flow identity and distinct paper811 relationship. Phase-field training in 0-0.6 and VOF evaluation in 0.6-1.2 remain separate cases. Missing PF arrays, external CFD reference and incomplete setup prevent a complete sequential workflow; static reproducibility is R1.

No scientific workload was executed.

## Reconciled baseline

The count-neutral [Stage3-RC02 reconciliation](stage-3-cumulative-reconciliation-2026-09-08.md) remains authoritative for repaired pre-S123 metadata and reproducibility assessments. Accepted methodology and schemas are unchanged. [Stage3-RC03](stage-3-schema-reconciliation-2026-09-08-rc03.md) additionally corrects count-neutral S129/S132 enum labels.

## Continuation

Continue with `Stage3-S135` at `CR000152` after published-head and checkpoint-QA readback.
