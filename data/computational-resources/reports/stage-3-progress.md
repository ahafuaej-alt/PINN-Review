# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S237`
- Latest completed resource: `CR000280`
- Latest completed aggregate batch: `SOB026` — **PASS (10/10)**
- Current batch: `SOB027` — **7/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC08` — **PASS (count-neutral report-state continuity repair)**
- Exact next independently extractable resource: `CR000281`
- Exact next checkpoint: `Stage3-S238`

## Cumulative counts through S237 / RC08

- Resources: **277**
- Experiments: **343**
- Configurations: **622**
- Technical-evidence records: **2763**
- Reproducibility assessments: **277**
- Unresolved findings: **1437**
- Explicit conflicts: **147**
- Independently extractable resources remaining: **86**

## RC08

RC08 repairs report-state continuity introduced at S234. S233 ended at 271 resources, 343 experiments, 622 configurations, 2728 technical-evidence records, 271 reproducibility assessments, 1431 unresolved findings and 147 explicit conflicts. Applying the published S234–S237 checkpoint deltas yields the cumulative totals above. No scientific record, evidence row, experiment, configuration, reproducibility assessment, Stage-2 authority, relationship, accepted schema or methodology is changed.

The unresolved sequence created by S234–S237 is restored to the next IDs established by S233: `S3U-1432` through `S3U-1437`. The contaminated report-only `S3U-1572`–`S3U-1577` labels are superseded; no extraction-log record used those labels.

## Aggregate batch QA

`SOB026` remains **PASS (10/10)**. `SOB027` remains **7/10** with membership through `CR000280`.

## Continuation

Continue with `Stage3-S238` at `CR000281`.
