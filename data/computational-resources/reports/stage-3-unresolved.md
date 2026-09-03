# Computational Resources Stage 3 — Unresolved Technical Findings

Verification/extraction date: 2026-09-03  
Checkpoint: Stage3-S049  
Phase: controlled scale-out in progress

## Audit continuity

The complete append-only register through `Stage3-S047` is preserved verbatim in `reports/stage-3-unresolved-through-s047.md` and contains `S3U-0001`–`S3U-0362`. The active register continues that identifier sequence; historical findings are not renumbered, deleted, or reinterpreted.

## Stage3-S048 additions

| ID | Resource | Outcome | Severity | Finding | Effect |
|---|---|---|---|---|---|
| S3U-0363 | CR000049 | `transitive_dependency_lock_unavailable` | medium | PyTorch declares build and development dependencies with a mixture of lower bounds and unversioned requirements, but no single complete transitive lock covers all supported build/runtime variants. | Exact environment resolution remains variant-dependent. |
| S3U-0364 | CR000049 | `platform_accelerator_matrix_partial` | medium | Source-build documentation supports CPU, NVIDIA CUDA, AMD ROCm, and Intel GPU paths that depend on external compiler, driver, accelerator, and compatibility selections. | One exact cross-platform hardware/runtime matrix cannot be reconstructed from the repository alone. |
| S3U-0365 | CR000049 | `build_variant_selection_unfixed` | medium | The framework intentionally exposes multiple valid source-build and binary-install contracts rather than one canonical paper/application environment. | Framework-level R2 is supportable, but a unique application environment is not implied. |
| S3U-0366 | CR000049 | `example_execution_unverified` | low | Framework examples and documentation were inspected only as capability evidence and were not executed under the Stage-3 static-only boundary. | Example runtime behavior remains unverified here. |
| S3U-0367 | CR000049 | `test_execution_unverified` | low | The repository contains broad test/CI infrastructure, but no test suite was executed in Stage 3. | Runtime regression status remains unverified here. |
| S3U-0368 | CR000049 | `paper_result_bundle_not_applicable` | low | PRL000130 is a software-mention relationship from an automatic-differentiation survey; CR000049 does not deposit a paper-specific dataset, checkpoint, or generated result bundle for Atlas paper 467. | The relationship remains framework/software context rather than reproduced paper results. |

## Stage3-S049 additions

| ID | Resource | Outcome | Severity | Finding | Effect |
|---|---|---|---|---|---|
| S3U-0369 | CR000057 | `packaging_metadata_generation_conflict` | medium | `setup.py` advertises Python 3.5–3.7 and broad lower-bound scientific dependencies, while `pyproject.toml` requires Python `^3.8`, BatchFlow with `nn` extras and torchvision `^0.14`. | No single packaging generation can be treated as the uniquely authoritative runtime contract without additional provenance. |
| S3U-0370 | CR000057 | `requirements_manifest_empty` | medium | The root `requirements.txt` is present but empty, while dependencies are declared elsewhere and README project-repository installation tells users to install dependencies manually. | The requirements file alone cannot reconstruct the environment. |
| S3U-0371 | CR000057 | `batchflow_submodule_documentation_conflict` | medium | README says recursive cloning is required so a BatchFlow submodule is cloned, but the pinned `.gitmodules` file is empty and no BatchFlow submodule is present at the root. | The documented repository-clone dependency path does not match the pinned tree. |
| S3U-0372 | CR000057 | `tutorial_path_documentation_conflict` | low | One README link points to `tutorials/PDE_solving.ipynb`, while the pinned tutorial tree contains only `tutorials/1. Solving PDEs.ipynb`. | That documentation path does not resolve verbatim in the pinned snapshot. |
| S3U-0373 | CR000057 | `transitive_dependency_lock_unavailable` | medium | Neither packaging generation supplies one complete exact transitive environment, and README explicitly leaves PyTorch build/version selection to the user. | Exact environment reconstruction remains incomplete and R3 is not assigned. |
| S3U-0374 | CR000057 | `application_contract_not_applicable` | low | PyDEns is a reusable differential-equation framework rather than one fixed Atlas-paper application workflow. | Application-specific data, seed, hardware, checkpoint and numeric-target requirements remain caller scoped. |
| S3U-0375 | CR000057 | `tutorial_example_execution_unverified` | low | The tutorial and example notebook were inspected only as repository capability evidence and were not executed. | Runtime example behavior remains unverified under the static-only boundary. |
| S3U-0376 | CR000057 | `test_execution_unverified` | low | The repository test converts tutorial notebooks to Python and executes them, but Stage 3 did not run that test. | Runtime regression/tutorial-pass status remains unverified here. |

## Current register state

- Historical findings preserved through S047: **362** (`S3U-0001`–`S3U-0362`).
- Stage3-S048 additions: **6** (`S3U-0363`–`S3U-0368`).
- Stage3-S049 additions: **8** (`S3U-0369`–`S3U-0376`).
- Current unresolved finding count: **376**.
- Next available unresolved ID: **`S3U-0377`**.
- Explicit `conflicting_evidence` finding count: **84**; S049 adds three conflicts.

## Source-scope handling

`CR000057` remains the Stage-2-pinned PyDEns framework identity at commit `748175c4e77d407a5dc593d2f104ce6edddc3126`. `PRL000095` remains a `secondary_review_mention` from Atlas paper 401. `PRL000140` remains the official relationship to the PyDEns framework paper, Atlas paper 492. Framework APIs, packaging, solver mathematics, tutorial/test surfaces and installation instructions are recorded at resource scope; no paper-specific experiment or configuration is manufactured.

`CR000049` remains the Stage-2-pinned PyTorch supporting-framework identity and `PRL000130` remains strictly a software mention to Atlas paper 467.

`CR000021` remains Stage-2 provenance for a broken source identity canonically resolved to `CR000184`; it is not independently duplicated in Stage 3.

## Conflict handling

Eighty-four explicit `conflicting_evidence` findings exist through `Stage3-S049`. S049 contributes three source/documentation conflicts: packaging-generation metadata, BatchFlow-submodule clone guidance, and one stale tutorial path. These are bounded to CR000057 and require no Stage-2 modification or source repair.

## Escalation state

No Stage-2 identity or relationship change is required. Stage 1 and Stage 2 remain closed and unchanged. The active batch is `SOB006`, with canonical completed scale-out members `CR000054`, `CR000055`, and `CR000057`; `CR000056` remains pilot-complete and is not reprocessed.

The exact next independently extractable resource is `CR000058`. No unresolved item requires scientific workload execution within Stage 3; runtime, dependency installation, notebooks, tutorials, tests, differential-equation solves, optimization, training, inference, or benchmark execution remain outside the static-only boundary.
