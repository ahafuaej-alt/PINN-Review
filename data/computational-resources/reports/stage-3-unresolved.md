# Computational Resources Stage 3 — Unresolved Technical Findings

Verification/extraction date: 2026-09-04  
Checkpoint: Stage3-S062  
Phase: controlled scale-out in progress

## Audit continuity

The append-only register through `Stage3-S056` remains preserved in `reports/stage-3-unresolved-through-s056.md` as `S3U-0001`–`S3U-0437`. `Stage3-S057` added `S3U-0438`–`S3U-0445`; `Stage3-S058` added `S3U-0446`–`S3U-0451`; `Stage3-S059` added `S3U-0452`–`S3U-0458`; `Stage3-S060` added `S3U-0459`–`S3U-0465`; `Stage3-S061` added `S3U-0466`–`S3U-0473`. This active register continues without renumbering or deletion.

## Stage3-S061 additions

| ID | Resource | Outcome | Severity | Finding | Effect |
|---|---|---|---|---|---|
| S3U-0466 | CR000070 | `dependency_manifest_absent` | medium | No requirements, environment, setup, conda, or equivalent dependency manifest was identified at the pinned commit. | Exact environment reconstruction is not established. |
| S3U-0467 | CR000070 | `dependency_versions_unpinned` | medium | PyTorch, NumPy, SciPy, pandas and pyDOE are visible in source but compatible versions are not pinned. | Static reproducibility remains R1. |
| S3U-0468 | CR000070 | `installation_specification_absent` | medium | No installation procedure defining a compatible runtime stack was identified. | Recreating the workflow requires external judgment. |
| S3U-0469 | CR000070 | `random_seed_absent` | medium | No explicit random seed is set or documented while Latin-hypercube sampling and `torch.randperm` are used. | Exact stochastic replay is not established. |
| S3U-0470 | CR000070 | `validation_dataset_external_not_bundled` | medium | The configured full validation file `cylinder_Re3900_ke_all_100snaps.mat` is linked externally in the README and absent from the pinned repository. | Static inspection can verify evaluation code but not self-contained validation-data availability. |
| S3U-0471 | CR000070 | `hardware_provenance_absent` | low | The code selects CUDA when available, but no exact CPU/GPU/hardware specification was identified. | Machine-level performance reproduction remains incomplete. |
| S3U-0472 | CR000070 | `repository_license_absent` | medium | No repository license was identified at the authoritative pinned snapshot. | Reuse/legal clarity remains incomplete. |
| S3U-0473 | CR000070 | `checkpoint_run_provenance_incomplete` | low | `write/NS_model_train.pt` is bundled, but the exact environment, seed, hardware and run metadata that produced it are not documented. | The archived checkpoint supports artifact availability but not exact-run provenance. |

## Stage3-S062 additions

| ID | Resource | Outcome | Severity | Finding | Effect |
|---|---|---|---|---|---|
| S3U-0474 | CR000071 | `installation_manifest_command_conflict` | high | README prescribes `pip install -r requirements.txt`, while the pinned manifest uses Conda-export-style single-equals version/build entries. | The documented installation route does not establish dependable environment reconstruction; explicit conflict preserved. |
| S3U-0475 | CR000071 | `main_model_constructor_signature_mismatch` | high | `main.py` passes an extra positional `betas` argument to all three primary benchmark constructors relative to their pinned signatures. | The documented main benchmark entrypoint is statically blocked before model construction; explicit conflict preserved. |
| S3U-0476 | CR000071 | `run_script_klein_gordon_token_mismatch` | high | `run_dcgd.sh` passes `klein-gordon`, but `main.py` selects the Klein-Gordon branch only for `klein_gordon`. | The scripted Klein-Gordon benchmark does not select its intended model branch; explicit conflict preserved. |
| S3U-0477 | CR000071 | `dcgd_adam_step_contract_mismatch` | high | The documented `--optim='adam'` path can create a DCGD wrapper, while the model Adam branch calls `self.optimizer.step()` with no losses although `DCGD.step(self, losses)` requires them. | The documented Adam+DCGD training route is statically inconsistent; explicit conflict preserved. |
| S3U-0478 | CR000071 | `burgers_absolute_dataset_path` | high | `DataSampler/burgers_sampler.py` loads `/home/user_hys/User/hys/PINN/burgers_shock.mat` even though `DataSampler/burgers_shock.mat` is bundled. | The Burgers benchmark is not portable through the pinned source without path correction. |
| S3U-0479 | CR000071 | `hardware_provenance_absent` | low | Device selection supports CUDA/CPU, but no exact CPU/GPU/hardware specification was identified. | Machine-level performance reproduction remains incomplete. |
| S3U-0480 | CR000071 | `environment_reconstruction_ambiguous` | medium | Many versions are pinned, but no coherent Conda environment file/instruction accompanies the Conda-style manifest that README labels as pip-installable requirements. | Package provenance is strong but the documented environment reconstruction procedure remains ambiguous. |
| S3U-0481 | CR000071 | `variant_environment_provenance_incomplete` | medium | SPINN, CausalPINNs, and PINNsFormer adaptations are present, but separate upstream snapshot/environment provenance is not established by the bounded repository documentation. | Variant capability is evidenced, but exact variant reconstruction is not claimed. |
| S3U-0482 | CR000071 | `main_benchmark_archived_results_absent` | low | No primary-benchmark pretrained checkpoints or validated archived result products were identified during bounded static inspection. | Expected metrics are computable from code, but independent archived result provenance is unavailable. |

## Current register state

- Current unresolved finding count: **482**.
- Next available unresolved ID: **`S3U-0483`**.
- Explicit `conflicting_evidence` finding count: **93**; S062 adds four explicit conflicts.

## Source-scope handling

`CR000071` preserves final Stage-2 authority for `https://github.com/youngsikhwang/Dual-Cone-Gradient-Descent`, pinned commit `7242cd76e8f94616c7e4611ba971c5bc33244e9e`, MIT license, and verified official relationship `PRL000160` to Atlas paper 527.

The resource is represented as a **PINN implementation / PINN-optimization research code**. Three bounded primary experiments capture the 2D Helmholtz, viscous Burgers, and nonlinear Klein-Gordon benchmark families. SPINN, CausalPINNs, and PINNsFormer adaptations remain capability evidence rather than additional experiment proliferation. The source-level defects above are preserved as static evidence and are not repaired in Stage 3.

## Escalation state

No Stage-2 identity or relationship change is required. No schema or methodology change is required. The defects materially lower reproducibility but do not satisfy a Stage-3 hard-stop criterion because the accepted schemas can represent them without scientific distortion.

`SOB007` now has **6 / 10** canonical members complete; aggregate batch QA is not yet due. The exact next independently extractable resource is `CR000072`.
