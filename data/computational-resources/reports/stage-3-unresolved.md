# Computational Resources Stage 3 — Unresolved Technical Findings

Verification/extraction date: 2026-09-04  
Checkpoint: Stage3-S059  
Phase: controlled scale-out in progress

## Audit continuity

The append-only register through `Stage3-S056` remains preserved in `reports/stage-3-unresolved-through-s056.md` as `S3U-0001`–`S3U-0437`. `Stage3-S057` added `S3U-0438`–`S3U-0445`; `Stage3-S058` added `S3U-0446`–`S3U-0451`. This active register continues without renumbering or deletion.

## Stage3-S059 additions

| ID | Resource | Outcome | Severity | Finding | Effect |
|---|---|---|---|---|---|
| S3U-0452 | CR000068 | `repository_license_unavailable` | medium | No repository license file was identified at the pinned Stage-2 commit. | Reuse terms remain unavailable from the inspected source snapshot. |
| S3U-0453 | CR000068 | `dependency_manifest_absent` | medium | The repository tree contains research scripts but no requirements, conda, setup, or equivalent dependency manifest. | Exact environment reconstruction is not established. |
| S3U-0454 | CR000068 | `dependency_versions_unpinned` | medium | TensorFlow, NumPy, Matplotlib, SciPy, seaborn, and pandas imports are visible, but compatible versions are not pinned. | Static reproducibility is limited to R1. |
| S3U-0455 | CR000068 | `random_seed_unreported` | medium | The inspected workflows use stochastic NumPy sampling and TensorFlow initialization without an explicit seed in the entrypoints. | Deterministic replay is not established. |
| S3U-0456 | CR000068 | `hardware_provenance_absent` | low | No exact CPU/GPU/hardware specification was identified in the pinned repository documentation or bounded workflows. | Machine-level performance reproduction remains incomplete. |
| S3U-0457 | CR000068 | `reference_csv_provenance_incomplete` | low | Lid-driven-cavity `reference_u.csv` and `reference_v.csv` are bundled and consumed by the evaluation script, but no solver/version/run manifest is bundled with them. | Reference values are usable as repository evidence but their generation provenance remains incomplete. |
| S3U-0458 | CR000068 | `mode_family_bounded` | low | Source exposes M1–M4 model modes and modified encoder logic for M3/M4, while the three checked entrypoints activate M1; exhaustive mode-by-problem enumeration is outside bounded extraction. | Capability is preserved without artificially multiplying configurations. |

## Current register state

- Current unresolved finding count: **458**.
- Next available unresolved ID: **`S3U-0459`**.
- Explicit `conflicting_evidence` finding count: **89**; S059 adds no new explicit conflict.

## Source-scope handling

`CR000068` preserves final Stage-2 identity for `https://github.com/PredictiveIntelligenceLab/GradientPathologiesPINNs`, pinned commit `93e752b0e3b541818d5cca49b681f4957bc36808`, and `PRL000157` official relationship to Atlas paper 525.

The resource is a **PINN implementation** with three explicit computational-physics workflows: 2D Helmholtz, nonlinear Klein–Gordon, and lid-driven-cavity incompressible Navier–Stokes. The repository also implements gradient-statistics adaptive weighting and modified architecture modes intended to mitigate PINN gradient pathologies.

## Escalation state

No Stage-2 identity or relationship change is required. No schema or methodology change is required. `SOB007` now has **3 / 10** canonical members complete; aggregate batch QA is not yet due.

The exact next independently extractable resource is `CR000069`.
