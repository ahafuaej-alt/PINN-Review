# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-11
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S194`

## Current totals

- Unresolved findings: **1308**
- Explicit conflicts: **144**
- Next unresolved ID: `S3U-1309`

## New findings in S194

- `S3U-1303` — CR000216 / license_scope / high: The CC-BY-4.0 license applies to the website source and does not establish a license for the linked code repository.
- `S3U-1304` — CR000216 / license_metadata_conflict / high: The linked code has no root LICENSE while setup.py simultaneously records LICENSE='(TBD)' and an MIT classifier; no repository-level SPDX is inferred.
- `S3U-1305` — CR000216 / component_license_scope / medium: The bundled DFlex component has its own NVIDIA source-code license and must not be generalized to the whole gradSim repository.
- `S3U-1306` — CR000216 / environment_pinning / medium: The environment is only partially pinned: Python/PyTorch guidance and one Sphinx pin are present, but most Python dependencies and Kaolin/USD versions are not fixed.
- `S3U-1307` — CR000216 / data_availability / medium: Paper workflows reference cached HDF5/input assets and bundled support material, but a complete immutable dataset manifest for all experiments is not established.
- `S3U-1308` — CR000216 / hardware_requirements / medium: Paper-support workflows hard-code CUDA device usage and setup.py builds CUDA extensions, but an exact tested GPU/CUDA toolchain is not pinned.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused. `S3U-1304` is the one new explicit conflict.