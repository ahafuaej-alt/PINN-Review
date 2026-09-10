# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-10
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S182`

## Current totals

- Unresolved findings: **1241**
- Explicit conflicts: **138**
- Next unresolved ID: `S3U-1242`

## New findings in S182

- `S3U-1236` — CR000204 / relationship / medium: Stage 2 preserves CR000204 as a distinct fork identity of CR000089 and asserts no independent Atlas-paper relationship; none is inferred.
- `S3U-1237` — CR000204 / license / high: No repository license is identified at the pinned commit.
- `S3U-1238` — CR000204 / environment / high: Only JAX 0.3.25 is declared; no complete dependency or environment manifest is present, so the accepted R2 environment gate is not satisfied.
- `S3U-1239` — CR000204 / installation / high: No repository installation procedure is documented.
- `S3U-1240` — CR000204 / provenance / medium: CR000204 and upstream CR000089 share the exact pinned commit, but their Stage-2 resource identities and Atlas relationship states remain distinct and must not be collapsed.
- `S3U-1241` — CR000204 / reproducibility / medium: Seed and hardware provenance are not established, and bundled trained/data artifacts are not tied to a unified portable environment and evaluation manifest.

No new explicit conflict is introduced by S182. Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
