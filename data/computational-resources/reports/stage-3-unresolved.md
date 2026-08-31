# Computational Resources Stage 3 — Unresolved Technical Findings

Verification/extraction date: 2026-08-31  
Checkpoint: Stage3-P02  
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
| S3U-0010 | CR000056 | `configuration_detail_partial` | low | Adaptive-script internals were deeply inspected for diffusion; equivalent problem-specific adaptive hyperparameters for the other five experiments remain bounded. | Does not invalidate the 6 × 10 configuration ontology mapping; detailed values remain for refinement. |
| S3U-0011 | CR000227 | `environment_lock_unavailable` | low | `Project.toml` provides package compatibility ranges, but no root `Manifest.toml` locks a complete resolved environment at the pinned snapshot. | Exact dependency resolution is not statically reproducible; R2 is retained. |
| S3U-0012 | CR000087 | `license_unavailable` | medium | No repository license file was identified at the Stage-2 pinned commit. | License clarity remains unavailable. |
| S3U-0013 | CR000087 | `required_data_unavailable` | high | All four inspected experiment entrypoints reference files under `data/`, but the pinned repository tree contains no `data/` directory. | Blocks R3 end-to-end static reproducibility. |
| S3U-0014 | CR000087 | `entrypoint_static_defect` | high | `poisson_separable_cnn.py` creates two PRNG keys with `jax.random.split(key, 2)` and then unconditionally accesses `keys[2]`. | Repository-only Poisson entrypoint is statically inconsistent as written. |

## Conflict handling

`S3U-0001` and `S3U-0002` remain explicit `conflicting_evidence` findings. P02 introduces no new paper-versus-repository conflict: the repository-only Poisson example is source-scoped rather than falsely assigned to the primary paper.

The paper and repository can legitimately describe different experiment/configuration scopes. A difference is treated as a conflict only when the sources purport to define the same interface/default; otherwise source-specific facts are retained side by side.

## Escalation state

No Stage-2 resource identity or relationship defect was discovered in this checkpoint. Stage 2 remains closed and unchanged.

No item requires execution to be recorded accurately in Stage 3. Findings whose resolution would require running software or obtaining external experiment data remain bounded static reproducibility gaps.
