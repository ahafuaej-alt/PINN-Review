# Computational Resources Stage 3 Progress

Date: 2026-09-09
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S151`
- Latest completed resource: `CR000169`
- Latest completed aggregate batch: `SOB016` — **PASS (10/10)**
- Current batch: `SOB017` — **1/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000170`
- Exact next checkpoint: `Stage3-S152`

## Cumulative counts through S151

- Resources: **171**
- Experiments: **258**
- Configurations: **459**
- Technical-evidence records: **1887**
- Reproducibility assessments: **171**
- Unresolved findings: **1060**
- Explicit conflicts: **121**
- Independently extractable resources remaining: **192**

## S151

CR000169 preserves the official non-PINN open-hardware repository identity and exact pinned snapshot. Static extraction maps 91 STEP CAD files, the assembly sequence, three paper-reported physical experiment families and five representative configurations. Incomplete build parameters, missing licensing and absent raw measurements/control code constrain static reproducibility to **R2**. SOB017 advances to 1/10.

No scientific workload was executed.

## Reconciled baseline

Stage3-RC02 remains authoritative for repaired pre-S123 metadata/reproducibility records. Stage3-RC03 remains authoritative for repaired S129/S132 enum labels. Accepted methodology and schemas are unchanged.

## Continuation

Continue with `Stage3-S152` at `CR000170` after published-head and checkpoint-QA readback.
