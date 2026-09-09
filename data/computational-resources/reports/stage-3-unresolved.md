# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-09
Current checkpoint: `Stage3-S150`
Latest completed batch: **SOB016 PASS**
Current batch: `SOB017` (0/10)
Current unresolved count: **1055**
Next unresolved ID: `S3U-1056`
Explicit conflict count: **121**

## Stage3-S150 additions

- `S3U-1052` — CR000168; resource; high: The exact pinned repository contains only a 15-byte README and no code or dataset.
- `S3U-1053` — CR000168; resource; high: The paper's Data Availability Statement points to the repository, but the current pinned snapshot contains no data.
- `S3U-1054` — CR000168; resource; high: No repository license, citation metadata, dependency declaration or installation instructions are present.
- `S3U-1055` — CR000168; resource; high: No entrypoint, architecture, training, evaluation, seed, hardware, checkpoint or expected-result surface can be assessed.

This checkpoint adds **1 explicit conflict**. Structured scope, severity and evidence links are retained in `04-evidence/extraction-log/scaleout-checkpoint-150-extraction-log.jsonl`.

## Audit continuity

Prior findings through S122 are retained in the S122 register snapshot and historical checkpoint records. S123 onward stores each new finding and identifier in its immutable checkpoint extraction log. No earlier ID is reused or silently removed. Stage3-RC02 and Stage3-RC03 remain authoritative for prior count-neutral reconciliations.

## Continuation

Exact next resource: `CR000169`. Exact next checkpoint: `Stage3-S151`.
