# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-07  
Current checkpoint: `Stage3-S115`  
Latest completed batch: `SOB012` — **PASS**  
Current batch: `SOB013` (3/10)  
Current unresolved count: **847**  
Next unresolved ID: `S3U-0848`  
Explicit conflict count: **110**

## Stage3-S115 additions — CR000130

- `S3U-0841` — CR000130 has no repository license identified in the final Stage-2 record or bounded pinned tree.
- `S3U-0842` — CR000130 has no dependency/environment manifest or pinned package versions in the bounded pinned source.
- `S3U-0843` — the experimental battery dataset is explicitly confidential and unavailable.
- `S3U-0844` — `PINN.py` requires `surrogate_model.pkl` and `half_cell_model.pkl`, but those pretrained model artifacts are not bundled in the pinned repository.
- `S3U-0845` — the `PINN.py` example assumes preloaded training/test tensors (`X_train`, `y_train`, `y_true_dd`, `X_test`, `y_test`) whose data-loading/preparation path is not supplied in the bounded source.
- `S3U-0846` — hardware used for the documented CR000130 workflows is not reported.
- `S3U-0847` — no released trained checkpoint or expected numerical acceptance baseline was identified.

S115 adds **0 explicit conflicts**. Cumulative explicit conflict count remains **110**.

## Batch status

`SOB012` remains **PASS (10/10)**. `SOB013` is **3/10** after CR000130.

## Continuation

Continue from `S3U-0848` only if a later checkpoint generates a genuinely new unresolved finding. Exact next resource is `CR000131` for `Stage3-S116`.
