# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-08  
Current checkpoint: `Stage3-S120`  
Latest completed batch: `SOB012` — **PASS**  
Current batch: `SOB013` (8/10)  
Current unresolved count: **876**  
Next unresolved ID: `S3U-0877`  
Explicit conflict count: **112**

## Stage3-S120 additions — CR000135

- `S3U-0872` — the documented master reproducibility entrypoint executes only the Burgers workflow; Navier-Stokes and wave experiment surfaces require separate invocation not specified by that entrypoint.
- `S3U-0873` — the archived Code Ocean image is referenced by registry tag and complemented by a pinned Dockerfile, but external registry availability is not preserved by the Git repository itself.
- `S3U-0874` — the Burgers workflow dynamically selects CUDA when available or CPU otherwise, so exact experimental hardware is not fixed by the pinned source.
- `S3U-0875` — bundled Original trained models and loss-surface arrays are available, but exact generating-run provenance is not encoded beside every artifact.
- `S3U-0876` — expected quantitative acceptance thresholds for successful reproduction are not specified in the bounded documentation.

S120 adds **0 explicit conflicts**. Cumulative explicit conflict count remains **112**.

## Batch status

`SOB012` remains **PASS (10/10)**. `SOB013` is **8/10** after CR000135.

## Continuation

Continue from `S3U-0877` only for genuinely new findings. Exact next resource is `CR000136` for `Stage3-S121`.
