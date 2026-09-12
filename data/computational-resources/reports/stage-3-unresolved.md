# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Status

- Latest completed checkpoint: `Stage3-S236`
- Latest reconciliation: `Stage3-RC07` — **PASS (count-neutral)**
- Total unresolved findings: **1576**
- Explicit conflicts: **146**

Unresolved findings are bounded evidence gaps, not permission to infer missing technical facts. They remain attached to the resource/evidence scope that created them and may be closed only by stronger authoritative evidence or an accepted reconciliation.

## Recent unresolved findings

| ID | Resource | Finding | Status |
|---|---|---|---|
| S3U-1576 | CR000279 | The authoritative Copernicus Marine product identity, DOI and service terms are verified, but Stage 3 did not normalize the exact file/version/time subset used by paper 153 and did not download, open, subset or parse any product payload. | OPEN |
| S3U-1575 | CR000278 | The exact EIRIE item URL is verified from paper 146, but current direct item transport did not resolve; authentication/access requirements, item-level licence, standalone dataset citation and payload metadata remain bounded unknowns. | OPEN |
| S3U-1574 | CR000277 | The final Stage-2 AIAA supplementary archive locator is blocked/unverified; the archive was not retrieved, so payload contents, licence, checksum and file manifest remain unknown. | OPEN |
| S3U-1573 | CR000276 | The final Stage-2 OSF project record establishes public project metadata but not a reusable license or archive/file-level technical manifest; project payload was not downloaded or opened. | OPEN |
| S3U-1572 | CR000275 | The final Stage-2 Zenodo record identifies the provider-reported RAR archive and checksum metadata, but Stage 3 did not open the archive or independently recompute the checksum, and no reusable license is established by the Stage-2 record. | OPEN |
| S3U-1571 | CR000274 | The authoritative Stage-2 identity is a public GitHub repository, but it is archived and its declared dependencies target TensorFlow 1.3.0 and Python 3.5; Stage 3 performed static inspection only and did not establish present-day executability. | OPEN |
| S3U-1570 | CR000273 | The repository exposes the spreadsheet/archive names and describes the Digimat-AM generation workflow, but the bundled spreadsheet/archives were not opened and the corresponding Digimat-AM models are not in the repository; no reusable repository licence is established. | OPEN |
| S3U-1569 | CR000272 | The historical MagNet Challenge 2023 repository points to successor data/tool services, but exact payload/version equivalence between those successors and the paper-used challenge dataset was not established; evaluation archives and submitted models were not opened or executed. | OPEN |
| S3U-1568 | CR000271 | The pinned repository contains subject ZIP archives and states that subjects 1–10 are for training and 11–15 for testing, but Stage 3 did not open the archives, reconstruct the full 15-subject metadata table, or execute preprocessing/training; no reusable repository licence is established. | OPEN |
| S3U-1567 | CR000270 | The provider page documents acquisition, operating conditions, CSV structure, download mirrors and recommended citation, but no explicit reusable dataset licence or version identifier was established and no dataset archive was downloaded or opened. | OPEN |

## Conflict policy

Explicit source conflicts remain preserved in their checkpoint evidence and quality records. A conflict is never silently resolved by preference, convenience, or inferred chronology. RC02–RC07 remain authoritative only for their explicitly accepted count-neutral reconciliation scopes.
