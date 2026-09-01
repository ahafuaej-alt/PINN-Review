# Computational Resources Stage 3 — Quality Report

Status date: 2026-09-01
Acceptance checkpoint: Stage3-A01  
Pilot extraction checkpoint: Stage3-P07
Latest scale-out checkpoint: Stage3-S024

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

## Scale-out checkpoint Stage3-S016

Status: **PASS**

`CR000023` preserves the Stage-2 Zenodo DOI and verified supplementary-code relationship `PRL000066` to Atlas paper 326. Current provider metadata resolves the previously deferred license as CC BY 4.0. The sole 34,099-byte `Deep Learning Network Code.zip` passed its provider MD5 and an independently recorded SHA-256 check. Its 27 members comprise four directories and 23 Python files totaling 93,494 uncompressed bytes and 2,540 source lines; no documentation, environment, data, checkpoint, log, or result file is deposited.

One integrated experiment and four configurations preserve the paper's PointNet, PointNet-PINN, PointNet++, and PointNet++-PINN comparison without multiplying four datasets, four randomized partitions, or sixteen controlled groups into artificial experiments. The source implements four-input time/coordinate mappings to pressure and three velocity components. Both PINN families implement three dimensionless Navier-Stokes momentum residuals plus continuity at Reynolds number 300, but use different data/physics weights and training schedules.

The static reproducibility level is R1. All entrypoints require absent point-cloud data, CSV indices, metadata pickles, weight directories, and checkpoints; they mix relative paths with author-local Windows paths. No package manifest, Python version, install guide, seed, dataset/partition mapping, or archived numeric result is supplied, and the paper's patient data are available only by request subject to restrictions. The PointNet++-PINN evaluator also converts reference data to NumPy before passing its collection to `torch.cat`, so that evaluation path remains explicit conflicting evidence. No code, data, model, training, inference, evaluation, or visualization path was executed.

Cumulative totals are 30 resources, 49 experiments, 142 configurations, 341 evidence records, 30 reproducibility assessments, 98 unresolved findings, and 28 explicit conflicting-evidence findings.

## Scale-out batch SOB002 aggregate QA

Status: **PASS**

The second controlled scale-out batch contains 10 resources across ten adaptive single-resource checkpoints: 15 experiments, 46 configurations, 129 technical-evidence records, 10 reproducibility assessments, 49 newly recorded unresolved findings, and 15 newly recorded conflicting-evidence findings. All cumulative identifiers remain unique; evidence and hierarchy references resolve; Stage-2 authority and source scopes remain preserved; missing-value and inference semantics pass; R5 remains excluded; and no Stage-1, Stage-2, curated, or public Atlas/site file changed.

## Scale-out checkpoint Stage3-S017

Status: **PASS**

`CR000024` preserves the Stage-2-pinned `KTH-FlowAI/Enhancement-of-PIV-via-PINNs` snapshot and official relationship `PRL000070` to Atlas paper 339. The complete pinned tree has 10 blobs totaling 60,415,482 bytes: three Python files, one README, one 35,161,052-byte DNS MATLAB file, and five approximately 5 MB PIV MATLAB files. No MATLAB payload was opened.

Two bounded experiment records separate the direct DNS workflow from the five bundled PIV conditions. The DNS configuration maps the hard-coded `data_ub1.mat` entrypoint to the paper's 1% uniform-blowing case and preserves the implemented 2-20-20-20-20-5 tanh MLP, two momentum residuals, continuity residual, four supervised quantities, unobserved wall-normal velocity, 17,000 collocation points, and 188 boundary points. The PIV experiment preserves the smooth-wall, perforated-wall/no-blowing, 1%, 3%, and 6% files as five data configurations without claiming a runnable workflow: none of the three source files references a root PIV blob. The paper's three other DNS cases and NACA4412 study remain paper-scope facts because the pinned repository has no corresponding workflow/input.

The static reproducibility level is R1. No license, dependency manifest, Python/package versions, installation command, run command, seed, checkpoint, saved prediction, archived log, or numerical target is supplied. A consequential paper/code conflict also remains explicit: the paper specifies staircase exponential decay from 0.01 by 0.1 every 5,000 Adam epochs, while `training.py` constructs that schedule but passes the fixed scalar 0.01 to Adam. No source, environment, MATLAB payload, training, inference, evaluation, model, or plot was executed.

Cumulative totals are 31 resources, 51 experiments, 148 configurations, 358 evidence records, 31 reproducibility assessments, 104 unresolved findings, and 29 explicit conflicting-evidence findings.

## Scale-out checkpoint Stage3-S018

Status: **PASS**

`CR000025` preserves the MIT-licensed Stage-2-pinned `NS-equation` branch and relationship `PRL000071`. That relationship remains strictly a dataset mention: Atlas paper 340 identifies the bundled high-fidelity data as reference, boundary, and initial data; the repository's own NS-equation implementation is not silently reassigned as the paper's second-order/gPINN algorithm. README-described RANS variants live on other branches and are likewise not imported into the authoritative pinned snapshot.

The complete 14-blob tree totals 54,366,218 bytes and contains five Python files, one 24,161,192-byte MATLAB reference dataset, six qualitative GIFs, a README, and the MIT license. One repository-native experiment/configuration represents two-dimensional unsteady cylinder-wake reconstruction at Reynolds number 3900. The source implements a 3-input, ten-hidden-layer, width-100 tanh network with streamfunction and pressure outputs; velocity is differentiated from the streamfunction so continuity is implicit. Training uses all reference data, 1,000,000 Latin-hypercube equation points, Adam for 3,000 epochs, a 0.5% batch fraction, and warmup/cosine-restart scheduling with decaying maximum learning rate.

The static reproducibility level is R1. No dependency manifest, Python/package versions, installation/run instructions, seed, compatible checkpoint, numeric target, or tolerance is supplied. Three conflicts remain explicit: a non-empty remainder batch uses shifted and out-of-range tensor columns; the plotting script requires an absent differently named MAT file and checkpoint and constructs a five-output network instead of the training model's two outputs; and a training comment says pressure reference data are excluded while the invoked loss includes pressure MSE. The MATLAB payload and GIF frames were not opened, and no source, environment, training, inference, evaluation, checkpoint, or plot was executed.

Cumulative totals are 32 resources, 52 experiments, 149 configurations, 372 evidence records, 32 reproducibility assessments, 110 unresolved findings, and 32 explicit conflicting-evidence findings.

## Scale-out checkpoint Stage3-S019

Status: **PASS**

`CR000026` preserves the MIT-licensed Stage-2 pin and verified `PRL000072` software-mention relationship. Atlas paper 343 cites MORFEInvariantManifold.jl as software but separately makes its own deep-learning code and data request-only, so the package is not relabeled as official paper code and no paper experiment or configuration is manufactured.

The complete 90-blob snapshot documents a Julia 0.1.0 library for invariant-manifold model reduction of geometrically nonlinear resonant structures. Its active `src/` module exposes material, autonomous/non-autonomous reduction, backbone, and forced-response APIs; Project.toml and the legacy Manifest.toml describe and substantially pin the Julia dependency environment; the README documents installation of the unregistered package; and generated documentation is bundled. The repository has no research dataset or in-repository runnable example. Its one test file is a placeholder, the example/mesh corpus is external and unpinned, an exact Julia runtime and external MATLAB/COMSOL requirements are not specified, and no numeric targets or tolerances are supplied.

The static reproducibility level is R2. One scoped conflict remains explicit: the duplicate `build/` tree has seven changed counterparts relative to active `src/`, omits two active files, and uses an older differently cased module/export surface. Julia's package path identifies `src/` as active, so verified active-source facts are retained without treating the duplicate build as equivalent. No Julia package, dependency, test, example, finite-element analysis, input data, MATLAB, COMSOL, MatCont, or generated-documentation workflow was executed.

Cumulative totals are 33 resources, 52 experiments, 149 configurations, 383 evidence records, 33 reproducibility assessments, 116 unresolved findings, and 33 explicit conflicting-evidence findings.

## Scale-out checkpoint Stage3-S020

Status: **PASS**

`CR000027` preserves the Stage-2 pin and official `PRL000073` relationship to Atlas paper 349. Two repository-native workflows are represented: a pump-12 steady forward head model and a five-pumping-event inverse conductivity model. The exact-duplicate transient-named notebook and the standalone transient class are not promoted into a third experiment because they provide no distinct runnable workflow.

The complete 37-blob snapshot contains 25 hydraulic-head fields and one conductivity field on a 64 × 64 grid, 61 conductivity-measurement indices, 25 pumping-well indices, two substantive notebooks, one duplicate notebook, a transient class, and pump-12 forward coefficients. Both configurations use six 20-unit hidden tanh layers. The forward notebook uses one pumping event; the inverse notebook jointly trains five head networks and one conductivity network.

The static reproducibility level is R1. No license, dependency manifest, package versions, or random seeds are supplied. Saved training cells terminate with `KeyboardInterrupt`, and inverse output metadata also include a later `NameError` and non-monotonic execution state. Two source conflicts remain explicit: both notebooks assign `optimizer.lt` instead of changing Adam parameter-group learning rates, and the bundled forward hyperparameter file records Dirichlet weight 1,000 while the current notebook uses 5,000. No notebook, Python environment, data-generation process, training, inference, model, or plot was executed.

Cumulative totals are 34 resources, 54 experiments, 151 configurations, 395 evidence records, 34 reproducibility assessments, 123 unresolved findings, and 35 explicit conflicting-evidence findings.

## Scale-out checkpoint Stage3-S021

Status: **PASS**

`CR000028` preserves the verified `PRL000074` supplementary-code relationship to Atlas paper 360 while recording the exact paper-cited MTA-UNet repository as unavailable. The canonical URL still returns 404, no Stage-2 pin or source snapshot exists, and no verified replacement repository was identified. Repository source, documentation, license, dependency manifests, data, checkpoints, and result artifacts therefore remain unavailable and no mirror is substituted.

Three paper-reported comparison experiments and six configurations preserve the published scientific design without presenting paper facts as repository implementation. The loss-balancing experiment compares fixed coefficients with homoscedastic-uncertainty weighting; the architecture experiment compares U-Net and MTA-UNet on 10,000 training and 500 test samples; and the sample-size experiment compares data-only and physics-informed MTA-UNet at 100–5,000 training samples. The paper documents a shared-encoder, three-decoder attention U-Net, finite-difference thermoelastic residuals, five output fields, PyTorch 1.8, batch size 16, and MAE/MRE targets.

The static reproducibility level is R1. The primary paper supplies substantial formulation, architecture, objective, training, and numeric-result evidence, but source-level verification is impossible. Dataset-generation artifacts, complete environment and installation details, learning rate, epochs, stopping rule, seeds, hardware, fixed loss coefficients, exact trial mapping, checkpoints, and logs are absent. The printed optimizer name `AdamDelda` is retained alongside its Adadelta citation without silently correcting the source. No code, notebook, environment, data, training, inference, model, checkpoint, solver, or plot was executed.

Cumulative totals are 35 resources, 57 experiments, 157 configurations, 408 evidence records, 35 reproducibility assessments, 129 unresolved findings, and 35 explicit conflicting-evidence findings.

## Scale-out checkpoint Stage3-S022

Status: **PASS**

`CR000029` preserves the GPL-3.0 Stage-2 pin and official `PRL000091` relationship to Atlas paper 379. The complete 69-blob snapshot contains 64 Python files, six demonstration entrypoints, an embedded finite-element support library, one notched-domain MATLAB mesh, and 19 Navier-Stokes observation indices. Three experiment records group the source into Poisson, linear-elasticity, and steady incompressible Navier-Stokes families; each has one forward and one hard-assimilation inverse configuration.

All six configurations use Galerkin residuals assembled from finite-element trial/test functions and Chebyshev graph convolutions with order 10 and hidden widths 32–64–128–256–128–64–32. The shared optimizer is Adam at learning rate 0.001 and batch size one. Paper-reported forward and inverse targets remain paper-scoped because the tree contains no trained checkpoint, archived log, or result table.

The static reproducibility level is R1. No dependency manifest, Python version, or package versions are supplied, and README setup is limited to adding the embedded pyCaMOtk folder to `PYTHONPATH`. Three source conflicts remain explicit: element-based connectivity groups nodes by repeated local-row position across elements instead of within-element adjacency; both Navier-Stokes drivers build self-loop-only subgraphs; and nominal CPU device selection is contradicted by 32 hard-coded CUDA transfers. Seeds cover only the two Poisson configurations, the circular driver ends in an active debugger, and all workflows assume execution from their own directory. No code, environment, dependency, data, model, checkpoint, solver, training, inference, evaluation, debugger, or plot was executed, and the MATLAB payload remained unopened.

Cumulative totals are 36 resources, 60 experiments, 163 configurations, 423 evidence records, 36 reproducibility assessments, 136 unresolved findings, and 38 explicit conflicting-evidence findings.

## Scale-out checkpoint Stage3-S023

Status: **PASS**

`CR000030` preserves the Stage-2-pinned `Raocp/PINN-elastodynamics` repository and official `PRL000093` relationship to Atlas paper 391. The complete 305-blob snapshot totals 764,345,121 bytes and contains four Python entrypoints, 284 FEM-reference MATLAB files, seven pickle checkpoints, four result GIFs, four result PDFs, one PNG, and one README. Four experiment/configuration pairs correspond exactly to the source folders: cyclic loading of a quarter plate with a hole and elastic-wave propagation in confined, infinite, and semi-infinite domains. Paper-only static convergence and appendix comparisons are not promoted into artificial source configurations.

All four sources implement strong-form mixed displacement-stress elastodynamics with automatic differentiation, tanh networks, Xavier initialization, and deterministic NumPy/TensorFlow seeds of 1111. The two complex-boundary cases use composite particular, distance, and general networks for hard I/BC enforcement; the infinite and semi-infinite cases use soft enforcement. README records GPU TensorFlow 1.10.0, while the source additionally exposes unversioned NumPy, pyDOE, Matplotlib, pandas, and SciPy dependencies.

The static reproducibility level is R1. Although extensive FEM references, checkpoints, source, and result media are present, no license, dependency manifest, Python version, installation command, or complete package-version set is supplied, so the hierarchical R2 gate is not met. Two conflict classes remain explicit. First, active source parameters diverge from the paper: the plate general network is 8×70 rather than 8×80, all four sampling plans differ, and the infinite source extends the 16-second paper case to 20 seconds. Second, all active entrypoints comment out Adam and call L-BFGS-B directly, whereas the paper documents staged Adam followed by L-BFGS-B; the three wave paths also preload checkpoints. Binary data, checkpoints, and result media remained unopened, and no code, environment, model, solver, training, inference, evaluation, plot, or visualization was executed.

Cumulative totals are 37 resources, 64 experiments, 167 configurations, 439 evidence records, 37 reproducibility assessments, 143 unresolved findings, and 40 explicit conflicting-evidence findings.

## Scale-out checkpoint Stage3-S024

Status: **PASS**

`CR000031` preserves the Stage-2-pinned `amir-cardiolab/PINN-wss` repository and official `PRL000094` relationship to Atlas paper 393. The complete 28-blob snapshot totals 9,954,339 bytes and contains eight Python files with 6,387 source lines, four VTK files, four VTU files, one README, and one 3D-data pointer. Five experiment/configuration pairs correspond exactly to source-materialized paper cases: 1D advection-diffusion, 2D stenosis, 2D aneurysm, 3D aneurysm, and inverse viscosity identification. The three Torch2VTK scripts remain post-processing evidence rather than separate experiments.

The 1D source uses a 10×100 Swish network, 100 uniform collocation points, three measurements, no BC loss, and 5,000 Adam epochs. Each 2D case uses separate 9×128 Swish networks for two velocity components and pressure, five velocity sensors, batch size 256, and 5,500 Adam epochs. The 3D case uses four 9×200 networks, every-200th-node sensor subsampling, batch size 512, and 8,500 epochs. The inverse case adds a learnable positive scalar viscosity with one-tenth the network learning rate. These training configurations align with the primary-paper descriptions.

The static reproducibility level is R1. The README gives only generic PyTorch installation plus `pip install vtk`; no dependency manifest, Python/package versions, or license is supplied. The flow scripts use author-local absolute input roots instead of the bundled 2D data, the required 3D payload is only an unversioned Google Drive pointer, and no Results directory, checkpoint, log, saved prediction, or numeric target is tracked. Random initialization and shuffled batches are unseeded. One scoped conflict also remains explicit: the optional 3D WSS helper concatenates only `x` and `y` before calling three-input networks, while its default path disables WSS and writes only velocity and pressure. The four VTK and four VTU payloads and external 3D data remained unopened, and no code, environment, dependency, data, model, checkpoint, solver, training, inference, evaluation, plot, or visualization was executed.

Cumulative totals are 38 resources, 69 experiments, 172 configurations, 457 evidence records, 38 reproducibility assessments, 152 unresolved findings, and 41 explicit conflicting-evidence findings.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. The accepted Stage-3 methodology remains static-only and does not authorize scientific workload execution.
