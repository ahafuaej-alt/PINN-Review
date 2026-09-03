# Computational Resources Stage 3 — Progress

Status date: 2026-09-03

| Field | Value |
|---|---|
| Stage-3 phase | Controlled scale-out in progress |
| Current planning checkpoint | Stage3-SO-D01 |
| Pilot extraction checkpoint | Stage3-P07 |
| Pilot acceptance checkpoint | Stage3-A01 |
| Last completed scale-out checkpoint | Stage3-S049 |
| Next scale-out checkpoint | Stage3-S050 |
| Latest checkpoint resource | CR000057 |
| Forward frontier resource | CR000057 |
| Next resource | CR000058 |
| Next planned checkpoint resources | CR000058 |
| Current scale-out batch | SOB006 |
| Current batch completed members | CR000054, CR000055, CR000057 — 3 / 10 |
| Completed Stage-3 technical resource records | 63 |
| Resolved non-independent registry identity encountered | CR000021 → CR000184 |
| Remaining independently extractable registry resources | 300 |
| Approved pilot resources completed | 10 / 10 |
| Completed experiment count | 112 |
| Completed configuration count | 254 |
| Technical evidence records | 846 |
| Static reproducibility assessments | 63 |
| Current QA status | PASS |
| Current unresolved technical item count | 376 |
| Next unresolved ID | S3U-0377 |
| Current conflicting-evidence finding count | 84 |
| Aggregate batch QA | SOB001–SOB005 PASS |
| Methodology status | Stage3-D01 accepted without schema change |
| Control reconciliation | `reports/stage-3-control-reconciliation-01.md` |
| Historical progress snapshot | `reports/stage-3-progress-through-s047.md` |
| Historical unresolved register | `reports/stage-3-unresolved-through-s047.md` |
| Historical quality snapshot | `reports/stage-3-quality-report-through-s047.md` |

## Current continuation state

`Stage3-S049` completes `CR000057`, the Stage-2-pinned PyDEns framework at commit `748175c4e77d407a5dc593d2f104ce6edddc3126`. `PRL000095` remains a secondary-review mention from Atlas paper 401 and `PRL000140` remains the official framework-paper relationship to Atlas paper 492. Framework examples, tutorials and tests are capability evidence only; no paper-specific experiment/configuration is manufactured.

`CR000056` is one of the ten accepted Stage-3 pilot resources and remains excluded from scale-out reprocessing. The forward frontier is therefore now `CR000057`, and the exact next independently extractable resource is **`CR000058`**.

`CR000021` remains a resolved non-independent registry identity whose technical resource is canonical `CR000184`; it is not independently duplicated in Stage 3. The Stage-2 registry contains 364 entries, giving 363 independently extractable technical identities after this canonical resolution. With 63 Stage-3 resource records complete, **300** remain.

## Current batch — SOB006

Completed members:

- `Stage3-S046`: `CR000054`
- `Stage3-S047`: `CR000055`
- `CR000056`: pilot-complete; no scale-out duplication
- `Stage3-S049`: `CR000057`

Current canonical completion: **3 / 10 independently extractable SOB006 members**.

No aggregate QA is due until ten canonical SOB006 members are complete.

## Completed aggregate QA

- `SOB001`: PASS
- `SOB002`: PASS
- `SOB003`: PASS
- `SOB004`: PASS
- `SOB005`: PASS

Historical batch-label drift through S047 remains reconciled by `reports/stage-3-control-reconciliation-01.md` and the canonical aggregate QA records; historical checkpoint files are not rewritten solely to relabel them.

## Current cumulative totals

After `Stage3-S049`:

- Stage-3 technical resource records: **63**
- experiments: **112**
- configurations: **254**
- technical-evidence records: **846**
- static reproducibility assessments: **63**
- unresolved findings: **376**
- explicit conflicting-evidence findings: **84**

S049 adds one resource, zero experiments, zero configurations, ten technical-evidence records, one reproducibility assessment, eight bounded unresolved findings, and three explicit conflicts.

## Continuation rule

Every continuation must read this progress report, the accepted scale-out plan, the active unresolved register, the latest checkpoint QA, and `stage-3-control-reconciliation-01.md`; verify the current branch head; resume from the exact `Next resource`; resolve final Stage-2 authority before extraction; preserve source scope; perform no scientific workload execution; validate schemas/cross-references; update cumulative counts; and commit only after QA passes.

Normal checkpoint size remains one or two resources. Normal batch size remains ten independently extractable resources, with aggregate QA required before advancing beyond a completed batch.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. Stage 3 remains static-only: no scientific resource, environment, dependency, notebook, tutorial, test, training process, inference workflow, solver, dataset payload, checkpoint, model, example, or benchmark is executed. R5 remains prohibited.

## Exact next action

Start **`Stage3-S050`** with **`CR000058`**.
