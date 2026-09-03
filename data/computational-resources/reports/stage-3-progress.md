# Computational Resources Stage 3 — Progress

Status date: 2026-09-03

| Field | Value |
|---|---|
| Stage-3 phase | Controlled scale-out in progress |
| Current planning checkpoint | Stage3-SO-D01 |
| Pilot extraction checkpoint | Stage3-P07 |
| Pilot acceptance checkpoint | Stage3-A01 |
| Last completed scale-out checkpoint | Stage3-S051 |
| Next scale-out checkpoint | Stage3-S052 |
| Latest checkpoint resource | CR000060 |
| Forward frontier resource | CR000060 |
| Next resource | CR000061 |
| Next planned checkpoint resources | CR000061 |
| Current scale-out batch | SOB006 |
| Current batch completed members | CR000054, CR000055, CR000057, CR000058, CR000060 — 5 / 10 |
| Completed Stage-3 technical resource records | 65 |
| Resolved non-independent registry identity encountered | CR000021 → CR000184 |
| Remaining independently extractable registry resources | 298 |
| Approved pilot resources completed | 10 / 10 |
| Completed experiment count | 116 |
| Completed configuration count | 258 |
| Technical evidence records | 874 |
| Static reproducibility assessments | 65 |
| Current QA status | PASS |
| Current unresolved technical item count | 392 |
| Next unresolved ID | S3U-0393 |
| Current conflicting-evidence finding count | 84 |
| Aggregate batch QA | SOB001–SOB005 PASS |
| Methodology status | Stage3-D01 accepted without schema change |
| Control reconciliation | `reports/stage-3-control-reconciliation-01.md` |
| Historical progress snapshot | `reports/stage-3-progress-through-s047.md` |
| Historical unresolved register | `reports/stage-3-unresolved-through-s047.md` |
| Historical quality snapshot | `reports/stage-3-quality-report-through-s047.md` |

## Current continuation state

`Stage3-S051` completes `CR000060`, the Stage-2-pinned `Teoroo-CMC/PiNN` repository at commit `d511275a59e9a23330a7038977bf52b1f5485302`. `PRL000148` and `PRL000263` remain the official relationships to Atlas papers 511 and 744.

Stage 3 resolves the technical role as a **supporting scientific-ML library**. Here PiNN expands to **Pair-wise Interaction Neural Network** and implements atomic/equivariant neural-network infrastructure for molecules, materials and electrochemical systems; it is not a physics-informed neural-network/PDE PINN implementation. Network/model registries, dataset loaders, environment/install routes and CLI workflows are represented at resource scope. No paper-specific experiment/configuration is manufactured.

The exact next independently extractable resource is **`CR000061`**.

`CR000021` remains a resolved non-independent registry identity whose technical resource is canonical `CR000184`; it is not independently duplicated in Stage 3. The Stage-2 registry contains 364 entries, giving 363 independently extractable technical identities after this canonical resolution. With 65 Stage-3 resource records complete, **298** remain.

## Current batch — SOB006

Completed canonical scale-out members:

- `Stage3-S046`: `CR000054`
- `Stage3-S047`: `CR000055`
- `CR000056`: pilot-complete; no scale-out duplication
- `Stage3-S049`: `CR000057`
- `Stage3-S050`: `CR000058`
- `CR000059`: pilot-complete; no scale-out duplication
- `Stage3-S051`: `CR000060`

Current canonical completion: **5 / 10 independently extractable SOB006 members**.

No aggregate QA is due until ten canonical SOB006 members are complete.

## Stage3-S050 control note

S050 preserved one isolated pre-QA draft commit before its completion commit. That historical deviation remains documented in S050 QA and is not rewritten.

## Stage3-S051 control note

The normal checkpoint policy remains one completed checkpoint commit after QA. During S051 staging, two unintended pre-QA commits occurred: `124b8ae4c36a394ec60e988146b9a0f529c75276` introduced an empty root path `SHOULD_NOT_USE`, and `214d072b2eb7b2b20ea2a2a57559860bb844f7ed` introduced placeholder `TEMP` content at the intended S051 resource path. The S051 completion tree deletes the unintended root path and replaces the placeholder with the validated CR000060 resource record. The commits are preserved without force push, rebase, squash or history rewrite. The final S050→S051 net tree contains only legitimate Stage-3 checkpoint artifacts; the deviation has no scientific-count, ontology, source-authority or final path-scope effect.

## Current cumulative totals

After `Stage3-S051`:

- Stage-3 technical resource records: **65**
- experiments: **116**
- configurations: **258**
- technical-evidence records: **874**
- static reproducibility assessments: **65**
- unresolved findings: **392**
- explicit conflicting-evidence findings: **84**

S051 adds one resource, zero experiments, zero configurations, twelve technical-evidence records, one reproducibility assessment, six bounded unresolved findings, and zero explicit conflicts.

## Continuation rule

Every continuation must read this progress report, the accepted scale-out plan, the active unresolved register, the latest checkpoint QA, and `stage-3-control-reconciliation-01.md`; verify the current branch head; resume from the exact `Next resource`; resolve final Stage-2 authority before extraction; preserve source scope; perform no scientific workload execution; validate schemas/cross-references; update cumulative counts; and publish only after QA passes.

Normal checkpoint size remains one or two resources. Normal batch size remains ten independently extractable resources, with aggregate QA required before advancing beyond a completed batch.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. Stage 3 remains static-only: no scientific resource, dependency, environment, container, test, dataset conversion, model training, evaluation or inference workflow is executed. R5 remains prohibited.

## Exact next action

Start **`Stage3-S052`** with **`CR000061`**.
