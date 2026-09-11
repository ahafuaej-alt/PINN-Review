# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-11
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S201`

## Current totals

- Unresolved findings: **1346**
- Explicit conflicts: **145**
- Next unresolved ID: `S3U-1347`

## New findings in S201

- `S3U-1343` — CR000229 / identity_provenance / low: The recorded Stage-1 owner path is unavailable; accepted VA000040 repairs the canonical repository owner to juansensio while preserving the historical URL as provenance.
- `S3U-1344` — CR000229 / dependency_pinning / medium: PyTorch is explicitly required by the README but is unversioned and absent from assessed install_requires, so the core backend dependency is not reproducibly pinned by package metadata.
- `S3U-1345` — CR000229 / environment_lock / low: Python >=3.6 and package version 2021.12.06 are recorded, but a full transitive environment lock is not established in the assessed static scope.
- `S3U-1346` — CR000229 / example_scope / low: Repository tutorials/examples are not promoted to standalone Stage-3 experiments without a distinct evidence-defined scientific case.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
