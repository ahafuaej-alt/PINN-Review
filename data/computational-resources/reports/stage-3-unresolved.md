# Computational Resources Stage 3 Unresolved Findings

Date: 2026-09-10
Latest checkpoint: `Stage3-S178`
Latest completed aggregate batch: `SOB019` — **PASS (10/10)**
Current batch: `SOB020` — **1/10**

## Cumulative status

- Unresolved findings: **1217**
- Explicit conflicts: **138**
- Next unresolved identifier: `S3U-1218`

## New findings in S178

- `S3U-1210` — medium — Stage 2 asserts no Atlas-paper relationship for CR000200; none is inferred.
- `S3U-1211` — medium — The CC-BY-NC-SA-4.0 license and separate patent/noncommercial warning are preserved without interpretation of their legal interaction.
- `S3U-1212` — medium — README says code and data are available upon request while the pinned tree bundles benchmark code, data and animations. This is an explicit conflict.
- `S3U-1213` — medium — The requirements file pins packages exactly but supplies no Python version or documented installation command.
- `S3U-1214` — high — All four data-driven entrypoints reference paths that do not match the bundled `data/` locations at the pinned tree layout.
- `S3U-1215` — high — `NS/NS.py` contains a bare undefined `example_libraries` expression and uses `optimizers` without importing it, blocking the entrypoint as written.
- `S3U-1216` — medium — The original hardware and accelerator environment are not specified.
- `S3U-1217` — medium — Bundled animations provide qualitative historical results, but immutable numerical targets, acceptance thresholds and reusable trained checkpoints are unavailable; no outputs were revalidated.

## Continuation

Exact next resource: `CR000201`. Exact next checkpoint: `Stage3-S179`.
