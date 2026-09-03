# Computational Resources Stage 3 — Progress

Status date: 2026-09-03

| Field | Value |
|---|---|
| Stage-3 phase | Controlled scale-out in progress |
| Current planning checkpoint | Stage3-SO-D01 |
| Pilot extraction checkpoint | Stage3-P07 |
| Pilot acceptance checkpoint | Stage3-A01 |
| Last completed scale-out checkpoint | Stage3-S054 |
| Next scale-out checkpoint | Stage3-S055 |
| Latest checkpoint resource | CR000063 |
| Forward frontier resource | CR000063 |
| Next resource | CR000064 |
| Next planned checkpoint resources | CR000064 |
| Current scale-out batch | SOB006 |
| Current batch completed members | CR000054, CR000055, CR000057, CR000058, CR000060, CR000061, CR000062, CR000063 — 8 / 10 |
| Completed Stage-3 technical resource records | 68 |
| Resolved non-independent registry identity encountered | CR000021 → CR000184 |
| Remaining independently extractable registry resources | 295 |
| Approved pilot resources completed | 10 / 10 |
| Completed experiment count | 117 |
| Completed configuration count | 262 |
| Technical evidence records | 913 |
| Static reproducibility assessments | 68 |
| Current QA status | PASS |
| Current unresolved technical item count | 416 |
| Next unresolved ID | S3U-0417 |
| Current conflicting-evidence finding count | 88 |
| Aggregate batch QA | SOB001–SOB005 PASS |
| Methodology status | Stage3-D01 accepted without schema change |
| Control reconciliation | `reports/stage-3-control-reconciliation-01.md` |
| Historical progress snapshot | `reports/stage-3-progress-through-s047.md` |
| Historical unresolved register | `reports/stage-3-unresolved-through-s047.md` |
| Historical quality snapshot | `reports/stage-3-quality-report-through-s047.md` |

## Current continuation state

`Stage3-S054` completes `CR000063`, preserving final Stage-2 authority for `https://gitlab.com/elvet/elvet`, default branch `master`, MIT licensing, and the official `PRL000152` relationship to Atlas paper 513. Stage 2 explicitly did not expose a 40-character GitLab commit SHA or repository tree; Stage 3 retains that limitation rather than manufacturing a pinned snapshot.

Elvet is represented as a reusable **`pinn_framework_library`** at resource scope with zero experiments and zero configurations. Provider documentation exposes general `solver`, `minimizer`, `fitter`, `Solver`, `Minimizer`, `BC`, domain-generation, neural-network, derivative/integral, and differential-operator APIs. The official paper describes a neural-network representation for generic ODE/PDE systems and variational problems, TensorFlow `GradientTape` derivative stacks, user-selectable optimization, and CPU/GPU-capable TensorFlow execution. Paper and Colab examples remain capability evidence, not manufactured repository experiments.

Current provider/package evidence is source-scoped. PyPI 1.0.2, released 29 May 2025, supplies immutable source and wheel hashes and requires Python >=3.6 with TensorFlow. A GitLab maintenance merge on 27 May 2025 is identified only by the provider's short merge ID `a0f941c4`; it is not promoted to a verified 40-character Stage-2 snapshot. No byte comparison was performed between the PyPI release and a GitLab revision.

One explicit TensorFlow-generation conflict is preserved: the 2021 paper documents TensorFlow >=2.4; PyPI 1.0.1 later documented 2.4–2.10; current PyPI 1.0.2 leaves the TensorFlow version unspecified; and GitLab merge request !34 reports that the updated code targets recent/latest TensorFlow, is incompatible with older versions around 2.10, and intentionally leaves TensorFlow unpinned in automatic testing.

Static reproducibility is **R2**. Installation, versioned package artifacts, public API, mathematical method, architecture/training behavior, evaluation surfaces and examples are recoverable. R3 is withheld because the closed Stage-2 state lacks an immutable repository snapshot, package/repository lineage was not byte-compared, runtime generations conflict, and no exact transitive environment or canonical application contract is fixed.

The exact next independently extractable resource is **`CR000064`**.

`CR000021` remains a resolved non-independent registry identity whose technical resource is canonical `CR000184`; it is not independently duplicated in Stage 3. The Stage-2 registry contains 364 entries, giving 363 independently extractable technical identities after this canonical resolution. With 68 Stage-3 resource records complete, **295** remain.

## Current batch — SOB006

Completed canonical scale-out members:

- `Stage3-S046`: `CR000054`
- `Stage3-S047`: `CR000055`
- `CR000056`: pilot-complete; no scale-out duplication
- `Stage3-S049`: `CR000057`
- `Stage3-S050`: `CR000058`
- `CR000059`: pilot-complete; no scale-out duplication
- `Stage3-S051`: `CR000060`
- `Stage3-S052`: `CR000061`
- `Stage3-S053`: `CR000062`
- `Stage3-S054`: `CR000063`

Current canonical completion: **8 / 10 independently extractable SOB006 members**.

No aggregate QA is due until ten canonical SOB006 members are complete.

## Control notes

The preserved S050 and S051 pre-QA control deviations remain documented in their checkpoint QA and prior reports; no history is rewritten. `Stage3-S052` through `Stage3-S054` follow the normal policy: all checkpoint artifacts are assembled and QA-validated before one completion commit is published.

## Current cumulative totals

After `Stage3-S054`:

- Stage-3 technical resource records: **68**
- experiments: **117**
- configurations: **262**
- technical-evidence records: **913**
- static reproducibility assessments: **68**
- unresolved findings: **416**
- explicit conflicting-evidence findings: **88**

S054 adds one resource, zero experiments, zero configurations, eleven technical-evidence records, one reproducibility assessment, eight bounded unresolved findings, and one explicit conflict.

## Continuation rule

Every continuation must read this progress report, the accepted scale-out plan, the active unresolved register, the latest checkpoint QA, and `stage-3-control-reconciliation-01.md`; verify the current branch head; resume from the exact `Next resource`; resolve final Stage-2 authority before extraction; preserve source scope; perform no scientific workload execution; validate schemas/cross-references; update cumulative counts; and publish only after QA passes.

Normal checkpoint size remains one or two resources. Normal batch size remains ten independently extractable resources, with aggregate QA required before advancing beyond a completed batch.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. Stage 3 remains static-only: no scientific resource, dependency, environment, notebook, script, package, source archive, model training, evaluation, inference, test, provider pipeline, accelerator workflow, or benchmark is executed. R5 remains prohibited.

## Exact next action

Start **`Stage3-S055`** with **`CR000064`**.
