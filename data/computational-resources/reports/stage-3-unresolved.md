# Computational Resources Stage 3 Unresolved Findings

Date: 2026-09-09
Latest checkpoint: `Stage3-S161`
Latest completed aggregate batch: `SOB017` — **PASS (10/10)**
Current batch: `SOB018` — **2/10**

## Cumulative status

- Unresolved findings: **1123**
- Explicit conflicts: **124**
- Next unresolved identifier: `S3U-1124`

## New findings in S161

- `S3U-1119` — high — CR000180 has no formal dependency manifest, Python/TensorFlow/SciPy versions or installation procedure.
- `S3U-1120` — medium — The Ms. Pac-Man dataset and documented trained models are external rather than bundled at the pinned snapshot.
- `S3U-1121` — high — The generator learning-rate constant is `0.00004` while the adjacent source comment states the paper value is `0.04`; this 1000-fold discrepancy is retained as explicit conflicting evidence.
- `S3U-1122` — medium — No random-seed control is identified in the bounded representative workflow.
- `S3U-1123` — medium — Bundled historical summaries and GIF outputs exist, but no immutable numerical acceptance threshold is documented.

One new explicit conflict is introduced (`S3U-1121`). Full evidence links and scopes are retained in the S161 extraction log.

## Continuation

Exact next resource: `CR000181`. Exact next checkpoint: `Stage3-S162`.
