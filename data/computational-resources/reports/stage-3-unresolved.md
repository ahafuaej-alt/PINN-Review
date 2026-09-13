# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-13
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S261`
Latest reconciliation: `Stage3-RC08` - PASS

## Current totals

- Unresolved findings: **1492**
- Explicit conflicts: **152**
- Next unresolved ID: `S3U-1493`

## New findings in S261

- `S3U-1489` - CR000310 / acquisition_duration_version_conflict / high: the paper cites Mendeley Version 1 but reports 11-second acquisitions; the Version-1 provider record reports 10 seconds, while Version 2 later reports 11 seconds. The sources are preserved separately and Version 2 is not silently substituted. **Explicit conflict.**
- `S3U-1490` - CR000310 / version_file_continuity_unresolved / medium: file-level continuity or difference between Mendeley Versions 1 and 2 has not been established because no versioned payload was opened.
- `S3U-1491` - CR000310 / dataset_internal_schema_not_inspected / medium: the provider points to an internal readme, but dataset files and the readme were not downloaded or opened; file names, variables and detailed schema are not normalized.
- `S3U-1492` - CR000310 / paper_split_to_raw_file_mapping_unresolved / medium: the paper documents pitting levels and training/validation/testing segment counts, but the exact mapping from those segments to raw Mendeley files is not reconstructed.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
