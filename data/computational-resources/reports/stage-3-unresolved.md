# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-08
Current checkpoint: `Stage3-S136`
Latest completed batch: **SOB014 PASS**
Current batch: `SOB015` (6/10)
Current unresolved count: **988**
Next unresolved ID: `S3U-0989`
Explicit conflict count: **117**

## Stage3-S136 additions

- `S3U-0984` — CR000153; resource; medium: No repository license is identified in the accepted Stage-2 verification scope.
- `S3U-0985` — CR000153; resource; high: No dependency declaration, exact package versions or installation recipe is supplied for the executable master snapshot.
- `S3U-0986` — CR000153; resource; medium: The Stage-2 pinned default snapshot is README-only; executable code, bundled data and results reside on the separately recorded nondefault master snapshot and must remain source-scoped rather than substituted for the pinned identity snapshot.
- `S3U-0987` — CR000153; resource; medium: README reports fixed seed=42 for Table 1 testing, but the representative Burgers training script has seed activation commented out; deterministic mapping from this script to the bundled/table results is not established.
- `S3U-0988` — CR000153; resource; medium: Bundled model/data/result artifacts exist but were not opened or runtime-validated; exact package compatibility and quantitative acceptance criteria for the representative workflow remain unknown.

This checkpoint adds **0 explicit conflicts**. Structured scope, severity and evidence links are retained in `04-evidence/extraction-log/scaleout-checkpoint-136-extraction-log.jsonl`.

## Audit continuity

Prior findings through S122 are retained in [the S122 register snapshot](stage-3-unresolved-through-s122.md) and historical checkpoint records. S123 onward stores each new finding and identifier in its immutable checkpoint extraction log. No earlier ID is reused or silently removed. Stage3-RC02 and Stage3-RC03 remain authoritative for prior count-neutral reconciliations.

## Continuation

Exact next resource: `CR000154`. Exact next checkpoint: `Stage3-S137`.
