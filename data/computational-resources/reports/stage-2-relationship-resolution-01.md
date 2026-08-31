# Computational Resources Stage 2 — Relationship Resolution 01

Verification date: 2026-08-31

## Purpose

This corrective pass resolves the 13 Stage-2 relationship assertions that were historically recorded as `not_verified`. Historical batch files are preserved for auditability. The `stage-2-relationship-resolution-01` overlay is authoritative for the same PRL and CR identifiers.

## Final relationship disposition

| PRL | Resource | Atlas paper | Final disposition | Final relationship | Resolution |
|---|---|---:|---|---|---|
| PRL000114 | CR000038 | 431 | resolved invalid | none | Paper 431 names the two HFM resources in references 18–19; it does not identify the `huidonghu` gist profile. |
| PRL000136 | CR000054 | 476 | verified | `third_party_implementation` | `Alexzihaohu/NSFnets` implements the same four VP-NSFnet benchmark cases, but repository commit metadata identifies the maintainer as Zihao Hu rather than an author of paper 476. |
| PRL000163 | CR000074 | 536 | verified | `paper_software_mention` | Paper 536 explicitly states that its B-PINNs were implemented using `hamiltorch`; internal reference [66] is paper-local provenance. |
| PRL000167 | CR000076 | 549 | resolved invalid | none | `trapz-PiNN` is the method name; the paper points code to the author profile and data to `sjiang23/senbaojiang.github.io`, not to a distinct `trapz-PiNN` repository. |
| PRL000189 | CR000088 | 600 | verified | `official` | Paper 600 directly gives `hl4220/Extended-Physics-Informed-Neural-Operator`; Stage 1 contained owner/name transcription errors. |
| PRL000218 | CR000111 | 671 | verified | `official` | Paper 671 directly gives `xzhao399/DEM_TO`; Stage 1 incorrectly absorbed the `.git` suffix into the repository name. |
| PRL000223 | CR000114 | 692 | verified | `official` | Paper 692 directly gives the DG-PINN repository; Stage 1 omitted one `n` from the owner name. |
| PRL000250 | CR000128 | 721 | verified | `secondary_review_mention` | Paper 721 names Power Grid Lib in OPF and cites the PGLib-OPF benchmark paper as internal reference [118]; the generic `/pgl` path is corrected to `pglib-opf`. |
| PRL000309 | CR000146 | 810 | verified | `official` | Paper 810 directly states that the full improved-PINN code is available at the same repository used by paper 779. The earlier Stage-2 negative conclusion was incorrect. |
| PRL000001 | CR000307 | 20 | resolved invalid | none | Paper 476 internal reference [20] was incorrectly parsed as Atlas ID 20. |
| PRL000002 | CR000307 | 21 | resolved invalid | none | Paper 476 internal reference [21] was incorrectly parsed as Atlas ID 21. |
| PRL000003 | CR000307 | 22 | resolved invalid | none | Paper 476 internal reference [22] was incorrectly parsed as Atlas ID 22. |
| PRL000225 | CR000327 | 692 | resolved invalid | none | CR000327 is paper 692's publication DOI, not its dataset; JHTDB and the DG-PINN repository are represented separately. |

## Canonical URL corrections

- `CR000088`: `h14220/ExtendedPhysics-Informed-Neural-Operator` → `hl4220/Extended-Physics-Informed-Neural-Operator` (`VA000040`).
- `CR000111`: `xzhao399/DEM_TOgit` → `xzhao399/DEM_TO` (`VA000041`).
- `CR000114`: `AmirhosseinnKhademi/DG-PINN` → `AmirhosseinnnKhademi/DG-PINN` (`VA000042`).
- `CR000128`: `power-grid-lib/pgl` → `power-grid-lib/pglib-opf` (`VA000043`).
- `CR000074` continues to use existing correction `VA000014`: `AdamCobb/hamiltonch` → `AdamCobb/hamiltorch`.

## Corrected accounting

- Stage-1 PRL assertions accounted for: **331 / 331**
- Authoritatively verified Stage-1 relationships: **325**
- Resolved-invalid Stage-1 assertions: **6**
- Active unresolved Stage-1 relationship assertions: **0**
- Historical `not_verified` records retained for auditability: **13**
- Ordinary manual-review resources retained after this pass: **7**
- Scientific-review items retained: **2**

No historical batch record was deleted or rewritten. No software, model, notebook, dataset payload, or executable artifact was installed or run.
