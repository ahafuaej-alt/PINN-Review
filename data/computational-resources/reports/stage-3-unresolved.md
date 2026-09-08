# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-09
Current checkpoint: `Stage3-S148`
Latest completed batch: **SOB015 PASS**
Current batch: `SOB016` (8/10)
Current unresolved count: **1046**
Next unresolved ID: `S3U-1047`
Explicit conflict count: **120**

## Stage3-S148 additions

- `S3U-1041` — CR000166; resource; high: No repository license, README, citation metadata or formal dependency manifest was identified.
- `S3U-1042` — CR000166; resource; high: The SDSS dataset is downloaded from Kaggle at runtime and no reusable dataset payload is bundled.
- `S3U-1043` — CR000166; resource; high: GalaxyMNIST setup clones an unpinned external repository and loads an external TensorFlow Datasets package at runtime.
- `S3U-1044` — CR000166; resource; high: Inline installation covers only three imported packages and pins no versions.
- `S3U-1045` — CR000166; resource; high: Scikit-learn random states are set, but TensorFlow training and NumPy sample selection are not seeded.
- `S3U-1046` — CR000166; resource; medium: Exact hardware/runtime requirements and numerical acceptance thresholds are not reported.

This checkpoint adds **0 explicit conflicts**. Structured scope, severity and evidence links are retained in `04-evidence/extraction-log/scaleout-checkpoint-148-extraction-log.jsonl`.

## Audit continuity

Prior findings through S122 are retained in the S122 register snapshot and historical checkpoint records. S123 onward stores each new finding and identifier in its immutable checkpoint extraction log. No earlier ID is reused or silently removed. Stage3-RC02 and Stage3-RC03 remain authoritative for prior count-neutral reconciliations.

## Continuation

Exact next resource: `CR000167`. Exact next checkpoint: `Stage3-S149`.
