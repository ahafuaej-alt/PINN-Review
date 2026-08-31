# Computational Resources Stage 3 — Progress

Verification/extraction date: 2026-08-31

| Field | Value |
|---|---|
| Stage-3 phase | Approved pilot extraction in progress |
| Current batch | Pilot batch 003 |
| Current checkpoint | Stage3-P03 |
| Last completed resource | CR000059 |
| Next resource | CR000163 |
| Completed Stage-3 resource count | 6 |
| Remaining Stage-3 registry resource count | 358 |
| Approved pilot resources completed | 6 / 10 |
| Approved pilot resources remaining | 4 |
| Completed experiment count | 18 |
| Completed configuration count | 77 |
| Technical evidence records | 82 |
| Static reproducibility assessments | 6 |
| Current QA status | PASS |
| Current unresolved technical item count | 15 |
| Current conflicting-evidence finding count | 2 |
| Resources completed in this checkpoint | CR000010, CR000059 |
| Last checkpoint commit | self — Git commit containing this report |

## Stage3-P03 result

The third pilot checkpoint extracted `CR000010` and `CR000059` using the Stage3-D01 methodology and the exact Stage-2 pinned repository snapshots.

### CR000010

- Profile: `pinn_implementation`
- Pinned commit: `db2c2344cb6b70338ace88714a0d7ce77dbf8c04`
- Primary paper DOI: `10.1016/j.enganabound.2025.106200`
- Experiments: 5
- Configurations: 6
- Highest static reproducibility: `R4` for `CR000010-E003-C001` (validated B3 configuration)
- The primary paper supports four core application classes: diffuse-interface motion, grain shrinkage with and without a driving force, and triple-junction evolution.
- The upgraded repository additionally contains B2 as an explicit motivating single-network-limit comparison; it is retained as repository-only rather than promoted into the paper benchmark scope.
- B6 is explicitly exploratory and is not promoted to a training experiment.
- The repository supplies an exact dependency lock, Python 3.11 GPU-environment builder, float64 TensorFlow workflow, reference solvers, benchmark runners, expected metrics, and bundled benchmark/reference/checkpoint artifacts.
- The repository states that its multiphase implementation is an upgrade of the published implementation: the shared physics and space–time decomposition are retained, while the repository uses a consolidated softmax-output worker architecture. The two implementation scopes remain source-separated.
- The validated B3 runner has a direct documented from-scratch reproduction path with exact option, seed, decomposition, optimizer schedule, convergence gate, time windows, reference/evaluation procedure, and expected metrics. This satisfies the Stage-3 static R4 definition without execution.

### CR000059

- Profile: `supporting_scientific_ml_library`
- Pinned commit: `c17e770bb74f1771da7be4a69fabfa68b6078960`
- Package version: `0.6.6`
- Experiments: 0
- Configurations: 0
- Static reproducibility: `R2`
- Neural Tangents is retained as a supporting scientific-ML library, not relabeled as a PINN implementation.
- Documented capabilities include NNGP/NTK kernels, empirical kernels, infinite-width inference, linearization/Taylor tools, JAX/XLA execution, examples, notebooks, and tests.
- Installation is documented, but `setup.py` specifies lower-bound dependency constraints rather than one exact resolved environment.
- Provider metadata marks the repository archived; that maintenance state is recorded separately from scientific role and reproducibility semantics.

## Cumulative pilot state

The first three checkpoints now cover six heterogeneous resources: three PINN implementations, one framework/library, one physics-informed operator-learning implementation, and one supporting scientific-ML library. The compact resource → experiment → configuration hierarchy continues to represent all cases without a new schema family.

`CR000010` also exercises the static R4 level for the first time: an end-to-end workflow can be sufficiently specified without claiming that it was independently executed. R5 remains prohibited.

## Stage boundaries

Stage 1 and Stage 2 remain unchanged and read-only. No public Atlas/site file or `05-curated/` output was modified. No repository software, dependency, notebook, model, binary, training process, inference workflow, reference solver, container, or research dataset was executed.

## Next action

Continue the approved pilot with `CR000163`, preserving the same small-checkpoint extraction and QA process. Do not scale beyond the ten-resource pilot until pilot acceptance is scientifically reviewed.
