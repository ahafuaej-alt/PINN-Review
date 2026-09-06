# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-06  
Current checkpoint: `Stage3-S096`  
Current batch: `SOB011` (1/10)  
Current unresolved count: **714**  
Next unresolved ID: `S3U-0715`  
Explicit conflict count: **101**

## Stage3-S096 additions — CR000108

- `S3U-0710` — Supplemental archive internals and notebook cells were not directly inspectable in the bounded source surface, so exact internal entrypoints and commands remain unresolved.
- `S3U-0711` — No reconstructable environment or pinned dependency manifest is established by the inspected Stage-2 and APS metadata.
- `S3U-0712` — Input-data provenance and preprocessing requirements for `dqd.ipynb` and `transmon.ipynb` remain unknown without archive-internal inspection.
- `S3U-0713` — Random-seed and runtime-hardware provenance are not established in the inspected evidence.
- `S3U-0714` — Provider-bundled checkpoint or machine-readable expected-output artifact provenance was not established in the inspected evidence.

No new explicit conflict was added in S096. Cumulative explicit conflict count remains **101**.

## Batch status

`SOB011` is 1/10 after S096. Aggregate batch QA is not yet due.

## Continuation

Continue from `S3U-0715` only if a later checkpoint generates a genuinely new unresolved finding. Preserve the cumulative unresolved/conflict counts above.
