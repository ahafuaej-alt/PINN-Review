# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-08
Current checkpoint: `Stage3-S125`
Latest completed batch: **SOB013 PASS**
Current batch: `SOB014` (3/10)
Current unresolved count: **911**
Next unresolved ID: `S3U-0912`
Explicit conflict count: **114**

## Stage3-S125 additions

- `S3U-0905` — CR000140; resource; high: No installation recipe or versioned package environment is supplied; notebook kernel metadata and package names do not satisfy the R2 environment/install gate.
- `S3U-0906` — CR000140; resource; medium: The inverse notebook imports tqdm, which is omitted from the README required-package list.
- `S3U-0907` — CR000140; resource; medium: No seed is set for initialization or scrambled Sobol sampling in the representative notebooks.
- `S3U-0908` — CR000140; resource; medium: Inverse trials reuse learned a/m parameters and eta state, so reported trial statistics do not establish independent full-parameter restarts.
- `S3U-0909` — CR000140; resource; medium: Inverse checkpoint writes and later loads require a trained_models directory absent from the tree and not created by the notebook.
- `S3U-0910` — CR000140; resource; low: Actual hardware and complete runtime versions are unknown; the inverse device selector is unused in model placement.
- `S3U-0911` — CR000140; resource; low: Stored Helmholtz output is provider evidence only; no numerical reproduction or acceptance threshold is verified, and binary data/model contents remain unvalidated.

This checkpoint adds **0 explicit conflicts**. Structured scope, severity and evidence links are retained in `04-evidence/extraction-log/scaleout-checkpoint-125-extraction-log.jsonl`.

## Audit continuity

Prior findings through S122 are retained in [the S122 register snapshot](stage-3-unresolved-through-s122.md) and historical checkpoint records. S123 onward stores each new finding and identifier in its immutable checkpoint extraction log. No earlier ID is reused or silently removed. Stage3-RC02 remains authoritative for the prior count-neutral reconciliation.

## Continuation

Exact next resource: `CR000141`. Exact next checkpoint: `Stage3-S126`.
