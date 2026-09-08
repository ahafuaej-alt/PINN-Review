# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-08  
Current checkpoint: `Stage3-S121`  
Latest completed batch: `SOB012` — **PASS**  
Current batch: `SOB013` (9/10)  
Current unresolved count: **882**  
Next unresolved ID: `S3U-0883`  
Explicit conflict count: **112**

## Stage3-S121 additions — CR000136

- `S3U-0877` — the README specifies DeepXDE v0.11.2 for the archived API, but `requirements.txt` lists dependencies without package-version pins.
- `S3U-0878` — Python is specified only as Python 3, and exact versions for TensorFlow, NumPy, SciPy and the remaining runtime dependencies are not fixed.
- `S3U-0879` — no random-seed policy is reported for the representative antiderivative workflow.
- `S3U-0880` — experimental hardware is not specified by the pinned repository.
- `S3U-0881` — the representative workflow writes checkpoints during training, but no pretrained checkpoint for that workflow is bundled in the pinned tree.
- `S3U-0882` — several documented cases require source-level parameter selection or separate runtime stacks rather than an immutable per-case run manifest.

S121 adds **0 explicit conflicts**. Cumulative explicit conflict count remains **112**.

## Batch status

`SOB012` remains **PASS (10/10)**. `SOB013` is **9/10** after CR000136.

## Continuation

Continue from `S3U-0883` only for genuinely new findings. Exact next resource is `CR000137` for `Stage3-S122`.
