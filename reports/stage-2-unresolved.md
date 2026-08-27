# Computational Resources Stage 2 Unresolved and Deferred Register

Verification date: 2026-08-27

## Scientific-review items carried from pilot

| Resource | Question | Processing rule |
|---|---|---|
| CR000145 / CR000358 | Whether direct evidence establishes a paper-778 relationship for CR000358. | Keep CR000358 without a PRL; preserve PRL000303 on CR000145. |
| CR000174 | Which unpromoted profile discoveries merit stable resource identities. | Defer promotion decisions; reuse CR000024; do not infer paper relationships. |

These are bounded scientific-review questions, not verification failures, and do not block Stage-2 expansion.

## Expansion scientific-review items

No completed expansion batch has produced a scientifically consequential ambiguity requiring immediate review. B007 checkpoint 05 added no new scientific-review or ordinary manual-review item.

## Ordinary manual review

| Resource | Bounded question | Current representation | Processing rule |
|---|---|---|---|
| CR000001 | Whether to normalize the obsolete PINA documentation fragment to the live project documentation or repository. | Original URL retained with `url_status = not_found`; PINA project identity and MIT license verified separately; no Atlas-paper relationship exists. | `requires_manual_review = true`; preserve evidence and continue. |
| CR000038 | Whether any specific gist under the huidonghu profile is related to paper 431. | Gist-profile contents are unknown; PRL000114 is `not_verified`; paper 431 names other HFM software releases. | `requires_manual_review = true`; do not promote a paper relationship and continue. |
| CR000054 | Whether CR000054 is code for paper 476. | Repository exists and is pinned, but neither paper 476 nor the README establishes the relationship; PRL000136 is `not_verified`. | `requires_manual_review = true`; preserve evidence and continue. |
| CR000062 | Which license statement should be normalized. | Exact pinned LICENSE text is MIT; the README badge claims Apache-2.0. MIT is recorded with the conflict preserved. | `requires_manual_review = true`; retain both observations and continue. |
| CR000074 | Whether hamiltorch is software used by paper 536. | The corrected repository is verified, but paper 536 does not identify it; PRL000163 is `not_verified`. | `requires_manual_review = true`; do not promote and continue. |
| CR000076 | Whether the unavailable trapz-PiNN repository is the code for paper 549. | Paper 549 points to the author's profile, not the specific repository; PRL000167 is `not_verified`. | `requires_manual_review = true`; preserve evidence and continue. |
| CR000088 | Whether the unavailable ExtendedPhysics-Informed-Neural-Operator repository is code for paper 600. | Repository checks and current paper/web evidence do not establish the specific relationship; PRL000189 is `not_verified`. | `requires_manual_review = true`; preserve evidence and continue. |
| CR000111 | Whether the unavailable DEM_TOgit repository is the resource for paper 671. | Direct evidence for the specific URL was not recovered; PRL000218 is `not_verified`. | `requires_manual_review = true`; preserve evidence and continue. |
| CR000114 | Whether the unavailable DG-PINN repository is the resource for paper 692. | Direct evidence for the specific URL was not recovered; PRL000223 is `not_verified`. | `requires_manual_review = true`; preserve evidence and continue. |
| CR000128 | Whether the unavailable generic Power Grid Lib path is the specific resource intended by paper 721. | Paper 721 mentions Power Grid Lib as a benchmark concept but does not establish the `power-grid-lib/pgl` identity; PRL000250 is `not_verified`. | `requires_manual_review = true`; preserve evidence and continue. |

## Resolved relationship corrections

| Relationship | Verified result | Status |
|---|---|---|
| PRL000309 / CR000146 ↔ paper 810 | CR000146 is the official repository for paper 779. Paper 810 matches the distinct two-phase-flow repository already registered as CR000151. | Stage-1 assertion retained as `not_verified` with high confidence; no ID was reassigned and no manual review remains open. |

## Verified limitations and Stage-3-deferred work

| Resource | Result | Status |
|---|---|---|
| CR000117 | Archive internals not inspected. | Resolved for Stage 2; Stage-3 technical inspection deferred. |
| CR000049 | SPDX is `NOASSERTION`; repository wording is BSD-style. | Resolved qualified metadata. |
| CR000184, CR000044, CR000149, CR000154, CR000358 | No repository license identified at pinned commit. | Pilot verified negative findings. |
| CR000004, CR000005, CR000006, CR000007, CR000008, CR000012, CR000015, CR000017, CR000020, CR000024, CR000027 | No repository license identified at pinned commit. | Batch-001 verified negative findings. |
| CR000014 | No trial-software license metadata identified. | Bounded unknown; no license inferred. |
| CR000022, CR000023 | Archive-internal documentation and dependency inspection not performed. | Resolved for Stage 2; Stage-3 technical inspection deferred. |
| CR000028 | Paper-cited repository URL returns 404; repository contents and license cannot be inspected. | Verified unavailability; PRL000074 remains verified from paper 360. |
| CR000030, CR000031, CR000035, CR000039, CR000040, CR000041, CR000053, CR000054 | No repository license identified at pinned commit. | Batch-002 verified negative findings. |
| CR000052 | Repository API SPDX is `NOASSERTION`; exact pinned `LICENSE.txt` is the MIT License. | Resolved by independent exact-text verification; mapped to MIT. |
| CR000036, CR000042, CR000046, CR000052, CR000053 | External datasets or weights were identified but not unpacked. | Stage-2 provenance verified; Stage-3 technical inspection deferred. |
| CR000064, CR000065, CR000068, CR000070, CR000072, CR000075, CR000077, CR000078, CR000079, CR000080 | No repository license identified at pinned commit. | Batch-003 verified negative findings. |
| CR000063 | GitLab project and master branch verified; commit SHA and full tree not exposed by the available primary-source interface. | Bounded Stage-2 snapshot limitation; identity and paper relationship verified. |
| CR000076 | Repository URL returns 404; contents, license, and snapshot fields cannot be inspected. | Verified unavailability; the paper-specific relationship remains not_verified. |
| CR000081, CR000084, CR000085, CR000086, CR000087, CR000089, CR000093, CR000094, CR000096, CR000097, CR000098, CR000099, CR000102, CR000103, CR000104 | No repository license identified at pinned commit. | Batch-004 verified negative findings. |
| CR000083 | Repository API SPDX is `NOASSERTION`; exact pinned `COPYING` text and README specify GNU GPL version 3 or later. | Resolved by independent exact-text verification; mapped to `GPL-3.0-or-later`. |
| CR000088 | Repository URL is unavailable; contents, license, and snapshot fields cannot be inspected. | Verified unavailability; PRL000189 remains `not_verified`. |
| CR000091, CR000092 | DOI identities and paper roles verified; archive contents not unpacked and exact record-license fields not independently captured. | Resolved for Stage 2; archive internals deferred to Stage 3 and license fields retained as bounded unknowns. |
| CR000106, CR000107, CR000112, CR000115, CR000121, CR000123, CR000124, CR000130, CR000131 | No repository license identified at pinned commit. | Batch-005 verified negative findings. |
| CR000109 | Public GitHub identity and current GPL-3.0 label visible, but API exposes only a move response; commit SHA and exact license text remain unknown. | Bounded Stage-2 snapshot and license limitation; no exact SPDX normalization. |
| CR000125 | Public GitLab project and master branch verified; commit SHA and full tree not exposed. | Bounded Stage-2 snapshot limitation; paper relationship verified. |
| CR000111, CR000114, CR000119, CR000122, CR000128 | Recorded repository URL is unavailable; contents, license, and snapshot fields cannot be inspected. | Verified unavailability; CR000119 and CR000122 paper links remain verified from archived paper evidence. |
| CR000108, CR000116, CR000127 | Supplemental or DOI identity and paper role verified; archive contents not unpacked. | Resolved for Stage 2; technical inspection deferred to Stage 3. |
| CR000132 | Public GitLab identity, main-branch commit, README, citation.cff, BSD-2-Clause license, and root data/results structure verified; a complete recursive tree was not exposed by the inspected public interface. | Bounded Stage-2 snapshot limitation; identity and official paper relationship are verified. |
| CR000134, CR000138 | No repository license identified at pinned commit. | B006 checkpoint-01 verified negative findings. |
| CR000136 | GitHub API reports `NOASSERTION`; exact pinned LICENSE and README specify CC BY-NC-SA 4.0. | Resolved by exact-text verification; mapped to `CC-BY-NC-SA-4.0`. |
| CR000142, CR000143 | No repository license identified at pinned commit. | B006 checkpoint-02 verified negative findings. |
| CR000144 | Open Zenodo software record, DOI, creator, CC BY 4.0 license, and code/data/results archive preview verified; 650 MB archive internals were not unpacked. | Resolved for Stage 2; technical inspection deferred to Stage 3. |
| CR000150 | Paper-cited canonical repository is unavailable; public forks do not justify identity replacement. | Verified unavailability; PRL000308 remains verified from the primary paper. |
| CR000151, CR000153, CR000155, CR000157, CR000160 | No repository or project license identified at the pinned commit. | B006 verified negative findings. |
| CR000153 | Default branch main is README-only; code and bundled data are on separately pinned master commit 0f2a36c3d4882784a5e3f11defb9c09282fecd92. | Resolved qualified metadata; both snapshots remain explicit. |
| CR000156 | Source URL moved from tianjuxue/jax-am to CMSL-HKUST/jax-am. | Resolved by immutable GitHub repository ID 509117694 without changing CR identity. |
| CR000159 | Recorded ThomasGrandits/fim_py path is unavailable; the paper citation and primary JOSS review identify thomgrand/fim-python. | Resolved source URL repair without changing CR identity. |
| CR000160 | Public GitLab project, main-branch commit, README, dependency file, and external Zenodo dependency verified; the external archive was not unpacked. | Resolved for Stage 2; technical inspection deferred to Stage 3. |
| CR000162 | Public QDataLabs GitLab project, master branch, README, paper relationship, and GNU LGPLv2.1 project label verified; exact commit SHA, full tree, exact SPDX variant, repository citation metadata, and dependency declarations were not exposed reliably. | Bounded Stage-2 snapshot/metadata limitation; identity and official paper relationship are verified and no manual review is required. |
| CR000164, CR000165, CR000166 | No repository license identified at the pinned commit. | B007 checkpoint-02 verified negative findings; no license inferred from article-level open-access terms. |
| CR000164 | README identifies bundled training/testing data, but `data/train.xlsx` is 2 bytes at the pinned commit. | Bounded Stage-2 dataset-completeness limitation; repository identity and official paper relationship are verified, and corpus completeness is not inferred. |
| CR000166 | Repository bundles only the example notebook; the notebook installs packages inline and downloads the SDSS-derived dataset from Kaggle rather than bundling it. | Stage-2 dependency/dataset provenance verified; formal dependency normalization and any external-data reproducibility checks remain deferred to Stage 3. |
| CR000167, CR000168, CR000169 | No repository license identified at the pinned commit. | B007 checkpoint-03 verified negative findings; no license inferred from article terms or open-source wording. |
| CR000167 | The repository contains generic ChebyKAN code/examples and downloads MNIST through `torchvision.datasets.MNIST(..., download=True)`; no reusable research dataset or formal dependency manifest is bundled. | Stage-2 resource/dataset provenance verified; full dependency normalization remains deferred to Stage 3. |
| CR000168 | Stage-1 records `utvone/airfoilVAEGAN`, while paper 273 and the live repository establish `utyone/airfoilVAEGAN`. | Resolved source URL repair via VA000027 without changing CR identity. |
| CR000168 | The exact pinned canonical repository currently contains only a 15-byte README.md despite the paper's verified Data Availability relationship. | Bounded current-content limitation; do not infer present code/data or invalidate the historical paper-resource relationship. |
| CR000169 | Repository provides open-hardware CAD models, assembly instructions, and companion-paper artifacts for the experimental tendon-driven platform; no software dependency manifest or reusable research dataset was identified. | Stage-2 resource role verified; no PINN-software classification inferred and no Stage-3 execution performed. |
| CR000170, CR000171 | No repository license identified at the pinned commit. | B007 checkpoint-04 verified negative findings; no article-level license was inferred as a repository license. |
| CR000170 | `environment.yml` and README installation instructions are verified; the study uses the public IXI MRI dataset and externally hosted pretrained models rather than establishing those external resources as bundled repository content. | Stage-2 dependency/data provenance verified; full dependency normalization and external-data/model inspection remain deferred to Stage 3. |
| CR000171 | Repository bundles CAD/visualization binaries, cardiac geometry, echo inputs, and PAK/PAKT simulation-support artifacts but no formal dependency manifest. | Stage-2 software/data-support role verified; no binary execution or PINN classification inferred. |
| CR000172 | Exact pinned `LICENSE` is MIT; repository contains the classical WG elastoplasticity Python source but no formal dependency manifest or reusable research dataset. | Stage-2 license and resource role verified; the distinct neural-network code/data resource for paper 539 is not inferred into CR000172. |
| CR000173 | Stage-1 classifies ANNElastoplasticity as `non_pinn`, while primary paper 539 explicitly defines its EPNN as a Physics-Informed Neural Network and identifies the exact repository as the EPNN code and synthetic-data location. | Resolved classification correction to `pinn_or_physics_informed_implementation`; PRL000165 is verified official, with no manual review required. |
| CR000173 | Exact pinned repository has MIT licensing, `requirements.txt`, and four large normalized WG synthetic state/stress datasets documented under `Datasets/WG/`; the root README itself is minimal and has no citation metadata. | Stage-2 dependency/data provenance verified; package normalization, execution, and reproducibility testing remain Stage 3 work. |
| CR000175 | Stage-1 records `JinshuaiBai/energy_PIsNN_Contact`, while the recorded path is unavailable and the live same-owner `energy_PINN_Contact` repository explicitly identifies the energy-based PINN contact paper/code. | Resolved source URL typo via VA000028 without changing CR identity; Stage-1 `uncertain` classification is resolved to a PINN implementation. |
| CR000175 | No repository license or formal dependency manifest is present despite README wording describing the code as open source; README supplies Python/TensorFlow/NumPy/SciPy versions and the tree bundles `Coord.mat` case inputs. | Verified negative license finding and Stage-2 dependency/data provenance; no license inference, execution, or Stage-3 normalization performed. |
| CR000176 | Stage-1 classification is `uncertain`; the pinned project is theoretical Parareal analysis and figure-reproduction software with BSD-2-Clause, `CITATION.cff`, and `environment.yml`, and it has no Stage-1 Atlas relationship or standalone research dataset. | Resolved as `supporting_software_or_library`; citation/dependency metadata verified and no paper relationship inferred. |

A verified absence, a bounded unavailable resource, or a Stage-3 extraction boundary is not an unresolved Stage-2 failure.
