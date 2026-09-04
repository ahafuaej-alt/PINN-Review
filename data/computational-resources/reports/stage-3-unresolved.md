# Computational Resources Stage 3 — Unresolved Technical Findings

Verification/extraction date: 2026-09-04  
Checkpoint: Stage3-S063  
Phase: controlled scale-out in progress

## Audit continuity

The append-only register through `Stage3-S056` remains preserved in `reports/stage-3-unresolved-through-s056.md` as `S3U-0001`–`S3U-0437`. `Stage3-S057` added `S3U-0438`–`S3U-0445`; `Stage3-S058` added `S3U-0446`–`S3U-0451`; `Stage3-S059` added `S3U-0452`–`S3U-0458`; `Stage3-S060` added `S3U-0459`–`S3U-0465`; `Stage3-S061` added `S3U-0466`–`S3U-0473`; `Stage3-S062` added `S3U-0474`–`S3U-0482`. This active register continues without renumbering or deletion.

## Stage3-S063 additions

| ID | Resource | Outcome | Severity | Finding | Effect |
|---|---|---|---|---|---|
| S3U-0483 | CR000072 | `repository_license_absent` | medium | No repository license was identified at the authoritative pinned snapshot. | Reuse/legal clarity remains incomplete. |
| S3U-0484 | CR000072 | `dependency_manifest_absent` | medium | The pinned tree contains no requirements, environment, setup, package, or equivalent dependency manifest. | Exact environment reconstruction is not established. |
| S3U-0485 | CR000072 | `dependency_versions_unpinned` | medium | Theano, Lasagne and NumPy are imported but compatible versions are not pinned. | Static reproducibility remains R1. |
| S3U-0486 | CR000072 | `installation_specification_absent` | medium | No installation procedure defines a compatible Python/Theano/Lasagne runtime stack. | Recreating the workflow requires external judgment. |
| S3U-0487 | CR000072 | `legacy_python_runtime_unspecified` | medium | Source uses Python 2-era syntax/features including backtick repr and `cPickle`, but no Python version is declared. | Runtime compatibility is ambiguous. |
| S3U-0488 | CR000072 | `external_cifar_datasets_not_bundled` | medium | CIFAR-10 and CIFAR-100 must be downloaded and extracted into the working directory; dataset payloads are absent. | The reference workflow is not self-contained. |
| S3U-0489 | CR000072 | `random_seed_absent` | medium | No explicit random seed is set while shuffled batches and random cropping are used. | Exact stochastic replay is not established. |
| S3U-0490 | CR000072 | `hardware_and_run_provenance_absent` | low | No exact hardware provenance or archived model/run artifacts are bundled at the pinned snapshot. | Machine/run-level reproduction remains incomplete. |

## Current register state

- Current unresolved finding count: **490**.
- Next available unresolved ID: **`S3U-0491`**.
- Explicit `conflicting_evidence` finding count: **93**; S063 adds no explicit conflicts.

## Source-scope handling

`CR000072` preserves final Stage-2 authority for `https://github.com/loshchil/SGDR`, pinned commit `5269a615448b93d6ab5926b4402eaaf1dafca230`, no identified repository license, and verified official relationship `PRL000161` to Atlas paper 532.

The resource is represented as **supporting software / optimizer research code**. One bounded experiment captures SGDR Wide-ResNet image classification, with CIFAR-10 and CIFAR-100 represented as two configurations. No PINN/PDE semantics are assigned.

## Escalation state

No Stage-2 identity or relationship change is required. No schema or methodology change is required. The reproducibility gaps lower the static level to R1 but do not satisfy a Stage-3 hard-stop criterion because the accepted schemas represent them without scientific distortion.

`SOB007` now has **7 / 10** canonical members complete; aggregate batch QA is not yet due. The exact next independently extractable resource is `CR000073`.
