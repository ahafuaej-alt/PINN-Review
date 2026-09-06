# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-06  
Current checkpoint: `Stage3-S093`  
Current batch: `SOB010` (8/10)  
Current unresolved count: **698**  
Next unresolved ID: `S3U-0699`  
Explicit conflict count: **101**

## Stage3-S093 additions — CR000105

- `S3U-0694` — No reconstructable dependency/environment manifest is bundled; the example notebook installs `megnet` and `pymatgen` without pinned versions.
- `S3U-0695` — Training source and the training procedure for the four bundled pretrained models are not included in the inspected repository snapshot.
- `S3U-0696` — Model metadata names provider training datasets, but those training datasets and immutable checksums are not bundled in this repository.
- `S3U-0697` — Training seeds and study hardware provenance are not documented in the inspected repository evidence.
- `S3U-0698` — The example notebook demonstrates only formation-energy and band-gap-regression inference although four pretrained model families are bundled; complete evaluation procedures for all four are not documented here.

No new explicit conflict was added in S093. Cumulative explicit conflict count remains **101**.

## Continuation

Continue from `S3U-0699` only if a later checkpoint generates a genuinely new unresolved finding. Preserve the cumulative unresolved/conflict counts above.
