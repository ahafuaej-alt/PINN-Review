# Computational Resources Stage 3 — Quality Report

Status date: 2026-09-04  
Acceptance checkpoint: Stage3-A01  
Pilot extraction checkpoint: Stage3-P07  
Latest scale-out checkpoint: Stage3-S057

## Current QA status

Status: **PASS**

Stage3-D01 remains accepted without schema modification. The static-only boundary, Stage-2 authority, missing-value semantics, evidence-source semantics, identifier rules, resource → experiment → configuration ontology, type-specific profiles, and R0–R4 reproducibility ceiling remain unchanged.

The detailed quality report through `Stage3-S047` is preserved verbatim in `reports/stage-3-quality-report-through-s047.md`. Per-checkpoint machine-readable QA remains authoritative in `03-technical/batch-qa/scaleout-checkpoint-###-qa.json`; completed normal batches additionally require `scaleout-batch-###-aggregate-qa.json`.

## Recent checkpoint continuity

- `Stage3-S056`: CR000065 PN-Net non-PINN research code, one experiment/two configurations, R1 — PASS.
- `Stage3-S057`: CR000066 locally adaptive activation-functions resource, one experiment/one configuration, R1 — **PASS**.

Historical S050/S051 pre-QA control deviations and earlier batch-label drift remain preserved without rewriting history.

## Stage3-S057 checkpoint

`CR000066` preserves the final Stage-2 identity `https://github.com/AmeyaJagtap/Locally-Adaptive-Activation-Functions-Neural-Networks-`, pinned commit `02246c511efb1694d2740c33125b1403168ba0a1`, MIT license, and `PRL000155` official relationship to Atlas paper 517, *Locally adaptive activation functions with slope recovery for deep and physics-informed neural networks*.

### Scope classification

The pinned repository has heterogeneous source surfaces and is therefore represented as **`mixed_other`**. The directly visible executable `LAAF_FunApproxi.py` implements supervised one-dimensional function approximation. A separate `Deep_Learning_Benchmark.zip` is documented by its companion README as image-classification benchmarks. The official paper/README scope includes physics-informed neural networks, but no visible pinned executable source establishes PDE, boundary-condition, initial-condition, or physics-loss residuals. No PINN experiment is manufactured from the paper title.

### Ontology

One stable experiment is materialized:

- **CR000066-E001 — LAAF one-dimensional function approximation.**

One active configuration is retained:

- **CR000066-E001-C001 — CPU TensorFlow LAAF function-approximation workflow.** The script samples 301 points on `[-3,3]`, fits a piecewise target, uses a `[1,50,50,50,50,1]` network with layer-wise adaptive tanh slopes initialized to 0.1 and multiplied by 10, combines MSE with the slope-recovery term, uses Adam at learning rate `2e-4`, fixes NumPy/TensorFlow seeds to 1234, and forces CPU execution.

The benchmark ZIP is not promoted to an experiment because Stage 3 did not expand its payload. The companion README documents a `main.py` interface, LeNet/PreActResNet18, non-adaptive/GAAF/L-LAAF/N-LAAF choices, seven external image datasets, Python 3.6.7 and Torch 1.0.1; those details remain provider-documentation scope.

### Environment and artifacts

No authoritative requirements/environment/package manifest or installation workflow is present for the visible TensorFlow script, and exact TensorFlow/scientific-Python versions are not pinned. The script also imports `newfig` and `savefig` from a local `plotting` module that is absent from the pinned tree. This is retained as a high-severity reproducibility gap rather than repaired or inferred from elsewhere.

`Deep_Learning_Benchmark.zip` is present as a 10,349-byte archive but was not expanded. Benchmark datasets remain external and were not downloaded.

### Reproducibility

Static reproducibility is **R1**. The pinned source, MIT license, official paper relationship, entrypoint, model structure, objective, seeds and major hyperparameters are recoverable.

R2 is withheld because:

- no authoritative dependency/environment manifest is present;
- TensorFlow and supporting scientific-Python versions are unpinned;
- no installation/environment-creation workflow is documented;
- the visible entrypoint imports a missing local `plotting` module;
- the benchmark archive was not expanded and its datasets are external;
- no immutable run manifest or complete numeric acceptance target is present;
- the visible repository source does not establish a PINN/PDE execution path.

Checkpoint additions:

- resources: **1**
- experiments: **1**
- configurations: **1**
- technical-evidence records: **10**
- reproducibility assessments: **1**
- unresolved findings: **8**
- new explicit conflicts: **0**

No dependency installation, archive expansion, dataset download, training, evaluation, test or benchmark was performed.

## Aggregate batch state

Canonical aggregate QA is complete and passing for **`SOB001`–`SOB006`**.

`SOB007` is in progress with **1 / 10** canonical members complete:

- `CR000066` — Stage3-S057

Aggregate SOB007 QA is not yet due.

## Current cumulative totals

After `Stage3-S057`:

- technical resource records: **71**
- experiments: **124**
- configurations: **270**
- technical-evidence records: **954**
- static reproducibility assessments: **71**
- unresolved findings: **445**
- explicit conflicting-evidence findings: **89**

## Registry accounting

The Stage-2 closure registry contains 364 entries. `CR000021` remains provenance for a non-independent identity canonically resolved to `CR000184`, leaving 363 independently extractable technical identities. With 71 completed Stage-3 resource records, **292** remain.

## Continuation QA

`Stage3-S057` is PASS. `SOB007` is 1/10 and does not yet require aggregate QA. The forward frontier is `CR000066`. The exact next independently extractable resource is **`CR000067`**, to be processed as `Stage3-S058`.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. No scientific workload execution occurred. R5 remains prohibited.
