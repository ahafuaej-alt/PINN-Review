# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-06  
Current checkpoint: `Stage3-S094`  
Current batch: `SOB010` (9/10)  
Current unresolved count: **704**  
Next unresolved ID: `S3U-0705`  
Explicit conflict count: **101**

## Stage3-S094 additions — CR000106

- `S3U-0699` — No repository license was identified at the final Stage-2 pinned snapshot.
- `S3U-0700` — No pinned environment or dependency manifest is bundled; notebooks install packages inline and clone the external `Arif-PhyChem/MLQD` repository without pinning its commit.
- `S3U-0701` — Saved notebook output records failure of the `pip install sklearn` step, so the displayed installation sequence is not a clean reconstructable environment recipe.
- `S3U-0702` — README points to external Zenodo training data while the repository bundles selected test/paper data and trained models; complete training-data-to-model provenance is distributed across resources.
- `S3U-0703` — Notebook cells use quick-run `TrEpochs=10` settings and explicitly advise higher values for better training, so the exact production-study training schedule is not fully represented by those cells.
- `S3U-0704` — Training seeds are not established in the inspected bounded evidence; saved T4 Colab metadata describes notebook context but does not fully establish study hardware provenance.

No new explicit conflict was added in S094. Cumulative explicit conflict count remains **101**.

## Continuation

Continue from `S3U-0705` only if a later checkpoint generates a genuinely new unresolved finding. Preserve the cumulative unresolved/conflict counts above.
