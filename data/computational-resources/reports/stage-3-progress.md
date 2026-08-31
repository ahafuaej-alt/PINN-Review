# Computational Resources Stage 3 — Progress

Verification/extraction date: 2026-08-31

| Field | Value |
|---|---|
| Stage-3 phase | Approved pilot extraction in progress |
| Current batch | Pilot batch 002 |
| Current checkpoint | Stage3-P02 |
| Last completed resource | CR000087 |
| Next resource | CR000010 |
| Completed Stage-3 resource count | 4 |
| Remaining Stage-3 registry resource count | 360 |
| Approved pilot resources completed | 4 / 10 |
| Approved pilot resources remaining | 6 |
| Completed experiment count | 13 |
| Completed configuration count | 71 |
| Technical evidence records | 58 |
| Static reproducibility assessments | 4 |
| Current QA status | PASS |
| Current unresolved technical item count | 14 |
| Current conflicting-evidence finding count | 2 |
| Resources completed in this checkpoint | CR000227, CR000087 |
| Last checkpoint commit | self — Git commit containing this report |

## Stage3-P02 result

The second pilot checkpoint extracted `CR000227` and `CR000087` using the Stage3-D01 methodology and the exact Stage-2 pinned repository snapshots.

### CR000227

- Profile: `pinn_framework_library`
- Pinned commit: `635ba39298dc9aa065849e9818c558c9f5302eed`
- Experiments: 0
- Configurations: 0
- Static reproducibility: `R2`
- Package metadata at the pinned snapshot identifies NeuralPDE version `6.2.3` with Julia compatibility `1.10`.
- Repository documentation identifies PINN/neural-network solving support for PDEs and multiple xDE classes, symbolic `PDESystem` discretization, extra data-fitting loss terms, multiple training strategies, GPU-capable Lux/Flux layers, and NeuralOperators integration.
- The framework-level record deliberately does not turn documentation examples or tests into research experiments.
- `Project.toml` supplies dependency compatibility ranges, but no root `Manifest.toml` was identified to lock one complete resolved environment.
- No standalone bundled research dataset is claimed.

### CR000087

- Profile: `physics_informed_operator_learning`
- Pinned commit: `7aa24693f379a600c2d6a69bef8e81603a4a6f20`
- Primary paper DOI: `10.1016/j.cma.2024.117586`
- Experiments: 4
- Configurations: 7
- Static reproducibility: `R2`
- Three experiments map to the primary-paper benchmarks: viscous Burgers, Biot consolidation, and the parameterized heat equation.
- A fourth Poisson/random-field CNN-branch example is present only in the inspected repository evidence and is retained as repository-only rather than attributed to the paper.
- Conventional and separable PI-DeepONet implementations are separate configurations for the three paper benchmarks.
- The separable implementation uses one trunk subnetwork per factorized coordinate and forward-mode AD/JVP-based derivatives.
- `requirements.txt` pins Python 3.11 and the listed package versions exactly.
- The inspected scripts require `data/burgers/Burger.mat`, `data/biot/Y.npy`, `data/heat/heat_const.mat`, and `data/poisson/poisson.mat`, while the pinned repository tree contains no `data/` directory.
- The repository-only Poisson entrypoint creates two PRNG keys and then unconditionally accesses `keys[2]`; this static index inconsistency is retained explicitly.
- The primary paper reports the 4D parameterized heat case as 2.5 h for Sep-PI-DeepONet versus an estimated 289.35 h for conventional PI-DeepONet.

## Cumulative pilot state

The first two checkpoints now cover four deliberately heterogeneous resources: two paper-associated PINN implementations, one framework/library, and one physics-informed operator-learning implementation. The compact resource → experiment → configuration hierarchy remains adequate; no schema change is required.

## Stage boundaries

Stage 1 and Stage 2 remain unchanged and read-only. No public Atlas/site file or `05-curated/` output was modified. No repository software, dependency, notebook, model, binary, training process, inference workflow, container, or research dataset was executed.

## Next action

Continue the approved pilot with `CR000010`, preserving the same small-checkpoint extraction and QA process. Do not scale beyond the ten-resource pilot until pilot acceptance is scientifically reviewed.
