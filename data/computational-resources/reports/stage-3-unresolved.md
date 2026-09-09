# Computational Resources Stage 3 Unresolved Findings

Date: 2026-09-09
Latest checkpoint: `Stage3-S158`
Latest completed aggregate batch: `SOB016` — **PASS (10/10)**
Current batch: `SOB017` — **8/10**

## Cumulative status

- Unresolved findings: **1102**
- Explicit conflicts: **123**
- Next unresolved identifier: `S3U-1103`

## New findings in S158

- `S3U-1096` — medium — No Atlas-paper relationship is asserted for this supporting software.
- `S3U-1097` — medium — The Linux/MPI/Dedalus environment was not recreated.
- `S3U-1098` — medium — Paper figures require manual source-parameter edits.
- `S3U-1099` — high — No reference figures or numeric checksums are bundled.
- `S3U-1100` — medium — Tests use unseeded random cases and one Dedalus MPI/deepcopy test is skipped.
- `S3U-1101` — low — Source use relies on path manipulation rather than package installation.
- `S3U-1102` — medium — Runtime, tests, Dedalus compatibility and figure outputs remain statically unvalidated.

No new explicit conflict is introduced. Full evidence links and scopes are retained in the S158 extraction log.

## Continuation

Exact next resource: `CR000177`. Exact next checkpoint: `Stage3-S159`.
