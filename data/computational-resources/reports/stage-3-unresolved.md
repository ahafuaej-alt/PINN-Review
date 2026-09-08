# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-09
Current checkpoint: `Stage3-S144`
Latest completed batch: **SOB015 PASS**
Current batch: `SOB016` (4/10)
Current unresolved count: **1026**
Next unresolved ID: `S3U-1027`
Explicit conflict count: **119**

## Stage3-S144 additions

- `S3U-1022` — CR000161; resource; high: No dependency manifest or runtime versions define a reproducible environment.
- `S3U-1023` — CR000161; configuration; high: The shipped default leaves `pinn_models_list` empty despite README paper-specific PINN bus selections.
- `S3U-1024` — CR000161; resource; medium: The bundled checkpoint was not opened, leaving exact architecture, training configuration and provenance unresolved.
- `S3U-1025` — CR000161; resource; high: No training entrypoint or workflow for recreating `trained_PINN_1.pth` was identified.
- `S3U-1026` — CR000161; resource; medium: Hardware, operating system and random seeds are not reported.

This checkpoint adds **1 explicit conflict**. Structured scope, severity and evidence links are retained in `04-evidence/extraction-log/scaleout-checkpoint-144-extraction-log.jsonl`.

## Audit continuity

Prior findings through S122 are retained in the S122 register snapshot and historical checkpoint records. S123 onward stores each new finding and identifier in its immutable checkpoint extraction log. No earlier ID is reused or silently removed. Stage3-RC02 and Stage3-RC03 remain authoritative for prior count-neutral reconciliations.

## Continuation

Exact next resource: `CR000162`. Exact next checkpoint: `Stage3-S145`.
