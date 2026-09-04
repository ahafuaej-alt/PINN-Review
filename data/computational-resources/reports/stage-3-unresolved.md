# Computational Resources Stage 3 — Unresolved Technical Findings

Verification/extraction date: 2026-09-04  
Checkpoint: Stage3-S069  
Phase: controlled scale-out in progress

## Audit continuity

The append-only register through `Stage3-S056` remains preserved in `reports/stage-3-unresolved-through-s056.md` as `S3U-0001`–`S3U-0437`. `Stage3-S057`–`Stage3-S068` extend continuity through `S3U-0531`; historical checkpoint states remain preserved in Git. This active register continues without renumbering or deletion.

## Stage3-S069 additions

| ID | Resource | Outcome | Severity | Finding | Effect |
|---|---|---|---|---|---|
| S3U-0532 | CR000079 | `repository_license_unknown` | medium | Final Stage-2 authority detects no repository license, and no license file is present in the pinned tree. | License clarity remains unresolved. |
| S3U-0533 | CR000079 | `environment_not_pinned` | high | No dependency/environment manifest or package-version lock is present despite PyTorch, torchvision, NumPy, SciPy, pandas and related imports. | Exact software-environment reconstruction is blocked; R2+ is not justified. |
| S3U-0534 | CR000079 | `installation_not_documented` | medium | README describes the research code but provides no installation procedure or canonical end-to-end command. | Setup requires manual reconstruction. |
| S3U-0535 | CR000079 | `hardware_provenance_not_reported` | medium | No exact CPU/GPU/runtime-machine provenance is documented in the inspected repository sources. | Runtime and performance comparability remain unavailable. |
| S3U-0536 | CR000079 | `random_seed_not_reported` | high | No explicit NumPy/PyTorch seed was identified in the inspected synthetic or Norne entrypoints despite stochastic latent sampling and data transforms. | Exact stochastic replay is uncontrolled. |
| S3U-0537 | CR000079 | `host_specific_project_root` | medium | Both main entrypoints default `project_path` to `D:/`. | Repository-relative replay is not portable without manual path changes. |
| S3U-0538 | CR000079 | `external_simulator_execution_dependency` | high | The Norne precomputation path can invoke bundled `DSS.C.64.exe` through `subprocess.run` when precomputed data are unavailable. | Exact regeneration depends on an opaque platform-specific executable; Stage 3 did not execute it. |
| S3U-0539 | CR000079 | `conflicting_evidence` | high | Final Stage-2 authority records `no_bundled_research_dataset_identified`, while the same pinned tree contains `Dataset_norne` data files and simulator-output artifacts. | Dataset availability/classification remains source-conflicted and is preserved without rewriting Stage 2. |
| S3U-0540 | CR000079 | `bounded_multiworkflow_scope` | low | The repository contains distinct synthetic and Norne workflows plus custom forward-model, data-loader and simulator surfaces; S069 represents two main entrypoints but does not claim exhaustive execution-path coverage. | Remaining code surfaces are retained as repository-scope evidence rather than unsupported experiments. |

## Current register state

- Current unresolved finding count: **540**.
- Next available unresolved ID: **`S3U-0541`**.
- Explicit `conflicting_evidence` finding count: **96**; S069 adds one explicit conflict.

## Source-scope handling

`CR000079` preserves final Stage-2 identity, pinned SHA, verified official relationship `PRL000173` to Atlas paper 568, and unknown-license state. The pinned README and code are interpreted as W-NetGAN reservoir/seismic inversion research code, not generalized into unrelated PINN semantics.

The Stage-2 dataset-classification claim and pinned-tree observation are both retained. Bundled data artifacts are not promoted into an independently curated dataset resource, and the bundled DSS executable is not treated as validated software merely because it is present.

## Escalation state

No hard-stop condition is present. The dataset-classification conflict, portability gaps and optional simulator path are representable under the accepted schemas. No schema or methodology change is required.

`SOB008` is in progress at **4 / 10**. Aggregate QA is not yet due. The exact next independently extractable resource is `CR000080`.
