# Computational Resources Stage 3 — Unresolved Technical Findings

Verification/extraction date: 2026-08-31  
Checkpoint: Stage3-S001
Phase: controlled scale-out in progress

## Current unresolved items

| ID | Resource | Outcome | Severity | Finding | Effect |
|---|---|---|---|---|---|
| S3U-0001 | CR000003 | `repository_paper_conflict` | medium | Repository README quick-start does not match the inspected model/trainer call signatures. | Blocks a verified documented quick-start workflow. |
| S3U-0002 | CR000003 | `repository_paper_conflict` | medium | YAML defaults and runtime defaults disagree on dropout, scheduler, and batch size; YAML-to-runtime wiring was not established. | Prevents treating the YAML as the verified executed default. |
| S3U-0003 | CR000003 | `checkpoint_artifact_unavailable` | high | `ExpMechMain_nn.m` requires two files under `stress_model/`, but the pinned tree does not contain them. | Blocks the static end-to-end dynamic-fracture workflow. |
| S3U-0004 | CR000003 | `dependency_version_unknown` | low | Dependencies use lower bounds rather than exact pins. | Does not block R2, but limits environment precision. |
| S3U-0005 | CR000003 | `citation_metadata_partial` | low | Repository README citation section remains TBD although the verified paper relationship exists. | Repository-local citation metadata remains incomplete. |
| S3U-0006 | CR000056 | `dependency_version_unknown` | medium | All requirements are unversioned. | Environment cannot be reconstructed at exact package versions. |
| S3U-0007 | CR000056 | `dependency_manifest_incomplete` | high | Sampling scripts import `skopt`, but `scikit-optimize` is absent from `requirements.txt`. | Blocks R2 environment/install sufficiency. |
| S3U-0008 | CR000056 | `installation_workflow_unavailable` | medium | README supplies paper/code links but no installation command or complete setup workflow. | Blocks R2. |
| S3U-0009 | CR000056 | `random_seed_unknown` | low | Explicit random seeds were not established in inspected static sources. | Retained as a reproducibility gap. |
| S3U-0010 | CR000056 | `configuration_detail_partial` | low | Adaptive-script internals were deeply inspected for diffusion; equivalent problem-specific adaptive hyperparameters for the other five experiments remain bounded. | Does not invalidate the 6 × 10 configuration ontology mapping. |
| S3U-0011 | CR000227 | `dependency_lock_unavailable` | low | `Project.toml` provides package compatibility ranges but no root `Manifest.toml` locks one complete environment. | Limits environment precision at the framework level. |
| S3U-0012 | CR000087 | `required_problem_data_unavailable` | high | Four inspected entrypoints require files under `data/`, but the pinned repository tree contains no `data/` directory. | Blocks R3 for the inspected operator-learning workflows. |
| S3U-0013 | CR000087 | `license_unavailable` | medium | No repository license file was identified at the Stage-2 pinned commit. | License clarity is unavailable for the pinned snapshot. |
| S3U-0014 | CR000087 | `entrypoint_static_inconsistency` | high | `poisson_separable_cnn.py` creates two PRNG keys and then unconditionally accesses `keys[2]`. | Blocks the repository-only Poisson entrypoint as written. |
| S3U-0015 | CR000059 | `dependency_version_not_exact` | medium | `setup.py` declares minimum compatible dependency versions rather than an exact resolved environment. | Prevents an exact static environment reconstruction and keeps the library-level assessment at R2. |
| S3U-0016 | CR000163 | `dependency_manifest_unavailable` | medium | The pinned repository has no requirements file, environment file, `pyproject.toml`, or equivalent manifest; notebook imports are unversioned and one notebook installs QuTiP without a version. | Prevents a verified environment specification and blocks R2. |
| S3U-0017 | CR000163 | `installation_workflow_unavailable` | medium | The pinned repository has no README or repository-level installation/runtime workflow. | Usable notebooks exist, but reproducibility remains at R1. |
| S3U-0018 | CR000217 | `dependency_version_not_exact` | medium | `setup.py` names the JAX-Fluids runtime dependencies without exact version constraints; the build metadata only lower-bounds setuptools. | The representative workflow can reach R3, but one exact resolved software environment cannot be reconstructed from the pinned source alone. |
| S3U-0019 | CR000217 | `expected_result_reference_unavailable` | low | The representative Sod workflow defines output fields and visualizations, but no quantified pinned reference values, regression artifact, or validation tolerance were established in the bounded static inspection. | Blocks R4 for `CR000217-E001-C001`; no external or textbook solution is substituted. |
| S3U-0020 | CR000268 | `deep_archive_inspection_deferred` | medium | The RSS V6 directory and authoritative provider/catalogue metadata were inspected, but no NetCDF payload was downloaded/opened, no checksums were captured, and the complete file inventory was not normalized. | Product-level extraction reaches R3, but file-level end-to-end validation is deliberately insufficient for R4. |
| S3U-0021 | CR000091 | `archive_payload_direct_inspection_deferred` | medium | The Zenodo DOI is the authoritative CR identity, but its payload was not directly unpacked or byte-compared with the `accepted_version` GitHub release used as archive-equivalent technical evidence. | Software identity and paper relationship remain verified, but exact byte-level archive equivalence is not claimed. |
| S3U-0022 | CR000091 | `dependency_manifest_incomplete` | high | `ModalPINN_VortexShedding.py` imports `GPUtil`, while the accepted-release `requirements.txt` does not declare GPUtil. | The declared installation manifest is incomplete and blocks R4 for the representative dense workflow. |
| S3U-0023 | CR000091 | `repository_paper_conflict` | high | Paper 605 reports successful asynchronous-sensor resynchronisation, but the accepted-release `DesyncSparseData` branch references undefined `Delta_t_np_pitot` and then uses `Delta_phi_tf_pitot` although it is assigned only in the opposite branch. | `CR000091-E001-C005` is retained as `conflicting_evidence`; Stage 3 does not repair or reconcile the source. |
| S3U-0024 | CR000001 | `immutable_snapshot_unavailable` | low | The corrected official solver documentation is available, but Stage 2 did not pin a repository commit for this documentation resource. | The current project snapshot is supporting evidence only; CR000001 remains R1 and no executable example is promoted to an experiment. |
| S3U-0025 | CR000002 | `required_problem_data_external` | medium | The PI-MPN workflow requires `dataset/xc-lpr/od.npy`; the pinned repository bundles adjacency and POI files but directs users to an external download for the OD-flow payload. | The configuration reaches R3 from the documented retrieval path but direct data availability is only partially verified and R4 is blocked. |
| S3U-0026 | CR000002 | `evaluation_reference_assignment_inconsistent` | high | `Exp_Main.test()` assigns observed `batch_y` to `pred` and model `outputs` to `true` before calling metric functions whose signatures expect prediction then reference. | MAE/MSE/RMSE remain symmetric, but MAPE and R2 are direction-sensitive; archived direction-sensitive values are not accepted as verified numerical targets and R4 is blocked. |

## Source-scope handling

`CR000010` continues to keep the upgraded repository implementation separate from the published architecture without treating the explicit upgrade as a conflict.

For `CR000163`, `PRL000007` is verified specifically for `CR000163-E001`: Atlas paper 44 gives the exact supporting notebook in its Data Availability Statement. `CR000163-E002` and `CR000163-E003` remain repository-only experiments and are not silently assigned to paper 44.

For `CR000217`, the two framework-paper DOIs documented by the repository are citation metadata for JAX-Fluids itself; they are not converted into Atlas relationships. Stage 2 explicitly records no Atlas relationship, and Stage 3 preserves that state. The broader example corpus is also not automatically converted into dozens of experiment/configuration records; P05 materializes only the representative pinned Sod workflow needed to test the simulator/solver profile.

For `CR000268`, the RSS provider metadata define the global V6 product, while Atlas paper 50 defines one Pacific-region use/preprocessing pipeline. Its April 2015–December 2022 temporal selection, EN4.2.2 co-location, polarization/look-angle handling, and quality-control rules remain `reported_in_primary_paper` facts and are not generalized to the provider dataset. The three official product-family DOIs remain citation metadata under one `CR000268` identity.

For `CR000091`, the Zenodo DOI remains the authoritative archive identity. The `GRaynaud/ModalPINN_Python_code` `accepted_version` tag is used only as archive-equivalent technical evidence because the paper cites the Zenodo software DOI and the tagged release states that it corresponds to the paper release. The GitHub release is not silently substituted as a new CR identity, and byte-level equivalence is not claimed.

## Conflict handling

`S3U-0001`, `S3U-0002`, `S3U-0023`, and `S3U-0026` are the four explicit `conflicting_evidence` findings through Stage3-S001. Each retains the bounded observations instead of rewriting a source or accepting an affected claim without qualification.

## Escalation state

No Stage-2 resource identity or relationship defect was discovered in P07. `PRL000193` remains verified and Stage 2 remains closed and unchanged.

The ten-resource pilot and scale-out checkpoint Stage3-S001 are complete. No unresolved item requires scientific workload execution within Stage 3; items requiring runtime reproduction, external-data inspection, direct archive comparison, or binary dataset inspection remain explicit bounded limitations for later stages.
