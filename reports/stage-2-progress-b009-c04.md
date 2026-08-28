# Computational Resources Stage 2 — B009 Checkpoint 04 Progress

Verification date: 2026-08-28

This checkpoint reconciles the already-persisted B009-C03 resource verification at branch commit `b091e05ced95519957a33e24695554bd7ce690e2` and records the newly completed B009-C04 verification. The older cumulative `reports/stage-2-progress.md` remains historically complete through B009-C02; this checkpoint-specific report is the authoritative continuation delta until the cumulative report is next consolidated.

## Current authoritative checkpoint

| Field | Value |
|---|---|
| Current logical batch | B009 (in progress) |
| Last completed resource | CR000232 |
| Last persistence checkpoint | B009-C04 |
| Next resource | CR000233 |
| Completed expansion batches | 8 |
| Expansion resources processed | 219 |
| Pending expansion resources | 125 |
| Expansion relationships verified | 174 |
| Completed Stage-1 resource count | 232 |
| Remaining Stage-1 resource count | 125 |
| Completed Stage-1 PRL assertions | 200 |
| Pending Stage-1 PRL assertions | 131 |
| Verified relationship records | 191 |
| Explicitly `not_verified` relationship records | 9 |
| Current scientific-review items | 2 |
| Current ordinary manual-review resources | 10 |
| B009 resources completed | 19 of 25 |
| B009 resources remaining | 6 |
| Current QA status | B009-C04 passed |

Completed CR IDs/ranges are `CR000001–CR000232` plus promoted `CR000358`. Pending Stage-1 CR IDs are `CR000233–CR000357`.

The pilot set, B001–B008, and B009 checkpoints C01–C04 must not be reprocessed. Resume at **CR000233**.

## Reconciled B009 checkpoint 03

B009-C03 processed CR000223–CR000227 and passed QA. Five Stage-1 relationships, PRL000079–PRL000083, were verified from Atlas review paper 367. VA000037 preserves CR000223 across the official Modulus-to-PhysicsNeMo rename, VA000038 maps the SciANN pointer CR000224 to canonical CR000062, accepted VA000002 maps CR000225 to canonical NeuroDiffEq CR000137, and VA000039 maps CR000226 to canonical PyDEns CR000057. CR000227 remains the distinct NeuralPDE.jl framework. No new manual-review or stop condition was produced.

## B009 checkpoint 04 summary

Five resources were processed: CR000228 through CR000232. CR000228, CR000229, CR000230, and CR000231 were pinned to exact default-branch commits; CR000232 is an unavailable historical GitHub location resolved to existing canonical Elvet resource CR000063.

- CR000228 / ADCME.jl is verified as MIT-licensed supporting scientific-computing and automatic-differentiation software with `Project.toml`, documentation, examples, and citation arXiv:2011.11955. It supports physics-constrained learning but is broader than a PINN-specific framework. PRL000084 is verified from paper 367.
- CR000229 / Nangs is verified as an Apache-2.0 PyTorch neural-PDE/PINN library. VA000040 repairs the unavailable `juanpedro/nangs` Stage-1 path to `juansensio/nangs` without changing CR identity. PRL000085 is verified from paper 367.
- CR000230 / TensorDiffEq is verified as a TensorFlow PINN framework for scalable multi-worker forward/inverse solvers with citation arXiv:2103.16034 and multiple formal environment manifests. No repository license was identified; README open-source wording and secondary-review license labels were not promoted to SPDX. PRL000086 is verified from paper 367.
- CR000231 / IDRLnet is verified as an Apache-2.0 PyTorch PINN framework with citation arXiv:2107.04320, formal dependencies, extensive examples, and bundled Navier-Stokes example/reference CSV files. PRL000087 for paper 367 and PRL000144 for paper 495 are both verified.
- CR000232 is resolved by VA000041 to canonical Elvet resource CR000063. Canonical Elvet technical metadata remain on CR000063 and are not duplicated. PRL000088 is verified from paper 367.

Checkpoint 04 therefore verifies **six** Stage-1 relationship assertions: PRL000084, PRL000085, PRL000086, PRL000087, PRL000088, and PRL000144. Two URL/alias resolutions, VA000040 and VA000041, preserve stable identifier policy.

No third-party code or binary was executed, no external dataset was downloaded, no archive was unpacked, and no Stage-3 dependency/data normalization was performed. No new ordinary manual-review item, scientific-review item, relationship type, schema issue, or stop condition was produced.

B009 remains in progress. The next resource is **CR000233**.
