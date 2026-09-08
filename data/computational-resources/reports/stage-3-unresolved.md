# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-08
Current checkpoint: `Stage3-S131`
Latest completed batch: **SOB014 PASS**
Current batch: `SOB015` (1/10)
Current unresolved count: **956**
Next unresolved ID: `S3U-0957`
Explicit conflict count: **115**

## Stage3-S131 additions

- `S3U-0951` — CR000148; environment; high: No dependency manifest or installation instructions are present in the pinned repository.
- `S3U-0952` — CR000148; entrypoint; high: The homogeneous script reads `samplesperm.txt`, but that file is absent from the pinned tree.
- `S3U-0953` — CR000148; data; high: The heterogeneous workflow requires a user-provided permeability file outside the pinned repository.
- `S3U-0954` — CR000148; environment; medium: Python/PyTorch versions and tested GPU hardware are not specified.
- `S3U-0955` — CR000148; reproducibility; medium: No random-seed policy is established by the inspected source.
- `S3U-0956` — CR000148; evaluation; medium: No released model checkpoint or quantitative rerun acceptance threshold is provided.

This checkpoint adds **0 explicit conflicts**; the cumulative explicit-conflict count remains **115**. Structured scope, severity and evidence links are retained in `04-evidence/extraction-log/scaleout-checkpoint-131-extraction-log.jsonl`.

## Audit continuity

Prior findings through S122 are retained in [the S122 register snapshot](stage-3-unresolved-through-s122.md) and historical checkpoint records. S123 onward stores each new finding and identifier in its immutable checkpoint extraction log. No earlier ID is reused or silently removed. Stage3-RC02 remains authoritative for the prior count-neutral reconciliation.

## Continuation

Exact next resource: `CR000149`. Exact next checkpoint: `Stage3-S132`. Resolve CR000149's missing historical Stage-2 Batch-006 authority before technical extraction; do not silently skip the Stage-1 normalized identity.
