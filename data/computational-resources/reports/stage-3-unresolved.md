# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-10
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S179`

## Current totals

- Unresolved findings: **1223**
- Explicit conflicts: **138**
- Next unresolved ID: `S3U-1224`

## New findings in S179

- `S3U-1218` — CR000201 / relationship / medium: Stage 2 asserts no Atlas-paper relationship for CR000201; none is inferred.
- `S3U-1219` — CR000201 / legal / medium: No repository license is identified at the pinned commit.
- `S3U-1220` — CR000201 / environment / medium: README lists broad course requirements but no formal dependency manifest, exact versions, or installation workflow is identified.
- `S3U-1221` — CR000201 / reproducibility / medium: Bundled saved models, logs and notebook outputs are historical static artifacts; their runtime validity and numerical reproducibility were not assessed.
- `S3U-1222` — CR000201 / scope / low: Duplicate notebook checkpoints, logs, PDFs and binary artifacts are retained as supporting course artifacts rather than counted as independent experiments.
- `S3U-1223` — CR000201 / hardware / medium: Original hardware, accelerator environment and seed controls are not consistently documented across the mapped tutorial surfaces.

No new explicit conflict is introduced by S179. Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
