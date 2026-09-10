# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-10
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S180`

## Current totals

- Unresolved findings: **1229**
- Explicit conflicts: **138**
- Next unresolved ID: `S3U-1230`

## New findings in S180

- `S3U-1224` — CR000202 / legal / medium: No repository-level license was identified at the pinned commit.
- `S3U-1225` — CR000202 / relationship / medium: Stage 2 asserts no Atlas-paper relationship for CR000202; none is inferred.
- `S3U-1226` — CR000202 / scope / medium: AIVT and MR-AIV code are hosted in separate repositories and are excluded from CR000202 experiment scope.
- `S3U-1227` — CR000202 / environment / medium: Root installation is documented, but module-level dependency versions remain incompletely pinned and are not normalized independently.
- `S3U-1228` — CR000202 / reproducibility / medium: Historical result arrays and post-processing artifacts are static evidence only; their numerical validity was not revalidated.
- `S3U-1229` — CR000202 / scope / low: Caches, stored result variants and post-processing artifacts are retained as supporting evidence rather than independent experiments.

No new explicit conflict is introduced by S180. Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
