# Computational Resources Stage 2 Progress

Verification date: 2026-08-28

## Current state

| Measure | Count |
|---|---:|
| Stage-1 registry resources | 357 |
| Mandatory pilot resources verified | 13 |
| Promoted profile-derived resources | 1 |
| Remaining Stage-1 resources assigned to expansion | 344 |
| Planned controlled batches | 14 |
| Completed expansion batches | 8 |
| Expansion resources processed | 200 |
| Expansion relationships verified | 163 |
| Expansion Stage-1 relationships accounted through existing canonical links | 1 |
| Expansion resources requiring manual review | 10 |
| Pending expansion resources | 144 |

Pilot acceptance status: **passed; safe to scale**.

Latest persistence checkpoint: **B008-C05 passed**. B008 is complete; the next controlled batch is B009 beginning at CR000213. No stop condition was triggered.

## Resume checkpoint

| Field | Value |
|---|---|
| Current logical batch | B009 (next) |
| Last completed resource | CR000212 |
| Last completed logical batch | B008 |
| Last persistence checkpoint | B008-C05 |
| Next resource | CR000213 |
| Completed Stage-1 resource count | 213 |
| Completed promoted-resource count | 1 (CR000358) |
| Remaining Stage-1 resource count | 144 |
| Completed CR IDs/ranges | CR000001–CR000212; CR000221; promoted CR000358 |
| Pending CR IDs/ranges | CR000213–CR000220; CR000222–CR000357 |
| Completed Stage-1 PRL assertions | 189 |
| Pending Stage-1 PRL assertions | 142 |
| Verified relationship records | 180 |
| Explicitly `not_verified` relationship records | 9 |
| Completed batches | B001–B008 |
| Current batch checkpoint | B008-C05 passed |
| Pending full batches | B009–B014 |
| Resources completed in last checkpoint | CR000208–CR000212 |
| Resources remaining in current batch | 0 |
| Current QA status | checkpoint passed; B008 complete |
| Current scientific-review items | 2 |
| Current ordinary manual-review resources | 10 |
| Last verification checkpoint commit | `b56fc18763953920f8395895e62656d19ac4a9b3` |
| Authoritative checkpoint | branch head of `data/computational-resources-stage2` |

The pilot set, B001–B008, and all B008 checkpoints 01–05 must not be reprocessed. Resume at CR000213 in B009. Checkpoint records are stored in checkpoint-specific JSONL files under the existing Stage-2 verification categories; their `2.0.0-pilot` record schemas and stable identifiers are unchanged.

## Batch register

| Batch | Resources | First ID | Last ID | Status | QA |
|---|---:|---|---|---|---|
| B001 | 25 | CR000001 | CR000027 | completed | passed |
| B002 | 25 | CR000028 | CR000054 | completed | passed |
| B003 | 25 | CR000055 | CR000080 | completed | passed |
| B004 | 25 | CR000081 | CR000105 | completed | passed |
| B005 | 25 | CR000106 | CR000131 | completed | passed |
| B006 | 25 | CR000132 | CR000160 | completed | passed |
| B007 | 25 | CR000161 | CR000187 | completed | passed |
| B008 | 25 | CR000188 | CR000212 | completed | passed |
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

## Batch 007 checkpoint 08 summary

- Three previously unprocessed resources were processed: CR000183, CR000185, and CR000186. CR000184 was already completed in the pilot and was not reprocessed.
- None of the three processed resources has a Stage-1 Atlas-paper assertion, so no paper-resource relationship was invented.
- CR000183 is resolved from `uncertain` to `supporting_software_or_library`: `pywaterflood` is physics-inspired capacitance-resistance modeling software for well-connectivity analysis, not a PINN implementation. BSD-2-Clause, JOSS citation metadata, Python/Rust manifests, documentation, and bundled test/example CSV data are verified.
- CR000185 is resolved from `uncertain` to `paper_code_collection_or_tutorial`: `google-research/google-research` is a large general research code-and-data collection, not a PINN-specific implementation. Source files are Apache-2.0 and the root README states datasets are CC BY 4.0; project-local dependency and dataset heterogeneity is not recursively normalized in Stage 2.
- CR000186 remains `supporting_software_or_library`: JAX-CFD is Apache-2.0 differentiable CFD/ML software with explicit `setup.py` dependencies and research-paper citation metadata. The README states it is no longer maintained while the GitHub archived flag is false; evaluation datasets and model checkpoints are external Google Cloud Storage resources while notebooks are bundled.
- No code or binary was executed, no external dataset or model was downloaded, and no Stage-3 normalization was performed. No new alias, ordinary manual-review item, scientific-review item, relationship type, schema issue, or stop condition was produced.
- B007 remains in progress and resumes at CR000187.

## Batch 007 checkpoint 09 and completion summary

- CR000187 was processed as the sole remaining B007 resource and pinned to `main` commit `90ac1bfe954b93dfce9f27d1de5ae912d9a66682`.
- The repository is verified as an MIT-licensed physics-informed neural-network implementation for power-converter parameter estimation, explicitly based on `maziarraissi/PINNs`; README citation metadata identifies DOI `10.1109/TPEL.2022.3176468`.
- No formal dependency manifest was identified. The source header records TensorFlow 1.15.0 and imports TensorFlow, NumPy, and SciPy; dependency normalization remains Stage 3 work.
- Seven converter-simulation MAT files and MATLAB generation code are bundled. The dataset note inconsistently calls the 0-through-6 set six files; the observed seven-file tree and the source discrepancy are both preserved.
- CR000187 has no Stage-1 Atlas-paper assertion, so no paper-resource relationship was invented.
- Full B007 QA passed: all 25 planned expansion resources occur exactly once, 14 of 14 Stage-1 relationship assertions are verified, 39 evidence records are unique, three URL corrections/transfers preserve stable IDs, and no new manual-review or stop condition was produced.
- B007 is complete. Resume Stage 2 at CR000188 in B008.

## Batch 008 checkpoint 01 summary

- Five resources were processed: CR000188 through CR000192; four distinct GitHub repositories were pinned to exact default-branch commits and one Stage-1 duplicate identity was resolved.
- CR000188 remains `supporting_software_or_library`: scikit-fmm is fast-marching scientific-computing software. Exact `LICENSE.txt` establishes BSD-3-Clause despite GitHub API `NOASSERTION`; formal build metadata and documentation are present, with no project citation file or standalone research dataset.
- CR000189 is resolved from `uncertain` to `non_pinn`: FENet is a data-driven finite-element dynamics project. MIT and `environment.yml` are verified, but the pinned tree contains no code, pretrained models, or research data despite README future-release wording.
- CR000190 is resolved from `uncertain` to `adjacent_physics_informed_ml_implementation`: DEM_TO uses deep-energy neural surrogates for topology optimization and bundles notebooks, trained models, topology designs, and result artifacts. No license or formal dependency manifest was identified.
- VA000030 establishes that CR000191 is the exact AAF-for-PINNs canonical identity already materialized as CR000153 after VA000024 repaired the Stage-1 `AIF` typo. Metadata and PRL000312 remain on CR000153; no duplicate relationship is created.
- VA000031 establishes that CR000192 is a distinct GitHub fork of CR000054 with its own immutable repository ID. It retains CR000192 and contains Navier-Stokes PINN code plus bundled training arrays and generation notebooks; no license, citation file, formal dependency manifest, or Atlas relationship was identified.
- No code was executed, no external data were downloaded, and no Stage-3 normalization was performed. No new ordinary manual-review item, scientific-review item, schema issue, or stop condition was produced.
- B008 remains in progress and resumes at CR000193.

## Batch 008 checkpoint 02 summary

- Five resources were processed: CR000193 through CR000197; all five public GitHub repository identities were pinned to exact default-branch commits.
- CR000193 is resolved from `uncertain` to `pinn_or_physics_informed_implementation`: NSFnet provides PINN, entropy-viscosity-regularized, and KAN-PINN cavity-flow material with GPL-3.0 licensing, bundled MAT data, and visual results. No formal dependency manifest or project citation metadata was identified.
- VA000032 resolves the same-name CR000194/CR000196 candidate as a distinct GitHub fork/upstream pair. Their immutable repository IDs differ even though both default branches currently share commit `058306e57ccf22c5e5aee09e9279f69cd6a823c8`; both remain separate MIT-licensed bibliography resources.
- CR000195 remains `paper_code_collection_or_tutorial`. Its two Stage-1 mentions were already normalized to one CR identity; the live MIT-licensed repository contains a PINN bibliography and bundled review/tutorial documents, not a reusable research dataset.
- CR000197 is resolved from `uncertain` to `pinn_or_physics_informed_implementation`: DeepHPMs contains physics-informed nonlinear-PDE discovery code, explicit citation metadata for arXiv:1801.06637, bundled benchmark MAT data and MATLAB generators, and an MIT License. No formal dependency manifest was identified.
- None of the five resources has a Stage-1 Atlas-paper assertion, so no paper-resource relationship was invented. Paper citations inside the three bibliography repositories were not misclassified as project citation metadata.
- No code was executed, no external data were downloaded, and no Stage-3 normalization was performed. No new ordinary manual-review item, scientific-review item, schema issue, or stop condition was produced.
- B008 remains in progress and resumes at CR000198.

## Batch 008 checkpoint 03 summary

- Five resources were processed: CR000198 through CR000202; all five public GitHub repository identities were pinned to exact default-branch commits.
- CR000198 remains `physics_informed_operator_or_operator_learning`: the distinct GitHub fork contains PINN/DeepONet course material, an explicit course citation, a Conda environment, bundled linear-wave arrays, and a README-level CC-BY-SA-4.0 license statement.
- CR000199 remains `pinn_framework_or_library`: it is a distinct Apache-2.0 fork of the current NVIDIA PhysicsNeMo framework with formal package metadata, citation metadata, extensive documentation, and heterogeneous example/test workflows. The fork snapshot is pinned independently from upstream.
- CR000200 remains a PINN implementation. Exact LICENSE text establishes CC-BY-NC-SA-4.0 despite API `NOASSERTION`; README's separate patent/noncommercial warning is preserved without legal interpretation. Citation metadata, pinned requirements, benchmark data, and animations are verified.
- CR000201 remains a tutorial collection with notebooks, data, TensorFlow checkpoints/logs, lecture notes, and images. No repository license, project citation metadata, or formal dependency manifest was identified.
- CR000202 is resolved from `uncertain` to `paper_code_collection_or_tutorial`: NABLA-SciML is a multi-module PINN/operator-learning tutorial and research collection with a root `pyproject.toml`, module-specific citations, and extensive benchmark/result arrays. No repository-level license was identified.
- None of the five resources has a Stage-1 Atlas-paper assertion, so no paper-resource relationship was invented. No code was executed, no external data were downloaded, and no Stage-3 normalization was performed.
- No new ordinary manual-review item, scientific-review item, schema issue, or stop condition was produced. B008 remains in progress and resumes at CR000203.

## Batch 008 checkpoint 04 summary

- Five resources were processed: CR000203 through CR000207; all five public GitHub repository identities were pinned to exact default-branch commits.
- CR000203 is resolved from `uncertain` to `pinn_or_physics_informed_implementation`: Instant-AIVT provides physics-informed KAN code and notebooks with citation DOI `10.1126/sciadv.ads5236`. No license, formal manifest, or research data is bundled; root and case documentation point to different external dataset locations, both preserved.
- VA000033 resolves CR000204 as a distinct fork of CR000089. Their immutable repository IDs differ even though both default branches share commit `77e7c747d653b34e79e43df7d88bad87de5c27d8`; CR000089 retains PRL000190, while CR000204 has no independent Atlas relationship.
- CR000205 is an independently implemented separable-PINN variant with source and result images. No license, project citation metadata, formal manifest, or reusable research dataset was identified.
- CR000206 remains a physics-informed operator-learning implementation. Its source expects `./Data/Dataset_square`, but no Data directory is bundled; static source limitations and missing input are recorded without executing or repairing the code.
- CR000207 remains a physics-informed operator-learning implementation with citation DOI `10.1016/j.cma.2026.118917` and a full pinned requirements freeze. No license or bundled dataset/checkpoint was identified.
- None of the five resources has a Stage-1 Atlas-paper assertion, so no new relationship was invented. No code was executed, no external data were downloaded, and no Stage-3 normalization was performed.
- No new ordinary manual-review item, scientific-review item, schema issue, or stop condition was produced. B008 remains in progress and resumes at CR000208.

## Batch 008 checkpoint 05 and completion summary

- Five resources were processed: CR000208 through CR000212; four GitHub repositories were pinned to exact default-branch commits and the FEniCS Project website was independently verified.
- VA000034 preserves CR000208 as a distinct fork of CR000202 using immutable repository IDs. The pinned fork is a PINN/DeepONet tutorial collection with bundled `Burgers.mat` and `Euler.mat` data, but no repository license, project self-citation metadata, or formal dependency manifest was identified.
- CR000209 remains a physics-informed operator-learning implementation. Its README points to external Google Drive datasets while the repository bundles problem notebooks and `Posting.zip`; the archive was not unpacked, and no repository license, citation metadata, or formal dependency manifest was identified.
- CR000210 remains supporting finite-element software. Both Stage-1 assertions are verified from the correct primary papers: PRL000268 because Atlas paper 752 compares PINN results with FEniCS finite-element solutions, and PRL000321 because Atlas paper 836 explicitly states that FEniCSx solved the Navier-Cauchy equations. The aggregate FEniCS/FEniCSx project is not assigned one inferred site-level SPDX license across its component projects.
- CR000211 remains supporting software: PhiFlow is an MIT-licensed differentiable PDE/simulation framework with citation metadata, `setup.py`, a PhiML submodule, documentation, and demos. External datasets created with PhiFlow are not treated as bundled repository data.
- VA000035 resolves the CR000212 transfer from `yuanming-hu/difftaichi` to `taichi-dev/difftaichi` by immutable repository ID 225531542 without changing CR identity. DiffTaichi has explicit citation metadata and `requirements.txt`, but no repository license or standalone research dataset is identified.
- No third-party code was executed, no external dataset was downloaded, no archive was unpacked, and no Stage-3 normalization was performed. No new ordinary manual-review item, scientific-review item, schema issue, or stop condition was produced.
- B008 is complete and passed checkpoint QA. Resume Stage 2 with B009 at CR000213.

## Stop conditions

Routine ambiguity is recorded with `requires_manual_review = true` and does not stop the batch. Expansion pauses only for an unrepresentable schema conflict, a required new relationship type, a stable-ID policy change, conflicting evidence that cannot be encoded, or a scientifically consequential ambiguity requiring immediate review.
