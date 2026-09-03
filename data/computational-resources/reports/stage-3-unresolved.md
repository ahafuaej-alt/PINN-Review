# Computational Resources Stage 3 — Unresolved Technical Findings

Verification/extraction date: 2026-09-03  
Checkpoint: Stage3-S054  
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

## Stage3-S050 additions

| ID | Resource | Outcome | Severity | Finding | Effect |
|---|---|---|---|---|---|
| S3U-0377 | CR000058 | `dependency_manifest_absent` | medium | The pinned repository contains executable TensorFlow/Python case scripts but no requirements, environment, package, or equivalent dependency manifest. | Direct runtime dependencies must be reconstructed from source imports rather than an authoritative environment file. |
| S3U-0378 | CR000058 | `dependency_versions_unpinned` | medium | Source imports TensorFlow, NumPy, Matplotlib, pyDOE, and SciPy where applicable, but exact compatible package versions are not pinned. | The exact historical runtime cannot be reconstructed and R3 is withheld. |
| S3U-0379 | CR000058 | `installation_workflow_undocumented` | medium | README provides paper/citation context but no installation or environment-creation procedure. | Repository setup remains incomplete even though entrypoints are identifiable. |
| S3U-0380 | CR000058 | `runtime_hardware_scope_partial` | low | The 1D, L-shaped, and advection-diffusion scripts explicitly disable GPU use, while the 2D Poisson script uses a default TensorFlow session; no broader hardware specification is provided. | Hardware behavior is case-scoped rather than one repository-wide reproducibility contract. |
| S3U-0381 | CR000058 | `bundled_result_run_provenance_partial` | medium | Multiple result figures and an advection-diffusion record are bundled, but no run manifest binds those artifacts to an exact dependency environment, source invocation, or immutable configuration record. | Bundled outputs support result presence but not full run-level provenance. |
| S3U-0382 | CR000058 | `lshape_reference_binary_and_masking_scope_partial` | medium | The L-shaped case loads bundled `X_test.npy` and `y_ref.npy` arrays, and its plotting code replaces predicted values in the removed-quadrant index range with reference values before plotted error surfaces; the NPY payloads were not opened. | Reference-grid semantics and the numerical effect of the plotting mask remain bounded to static source evidence. |
| S3U-0383 | CR000058 | `advdiff_record_binary_payload_unopened` | low | `hpPINN_ADE_Iden_record.mat` is bundled with the inverse-problem results but remains unopened under the static-only boundary. | Numeric history stored in the MAT payload is not independently extracted or verified. |
| S3U-0384 | CR000058 | `inactive_option_space_unvalidated` | low | Scripts contain inactive PINN/VPINN switches, alternate variational forms, and L-shaped decompositions with 6, 8, 18, or 35 elements in addition to the active defaults. | Only active default configurations are materialized; alternate code branches remain unvalidated. |
| S3U-0385 | CR000058 | `exact_expected_numeric_targets_unreported` | low | The repository bundles plots and analytical/reference constructions but does not expose one machine-readable manifest of exact expected scalar errors, losses, or recovered coefficients for all four active cases. | Static comparison targets are incomplete at the scalar-metric level. |
| S3U-0386 | CR000058 | `output_path_relocation_ambiguous` | low | Some source scripts write result files to the current working directory while the pinned repository stores corresponding artifacts under `Results/` subdirectories, without a documented copy/move step. | Repository evidence does not fully establish the provenance operation that placed those artifacts in their bundled directories. |

## Stage3-S051 additions

| ID | Resource | Outcome | Severity | Finding | Effect |
|---|---|---|---|---|---|
| S3U-0387 | CR000060 | `transitive_dependency_lock_unavailable` | medium | PiNN supplies supported version ranges through `environment.yml`, `setup.py`, and auxiliary requirements files, but no single complete exact transitive lock covers the supported conda, pip, CPU-container, and GPU-container routes. | Exact byte-for-byte environment resolution remains route-dependent; resource-level R2 is supportable but an immutable application environment is not established. |
| S3U-0388 | CR000060 | `container_image_digest_unavailable` | medium | CPU and GPU Dockerfiles identify versioned base-image tags, but the pinned repository does not record immutable image digests for those external container bases. | Container source recipes are recoverable, while the exact external base-image bytes are not fixed by digest. |
| S3U-0389 | CR000060 | `application_dataset_not_fixed` | low | The reusable library supports multiple external atomic/molecular dataset loaders including CP2K, RuNNer, ANI-1, QM9, and DeePMD-kit formats rather than one canonical application dataset. | Dataset identity, split, preprocessing choices, and target variables remain caller/application scoped. |
| S3U-0390 | CR000060 | `paper_specific_experiment_bundle_not_applicable` | low | `PRL000148` and `PRL000263` are official relationships to PiNN library/suite papers; the repository is a reusable library and no single canonical paper-specific experiment/configuration/result bundle is identified at resource scope. | Stage 3 records zero experiments/configurations rather than manufacturing paper-specific cases from generic library capabilities. |
| S3U-0391 | CR000060 | `test_execution_unverified` | low | The repository contains a substantial `tests/` suite covering networks, models, I/O, equivariance and utilities, but Stage 3 did not execute it. | Runtime regression status remains unverified under the static-only boundary. |
| S3U-0392 | CR000060 | `container_workflow_unverified` | low | Docker and Singularity CPU/GPU recipes and run instructions were inspected statically only; no image was built, pulled, launched, or converted. | Container runtime behavior and external image availability remain unverified here. |

## Stage3-S052 additions

| ID | Resource | Outcome | Severity | Finding | Effect |
|---|---|---|---|---|---|
| S3U-0393 | CR000061 | `dependency_manifest_absent` | medium | The pinned applications repository contains SciANN/Python scripts and notebooks but no authoritative root requirements, environment, package, or equivalent dependency manifest for the materialized constitutive workflow. | The runtime environment must be reconstructed from source imports, so the R2 setup gate is not satisfied. |
| S3U-0394 | CR000061 | `dependency_versions_unpinned` | medium | Constitutive scripts import SciANN, NumPy, Matplotlib, and pandas without exact compatible version pins. | The historical dependency combination cannot be reconstructed exactly. |
| S3U-0395 | CR000061 | `installation_workflow_undocumented` | medium | The root README describes the repository as a collection of SciANN examples but does not provide an installation or environment-creation procedure. | A defined setup/use path is incomplete even though individual entrypoints are identifiable. |
| S3U-0396 | CR000061 | `sciann_core_version_unpinned` | medium | CR000061 depends on the separate SciANN core software but does not pin a SciANN release or commit, and Stage 3 does not import the environment of separate resource CR000062 by assumption. | Core-library compatibility remains unresolved at the applications-repository scope. |
| S3U-0397 | CR000061 | `binary_weight_and_large_payload_inspection_bounded` | medium | The constitutive stochastic workflow includes a bundled HDF5 transfer-learning weight and the repository contains additional large/binary data and model artifacts; these payloads were not opened during bounded static inspection. | Payload-internal metadata and exact trained-state contents remain unverified. |
| S3U-0398 | CR000061 | `bundled_result_run_provenance_partial` | medium | Several application folders include trained weights, result arrays, images, PDFs, or output histories, but no repository-wide immutable run manifest binds them to exact dependency versions and invocations. | Bundled outputs establish artifact presence without full run-level provenance. |
| S3U-0399 | CR000061 | `external_submodule_environment_scope` | low | `PINNeikonal` and `En-DeepONet` are pinned gitlinks to external repositories, but their dependency and execution contracts are outside the parent applications repository record. | Their technical environments are not inferred into CR000061 and remain separate source scopes. |
| S3U-0400 | CR000061 | `example_notebook_execution_unverified` | low | The repository contains many SciANN notebooks/scripts across PDEs, mechanics, fluids, and vibrations, but Stage 3 executed none of them. | Runtime behavior and reproducibility of the wider example suite remain unverified under the static-only boundary. |

## Stage3-S053 additions

| ID | Resource | Outcome | Severity | Finding | Effect |
|---|---|---|---|---|---|
| S3U-0401 | CR000062 | `license_badge_conflict` | medium | The exact repository `LICENSE`, `setup.py`, package metadata, and package initializer identify MIT, while the pinned README license badge claims Apache-2.0. | MIT remains authoritative from the exact license text; the Apache-2.0 badge is preserved as explicit conflicting documentation. |
| S3U-0402 | CR000062 | `runtime_compatibility_matrix_conflict` | medium | README states Python 3.8–3.10, reports last tests on Python 3.9/TensorFlow 2.10 and recommends TensorFlow/Keras 2.10; `requirements.txt` pins TensorFlow 2.8.1; CI uses Python 3.7–3.9; and packaging text retains older Python compatibility statements. | No single runtime compatibility matrix is authoritative across the pinned snapshot; R3 is withheld. |
| S3U-0403 | CR000062 | `dependency_declaration_contract_conflict` | medium | `requirements.txt` includes TensorFlow/Keras and a broad scientific/test/documentation stack, while active `setup.py` and egg-info requirements omit TensorFlow/Keras and expose a narrower dependency set. | Installation dependency resolution depends on the selected repository surface rather than one internally consistent package contract. |
| S3U-0404 | CR000062 | `transitive_dependency_lock_unavailable` | medium | Only protobuf and TensorFlow are exactly pinned in `requirements.txt`; most direct dependencies are unpinned and no complete transitive lock or immutable container environment is provided. | Exact environment reconstruction remains incomplete even though setup routes are documented. |
| S3U-0405 | CR000062 | `unmaintained_runtime_compatibility` | medium | The pinned README explicitly states that SciANN is no longer maintained and warns that Keras/TensorFlow changes rapidly. | Compatibility beyond the documented tested/recommended generations is not assured by the repository. |
| S3U-0406 | CR000062 | `application_contract_not_applicable` | low | SciANN is a reusable framework and `PRL000151` is its official framework-paper relationship; no single canonical application dataset, experiment, seed, checkpoint, or expected result is fixed at resource scope. | Stage 3 records zero experiments/configurations rather than manufacturing a paper run from generic framework capabilities. |
| S3U-0407 | CR000062 | `test_execution_unverified` | low | The repository contains `tests/test_api.py` and a CI workflow that runs pytest across a Python matrix, but Stage 3 did not execute the tests. | Runtime regression/API pass status remains unverified under the static-only boundary. |
| S3U-0408 | CR000062 | `example_and_accelerator_execution_unverified` | low | Root examples and CPU/GPU capability through TensorFlow/Keras were inspected statically only; no example, training, prediction, accelerator, or optional dependency workflow was executed. | Example and hardware runtime behavior remain unverified here. |

## Stage3-S054 additions

| ID | Resource | Outcome | Severity | Finding | Effect |
|---|---|---|---|---|---|
| S3U-0409 | CR000063 | `stage2_repository_snapshot_unavailable` | medium | Final Stage 2 verified the public GitLab Elvet project and `master` branch but did not expose a 40-character commit SHA or repository tree. | The closed Stage-2 state does not define an immutable repository snapshot for exact source-level reconstruction. |
| S3U-0410 | CR000063 | `provider_release_repository_lineage_partial` | medium | PyPI 1.0.2 supplies immutable source/wheel hashes and was released two days after the provider's May-2025 GitLab maintenance merge, but no byte comparison binds that package release to a GitLab revision. | The release is usable as provider package evidence but is not asserted byte-identical to repository `master`. |
| S3U-0411 | CR000063 | `tensorflow_version_generation_conflict` | medium | The 2021 paper documents TensorFlow >=2.4; PyPI 1.0.1 documents 2.4–2.10; current PyPI 1.0.2 leaves the TensorFlow version unspecified; and GitLab merge request !34 states that the updated code targets recent/latest TensorFlow, is incompatible with older versions around 2.10, and leaves TensorFlow unpinned in automatic testing. | No single TensorFlow version contract spans the paper and current package/repository generations; R3 is withheld. |
| S3U-0412 | CR000063 | `transitive_dependency_lock_unavailable` | medium | Current provider documentation specifies Python >=3.6, TensorFlow as mandatory, and matplotlib as optional, but no complete exact transitive dependency lock or immutable container environment is established by the inspected surfaces. | Exact environment reconstruction remains incomplete even though installation is documented. |
| S3U-0413 | CR000063 | `repository_tree_inspection_bounded` | medium | The GitLab project remains public, but the bounded primary-source interface used in Stage 3 did not expose a complete current repository tree and full 40-character head SHA. | Source-code claims are limited to Stage-2 identity, provider project metadata, documentation, package metadata, maintenance records, and the primary paper. |
| S3U-0414 | CR000063 | `application_contract_not_applicable` | low | Elvet is a reusable differential-equation/variational framework and `PRL000152` is its official software-paper relationship; no single canonical dataset, seed, experiment configuration, checkpoint, or expected result is fixed at resource scope. | Stage 3 records zero experiments/configurations rather than manufacturing paper or Colab examples into canonical runs. |
| S3U-0415 | CR000063 | `provider_test_pipeline_not_reexecuted` | low | GitLab merge request !34 reports passing tests/pipelines for the 2025 TensorFlow update, but Stage 3 did not execute or re-run that provider pipeline. | Runtime regression status is provider-reported evidence only, not independently verified execution. |
| S3U-0416 | CR000063 | `example_execution_unverified` | low | The official paper and provider documentation supply Schrödinger, catenary, ODE/PDE, variational, domain and fitting examples, including Colab links, but Stage 3 executed none of them. | Example runtime behavior and reported paper outcomes remain unverified under the static-only boundary. |

## Current register state

- Historical findings preserved through S047: **362** (`S3U-0001`–`S3U-0362`).
- Stage3-S048 additions: **6** (`S3U-0363`–`S3U-0368`).
- Stage3-S049 additions: **8** (`S3U-0369`–`S3U-0376`).
- Stage3-S050 additions: **10** (`S3U-0377`–`S3U-0386`).
- Stage3-S051 additions: **6** (`S3U-0387`–`S3U-0392`).
- Stage3-S052 additions: **8** (`S3U-0393`–`S3U-0400`).
- Stage3-S053 additions: **8** (`S3U-0401`–`S3U-0408`).
- Stage3-S054 additions: **8** (`S3U-0409`–`S3U-0416`).
- Current unresolved finding count: **416**.
- Next available unresolved ID: **`S3U-0417`**.
- Explicit `conflicting_evidence` finding count: **88**; S054 adds one explicit conflict.

## Source-scope handling

`CR000063` remains the final Stage-2 `https://gitlab.com/elvet/elvet` identity with default branch `master`, MIT license and `PRL000152` official relationship to Atlas 513. Stage 2's lack of an exposed commit SHA/tree remains authoritative. Current GitLab project/maintenance observations, provider documentation, PyPI package releases and primary-paper statements are retained as distinct source scopes; none is silently promoted into a Stage-2 snapshot.

The immutable PyPI 1.0.2 hashes establish package-artifact identity only. Stage 3 did not compare package bytes against GitLab and therefore does not claim repository/release equality. The paper and provider examples remain reusable-framework demonstrations and do not create experiment/configuration records.

`CR000062` remains the SciANN core framework; `CR000061` remains the separate SciANN applications/examples resource; `CR000060` remains the Pair-wise Interaction Neural Network supporting library; `CR000058` remains hp-VPINNs; `CR000057` remains PyDEns; `CR000049` remains PyTorch. `CR000021` remains a resolved Stage-2 provenance identity canonically mapped to `CR000184` and is not independently duplicated.

## Conflict handling

Eighty-eight explicit `conflicting_evidence` findings exist through `Stage3-S054`. S054 adds one: the TensorFlow-version generation conflict spanning the 2021 paper, historical/current PyPI metadata and the 2025 GitLab maintenance update. The finding remains at the software-environment generation scope and does not require modification of the closed Stage-2 identity or relationship record.

## Escalation state

No Stage-2 identity or relationship change is required. Stage 1 and Stage 2 remain closed and unchanged. The active batch is `SOB006`, with canonical completed scale-out members `CR000054`, `CR000055`, `CR000057`, `CR000058`, `CR000060`, `CR000061`, `CR000062`, and `CR000063`. `CR000056` and `CR000059` are pilot-complete and are not reprocessed.

The exact next independently extractable resource is `CR000064`. No unresolved item requires scientific workload execution within Stage 3; repository cloning, dependency/package installation, source-archive comparison, examples/Colab notebooks, tests/provider pipelines, training, prediction, accelerator workflows, or benchmarks remain outside the static-only boundary.
