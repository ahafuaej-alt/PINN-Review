# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-13
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S270`
Latest reconciliation: `Stage3-RC09` — PASS

## Current totals

- Unresolved findings: **1524**
- Explicit conflicts: **155**
- Next unresolved ID: `S3U-1525`

## New findings in S270

- `S3U-1521` — CR000319 / archive_repository_equivalence_unresolved / medium: the primary paper links both the Zenodo deposit and companion repository, and the 15 August 2021 repository snapshot is temporally close to the deposit, but the Zenodo ZIP was not opened and byte-for-byte or manifest equivalence is not established.
- `S3U-1522` — CR000319 / contemporaneous_environment_installation_unresolved / high: the inspected historical notebooks expose their imports and entrypoints, but the snapshot has no dependency manifest with version pins and no installation procedure, blocking a substantially specified environment/use path and therefore blocking `R2`.
- `S3U-1523` — CR000319 / archive_and_repository_license_unresolved / medium: no explicit licence was independently verified for the authoritative Zenodo deposit or the supporting historical repository snapshot; publication licensing is not transferred by inference.
- `S3U-1524` — CR000319 / binary_payload_and_execution_verification_deferred / medium: no Zenodo archive, bundled binary data/checkpoint or notebook was opened/executed, so binary contents, notebook execution order and end-to-end result reproduction remain unverified.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused. RC09 remains count-neutral and adds no unresolved finding or explicit conflict.
