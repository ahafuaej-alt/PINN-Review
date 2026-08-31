# Computational Resources Stage 3 — Unresolved Technical Findings

Verification/extraction date: 2026-08-31  
Checkpoint: Stage3-P04  
Phase: approved pilot extraction

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

## Source-scope handling

`CR000010` continues to keep the upgraded repository implementation separate from the published architecture without treating the explicit upgrade as a conflict.

For `CR000163`, `PRL000007` is verified specifically for `CR000163-E001`: Atlas paper 44 gives the exact supporting notebook in its Data Availability Statement. `CR000163-E002` and `CR000163-E003` remain repository-only experiments and are not silently assigned to paper 44.

## Conflict handling

`S3U-0001` and `S3U-0002` remain the two explicit `conflicting_evidence` findings. No new conflicting-evidence item was created in P04.

## Escalation state

No Stage-2 resource identity or relationship defect was discovered in this checkpoint. The initially ambiguous paper-44 lookup was resolved against the authoritative Stage-2 relationship record and the correct primary paper, confirming `PRL000007`. Stage 2 remains closed and unchanged.

No current item requires execution to resolve within Stage 3. Items whose resolution would require running code remain bounded static reproducibility gaps.
