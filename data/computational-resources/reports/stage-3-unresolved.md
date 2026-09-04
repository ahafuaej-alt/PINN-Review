# Computational Resources Stage 3 — Unresolved Technical Findings

Verification/extraction date: 2026-09-04  
Checkpoint: Stage3-S060  
Phase: controlled scale-out in progress

## Audit continuity

The append-only register through `Stage3-S056` remains preserved in `reports/stage-3-unresolved-through-s056.md` as `S3U-0001`–`S3U-0437`. `Stage3-S057` added `S3U-0438`–`S3U-0445`; `Stage3-S058` added `S3U-0446`–`S3U-0451`; `Stage3-S059` added `S3U-0452`–`S3U-0458`. This active register continues without renumbering or deletion.

## Stage3-S060 additions

| ID | Resource | Outcome | Severity | Finding | Effect |
|---|---|---|---|---|---|
| S3U-0459 | CR000069 | `dependency_manifest_absent` | medium | No requirements, environment, setup, conda, or equivalent dependency manifest was identified at the pinned commit. | Exact environment reconstruction is not established. |
| S3U-0460 | CR000069 | `dependency_versions_unpinned` | medium | TensorFlow, NumPy, SciPy, Matplotlib, pyDOE and related imports are visible but compatible versions are not pinned. | Static reproducibility remains R1. |
| S3U-0461 | CR000069 | `installation_specification_absent` | medium | No installation procedure defining the historical runtime stack is provided. | Recreating the original execution environment requires external judgment. |
| S3U-0462 | CR000069 | `legacy_tensorflow_compatibility_unresolved` | medium | Checked workflows use TensorFlow 1.x-era APIs including `tf.contrib.opt.ScipyOptimizerInterface`, while no exact TensorFlow version is declared. | Current-runtime compatibility cannot be asserted from static evidence. |
| S3U-0463 | CR000069 | `hardware_provenance_absent` | low | No exact CPU/GPU/hardware specification was identified for the checked workflows. | Machine-level performance reproduction remains incomplete. |
| S3U-0464 | CR000069 | `bundled_dataset_generation_provenance_incomplete` | low | Required MAT datasets are bundled, but generation solver/version/run provenance is not uniformly captured with the files. | Dataset availability is strong while upstream generation reproducibility remains incomplete. |
| S3U-0465 | CR000069 | `historical_maintenance_state` | low | The pinned README states that the repository is no longer actively maintained and recommends newer implementations. | Stage-3 preserves the authoritative historical pinned resource rather than silently substituting a modern implementation. |

## Current register state

- Current unresolved finding count: **465**.
- Next available unresolved ID: **`S3U-0466`**.
- Explicit `conflicting_evidence` finding count: **89**; S060 adds no new explicit conflict.

## Source-scope handling

`CR000069` preserves Stage-2 pilot authority for `https://github.com/maziarraissi/PINNs`, pinned commit `932f50a2d8ef4e80d1456bbae6887a73ff5166ef`, MIT license, and four verified source-scoped relationships: PRL000107/414 paper mention, PRL000121/447 supporting dependency, PRL000122/450 official, and PRL000158/526 dataset mention.

The resource is a **PINN implementation** spanning continuous/discrete PDE solution and discovery. Four bounded experiments represent Schrodinger inference, Navier-Stokes identification, KdV identification, and Allen-Cahn inference. Explicit NumPy and TensorFlow seeds are preserved as verified evidence rather than incorrectly recorded as missing.

## Escalation state

No Stage-2 identity or relationship change is required. No schema or methodology change is required. `SOB007` now has **4 / 10** canonical members complete; aggregate batch QA is not yet due.

The exact next independently extractable resource is `CR000070`.
