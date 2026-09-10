# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-10
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S181`

## Current totals

- Unresolved findings: **1235**
- Explicit conflicts: **138**
- Next unresolved ID: `S3U-1236`

## New findings in S181

- `S3U-1230` — CR000203 / relationship / medium: Stage 2 asserts no Atlas-paper relationship for CR000203; none is inferred.
- `S3U-1231` — CR000203 / license / high: No repository license is identified at the pinned commit.
- `S3U-1232` — CR000203 / environment / high: No formal dependency manifest or package versions specify a compatible JAX/Optax/scientific environment; this blocks R2.
- `S3U-1233` — CR000203 / data / high: The required dataset is external and was not availability-checked or downloaded; two documented locations are not established as byte-equivalent.
- `S3U-1234` — CR000203 / path / medium: The documented move command and notebook path depend on a sibling `Data` directory outside the clone.
- `S3U-1235` — CR000203 / reproducibility / medium: No reusable trained checkpoint or bundled results package is identified, and the accelerated hardware/runtime is unspecified.

No new explicit conflict is introduced by S181. Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
