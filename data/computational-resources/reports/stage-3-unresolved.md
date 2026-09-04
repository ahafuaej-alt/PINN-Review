# Computational Resources Stage 3 — Unresolved Technical Findings

Verification/extraction date: 2026-09-04  
Checkpoint: Stage3-S070  
Phase: controlled scale-out in progress

## Audit continuity

The append-only register through `Stage3-S056` remains preserved in `reports/stage-3-unresolved-through-s056.md` as `S3U-0001`–`S3U-0437`. `Stage3-S057`–`Stage3-S069` extend continuity through `S3U-0540`; historical checkpoint states remain preserved in Git. This active register continues without renumbering or deletion.

## Stage3-S070 additions

| ID | Resource | Outcome | Severity | Finding | Effect |
|---|---|---|---|---|---|
| S3U-0541 | CR000080 | `repository_license_unknown` | medium | Final Stage-2 authority detects no repository license, and the pinned tree contains no license file. | License clarity remains unresolved. |
| S3U-0542 | CR000080 | `environment_not_pinned` | high | No dependency/environment manifest or package-version lock is present despite TensorFlow/Keras, pandas, NumPy, scikit-learn and related imports. | Exact software-environment reconstruction is blocked; R2+ is not justified. |
| S3U-0543 | CR000080 | `installation_not_documented` | medium | The 59-byte README and notebook provide no portable installation procedure or canonical end-to-end command. | Setup requires manual reconstruction. |
| S3U-0544 | CR000080 | `external_data_not_bundled` | high | The pinned repository contains only README.md and ssm_cnn_kernel.ipynb, while numerical and experimental sections load external data files. | End-to-end replay is impossible from the repository snapshot alone. |
| S3U-0545 | CR000080 | `host_specific_experimental_data_path` | high | Experimental validation reads from `D:/research work/Pyhsical SSM-CNN/data/`. | Data access is non-portable without manual path and file reconstruction. |
| S3U-0546 | CR000080 | `hardware_provenance_not_reported` | medium | No exact CPU/GPU/runtime-machine provenance is documented in inspected repository sources. | Runtime and performance comparability remain unavailable. |
| S3U-0547 | CR000080 | `model_training_seed_incomplete` | medium | Both train/validation splits use `random_state=0`, but no TensorFlow/Keras/NumPy model-training seed was identified. | Dataset partitioning is controlled while stochastic model replay remains uncontrolled. |
| S3U-0548 | CR000080 | `pretrained_checkpoint_not_available` | medium | Save/load cells refer to model files, but no immutable trained-model artifact is bundled in the two-file pinned tree. | Reported model state cannot be reconstructed without retraining or external artifacts. |
| S3U-0549 | CR000080 | `bounded_multiworkflow_scope` | low | The 3.8 MB notebook combines numerical and experimental studies and paired baseline/physics-informed models; S070 represents the principal workflow families but does not claim exhaustive cell-level replay. | Remaining notebook detail is retained as source scope rather than unsupported additional experiments. |

## Current register state

- Current unresolved finding count: **549**.
- Next available unresolved ID: **`S3U-0550`**.
- Explicit `conflicting_evidence` finding count: **96**; S070 adds no explicit conflict.

## Source-scope handling

`CR000080` preserves final Stage-2 identity, corrected canonical owner spelling, pinned SHA, verified official relationship `PRL000174` to Atlas paper 569, and unknown-license state. The notebook is represented as structural-response research code with numerical and experimental validation workflows; no generalized PINN semantics are manufactured beyond the source's explicit physics-informed SSM-CNN claim.

Notebook historical outputs are treated only as archived static repository content. They were not regenerated or independently validated. External CSV references and the host-specific path are retained as reproducibility gaps rather than inferred as bundled data.

## Escalation state

No hard-stop condition is present. The external-data, environment, seed and portability limitations are representable under the accepted schemas. No schema or methodology change is required.

`SOB008` is in progress at **5 / 10**. Aggregate QA is not yet due. The exact next independently extractable resource is `CR000081`.
