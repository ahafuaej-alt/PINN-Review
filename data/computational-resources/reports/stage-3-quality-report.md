# Computational Resources Stage 3 — Quality Report

Status date: 2026-09-03  
Acceptance checkpoint: Stage3-A01  
Pilot extraction checkpoint: Stage3-P07  
Latest scale-out checkpoint: Stage3-S055

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
- `Stage3-S053`: CR000062 SciANN core framework, resource-only, R2 — PASS.
- `Stage3-S054`: CR000063 Elvet framework, resource-only, R2 — PASS.
- `Stage3-S055`: CR000064 PhyGeoNet implementation, five experiments/five configurations, R2 — **PASS**.

Historical S050/S051 pre-QA control deviations remain preserved without rewriting history. S052–S055 follow the normal one-post-QA-commit checkpoint policy.

## Stage3-S055 checkpoint

`CR000064` preserves the final Stage-2 identity `https://github.com/Jianxun-Wang/phygeonet`, pinned commit `cb146bcf25dd161d89046281217087c139cba632`, and `PRL000153` as the official relationship to Atlas paper 514, *PhyGeoNet: Physics-informed geometry-adaptive convolutional neural networks for solving parameterized steady-state PDEs on irregular domain*.

Stage 3 refines the Stage-2 corpus-related research-code classification to **`pinn_implementation`** because the pinned source directly implements PDE-residual-constrained geometry-adaptive convolutional solvers.

### Ontology

Five source-defined cases are materialized as five experiments, each with one active configuration:

1. **CR000064-E001 — non-parametric steady heat/Laplace.** `case0` solves a scalar Laplace/steady-heat problem on an irregular mapped domain with hard boundary values, a US-CNN, Adam at 0.001, 1500 epochs, and OpenFOAM reference-field evaluation.
2. **CR000064-E002 — non-parametric steady incompressible Navier–Stokes.** `case1` evaluates velocity/pressure fields against continuity and momentum residuals and compares with bundled fully connected-network arrays. The pinned active script loads `Result/15000.pth`; its backward call is commented and the case note states the historical run seed was not saved, so original checkpoint-training provenance remains partial.
3. **CR000064-E003 — parameterized heat boundary conditions.** `case2` trains on boundary-temperature values 1 and 7 and evaluates the same configuration across values 1–7 using bundled OpenFOAM reference cases and `Result/1000.pth`.
4. **CR000064-E004 — geometry-parameterized Navier–Stokes.** `case3` trains on geometry scalers -0.1, 0 and 0.1 using the three-branch `USCNNSep` architecture, then evaluates nine geometry scalers with `Result/20000.pth`.
5. **CR000064-E005 — spatially varying-source Poisson problem.** `case4` trains a US-CNN on 256 source fields, uses a sequence of relative-error checkpoint thresholds, and evaluates 1000 source fields represented with ten bundled KL modes; the evaluation script selects `Result/87252error0.08.pth`.

Parameter values, geometry samples and source-field realizations remain within the active case configuration. They are not converted into dozens of synthetic configuration records.

### Shared method and software surface

Pinned shared source establishes:

- `USCNN` with bicubic upsampling and 16→32→16 convolution widths;
- `USCNNSep` for three parallel output branches;
- ReLU activations and optional Kaiming/orthogonal initialization;
- fixed fourth-order finite-difference derivative and Laplacian filters;
- geometry mapping through `hcubeMesh`;
- OpenFOAM-style reference-field parsing through `Ofpp`/`readOF`;
- a global `torch.manual_seed(123)` in the shared model module;
- explicit CUDA placement throughout active case workflows.

The case1 note is kept at its smaller run scope: its historical checkpoint seed remains unknown even though the shared source module contains a seed call.

### Reproducibility

Static reproducibility is **R2**. The exact repository snapshot, scientific entrypoints, mathematics, geometry preprocessing, architecture, active case hyperparameters, evaluation logic, reference fields, several checkpoint histories, and result surfaces are statically recoverable.

R3 is withheld because:

- no repository license is identified;
- no requirements/environment/package manifest or installation workflow is present;
- exact dependency versions are absent;
- CUDA is hard-coded but the original GPU/CUDA/PyTorch compatibility stack is not specified;
- case1's original checkpoint-training invocation and seed are not preserved;
- binary PTH/NPZ payloads and large field arrays were not opened;
- no repository-wide immutable run manifest binds all bundled outputs to exact environments/configurations;
- OpenFOAM-derived reference fields do not identify one pinned reference-solver generation across the repository.

Checkpoint additions:

- resources: **1**
- experiments: **5**
- configurations: **5**
- technical-evidence records: **18**
- reproducibility assessments: **1**
- unresolved findings: **11**
- new explicit conflicts: **0**

No dependency installation, OpenFOAM execution, model/checkpoint loading, training, prediction, evaluation, test, binary-payload inspection or benchmark was performed.

## Aggregate batch state

Canonical aggregate QA remains complete and passing for `SOB001`–`SOB005`.

`SOB006` is **IN PROGRESS** with nine independently extractable completed members:

- `CR000054` — Stage3-S046
- `CR000055` — Stage3-S047
- `CR000057` — Stage3-S049
- `CR000058` — Stage3-S050
- `CR000060` — Stage3-S051
- `CR000061` — Stage3-S052
- `CR000062` — Stage3-S053
- `CR000063` — Stage3-S054
- `CR000064` — Stage3-S055

`CR000056` and `CR000059` are pilot-complete and are not reprocessed.

`CR000065` is the tenth canonical `SOB006` member. When S056 completes it, aggregate SOB006 QA must pass before Stage 3 advances to CR000066.

## Current cumulative totals

After `Stage3-S055`:

- technical resource records: **69**
- experiments: **122**
- configurations: **267**
- technical-evidence records: **931**
- static reproducibility assessments: **69**
- unresolved findings: **427**
- explicit conflicting-evidence findings: **88**

## Registry accounting

The Stage-2 closure registry contains 364 entries. `CR000021` remains provenance for a non-independent identity canonically resolved to `CR000184`, leaving 363 independently extractable technical identities. With 69 completed Stage-3 resource records, **294** remain.

## Continuation QA

The forward frontier is `CR000064`. The exact next independently extractable resource is **`CR000065`**, to be processed as `Stage3-S056` within `SOB006`. Aggregate SOB006 QA is then mandatory before proceeding to CR000066.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. No scientific workload execution occurred. R5 remains prohibited.
