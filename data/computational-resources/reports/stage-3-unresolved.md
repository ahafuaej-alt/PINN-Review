# Computational Resources Stage 3 Unresolved Findings

Date: 2026-09-09
Latest checkpoint: `Stage3-S160`
Latest completed aggregate batch: `SOB017` — **PASS (10/10)**
Current batch: `SOB018` — **1/10**

## Cumulative status

- Unresolved findings: **1118**
- Explicit conflicts: **123**
- Next unresolved identifier: `S3U-1119`

## New findings in S160

- `S3U-1113` — medium — CR000179 has no repository license identified at the pinned Stage-2 snapshot.
- `S3U-1114` — high — CR000179 has no dependency manifest, MATLAB release, required toolbox versions or installation procedure.
- `S3U-1115` — medium — The default CR000179 entrypoint loads bundled model/controller data whose producing runtime is unspecified.
- `S3U-1116` — low — No random-seed control is identified in the bounded representative workflow; relevance to every subroutine remains unknown.
- `S3U-1117` — medium — Bundled results and plotting logic exist, but no immutable numerical acceptance threshold is documented for the representative workflow.
- `S3U-1118` — low — Jet-aircraft, DDMR and comparison-method workflows were not individually normalized within this bounded checkpoint.

No new explicit conflict is introduced. Full evidence links and scopes are retained in the S160 extraction log.

## Continuation

Exact next resource: `CR000180`. Exact next checkpoint: `Stage3-S161`.
