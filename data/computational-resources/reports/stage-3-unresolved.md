# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-08
Current checkpoint: `Stage3-S134`
Latest completed batch: **SOB014 PASS**
Current batch: `SOB015` (4/10)
Current unresolved count: **979**
Next unresolved ID: `S3U-0980`
Explicit conflict count: **117**

## Stage3-S134 additions

- `S3U-0972` — CR000151; resource; medium: No repository license is detected at the pinned snapshot.
- `S3U-0973` — CR000151; resource; high: No installation recipe, environment manifest or exact package versions are supplied.
- `S3U-0974` — CR000151; resource; high: The PF entrypoint requires three unbundled PF arrays; bundled VOF arrays cannot substitute for method/interval-specific PF inputs.
- `S3U-0975` — CR000151; resource; high: VOF evaluation and generation require an unbundled rising_bubble.h5 CFD reference; binary shapes/content and selected physical times remain unvalidated.
- `S3U-0976` — CR000151; resource; medium: Absolute author paths, required output directories, CUDA PF execution and video tooling require downstream setup; actual hardware is unknown.
- `S3U-0977` — CR000151; resource; medium: No complete LS training or multi-interval driver is present; result movies do not establish a full sequential reproduction workflow.
- `S3U-0978` — CR000151; resource; medium: PF checkpoint omits the sixteen external adaptive scalars and optimizer/scheduler state; adaptive weighting has no explicit guard against zero denominators.
- `S3U-0979` — CR000151; resource; medium: VOF deserialization lacks map_location and uses bespoke zero handling for relative-error maps; no quantitative acceptance threshold is supplied.

This checkpoint adds **0 explicit conflicts**. Structured scope, severity and evidence links are retained in `04-evidence/extraction-log/scaleout-checkpoint-134-extraction-log.jsonl`.

## Audit continuity

Prior findings through S122 are retained in [the S122 register snapshot](stage-3-unresolved-through-s122.md) and historical checkpoint records. S123 onward stores each new finding and identifier in its immutable checkpoint extraction log. No earlier ID is reused or silently removed. Stage3-RC02 remains authoritative for the prior count-neutral reconciliation.

## Continuation

Exact next resource: `CR000152`. Exact next checkpoint: `Stage3-S135`.
