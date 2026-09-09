# Computational Resources Stage 3 Progress

Date: 2026-09-09
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S154`
- Latest completed resource: `CR000172`
- Latest completed aggregate batch: `SOB016` — **PASS (10/10)**
- Current batch: `SOB017` — **4/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000173`
- Exact next checkpoint: `Stage3-S155`

## Cumulative counts through S154

- Resources: **174**
- Experiments: **260**
- Configurations: **465**
- Technical-evidence records: **1925**
- Reproducibility assessments: **174**
- Unresolved findings: **1077**
- Explicit conflicts: **123**
- Independently extractable resources remaining: **189**

## S154

CR000172 preserves the non-PINN identity of the classical WG elastoplasticity solver and its supporting paper-software relationship. Static extraction maps one constitutive-response experiment, the single active Ottawa-sand proportional-strain configuration, five source-module roles and the serialized output surface. Missing environment versions, installation guidance, validation artifacts and the linked paper's exact synthetic-data campaign constrain reproducibility to **R1**. SOB017 advances to 4/10.

No scientific workload was executed.

## Reconciled baseline

Stage3-RC02 remains authoritative for repaired pre-S123 metadata/reproducibility records. Stage3-RC03 remains authoritative for repaired S129/S132 enum labels. Accepted methodology and schemas are unchanged.

## Continuation

Continue with `Stage3-S155` at `CR000173` after published-head and checkpoint-QA readback.
