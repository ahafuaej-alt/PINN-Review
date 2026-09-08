# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-08
Current checkpoint: `Stage3-S126`
Latest completed batch: **SOB013 PASS**
Current batch: `SOB014` (4/10)
Current unresolved count: **920**
Next unresolved ID: `S3U-0921`
Explicit conflict count: **114**

## Stage3-S126 additions

- `S3U-0912` — CR000141; resource; high: Experiment requirements and partial notebook install cells do not specify the full environment; unconditional Ranger import lacks bundled source or dependency declaration.
- `S3U-0913` — CR000141; resource; medium: PyTorch wrapper compares version strings lexically; some newer versions can select the fallback unexpectedly.
- `S3U-0914` — CR000141; resource; high: The linked CIFAR notebook calls Mish() while its local constructor requires lambd; the separate script implementation does not share that signature.
- `S3U-0915` — CR000141; resource; medium: Representative sweep depends on external W&B configuration/tracking and omits a fixed run budget or selected winning configuration.
- `S3U-0916` — CR000141; resource; medium: No reproducibility seed is set for benchmark initialization, augmentation or data shuffling.
- `S3U-0917` — CR000141; resource; medium: Per-epoch validation uses the CIFAR test split; a separate final holdout protocol is not specified.
- `S3U-0918` — CR000141; resource; medium: Checkpoint writes ignore is_best and omit optimizer/scheduler state; stored best score need not identify the saved model as the best epoch.
- `S3U-0919` — CR000141; resource; low: Actual GPU, complete package versions and CUDA runtime are unknown.
- `S3U-0920` — CR000141; resource; low: No verified numerical baseline or acceptance threshold is established for the bounded sweep.

This checkpoint adds **0 explicit conflicts**. Structured scope, severity and evidence links are retained in `04-evidence/extraction-log/scaleout-checkpoint-126-extraction-log.jsonl`.

## Audit continuity

Prior findings through S122 are retained in [the S122 register snapshot](stage-3-unresolved-through-s122.md) and historical checkpoint records. S123 onward stores each new finding and identifier in its immutable checkpoint extraction log. No earlier ID is reused or silently removed. Stage3-RC02 remains authoritative for the prior count-neutral reconciliation.

## Continuation

Exact next resource: `CR000142`. Exact next checkpoint: `Stage3-S127`.
