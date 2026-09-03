# Computational Resources Stage 3 — Progress

Status date: 2026-09-03

| Field | Value |
|---|---|
| Stage-3 phase | Controlled scale-out in progress |
| Current planning checkpoint | Stage3-SO-D01 |
| Pilot extraction checkpoint | Stage3-P07 |
| Pilot acceptance checkpoint | Stage3-A01 |
| Last completed scale-out checkpoint | Stage3-S055 |
| Next scale-out checkpoint | Stage3-S056 |
| Latest checkpoint resource | CR000064 |
| Forward frontier resource | CR000064 |
| Next resource | CR000065 |
| Next planned checkpoint resources | CR000065 |
| Current scale-out batch | SOB006 |
| Current batch completed members | CR000054, CR000055, CR000057, CR000058, CR000060, CR000061, CR000062, CR000063, CR000064 — 9 / 10 |
| Completed Stage-3 technical resource records | 69 |
| Resolved non-independent registry identity encountered | CR000021 → CR000184 |
| Remaining independently extractable registry resources | 294 |
| Approved pilot resources completed | 10 / 10 |
| Completed experiment count | 122 |
| Completed configuration count | 267 |
| Technical evidence records | 931 |
| Static reproducibility assessments | 69 |
| Current QA status | PASS |
| Current unresolved technical item count | 427 |
| Next unresolved ID | S3U-0428 |
| Current conflicting-evidence finding count | 88 |
| Aggregate batch QA | SOB001–SOB005 PASS |
| Methodology status | Stage3-D01 accepted without schema change |
| Control reconciliation | `reports/stage-3-control-reconciliation-01.md` |
| Historical progress snapshot | `reports/stage-3-progress-through-s047.md` |
| Historical unresolved register | `reports/stage-3-unresolved-through-s047.md` |
| Historical quality snapshot | `reports/stage-3-quality-report-through-s047.md` |

## Current continuation state

`Stage3-S055` completes `CR000064`, preserving final Stage-2 authority for `https://github.com/Jianxun-Wang/phygeonet` at commit `cb146bcf25dd161d89046281217087c139cba632` and the official `PRL000153` relationship to Atlas paper 514.

Stage 3 refines the technical profile to **`pinn_implementation`**. The pinned repository directly implements PhyGeoNet, a physics-residual-constrained geometry-adaptive convolutional neural-network approach for steady PDEs on irregular mapped geometries.

Five source-defined case directories are represented as five experiments with one active configuration each:

1. `case0` — non-parametric steady heat/Laplace on an irregular geometry.
2. `case1` — non-parametric steady incompressible Navier–Stokes with bundled fully connected-network comparison data.
3. `case2` — heat/Laplace with parameterized boundary temperature.
4. `case3` — steady Navier–Stokes across varying vessel/stenosis geometries.
5. `case4` — Poisson/heat-type solution mapping for spatially varying source fields.

Parameter sweeps, geometry samples and random-field samples remain inside their source case configuration rather than being inflated into separate configurations.

Shared source establishes bicubic upsampling, 16→32→16 convolution widths, ReLU activations, fixed fourth-order finite-difference derivative/Laplacian filters, geometry mapping through `hcubeMesh`, OpenFOAM-style reference-data interfaces, and a global `torch.manual_seed(123)`. Active case scripts hard-code CUDA execution.

Static reproducibility is **R2**. Exact source, PDE residuals, architecture, case hyperparameters, bundled reference fields, several checkpoints/results and evaluation workflows are recoverable. R3 is withheld because no repository license, dependency/version manifest or installation workflow is present; the CUDA environment is not pinned; the case1 checkpoint training invocation/seed is incomplete; and bundled binary/result provenance is only partial.

The exact next independently extractable resource is **`CR000065`**. It is the tenth canonical member of `SOB006`; after `Stage3-S056` completes, aggregate `SOB006` QA is required before advancing to `CR000066`.

`CR000021` remains a resolved non-independent registry identity whose technical resource is canonical `CR000184`; it is not independently duplicated in Stage 3. The Stage-2 registry contains 364 entries, giving 363 independently extractable technical identities. With 69 Stage-3 resource records complete, **294** remain.

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
- `Stage3-S055`: `CR000064`

Current canonical completion: **9 / 10 independently extractable SOB006 members**.

Aggregate QA becomes due when `CR000065` completes the tenth member; no advance to `CR000066` is permitted before that aggregate QA passes.

## Control notes

The preserved S050 and S051 pre-QA control deviations remain documented without history rewrite. `Stage3-S052` through `Stage3-S055` follow the normal policy: all checkpoint artifacts are assembled and QA-validated before one completion commit is published.

## Current cumulative totals

After `Stage3-S055`:

- Stage-3 technical resource records: **69**
- experiments: **122**
- configurations: **267**
- technical-evidence records: **931**
- static reproducibility assessments: **69**
- unresolved findings: **427**
- explicit conflicting-evidence findings: **88**

S055 adds one resource, five experiments, five configurations, eighteen technical-evidence records, one reproducibility assessment, eleven bounded unresolved findings, and zero explicit conflicts.

## Continuation rule

Every continuation must read this progress report, the accepted scale-out plan, active unresolved register, latest checkpoint QA, and `stage-3-control-reconciliation-01.md`; verify the current branch head; resume from the exact `Next resource`; resolve final Stage-2 authority before extraction; preserve source scope; execute no scientific workload; validate schemas/cross-references; update cumulative counts; and publish only after QA passes.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. Stage 3 remains static-only: no dependency, environment, OpenFOAM case, script, checkpoint, model training, evaluation, inference, test, accelerator workflow or benchmark is executed. R5 remains prohibited.

## Exact next action

Start **`Stage3-S056`** with **`CR000065`**. After S056, perform aggregate **`SOB006` QA** before any work on CR000066.
