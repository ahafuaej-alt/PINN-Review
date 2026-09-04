# Computational Resources Stage 3 — Unresolved Technical Findings

Verification/extraction date: 2026-09-04  
Checkpoint: Stage3-S061  
Phase: controlled scale-out in progress

## Audit continuity

The append-only register through `Stage3-S056` remains preserved in `reports/stage-3-unresolved-through-s056.md` as `S3U-0001`–`S3U-0437`. `Stage3-S057` added `S3U-0438`–`S3U-0445`; `Stage3-S058` added `S3U-0446`–`S3U-0451`; `Stage3-S059` added `S3U-0452`–`S3U-0458`; `Stage3-S060` added `S3U-0459`–`S3U-0465`. This active register continues without renumbering or deletion.

## Stage3-S061 additions

| ID | Resource | Outcome | Severity | Finding | Effect |
|---|---|---|---|---|---|
| S3U-0466 | CR000070 | `dependency_manifest_absent` | medium | No requirements, environment, setup, conda, or equivalent dependency manifest was identified at the pinned commit. | Exact environment reconstruction is not established. |
| S3U-0467 | CR000070 | `dependency_versions_unpinned` | medium | PyTorch, NumPy, SciPy, pandas and pyDOE are visible in source but compatible versions are not pinned. | Static reproducibility remains R1. |
| S3U-0468 | CR000070 | `installation_specification_absent` | medium | No installation procedure defining a compatible runtime stack was identified. | Recreating the workflow requires external judgment. |
| S3U-0469 | CR000070 | `random_seed_absent` | medium | No explicit random seed is set or documented while Latin-hypercube sampling and `torch.randperm` are used. | Exact stochastic replay is not established. |
| S3U-0470 | CR000070 | `validation_dataset_external_not_bundled` | medium | The configured full validation file `cylinder_Re3900_ke_all_100snaps.mat` is linked externally in the README and absent from the pinned repository. | Static inspection can verify evaluation code but not self-contained validation-data availability. |
| S3U-0471 | CR000070 | `hardware_provenance_absent` | low | The code selects CUDA when available, but no exact CPU/GPU/hardware specification was identified. | Machine-level performance reproduction remains incomplete. |
| S3U-0472 | CR000070 | `repository_license_absent` | medium | No repository license was identified at the authoritative pinned snapshot. | Reuse/legal clarity remains incomplete. |
| S3U-0473 | CR000070 | `checkpoint_run_provenance_incomplete` | low | `write/NS_model_train.pt` is bundled, but the exact environment, seed, hardware and run metadata that produced it are not documented. | The archived checkpoint supports artifact availability but not exact-run provenance. |

## Current register state

- Current unresolved finding count: **473**.
- Next available unresolved ID: **`S3U-0474`**.
- Explicit `conflicting_evidence` finding count: **89**; S061 adds no new explicit conflict.

## Source-scope handling

`CR000070` preserves final Stage-2 authority for `https://github.com/Shengfeng233/PINN-for-NS-equation`, pinned commit `961d1e23a1a41ec1d7072c81a4ee9d43444e125e`, no identified repository license, and verified official relationship `PRL000159` to Atlas paper 526.

The resource is represented as a **PINN implementation** for sparse-data reconstruction of two-dimensional unsteady incompressible flow past a cylinder at `Re=3900`. One bounded experiment/configuration preserves the explicit 36-measurement workflow, incompressible Navier-Stokes residuals, architecture, training configuration, Latin-hypercube collocation sampling, and relative-L2 evaluation without promoting the external full validation MAT file to bundled data.

## Escalation state

No Stage-2 identity or relationship change is required. No schema or methodology change is required. `SOB007` now has **5 / 10** canonical members complete; aggregate batch QA is not yet due.

`CR000071` was bounded-preinspected only to determine pairing suitability. Its repository spans multiple PDE families and several optimizer/PINN variants, so it is intentionally deferred to its own checkpoint under the accepted complexity rule. The exact next independently extractable resource is `CR000071`.
