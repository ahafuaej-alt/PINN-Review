# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-13
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S271`
Latest reconciliation: `Stage3-RC09` — PASS

## Current totals

- Unresolved findings: **1527**
- Explicit conflicts: **155**
- Next unresolved ID: `S3U-1528`

## New findings in S271

- `S3U-1525` — CR000320 / exact_ess_dive_package_identity_unresolved / high: the primary paper states that short records from East River headwater gauging stations are available on ESS-DIVE, but the exact data-package DOI/version for the Quigley and Rock Creek records is not independently resolved from the portal-level Stage-2 identity.
- `S3U-1526` — CR000320 / package_file_schema_and_mapping_unresolved / medium: catchment-level record periods, counts and model-use handling are documented in the paper, but the exact ESS-DIVE file manifest, streamflow variable names/units, quality-control metadata and file-level mapping to the reported study inputs are not independently verified.
- `S3U-1527` — CR000320 / package_license_and_payload_verification_deferred / medium: ESS-DIVE documents a portal-wide public-dataset licence policy of CC BY 4.0 or CC0, but the package-specific licence cannot be assigned until the exact package is resolved; no payload, API response or dataset file was downloaded/opened.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused. RC09 remains count-neutral and adds no unresolved finding or explicit conflict.
