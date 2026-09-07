# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-07  
Current checkpoint: `Stage3-S117`  
Latest completed batch: `SOB012` — **PASS**  
Current batch: `SOB013` (5/10)  
Current unresolved count: **859**  
Next unresolved ID: `S3U-0860`  
Explicit conflict count: **111**

## Stage3-S117 additions — CR000132

- `S3U-0854` — final Stage-2 inspection did not expose CR000132's recursive repository tree, so dependency manifests and sub-root workflow declarations remain unverified.
- `S3U-0855` — a complete version-pinned software environment was not established from authoritative static repository evidence.
- `S3U-0856` — executable entrypoints and exact repository-to-paper script mappings remain unverified at the pinned snapshot.
- `S3U-0857` — random seeds were not established in the bounded evidence.
- `S3U-0858` — availability of released trained checkpoints was not established.
- `S3U-0859` — paper-reported scientific settings are preserved as paper-scoped evidence because repository-internal confirmation of those settings was incomplete.

S117 adds **0 explicit conflicts**. Cumulative explicit conflict count remains **111**.

## Batch status

`SOB012` remains **PASS (10/10)**. `SOB013` is **5/10** after CR000132.

## Continuation

Continue from `S3U-0860` only for genuinely new findings. Exact next resource is `CR000133` for `Stage3-S118`.
