# Computational Resources Stage 3 — Unresolved Technical Findings

Verification/extraction date: 2026-09-04  
Checkpoint: Stage3-S068  
Phase: controlled scale-out in progress

## Audit continuity

The append-only register through `Stage3-S056` remains preserved in `reports/stage-3-unresolved-through-s056.md` as `S3U-0001`–`S3U-0437`. `Stage3-S057`–`Stage3-S067` added `S3U-0438`–`S3U-0523`. This active register continues without renumbering or deletion.

## Stage3-S068 additions

| ID | Resource | Outcome | Severity | Finding | Effect |
|---|---|---|---|---|---|
| S3U-0524 | CR000078 | `repository_license_unknown` | medium | Final Stage-2 authority records no detected license, and the pinned repository tree contains no license file. | License clarity remains unresolved. |
| S3U-0525 | CR000078 | `environment_not_pinned` | high | The pinned snapshot contains no dependency/environment manifest or package-version lock despite imports of PyTorch, SciPy, NumPy, torchvision, pyDOE, seaborn, and plotting utilities. | Exact software-environment reconstruction is blocked; R2+ is not justified. |
| S3U-0526 | CR000078 | `installation_not_documented` | medium | README contains the project description but no installation procedure or canonical execution command. | Workflow setup requires inference/manual reconstruction. |
| S3U-0527 | CR000078 | `hardware_provenance_not_reported` | medium | The inspected repository and representative notebook do not document the machine/GPU used for published runs. | Runtime comparability and performance provenance remain unavailable. |
| S3U-0528 | CR000078 | `partial_random_seed_control` | medium | The Burgers notebook sets `np.random.seed(1234)` but does not explicitly seed PyTorch, while network initialization and latent sampling use PyTorch randomness. | Exact stochastic replay is not controlled. |
| S3U-0529 | CR000078 | `pretrained_checkpoint_absent` | low | No pretrained PID-GAN checkpoint or immutable run artifact is bundled for the representative workflow; notebook execution outputs are absent. | Result-level replay cannot begin from an archived trained state. |
| S3U-0530 | CR000078 | `generator_loop_early_return` | high | `train_generator` declares `for gen_epoch in range(5)` but the `return` statement is inside that loop after the first update. | Static control flow performs one effective generator update per call, contradicting the apparent five-iteration loop intent and limiting exact workflow interpretation. |
| S3U-0531 | CR000078 | `bounded_multiworkflow_scope` | low | The repository contains multiple PDE, imperfect-physics, and comparator workflows; only one directly inspected PID-GAN benchmark is represented as an experiment under bounded extraction. | Remaining implementations are preserved as repository-scope evidence and are not synthesized into unsupported experiment records. |

## Current register state

- Current unresolved finding count: **531**.
- Next available unresolved ID: **`S3U-0532`**.
- Explicit `conflicting_evidence` finding count: **95**; S068 adds no explicit conflict.

## Source-scope handling

`CR000078` preserves final Stage-2 identity, pinned SHA, verified paper relationship, and unknown-license state. The repository README's official-implementation claim and multi-case-study scope are recorded as repository documentation; only the directly inspected Burgers PID-GAN code/notebook is promoted to a Stage-3 experiment/configuration.

Bundled data files are preserved as research/example data evidence and are not promoted into an independent reusable-dataset claim. The generator-loop early return is treated as an implementation defect within the pinned source, not converted into an external-source conflict.

## Escalation state

No hard-stop condition is present. The multi-workflow breadth and generator-loop defect are representable under the accepted schemas, while environment/reproducibility gaps remain non-blocking unresolved findings. No schema or methodology change is required.

`SOB008` is in progress at **3 / 10**. Aggregate QA is not yet due. The exact next independently extractable resource is `CR000079`.
