# Computational Resources Stage 3 — Unresolved Findings

**Status:** active controlled register  
**Current checkpoint:** `Stage3-S072`  
**Current batch:** `SOB008`  
**Current unresolved count:** **566**  
**Next unresolved ID:** `S3U-0567`

## Register continuity

Historical findings `S3U-0001` through `S3U-0558` remain unchanged. S072 adds `S3U-0559` through `S3U-0566` for `CR000082`.

## Stage3-S072 additions

| ID | Resource | Finding | Confidence | Static evidence | Consequence |
|---|---|---|---|---|---|
| S3U-0559 | CR000082 | `atlas_citation_not_in_repository_metadata` | medium | README cites the FVMN architecture paper; Stage-2 primary-paper evidence establishes `PRL000183 → Atlas 591`. | Preserve Stage-2 authority; do not manufacture Atlas citation metadata. |
| S3U-0560 | CR000082 | `bundled_array_provenance_bounded` | medium | README calls Assets “dummy input”; U/T arrays are bundled and used by the workflow. | Workflow availability is verified, but study-level provenance is not upgraded. |
| S3U-0561 | CR000082 | `global_training_seed_not_reported` | high | Split uses `random_state=42`, but no global NumPy/PyTorch seed is set. | Exact stochastic retraining state is undetermined. |
| S3U-0562 | CR000082 | `hardware_provenance_not_reported` | high | CUDA is selected when available; exact machine hardware is absent. | Runtime/performance reproduction remains under-specified. |
| S3U-0563 | CR000082 | `pretrained_checkpoints_not_available` | high | Workflow writes `best_model.pth` and `last_model.pth`; neither is bundled. | Direct canonical trained-state replay is unavailable. |
| S3U-0564 | CR000082 | `expected_results_not_documented` | high | Loss/residual logging is implemented, but no expected validation targets are documented. | R4 is blocked. |
| S3U-0565 | CR000082 | `heat_residual_formula_todo` | high | `ResidualNaturalConvection.py` contains `TODO: Check the formula`. | Heat-residual correctness remains unresolved and partially verified. |
| S3U-0566 | CR000082 | `next_solver_scope_requires_separate_checkpoint` | high | CR000083 is the full OpenFOAM 2.1.x distribution, separately linked as `PRL000184`. | S072 stops after CR000082; CR000083 remains next. |

## Current register state

- Current unresolved finding count: **566**.
- Next available unresolved ID: **`S3U-0567`**.
- Explicit `conflicting_evidence` finding count: **97**; S072 adds **0**.

CR000082 preserves final Stage-2 identity, MIT license, pinned SHA, bundled-data classification and verified official relationship. Stage 3 does not relabel supervised FVMN training as a classical PINN merely because physics residuals are used during rollout monitoring.

No hard-stop condition is present. `SOB008` is **7 / 10**; aggregate QA is not yet due. Exact next resource: `CR000083`.
