# Computational Resources Stage 3 — Quality Report

Status date: 2026-09-01
Acceptance checkpoint: Stage3-A01  
Pilot extraction checkpoint: Stage3-P07
Latest scale-out checkpoint: Stage3-S015

## Pilot QA

Status: **PASS**

The completed ten-resource pilot contains:

- 10 resource records;
- 23 experiment records;
- 83 configuration records;
- 131 technical-evidence records;
- 10 static reproducibility assessments;
- 23 bounded unresolved technical findings;
- 3 explicit conflicting-evidence findings.

Across the pilot, identifiers are unique, fact-level evidence references resolve, resource/experiment/configuration relationships resolve, inferred evidence uses the required inferred semantics, reproducibility remains restricted to R0–R4, Stage-2 identities and pinned snapshots are preserved where available, and no scientific workload execution is claimed.

## Scientific acceptance decision

Status: **ACCEPTED FOR CONTROLLED SCALE-OUT**

The Stage3-D01 methodology and existing schemas are scientifically accepted without modification.

The resource → experiment → configuration hierarchy successfully represented all deliberately heterogeneous pilot cases without requiring a second ontology family or type-specific record tree. The evidence model remained discriminating across direct implementation evidence, repository documentation, primary-paper claims, provider metadata, archive-equivalent evidence, inference, missing information, and explicit conflict.

The static reproducibility gates also behaved as intended: the pilot produced differentiated R1–R4 outcomes, withheld higher levels when critical environment/data/result/code-path evidence was missing, and never assigned R5.

## Accepted operational interpretations

1. **Archive-equivalent repository releases** may support static technical extraction when DOI/paper/release lineage is strong. The DOI/archive remains the authoritative resource identity. Byte-level equivalence must not be claimed without direct comparison.
2. **An imported runtime dependency missing from the declared environment manifest** is a critical reproducibility gap and blocks R4, even if archived successful outputs are available.
3. **Configuration-specific paper/code conflicts** remain scoped to the affected configuration unless evidence shows broader propagation. They do not automatically lower unrelated configurations or the whole resource.

## Pilot acceptance-test matrix

| Acceptance test | Result |
|---|---|
| One resource → multiple experiments | PASS |
| One experiment → multiple configurations | PASS |
| Resource can have zero experiments | PASS |
| Experiment can have zero configurations | PASS |
| One fact → multiple evidence records | PASS |
| Paper reporting ≠ repository implementation | PASS |
| Resource identity ≠ paper relationship | PASS |
| Official relationship can target one experiment in a multi-experiment resource | PASS |
| Resource can have no Atlas relationship | PASS |
| Framework citations ≠ Atlas relationships | PASS |
| Supporting library ≠ PINN implementation | PASS |
| Non-PINN research code ≠ PINN implementation | PASS |
| Simulator/solver ≠ PINN implementation | PASS |
| Operator learning ≠ classical PINN | PASS |
| Dataset consumer use ≠ intrinsic provider dataset definition | PASS |
| Bundled files ≠ reusable dataset automatically | PASS |
| Multiple dataset product DOIs can remain under one CR identity | PASS |
| DOI archive identity ≠ archive-equivalent source snapshot | PASS |
| Repository-only experiment remains source-scoped | PASS |
| `unknown` ≠ `false` | PASS |
| `not_available` ≠ `not_applicable` | PASS |
| Unversioned or omitted dependency ≠ exact environment | PASS |
| Consequential source conflicts remain explicit | PASS |
| Bounded binary/archive inspection can be deferred without inventing facts | PASS |
| Pinned Stage-2 snapshots remain authoritative where available | PASS |
| R3 can be assigned with complete use/configuration evidence but an incomplete exact environment | PASS |
| R4 can be assigned statically only when all critical gates are met | PASS |
| R4 is withheld when a critical environment/result gate is missing | PASS |
| R5 cannot be assigned | PASS |

## Scale-out readiness

The methodology is ready for controlled scale-out. Before further extraction, the scale-out plan must define resource ordering, small checkpoint/batch size, restart/continuation semantics, QA requirements, unresolved-register maintenance, and commit boundaries.

No schema change is required before that planning step.

## Scale-out checkpoint Stage3-S001

Status: **PASS**

`CR000001` and `CR000002` were extracted without schema or methodology change. Cumulative Stage-3 totals are 12 resources, 24 experiments, 84 configurations, 146 technical-evidence records, 12 reproducibility assessments, 26 unresolved findings, and 4 explicit conflicting-evidence findings.

`CR000001` remains the corrected official PINA solver-documentation identity established by Stage2-RC01. The current project repository was used only as dated supporting evidence and was not substituted as an authoritative Stage-2 pin. The framework documentation was not forced into artificial experiment records; its bounded static classification is R1.

`CR000002` preserves the Stage-2 pinned PI-MPN snapshot and its two verified paper relationships. One repository-supported XC forecasting experiment/configuration is recorded at R3. R4 is withheld because the required `od.npy` payload remains external, the dependency manifest is unpinned, and the evaluation routine reverses prediction/reference assignments before direction-sensitive MAPE and R2 calculations.

All schemas validate; identifiers and evidence references are unique and resolved; no Stage-1, Stage-2, `05-curated/`, or public Atlas/site file changed; and no scientific workload was executed.

## Scale-out checkpoint Stage3-S002

Status: **PASS**

`CR000004` was separated into an adaptive single-resource checkpoint because it contains three distinct workflows and consequential code-path defects. The TV-AR/TV-VAR method, two simulations, and bundled real-world application are represented without treating manually toggled scenario comments as additional configurations.

The resource is R1. No environment or license is supplied; all application drivers import an absent comparator module; and both simulation drivers use invalid `range(list)` calls. These defects remain configuration-scoped and explicit. Cumulative totals are 13 resources, 27 experiments, 87 configurations, 156 technical-evidence records, 13 reproducibility assessments, 30 unresolved findings, and 6 explicit conflicting-evidence findings.

## Scale-out checkpoint Stage3-S003

Status: **PASS**

`CR000005` preserves the pinned paper-appendix repository and `PRL000016`, while accurately bounding the artifact as two mathematical PDFs plus a README. No executable source, environment, dataset, or configuration exists, so no experiment/configuration is manufactured and reproducibility is R1.

The Stage-2 `supplementary_code` label versus the actual PDF-only artifact and the internally inconsistent Lipschitz condition in `Appendix.pdf` equation (1) remain explicit conflicting evidence. Cumulative totals are 14 resources, 27 experiments, 87 configurations, 162 technical-evidence records, 14 reproducibility assessments, 33 unresolved findings, and 8 explicit conflicting-evidence findings.

## Scale-out checkpoint Stage3-S004

Status: **PASS**

`CR000006` remains non-PINN classical control code with one benchmark experiment and PID/LQR/MPC configurations. It is R1 because no environment, input dataset, or expected results are supplied and its API, LQR, and MPC paths contain bounded static incompleteness.

`CR000007` contributes separate numerical-validation and clinical pulmonary-artery PINN workflows. The clinical configuration is R3: notebooks, inputs, trained models, figures, physics formulation, training parameters, and a conda specification are present. R4 is withheld because package constraints are not exact and stochastic sampling/initialization are unseeded. Cumulative totals are 16 resources, 30 experiments, 92 configurations, 180 evidence records, 16 reproducibility assessments, 41 unresolved findings, and 11 explicit conflicting-evidence findings.

## Scale-out checkpoint Stage3-S005

Status: **PASS**

`CR000008` was bounded despite its 5,512-file forecasting tree. One paper-linked GRU-KAN/SST experiment is represented at R2; exact paper-run inputs, hyperparameters, and output mapping remain incomplete. `CR000009` remains dataset-primary, with its bundled DNN notebook represented separately from Atlas paper 130's use of the dataset. The DNN workflow is R2 because no executable environment is supplied and the README dataset filename conflicts with the pinned tree.

Cumulative totals are 18 resources, 32 experiments, 94 configurations, 196 evidence records, 18 reproducibility assessments, 45 unresolved findings, and 12 explicit conflicting-evidence findings.

## Scale-out checkpoint Stage3-S006

Status: **PASS**

`CR000011` remains a supporting thermal simulator and paper-used power-map source; its repository examples were not promoted into artificial PINN experiments. The GPL-licensed PACT snapshot documents steady and transient thermal analyses, exact external Xyce/OpenMPI versions, a Docker workflow, and bundled example inputs, but its Python requirements are only partially pinned. It is R3.

`CR000012` contributes two deep-energy PINN contact workflows, each with a bounded configuration. Exact primary environment versions, bundled geometries, network structure, energy formulation, deterministic Python seed, relaxation, and incremental loading are documented or implemented. It is R3 because the exact environment lacks a machine-readable manifest, no license is present, and the README's `.m` output statement conflicts with implemented `.mat` writes.

Cumulative totals are 20 resources, 34 experiments, 96 configurations, 212 evidence records, 20 reproducibility assessments, 49 unresolved findings, and 13 explicit conflicting-evidence findings.

## Scale-out batch SOB001 aggregate QA

Status: **PASS**

The first controlled scale-out batch contains 10 resources across six checkpoints: 11 experiments, 13 configurations, 81 technical-evidence records, 10 reproducibility assessments, 26 newly recorded unresolved findings, and 10 newly recorded conflicting-evidence findings. All checkpoint and cumulative identifiers are unique, evidence and hierarchy references resolve, Stage-2 authority is preserved, missing-value and inferred-source semantics pass, R5 remains excluded, and no Stage-1, Stage-2, curated, or public Atlas/site files changed.

## Scale-out checkpoint Stage3-S007

Status: **PASS**

`CR000013` was isolated as an adaptive checkpoint because it contains a seven-fold paper LOGO-CV workflow and a separate one-dimensional synthetic comparison with physics-aware and data-only configurations. The official Svalbard configuration records its PyTorch Lightning architecture, Fourier features, physics-aware losses, training parameters, seed, GPU selection, external processed-data DOI, and preprocessing chain. It is R3; R4 is withheld because the main pip environment is unpinned and the configured CSV/result payload remains external and uninspected.

The synthetic configurations are retained without claiming a complete combined run. `Trainer_synthetic.py` hard-codes a nonexistent comparison-config filename, the expected CSV is absent, and its generator does not create the target parent directories. The README also names the preprocessing environment with `.yaml`, while the pinned file uses `.yml`; this remains explicit conflicting evidence.

Cumulative totals are 21 resources, 36 experiments, 99 configurations, 222 evidence records, 21 reproducibility assessments, 53 unresolved findings, and 14 explicit conflicting-evidence findings.

## Scale-out checkpoint Stage3-S008

Status: **PASS**

`CR000014` preserves the corrected provider-page identity, the resolved `/Info/` → `/lnfo/` alias, and paper relationship `PRL000042`. The provider-linked 146,645,296-byte ZIP passed integrity checks and was checksummed; its sole top-level payload is a 148,109,224-byte Windows x86-64 GUI executable. Static PyInstaller inspection established Python 3.7, PyTorch 1.2.0 CPU, two pretrained checkpoints, and matching state-dictionary architectures with five 100-unit hidden linear layers between four inputs and two outputs. Neither the executable nor a checkpoint was run or deserialized.

The one trial experiment has two provider-documented configurations: Model 1 covers 1–2 ps and 1.9–3.8 W, while Model 2 covers 0.4–0.8 ps and 12–24 W. Both use the page's fixed dispersion/Kerr parameters and soliton-number range. The use workflow is R3 because the entrypoint, checkpoints, inputs, valid ranges, and interaction steps are substantially available. R4 is withheld because source, license, complete build/training metadata, and numerical reference outputs are absent.

Cumulative totals are 22 resources, 37 experiments, 101 configurations, 231 evidence records, 22 reproducibility assessments, 56 unresolved findings, and 14 explicit conflicting-evidence findings.

## Scale-out checkpoint Stage3-S009

Status: **PASS**

`CR000015` was isolated because its 342-file tree combines simulated, NASA randomized-usage, and XJTU laboratory battery experiments with BattNN, CNN, and LSTM configurations. The nine bounded configurations preserve explicit entrypoints, default hyperparameters, circuit parameters, architectures, 300 NPY sequences, four NASA MAT files, and nine trained checkpoints. Parameter sweeps and repeated-battery loops remain execution variants rather than artificial configurations.

The static reproducibility level is R1. Source, inputs, evaluation metrics, and checkpoints are present, but no environment/dependency manifest, versions, or installation workflow exists, so hierarchical R2 sufficiency is not met. Python/NumPy seeds do not establish a PyTorch seed, and CNN/LSTM checkpoint paths use Windows backslashes while the pinned tree uses the `results/` directory; that platform-sensitive mismatch remains configuration-scoped conflicting evidence.

Cumulative totals are 23 resources, 40 experiments, 110 configurations, 241 evidence records, 23 reproducibility assessments, 60 unresolved findings, and 15 explicit conflicting-evidence findings.

## Scale-out checkpoint Stage3-S010

Status: **PASS**

`CR000016` preserves the pinned DeepXDE framework identity, LGPL-2.1 license, three verified Atlas relationships, and canonical citation DOI. The snapshot is twelve commits after tag `v1.15.0`; paper 234's explicit DeepXDE 1.13.1 statement remains scoped to supporting-dependency relationship `PRL000044` and is not misassigned to the later repository snapshot.

The framework supports TensorFlow 1.x compatibility, TensorFlow 2.x, PyTorch, JAX, and PaddlePaddle backends; forward/inverse differential equations, fractional and stochastic problems, operator learning, multifidelity learning, multiple automatic-differentiation modes, boundary-condition families, geometries, and sampling strategies are bounded as framework capabilities. Its 71 Python examples, 12 bundled dataset files, and 46 documented demo pages remain capability evidence rather than artificial paper-specific experiments or configurations.

The framework-level reproducibility assessment is R2. Source, license, package metadata, installation workflows, backend selection, documentation, examples, and citation metadata are available, but manifests do not lock one exact resolved cross-backend environment and no single canonical research reproduction target is invented. The final Stage-2 record lists `setup.py`; the pinned tree contains `pyproject.toml` and no `setup.py`, so the mismatch remains explicit conflicting evidence without modifying Stage 2.

Cumulative totals are 24 resources, 40 experiments, 110 configurations, 251 evidence records, 24 reproducibility assessments, 62 unresolved findings, and 16 explicit conflicting-evidence findings.

## Scale-out checkpoint Stage3-S011

Status: **PASS**

`CR000017` preserves the official HUWIE-Net relationship to Atlas paper 259 while retaining Stage 2's adjacent physics-informed classification. The code does not enforce a differential-equation residual: its physical channel learns a transmission-like map, estimates atmospheric light from a blue/green dark channel, applies an underwater image-formation inversion, and fuses that result with a supervised image-to-image branch. It is therefore recorded as non-PINN research code rather than silently relabeled as a classical PINN.

One UIEB paired-image experiment contains five configurations: the hybrid HUWIE-Net, image-only and physical-only ablations, and UIEC2-Net/UWCNN comparators. All five model classes and epoch-50 checkpoints are bundled and checksummed. The hybrid pair alone is directly wired into `test.py` and `test.ipynb`; the other four require source-level model/checkpoint changes and remain partially verified.

The hybrid pretrained-use workflow is R3 because the exact checkpoint, external dataset retrieval path, 800/90/90 split, preprocessing, entrypoint, and MSE/PSNR/SSIM evaluation are substantially available. R4 and complete retraining are withheld: no license or numeric result targets are supplied, the documented requirements file is not installable in its mixed pip/conda-table form, the final epoch-50 command and seeds are absent, and the validation loop evaluates `tdata` from training instead of the enumerated `vdata` validation batch.

Cumulative totals are 25 resources, 41 experiments, 115 configurations, 263 evidence records, 25 reproducibility assessments, 68 unresolved findings, and 18 explicit conflicting-evidence findings.

## Scale-out checkpoint Stage3-S012

Status: **PASS**

`CR000018` preserves pykan as a supporting KAN library cited by Atlas paper 262, not as that paper's official PIKAN implementation. The pinned MIT-licensed version 0.2.8 provides KAN, symbolic-KAN, MultKAN, MLP, and LBFGS components together with grid refinement, pruning, attribution, symbolic fitting, and visualization capabilities.

The 494-file tree includes 88 tutorial notebooks, 67 generated RST documents, and 13 tutorial cache/config/state bundles. These remain library capability evidence with zero paper-specific experiments/configurations. In particular, the repository explicitly states that its community physics-informed KAN/Navier–Stokes notebook was uploaded by a GitHub user and was neither written nor proofread by the KAN authors; Stage 3 does not map it to paper 262.

The library-level reproducibility assessment is R2. Installation routes, exact versions for eight dependencies, source, license, quickstart, documentation, hardware guidance, and tutorial outputs are available. Exact environment reconstruction remains incomplete because two requirements are unversioned, README requires Python 3.9.7+ while `setup.py` declares 3.6+, and package metadata omit `install_requires` despite documenting direct PyPI/Git installation.

Cumulative totals are 26 resources, 41 experiments, 115 configurations, 273 evidence records, 26 reproducibility assessments, 71 unresolved findings, and 20 explicit conflicting-evidence findings.

## Scale-out checkpoint Stage3-S013

Status: **PASS**

`CR000019` preserves the current Stage-2 pin as the resource identity while following the pinned README's explicit statement that paper results were obtained at historical commit `c79d3f24023e36341385f10d728e5a93c925fad3`. The two snapshots are not conflated: the current 163-file tree supplies the modernized CompSim_PINNs 2026.0.0 framework source and bundled Hertzian FEM data, whereas the designated 213-file paper snapshot supplies the original source layout and 59 trained-model blobs.

Three experiments follow the paper's numerical benchmarks. The Lamé experiment contains the reported standard and large-parameter configurations, retained as partially verified because the historical source architectures and parameter literals do not uniquely identify their source/checkpoint families. The elastic-block experiment contains the sign, Sigmoid, and Fischer-Burmeister contact formulations. The Hertzian experiment contains pure and data-enhanced forward configurations, three inverse-pressure initial guesses, and one- and five-chunk pressure-surrogate configurations. Training stages, restore scripts, and result files remain evidence rather than artificial experiments.

The static reproducibility level is R3. Source, MIT license, installation routes, contact formulation, bundled FEM data, training settings, paper targets, and paper checkpoint families are substantially available. R4 is withheld because neither snapshot has a fully locked environment, model/sampling seeds are incomplete, the inverse source directly exposes only the 0.1 initial guess, and the current restore-only surrogate notebook points to an absent `pretrained_models/` tree whose matching checkpoints exist only in the explicitly linked historical snapshot.

Cumulative totals are 27 resources, 44 experiments, 127 configurations, 292 evidence records, 27 reproducibility assessments, 77 unresolved findings, and 21 explicit conflicting-evidence findings.

## Scale-out checkpoint Stage3-S014

Status: **PASS**

`CR000020` preserves the Stage-2-pinned PINN4SOH repository and its official relationship to Atlas paper 299. The 498-file tree bundles all 387 preprocessed battery CSVs reported across XJTU, TJU, MIT, and HUST, eleven pretrained source-model checkpoints, six result archives, 48 processed workbooks, and the source for regular SOH estimation, small-sample comparisons, and twelve ordered cross-dataset transfer pairs.

Three experiment records and seven configurations represent the paper's scientific design without multiplying dataset strata or ten repeated runs into artificial records. The regular and small-sample experiments each compare PINN, MLP, and CNN configurations; the transfer experiment preserves one common fine-tuning configuration across all twelve ordered source-target pairs. The paper's four-dataset mean PINN MAPE is 0.87%, and the small-sample Table 3 targets are retained without recomputation.

The static reproducibility level is R3. Exact core Python/package versions, installation commands, source, complete preprocessed data, checkpoints, archived logs/results, model equations, and paper targets are substantially available. R4 is withheld because the repository has no license or dependency manifest, current source beta defaults differ sharply from archived regular-run logs, the displayed paper monotonicity loss differs from the implemented expression, random seeds and filesystem ordering are incomplete, several workflows are not direct entrypoints, and only processed transfer workbooks—not raw fine-tuning run directories—are bundled.

Cumulative totals are 28 resources, 47 experiments, 134 configurations, 310 evidence records, 28 reproducibility assessments, 83 unresolved findings, and 23 explicit conflicting-evidence findings.

## Scale-out checkpoint Stage3-S015

Status: **PASS**

`CR000022` preserves the Stage-2 concept DOI `10.5281/zenodo.14334803`, official relationship `PRL000063`, and paper DOI `10.1145/3732775.3733574`. The sole deposited version is `10.5281/zenodo.14334804` (`v.001`). Its 2,553,284-byte `space_time_pino-main.zip` passed the provider MD5 check and an independently recorded SHA-256 check. Static ZIP inspection identified 211 members, including 53 Python source files, 92 bytecode files, two notebooks, one five-file TensorFlow SavedModel, runtime tables, and plot PDFs. No executable or model payload was run or deserialized.

One integrated experiment and four configurations preserve the paper's PINO, PINN-P, numerical-coarse, and space-parallel-fine comparison families without multiplying processor counts, Parareal iterations, or parameter sweeps into artificial records. The paper-reported two-asset Black-Scholes formulation, training design, accuracy, runtimes, convergence, scaling, resolution generalization, parameter generalization, and hardware remain source-scoped documented claims.

The static reproducibility level is R1. The deposited multidimensional equation and numerical source do not encode the paper's correlated two-asset PDE; the commented PINO example differs from the paper's architecture and training settings and references undefined `FNO2D`; and the ML-labelled scaling loops load no neural model, reuse the numerical coarse propagator, and add synthetic delays. Environment coverage is also incomplete, one notebook is truncated JSON, the valid notebook references absent paths, seeds are not wired into the assessed workflows, no license is supplied, and the paper itself reports conflicting PINO training volatilities. These limitations preserve the verified supplementary-code relationship while preventing a static claim that the archive reconstructs the published execution path.

Cumulative totals are 29 resources, 48 experiments, 138 configurations, 326 evidence records, 29 reproducibility assessments, 91 unresolved findings, and 27 explicit conflicting-evidence findings.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. The accepted Stage-3 methodology remains static-only and does not authorize scientific workload execution.
