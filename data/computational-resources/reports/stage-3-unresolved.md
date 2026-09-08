# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-08
Current checkpoint: `Stage3-S133`
Latest completed batch: **SOB014 PASS**
Current batch: `SOB015` (3/10)
Current unresolved count: **971**
Next unresolved ID: `S3U-0972`
Explicit conflict count: **117**

## Stage3-S133 additions

- `S3U-0963` — CR000150; resource; medium: The original canonical URL remains unavailable. Replacement source and license are newly observed and cannot establish the historical source contents or license.
- `S3U-0964` — CR000150; resource; high: Replacement README gives example package versions without an installation recipe or dependency lock; a substantially specified environment/use path is absent.
- `S3U-0965` — CR000150; resource; high: Training imports neu_op, but the replacement tree supplies neuop.py; the model import does not resolve as written.
- `S3U-0966` — CR000150; resource; high: Datasets and pretrained files are external and unvalidated; the training path is an author-specific absolute path requiring adaptation.
- `S3U-0967` — CR000150; resource; high: The advertised CPU branch writes to a previously closed file handle because only the CUDA branch reopens it.
- `S3U-0968` — CR000150; resource; high: Final save uses a root-relative path on POSIX and reuses the last periodic checkpoint state, omitting later training updates and optimizer state.
- `S3U-0969` — CR000150; resource; medium: README checkpoint name ends epoch800.pt while the test notebook loads epoch80.pt.
- `S3U-0970` — CR000150; resource; medium: NumPy window sampling is seeded, but model/loader randomness and actual hardware are not specified.
- `S3U-0971` — CR000150; resource; medium: Masked relative loss lacks empty-mask/zero-norm guards, and no verified rerun acceptance threshold is established.

This checkpoint adds **2 explicit conflicts**. Structured scope, severity and evidence links are retained in `04-evidence/extraction-log/scaleout-checkpoint-133-extraction-log.jsonl`.

## Audit continuity

Prior findings through S122 are retained in [the S122 register snapshot](stage-3-unresolved-through-s122.md) and historical checkpoint records. S123 onward stores each new finding and identifier in its immutable checkpoint extraction log. No earlier ID is reused or silently removed. Stage3-RC02 remains authoritative for the prior count-neutral reconciliation.

## Continuation

Exact next resource: `CR000151`. Exact next checkpoint: `Stage3-S134`.
