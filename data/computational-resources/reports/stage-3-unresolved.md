# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-09
Current checkpoint: `Stage3-S143`
Latest completed batch: **SOB015 PASS**
Current batch: `SOB016` (3/10)
Current unresolved count: **1021**
Next unresolved ID: `S3U-1022`
Explicit conflict count: **118**

## Stage3-S143 additions

- `S3U-1017` — CR000160; resource; high: The required Zenodo archive and archived results were identified but not opened or reconciled to the script paths.
- `S3U-1018` — CR000160; resource; high: No repository license was identified at the pinned commit.
- `S3U-1019` — CR000160; resource; medium: Hardware and operating-system requirements are not specified.
- `S3U-1020` — CR000160; configuration; high: The combined script formats its run directory with `alpha_eik` instead of the run index, creating a static multi-run overwrite conflict.
- `S3U-1021` — CR000160; configuration; medium: No explicit numerical acceptance thresholds were identified for comparison with archived results.

This checkpoint adds **1 explicit conflict**. Structured scope, severity and evidence links are retained in `04-evidence/extraction-log/scaleout-checkpoint-143-extraction-log.jsonl`.

## Audit continuity

Prior findings through S122 are retained in the S122 register snapshot and historical checkpoint records. S123 onward stores each new finding and identifier in its immutable checkpoint extraction log. No earlier ID is reused or silently removed. Stage3-RC02 and Stage3-RC03 remain authoritative for prior count-neutral reconciliations.

## Continuation

Exact next resource: `CR000161`. Exact next checkpoint: `Stage3-S144`.
