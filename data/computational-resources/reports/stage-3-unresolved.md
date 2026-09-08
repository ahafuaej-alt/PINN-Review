# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-08
Current checkpoint: `Stage3-S141`
Latest completed batch: **SOB015 PASS**
Current batch: `SOB016` (1/10)
Current unresolved count: **1012**
Next unresolved ID: `S3U-1013`
Explicit conflict count: **117**

## Stage3-S141 additions

- `S3U-1008` — CR000158; resource; high: All requirements are unversioned, leaving the TensorFlow v1 compatibility, FIM, VTK/PyVista and notebook stack unpinned.
- `S3U-1009` — CR000158; resource; medium: No hardware or operating-system specification is supplied.
- `S3U-1010` — CR000158; resource; medium: Bundled VTK geometry payloads were not loaded and lack file-level checksums in the Stage-3 record.
- `S3U-1011` — CR000158; configuration; medium: No trained checkpoints, bundled expected metric values, or numerical acceptance thresholds were identified.
- `S3U-1012` — CR000158; configuration; low: Reported NumPy and TensorFlow seeds do not fully constrain stochastic and parallel library behavior.

This checkpoint adds **0 explicit conflicts**. Structured scope, severity and evidence links are retained in `04-evidence/extraction-log/scaleout-checkpoint-141-extraction-log.jsonl`.

## Audit continuity

Prior findings through S122 are retained in the S122 register snapshot and historical checkpoint records. S123 onward stores each new finding and identifier in its immutable checkpoint extraction log. No earlier ID is reused or silently removed. Stage3-RC02 and Stage3-RC03 remain authoritative for prior count-neutral reconciliations.

## Continuation

Exact next resource: `CR000159`. Exact next checkpoint: `Stage3-S142`.
