# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-09
Current checkpoint: `Stage3-S147`
Latest completed batch: **SOB015 PASS**
Current batch: `SOB016` (7/10)
Current unresolved count: **1040**
Next unresolved ID: `S3U-1041`
Explicit conflict count: **120**

## Stage3-S147 additions

- `S3U-1036` — CR000165; resource; high: No repository license, dependency manifest or installation instructions were identified.
- `S3U-1037` — CR000165; resource; high: The required working-directory and module-search-path arrangement for the separated source, data and workflow directories is not documented.
- `S3U-1038` — CR000165; resource; high: Stochastic simulation scripts do not set or expose a random seed.
- `S3U-1039` — CR000165; resource; high: Exact package/runtime versions and hardware requirements are not pinned.
- `S3U-1040` — CR000165; resource; medium: No numerical acceptance thresholds or bundled simulation reference outputs were identified.

This checkpoint adds **0 explicit conflicts**. Structured scope, severity and evidence links are retained in `04-evidence/extraction-log/scaleout-checkpoint-147-extraction-log.jsonl`.

## Audit continuity

Prior findings through S122 are retained in the S122 register snapshot and historical checkpoint records. S123 onward stores each new finding and identifier in its immutable checkpoint extraction log. No earlier ID is reused or silently removed. Stage3-RC02 and Stage3-RC03 remain authoritative for prior count-neutral reconciliations.

## Continuation

Exact next resource: `CR000166`. Exact next checkpoint: `Stage3-S148`.
