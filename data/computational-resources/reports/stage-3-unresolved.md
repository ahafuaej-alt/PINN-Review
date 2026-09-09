# Computational Resources Stage 3 Unresolved Findings

Date: 2026-09-09
Latest checkpoint: `Stage3-S165`
Latest completed aggregate batch: `SOB017` — **PASS (10/10)**
Current batch: `SOB018` — **7/10**

## Cumulative status

- Unresolved findings: **1148**
- Explicit conflicts: **124**
- Next unresolved identifier: `S3U-1149`

## New findings in S165

CR000185:

- `S3U-1138` — medium — No Atlas-paper relationship is asserted for the collection or `jax_dft`.
- `S3U-1139` — high — Project dependencies use minimum versions without a lockfile.
- `S3U-1140` — medium — Bundled ZIP/pickle artifacts lack checksums and normalized provenance.
- `S3U-1141` — medium — The representative example has no immutable expected-output threshold.
- `S3U-1142` — medium — The environment, tests, notebooks and example remain unexecuted.

CR000184:

- `S3U-1143` — high — No repository license is identified.
- `S3U-1144` — high — No dependency manifest, versions or installation instructions are supplied.
- `S3U-1145` — medium — Geometry/simulation artifacts lack complete upstream provenance and checksums.
- `S3U-1146` — medium — No automated tests or immutable quantitative threshold is provided.
- `S3U-1147` — medium — Notebook runtime, finite-element preprocessing and outputs remain unvalidated.
- `S3U-1148` — low — Hardware and training-time requirements are not reported.

No new explicit conflict is introduced. Full evidence links and scopes are retained in the S165 extraction logs.

## Continuation

Exact next resource: `CR000186`. Exact next checkpoint: `Stage3-S166`.
