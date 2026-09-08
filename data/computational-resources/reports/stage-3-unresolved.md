# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-08
Current checkpoint: `Stage3-S124`
Latest completed batch: **SOB013 PASS**
Current batch: `SOB014` (2/10)
Current unresolved count: **904**
Next unresolved ID: `S3U-0905`
Explicit conflict count: **114**

## Stage3-S124 additions

- `S3U-0898` — CR000139; resource; high: No installation recipe or complete environment specification is supplied; Python/PyTorch versions alone do not satisfy the R2 environment/install gate.
- `S3U-0899` — CR000139; resource; high: Active training unconditionally loads absent checkpoint500.pt, including optimizer and scheduler states; no complete cold-start curriculum driver is supplied.
- `S3U-0900` — CR000139; resource; high: The full trajectory required by the neural entrypoint is unbundled; generation code and initial-condition files do not establish the exact paper trajectory or bundled-IC mapping.
- `S3U-0901` — CR000139; resource; medium: Generator output ./data/2dBurgers/ differs from neural input ./data/ for the same trajectory filename; no transfer/setup instruction resolves the paths.
- `S3U-0902` — CR000139; resource; medium: Relative model, figure and data directories require downstream preparation; the inspected entrypoint does not create them.
- `S3U-0903` — CR000139; resource; low: CUDA is required in active source, but GPU model, memory and CUDA runtime version are not specified.
- `S3U-0904` — CR000139; resource; low: Evaluation code and README extrapolation claims provide no verified numerical baseline or acceptance threshold for the extracted configuration.

This checkpoint adds **1 explicit conflicts**. Structured scope, severity and evidence links are retained in `04-evidence/extraction-log/scaleout-checkpoint-124-extraction-log.jsonl`.

## Audit continuity

Prior findings through S122 are retained in [the S122 register snapshot](stage-3-unresolved-through-s122.md) and historical checkpoint records. S123 onward stores each new finding and identifier in its immutable checkpoint extraction log. No earlier ID is reused or silently removed. Stage3-RC02 remains authoritative for the prior count-neutral reconciliation.

## Continuation

Exact next resource: `CR000140`. Exact next checkpoint: `Stage3-S125`.
