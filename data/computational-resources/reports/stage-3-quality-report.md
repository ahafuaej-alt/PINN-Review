# Computational Resources Stage 3 — Quality Report

Status date: 2026-09-03  
Acceptance checkpoint: Stage3-A01  
Pilot extraction checkpoint: Stage3-P07  
Latest scale-out checkpoint: Stage3-S052

## Current QA status

Status: **PASS**

Stage3-D01 remains accepted without schema modification. The static-only boundary, Stage-2 authority, missing-value semantics, evidence-source semantics, identifier rules, resource → experiment → configuration ontology, and R0–R4 reproducibility ceiling remain unchanged.

The detailed quality report through `Stage3-S047` is preserved verbatim in `reports/stage-3-quality-report-through-s047.md`. Per-checkpoint machine-readable QA remains authoritative in `03-technical/batch-qa/scaleout-checkpoint-###-qa.json`.

## Recent checkpoint continuity

- `Stage3-S048`: corrective CR000049 recovery and canonical batch reconciliation — PASS.
- `Stage3-S049`: CR000057 PyDEns framework, resource-only, R2 — PASS.
- `Stage3-S050`: CR000058 hp-VPINNs, four experiments/four configurations, R2 — PASS.
- `Stage3-S051`: CR000060 Pair-wise Interaction Neural Network library, resource-only, R2 — PASS.
- `Stage3-S052`: CR000061 SciANN applications collection, one paper-scoped experiment/four configurations, R1 — **PASS**.

Historical S050/S051 pre-QA control deviations remain preserved and documented without rewriting history. S052 returns to the normal one-post-QA-commit checkpoint policy.

## Stage3-S052 checkpoint

`CR000061` preserves the final Stage-2 redirected repository identity `https://github.com/ehsanhaghighat/sciann-applications` at commit `8c475af6e6a3ae6de6d1757d952ba1eb29438daa`, its MIT license, and all three verified Stage-2 relationships:

- `PRL000069` → Atlas 338, `paper_dataset_mention`;
- `PRL000143` → Atlas 495, `secondary_review_mention`;
- `PRL000150` → Atlas 512, `supplementary_examples`.

The Stage-2 classification `pinn_framework_or_library` is intentionally refined at Stage 3 to **`mixed_other`**. The repository is a heterogeneous SciANN applications/examples collection containing PINN/PIDL examples, regression examples, mechanics/fluids/vibration cases, bundled trained artifacts/results, and two external git submodules. The separate SciANN core framework is `CR000062`; it is not collapsed into CR000061.

### Materialized experiment

Only the strongest paper-scoped case is materialized:

**`CR000061-E001` — Constitutive model characterization and discovery**, corresponding to the `SciANN-ConstitutiveModeling` directory identified by Atlas paper 338.

Four materially distinct configurations are represented:

1. **Deterministic von Mises isotropic-hardening characterization** — `g(t)` as an 8×20 tanh functional, trainable elastic/yield/hardening parameters, five smoothing-delta values, Adam/MSE, exponential learning-rate schedule, 50,000 epochs, fixed seed 12345.
2. **Stochastic von Mises transfer learning** — grouped random realizations, the same 8×20 tanh functional, bundled HDF5 warm-start weights, Adam/MSE, 1,000 epochs, fixed seed 12345.
3. **Drucker-Prager biaxial characterization** — trainable bulk/shear/friction/yield parameters, constitutive/yield/plastic-flow residual constraints, five smoothing-delta values, Adam with exponential learning-rate schedule, 50,000 epochs.
4. **Drucker-Prager undrained biaxial characterization** — distinct undrained data/loading case with the corresponding Drucker-Prager constraint workflow.

The remaining SciANN folders are not arbitrarily inflated into experiments. They remain resource-level evidence because the Stage-2 relationships to Atlas 495 and 512 establish repository/review/example scope rather than individual paper-defined cases.

### Evidence and reproducibility

Fifteen evidence records cover final Stage-2 identity/relationships, root role/license, application inventory, environment limitations, the Atlas-338 folder scope, tensorial constitutive mathematics, all four configurations, constitutive data/transfer-weight inventory, wider bundled outputs, external submodules, relationship scope, and the static-only boundary.

Static reproducibility is **R1**. Source, licensing, data paths, entrypoints, mathematical constraints, architecture, optimizer/loss choices, learning-rate schedules, hyperparameters, seeds, and output workflows are statically recoverable. R2 is withheld because:

- the applications repository has no authoritative dependency/environment manifest;
- compatible SciANN/TensorFlow/Keras/scientific-Python versions are not pinned;
- no installation/environment-creation procedure is documented;
- the separate CR000062 SciANN-core environment is not imported by assumption.

Bundled HDF5 weights and larger/binary payloads are recorded by presence but not opened. Broader result bundles are not treated as independently reproduced runs.

Checkpoint additions:

- resources: **1**
- experiments: **1**
- configurations: **4**
- technical-evidence records: **15**
- reproducibility assessments: **1**
- unresolved findings: **8**
- new explicit conflicts: **0**

No dependency, environment, notebook, script, submodule, model training/inference, data generation, binary HDF5 payload, test, or benchmark was executed.

## Aggregate batch state

Canonical aggregate QA remains complete and passing for `SOB001`–`SOB005`.

`SOB006` is **IN PROGRESS** with six independently extractable completed members:

- `CR000054` — Stage3-S046
- `CR000055` — Stage3-S047
- `CR000057` — Stage3-S049
- `CR000058` — Stage3-S050
- `CR000060` — Stage3-S051
- `CR000061` — Stage3-S052

`CR000056` and `CR000059` are pilot-complete and are not reprocessed. Aggregate QA is not due until ten canonical SOB006 members are complete.

## Current cumulative totals

After `Stage3-S052`:

- technical resource records: **66**
- experiments: **117**
- configurations: **262**
- technical-evidence records: **889**
- static reproducibility assessments: **66**
- unresolved findings: **400**
- explicit conflicting-evidence findings: **84**

## Registry accounting

The Stage-2 closure registry contains 364 entries. `CR000021` remains provenance for a non-independent identity canonically resolved to `CR000184`, leaving 363 independently extractable technical identities. With 66 completed Stage-3 resource records, **297** remain.

## Continuation QA

The forward frontier is `CR000061`. The exact next independently extractable resource is **`CR000062`**, to be processed as `Stage3-S053` within `SOB006`.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. No scientific workload execution occurred. R5 remains prohibited.
