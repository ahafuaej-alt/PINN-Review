# Computational Resources Stage 3 Unresolved Findings

Date: 2026-09-10
Latest checkpoint: `Stage3-S177`
Latest completed aggregate batch: `SOB019` — **PASS (10/10)**
Current batch: `SOB020` — **0/10**

## Cumulative status

- Unresolved findings: **1209**
- Explicit conflicts: **137**
- Next unresolved identifier: `S3U-1210`

## New findings in S177

- `S3U-1205` — medium — Stage 2 asserts no Atlas-paper relationship for CR000199; none is inferred.
- `S3U-1206` — medium — The representative example imports PhysicsNeMo-Sym, but its README delegates installation to a separate repository and does not pin an exact compatible example-local version.
- `S3U-1207` — medium — The representative training entrypoint reports no random seed or deterministic-algorithm setting.
- `S3U-1208` — medium — The workflow writes field plots but provides no bundled reference result, numerical metric or acceptance threshold; this blocks R4.
- `S3U-1209` — medium — The 2,348-file Stage-2 framework tree was intentionally bounded to one directly extractable PINN example; heterogeneous remaining workflows were not individually normalized or executed.

## Continuation

Exact next resource: `CR000200`. Exact next checkpoint: `Stage3-S178`.
