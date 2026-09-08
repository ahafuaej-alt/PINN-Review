# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-08
Current checkpoint: `Stage3-S140`
Latest completed batch: **SOB015 PASS**
Current batch: `SOB016` (0/10)
Current unresolved count: **1007**
Next unresolved ID: `S3U-1008`
Explicit conflict count: **117**

## Stage3-S140 additions

- `S3U-1004` — CR000157; resource; high: No repository license was identified at the pinned commit.
- `S3U-1005` — CR000157; resource; high: No dependency declaration, exact runtime versions, or installation procedure was identified.
- `S3U-1006` — CR000157; resource; medium: Bundled MAT inputs were identified but their binary payloads and provenance metadata were not inspected.
- `S3U-1007` — CR000157; configuration; medium: No seed, hardware specification, reference acceptance threshold, or bundled trained checkpoint was identified for the bounded workflows.

This checkpoint adds **0 explicit conflicts**. Structured scope, severity and evidence links are retained in `04-evidence/extraction-log/scaleout-checkpoint-140-extraction-log.jsonl`.

## Audit continuity

Prior findings through S122 are retained in the S122 register snapshot and historical checkpoint records. S123 onward stores each new finding and identifier in its immutable checkpoint extraction log. No earlier ID is reused or silently removed. Stage3-RC02 and Stage3-RC03 remain authoritative for prior count-neutral reconciliations.

## Continuation

Exact next resource: `CR000158`. Exact next checkpoint: `Stage3-S141`.
