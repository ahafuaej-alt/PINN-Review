# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-08
Current checkpoint: `Stage3-S137`
Latest completed batch: **SOB014 PASS**
Current batch: `SOB015` (7/10)
Current unresolved count: **993**
Next unresolved ID: `S3U-0994`
Explicit conflict count: **117**

## Stage3-S137 additions

- `S3U-0989` — CR000154; resource; high: Historical Stage-2 Batch-006 contains no CR000154 resource record, so no Stage-2 pinned SHA, license decision or verified paper relationship is available; the observed live repository head remains Stage-3 source-scoped only.
- `S3U-0990` — CR000154; resource; medium: No repository license is identified at the observed repository head.
- `S3U-0991` — CR000154; resource; high: The Colab workflow lacks pinned versions or an environment manifest for TensorFlow, TensorFlow Probability, SciPy, NumPy, Matplotlib and pyDOE.
- `S3U-0992` — CR000154; configuration; medium: README requires manual upload to Colab session storage while the representative notebook expects `/content/Buckley_Swc_0_Sor_0_M_2.mat` and the repository stores the file under `Data/`; no automatic path mapping is provided.
- `S3U-0993` — CR000154; resource; medium: Bundled MAT and HDF5 artifacts were not opened or runtime-validated, so exact compatibility and mapping to reported results remain unresolved.

This checkpoint adds **0 explicit conflicts**. Structured scope, severity and evidence links are retained in `04-evidence/extraction-log/scaleout-checkpoint-137-extraction-log.jsonl`.

## Audit continuity

Prior findings through S122 are retained in [the S122 register snapshot](stage-3-unresolved-through-s122.md) and historical checkpoint records. S123 onward stores each new finding and identifier in its immutable checkpoint extraction log. No earlier ID is reused or silently removed. Stage3-RC02 and Stage3-RC03 remain authoritative for prior count-neutral reconciliations.

## Continuation

Exact next resource: `CR000155`. Exact next checkpoint: `Stage3-S138`.
