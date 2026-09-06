# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-06  
Current checkpoint: `Stage3-S097`  
Current batch: `SOB011` (2/10)  
Current unresolved count: **720**  
Next unresolved ID: `S3U-0721`  
Explicit conflict count: **101**

## Stage3-S097 additions — CR000109

- `S3U-0715` — Stage 2 did not establish a historical pinned commit SHA for `CR000109`; the current moved-repository snapshot cannot be treated as the exact 2021 Atlas-665 code state.
- `S3U-0716` — The current repository has moved from `mir-group/CiderPress` to `cider-dft/CiderPress` and materially evolved across later CIDER generations, leaving the exact historical paper-specific code boundary unresolved.
- `S3U-0717` — The current snapshot carries GPL-3.0, but the exact license applicable to the unpinned historical Stage-2/2021 state was not established.
- `S3U-0718` — Original-paper training-data and preprocessing provenance were not reconstructed from the bounded current-repository surface.
- `S3U-0719` — Paper-specific hyperparameters, random-seed and runtime-hardware provenance for Atlas 665 remain unresolved.
- `S3U-0720` — Provider-bundled historical checkpoints or exact expected-output artifacts tied to the 2021 CIDER study were not established.

No new explicit conflict was added in S097. Cumulative explicit conflict count remains **101**.

## Batch status

`SOB011` is 2/10 after S097. Aggregate batch QA is not yet due.

## Continuation

Continue from `S3U-0721` only if a later checkpoint generates a genuinely new unresolved finding. Preserve the cumulative unresolved/conflict counts above.
