# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-09
Current checkpoint: `Stage3-S152`
Latest completed batch: **SOB016 PASS**
Current batch: `SOB017` (2/10)
Current unresolved count: **1066**
Next unresolved ID: `S3U-1067`
Explicit conflict count: **123**

## Stage3-S152 additions

- `S3U-1061` — CR000170; resource; high: No repository license defines reuse terms for the published code.
- `S3U-1062` — CR000170; resource; high: The active training loop clears gradients immediately before `optimizer.step` and never calls `GradScaler.step/update`, blocking parameter updates without repair.
- `S3U-1063` — CR000170; experiment; high: The evaluation loop labels its metrics container RRDB while loading SPSR weights and writing SPSR result paths.
- `S3U-1064` — CR000170; resource; high: IXI volumes and pretrained weights are external, were not access-validated and lack repository-pinned checksums.
- `S3U-1065` — CR000170; resource; high: Training and inference depend on user-specific absolute paths, unconditional CUDA calls and an uncreated Models output directory.
- `S3U-1066` — CR000170; resource; medium: README activation names `s2l8h` while `environment.yml` declares `srmri` and exports a user-specific prefix.

This checkpoint adds **2 explicit conflicts**. Structured scope, severity and evidence links are retained in `04-evidence/extraction-log/scaleout-checkpoint-152-extraction-log.jsonl`.

## Audit continuity

Prior findings through S122 are retained in the S122 register snapshot and historical checkpoint records. S123 onward stores each new finding and identifier in its immutable checkpoint extraction log. No earlier ID is reused or silently removed. Stage3-RC02 and Stage3-RC03 remain authoritative for prior count-neutral reconciliations.

## Continuation

Exact next resource: `CR000171`. Exact next checkpoint: `Stage3-S153`.
