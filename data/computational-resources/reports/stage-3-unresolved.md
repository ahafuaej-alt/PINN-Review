# Computational Resources Stage 3 — Unresolved Findings

**Status:** active controlled register  
**Current checkpoint:** `Stage3-S074`  
**Current batch:** `SOB008`  
**Current unresolved count:** **578**  
**Next unresolved ID:** `S3U-0579`

## Register continuity

Historical findings `S3U-0001` through `S3U-0572` remain unchanged. S074 adds `S3U-0573` through `S3U-0578` for `CR000084`.

## Stage3-S074 additions

| ID | Resource | Finding | Confidence | Consequence |
|---|---|---|---|---|
| S3U-0573 | CR000084 | `scientific_implementation_not_available_in_pinned_snapshot` | high | No executable PINN workflow can be reconstructed from the authoritative repository snapshot. |
| S3U-0574 | CR000084 | `dependency_environment_specification_not_available` | high | Runtime/software reconstruction is unsupported. |
| S3U-0575 | CR000084 | `training_architecture_hyperparameters_not_available` | high | Paper-specific model/training details cannot be extracted from repository evidence. |
| S3U-0576 | CR000084 | `data_and_checkpoints_not_available` | high | Repository-only reproduction lacks study data/model artifacts. |
| S3U-0577 | CR000084 | `hardware_and_seed_provenance_not_available` | high | Computational provenance cannot be reconstructed. |
| S3U-0578 | CR000084 | `evaluation_and_expected_results_not_available` | high | No repository-contained target exists for reproduction validation. |

## Current register state

- Current unresolved finding count: **578**.
- Next available unresolved ID: **`S3U-0579`**.
- Explicit `conflicting_evidence` finding count: **97**; S074 adds **0**.

CR000084 preserves final Stage-2 identity, pinned SHA and verified official relationship to Atlas 593. The one-file pinned tree supports identity/documentation claims only; absent scientific implementation details remain unavailable.

No hard-stop condition is present. `SOB008` is **9 / 10**; aggregate QA is not yet due. Exact next resource: `CR000085`.
