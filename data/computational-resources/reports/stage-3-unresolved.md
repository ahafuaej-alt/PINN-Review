# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-13
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S237`
Latest reconciliation: `Stage3-RC08` — **PASS (count-neutral report-state continuity repair)**

## Current totals

- Unresolved findings: **1437**
- Explicit conflicts: **147**
- Next unresolved ID: `S3U-1438`

## Recent findings

- `S3U-1430` — CR000274 / archive_payload_and_file_inventory_not_inspected / low: The provider reports an archived dataset containing experimental image data and trained neural-network weights, but the archive was not downloaded or opened; file-level inventory and payload completeness remain unverified.
- `S3U-1431` — CR000274 / provider_checksum_not_independently_recomputed / low: Provider checksum metadata are present, but the payload was not retrieved and the checksum was not independently recomputed.
- `S3U-1432` — CR000275 / archive_payload_and_license_bounded / low: The final Stage-2 Zenodo record identifies the provider-reported RAR archive and checksum metadata, but Stage 3 did not open the archive or independently recompute the checksum, and no reusable license is established by the Stage-2 record.
- `S3U-1433` — CR000276 / project_payload_and_license_bounded / low: The final Stage-2 OSF project record establishes public project metadata but not a reusable license or archive/file-level technical manifest; project payload was not downloaded or opened.
- `S3U-1434` — CR000277 / supplementary_archive_unretrieved / medium: The final Stage-2 AIAA supplementary archive locator is blocked/unverified; the archive was not retrieved, so payload contents, licence, checksum and file manifest remain unknown.
- `S3U-1435` — CR000278 / direct_item_transport_and_item_metadata_bounded / medium: The exact EIRIE item URL is verified from paper 146, but current direct item transport did not resolve; authentication/access requirements, item-level licence, standalone dataset citation and payload metadata remain bounded unknowns.
- `S3U-1436` — CR000279 / product_file_and_subset_provenance_not_normalized / low: The authoritative Copernicus Marine product identity, DOI and service terms are verified, but the exact file/version/time subset used by paper 153 was not normalized and no product payload was downloaded or opened.
- `S3U-1437` — CR000280 / product_file_and_redirect_provenance_not_normalized / low: The product DOI, official Copernicus Marine product identity and service terms are verified, but direct DOI-resolver semantics, exact product version/time-series subset and file-level payload provenance remain bounded; no data payload was downloaded or opened.

RC08 supersedes the report-only `S3U-1572`–`S3U-1577` labels introduced after S233 and restores continuity from S233's authoritative next ID `S3U-1432`. No extraction-log record used the superseded labels. Existing earlier findings and conflicts remain preserved; no historical scientific evidence is changed.
