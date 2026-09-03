# Computational Resources Stage 3 — Unresolved Technical Findings

Verification/extraction date: 2026-09-04  
Checkpoint: Stage3-S057  
Phase: controlled scale-out in progress

## Audit continuity

The complete append-only register through `Stage3-S056` is preserved verbatim in `reports/stage-3-unresolved-through-s056.md` and contains `S3U-0001`–`S3U-0437`. The active register continues that identifier sequence; historical findings are not renumbered, deleted, or reinterpreted.

## Stage3-S057 additions

| ID | Resource | Outcome | Severity | Finding | Effect |
|---|---|---|---|---|---|
| S3U-0438 | CR000066 | `dependency_manifest_absent` | medium | The pinned repository contains an executable TensorFlow/Python function-approximation script but no requirements, environment, package, or equivalent dependency manifest. | Direct runtime dependencies must be reconstructed from source imports rather than an authoritative environment contract. |
| S3U-0439 | CR000066 | `tensorflow_version_unpinned` | medium | `LAAF_FunApproxi.py` imports TensorFlow and scientific-Python dependencies without exact compatible version pins. | The historical runtime combination cannot be reconstructed exactly and R3 is withheld. |
| S3U-0440 | CR000066 | `installation_workflow_undocumented` | medium | The pinned README describes the LAAF method and citation but does not provide dependency-installation or environment-creation instructions for the visible Python workflow. | The R2 setup gate is not met even though an entrypoint is identifiable. |
| S3U-0441 | CR000066 | `missing_local_plotting_module` | high | `LAAF_FunApproxi.py` imports `newfig` and `savefig` from a local `plotting` module, but no `plotting.py` or equivalent module exists in the pinned repository tree. | The visible entrypoint is not self-contained as deposited and end-to-end execution readiness cannot be established. |
| S3U-0442 | CR000066 | `deep_benchmark_archive_payload_uninspected` | medium | The repository bundles `Deep_Learning_Benchmark.zip`; its companion README documents models, datasets, methods and a `main.py` command, but Stage 3 did not expand the archive. | Archive-internal implementation and configuration claims remain unverified beyond provider documentation and file presence. |
| S3U-0443 | CR000066 | `deep_benchmark_datasets_external` | low | The benchmark README names MNIST, CIFAR-10/100, SVHN, Fashion-MNIST, KMNIST and Semeion datasets, while those dataset payloads are not bundled in the visible repository tree. | Benchmark data acquisition remains external and was not performed in Stage 3. |
| S3U-0444 | CR000066 | `physics_informed_implementation_scope_not_established` | medium | The official paper and repository README cover deep and physics-informed neural networks, but the visible pinned executable source is a supervised one-dimensional function-approximation script and the separate benchmark archive is documented as deep-learning classification. | Stage 3 preserves the official relationship without manufacturing a PINN/PDE experiment or physics-loss implementation. |
| S3U-0445 | CR000066 | `expected_results_and_run_provenance_partial` | low | The visible script writes history/plot artifacts, but no immutable run manifest or complete machine-readable acceptance target binds outputs to exact dependency versions, environment and invocation. | Static result reproducibility remains incomplete even though source-level objective and output paths are recoverable. |

## Current register state

- Historical findings preserved through S056: **437** (`S3U-0001`–`S3U-0437`).
- Stage3-S057 additions: **8** (`S3U-0438`–`S3U-0445`).
- Current unresolved finding count: **445**.
- Next available unresolved ID: **`S3U-0446`**.
- Explicit `conflicting_evidence` finding count: **89**; S057 adds no new explicit conflict.

## Source-scope handling

`CR000066` preserves the final Stage-2 repository identity at pinned commit `02246c511efb1694d2740c33125b1403168ba0a1` and `PRL000155` official relationship to Atlas paper 517. Stage 3 classifies the resource as `mixed_other`: the visible Python source is a supervised one-dimensional LAAF function-approximation workflow, while `Deep_Learning_Benchmark.zip` is separately documented as a deep-learning classification benchmark package.

The paper and README describe locally adaptive activation functions for both deep and physics-informed neural networks, but the visible pinned executable source does not establish a PDE residual, boundary/initial-condition residual, or other physics-loss execution path. No PINN experiment is inferred. The ZIP archive was not expanded under the static-only boundary, so archive-internal implementation details remain provider-documented rather than independently verified.

## Conflict handling

Eighty-nine explicit `conflicting_evidence` findings remain through `Stage3-S057`. S057 adds none. Heterogeneous repository surfaces are retained as separate source scopes rather than treated as a contradiction.

## Escalation state

No Stage-2 identity or relationship change is required. Stage 1 and Stage 2 remain closed and unchanged. `SOB007` now has **1 / 10** canonical members complete. No unresolved item requires scientific workload execution within Stage 3; dependency installation, archive expansion, dataset download, training, evaluation, tests, or benchmarks remain outside the static-only boundary.

The exact next independently extractable resource is `CR000067`.
