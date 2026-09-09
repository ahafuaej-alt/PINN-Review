# Computational Resources Stage 3 Unresolved Findings

Date: 2026-09-09
Latest checkpoint: `Stage3-S166`
Latest completed aggregate batch: `SOB017` — **PASS (10/10)**
Current batch: `SOB018` — **8/10**

## Cumulative status

- Unresolved findings: **1153**
- Explicit conflicts: **125**
- Next unresolved identifier: `S3U-1154`

## New findings in S166

- `S3U-1149` — medium — No Atlas-paper relationship is asserted for this supporting resource.
- `S3U-1150` — medium — README says unmaintained while GitHub reports `archived=false`; both signals are retained as explicit conflict.
- `S3U-1151` — high — Dependencies are unversioned and there is no environment lock.
- `S3U-1152` — medium — PNAS evaluation data and pretrained checkpoints are external without pinned checksums.
- `S3U-1153` — medium — The demo has no immutable numeric threshold and the software remains unexecuted.

One new explicit conflict is introduced (`S3U-1150`). Full evidence links and scopes are retained in the S166 extraction log.

## Continuation

Exact next resource: `CR000187`. Exact next checkpoint: `Stage3-S167`.
