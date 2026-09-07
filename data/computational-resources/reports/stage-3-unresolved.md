# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-07  
Current checkpoint: `Stage3-S109`  
Latest completed batch: `SOB011` — **PASS**  
Current batch: `SOB012` (6/10)  
Current unresolved count: **806**  
Next unresolved ID: `S3U-0807`  
Explicit conflict count: **108**

## Stage3-S109 additions — CR000122 and CR000123

- `S3U-0795` — CR000122 repository is unavailable at the authoritative Stage-2 state.
- `S3U-0796` — CR000122 has no pinned source snapshot.
- `S3U-0797` — CR000122 license and dependency environment remain unknown.
- `S3U-0798` — CR000122 source-internal experiments and configurations cannot be verified.
- `S3U-0799` — CR000122 data, checkpoints, and evaluation surface remain unknown.
- `S3U-0800` — CR000123 has no repository license identified at the pinned snapshot.
- `S3U-0801` — CR000123 has no dependency manifest or installation procedure.
- `S3U-0802` — CR000123 references `QG_120K_fullZ_std.nc`, which is not verified as bundled or inspected.
- `S3U-0803` — CR000123 does not document a random seed for the bounded training workflow.
- `S3U-0804` — CR000123 does not document a complete hardware profile.
- `S3U-0805` — CR000123 declares `num_epochs=8` while the effective `model.fit` call uses `epochs=100`.
- `S3U-0806` — CR000123 has no fixed machine-readable numerical acceptance target verified in the bounded source.

S109 adds **1 explicit conflict**, corresponding to the CR000123 epoch-parameter mismatch. Cumulative explicit conflict count is **108**.

## Batch status

`SOB012` is **6/10** after CR000123. Aggregate QA is not yet due; `SOB011` remains the latest completed aggregate batch with **PASS** status.

## Continuation

Continue from `S3U-0807` only if a later checkpoint generates a genuinely new unresolved finding. Exact next resource is `CR000124` for `Stage3-S110`.
