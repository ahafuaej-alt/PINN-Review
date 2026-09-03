# Computational Resources Stage 3 — Unresolved Technical Findings

Verification/extraction date: 2026-09-04  
Checkpoint: Stage3-S058  
Phase: controlled scale-out in progress

## Audit continuity

The complete append-only register through `Stage3-S056` remains preserved in `reports/stage-3-unresolved-through-s056.md` as `S3U-0001`–`S3U-0437`. `Stage3-S057` added `S3U-0438`–`S3U-0445`. This active register continues without renumbering or deletion.

## Stage3-S058 additions

| ID | Resource | Outcome | Severity | Finding | Effect |
|---|---|---|---|---|---|
| S3U-0446 | CR000067 | `external_cifar10_payload` | low | The bounded image-classification workflow uses CIFAR-10 through repository data-loading/torchvision logic; the dataset payload is not bundled at the pinned commit. | Exact historical data acquisition remains external and no dataset download was performed. |
| S3U-0447 | CR000067 | `gpu_hardware_not_exactly_reported` | low | The reference workflow selects CUDA device 0 and pins CUDA/PyTorch versions, but the exact paper-era GPU hardware is not specified in the bounded repository instructions. | Machine-level performance reproduction is incomplete. |
| S3U-0448 | CR000067 | `deterministic_replay_not_guaranteed` | medium | The entrypoint seeds Torch and CUDA but enables `cudnn.benchmark=True` without an explicit deterministic-algorithm setting. | The seed does not establish bitwise deterministic replay across compatible systems. |
| S3U-0449 | CR000067 | `run_manifest_absent` | low | README identifies scripts intended to reproduce paper Table 2, but no immutable run manifest binds a specific result/checkpoint to the pinned commit, environment and machine state. | Historical result provenance remains weaker than the static setup specification. |
| S3U-0450 | CR000067 | `additional_framework_surfaces_bounded` | low | TensorFlow and transformer/fairseq AdaHessian implementations are present in the pinned repository but are not exhaustively materialized as independent experiments in this bounded checkpoint. | Repository scope is preserved without inflating experiment multiplicity; later exhaustive enumeration is not implied. |
| S3U-0451 | CR000067 | `external_pip_distribution` | low | The top-level README recommends `torch_optimizer` for pip installation, which is an external package rather than a package release of the pinned repository itself. | Pip-install guidance is provider-documented but does not establish identity equivalence with the pinned source tree. |

## Current register state

- Historical findings through S056: **437**.
- Stage3-S057 additions: **8**.
- Stage3-S058 additions: **6** (`S3U-0446`–`S3U-0451`).
- Current unresolved finding count: **451**.
- Next available unresolved ID: **`S3U-0452`**.
- Explicit `conflicting_evidence` finding count: **89**; S058 adds no new explicit conflict.

## Source-scope handling

`CR000067` preserves the final Stage-2 canonical repository `https://github.com/amirgholami/adahessian`, pinned commit `85ebc00ce873c8497a64ca80bbfa5d996109efea`, MIT license, and `PRL000156` official relationship to Atlas paper 519, *ADAHESSIAN: An Adaptive Second Order Optimizer for Machine Learning*.

The resource is **supporting software**, not a PINN implementation. The repository contains multiple implementation surfaces (PyTorch image classification, TensorFlow, and transformer/fairseq). Because this is a materially broad software resource, S058 is a single-resource checkpoint. The explicit PyTorch CIFAR-10/ResNet reproduction workflow is materialized as the stable experiment/configuration; the additional implementation families remain bounded repository facts.

## Conflict handling

The cumulative explicit conflict count remains **89**. No new consequential source conflict is introduced in S058.

## Escalation state

No Stage-2 identity or relationship change is required. No schema or methodology change is required. Stage 1 and Stage 2 remain closed. `SOB007` now has **2 / 10** canonical members complete; aggregate batch QA is not yet due.

The exact next independently extractable resource is `CR000068`.
