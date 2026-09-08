# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-08
Current checkpoint: `Stage3-S132`
Latest completed batch: **SOB014 PASS**
Current batch: `SOB015` (2/10)
Current unresolved count: **962**
Next unresolved ID: `S3U-0963`
Explicit conflict count: **115**

## Stage3-S132 additions

- `S3U-0957` — CR000149; authority; high: Historical Stage-2 Batch-006 has no CR000149 resource record; Stage-2-verified pinned SHA, license decision and paper relationship are unavailable.
- `S3U-0958` — CR000149; license; medium: No license file is present in the observed two-file repository tree, and no Stage-2 license decision exists for CR000149.
- `S3U-0959` — CR000149; environment; high: No dependency manifest or installation instructions are present in the observed repository tree.
- `S3U-0960` — CR000149; environment; medium: Python, PyTorch and auxiliary package versions are not pinned.
- `S3U-0961` — CR000149; reproducibility; medium: No random-seed policy is specified.
- `S3U-0962` — CR000149; evaluation; medium: No released checkpoint or quantitative rerun acceptance threshold is provided.

This checkpoint adds **0 explicit conflicts**; the cumulative explicit-conflict count remains **115**. Structured scope, severity and evidence links are retained in `04-evidence/extraction-log/scaleout-checkpoint-132-extraction-log.jsonl`.

## Audit continuity

Prior findings through S122 are retained in [the S122 register snapshot](stage-3-unresolved-through-s122.md) and historical checkpoint records. S123 onward stores each new finding and identifier in its immutable checkpoint extraction log. No earlier ID is reused or silently removed. Stage3-RC02 remains authoritative for the prior count-neutral reconciliation.

## Continuation

Exact next resource: `CR000150`. Exact next checkpoint: `Stage3-S133`.
