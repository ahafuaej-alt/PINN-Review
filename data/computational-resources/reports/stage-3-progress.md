# Computational Resources Stage 3 — Progress

Status date: 2026-09-04

| Field | Value |
|---|---|
| Stage-3 phase | Controlled scale-out in progress |
| Current planning checkpoint | Stage3-SO-D01 |
| Pilot extraction checkpoint | Stage3-P07 |
| Pilot acceptance checkpoint | Stage3-A01 |
| Last completed scale-out checkpoint | Stage3-S057 |
| Next scale-out checkpoint | Stage3-S058 |
| Latest checkpoint resource | CR000066 |
| Forward frontier resource | CR000066 |
| Next resource | CR000067 |
| Next planned checkpoint resources | CR000067 |
| Current scale-out batch | SOB007 |
| Current batch completed members | CR000066 — 1 / 10 |
| Completed Stage-3 technical resource records | 71 |
| Resolved non-independent registry identity encountered | CR000021 → CR000184 |
| Remaining independently extractable registry resources | 292 |
| Approved pilot resources completed | 10 / 10 |
| Completed experiment count | 124 |
| Completed configuration count | 270 |
| Technical evidence records | 954 |
| Static reproducibility assessments | 71 |
| Current QA status | PASS |
| Current unresolved technical item count | 445 |
| Next unresolved ID | S3U-0446 |
| Current conflicting-evidence finding count | 89 |
| Aggregate batch QA | SOB001–SOB006 PASS; SOB007 in progress |
| Methodology status | Stage3-D01 accepted without schema change |
| Control reconciliation | `reports/stage-3-control-reconciliation-01.md` |
| Historical progress snapshot | `reports/stage-3-progress-through-s047.md` |
| Historical unresolved register | `reports/stage-3-unresolved-through-s056.md` |
| Historical quality snapshot | `reports/stage-3-quality-report-through-s047.md` |

## Current continuation state

`Stage3-S057` completes `CR000066`, preserving final Stage-2 authority for `https://github.com/AmeyaJagtap/Locally-Adaptive-Activation-Functions-Neural-Networks-`, pinned commit `02246c511efb1694d2740c33125b1403168ba0a1`, and official `PRL000155` relationship to Atlas paper 517, *Locally adaptive activation functions with slope recovery for deep and physics-informed neural networks*.

The repository is represented as **`mixed_other`** because its visible pinned surfaces are heterogeneous. `LAAF_FunApproxi.py` is a supervised one-dimensional function-approximation workflow implemented in TensorFlow; `Deep_Learning_Benchmark.zip` is separately documented as a deep-learning benchmark package. The official paper/README scope includes physics-informed neural networks, but the visible executable source does not establish a PINN/PDE residual workflow, so Stage 3 does not manufacture one.

One experiment and one configuration are materialized for the visible function-approximation workflow. It uses 301 points on `[-3,3]`, a piecewise sinusoidal/oscillatory target, a `[1,50,50,50,50,1]` network, layer-wise adaptive `tanh` activations with trainable slope parameters initialized to 0.1 and multiplied by 10, an MSE data loss plus slope-recovery term, Adam at learning rate `2e-4`, and NumPy/TensorFlow seeds 1234. The script forces CPU execution.

The separate benchmark README documents LeNet and PreActResNet18, non-adaptive/GAAF/L-LAAF/N-LAAF methods, seven image datasets, Python 3.6.7 and Torch 1.0.1, but the ZIP payload was not expanded. These are retained as provider-documented archive facts rather than materialized as an independently verified experiment.

Static reproducibility is **R1**. Source, license, entrypoint, architecture, objective, seeds and hyperparameters are recoverable. R2 is blocked by the absence of an authoritative environment/dependency manifest, unpinned TensorFlow/scientific-Python versions, no installation workflow, and a missing local `plotting` module imported by the visible entrypoint.

The exact next independently extractable resource is **`CR000067`**.

The Stage-2 registry contains 364 entries. `CR000021` remains a resolved non-independent identity canonically mapped to `CR000184`, leaving 363 independently extractable technical identities. With 71 Stage-3 resource records complete, **292** remain.

## Current batch — SOB007

Canonical completed members:

- `Stage3-S057`: `CR000066`

Current canonical completion: **1 / 10**.

Aggregate batch QA is not yet due.

## Current cumulative totals

After `Stage3-S057`:

- Stage-3 technical resource records: **71**
- experiments: **124**
- configurations: **270**
- technical-evidence records: **954**
- static reproducibility assessments: **71**
- unresolved findings: **445**
- explicit conflicting-evidence findings: **89**

S057 adds one resource, one experiment, one configuration, ten technical-evidence records, one reproducibility assessment, eight bounded unresolved findings, and no new explicit conflict.

## Control notes

Historical S046/S047 batch-label drift and S050/S051 pre-QA control deviations remain preserved without rewriting history. `Stage3-S052` onward follows the normal policy: all checkpoint and required aggregate-QA artifacts are assembled and validated before one completion commit is published.

## Continuation rule

Every continuation must read this progress report, the accepted scale-out plan, active unresolved register, latest checkpoint QA, latest aggregate QA when a batch has closed, and `stage-3-control-reconciliation-01.md`; verify the current branch head; resume from the exact `Next resource`; resolve final Stage-2 authority before extraction; preserve source scope; perform no scientific workload execution; validate schemas/cross-references; update cumulative counts; and publish only after QA passes.

Normal checkpoint size remains one or two resources. Normal batch size remains ten independently extractable resources, with aggregate QA required before advancement.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. Stage 3 remains static-only: no scientific resource, dependency, environment, notebook, script, package, archive payload, model, training, inference, evaluation, test, accelerator workflow, dataset download or benchmark is executed. R5 remains prohibited.

## Exact next action

Start **`Stage3-S058`** with **`CR000067`**.
