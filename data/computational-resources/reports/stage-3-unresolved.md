# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-09
Current checkpoint: `Stage3-S146`
Latest completed batch: **SOB015 PASS**
Current batch: `SOB016` (6/10)
Current unresolved count: **1035**
Next unresolved ID: `S3U-1036`
Explicit conflict count: **120**

## Stage3-S146 additions

- `S3U-1031` — CR000164; resource; high: No license, dependency manifest or installation instructions were identified.
- `S3U-1032` — CR000164; resource; high: The README labels train.xlsx as training data, but it is only two bytes at the pinned snapshot.
- `S3U-1033` — CR000164; resource; medium: The bundled TeX metric embedding checkpoint was not opened and its provenance is not documented in the README.
- `S3U-1034` — CR000164; resource; high: Exact base-model revisions, runtime environment and hardware requirements are not pinned.
- `S3U-1035` — CR000164; resource; medium: No bundled expected results or numerical acceptance thresholds were identified.

This checkpoint adds **1 explicit conflict**. Structured scope, severity and evidence links are retained in `04-evidence/extraction-log/scaleout-checkpoint-146-extraction-log.jsonl`.

## Audit continuity

Prior findings through S122 are retained in the S122 register snapshot and historical checkpoint records. S123 onward stores each new finding and identifier in its immutable checkpoint extraction log. No earlier ID is reused or silently removed. Stage3-RC02 and Stage3-RC03 remain authoritative for prior count-neutral reconciliations.

## Continuation

Exact next resource: `CR000165`. Exact next checkpoint: `Stage3-S147`.
