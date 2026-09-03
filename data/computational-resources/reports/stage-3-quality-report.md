# Computational Resources Stage 3 — Quality Report

Status date: 2026-09-03  
Acceptance checkpoint: Stage3-A01  
Pilot extraction checkpoint: Stage3-P07  
Latest scale-out checkpoint: Stage3-S054

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
- `Stage3-S054`: CR000063 Elvet framework, resource-only, R2 — **PASS**.

Historical S050/S051 pre-QA control deviations remain preserved and documented without rewriting history. S052–S054 follow the normal one-post-QA-commit checkpoint policy.

## Stage3-S054 checkpoint

`CR000063` preserves the final Stage-2 identity `https://gitlab.com/elvet/elvet`, default branch `master`, MIT license, and `PRL000152` as the official relationship to Atlas paper 513, *Elvet -- a neural network-based differential equation and variational problem solver*.

Stage 2 explicitly recorded the repository commit SHA/tree as unavailable through its primary-source interface. Stage 3 does not overwrite that closed authority with a guessed snapshot. Current GitLab, PyPI and provider-documentation observations are retained as later source-scoped evidence.

The resource remains a reusable **`pinn_framework_library`** with zero experiments and zero configurations. The paper's Schrödinger and catenary cases and the provider's ODE/PDE/variational/fitting Colab examples are framework demonstrations, not one canonical repository experiment bundle.

### Framework and method surface

Static provider documentation and the official paper establish:

- `solver`, `minimizer`, and `fitter` problem frontends;
- `Solver`, `Minimizer`, and `BC` abstractions;
- `box`, `cut_domain`, and `ellipsoid` domain helpers;
- a fully connected neural-network helper with user-definable models;
- solving single/coupled ODEs and PDEs with user-defined boundary conditions;
- generic functional minimization with weighted constraints;
- function fitting;
- derivative stacks, derivatives, integration, divergence, curl, Laplacian, d'Alembertian, manifold divergence and Laplace–Beltrami utilities;
- TensorFlow `GradientTape` higher-order differentiation and static-graph training;
- prediction and optional plotting/evaluation against analytic/reference functions.

The paper describes `Solver` as the differential-equation specialization of `Minimizer`; the loss for differential equations is built from squared equation and boundary-condition residuals, while generic variational problems minimize the supplied functional plus constraint penalties.

### Provider/package lineage

PyPI currently exposes Elvet **1.0.2**, released 29 May 2025, with Python >=3.6, MIT metadata, a source distribution SHA256 `09bc94e30906d9a34de04be3f003da30ae83d3dae16da2dc6bc4355f4e6bd163`, and a wheel SHA256 `40ed77cd4924af79bffb961af775a8fa8b9f0a5934ba3db166b6ef04b2ebe45c`.

The provider's GitLab maintenance merge request !34 was merged into `master` on 27 May 2025 and identifies the merge only as short commit `a0f941c4` in the available interface. Stage 3 records this as current provider maintenance evidence, not as a replacement Stage-2 pinned SHA. No repository/archive byte comparison was performed, so PyPI 1.0.2 is not asserted byte-identical to that GitLab revision.

### Preserved conflict

One new explicit conflict is retained at environment-generation scope:

- the 2021 paper documents TensorFlow **>=2.4.0**;
- PyPI 1.0.1 later documents TensorFlow **2.4–2.10 inclusive**;
- current PyPI 1.0.2 says TensorFlow is required without specifying a version;
- GitLab merge request !34 states that the 2025 update targets recent/latest TensorFlow, is incompatible with older versions around 2.10, and intentionally leaves TensorFlow unpinned in automatic testing.

These statements represent different software generations and are not silently harmonized.

### Reproducibility

Static reproducibility is **R2**. Public source identity, MIT licensing, immutable PyPI package artifacts, installation instructions, public API, mathematical method, architecture/training behavior, examples and evaluation interfaces are recoverable.

R3 is withheld because:

- final Stage 2 does not provide an immutable repository commit/tree;
- PyPI/repository byte lineage was not compared;
- TensorFlow compatibility changed across software generations;
- no exact transitive dependency lock or immutable container environment is established;
- the bounded GitLab interface did not expose the full current source tree/head SHA;
- a reusable framework does not define one canonical dataset, seed, experiment configuration, checkpoint or expected result.

The 2025 provider pipeline is recorded only as provider-reported passing evidence. Stage 3 did not execute it.

Checkpoint additions:

- resources: **1**
- experiments: **0**
- configurations: **0**
- technical-evidence records: **11**
- reproducibility assessments: **1**
- unresolved findings: **8**
- new explicit conflicts: **1**

No repository clone, dependency/package installation, source-archive comparison, example/Colab execution, test/pipeline execution, training, prediction, accelerator workflow, or benchmark was performed.

## Aggregate batch state

Canonical aggregate QA remains complete and passing for `SOB001`–`SOB005`.

`SOB006` is **IN PROGRESS** with eight independently extractable completed members:

- `CR000054` — Stage3-S046
- `CR000055` — Stage3-S047
- `CR000057` — Stage3-S049
- `CR000058` — Stage3-S050
- `CR000060` — Stage3-S051
- `CR000061` — Stage3-S052
- `CR000062` — Stage3-S053
- `CR000063` — Stage3-S054

`CR000056` and `CR000059` are pilot-complete and are not reprocessed. Aggregate QA is not due until ten canonical SOB006 members are complete.

## Current cumulative totals

After `Stage3-S054`:

- technical resource records: **68**
- experiments: **117**
- configurations: **262**
- technical-evidence records: **913**
- static reproducibility assessments: **68**
- unresolved findings: **416**
- explicit conflicting-evidence findings: **88**

## Registry accounting

The Stage-2 closure registry contains 364 entries. `CR000021` remains provenance for a non-independent identity canonically resolved to `CR000184`, leaving 363 independently extractable technical identities. With 68 completed Stage-3 resource records, **295** remain.

## Continuation QA

The forward frontier is `CR000063`. The exact next independently extractable resource is **`CR000064`**, to be processed as `Stage3-S055` within `SOB006`.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. No scientific workload execution occurred. R5 remains prohibited.
