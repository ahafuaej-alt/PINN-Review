# Computational Resources Stage 3 — Unresolved Technical Findings

Verification/extraction date: 2026-09-04  
Checkpoint: Stage3-S064  
Phase: controlled scale-out in progress

## Audit continuity

The append-only register through `Stage3-S056` remains preserved in `reports/stage-3-unresolved-through-s056.md` as `S3U-0001`–`S3U-0437`. `Stage3-S057` added `S3U-0438`–`S3U-0445`; `Stage3-S058` added `S3U-0446`–`S3U-0451`; `Stage3-S059` added `S3U-0452`–`S3U-0458`; `Stage3-S060` added `S3U-0459`–`S3U-0465`; `Stage3-S061` added `S3U-0466`–`S3U-0473`; `Stage3-S062` added `S3U-0474`–`S3U-0482`; `Stage3-S063` added `S3U-0483`–`S3U-0490`. This active register continues without renumbering or deletion.

## Stage3-S064 additions

| ID | Resource | Outcome | Severity | Finding | Effect |
|---|---|---|---|---|---|
| S3U-0491 | CR000073 | `dependency_manifest_absent` | medium | No requirements, environment, setup, pyproject, or equivalent dependency manifest is present at the pinned snapshot. | Exact environment reconstruction is not established. |
| S3U-0492 | CR000073 | `dependency_versions_unpinned` | medium | PyTorch, NumPy, SciPy, pyDOE, pandas, and wandb are used without compatible version pins. | Static reproducibility remains R1. |
| S3U-0493 | CR000073 | `installation_specification_absent` | medium | No installation procedure defines a compatible runtime/software stack. | Recreating the workflow requires external judgment. |
| S3U-0494 | CR000073 | `external_mat_datasets_not_bundled` | medium | Training/reference MAT files are hosted externally through Google Drive rather than bundled at the pinned snapshot. | The reference workflows are not self-contained. |
| S3U-0495 | CR000073 | `random_seed_absent` | medium | No explicit random seed is set while Latin-hypercube sampling and torch permutations introduce stochasticity. | Exact stochastic replay is not established. |
| S3U-0496 | CR000073 | `external_wandb_service_required` | medium | `train_sweep.py` uses Weights & Biases sweep/agent APIs and requires a user account/credential for the documented online path. | The main sweep workflow depends on an external service not captured by the repository. |
| S3U-0497 | CR000073 | `hardware_provenance_absent` | low | No exact hardware provenance is reported; source selects CUDA when available and otherwise emits a CPU warning. | Machine-level reproduction remains incomplete. |
| S3U-0498 | CR000073 | `archived_run_artifacts_absent` | low | No immutable pretrained checkpoints or archived sweep/run outputs are bundled at the pinned snapshot. | Result-level replay cannot be verified statically. |

## Current register state

- Current unresolved finding count: **498**.
- Next available unresolved ID: **`S3U-0499`**.
- Explicit `conflicting_evidence` finding count: **93**; S064 adds no explicit conflicts.

## Source-scope handling

`CR000073` preserves final Stage-2 authority for `https://github.com/Shengfeng233/PINN-Preprocess`, pinned commit `ca2efdbe82792898ec7542c087a48c1df4a83609`, MIT license, and verified official relationship `PRL000162` to Atlas paper 533.

The resource is represented as a **PINN implementation** for preprocessing comparisons in 2D unsteady incompressible Navier–Stokes flow reconstruction. The README's statement that the idea applies to broader PDE classes is retained as documentation scope only; the bounded implementation record is not generalized beyond the source inspected.

## Escalation state

No Stage-2 identity or relationship change is required. No schema or methodology change is required. The reproducibility gaps lower the static level to R1 but do not satisfy a Stage-3 hard-stop criterion because the accepted schemas represent them without scientific distortion.

`SOB007` now has **8 / 10** canonical members complete; aggregate batch QA is not yet due. The exact next independently extractable resource is `CR000074`.
