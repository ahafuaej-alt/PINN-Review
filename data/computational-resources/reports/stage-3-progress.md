# Computational Resources Stage 3 — Progress

Status date: 2026-09-03

| Field | Value |
|---|---|
| Stage-3 phase | Controlled scale-out in progress |
| Current planning checkpoint | Stage3-SO-D01 |
| Pilot extraction checkpoint | Stage3-P07 |
| Pilot acceptance checkpoint | Stage3-A01 |
| Last completed scale-out checkpoint | Stage3-S052 |
| Next scale-out checkpoint | Stage3-S053 |
| Latest checkpoint resource | CR000061 |
| Forward frontier resource | CR000061 |
| Next resource | CR000062 |
| Next planned checkpoint resources | CR000062 |
| Current scale-out batch | SOB006 |
| Current batch completed members | CR000054, CR000055, CR000057, CR000058, CR000060, CR000061 — 6 / 10 |
| Completed Stage-3 technical resource records | 66 |
| Resolved non-independent registry identity encountered | CR000021 → CR000184 |
| Remaining independently extractable registry resources | 297 |
| Approved pilot resources completed | 10 / 10 |
| Completed experiment count | 117 |
| Completed configuration count | 262 |
| Technical evidence records | 889 |
| Static reproducibility assessments | 66 |
| Current QA status | PASS |
| Current unresolved technical item count | 400 |
| Next unresolved ID | S3U-0401 |
| Current conflicting-evidence finding count | 84 |
| Aggregate batch QA | SOB001–SOB005 PASS |
| Methodology status | Stage3-D01 accepted without schema change |
| Control reconciliation | `reports/stage-3-control-reconciliation-01.md` |
| Historical progress snapshot | `reports/stage-3-progress-through-s047.md` |
| Historical unresolved register | `reports/stage-3-unresolved-through-s047.md` |
| Historical quality snapshot | `reports/stage-3-quality-report-through-s047.md` |

## Current continuation state

`Stage3-S052` completes `CR000061`, preserving the final Stage-2 redirected `ehsanhaghighat/sciann-applications` identity at commit `8c475af6e6a3ae6de6d1757d952ba1eb29438daa`, MIT licensing, and the three verified relationships `PRL000069` (Atlas 338), `PRL000143` (Atlas 495), and `PRL000150` (Atlas 512).

Stage 3 refines the resource role to **`mixed_other`** because this is a broad SciANN applications/examples collection rather than the SciANN core framework itself. The strongly paper-scoped `SciANN-ConstitutiveModeling` directory for Atlas 338 is represented as one experiment with four configurations: deterministic von Mises, stochastic von Mises transfer learning, Drucker-Prager biaxial, and Drucker-Prager undrained biaxial. The wider examples, bundled results, and two external submodules remain resource-level capability/evidence under the bounded-extraction rule.

Static reproducibility is **R1**. Source, MIT license, paper-linked data/code, mathematical constraints, architecture, training hyperparameters, seeds, outputs, and entrypoints are recoverable, but CR000061 has no authoritative dependency/environment manifest, no pinned SciANN/runtime versions, and no installation workflow. The separate SciANN core resource `CR000062` must not be used to fill those gaps by inference.

The exact next independently extractable resource is **`CR000062`**.

`CR000021` remains a resolved non-independent registry identity whose technical resource is canonical `CR000184`; it is not independently duplicated in Stage 3. The Stage-2 registry contains 364 entries, giving 363 independently extractable technical identities after this canonical resolution. With 66 Stage-3 resource records complete, **297** remain.

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

Current canonical completion: **6 / 10 independently extractable SOB006 members**.

No aggregate QA is due until ten canonical SOB006 members are complete.

## Control notes

The preserved S050 and S051 pre-QA control deviations remain documented in their checkpoint QA and prior reports; no history is rewritten. `Stage3-S052` restores the normal policy: all checkpoint artifacts are assembled and QA-validated before one completion commit is published.

## Current cumulative totals

After `Stage3-S052`:

- Stage-3 technical resource records: **66**
- experiments: **117**
- configurations: **262**
- technical-evidence records: **889**
- static reproducibility assessments: **66**
- unresolved findings: **400**
- explicit conflicting-evidence findings: **84**

S052 adds one resource, one experiment, four configurations, fifteen technical-evidence records, one reproducibility assessment, eight bounded unresolved findings, and zero explicit conflicts.

## Continuation rule

Every continuation must read this progress report, the accepted scale-out plan, the active unresolved register, the latest checkpoint QA, and `stage-3-control-reconciliation-01.md`; verify the current branch head; resume from the exact `Next resource`; resolve final Stage-2 authority before extraction; preserve source scope; perform no scientific workload execution; validate schemas/cross-references; update cumulative counts; and publish only after QA passes.

Normal checkpoint size remains one or two resources. Normal batch size remains ten independently extractable resources, with aggregate QA required before advancing beyond a completed batch.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. Stage 3 remains static-only: no scientific resource, dependency, environment, notebook, script, submodule, model training, evaluation, inference, binary model payload, test, or benchmark is executed. R5 remains prohibited.

## Exact next action

Start **`Stage3-S053`** with **`CR000062`**.
