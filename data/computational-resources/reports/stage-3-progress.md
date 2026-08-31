# Computational Resources Stage 3 — Progress

Verification/extraction date: 2026-08-31

| Field | Value |
|---|---|
| Stage-3 phase | Pilot extraction complete; waiting scientific acceptance |
| Current batch | Pilot batch 007 |
| Current checkpoint | Stage3-P07 |
| Last completed resource | CR000091 |
| Next resource | None — pilot acceptance review required before scale-out |
| Completed Stage-3 resource count | 10 |
| Remaining Stage-3 registry resource count | 354 |
| Approved pilot resources completed | 10 / 10 |
| Approved pilot resources remaining | 0 |
| Completed experiment count | 23 |
| Completed configuration count | 83 |
| Technical evidence records | 131 |
| Static reproducibility assessments | 10 |
| Current QA status | PASS |
| Current unresolved technical item count | 23 |
| Current conflicting-evidence finding count | 3 |
| Resources completed in this checkpoint | CR000091 |
| Last checkpoint commit | self — Git commit containing this report |

## Stage3-P07 result

The seventh pilot checkpoint extracted `CR000091`, completing the full ten-resource Stage3-D01 pilot.

### CR000091

- Profile: `pinn_implementation`
- Artifact form: `doi_archive`
- Authoritative resource identity: Zenodo DOI `10.5281/zenodo.6519560`
- Atlas relationship: `PRL000193` → paper 605, *ModalPINN: An extension of physics-informed Neural Networks with enforced truncated Fourier decomposition for periodic flow reconstruction using a limited number of imperfect sensors*, DOI `10.1016/j.jcp.2022.111271`
- Experiments: 1
- Configurations: 5
- Static reproducibility: `R3` for the archived dense ModalPINN configuration `CR000091-E001-C001`

The primary paper directly cites the Zenodo DOI as the ModalPINN Python code. A public repository by the same author provides an `accepted_version` release named **Official code with accepted paper** and states that this version corresponds to the paper release. That tag resolves to immutable commit `752f14c8560e7a832ac6710bf018b472dc661862`.

Stage 3 therefore uses that tag as an **archive-equivalent technical snapshot**, while preserving the Zenodo DOI as the CR identity. Exact byte equivalence is not claimed because the Zenodo payload itself was not unpacked or byte-compared.

The accepted release documents and contains:

- `ModalPINN_VortexShedding.py` for ModalPINN reconstruction;
- `ClassicPINN_VortexShedding.py` for the classical-PINN comparator;
- helper code for neural-network operations and data preparation;
- a documented Compute Canada / Python 3.7.4 workflow;
- exact pins for most Python dependencies;
- external training-data DOI `10.5281/zenodo.5039610`;
- archived trained ModalPINN results, convergence histories, mode-shape products, console logs, and model-weight pickles.

### Experiment/configuration model

`CR000091-E001` represents one scientific case: periodic laminar vortex shedding around a fixed circular cylinder at `Re=100`, reconstructed through ModalPINN.

Five materially distinct configurations are retained:

1. `CR000091-E001-C001` — archived dense ModalPINN run with four Fourier modes;
2. `CR000091-E001-C002` — dense classical-PINN comparator;
3. `CR000091-E001-C003` — sparse/asymmetric sensor reconstruction;
4. `CR000091-E001-C004` — Gaussian-noise robustness configuration family;
5. `CR000091-E001-C005` — asynchronous-sensor resynchronisation configuration.

The archived dense run records `Nmodes=4`, `Nmes=5000`, `Nint=10000`, multigrid with five grids, a 100-iteration grid-turn period, zero added noise, width parameter 20, L-BFGS-B limits of 50,000 iterations/function evaluations, Adam learning rate `1e-5`, uniform equation-point sampling, and a visible Tesla T4 GPU. Its archived result folder contains the trained model `DNN2_80_80_4_tanh.pickle`, convergence history, mode-shape data, figures, copied source files, and console output.

### Reproducibility boundary

The dense configuration is gated at **R3**, not R4.

The accepted release has unusually strong static reproducibility evidence: documented platform, exact pins for most dependencies, installation instructions, external data DOI and readers, exact run arguments, training settings, archived outputs, and trained weights. However, the main ModalPINN entrypoint imports `GPUtil` while `requirements.txt` does not declare that package. Under the gated Stage3-D01 model, an incomplete runtime dependency specification is a critical environment gap, so R4 is withheld.

A second provenance limitation is retained: the Zenodo payload itself was not directly unpacked or byte-compared with the accepted GitHub release. This does not invalidate the software identity or official paper relationship, but it prevents Stage 3 from claiming byte-level archive equivalence.

### New conflicting evidence

Paper 605 reports successful asynchronous-sensor resynchronisation experiments. In the accepted-release source, the `DesyncSparseData` branch references `Delta_t_np_pitot` without a definition and subsequently references `Delta_phi_tf_pitot` although that variable is assigned only in the opposite branch. The paper result and accepted-release execution path are therefore preserved as a third explicit conflicting-evidence finding; Stage 3 does not repair or reconcile the source.

## Completed pilot state

The ten approved pilot resources now span:

- PINN implementations;
- a PINN framework/library;
- physics-informed operator learning;
- a supporting scientific-ML library;
- non-PINN research code;
- a differentiable numerical solver;
- a versioned scientific dataset;
- and a DOI-delivered software archive.

Across those resources the Stage3-D01 hierarchy has successfully represented resources with zero or many experiments, zero or many configurations, repository-only versus paper-supported experiments, dataset consumer relationships, archive-equivalent snapshots, source conflicts, missing dependencies, and static reproducibility levels from R1 through R4 without introducing a second ontology family.

No schema change is required as a consequence of the pilot.

## Stage boundaries

Stage 1 and Stage 2 remain unchanged and read-only. No public Atlas/site file or `05-curated/` output was modified. No archive payload, software environment, dependency, notebook, training process, inference workflow, solver, dataset payload, checkpoint, or model was executed.

## Next action

**Stop Stage-3 extraction here and perform the ten-resource pilot scientific acceptance review.** No additional registry resource should be extracted until the pilot methodology, evidence discipline, reproducibility gates, and bounded-inspection rules are explicitly accepted for scale-out.
