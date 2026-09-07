# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-07  
Current checkpoint: `Stage3-S112`  
Latest completed batch: `SOB012` — **PASS**  
Current batch: `SOB013` (0/10)  
Current unresolved count: **829**  
Next unresolved ID: `S3U-0830`  
Explicit conflict count: **109**

## Stage3-S112 additions — CR000126

- `S3U-0820` — CR000126 lists dependencies but has no reconstructable environment manifest or installation procedure; most dependency versions are not pinned.
- `S3U-0821` — CR000126 requires external ERA5 WeatherBench data that were not loaded or verified as a fixed local snapshot.
- `S3U-0822` — CR000126 has no verified hardware requirement/profile in the bounded pinned source.
- `S3U-0823` — CR000126 documents evaluation procedures but no machine-readable numerical acceptance threshold was verified.
- `S3U-0824` — CR000126 bundles a released global checkpoint, but it was not loaded or evaluated under the static-only boundary.

## Stage3-S112 additions — CR000127

- `S3U-0825` — CR000127 archive internals were not directly inspectable in this bounded run, leaving source files and entrypoints unverified.
- `S3U-0826` — CR000127 archive license and dependency/version specifications remain unknown in the inspected evidence.
- `S3U-0827` — CR000127 random seeds and released trained checkpoints were not verified.
- `S3U-0828` — CR000127 paper acknowledges hardware support but does not establish a reconstructable hardware configuration.
- `S3U-0829` — CR000127 paper-level experiment detail cannot substitute for direct archive/source inspection.

S112 adds **0 explicit conflicts**. Cumulative explicit conflict count remains **109**.

## Batch status

`SOB012` is **PASS (10/10)** after CR000126 and CR000127. `SOB013` begins at CR000128.

## Continuation

Continue from `S3U-0830` only if a later checkpoint generates a genuinely new unresolved finding. Exact next resource is `CR000128` for `Stage3-S113`.
