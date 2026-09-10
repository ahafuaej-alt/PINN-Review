# Computational Resources Stage 3 Unresolved Findings

Date: 2026-09-10
Latest checkpoint: `Stage3-S172`
Latest completed aggregate batch: `SOB018` — **PASS (10/10)**
Current batch: `SOB019` — **4/10**

## Cumulative status

- Unresolved findings: **1187**
- Explicit conflicts: **137**
- Next unresolved identifier: `S3U-1188`

## New findings in S172

- `S3U-1182` — medium — Stage 2 asserts no Atlas-paper relationship for NSFnet; none is inferred.
- `S3U-1183` — high — No formal dependency manifest, pinned software environment, or installation procedure is available at the pinned snapshot.
- `S3U-1184` — medium — Hardware, project citation metadata, and reusable checkpoints are not available in the bounded repository evidence.
- `S3U-1185` — high — The KAN momentum residual implements viscous contributions with first derivatives rather than conventional second-derivative/Laplacian terms; explicit conflict.
- `S3U-1186` — high — The KAN upper-lid loss enforces `u=1` without an explicit `v=0` penalty while other walls enforce both velocity components; explicit conflict.
- `S3U-1187` — medium — Stored notebook outputs and bundled visual/result assets are historical repository artifacts; no executed validation was performed in Stage 3.

## Continuation

Exact next resource: `CR000194`. Exact next checkpoint: `Stage3-S173`.
