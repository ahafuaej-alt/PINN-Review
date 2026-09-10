# Task 2.6 — Shared Machine-Readable Architecture Definitions

Status: **PASS — COMPLETE**

Date: 2026-09-07

Roadmap parent: `docs/master-architecture/CONTROLLED-ROADMAP.md` → Task 2.6.

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

Implementation contract: frozen Master Plan v1.0.

Task 2.6 is architecture-coordination and drift-validation work only. It does not create or change scientific ontology meaning, production data, a database provider, a production UI, migration, extraction, or Task 3 work.

## 1. Verified starting state

Before Task 2.6 writes, the active branch was verified as:

`docs/master-atlas-roadmap`

Pre-Task-2.6 branch head:

`92f2444c3c13506fd47bc494fafb7b956cf99532`

Commit: `docs: make conceptual architecture viewer self-contained`.

The branch already contained Tasks 2.1–2.5, the authoritative Mermaid conceptual source, the provider-neutral DBML technical ERD, and the non-authoritative self-contained conceptual viewer.

The Google Drive Master Memory was verified before Task 2.6 at revision:

`ANLCKQn6dsvtMGm6kOv3xnwkjbU6I2U9x08Cofh4J538otWfrQminZ7XTw7FaRG8myzijLD4Kk8Wj26EQKeEBEiZi21QfohlutrA2aV3wBg`

with Section 38 recording Task 2.5 completion and Task 2.6 as not started.

## 2. Task 2.6 architectural decision

Task 2.6 establishes one controlled machine-readable architecture coordination registry:

`docs/master-architecture/atlas-architecture-registry.json`

and one read-only drift validator:

`docs/master-architecture/validate-architecture-registry.py`

The registry coordinates stable architecture identity, mappings, artifact bindings, surface identities, technical-table placement, and validation metadata across Task 2 outputs.

It is explicitly **not a scientific ontology owner**.

Authority remains:

1. locked Drive v0.7 owners define scientific meaning;
2. Master Plan v1.0 defines the frozen implementation contract;
3. Tasks 2.1–2.5 define accepted conceptual, technical and page-design architecture;
4. `atlas-architecture-registry.json` coordinates those definitions for machine validation;
5. Mermaid, DBML, documentation viewers and future UI consume or validate against them;
6. no registry, serialization, display label or UI may override scientific ownership.

## 3. Registry non-authority contract

The registry declares:

- `role = architecture_coordination_metadata`;
- `scientific_authority = false`;
- `may_define_scientific_meaning = false`;
- scientific authority = Drive `v0.7-pilot-atlas-prefreeze`;
- Master Plan v1.0 = implementation contract, not ontology version.

Consequences:

- changing a registry display label cannot rename a canonical scientific term;
- assigning a DBML table to a conceptual level cannot create a scientific field;
- an architecture edge cannot create a canonical paper relationship;
- adding a surface cannot create scientific authority;
- any genuine scientific change must follow Task 1.4 governance and, where structural/canonical promotion is required, a later governed scientific version.

## 4. Stable architecture identities

The registry preserves stable identifiers for:

- conceptual levels `L1`–`L8`;
- all **66** Task 2.2 conceptual components/facets;
- governance objects `G1`–`G14`;
- nineteen current core architecture flow/control relations `ARC-R001`–`ARC-R019`;
- all DBML tables through deterministic IDs `T::<dbml_table_name>`;
- current routes `SURF-001`–`SURF-026`;
- explicit future-surface sentinel `SURF-FUTURE`;
- bounded Computational Resources subsystem `EXT-CR`.

Stable IDs are not presentation labels. Renames retain identity. Replacement requires explicit deprecation/replacement linkage. Retired IDs are not silently reused for different meaning.

## 5. Mermaid binding

The registry stores stable conceptual IDs separately from Mermaid node aliases. For example, stable `L4-P9` maps to Mermaid node `L4P9`.

This allows visual labels/layout to evolve without changing architecture identity.

The validation contract requires:

- all L1–L8 subgraphs/boundaries;
- component counts `4,5,7,20,7,6,8,9`;
- G1–G14;
- registered core relationship endpoints/labels;
- the independently governed Computational Resources boundary;
- the self-contained HTML viewer’s embedded Mermaid snapshot to remain equal to `atlas-conceptual-architecture.mmd`.

The `.mmd` remains the authoritative conceptual visualization source; the HTML viewer remains a viewing snapshot only.

## 6. Technical table family map

All **108** current DBML tables are classified exactly once into architecture families while `atlas-technical-erd.dbml` remains authoritative for the technical table inventory.

| Family | Conceptual home | Class | Tables |
|---|---|---|---:|
| TF-L1 | L1 | source | 2 |
| TF-L2 | L2 | identity | 4 |
| TF-L3 | L3 | evidence | 4 |
| TF-L4 | L4 | verified_science | 43 |
| TF-L5 | L5 | semantic_control | 13 |
| TF-L6 | L6 | derived_analytics | 6 |
| TF-L7 | L7 | atlas_synthesis | 14 |
| TF-L8 | L8 | surface | 6 |
| TF-G | Global plane | governance | 16 |
| **Total** |  |  | **108** |

The accepted DBML relationship count remains **151**.

This architecture placement preserves the required scientific boundaries:

- L3 evidence ≠ L4 normalized paper knowledge;
- L5 semantic-control registries ≠ L7 synthesis;
- `relationship_registry`/scientific relation assertions remain L5;
- framework edges, Design–Performance cells and diagnostic synthesis remain L7;
- L6 analytical results remain derived;
- L8 tables remain surfaces/integration structures.

Technical normalization therefore cannot promote a framework edge into a canonical relation or a synthesis result into a paper fact.

## 7. Production-surface contract

The registry records all **26/26** current production routes as `current_baseline` and `not_yet_audited` for Task 9.

It explicitly records:

- current routes are a preservation/migration baseline;
- `final_ia = false`;
- `route_ceiling = false`;
- Task 9 is mandatory;
- `SURF-FUTURE` preserves open-ended future-page extensibility.

Task 2.6 does not perform or preempt the detailed Task 9 dependency audit.

## 8. Computational Resources boundary

Computational Resources remains independently governed under `EXT-CR` and connects only through the bounded L8-U9 architecture interface.

The registry preserves the reserved direction:

```text
Computational Resources
├── Code & Software
├── Datasets
├── Frameworks & Libraries
├── Simulators & Solvers
└── Reproducibility Explorer
```

It does not import or redesign Stage 1/2/3 internal schemas and does not authorize modification of those branches. `Frameworks & Libraries` remains a resource/software category and is not the four Atlas scientific synthesis frameworks.

## 9. Frozen Task 1 contract bindings

The machine-readable registry preserves:

- R1–R48 = **48**;
- X1–X9 = **9**;
- H1–H11 = **11**;
- Master Plan requirements = **111**;
- specification orphan count = **0**;
- current routes = **26**;
- final IA = false;
- route ceiling = false;
- Task 9 mandatory = true.

These counts are control assertions; they do not convert architecture metadata into scientific authority.

## 10. Drift validator

`validate-architecture-registry.py` is read-only and Python-standard-library-only.

It is designed to check, in a repository checkout/CI-capable environment:

1. registry parsing and non-scientific-authority declaration;
2. component/governance counts and stable-ID uniqueness;
3. R/X/H/111/zero-orphan assertions;
4. current-route/future-surface/Task-9 safeguards;
5. Computational Resources bounded status;
6. Mermaid subgraph/node bindings;
7. registered core Mermaid relation endpoints/labels;
8. equality of the HTML viewer’s embedded Mermaid snapshot to `.mmd`;
9. DBML table count = 108 and Ref count = 151;
10. exact equality between the DBML table set and registry technical-family table set;
11. one technical family and deterministic technical ID per table;
12. `TASK-2-STATUS.md` binding to Task 2.6 completion.

The validator source was syntax-checked during Task 2.6 construction. This connector session is not a repository checkout/CI runtime, so Task 2.6 does **not** falsely claim that the committed validator was executed as a GitHub check. CI wiring/execution remains a later implementation action.

## 11. Generation/reuse policy

The long-term pattern is:

**shared architecture registry + authoritative scientific/technical sources → generated or validated dependent representations**.

Task 2.6 does not require every existing artifact to be regenerated immediately. It creates shared identities and no-drift checks so later work can incrementally replace manually duplicated architecture metadata with generated/validated representations.

Potential consumers include:

- Mermaid generator/validator;
- DBML metadata inspector;
- Task documentation consistency checks;
- future read-only Architecture & Data Map UI;
- later CI architecture-drift checks.

## 12. Completeness result

Task 2.6 construction/readback coverage:

- conceptual levels = **8/8**;
- conceptual components = **66/66**;
- governance objects = **14/14**;
- registered core architecture relations = **19**;
- current production surfaces = **26/26**;
- future-surface sentinel = **1/1**;
- technical tables classified = **108/108**;
- duplicate technical-family memberships = **0**;
- R/X/H/111/zero-orphan safeguards represented = **PASS**;
- Computational Resources bounded rule represented = **PASS**.

## 13. Task 2.6 verdict

**PASS — COMPLETE**

Task 2.6 creates a common, version-controlled architecture identity/metadata layer and drift-validation contract without creating a scientific ontology owner or changing production architecture.

## 14. Change boundary

Task 2.6 changed only roadmap-branch architecture documentation/coordination artifacts.

It did **not** modify:

- locked v0.7 scientific authority;
- production Atlas `main`;
- any Computational Resources Stage 1/2/3 branch;
- production database/data;
- database provider choice;
- production page/navigation;
- migration state;
- extraction/review records;
- corpus records;
- Task 3 scientific/profile specification.

## 15. Stop boundary

**STOP: Task 3 has not been started.**

The next roadmap task, only when separately authorized, is **Task 3 — Define the complete Paper Profile**, beginning with Task 3.1 under frozen Master Plan v1.0 and locked v0.7 scientific authority.
