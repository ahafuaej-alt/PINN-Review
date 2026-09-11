# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-11
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S186`

## Current totals

- Unresolved findings: **1264**
- Explicit conflicts: **141**
- Next unresolved ID: `S3U-1265`

## New findings in S186

- `S3U-1259` — CR000208 / license / high: No repository license is identified at the pinned commit.
- `S3U-1260` — CR000208 / environment / high: No formal dependency/environment manifest, version pins, or repository installation procedure is present for the nine notebooks.
- `S3U-1261` — CR000208 / citation / medium: README cites tutorial/source literature and upstream repositories, while final Stage-2 authority records no project self-citation metadata; none is inferred.
- `S3U-1262` — CR000208 / identity / medium: CR000208 is a distinct GitHub fork of CR000202 at an older pinned snapshot; no CR000202 relationship or later upstream content is inherited.
- `S3U-1263` — CR000208 / data / medium: `Burgers.mat` and `Euler.mat` are bundled tutorial inputs, but no independent dataset version, license, or provenance manifest is provided.
- `S3U-1264` — CR000208 / reproducibility / medium: Repository-level seed and hardware provenance are not established by bounded static inspection; scientific execution is prohibited.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
