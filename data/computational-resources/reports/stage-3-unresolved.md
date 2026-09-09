# Computational Resources Stage 3 Unresolved Findings

Date: 2026-09-09
Latest checkpoint: `Stage3-S167`
Latest completed aggregate batch: `SOB017` — **PASS (10/10)**
Current batch: `SOB018` — **9/10**

## Cumulative status

- Unresolved findings: **1158**
- Explicit conflicts: **126**
- Next unresolved identifier: `S3U-1159`

## New findings in S167

- `S3U-1154` — medium — No Atlas-paper relationship is asserted for this resource.
- `S3U-1155` — high — The legacy TensorFlow environment lacks Python/dependency versions, installation instructions and a lockfile.
- `S3U-1156` — medium — The declared Adam learning rate is unused by the optimizer constructor.
- `S3U-1157` — medium — Documentation says six MAT files while naming and bundling seven; both signals are retained as explicit conflict.
- `S3U-1158` — high — Reported results lack execution provenance/checkpoints and the long seven-case workload remains unexecuted.

One new explicit conflict is introduced (`S3U-1157`). Full evidence links and scopes are retained in the S167 extraction log.

## Continuation

Exact next resource: `CR000188`. Exact next checkpoint: `Stage3-S168`.
