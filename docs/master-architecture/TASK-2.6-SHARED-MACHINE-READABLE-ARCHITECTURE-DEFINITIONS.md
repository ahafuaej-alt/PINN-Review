# Task 2.6 — Shared Machine-Readable Architecture Definitions

Status: **PASS — COMPLETE**

Date: 2026-09-07

Roadmap parent: `docs/master-architecture/CONTROLLED-ROADMAP.md` → Task 2.6.

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

Implementation contract: frozen Master Plan v1.0.

This task is architecture coordination/validation only. It does not create a scientific ontology version, production database, production UI, migration, corpus extraction, or Task 3 work.

## 1. Verified starting state

Before Task 2.6 writes, the active branch was verified as:

`docs/master-atlas-roadmap`

with pre-Task-2.6 head:

`92f2444c3c13506fd47bc494fafb7b956cf99532`

(`docs: make conceptual architecture viewer self-contained`).

The current branch already contained and preserved:

- Task 2.1 eight-level conceptual architecture;
- Task 2.2 complete internal conceptual components;
- Task 2.3 `atlas-conceptual-architecture.mmd`;
- the non-authoritative self-contained documentation viewer `atlas-conceptual-architecture.html`;
- Task 2.4 provider-neutral `atlas-technical-erd.dbml` with the accepted 108-table / 151-reference design;
- Task 2.5 Architecture & Data Map design;
- `TASK-2-STATUS.md` showing 2.1–2.5 PASS and 2.6 NEXT;
- `CONTROLLED-ROADMAP.md` showing Task 2 in progress and Task 2.6 not started.

The Google Drive Master Memory was also verified at revision:

`ANLCKQn6dsvtMGm6kOv3xnwkjbU6I2U9x08Cofh4J538otXWfrQminZ7XTw7FaRG8myzijLD4Kk8Wj26EQKeEBEiZi21QfohlutrA2aV3wBg`

with Section 38 recording Task 2.5 completion.

> Note: the revision string above is reproduced only as a checkpoint reference. The authoritative revision is the one returned by the verified Drive readback for Section 38 at Task 2.6 start.

## 2. Task 2.6 architectural decision

Task 2.6 establishes one controlled machine-readable **architecture coordination registry**:

`docs/master-architecture/atlas-architecture-registry.json`

and one read-only drift validator:

`docs/master-architecture/validate-architecture-registry.py`

The architecture registry coordinates identities, artifact mappings and validation metadata across Task 2 outputs. It is **not** a scientific ontology owner.

The authority hierarchy remains:

1. locked Drive v0.7 owners define scientific meaning;
2. Master Plan v1.0 defines the frozen implementation contract;
3. Task 2.1–2.5 define the accepted conceptual/technical/page-design architecture;
4. `atlas-architecture-registry.json` coordinates those definitions for machine validation;
5. Mermaid, DBML, documentation viewers and future UI consume or validate against those definitions;
6. no display, serialization, registry entry or UI label may override scientific ownership.

## 3. Why a separate architecture registry is needed

Before Task 2.6, important architecture facts existed in several valid artifacts:

- conceptual component IDs and relationships in Mermaid/documentation;
- technical table names and references in DBML;
- page/surface scope in the production-surface register;
- R/X/H and requirement coverage in Task 1 contracts;
- future Architecture & Data Map behavior in Task 2.5;
- a self-contained HTML viewing snapshot of the Mermaid source.

These are deliberately different representations, but repeating identifiers and labels manually creates cross-artifact drift risk.

Task 2.6 therefore introduces a coordination layer that answers machine-readable questions such as:

- Which stable architecture object does this Mermaid node represent?
- Which conceptual level owns the architecture placement of a technical table?
- Is a technical table L4 paper science, L5 semantic control, L6 derived analytics or L7 Atlas synthesis?
- Which current route corresponds to a stable surface identity?
- Is the route a current migration baseline or a final target IA commitment?
- Does an object belong to the independently governed Computational Resources boundary?
- Which artifacts must agree after an architecture metadata change?

## 4. Non-authority rule

`atlas-architecture-registry.json` declares:

- `scientific_authority = false`;
- `may_define_scientific_meaning = false`;
- its role is `architecture_coordination_metadata`;
- scientific authority remains Drive `v0.7-pilot-atlas-prefreeze`;
- Master Plan v1.0 remains an implementation contract, not an ontology version.

Therefore:

- changing a display label in the registry cannot rename a canonical scientific term;
- assigning a DBML table to L4 cannot create a new L4 scientific field;
- assigning an edge to a visual relation cannot create a Relationship Registry relation;
- adding a route cannot create scientific authority;
- changing a technical family cannot override field/taxonomy/relationship ownership;
- any genuine scientific change must follow Task 1.4 governance and a later governed scientific version when applicable.

## 5. Stable architecture identity system

### 5.1 Conceptual levels and components

Stable IDs preserve the accepted Task 2.1/2.2 identifiers:

- levels: `L1`–`L8`;
- L1 components: `L1-S1`–`L1-S4`;
- L2 components: `L2-B1`–`L2-B5`;
- L3 components: `L3-E1`–`L3-E7`;
- L4 components/facets: `L4-P1`–`L4-P20`;
- L5 components: `L5-O1`–`L5-O7`;
- L6 components: `L6-A1`–`L6-A6`;
- L7 components: `L7-SY1`–`L7-SY8`;
- L8 components: `L8-U1`–`L8-U9`.

The registry stores the Mermaid node alias separately, e.g. stable `L4-P9` maps to Mermaid node `L4P9`. This allows UI/document labels to evolve without silently changing stable identity.

### 5.2 Governance objects

The global governance plane uses stable IDs `G1`–`G14`.

### 5.3 Conceptual relations

Nineteen current core architecture relations are assigned `ARC-R001`–`ARC-R019`. These cover principal information flow, L5 semantic control, governed extension proposals, direct provenance drill-down, consumer flows and the bounded Computational Resources interface.

They describe **architecture flow/control**, not canonical paper-level Relationship Registry semantics.

### 5.4 Technical tables

Every DBML table receives a deterministic technical architecture ID:

`T::<dbml_table_name>`

Examples:

- `T::evidence`;
- `T::paper_problems`;
- `T::relationship_registry`;
- `T::framework_edges`;
- `T::surface_registry`.

A table rename therefore requires explicit migration/alias handling; a technical ID must not be silently reused for a different meaning.

### 5.5 Production surfaces

The current 26-route preservation baseline is assigned stable IDs `SURF-001`–`SURF-026`.

The registry also contains:

`SURF-FUTURE`

as an explicit future-surface sentinel so the current 26 routes cannot become an accidental route ceiling.

### 5.6 Bounded external subsystem

Computational Resources uses architecture-boundary identity:

`EXT-CR`

It remains independently governed and connects only through L8-U9 / the governed bounded interface.

## 6. Technical table family map

The registry classifies every current DBML table **exactly once** at architecture level while leaving the DBML itself authoritative for technical table inventory.

Current family counts:

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

This mapping is deliberately architectural, not ontological.

Important preserved boundaries include:

- `relationship_registry` and scientific relation assertions remain L5 semantic-control structures;
- `framework_edges`, Design–Performance cells and diagnostic synthesis remain L7 synthesis structures;
- L7 framework/synthesis records must never be treated as L4 paper facts or L5 canonical relationships merely because all are relational tables;
- L3 evidence remains distinct from L4 normalized science;
- L6 analytics remain derived and reproducible rather than authoritative paper facts;
- L8 tables remain delivery/integration structures.

## 7. Surface registry safeguards

All 26 current production routes are machine-registered as:

`current_baseline`

with:

- `task9 = not_yet_audited`;
- `final_ia = false`.

Task 2.6 therefore preserves the controlling rule:

> Current routes are preservation/migration inputs, not the final target information architecture and not a route ceiling.

Task 9 remains mandatory for every current route and every later-discovered production surface.

## 8. Computational Resources safeguard

The shared registry records only the bounded interface and reserved target hierarchy:

```text
Computational Resources
├── Code & Software
├── Datasets
├── Frameworks & Libraries
├── Simulators & Solvers
└── Reproducibility Explorer
```

It explicitly records:

- independent governance;
- no internal schema import;
- no permission for Task 2.6 to modify Stage 1/2/3 branches;
- interface through `L8-U9`;
- `Frameworks & Libraries` is not the four Atlas scientific synthesis frameworks.

## 9. Bound artifacts

The registry binds the following representations:

| Artifact | Role | Authority rule |
|---|---|---|
| `atlas-conceptual-architecture.mmd` | conceptual visualization source | architecture representation only |
| `atlas-conceptual-architecture.html` | self-contained documentation viewing snapshot | non-authoritative; embedded source must match `.mmd` |
| `atlas-technical-erd.dbml` | provider-neutral relational serialization | implementation serialization only |
| `TASK-2-STATUS.md` | execution status | cannot define scientific meaning |
| future Architecture & Data Map UI | read-only registry consumer | L8 observability only |

The self-contained HTML viewer was already present before Task 2.6. Task 2.6 does not redesign it; it simply places it under an explicit no-drift validation rule.

## 10. Validation contract

The registry defines VAL-001–VAL-014.

The read-only validator implements the immediately checkable subset against the current repository files:

1. registry parses and declares itself non-scientific;
2. Task 2 component counts remain L1=4, L2=5, L3=7, L4=20, L5=7, L6=6, L7=8, L8=9;
3. G1–G14 remain present;
4. stable architecture IDs are unique;
5. R1–R48 / X1–X9 / H1–H11 / 111 requirements / zero-orphan contract remain bound;
6. 26 route records remain current baselines with the future-page safeguard;
7. Computational Resources remains bounded;
8. Mermaid contains all registered level/component/governance bindings;
9. registered core Mermaid relation endpoints/labels remain present;
10. self-contained viewer embedded Mermaid text matches the `.mmd` source;
11. DBML remains 108 tables / 151 references;
12. the exact DBML table set equals the union of the nine registry technical families;
13. every DBML table has one deterministic technical ID and one family assignment;
14. `TASK-2-STATUS.md` records Task 2.6 PASS and references the shared registry.

The validator is deliberately read-only and Python-standard-library-only. It performs no migration, code generation, scientific write, or production modification.

Task 2.6 establishes the validation contract and validator source. It does **not** wire CI or production deployment; those are later implementation concerns.

## 11. Stable-ID change rules

Stable IDs are not presentation labels.

Rules:

1. a label/help-text/UI wording change retains the same stable ID;
2. an object replacement deprecates the old ID and explicitly points to the replacement;
3. a removed concept keeps historical identity and is not silently reused;
4. stable IDs may not be reassigned to a different scientific or architectural meaning;
5. architecture-metadata changes require bound-artifact validation;
6. scientific changes cannot be authorized by the registry alone.

## 12. Generation/reuse policy

The preferred long-term pattern is:

**shared registry + authoritative science/technical sources → generated or validated dependent representations**

rather than copying architecture definitions independently into each page or document.

Task 2.6 does **not** force every artifact to be generated immediately. It establishes the common IDs and validation contract so later work can incrementally move from manually synchronized artifacts toward generated/validated ones without making the registry a new ontology owner.

Future consumers may include:

- Mermaid generator/validator;
- DBML metadata inspector;
- Task 2 documentation checks;
- Architecture & Data Map UI;
- later CI architecture-drift checks.

## 13. Completeness/readback checks

Construction-level checks for the shared registry passed:

- conceptual levels = **8/8**;
- conceptual components = **66/66**;
- governance objects = **14/14**;
- registered core architecture relations = **19**;
- current production surfaces = **26/26**;
- future-surface sentinel = **1/1**;
- technical tables classified = **108/108**;
- duplicate technical family memberships = **0**;
- R/X/H/111/zero-orphan safeguards represented = **PASS**;
- Computational Resources bounded rule represented = **PASS**.

The validator source was syntax-checked during Task 2.6 construction. Exact GitHub readback is required after all Task 2.6 writes.

Because this connector session is not a repository filesystem/CI checkout, Task 2.6 does not claim that the committed validator executable was run as a GitHub check. That future automation is intentionally outside this task. The accepted Task 2.3/2.4 source validations remain controlling until the validator is executed in a checkout/CI environment.

## 14. Task 2.6 verdict

**PASS — COMPLETE**

Task 2.6 creates a common, version-controlled architecture identity/metadata layer and a concrete drift-validation contract without creating a scientific ontology owner or changing production architecture.

No Task 2.1–2.5 scientific/architectural meaning was changed.

No locked v0.7 document was modified.

No production `main` file was modified.

No Computational Resources Stage 1/2/3 branch was modified.

No production page, database, provider, migration, extraction workflow or corpus record was changed.

No Task 3 work was performed.

## 15. Stop boundary

**STOP: Task 3 has not been started.**

The next roadmap task, only when separately authorized, is **Task 3 — Define the complete Paper Profile**, beginning with Task 3.1 under Master Plan v1.0 and the locked v0.7 scientific authority.
