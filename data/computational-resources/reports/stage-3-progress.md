# Computational Resources Stage 3 — Progress

Status date: 2026-09-03

| Field | Value |
|---|---|
| Stage-3 phase | Controlled scale-out in progress |
| Current planning checkpoint | Stage3-SO-D01 |
| Pilot extraction checkpoint | Stage3-P07 |
| Pilot acceptance checkpoint | Stage3-A01 |
| Last completed scale-out checkpoint | Stage3-S056 |
| Next scale-out checkpoint | Stage3-S057 |
| Latest checkpoint resource | CR000065 |
| Forward frontier resource | CR000065 |
| Next resource | CR000066 |
| Next planned checkpoint resources | CR000066 |
| Current scale-out batch | SOB007 |
| Current batch completed members | none — 0 / 10 |
| Completed Stage-3 technical resource records | 70 |
| Resolved non-independent registry identity encountered | CR000021 → CR000184 |
| Remaining independently extractable registry resources | 293 |
| Approved pilot resources completed | 10 / 10 |
| Completed experiment count | 123 |
| Completed configuration count | 269 |
| Technical evidence records | 944 |
| Static reproducibility assessments | 70 |
| Current QA status | PASS |
| Current unresolved technical item count | 437 |
| Next unresolved ID | S3U-0438 |
| Current conflicting-evidence finding count | 89 |
| Aggregate batch QA | SOB001–SOB006 PASS |
| Methodology status | Stage3-D01 accepted without schema change |
| Control reconciliation | `reports/stage-3-control-reconciliation-01.md` |
| Historical progress snapshot | `reports/stage-3-progress-through-s047.md` |
| Historical unresolved register | `reports/stage-3-unresolved-through-s047.md` |
| Historical quality snapshot | `reports/stage-3-quality-report-through-s047.md` |

## Current continuation state

`Stage3-S056` completes `CR000065`, preserving final Stage-2 authority for `https://github.com/vbalnt/pnnet`, pinned commit `907364ceb2d95d73c64a3ab5c26915664095690f`, and official `PRL000154` relationship to Atlas paper 515, *PN-Net: Conjoined Triple Deep Network for Learning Local Image Descriptors*.

The acronym is resolved explicitly: PN-Net is **not** a Physics-Informed Neural Network. The pinned artifact is represented as **`non_pinn_research_code`** for a computer-vision local-descriptor method. One stable experiment is materialized with two source-defined configurations:

- bundled Liberty **128-D** descriptor evaluation on Notre Dame's 100,000 benchmark pairs;
- active Notre Dame **256-D** triplet-training workflow.

The primary paper, README and evaluation path describe 128-dimensional descriptors, while `train/run.lua` constructs a 256-dimensional output. Stage 3 preserves this as explicit `conflicting_evidence` rather than selecting one synthetic canonical dimension.

The training source uses three weight-sharing branches, L2 descriptor distances, minimum-negative selection, a custom SoftMax/MSE distance-ratio criterion, 1,280,000 generated triplets, SGD with learning rate 0.1, momentum 0.9, weight decay 1e-4 and learning-rate decay 1e-6, batch size 128, and 1000 epochs. The pinned README reports a GTX TITAN X and approximately two minutes per epoch for about 1.2 million triplets.

PhotoTour/Brown dataset payloads are not bundled in the pinned PN-Net tree; the README directs users to the separate `vbalnt/UBC-Phototour-Patches-Torch` repository. Pretrained Liberty model artifacts are bundled, but their binary payloads were not deserialized.

Static reproducibility is **R1**. Source, entrypoints, preprocessing, model/training/evaluation logic and pretrained artifacts are recoverable, but R2 is blocked by missing dependency/environment manifests, exact Torch7/CUDA/cuDNN version contracts, and an installation/environment-creation workflow.

The exact next independently extractable resource is **`CR000066`**.

The Stage-2 registry contains 364 entries. `CR000021` remains a resolved non-independent identity canonically mapped to `CR000184`, leaving 363 independently extractable technical identities. With 70 Stage-3 resource records complete, **293** remain.

## Closed batch — SOB006

Canonical completed members:

- `Stage3-S046`: `CR000054`
- `Stage3-S047`: `CR000055`
- `Stage3-S049`: `CR000057`
- `Stage3-S050`: `CR000058`
- `Stage3-S051`: `CR000060`
- `Stage3-S052`: `CR000061`
- `Stage3-S053`: `CR000062`
- `Stage3-S054`: `CR000063`
- `Stage3-S055`: `CR000064`
- `Stage3-S056`: `CR000065`

`CR000056` and `CR000059` are pilot-complete and are not duplicated.

Aggregate `SOB006` QA: **PASS**.

Batch totals: **10 resources, 16 experiments, 21 configurations, 144 technical-evidence records, 10 reproducibility assessments, 87 new unresolved findings, and 10 new conflicting-evidence findings**.

Historical S046/S047 batch labels and S050/S051 control deviations remain preserved as immutable audit history. The aggregate QA applies the canonical batch membership established by `stage-3-control-reconciliation-01.md` without rewriting historical checkpoint files.

## Current batch — SOB007

Current canonical completion: **0 / 10**.

The first independently extractable member is `CR000066`.

## Current cumulative totals

After `Stage3-S056`:

- Stage-3 technical resource records: **70**
- experiments: **123**
- configurations: **269**
- technical-evidence records: **944**
- static reproducibility assessments: **70**
- unresolved findings: **437**
- explicit conflicting-evidence findings: **89**

S056 adds one resource, one experiment, two configurations, thirteen technical-evidence records, one reproducibility assessment, ten bounded unresolved findings, and one explicit conflict.

## Control notes

The preserved S050 and S051 pre-QA control deviations remain documented; no history is rewritten. `Stage3-S052` through `Stage3-S056` follow the normal policy: all checkpoint and required aggregate-QA artifacts are assembled and validated before one completion commit is published.

## Continuation rule

Every continuation must read this progress report, the accepted scale-out plan, active unresolved register, latest checkpoint QA, latest aggregate QA when a batch has closed, and `stage-3-control-reconciliation-01.md`; verify the current branch head; resume from the exact `Next resource`; resolve final Stage-2 authority before extraction; preserve source scope; perform no scientific workload execution; validate schemas/cross-references; update cumulative counts; and publish only after QA passes.

Normal checkpoint size remains one or two resources. Normal batch size remains ten independently extractable resources, with aggregate QA required before advancement.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. Stage 3 remains static-only: no scientific resource, dependency, environment, notebook, script, package, model, training, inference, evaluation, test, accelerator workflow, dataset download or benchmark is executed. R5 remains prohibited.

## Exact next action

Start **`Stage3-S057`** with **`CR000066`**.
