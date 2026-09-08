# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-08
Current checkpoint: `Stage3-S135`
Latest completed batch: **SOB014 PASS**
Current batch: `SOB015` (5/10)
Current unresolved count: **983**
Next unresolved ID: `S3U-0984`
Explicit conflict count: **117**

## Stage3-S135 additions

- `S3U-0980` — CR000152; resource; medium: No dependency manifest or Python/toolchain version is supplied; only the principal TensorFlow, Keras, NumPy and SciPy versions are documented.
- `S3U-0981` — CR000152; resource; medium: Installation requires manually replacing SciPy internal optimizer modules, leaving environment recreation compatibility-sensitive and non-automated.
- `S3U-0982` — CR000152; resource; low: Hardware is not reported for the representative workflow.
- `S3U-0983` — CR000152; resource; medium: No trained checkpoint or quantitative acceptance threshold is bundled for the representative 1D Burgers workflow; expected accuracy remains paper/report scoped.

This checkpoint adds **0 explicit conflicts**. Structured scope, severity and evidence links are retained in `04-evidence/extraction-log/scaleout-checkpoint-135-extraction-log.jsonl`.

## Audit continuity

Prior findings through S122 are retained in [the S122 register snapshot](stage-3-unresolved-through-s122.md) and historical checkpoint records. S123 onward stores each new finding and identifier in its immutable checkpoint extraction log. No earlier ID is reused or silently removed. Stage3-RC02 and Stage3-RC03 remain authoritative for prior count-neutral reconciliations.

## Continuation

Exact next resource: `CR000153`. Exact next checkpoint: `Stage3-S136`.
