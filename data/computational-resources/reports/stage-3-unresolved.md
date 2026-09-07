# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-08  
Current checkpoint: `Stage3-S119`  
Latest completed batch: `SOB012` — **PASS**  
Current batch: `SOB013` (7/10)  
Current unresolved count: **871**  
Next unresolved ID: `S3U-0872`  
Explicit conflict count: **112**

## Stage3-S119 additions — CR000134

- `S3U-0866` — no repository license was identified in the authoritative pinned Stage-2 snapshot.
- `S3U-0867` — no dependency manifest or complete version-pinned environment is present; QSSA source imports Assimulo alongside the numerical/learning stack.
- `S3U-0868` — the Robertson-QSSA script defaults to restart mode and attempts to load `models/robertson_pinn.pt.tar`, but the checkpoint is absent from the pinned recursive tree. **Explicit conflict.**
- `S3U-0869` — NumPy seeding is explicit, but the regular Robertson script has PyTorch seed calls commented out, so full stochastic seed control is incomplete.
- `S3U-0870` — experimental hardware is not documented in the bounded static evidence.
- `S3U-0871` — installation instructions and a canonical environment reconstruction procedure are not provided.

S119 adds **1 explicit conflict**. Cumulative explicit conflict count is **112**.

## Batch status

`SOB012` remains **PASS (10/10)**. `SOB013` is **7/10** after CR000134.

## Continuation

Continue from `S3U-0872` only for genuinely new findings. Exact next resource is `CR000135` for `Stage3-S120`.
