# Computational Resources Stage 3 Unresolved Findings

Date: 2026-09-09
Latest checkpoint: `Stage3-S171`
Latest completed aggregate batch: `SOB018` — **PASS (10/10)**
Current batch: `SOB019` — **3/10**

## Cumulative status

- Unresolved findings: **1181**
- Explicit conflicts: **135**
- Next unresolved identifier: `S3U-1182`

## New findings in S171

- `S3U-1176` — medium — No Atlas-paper relationship is asserted for the distinct NSFnets fork.
- `S3U-1177` — high — No repository license is identified at the pinned snapshot.
- `S3U-1178` — high — TensorFlow/NumPy environment and installation are unpinned; TensorFlow 1.x Session/contrib compatibility remains unspecified.
- `S3U-1179` — high — Beltrami boundary y/z/t/u/v/w arrays are constructed from `train1x`; explicit conflict.
- `S3U-1180` — high — Evaluation combines 1000 spatial rows with 100 time rows; explicit conflict.
- `S3U-1181` — medium — Checkpoint, immutable expected metric, hardware description, and executed validation are absent.

## Continuation

Exact next resource: `CR000193`. Exact next checkpoint: `Stage3-S172`.
