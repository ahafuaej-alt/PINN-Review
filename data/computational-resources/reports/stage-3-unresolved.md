# Computational Resources Stage 3 — Unresolved Technical Findings

Verification/extraction date: 2026-09-04  
Checkpoint: Stage3-S066  
Phase: controlled scale-out in progress

## Audit continuity

The append-only register through `Stage3-S056` remains preserved in `reports/stage-3-unresolved-through-s056.md` as `S3U-0001`–`S3U-0437`. `Stage3-S057`–`Stage3-S065` added `S3U-0438`–`S3U-0505`. This active register continues without renumbering or deletion.

## Stage3-S066 additions

| ID | Resource | Outcome | Severity | Finding | Effect |
|---|---|---|---|---|---|
| S3U-0506 | CR000075 | `repository_license_unavailable` | medium | Final Stage-2 authority and the pinned tree identify no repository license. | License clarity remains unavailable. |
| S3U-0507 | CR000075 | `dependency_versions_unpinned` | medium | README lists NumPy, SciPy, sklearn, PyTorch, matplotlib, seaborn, and pandas without versions. | Exact environment reconstruction is not established. |
| S3U-0508 | CR000075 | `installation_procedure_absent` | medium | No installation command or environment/bootstrap file is provided in the pinned snapshot. | Reproduction requires unstated setup decisions. |
| S3U-0509 | CR000075 | `external_active_turbulence_data_required` | medium | Active-turbulence workflows depend on an externally hosted MAT dataset documented by README. | Full workflow replay is not repository-self-contained. |
| S3U-0510 | CR000075 | `expected_data_layout_absent` | high | `solve_vort_square.py` loads `../data/meso_bacterial_turbulence_IFRK4_N{dms}_2pi_dt0p01_Tmax10.mat`, but the pinned tree contains no `data` directory. | The documented workflow cannot be replayed from the repository snapshot alone without manual external-data placement. |
| S3U-0511 | CR000075 | `conflicting_evidence` | high | The Poisson CLI comment maps methods as `0 vanilla, 1 ann, 2 old ann, 3 max avg, 4 optimal`, while the implemented branches use method 0 for gradient-std adaptive weighting, method 3 for MGDA-style weighting, method 4 for vanilla, and method 5 for analytical optimal weighting. | Method semantics must be taken from code branches; the contradictory comment is preserved explicitly. |
| S3U-0512 | CR000075 | `runtime_hardware_provenance_absent` | medium | Exact Python/PyTorch/CUDA/OS and hardware provenance are not recorded. | Static reproducibility remains R1. |
| S3U-0513 | CR000075 | `result_artifacts_not_pinned` | low | The source writes models/results during training, but immutable pretrained checkpoints and complete result artifacts are not present in the pinned tree. | Result-level replay cannot be checked statically from bundled artifacts. |

## Current register state

- Current unresolved finding count: **513**.
- Next available unresolved ID: **`S3U-0514`**.
- Explicit `conflicting_evidence` finding count: **94**; S066 adds one explicit conflict.

## Source-scope handling

`CR000075` preserves final Stage-2 authority for `https://github.com/mosaic-group/inverse-dirichlet-pinn`, pinned commit `157a3ed4f401e6d94940872ac6e91fa95c0405d3`, no identified repository license, and verified official relationship `PRL000166` to Atlas paper 540.

Repository README claims the code should be sufficient to reproduce manuscript results; Stage 3 retains that as repository documentation rather than upgrading it to a reproducibility conclusion. The R1 assessment is based on the pinned source and its missing environment/data provenance.

## Escalation state

No Stage-2 identity or relationship change is required. No schema or methodology change is required. The method-comment conflict and reproducibility gaps are representable by accepted Stage-3 semantics and do not satisfy a hard-stop criterion.

`SOB007` is complete at **10 / 10** and aggregate QA is PASS. The exact next independently extractable resource is `CR000076`, first member of `SOB008`.