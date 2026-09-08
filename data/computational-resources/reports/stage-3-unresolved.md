# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-08
Current checkpoint: `Stage3-S130`
Latest completed batch: **SOB014 PASS**
Current batch: `SOB015` (0/10)
Current unresolved count: **950**
Next unresolved ID: `S3U-0951`
Explicit conflict count: **115**

## Stage3-S130 additions

- `S3U-0943` — CR000146; environment; high: No dependency declaration was identified in the pinned repository.
- `S3U-0944` — CR000146; reproducibility; high: The representative Beltrami source hardcodes CUDA and a user-specific model-save path.
- `S3U-0945` — CR000146; environment; medium: Exact package versions and tested hardware are not specified.
- `S3U-0946` — CR000146; evaluation; medium: No quantitative acceptance threshold is defined for a successful rerun despite released models/results.
- `S3U-0947` — CR000147; environment; high: No dependency manifest or installation workflow is present in the pinned repository.
- `S3U-0948` — CR000147; environment; high: Python and TensorFlow versions are not fixed by the pinned repository.
- `S3U-0949` — CR000147; reproducibility; medium: Seed and hardware policy are not established by the inspected static sources.
- `S3U-0950` — CR000147; evaluation; medium: Bundled checkpoints/data do not define a quantitative acceptance threshold.

This checkpoint adds **0 explicit conflicts**; the cumulative explicit-conflict count remains **115**. Structured scope, severity and evidence links are retained in `04-evidence/extraction-log/scaleout-checkpoint-130-extraction-log.jsonl`.

## Audit continuity

Prior findings through S122 are retained in [the S122 register snapshot](stage-3-unresolved-through-s122.md) and historical checkpoint records. S123 onward stores each new finding and identifier in its immutable checkpoint extraction log. No earlier ID is reused or silently removed. Stage3-RC02 remains authoritative for the prior count-neutral reconciliation.

## Continuation

Exact next resource: `CR000148`. Exact next checkpoint: `Stage3-S131`.
