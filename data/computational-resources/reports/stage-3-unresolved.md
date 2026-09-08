# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-08
Current checkpoint: `Stage3-S123`
Latest completed batch: **SOB013 PASS**
Current batch: `SOB014` (1/10)
Current unresolved count: **897**
Next unresolved ID: `S3U-0898`
Explicit conflict count: **113**

## Stage3-S123 additions

- `S3U-0888` — CR000138; resource; medium: No repository license was detected at the Stage-2 pinned snapshot.
- `S3U-0889` — CR000138; resource; high: No dependency manifest, exact package versions or installation procedure specifies the full observed Python stack; R2 is not justified.
- `S3U-0890` — CR000138; resource; high: Required raw/processed datasets and data/data_process.py are absent; data acquisition, preprocessing and split construction are not specified.
- `S3U-0891` — CR000138; resource; high: Testing requires trained_model.pth, but no pretrained checkpoint is supplied in the pinned tree.
- `S3U-0892` — CR000138; resource; medium: Nested trained-model and prediction output directories must be created by downstream setup; inspected scripts only create the loss-log directory.
- `S3U-0893` — CR000138; resource; high: Fixed training reshape and last-test-batch-only prediction aggregation impose unchecked sample-count assumptions; applicability to the missing datasets is unknown.
- `S3U-0894` — CR000138; resource; medium: README calls the minor-loop folders minor_loops, while the pinned tree uses minor_loop for both training and testing.
- `S3U-0895` — CR000138; resource; medium: Training and test H arrays are independently min-max scaled, and no scaler state or common deployment normalization contract is supplied.
- `S3U-0896` — CR000138; resource; low: Actual experimental hardware is not reported in the bounded repository evidence.
- `S3U-0897` — CR000138; resource; low: Evaluation code provides metrics and plots but no verified numerical baseline or acceptance threshold for the bounded workflows.

This checkpoint adds **1 explicit conflicts**. Structured scope, severity and evidence links are retained in `04-evidence/extraction-log/scaleout-checkpoint-123-extraction-log.jsonl`.

## Audit continuity

Prior findings through S122 are retained in [the S122 register snapshot](stage-3-unresolved-through-s122.md) and historical checkpoint records. S123 onward stores each new finding and identifier in its immutable checkpoint extraction log. No earlier ID is reused or silently removed. Stage3-RC02 remains authoritative for the prior count-neutral reconciliation.

## Continuation

Exact next resource: `CR000139`. Exact next checkpoint: `Stage3-S124`.
