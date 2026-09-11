# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-11
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S187`

## Current totals

- Unresolved findings: **1270**
- Explicit conflicts: **141**
- Next unresolved ID: `S3U-1271`

## New findings in S187

- `S3U-1265` — CR000209 / license / high: No repository license is identified at the pinned commit.
- `S3U-1266` — CR000209 / environment / high: No formal dependency/environment manifest, version pins, or repository installation procedure is present for the eighteen notebooks.
- `S3U-1267` — CR000209 / data / high: README directs users to external Google Drive datasets that are not bundled in the pinned repository; external payload inspection is outside this checkpoint.
- `S3U-1268` — CR000209 / archive / medium: Posting.zip is bundled at the pinned commit but remains uninspected; its contents are not promoted to experiments, datasets, or results.
- `S3U-1269` — CR000209 / citation / medium: No project self-citation metadata is identified in final Stage-2 authority.
- `S3U-1270` — CR000209 / reproducibility / medium: Notebook-specific seeds, device metadata and hyperparameters are not established consistently across all eighteen configurations; repository-wide hardware provenance remains unknown.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
