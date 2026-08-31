# Computational Resources Stage 3 — Quality Report

Verification/extraction date: 2026-08-31  
Checkpoint: Stage3-P07

## Structural QA

Status: **PASS**

For P07:

- 1 resource record validated against `stage3-resource-technical.schema.json`.
- 1 experiment record validated against `stage3-experiment.schema.json`.
- 5 configuration records validated against `stage3-configuration.schema.json`.
- 15 evidence records validated against `stage3-technical-evidence.schema.json`.
- 1 static reproducibility assessment validated against `stage3-reproducibility.schema.json`.
- All P07 identifiers are unique.
- Every fact-level evidence reference resolves.
- `CR000091-E001` resolves from the resource and all five `C###` records resolve from both the resource and experiment.
- Inferred evidence uses `inferred` / `inferred_from_evidence`; direct evidence does not.
- Reproducibility levels remain restricted to R0–R4; no R5 value is present.
- The Zenodo DOI remains the authoritative resource identity; the archive-equivalent GitHub release is source-scoped technical evidence only.
- No Stage 1 or Stage 2 path is modified.
- No public Atlas/site or `05-curated/` path is modified.
- No scientific workload was executed.
- Public repository text attribution scan passed.

## Scientific extraction QA

Status: **PASS**

### CR000091

The resource remains correctly represented as a `pinn_implementation` delivered through `doi_archive`. Paper 605 directly cites Zenodo DOI `10.5281/zenodo.6519560` as the ModalPINN Python code, preserving `PRL000193` as an official high-confidence relationship.

A public ModalPINN repository by the same author exposes an `accepted_version` release explicitly described as the code corresponding to the paper release. Its immutable tag resolves to commit `752f14c8560e7a832ac6710bf018b472dc661862`. Stage 3 uses this release as archive-equivalent technical evidence without replacing the Zenodo CR identity or claiming byte-for-byte equivalence.

The resource is represented as one vortex-shedding reconstruction experiment with five materially distinct configurations: archived dense ModalPINN, dense classical-PINN comparison, sparse sensors, Gaussian noise, and asynchronous-sensor resynchronisation. This avoids both under-modeling distinct experimental conditions and over-splitting one physical case into unrelated experiment identities.

The accepted release contains a strong reproducibility bundle: historical platform instructions, mostly exact-pinned packages, external data DOI and readers, executable entrypoints, archived arguments/logs, model weights, convergence history, mode-shape data, and paper-linked evaluation results. Nevertheless, `ModalPINN_VortexShedding.py` imports `GPUtil` while `requirements.txt` omits it. Under the gated Stage3-D01 definition, this is a critical environment gap, so the representative dense configuration is correctly capped at **R3** rather than R4.

The asynchronous-sensor configuration exercises conflict preservation. Paper 605 reports the resynchronisation experiment, while the accepted-release `DesyncSparseData` branch contains undefined/mis-scoped variables. The configuration is marked `conflicting_evidence` and no source repair is performed.

## Ten-resource pilot acceptance-test matrix

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

## Pilot-level methodological result

Status: **READY FOR SCIENTIFIC ACCEPTANCE REVIEW**

The Stage3-D01 resource → experiment → configuration hierarchy successfully represented all ten deliberately heterogeneous resources without requiring another schema family or type-specific record tree.

The evidence model also remained discriminating across direct implementation, repository documentation, primary-paper claims, provider metadata, archive-equivalent evidence, inference, missing information, and explicit conflict. No pilot case required collapsing `unknown`, `not_available`, `not_applicable`, or `false` into one missing-value state.

The reproducibility gates remained useful rather than decorative. The pilot produced differentiated R1–R4 outcomes and withheld higher levels where critical environment, data, result, or code-path evidence was missing. P07 specifically demonstrates that archived successful results do not override an incomplete declared runtime dependency specification.

### Acceptance-review recommendations

No schema change is required before scale-out. During scientific acceptance, explicitly confirm these operational interpretations:

1. Archive-equivalent repository releases may support static technical extraction when the DOI/paper/release lineage is strong, but the original archive identity remains authoritative and byte-level equivalence must not be claimed without direct comparison.
2. An imported runtime dependency absent from the declared environment manifest is a critical reproducibility gap and blocks R4 even when archived successful outputs exist.
3. Configuration-specific paper/code conflicts do not automatically lower an unrelated configuration's reproducibility level; the conflict must be scoped to the affected configuration.

After those interpretations are accepted, the existing schemas and Stage3-D01 methodology are suitable for controlled scale-out using the same checkpointed extraction and QA process.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site and `05-curated/` remain unchanged. The pilot involved static evidence inspection only and did not execute scientific resources.
