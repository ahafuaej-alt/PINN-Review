# Computational Resources Stage 2 — B009 Checkpoint 05 Progress

Verification date: 2026-08-28

This checkpoint continues the authoritative B009 progression from B009-C04 and records CR000233 through CR000237. The cumulative `reports/stage-2-progress.md` remains historically complete through B009-C02; checkpoint-specific progress reports are the authoritative continuation deltas until the cumulative report is next consolidated.

## Current authoritative checkpoint

| Field | Value |
|---|---|
| Current logical batch | B009 (in progress) |
| Last completed resource | CR000237 |
| Last persistence checkpoint | B009-C05 |
| Next resource | CR000238 |
| Completed expansion batches | 8 |
| Expansion resources processed | 224 |
| Pending expansion resources | 120 |
| Expansion relationships verified | 179 |
| Completed Stage-1 resource count | 237 |
| Remaining Stage-1 resource count | 120 |
| Completed Stage-1 PRL assertions | 205 |
| Pending Stage-1 PRL assertions | 126 |
| Verified relationship records | 196 |
| Explicitly `not_verified` relationship records | 9 |
| Current scientific-review items | 2 |
| Current ordinary manual-review resources | 10 |
| B009 resources completed | 24 of 25 |
| B009 resources remaining | 1 |
| Current QA status | B009-C05 passed |

Completed CR IDs/ranges are `CR000001–CR000237` plus promoted `CR000358`. Pending Stage-1 CR IDs are `CR000238–CR000357`.

The pilot set, B001–B008, and B009 checkpoints C01–C05 must not be reprocessed. Resume at **CR000238**.

## B009 checkpoint 05 summary

Five resources were processed: CR000233 through CR000237.

- CR000233 / GPyTorch remains `supporting_software_or_library`. It is an MIT-licensed general Gaussian-process library with exact commit `6272eda426c7d4115b0911efcf053a37ab956af9`, formal package metadata, documentation, project citation metadata, and bundled example/test assets. Atlas paper 367 explicitly discusses GPyTorch as a Gaussian-process toolkit relevant to kernel-method alternatives for PINN research; PRL000089 is verified.
- CR000234 / NeuralUQ is resolved to `supporting_software_or_library`. It is a SciML uncertainty-quantification library supporting PINN and neural-operator workflows, pinned at `1af1271d33ad964f34abcb475dda0e6d146e9565`, with citation DOI `10.1137/22M1518189`, `setup.py`, extensive bundled benchmark MAT data, and pretrained model arrays. No repository license was identified. PRL000145 is verified from Atlas paper 495 Table II.
- CR000235 remains a `github_profile`. Atlas paper 495 gives the exact TensorDiffEq organization URL. The organization owns canonical TensorDiffEq repository CR000230, so PRL000146 is verified while technical repository metadata remain on CR000230 and are not duplicated.
- VA000042 corrects CR000236 from the Stage-1 hostname `kailai.github.io` to the paper-stated and live `kailaix.github.io/ADCME.jl/latest/` address without changing CR identity. The documentation belongs to canonical ADCME resource CR000228. PRL000097 is verified from Atlas paper 401.
- VA000043 corrects CR000237 from `deepxdf.readthedocs.io` to the paper-stated `deepxde.readthedocs.io/` address, which resolves to the live DeepXDE documentation. Canonical framework metadata remain on CR000016. PRL000098 is verified from Atlas paper 401.

Checkpoint 05 verifies **five** Stage-1 relationship assertions and records two bounded source-URL corrections while preserving all stable identifiers.

No third-party code or binary was executed, no external dataset was downloaded, no archive or model asset was unpacked, and no Stage-3 normalization was performed. No new ordinary manual-review item, scientific-review item, relationship type, schema issue, or stop condition was produced.

B009 remains in progress with one resource left. The next resource is **CR000238**.
