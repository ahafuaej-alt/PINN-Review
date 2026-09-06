# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-07  
Current checkpoint: `Stage3-S101`  
Current batch: `SOB011` (7/10)  
Current unresolved count: **745**  
Next unresolved ID: `S3U-0746`  
Explicit conflict count: **101**

## Stage3-S101 additions — CR000113

- `S3U-0736` — The pinned `requirements.txt` specifies minimum package versions rather than exact versions, so the precise runtime environment remains unpinned.
- `S3U-0737` — No explicit installation procedure is identified in the pinned README; under the gated reproducibility model this blocks advancement to R2.
- `S3U-0738` — Runtime hardware and accelerator provenance are not established in the bounded inspected repository surface.
- `S3U-0739` — The pinned `checkpoints/` directory contains only `.gitkeep`; provider-bundled trained model weights are not available.
- `S3U-0740` — Four provider output families are bundled, but their exact runtime/environment provenance is not encoded as a reconstructable acceptance package.

## Stage3-S101 additions — CR000114

- `S3U-0741` — The recorded DG-PINN repository URL is unavailable and final Stage 2 established no pinned source snapshot.
- `S3U-0742` — `PRL000223 → Atlas 692` remains `paper_resource_mention / not_verified`.
- `S3U-0743` — Repository license status cannot be verified from an unavailable source snapshot.
- `S3U-0744` — Dependency, installation and runtime-environment information cannot be verified.
- `S3U-0745` — Scientific implementation, workflow, experiment and configuration details cannot be verified and therefore are not promoted into Stage-3 technical records.

No new explicit conflict was added in S101. Cumulative explicit conflict count remains **101**.

## Batch status

`SOB011` is 7/10 after S101. Aggregate batch QA is not yet due.

## Continuation

Continue from `S3U-0746` only if a later checkpoint generates a genuinely new unresolved finding. Preserve the cumulative unresolved/conflict counts above.
