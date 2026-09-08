# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-08
Current checkpoint: `Stage3-S138`
Latest completed batch: **SOB014 PASS**
Current batch: `SOB015` (8/10)
Current unresolved count: **998**
Next unresolved ID: `S3U-0999`
Explicit conflict count: **117**

## Stage3-S138 additions

- `S3U-0994` — CR000155; resource; medium: No repository license is identified at the Stage-2 pinned commit.
- `S3U-0995` — CR000155; configuration; high: The representative convection Adam-L-BFGS-NNCG shell script references an undefined `switch_epochs` variable inside `--opt_params`; exact command-line expansion and runtime behavior are therefore not statically clean.
- `S3U-0996` — CR000155; configuration; medium: The representative script hard-codes GPU device indices 3-7 while the original GPU model, driver and CUDA runtime context are not documented.
- `S3U-0997` — CR000155; resource; medium: Paper-figure reproduction relies on Weights & Biases account/project access and notebook-side entity configuration rather than a fully self-contained local results archive.
- `S3U-0998` — CR000155; resource; medium: No bundled trained checkpoint or archived experiment-output package was identified in the pinned repository tree.

This checkpoint adds **0 explicit conflicts**. Structured scope, severity and evidence links are retained in `04-evidence/extraction-log/scaleout-checkpoint-138-extraction-log.jsonl`.

## Audit continuity

Prior findings through S122 are retained in the S122 register snapshot and historical checkpoint records. S123 onward stores each new finding and identifier in its immutable checkpoint extraction log. No earlier ID is reused or silently removed. Stage3-RC02 and Stage3-RC03 remain authoritative for prior count-neutral reconciliations.

## Continuation

Exact next resource: `CR000156`. Exact next checkpoint: `Stage3-S139`.
