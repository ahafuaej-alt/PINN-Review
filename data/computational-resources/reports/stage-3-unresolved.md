# Computational Resources Stage 3 — Unresolved Findings

**Status:** active controlled register  
**Current checkpoint:** `Stage3-S071`  
**Current batch:** `SOB008`  
**Current unresolved count:** **558**  
**Next unresolved ID:** `S3U-0559`

This register preserves unresolved or bounded findings that do not justify modifying accepted Stage3-D01 methodology or schemas.

## Register continuity

- Historical Stage-3 findings remain unchanged: `S3U-0001` through `S3U-0549`.
- S071 adds `S3U-0550` through `S3U-0558` for `CR000081`.
- No prior finding was deleted or renumbered.

## Stage3-S071 additions

| ID | Resource | Finding | Confidence | Static evidence | Consequence |
|---|---|---|---|---|---|
| S3U-0550 | CR000081 | `license_unknown` | high | Final Stage-2 authority records license `unknown`; no license file is identified in the pinned repository tree. | License clarity remains unresolved. |
| S3U-0551 | CR000081 | `dependency_manifest_absent` | high | README reports package versions, but no requirements/environment/lock manifest is identified in the pinned tree. | Environment reconstruction is documentation-driven rather than manifest-driven. |
| S3U-0552 | CR000081 | `installation_not_documented` | high | README provides version requirements and workflow descriptions but no portable installation procedure. | Setup remains under-specified. |
| S3U-0553 | CR000081 | `cpu_support_vs_gpu_entrypoint_conflict` | high | README states CPU computation can be used, while principal entrypoints hard-code CUDA/GPU assumptions. | Preserve as explicit `conflicting_evidence`; runtime CPU portability is not inferred. |
| S3U-0554 | CR000081 | `hardware_provenance_not_reported` | high | Exact CPU/GPU model, OS, driver and runtime-machine provenance are not identified. | Performance/runtime reproduction remains under-specified. |
| S3U-0555 | CR000081 | `pretrained_checkpoints_not_available` | medium | No immutable pretrained full-PINN/SA-PINN or GPT-PINN checkpoints are identified in the bounded pinned-tree inspection. | Reported surrogate states require retraining rather than direct static replay. |
| S3U-0556 | CR000081 | `mixed_framework_environment_sensitivity` | medium | Allen–Cahn trains the self-adaptive PINN in TensorFlow, then converts weights into a PyTorch representation for GPT-PINN processing. | Reproduction depends on a mixed-framework environment whose installation is not pinned by a manifest. |
| S3U-0557 | CR000081 | `generated_result_state_not_immutable` | low | Entry points generate timing, loss, selected-neuron, parameter and solution files during execution; immutable canonical run artifacts are not established by the bounded snapshot. | Historical result reconstruction cannot be assumed without rerunning workflows. |
| S3U-0558 | CR000081 | `bounded_multiworkflow_scope` | low | The repository contains three PDE families plus legacy/original scripts; S071 represents the principal current entrypoint workflows without claiming exhaustive script-level replay. | Remaining implementation detail is retained as source scope rather than inflated into additional experiments. |

## Current register state

- Current unresolved finding count: **558**.
- Next available unresolved ID: **`S3U-0559`**.
- Explicit `conflicting_evidence` finding count: **97**; S071 adds **1** explicit conflict.

## Source-scope handling

`CR000081` preserves final Stage-2 identity, pinned SHA, verified official relationship `PRL000180` to Atlas paper 578, Stage-2 bundled-data classification, and unknown-license state. The repository is represented as a PINN implementation for GPT-PINN meta-learning over parametric PDEs, with distinct Klein–Gordon, Burgers and Allen–Cahn workflows.

README claims, current source-code behavior, and Stage-2 claims remain separately scoped. In particular, CPU support is preserved as documentation while hard-coded CUDA/GPU assumptions are preserved as implementation evidence. No execution was used to adjudicate runtime behavior.

## Escalation state

No hard-stop condition is present. The environment, installation, portability, checkpoint, mixed-framework and boundedness limitations are representable under the accepted schemas. No schema or methodology change is required.

`SOB008` is in progress at **6 / 10**. Aggregate QA is not yet due. The exact next independently extractable resource is `CR000082`.
