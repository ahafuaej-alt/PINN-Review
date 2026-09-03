# Computational Resources Stage 3 — Progress

Status date: 2026-09-03

| Field | Value |
|---|---|
| Stage-3 phase | Controlled scale-out in progress |
| Current planning checkpoint | Stage3-SO-D01 |
| Pilot extraction checkpoint | Stage3-P07 |
| Pilot acceptance checkpoint | Stage3-A01 |
| Last completed scale-out checkpoint | Stage3-S048 |
| Next scale-out checkpoint | Stage3-S049 |
| Latest checkpoint resource | CR000049 — corrective recovery |
| Forward frontier resource | CR000055 |
| Next resource | CR000057 |
| Next planned checkpoint resources | CR000057 |
| Current scale-out batch | SOB006 |
| Current batch completed members | CR000054, CR000055 — 2 / 10 |
| Completed Stage-3 technical resource records | 62 |
| Resolved non-independent registry identity encountered | CR000021 → CR000184 |
| Remaining independently extractable registry resources | 301 |
| Approved pilot resources completed | 10 / 10 |
| Completed experiment count | 112 |
| Completed configuration count | 254 |
| Technical evidence records | 836 |
| Static reproducibility assessments | 62 |
| Current QA status | PASS |
| Current unresolved technical item count | 368 |
| Next unresolved ID | S3U-0369 |
| Current conflicting-evidence finding count | 81 |
| Aggregate batch QA | SOB001–SOB005 PASS |
| Methodology status | Stage3-D01 accepted without schema change |
| Control reconciliation | `reports/stage-3-control-reconciliation-01.md` |
| Historical progress snapshot | `reports/stage-3-progress-through-s047.md` |
| Historical unresolved register | `reports/stage-3-unresolved-through-s047.md` |
| Historical quality snapshot | `reports/stage-3-quality-report-through-s047.md` |

## Authoritative continuation state

`Stage3-S048` restores `CR000049`, which was omitted by the historical transition from `Stage3-S041` (`CR000048`) to `Stage3-S042` (`CR000050`). The corrective checkpoint is intentionally late in Git history; existing checkpoint IDs, commits, and scientific records are not rewritten.

`CR000056` is one of the ten accepted Stage-3 pilot resources and is already complete. It must not be processed again. The forward frontier remains `CR000055`, so the exact next independently extractable resource is **`CR000057`**.

`CR000021` is not an independent technical extraction target after final Stage-2 resolution. Stage 2 preserved its broken `fashli/Delta-PINNs` provenance while canonically resolving the technical resource to `CR000184` (`fsahli/Delta-PINNs`) through `PRL000332`. Stage 3 therefore does not duplicate CR000184 technical facts under CR000021. On the current canonical accounting, 364 closed-registry entries minus this one resolved non-independent identity gives 363 independently extractable technical resources; 62 now have Stage-3 resource records, leaving **301**.

## Canonical scale-out batches

### SOB001 — PASS

`CR000001`, `CR000002`, `CR000004`, `CR000005`, `CR000006`, `CR000007`, `CR000008`, `CR000009`, `CR000011`, `CR000012`.

Checkpoints `Stage3-S001`–`Stage3-S006`. Aggregate QA remains `scaleout-batch-001-aggregate-qa.json`.

### SOB002 — PASS

`CR000013`, `CR000014`, `CR000015`, `CR000016`, `CR000017`, `CR000018`, `CR000019`, `CR000020`, `CR000022`, `CR000023`.

Checkpoints `Stage3-S007`–`Stage3-S016`. `CR000021` is the resolved non-independent Stage-2 identity described above and is not duplicated as a technical extraction. Aggregate QA remains `scaleout-batch-002-aggregate-qa.json`.

### SOB003 — PASS

`CR000024`–`CR000033`.

Checkpoints `Stage3-S017`–`Stage3-S026`. Retrospective aggregate QA is `scaleout-batch-003-aggregate-qa.json` and reconciles exactly to the S026 cumulative totals.

### SOB004 — PASS

`CR000034`–`CR000043`.

Checkpoints `Stage3-S027`–`Stage3-S036`. These checkpoint files historically retained the `SOB003` label; the immutable records are preserved, while `scaleout-batch-004-aggregate-qa.json` establishes the canonical batch membership and reconciles exactly to S036 cumulative totals.

### SOB005 — PASS

Canonical resource order:

`CR000044`, `CR000045`, `CR000046`, `CR000047`, `CR000048`, `CR000049`, `CR000050`, `CR000051`, `CR000052`, `CR000053`.

Historical checkpoints `Stage3-S037`–`Stage3-S045` contain all members except `CR000049`; corrective `Stage3-S048` supplies that missing resource. `scaleout-batch-005-aggregate-qa.json` closes the batch without rewriting Git history.

### SOB006 — IN PROGRESS

Completed members:

- `Stage3-S046`: `CR000054`
- `Stage3-S047`: `CR000055`

`CR000056` is pilot-complete and excluded from scale-out reprocessing. The next member is `CR000057`.

## Current cumulative totals

After `Stage3-S048`:

- Stage-3 technical resource records: **62**
- experiments: **112**
- configurations: **254**
- technical-evidence records: **836**
- static reproducibility assessments: **62**
- unresolved findings: **368**
- explicit conflicting-evidence findings: **81**

The scientific counts through S047 already reconciled exactly. S048 adds one resource, zero experiments, zero configurations, ten technical-evidence records, one reproducibility assessment, six bounded unresolved findings, and zero conflicts.

## Continuation rule

Every continuation must read this progress report, the accepted scale-out plan, the active unresolved register, the latest checkpoint QA, and `stage-3-control-reconciliation-01.md`; verify the current branch head; resume from the exact `Next resource`; resolve final Stage-2 authority before extraction; preserve source scope; perform no scientific workload execution; validate schemas/cross-references; update cumulative counts; and commit only after QA passes.

Normal checkpoint size remains one or two resources. Normal batch size remains ten independently extractable resources, with aggregate QA required before advancing beyond a completed batch.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. Stage 3 remains static-only: no scientific resource, environment, dependency, notebook, training process, inference workflow, solver, dataset payload, checkpoint, model, example, test, or benchmark is executed. R5 remains prohibited.

## Exact next action

Start **`Stage3-S049`** with **`CR000057`**. Do not reprocess `CR000056`.
