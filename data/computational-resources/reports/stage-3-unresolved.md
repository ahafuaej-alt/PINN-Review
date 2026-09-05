# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-05  
Current checkpoint: `Stage3-S081`  
Current batch: `SOB009` (6/10)  
Current unresolved count: **629**  
Next unresolved ID: `S3U-0630`  
Explicit conflict count: **98**

## Stage3-S081 additions — CR000093

- `S3U-0622` — No explicit dependency/environment manifest or pinned package versions are present in the pinned repository tree.
- `S3U-0623` — License status remains unknown from the bounded pinned-repository inspection.
- `S3U-0624` — The README states that data are available upon request rather than bundling the complete study data surface.
- `S3U-0625` — Gray–Scott entrypoints require `data.npy`, which is absent from the pinned repository tree.
- `S3U-0626` — Gray–Scott evaluation requires `sol.mat`, which is absent from the pinned repository tree.
- `S3U-0627` — SavedModels/SavedResults outputs referenced by Gray–Scott entrypoints are not present as canonical archived artifacts in the pinned tree.
- `S3U-0628` — Random-seed and hardware provenance are not consistently established across the bounded workflow set.
- `S3U-0629` — Alternative model classes are exposed in comments/imports for several workflows, but complete paper-to-variant run provenance is not encoded in the repository; bounded configurations preserve active selections only.

No new explicit conflict is recorded.

## Continuation

No Stage-3 hard stop is active. Exact next independently extractable resource: `CR000094`.
