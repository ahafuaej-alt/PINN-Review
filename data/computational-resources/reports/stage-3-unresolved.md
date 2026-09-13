# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-13
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S274`
Latest reconciliation: `Stage3-RC09` — PASS

## Current totals

- Unresolved findings: **1536**
- Explicit conflicts: **155**
- Next unresolved ID: `S3U-1537`

## New findings in S274

- `S3U-1534` — CR000323 / figshare_collection_item_manifest_and_versioning_unresolved / medium: the exact Figshare collection identity is established, but the verifier receives an access-layer 403 at the collection landing, so item identifiers, item versions, filenames, formats, checksums and any separate dataset DOI remain independently unresolved.
- `S3U-1535` — CR000323 / collection_to_paper_structure_mapping_unresolved / medium: the primary paper states that structure graphs and defect structures are available at the Figshare collection, but the exact collection-item/file mapping to the generated defect structures, the 1280 band-structure calculations and the 140 resistive-switching structures is not independently established.
- `S3U-1536` — CR000323 / dataset_license_unresolved / medium: no explicit collection- or item-level Figshare licence was independently verified; publication terms and the separate software-repository licence are not transferred to the dataset by inference.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused. RC09 remains count-neutral and adds no unresolved finding or explicit conflict.
