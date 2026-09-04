# Computational Resources Stage 3 — Progress

Status date: 2026-09-04

| Field | Value |
|---|---|
| Stage-3 phase | Controlled scale-out in progress |
| Current planning checkpoint | Stage3-SO-D01 |
| Pilot extraction checkpoint | Stage3-P07 |
| Pilot acceptance checkpoint | Stage3-A01 |
| Last completed scale-out checkpoint | Stage3-S060 |
| Next scale-out checkpoint | Stage3-S061 |
| Latest checkpoint resource | CR000069 |
| Forward frontier resource | CR000069 |
| Next resource | CR000070 |
| Next planned checkpoint resources | CR000070 |
| Current scale-out batch | SOB007 |
| Current batch completed members | CR000066, CR000067, CR000068, CR000069 — 4 / 10 |
| Completed Stage-3 technical resource records | 74 |
| Resolved non-independent registry identity encountered | CR000021 → CR000184 |
| Remaining independently extractable registry resources | 289 |
| Approved pilot resources completed | 10 / 10 |
| Completed experiment count | 132 |
| Completed configuration count | 278 |
| Technical evidence records | 988 |
| Static reproducibility assessments | 74 |
| Current QA status | PASS |
| Current unresolved technical item count | 465 |
| Next unresolved ID | S3U-0466 |
| Current conflicting-evidence finding count | 89 |
| Aggregate batch QA | SOB001–SOB006 PASS; SOB007 in progress |
| Methodology status | Stage3-D01 accepted without schema change |
| Control reconciliation | `reports/stage-3-control-reconciliation-01.md` |

## Current continuation state

`Stage3-S060` completes `CR000069`, preserving Stage-2 pilot authority for `https://github.com/maziarraissi/PINNs`, pinned commit `932f50a2d8ef4e80d1456bbae6887a73ff5166ef`, MIT license, and four verified source-scoped relationships: PRL000107/414 paper mention, PRL000121/447 supporting dependency, PRL000122/450 official, and PRL000158/526 dataset mention.

The resource is represented as a **PINN implementation**. Its canonical repository spans continuous-time inference and identification plus discrete-time inference and identification. Four bounded experiments/configurations preserve the Schrodinger, Navier-Stokes, KdV, and Allen-Cahn workflows without multiplying every repository artifact into a separate experiment.

Static reproducibility is **R1**. Source, bundled data, mathematics, architectures, training loops, major hyperparameters, explicit seeds, evaluation logic, citation metadata, and MIT license are visible. R2 is withheld because no dependency/version manifest, installation specification, exact historical TensorFlow version, or hardware provenance establishes a dependable reconstruction environment.

The exact next independently extractable resource is **`CR000070`**.

The Stage-2 registry contains 364 entries. `CR000021` remains a resolved non-independent identity canonically mapped to `CR000184`, leaving 363 independently extractable technical identities. With 74 Stage-3 resource records complete, **289** remain.

## Current batch — SOB007

Canonical completed members:

- `Stage3-S057`: `CR000066`
- `Stage3-S058`: `CR000067`
- `Stage3-S059`: `CR000068`
- `Stage3-S060`: `CR000069`

Current canonical completion: **4 / 10**. Aggregate batch QA is not yet due.

## Current cumulative totals

After `Stage3-S060`:

- Stage-3 technical resource records: **74**
- experiments: **132**
- configurations: **278**
- technical-evidence records: **988**
- static reproducibility assessments: **74**
- unresolved findings: **465**
- explicit conflicting-evidence findings: **89**

## Continuation rule

Every continuation must verify the live branch head, read this report, the accepted scale-out plan, active unresolved register, latest checkpoint QA, latest applicable aggregate QA, and control reconciliation; resume from the exact `Next resource`; preserve final Stage-2 authority and source scope; stay static-only; validate schemas and cross-references; and publish only after QA passes.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. No scientific resource, dependency, environment, model, dataset, training, inference, evaluation, test or benchmark is executed. R5 remains prohibited.

## Exact next action

Start **`Stage3-S061`** with **`CR000070`**.
