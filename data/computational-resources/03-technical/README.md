# Computational Resources Stage 3 — Technical Extraction Methodology

## Scope

Stage 3 is the deep static technical and scientific extraction layer for the accepted computational-resource registry. It enriches existing `CR######` identities without changing Stage 1 inventory or Stage 2 verification provenance.

Stage 3 does not execute repositories, install dependencies, run notebooks, train models, perform inference, launch containers, or reproduce experiments. Public Atlas views and `05-curated/` remain outside this stage.

## Authoritative inputs

1. Accepted Stage 1 inventory and `CR######` / `PRL######` identifiers.
2. Stage 2 verification overlays and closure records.
3. For repositories, the exact Stage 2 `verified_commit_sha` whenever one exists.
4. Primary papers, supplements, provider metadata, and archive metadata only when needed to establish technical facts not sufficiently supported by the pinned artifact.

A newer default-branch state must not silently replace a Stage 2 pinned repository snapshot.

## Compact Stage 3 structure

```text
03-technical/
├── README.md
├── pilot-selection.json
├── resources/
├── experiments/
├── configurations/
├── reproducibility/
└── batch-qa/

04-evidence/
├── README.md
├── technical-evidence/
└── extraction-log/
```

The compact structure intentionally avoids one directory per technical field. Scientific domains are represented through stable `technical_field` namespaces in records, while evidence is represented once in the canonical technical-evidence model.

Recommended field namespaces include:

```text
identity.*
capabilities.*
scientific_problem.*
mathematical_formulation.*
physics_enforcement.*
losses_constraints.*
differentiation.*
architecture.*
training.*
sampling.*
software_environment.*
installation.*
datasets.*
inputs_outputs.*
evaluation.*
execution.*
reproducibility.*
```

## Record hierarchy

```text
CR resource
├── resource-level technical facts
├── experiment CR######-E###
│   ├── experiment-level facts
│   └── configuration CR######-E###-C###
│       └── configuration-level facts
└── reproducibility assessment(s)
```

A resource can have zero experiments when experiment semantics do not apply, such as a data portal or supporting library. A resource can have several experiments, and one experiment can have several materially distinct configurations.

Do not create a synthetic canonical architecture, optimizer, training schedule, or dataset when the supplied artifact contains multiple configurations.

## Identifier policy

### Existing identities

- Preserve every existing `CR######`.
- Preserve every existing `PRL######`.
- Stage 3 does not create a new resource identity merely because it discovers additional technical detail.

### Experiment identifiers

Format: `CR######-E###`

- Assigned sequentially within a resource.
- Assigned only after a distinct experiment/use case is evidence-supported.
- Ordering is administrative, not semantic.
- Once committed, an experiment identifier is never renumbered or reused.
- Experiment identity is based on a stable evidence-defined scientific/computational case, not filename order alone.

### Configuration identifiers

Format: `CR######-E###-C###`

A child configuration is created only when a single experiment contains materially different architecture, training, data, numerical, or evaluation settings that must not be collapsed.

### Technical-evidence identifiers

Format: `TE-CR######-####`

- Monotonically assigned within each resource.
- One evidence record supports one technical claim/value at a defined source location.
- A technical fact can cite one or more evidence identifiers.
- The same evidence can support multiple higher-level records only when the exact cited evidence genuinely supports each claim.

## Technical fact model

Each technical fact contains:

```text
technical_field
value
field_status
confidence
source_relation
evidence_ids[]
```

Repository implementation and paper reporting remain separate claim scopes. If a repository and paper report the same field, retain source-specific facts where necessary. If they disagree, preserve both values, mark the affected field claims `conflicting_evidence`, and link each value to its own evidence.

Inference is permitted only when explicitly represented as `evidence_type: inferred` and `source_relation: inferred_from_evidence`. Inference is never represented as direct implementation or documentation verification.

## Field-state semantics

| State | Meaning |
|---|---|
| `verified` | Direct inspection establishes the value or an explicit negative finding. Example: a searched license is absent and the value is recorded as `false`. |
| `documented` | An authoritative README, formal documentation, paper, supplement, or provider statement explicitly reports the value, but implementation has not been independently established. |
| `partially_verified` | Material parts are verified, but the full scope/value is incomplete. |
| `unknown` | Available evidence is insufficient to establish the value. |
| `not_available` | The required source/artifact is inaccessible or unavailable at the extraction checkpoint. |
| `not_applicable` | The field does not apply to the resource, experiment, or configuration. |
| `conflicting_evidence` | Authoritative sources disagree; all competing values and evidence are retained. |

`unknown`, `not_available`, `false`, and `not_applicable` are never interchangeable. A bare `null` is not a missing-information state; nullable values require an explicit companion status.

## Confidence semantics

| Confidence | Meaning |
|---|---|
| `high` | Direct authoritative evidence at the exact applicable snapshot/location with unambiguous field mapping. |
| `medium` | Authoritative but indirect, incomplete, or cross-source evidence where the field mapping remains defensible. |
| `low` | Weak/indirect evidence or a clearly labeled inference. Prefer `unknown` over a low-confidence guess when the inference adds no scientific value. |

Confidence is independent of field state. A documented claim can have high confidence; a conflict can also have high confidence when both conflicting observations are clear.

## Resource profile and artifact form

Stage 3 uses two orthogonal axes:

1. `resource_profile` — scientific/technical role.
2. `artifact_form` — how the artifact is delivered or accessed.

This prevents, for example, a PINN implementation archived under a DOI from being treated as only an archive, or a dataset directory from being treated as general software.

Supported resource profiles:

```text
pinn_implementation
pinn_framework_library
physics_informed_operator_learning
supporting_scientific_ml_library
dataset
simulator_solver
profile
tutorial_educational
non_pinn_research_code
mixed_other
```

Supported artifact forms:

```text
source_repository
documentation_site
data_portal
web_service
static_data_directory
doi_archive
supplementary_archive
profile_page
mixed_web_artifact
other
```

## Type-specific extraction modules

### PINN implementation

Applicable modules normally include scientific problem, mathematics, physics enforcement, losses/constraints, differentiation, architecture, sampling, training, environment, datasets, inputs/outputs, evaluation, entrypoints, and reproducibility.

### PINN framework/library

Emphasize supported capabilities, backends, equation/problem support, APIs, configuration, sampling/loss/differentiation facilities, training workflow, installation, dependencies, examples, extension mechanisms, accelerator/distributed support, and reproducibility. Do not force one experiment schema onto framework-wide capabilities.

### Physics-informed operator learning

Represent function-space inputs/outputs, operator formulation, branch/trunk or alternative operator architecture, physics enforcement, data construction, operator loss, supported equations, training, and evaluation. Do not automatically classify it as a classical PINN.

### Supporting scientific-ML/scientific-computing library

Extract only the library capabilities, environment, interfaces, and scientifically relevant role. Do not relabel the resource as a PINN implementation.

### Dataset

Represent dataset identity, role, provider, version, access, license, files/formats, variables/units/coordinates, coverage, sample counts/splits when supported, preprocessing, generation/reference source, benchmark role, and model/checkpoint artifacts when present. Arbitrary `.csv`, `.mat`, `.npy`, result, or example files are not automatically reusable datasets.

### Simulator/solver

Represent equations/physics, numerical method, discretization, solver capabilities, interfaces, input/output formats, coupling role, dependencies, and reproducibility-relevant setup.

### Non-PINN paper research code

Represent the actual method implemented without applying PINN-specific fields unless the evidence supports them. PINN-only fields are normally `not_applicable`.

### Tutorial/educational resource

Represent subject, technical concepts, mathematical topics, intended audience/use, and computational relevance. Software fields apply only when executable artifacts are actually part of the resource.

### Data portal / web service / archive

Represent provider, access mechanism, products, versions, formats, API/download workflow, authentication, licensing, provenance, and exact research role. Deep binary/archive inspection can be bounded and deferred without blocking the resource.

## Software environment rules

Dependency observations must preserve version semantics. For each dependency version claim use one of:

```text
exact_pin
lower_bound
upper_bound
compatible_range
documented_version
unversioned_dependency
unknown
```

Never convert an unversioned import, README name, or loose requirement into an exact version.

Installation commands and entrypoints are stored as static evidence only. They are not executed in Stage 3.

## Paper versus repository evidence

A method reported in a paper is not automatically implemented in code. A repository can also contain experiments or defaults not reported in the paper.

For consequential fields, retain source-specific claim records using:

```text
implemented_in_code
documented_in_repository
reported_in_primary_paper
reported_in_supplement
documented_by_provider
inferred_from_evidence
```

When sources conflict, do not reconcile them silently.

## Static archive and dataset boundary

Prefer, in order:

1. Stage 2 metadata and pinned repository tree;
2. archive/dataset metadata;
3. file manifests;
4. README/formal documentation;
5. associated paper/supplement;
6. small safe text-based files.

If useful inspection requires a substantial binary/archive download, record `deep_archive_inspection_deferred` in the extraction notes/unresolved record and continue with the bounded evidence.

## Reproducibility model

Stage 3 assesses static reproducibility only.

Components are assessed independently:

```text
source_available
license_clear
environment_specified
versions_pinned
installation_documented
entrypoint_identified
data_available
preprocessing_documented
mathematics_documented
architecture_documented
training_documented
hyperparameters_documented
seeds_reported
hardware_reported
evaluation_documented
expected_results_documented
checkpoints_available
citation_available
```

Type-specific `not_applicable` components do not reduce the level.

### Gated levels

- `R0` — resource identity is established, but no usable source/equivalent technical artifact is available.
- `R1` — source/equivalent artifact is available, but environment/use-path information is insufficient for a defined reproduction workflow.
- `R2` — R1 plus environment and installation information are substantially specified for the applicable artifact; exact version pinning is not mandatory.
- `R3` — R2 plus the necessary data/configuration and training/use instructions for the assessed experiment/configuration are substantially available.
- `R4` — R3 plus the static artifacts define an end-to-end technical reproduction workflow: applicable inputs/preprocessing, mathematics/model or solver configuration, entrypoint, training/use procedure, and evaluation/expected outputs are sufficiently specified with no critical unresolved blocker.
- `R5` — prohibited in Stage 3. It requires later independent execution/reproduction.

The level is not an average score. Each level requires the previous level and its type-specific critical prerequisites. An `unknown`, `not_available`, or consequential `conflicting_evidence` state on a critical prerequisite blocks advancement to the next level. Noncritical gaps such as unreported hardware or seed remain explicit gaps rather than being silently ignored.

## Pilot acceptance tests

The pilot must demonstrate that the model can represent:

- one resource → multiple experiments;
- one experiment → one or more configurations;
- one fact → one or more evidence records;
- paper reporting ≠ repository implementation;
- resource identity ≠ paper relationship;
- bundled files ≠ reusable dataset automatically;
- supporting library ≠ PINN implementation;
- operator learning ≠ classical PINN automatically;
- `unknown` ≠ `false`;
- `not_available` ≠ `not_applicable`;
- repository snapshots remain pinned to Stage 2 evidence where available;
- R5 cannot be assigned.

No pilot technical extraction begins until the pilot design is approved.
