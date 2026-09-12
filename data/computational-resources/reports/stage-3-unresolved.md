# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-13
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S233`

## Current totals

- Unresolved findings: **1431**
- Explicit conflicts: **147**
- Next unresolved ID: `S3U-1432`

## New findings in S233

- `S3U-1430` — CR000274 / archive_payload_and_file_inventory_not_inspected / low: The provider reports an approximately 13.1 GB archived dataset containing experimental image data and trained neural-network weights, but the archive was not downloaded or opened; file-level inventory, image/weight schema, and payload completeness therefore remain unverified.
- `S3U-1431` — CR000274 / provider_checksum_not_independently_recomputed / low: The authoritative dataset record includes checksum metadata, but no archive payload was retrieved and the provider checksum was not independently recomputed during Stage 3.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
