# Computational Resources Stage 3 — Progress

Verification/extraction date: 2026-08-31

| Field | Value |
|---|---|
| Stage-3 phase | Approved pilot extraction in progress |
| Current batch | Pilot batch 001 |
| Current checkpoint | Stage3-P01 |
| Last completed resource | CR000056 |
| Next resource | CR000227 |
| Completed Stage-3 resource count | 2 |
| Remaining Stage-3 registry resource count | 362 |
| Approved pilot resources completed | 2 / 10 |
| Approved pilot resources remaining | 8 |
| Completed experiment count | 9 |
| Completed configuration count | 64 |
| Technical evidence records | 34 |
| Current QA status | PASS |
| Current unresolved technical item count | 10 |
| Current conflicting-evidence finding count | 2 |
| Resources completed in this checkpoint | CR000003, CR000056 |
| Last checkpoint commit | self — Git commit containing this report |

## Stage3-P01 result

The first pilot checkpoint extracted `CR000003` and `CR000056` using the Stage3-D01 methodology and the exact Stage-2 pinned repository snapshots.

### CR000003

- Profile: `pinn_implementation`
- Pinned commit: `d5150048e532fc792f04fc84afb7ab49908168af`
- Experiments: 3
- Configurations: 4
- Static reproducibility: `R2`
- Key bounded findings:
  - README quick-start calls are inconsistent with the inspected `PINNIModel` / `PINNITrainer` interfaces.
  - `configs/default_config.yaml` disagrees with runtime defaults on dropout, scheduler, and batch size; verified wiring from the YAML to the runtime path was not established.
  - `ExpMechMain_nn.m` requires `stress_model/matlab_stress_net.mat` and `stress_model/nn_scale_params.mat`, but those artifacts and the named `setup_matlab_native_nn()` step are absent from the pinned tree.
  - Dependency constraints are lower bounds, not exact pins.
  - Paper-reported configurations remain source-scoped and are not merged with repository defaults.

### CR000056

- Profile: `pinn_implementation`
- Pinned commit: `c20433036c3eaec21758384e1710e15024745d95`
- Experiments: 6
- Configurations: 60
- Static reproducibility: `R1`
- The six experiment cases are diffusion, Burgers, Allen–Cahn, wave, diffusion–reaction inverse, and Korteweg–de Vries inverse.
- Each experiment is represented with ten sampling configurations: Grid, Random, LHS, Halton, Hammersley, Sobol, uniform resampling, RAD, RAR-D, and RAR.
- `requirements.txt` is unversioned and omits `scikit-optimize` although the sampling scripts import `skopt`; no installation workflow is documented.
- Bundled `.npz` / `.mat` files are recorded as experiment reference data, not promoted automatically to standalone datasets.
- Detailed adaptive-sampling internals were deeply inspected for diffusion; the remaining five adaptive-script sets are bounded for later refinement.

## Stage boundaries

Stage 1 and Stage 2 remain unchanged and read-only. No public Atlas/site file or `05-curated/` output was modified. No repository software, dependency, notebook, model, binary, training process, inference workflow, container, or research dataset was executed.

## Next action

Continue the approved pilot with `CR000227`, preserving the same checkpointed extraction and QA process. Do not scale beyond the ten-resource pilot until pilot acceptance is scientifically reviewed.
