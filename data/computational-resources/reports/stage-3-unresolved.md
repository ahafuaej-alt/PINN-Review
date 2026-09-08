# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-08
Current checkpoint: `Stage3-S142`
Latest completed batch: **SOB015 PASS**
Current batch: `SOB016` (2/10)
Current unresolved count: **1016**
Next unresolved ID: `S3U-1017`
Explicit conflict count: **117**

## Stage3-S142 additions

- `S3U-1013` — CR000159; resource; medium: The exact transitive CPU/GPU/compiler environment is not pinned.
- `S3U-1014` — CR000159; resource; medium: GPU installation depends on a compatible CUDA toolchain, but no exact hardware, driver or CUDA version is specified.
- `S3U-1015` — CR000159; configuration; medium: Tracked benchmark-data directories do not provide a complete reference dataset or performance acceptance thresholds.
- `S3U-1016` — CR000159; configuration; low: Published benchmark figures are not machine-independent expected outputs for the bounded usage example.

This checkpoint adds **0 explicit conflicts**. Structured scope, severity and evidence links are retained in `04-evidence/extraction-log/scaleout-checkpoint-142-extraction-log.jsonl`.

## Audit continuity

Prior findings through S122 are retained in the S122 register snapshot and historical checkpoint records. S123 onward stores each new finding and identifier in its immutable checkpoint extraction log. No earlier ID is reused or silently removed. Stage3-RC02 and Stage3-RC03 remain authoritative for prior count-neutral reconciliations.

## Continuation

Exact next resource: `CR000160`. Exact next checkpoint: `Stage3-S143`.
