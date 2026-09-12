# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-13
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S232`

## Current totals

- Unresolved findings: **1429**
- Explicit conflicts: **147**
- Next unresolved ID: `S3U-1430`

## New findings in S232

- `S3U-1426` — CR000272 / historical_challenge_payloads_not_inspected / medium: The pinned MagNet Challenge repository documents external training/final-evaluation payloads and bundled evaluation material, but no external dataset archive, evaluation kit, or submitted model was downloaded/opened; payload-level members, versions, and checksums remain unverified.
- `S3U-1427` — CR000272 / historical_to_successor_resource_mapping_not_normalized / medium: The repository states that challenge datasets/tools were reorganized into MagNet Open Database, MagNet-AI, MagNet Toolkit, and MagNet Engine, but exact version-equivalence between those successors and the historical Challenge 2023 payload used by Atlas reference 118 is not established.
- `S3U-1428` — CR000273 / dataset_reuse_license_not_established / medium: No repository licence file or reusable dataset licence is established for CR000273 at the pinned snapshot; no rights statement is inferred from the linked paper.
- `S3U-1429` — CR000273 / public_payload_and_digimat_model_completeness_bounded / medium: The pinned repository bundles an Excel data file and warpage archives, but their contents were not opened; the provider also states that corresponding Digimat-AM model files are too large to upload and are available only by request, so the complete data-generation artifact set is not publicly inspectable in this checkpoint.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
