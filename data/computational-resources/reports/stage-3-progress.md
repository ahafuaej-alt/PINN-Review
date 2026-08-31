# Computational Resources Stage 3 — Progress

Verification/extraction date: 2026-08-31

| Field | Value |
|---|---|
| Stage-3 phase | Approved pilot extraction in progress |
| Current batch | Pilot batch 004 |
| Current checkpoint | Stage3-P04 |
| Last completed resource | CR000163 |
| Next resource | CR000217 |
| Completed Stage-3 resource count | 7 |
| Remaining Stage-3 registry resource count | 357 |
| Approved pilot resources completed | 7 / 10 |
| Approved pilot resources remaining | 3 |
| Completed experiment count | 21 |
| Completed configuration count | 77 |
| Technical evidence records | 94 |
| Static reproducibility assessments | 7 |
| Current QA status | PASS |
| Current unresolved technical item count | 17 |
| Current conflicting-evidence finding count | 2 |
| Resources completed in this checkpoint | CR000163 |
| Last checkpoint commit | self — Git commit containing this report |

## Stage3-P04 result

The fourth pilot checkpoint extracted `CR000163` using the exact Stage-2 pinned repository snapshot and revalidated the official Stage-2 paper relationship against the correct Atlas paper.

### CR000163

- Profile: `non_pinn_research_code`
- Artifact form: `source_repository`
- Pinned commit: `17371f1fe10aa362a11a510de8909c192d505b29`
- License: `CC0-1.0`
- Experiments: 3
- Configurations: 0
- Static reproducibility: `R1`
- Atlas relationship: `PRL000007` → paper 44, *Time-of-Flow Distributions in Discrete Quantum Systems: From Operational Protocols to Quantum Speed Limits*, DOI `10.3390/e27100996`.
- The primary paper's Data Availability Statement identifies the exact notebook `Codes_for_TF_discrete_paper_arxiv_org_abs_2504_09571.ipynb` as the programming code supporting the study. This mapping is represented as `CR000163-E001`.
- Two other notebooks are retained as independent repository experiments: free-fall time-of-arrival calculations (`CR000163-E002`) and context-dependent time-energy uncertainty calculations for a driven three-level system (`CR000163-E003`). No Atlas-paper relationship is inferred for those two experiments.
- The repository is correctly retained as non-PINN research code. The inspected methods are quantum-dynamics and timing-distribution calculations, not physics-informed neural-network training.
- The pinned root contains three notebooks and `LICENSE`, with no README, CITATION file, formal dependency manifest, installation workflow, or bundled reusable research dataset.
- Observed packages include NumPy, Matplotlib, SciPy, and QuTiP; no exact dependency versions are supplied. The time-energy-uncertainty notebook includes an inline `pip install qutip` command without a version.
- Because usable source entrypoints exist but environment/install specification is insufficient, the resource is gated at `R1` rather than `R2`.

## Cumulative pilot state

Seven heterogeneous resources are now complete. P04 exercises another core Stage3-D01 requirement: **resource identity is not equivalent to a paper relationship**. A repository may contain several research experiments while only one has evidence for a specific Atlas-paper relationship.

The experiment layer therefore remains necessary even for non-PINN research code. Conversely, no configuration objects were created merely because notebooks contain parameter values; Stage 3 requires a materially stable configuration identity before assigning `C###` records.

## Stage boundaries

Stage 1 and Stage 2 remain unchanged and read-only. No public Atlas/site file or `05-curated/` output was modified. No notebook cell, dependency, quantum simulation, optimization, model, figure-generation workflow, container, or research dataset was executed.

## Next action

Continue the approved pilot with `CR000217`, preserving the same small-checkpoint extraction and QA process. Do not scale beyond the ten-resource pilot until pilot acceptance is scientifically reviewed.
