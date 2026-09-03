# Computational Resources Stage 3 — Quality Report

Status date: 2026-09-03  
Acceptance checkpoint: Stage3-A01  
Pilot extraction checkpoint: Stage3-P07  
Latest scale-out checkpoint: Stage3-S053

## Current QA status

Status: **PASS**

Stage3-D01 remains accepted without schema modification. The static-only boundary, Stage-2 authority, missing-value semantics, evidence-source semantics, identifier rules, resource → experiment → configuration ontology, and R0–R4 reproducibility ceiling remain unchanged.

The detailed quality report through `Stage3-S047` is preserved verbatim in `reports/stage-3-quality-report-through-s047.md`. Per-checkpoint machine-readable QA remains authoritative in `03-technical/batch-qa/scaleout-checkpoint-###-qa.json`.

## Recent checkpoint continuity

- `Stage3-S048`: corrective CR000049 recovery and canonical batch reconciliation — PASS.
- `Stage3-S049`: CR000057 PyDEns framework, resource-only, R2 — PASS.
- `Stage3-S050`: CR000058 hp-VPINNs, four experiments/four configurations, R2 — PASS.
- `Stage3-S051`: CR000060 Pair-wise Interaction Neural Network library, resource-only, R2 — PASS.
- `Stage3-S052`: CR000061 SciANN applications collection, one paper-scoped experiment/four configurations, R1 — PASS.
- `Stage3-S053`: CR000062 SciANN core framework, resource-only, R2 — **PASS**.

Historical S050/S051 pre-QA control deviations remain preserved and documented without rewriting history. S052 and S053 follow the normal one-post-QA-commit checkpoint policy.

## Stage3-S053 checkpoint

`CR000062` preserves the final Stage-2 repository identity `https://github.com/ehsanhaghighat/sciann` at commit `e3615412c149dbf3152433c09cdd741be2b04f62` and `PRL000151` as the official relationship to Atlas paper 512, *SciANN: A Keras/TensorFlow wrapper for scientific computations and physics-informed deep learning using artificial neural networks*.

The resource is the **SciANN core reusable framework**, represented as `pinn_framework_library` with zero experiments and zero configurations. The separate `CR000061` applications/examples repository remains independent; application cases are not copied into the core framework record.

### Framework surface

Static source and documentation establish:

- `Variable`, `RNNVariable`, and `RadialBasis` inputs;
- `Functional`, `RNNFunctional`, `Field`, and `RNNField` network/output abstractions;
- `Parameter` for parameter inversion;
- `Data`, `PDE`, `Tie`, and `MinMax` constraints;
- functional differentiation and gradient utilities;
- MLP, residual-network, RNN, and radial-basis architecture surfaces;
- `SciModel` with default MSE/Adam training, learning-rate schedules, early stopping, adaptive GP/NTK and sample weighting, Keras and SciPy optimizer paths, parameter/functional/gradient/loss-landscape logging, HDF5 weight I/O, and prediction;
- root fitting/differentiation examples, `tests/test_api.py`, and an Ubuntu/Python CI matrix.

These are reusable framework capabilities, not paper-specific experimental configurations.

### Preserved conflicts

Three explicit source conflicts are retained:

1. **License documentation:** the exact `LICENSE`, `setup.py`, package metadata, and package initializer identify MIT, while the README badge claims Apache-2.0. The exact MIT license text remains authoritative for license identity; the badge remains conflicting documentation.
2. **Runtime compatibility:** README states Python 3.8–3.10, reports last tests on Python 3.9/TensorFlow 2.10, and recommends TensorFlow/Keras 2.10; `requirements.txt` pins TensorFlow 2.8.1; CI covers Python 3.7–3.9; and setup/package text retains older Python compatibility statements.
3. **Dependency declaration:** `requirements.txt` includes TensorFlow/Keras plus the scientific/documentation/test stack, whereas active `setup.py` and egg-info requirements omit TensorFlow/Keras and expose a narrower dependency set.

No conflict is silently harmonized and no source generation is selected by inference.

### Reproducibility

Static reproducibility is **R2**. Source, exact license text, installation routes, public API, physics constraints, architecture surfaces, training/evaluation interfaces, examples, tests, and CI are recoverable.

R3 is withheld because:

- runtime compatibility declarations conflict;
- dependency declarations conflict and most dependencies are not exactly pinned;
- no complete transitive lock or immutable container environment is provided;
- the README states that the project is no longer maintained and warns of TensorFlow/Keras compatibility sensitivity;
- a reusable framework does not define one canonical paper/application dataset, seed, configuration, checkpoint, or expected result.

Checkpoint additions:

- resources: **1**
- experiments: **0**
- configurations: **0**
- technical-evidence records: **13**
- reproducibility assessments: **1**
- unresolved findings: **8**
- new explicit conflicts: **3**

No dependency, package installation, example, test, training, prediction, checkpoint-generation, CPU/GPU workflow, or benchmark was executed.

## Aggregate batch state

Canonical aggregate QA remains complete and passing for `SOB001`–`SOB005`.

`SOB006` is **IN PROGRESS** with seven independently extractable completed members:

- `CR000054` — Stage3-S046
- `CR000055` — Stage3-S047
- `CR000057` — Stage3-S049
- `CR000058` — Stage3-S050
- `CR000060` — Stage3-S051
- `CR000061` — Stage3-S052
- `CR000062` — Stage3-S053

`CR000056` and `CR000059` are pilot-complete and are not reprocessed. Aggregate QA is not due until ten canonical SOB006 members are complete.

## Current cumulative totals

After `Stage3-S053`:

- technical resource records: **67**
- experiments: **117**
- configurations: **262**
- technical-evidence records: **902**
- static reproducibility assessments: **67**
- unresolved findings: **408**
- explicit conflicting-evidence findings: **87**

## Registry accounting

The Stage-2 closure registry contains 364 entries. `CR000021` remains provenance for a non-independent identity canonically resolved to `CR000184`, leaving 363 independently extractable technical identities. With 67 completed Stage-3 resource records, **296** remain.

## Continuation QA

The forward frontier is `CR000062`. The exact next independently extractable resource is **`CR000063`**, to be processed as `Stage3-S054` within `SOB006`.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. No scientific workload execution occurred. R5 remains prohibited.
