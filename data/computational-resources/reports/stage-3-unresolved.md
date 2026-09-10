# Computational Resources Stage 3 Unresolved Findings

Date: 2026-09-10
Latest checkpoint: `Stage3-S176`
Latest completed aggregate batch: `SOB018` — **PASS (10/10)**
Current batch: `SOB019` — **9/10**

## Cumulative status

- Unresolved findings: **1204**
- Explicit conflicts: **137**
- Next unresolved identifier: `S3U-1205`

## New findings in S176

- `S3U-1200` — medium — Stage 2 asserts no Atlas-paper relationship for CR000198; none is inferred.
- `S3U-1201` — medium — The environment manifest pins Python 3.8 but leaves the scientific package dependencies unversioned.
- `S3U-1202` — medium — Installation material is referenced, but a sufficiently complete installation procedure was not established in the bounded static evidence; this blocks R2.
- `S3U-1203` — medium — The wave-data generator fixes seed 31416 for one generation pass but instructs generating test data with a different seed without specifying that second seed.
- `S3U-1204` — medium — Stored notebook training/evaluation outputs are historical repository evidence; Stage 3 performed no executed validation.

## Continuation

Exact next resource: `CR000199`. Exact next checkpoint: `Stage3-S177`.
