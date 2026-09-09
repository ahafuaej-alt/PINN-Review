# Computational Resources Stage 3 Unresolved Findings

Date: 2026-09-09
Latest checkpoint: `Stage3-S155`
Latest completed aggregate batch: `SOB016` — **PASS (10/10)**
Current batch: `SOB017` — **5/10**

## Cumulative status

- Unresolved findings: **1083**
- Explicit conflicts: **123**
- Next unresolved identifier: `S3U-1084`

## New findings in S155

- `S3U-1078` — low — Repository citation metadata is absent.
- `S3U-1079` — medium — No Python version or installation procedure is documented, and the CUDA-tagged PyTorch wheel source is not specified.
- `S3U-1080` — medium — Dataset selection, architecture and training controls are hard-coded in source.
- `S3U-1081` — high — The repository does not map all paper-reported experiments and results to runnable commands.
- `S3U-1082` — high — No pretrained checkpoints, reference metrics, tests or quantitative acceptance thresholds are bundled.
- `S3U-1083` — medium — Dataset contents and training behavior remain unvalidated within the static-only boundary.

No new explicit conflict is introduced. Full evidence links and scopes are retained in the S155 extraction log.

## Continuation

Exact next resource: `CR000174`. Exact next checkpoint: `Stage3-S156`.
