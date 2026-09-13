# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-13
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S258`
Latest reconciliation: `Stage3-RC08` — PASS

## Current totals

- Unresolved findings: **1480**
- Explicit conflicts: **150**
- Next unresolved ID: `S3U-1481`

## New findings in S258

- `S3U-1478` — CR000307 / nsfnets_paper_specific_jhtdb_selection_not_fully_reconstructed / medium: NSFnets uses JHTDB channel-flow DNS as the reference solution and source of initial/boundary data while simulating selected subdomains and time intervals; exact paper-specific subdomain, time-window and data-request mapping is not fully normalized in Stage 3.
- `S3U-1479` — CR000307 / dg_pinn_paper_specific_jhtdb_selection_not_fully_reconstructed / medium: the DG-PINN turbulent-flow paper identifies JHTDB training/testing data and core channel-flow parameters, but exact cutout requests, point selection and preprocessing are not fully reconstructed.
- `S3U-1480` — CR000307 / jhtdb_payload_not_opened / low: official provider metadata and access mechanisms were inspected statically, but no JHTDB field, cutout, HDF5 payload or data-service response was downloaded or opened.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
