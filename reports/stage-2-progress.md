# Computational Resources Stage 2 Progress

Verification date: 2026-08-27

## Current state

| Measure | Count |
|---|---:|
| Stage-1 registry resources | 357 |
| Mandatory pilot resources verified | 13 |
| Promoted profile-derived resources | 1 |
| Remaining Stage-1 resources assigned to expansion | 344 |
| Planned controlled batches | 14 |
| Completed expansion batches | 6 |
| Expansion resources processed | 171 |
| Expansion relationships verified | 161 |
| Expansion Stage-1 relationships accounted through existing canonical links | 1 |
| Expansion resources requiring manual review | 10 |
| Pending expansion resources | 173 |

Pilot acceptance status: **passed; safe to scale**.

Latest persistence checkpoint: **B007-C07 passed**. B007 remains in progress; the next micro-batch begins at CR000183. No stop condition was triggered.

## Resume checkpoint

| Field | Value |
|---|---|
| Current logical batch | B007 (in progress) |
| Last completed resource | CR000182 |
| Last completed logical batch | B006 |
| Last persistence checkpoint | B007-C07 |
| Next resource | CR000183 |
| Completed Stage-1 resource count | 184 |
| Completed promoted-resource count | 1 (CR000358) |
| Remaining Stage-1 resource count | 173 |
| Completed CR IDs/ranges | CR000001–CR000182; CR000184; CR000221; promoted CR000358 |
| Pending CR IDs/ranges | CR000183; CR000185–CR000220; CR000222–CR000357 |
| Completed Stage-1 PRL assertions | 187 |
| Pending Stage-1 PRL assertions | 144 |
| Verified relationship records | 178 |
| Explicitly `not_verified` relationship records | 9 |
| Completed batches | B001–B006 |
| Current batch checkpoint | B007-C07 passed |
| Pending full batches | B008–B014 |
| Resources completed in last checkpoint | CR000180, CR000181, CR000182 |
| Resources remaining in current batch | 4 |
| Current QA status | checkpoint passed |
| Current scientific-review items | 2 |
| Current ordinary manual-review resources | 10 |
| Last verification checkpoint commit | `f19d347552e1112ebecbc86d1528770e384cf37e` |
| Authoritative checkpoint | branch head of `data/computational-resources-stage2` |

The pilot set, B001–B006, and B007 checkpoints 01–07 must not be reprocessed. Resume at CR000183. B007 checkpoint records are stored in checkpoint-specific JSONL files under the existing Stage-2 verification categories; their `2.0.0-pilot` record schemas and stable identifiers are unchanged.

## Batch register

| Batch | Resources | First ID | Last ID | Status | QA |
|---|---:|---|---|---|---|
| B001 | 25 | CR000001 | CR000027 | completed | passed |
| B002 | 25 | CR000028 | CR000054 | completed | passed |
| B003 | 25 | CR000055 | CR000080 | completed | passed |
| B004 | 25 | CR000081 | CR000105 | completed | passed |
| B005 | 25 | CR000106 | CR000131 | completed | passed |
| B006 | 25 | CR000132 | CR000160 | completed | passed |
| B007 | 25 | CR000161 | CR000187 | in progress | checkpoint 07 passed |
| B008 | 25 | CR000188 | CR000212 | pending | pending |
| B009 | 25 | CR000213 | CR000238 | pending | pending |
| B010 | 25 | CR000239 | CR000263 | pending | pending |
| B011 | 25 | CR000264 | CR000288 | pending | pending |
| B012 | 25 | CR000289 | CR000313 | pending | pending |
| B013 | 25 | CR000314 | CR000338 | pending | pending |
| B014 | 19 | CR000339 | CR000357 | pending | pending |

## Batch 001 summary

- 25 resources processed.
- 20 live GitHub repositories pinned to verified commits.
- 23 new paper–resource relationships verified.
- One Stage-1 relationship was accounted through the existing CR000021 alias resolution and canonical PRL000332.
- Five moved, renamed, case-normalized, or corrected URLs were preserved as aliases without changing CR identity.
- Eleven repositories have the verified negative finding: `No repository license identified at verified commit`.
- CR000022 and CR000023 archive internals remain deferred to Stage 3.
- CR000001 carries a routine manual-review flag and does not block continuation.

## Batch 002 summary

- 25 resources processed and 23 live GitHub repositories pinned to verified commits.
- 24 of 26 Stage-1 relationship assertions were verified.
- PRL000114 (CR000038 ↔ paper 431) and PRL000136 (CR000054 ↔ paper 476) remain explicitly `not_verified` with routine manual-review flags.
- CR000028 is unavailable at the exact URL cited by paper 360; the relationship remains verified from the paper.
- CR000045 and CR000046 were resolved to moved repositories by immutable GitHub repository IDs without changing CR identity.
- Eight repositories have the verified negative finding: `No repository license identified at verified commit`.
- CR000052 was independently mapped to MIT from its exact pinned license text despite repository API `NOASSERTION`.
- No external archive or dataset was unpacked; Stage 3 has not begun.

## Batch 003 summary

- 25 resources processed: 23 GitHub repositories pinned, one live GitLab project verified with an explicit unknown commit SHA, and one unavailable GitHub repository.
- 29 of 31 Stage-1 relationship assertions were verified.
- PRL000163 (CR000074 ↔ paper 536) and PRL000167 (CR000076 ↔ paper 549) remain `not_verified` with routine manual-review flags.
- Four moved, case-normalized, or corrected URLs retain their existing CR identities.
- Ten repositories have the verified negative finding: `No repository license identified at verified commit`.
- CR000062 is mapped to MIT from exact license text while its conflicting Apache-2.0 README badge is preserved.
- No external dataset was unpacked; Stage 3 has not begun.

## Batch 004 summary

- 25 resources processed: 22 live GitHub repositories pinned, two persistent DOI records verified, and one unavailable GitHub repository.
- 24 of 25 Stage-1 relationship assertions were verified; PRL000189 (CR000088 ↔ paper 600) remains `not_verified` with a routine manual-review flag.
- Three corrected or moved URLs retain their existing CR identities.
- Fifteen repositories have the verified negative finding: `No repository license identified at verified commit`.
- CR000083 is mapped to `GPL-3.0-or-later` from exact pinned license text despite repository API `NOASSERTION`.
- CR000091 and CR000092 archive identities and paper roles are verified; archive internals remain deferred to Stage 3.
- No stop condition was triggered.

## Batch 005 summary

- 25 resources processed: 15 GitHub repositories pinned, one additional GitHub identity and four other public resources verified, and five repository URLs unavailable.
- 22 of 25 Stage-1 relationship assertions were verified; PRL000218, PRL000223, and PRL000250 remain `not_verified` with routine manual-review flags.
- Paper 716's archived data-accessibility statement directly verifies seven resource links, including two repositories now unavailable.
- Three source URL repairs retain their existing CR identities.
- Nine pinned repositories have the verified negative finding: `No repository license identified at verified commit`.
- CR000108, CR000116, and CR000127 archive internals remain deferred to Stage 3.
- No stop condition was triggered.

## Batch 006 summary

- 25 resources were processed: 21 live GitHub repositories and two GitLab projects were pinned, one Zenodo software record was verified, and one paper-cited repository is unavailable.
- 25 of 26 Stage-1 paper-resource assertions were verified; PRL000309 remains `not_verified` because paper 810 maps to the distinct CR000151 identity.
- Five source URL repairs preserve existing CR identities, including the immutable repository-ID move for CR000156 and primary JOSS resolution for CR000159.
- Fifteen licenses were positively verified, nine repositories have verified negative license findings, and CR000150 remains a bounded unknown because the repository is unavailable.
- CR000153's default branch is pinned separately from its non-default master content; CR000144 and CR000160 external archives remain unextracted for Stage 3.
- No new manual-review item, schema issue, or stop condition was produced.

## Batch 007 checkpoint 01 summary

- Three resources were processed: CR000161, CR000162, and CR000163.
- CR000161 and CR000163 are pinned to exact GitHub commits; CR000162 is a verified public GitLab project with an explicitly unknown exact commit SHA.
- All three Stage-1 paper-resource assertions are verified: PRL000327 for paper 843, PRL000328 for paper 852, and PRL000007 for paper 44.
- CR000161 is verified as a PINN implementation with bundled IEEE case data, saved simulations, and trained-model artifacts.
- CR000162 is verified as a PINN implementation and official reproduction/data repository for the astrophysical-shocks paper; its exact snapshot SHA and dependency declarations remain bounded unknowns.
- CR000163 remains `non_pinn` but is verified as the exact paper-provided quantum-physics code repository; its CC0-1.0 license is verified from pinned text.
- No new alias, ordinary manual-review item, scientific-review item, schema issue, or stop condition was produced.
- B007 remains in progress and resumes at CR000164.

## Batch 007 checkpoint 02 summary

- Three resources were processed: CR000164, CR000165, and CR000166; all three live GitHub repositories were pinned to exact `main` commits.
- All three Stage-1 paper-resource assertions are verified as official relationships: PRL000010 for paper 59, PRL000026 for paper 135, and PRL000030 for paper 151.
- All three resources remain scientifically classified as `non_pinn`; their direct paper association does not change that classification.
- No repository license was identified for any of the three pinned repositories; article-level open-access licenses were not inferred as repository licenses.
- CR000164 contains equation training/testing data artifacts, but the 2-byte `data/train.xlsx` prevents Stage 2 from asserting completeness of the published training corpus.
- CR000165 bundles financial time-series and simulation/application data; CR000166 contains one example notebook with inline install commands and an external Kaggle SDSS dataset download rather than a bundled reusable dataset.
- No new alias, ordinary manual-review item, scientific-review item, schema issue, or stop condition was produced.
- B007 remains in progress and resumes at CR000167.

## Batch 007 checkpoint 03 summary

- Three resources were processed: CR000167, CR000168, and CR000169; all three live GitHub resources were pinned to exact `main` commits.
- All three Stage-1 paper-resource assertions are verified: PRL000047 is a paper-software mention for Atlas paper 262, PRL000048 is the official Data Availability relationship for paper 273, and PRL000059 is the direct experimental-platform relationship for paper 300.
- All three resources remain scientifically classified as `non_pinn`; direct use or citation by a PINN paper does not convert generic KAN software, a VAE-GAN resource, or an open-hardware platform into a PINN implementation.
- VA000027 repairs the CR000168 Stage-1 owner typo from `utvone` to the paper-confirmed live owner `utyone` without changing CR identity.
- No repository license was identified for any of the three pinned repositories; article-level licenses and CR000169's README open-source wording were not inferred as repository licenses.
- CR000167's MNIST example downloads the benchmark externally; CR000168's current pinned repository contains only a 15-byte README despite the verified paper relationship; CR000169 bundles CAD and assembly artifacts for the soft-robot experimental platform rather than a research dataset.
- No new ordinary manual-review item, scientific-review item, schema issue, or stop condition was produced.
- B007 remains in progress and resumes at CR000170.

## Batch 007 checkpoint 04 summary

- Three resources were processed: CR000170, CR000171, and CR000172; all three public GitHub repositories were pinned to exact default-branch commits.
- All three Stage-1 assertions are independently verified: PRL000049 is the official code relationship for Atlas paper 282, PRL000065 is a software-use relationship for paper 322, and PRL000164 is a software-use relationship for paper 539.
- All three resources remain scientifically classified as `non_pinn`: MRI super-resolution CNN code, finite-element pre/post-processing software, and a classical WG elastoplasticity implementation respectively.
- CR000170 includes a formal `environment.yml` and uses the external IXI dataset plus externally hosted pretrained models; no repository license was identified.
- CR000171 bundles cardiac geometry, echo-input, solver, executable, and simulation-support artifacts but has no formal dependency manifest or identified repository license; no binary was executed.
- CR000172 has an independently verified MIT License and contains only the classical WG constitutive-model source; the distinct neural-network repository associated with paper 539 is not inferred into this resource.
- Checkpoint 04 uses checkpoint-specific JSONL files within the existing Stage-2 verification categories to preserve append-only recoverability without rewriting prior B007 records; schemas and stable IDs are unchanged.
- No new alias, ordinary manual-review item, scientific-review item, relationship type, schema issue, or stop condition was produced.
- B007 remains in progress and resumes at CR000173.

## Batch 007 checkpoint 05 summary

- Three previously unprocessed resources were processed: CR000173, CR000175, and CR000176. CR000174 was already completed in the pilot and was not reprocessed.
- CR000173 is pinned to `main` commit `93ab29cd6a04cff5a8b5384dc71c4c56b4526884`. Primary paper 539 explicitly identifies this repository as the location of its synthetic data and PyTorch EPNN code, so PRL000165 is verified as official and the Stage-1 `non_pinn` classification is corrected to `pinn_or_physics_informed_implementation`.
- CR000173 has an independently verified MIT License, a formal `requirements.txt`, and large bundled synthetic WG state/stress datasets documented under `Datasets/WG/`.
- CR000175's Stage-1 typo `energy_PIsNN_Contact` is repaired to the live same-owner `energy_PINN_Contact` repository by VA000028 without changing CR identity. Its README and code tree establish an energy-based PINN implementation for large-deformation frictionless contact; no Atlas relationship is invented because Stage 1 contains none.
- No repository license or formal dependency manifest was identified for CR000175; README open-source wording is not treated as a license. README records the software environment, and the repository bundles case `Coord.mat` inputs.
- CR000176 is resolved from Stage-1 `uncertain` to `supporting_software_or_library`: it is Parareal theory/figure-reproduction software rather than PINN code. BSD-2-Clause, `CITATION.cff`, and `environment.yml` are verified; no Stage-1 Atlas relationship or standalone dataset is asserted.
- No code or binary was executed, no dataset was unpacked, and no Stage-3 normalization was performed. No new ordinary manual-review item, scientific-review item, relationship type, schema issue, or stop condition was produced.
- B007 remains in progress and resumes at CR000177.

## Batch 007 checkpoint 06 summary

- Three resources were processed: CR000177, CR000178, and CR000179.
- CR000177 is a verified A-PINN implementation with bundled example training/model artifacts; no repository license or formal dependency manifest was identified.
- CR000178 is resolved from `uncertain` to `github_profile`; no Atlas-paper relationship is stated in Stage 1 and none is inferred.
- CR000179 is resolved to `adjacent_physics_informed_ml_implementation`: it is the official code/data repository for a physics-informed continuous-time reinforcement-learning study, not a PINN implementation. PRL000064 for Atlas paper 314 is verified.
- No repository license or formal dependency manifest was identified for CR000179; article-level licensing was not propagated to repository content.
- No code or binary was executed, no dataset was unpacked, and no Stage-3 normalization was performed. No new ordinary manual-review item, scientific-review item, relationship type, schema issue, or stop condition was produced.
- B007 remains in progress and resumes at CR000180.

## Batch 007 checkpoint 07 summary

- Three resources were processed: CR000180, CR000181, and CR000182; all three public GitHub repositories were pinned to exact default-branch commits.
- None of the three resources has a Stage-1 Atlas-paper assertion, so no paper-resource relationship was invented.
- CR000180 is resolved from `uncertain` to `non_pinn`: it is a TensorFlow adversarial video-prediction implementation. Its MIT License is verified; Ms. Pac-Man training data and trained models are externally hosted while result artifacts are bundled, and no formal dependency manifest was identified.
- CR000181 is resolved from `uncertain` to `supporting_software_or_library`: fastai is a general-purpose PyTorch-based deep-learning library. Apache-2.0, documentation, `pyproject.toml`, and `environment.yml` are verified; no standalone research dataset is identified.
- CR000182 remains `supporting_software_or_library`. The Stage-1 `fchollet/keras` URL is verified as the same immutable GitHub repository now hosted at `keras-team/keras`; VA000029 records the transfer without changing CR identity. Apache-2.0, `CITATION.cff`, documentation, and multi-backend dependency manifests are verified.
- No code or binary was executed, no external dataset was downloaded, and no Stage-3 normalization was performed. No new ordinary manual-review item, scientific-review item, relationship type, schema issue, or stop condition was produced.
- B007 remains in progress and resumes at CR000183.

## Stop conditions

Routine ambiguity is recorded with `requires_manual_review = true` and does not stop the batch. Expansion pauses only for an unrepresentable schema conflict, a required new relationship type, a stable-ID policy change, conflicting evidence that cannot be encoded, or a scientifically consequential ambiguity requiring immediate review.
