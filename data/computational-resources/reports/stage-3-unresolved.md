# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-13
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S260`
Latest reconciliation: `Stage3-RC08` - PASS

## Current totals

- Unresolved findings: **1488**
- Explicit conflicts: **151**
- Next unresolved ID: `S3U-1489`

## New findings in S260

- `S3U-1484` - CR000309 / artifact_role_conflict / high: the primary-paper relationship and `CITATION.cff` label the resource as a dataset, while the pinned root contains four executable notebooks plus citation/licence files and no standalone dataset file visible at root. Stage 3 preserves the historical label but profiles the actual pinned artifact as `pinn_implementation`. **Explicit conflict.**
- `S3U-1485` - CR000309 / citation_doi_placeholder / medium: `CITATION.cff` declares `10.5281/zenodo.1234`; Stage 2 identified it as placeholder/defective metadata and no verified replacement resource DOI is established.
- `S3U-1486` - CR000309 / environment_not_fully_pinned / medium: notebook imports establish the dependency family and one Plotly version is explicitly documented, but most dependency versions are unpinned and no dependency/environment manifest exists.
- `S3U-1487` - CR000309 / standalone_dataset_payload_unresolved / medium: no standalone dataset file is visible at the pinned repository root, and the exact location or generation path of the dataset named by the paper/citation metadata remains unresolved.
- `S3U-1488` - CR000309 / paper_to_notebook_mapping_incomplete / medium: the pinned notebooks implement trapz-PiNN and supporting reference calculations, but the exact mapping of every numerical example in the paper to a repository notebook is not fully normalized.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
