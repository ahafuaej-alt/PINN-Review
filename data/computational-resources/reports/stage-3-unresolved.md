# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-06  
Current checkpoint: `Stage3-S095`  
Current batch: `SOB010` (10/10; aggregate QA PASS)  
Current unresolved count: **709**  
Next unresolved ID: `S3U-0710`  
Explicit conflict count: **101**

## Stage3-S095 additions — CR000107

- `S3U-0705` — No repository license was identified at the final Stage-2 pinned snapshot.
- `S3U-0706` — README gives Python, NumPy and PyTorch versions, but no dependency/environment manifest or installation recipe is bundled.
- `S3U-0707` — Three-body and irregular-time-step workflows use random sampling without an explicit seed in the inspected source.
- `S3U-0708` — The README's CUDA-tagged PyTorch build does not establish the hardware actually used for the reported study runs.
- `S3U-0709` — No provider-bundled checkpoints or generated result artifacts were identified in the pinned tree.

No new explicit conflict was added in S095. Cumulative explicit conflict count remains **101**.

## Batch boundary

S095 closes `SOB010`; aggregate batch QA passes. The next active batch is `SOB011`, beginning with `CR000108`.

## Continuation

Continue from `S3U-0710` only if a later checkpoint generates a genuinely new unresolved finding. Preserve the cumulative unresolved/conflict counts above.
