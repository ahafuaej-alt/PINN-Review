# Task 1.1 — Authoritative Reconciliation

Status: **PASS**

Date: 2026-09-07

Roadmap parent: `docs/master-architecture/CONTROLLED-ROADMAP.md` → Task 1.1

Scope: planning/documentation only. This record does not authorize production migration, change the locked scientific ontology, modify Atlas `main`, or alter the Computational Resources workstream.

## 1. Purpose

Task 1.1 reconciles the locked ontology, original pilot lineage, 31-field PINN Ecosystem, four Atlas synthesis frameworks, current Atlas implementation architecture, verified bibliographic work, Dataset Manager, and the Google Drive Master Architecture & Implementation Memory into one explicit authority and ownership model for later Master Plan work.

The objective is not to merge every source into one schema. The objective is to establish which source owns which scientific or implementation concern, identify overlaps and conflicts, preserve historical provenance, and define what may enter Master Plan v1.0 without changing scientific meaning.

## 2. Authority precedence

### Tier A — operational scientific authority

Google Drive `PINN Ontology & Evidence Database / MAIN`, locked baseline `v0.7-pilot-atlas-prefreeze`, is the operational scientific source of truth.

The five single-owner ontology documents have non-overlapping ownership:

1. **Canonical Schema / Field Dictionary** — owns entity structure, field names, cardinality, requirement classes, and structural boundary rules.
2. **Controlled Vocabularies** — owns enumerated values and controlled labels.
3. **Taxonomy Term and Alias Registry** — owns normalized concepts, term status, aliases, source terminology, and promotion state.
4. **Relationship Registry** — owns typed ontology relationships, relationship status/scope, and prohibited generic edges.
5. **Ontology Governance and Change Rules** — owns ontology lifecycle, evidence governance, version promotion, change logging, conflict handling, and synthesis eligibility.

The locked Extraction, Evidence and Verification Protocol operationalizes those owners for paper extraction but does not redefine them. The locked QA record owns readiness/tests, not scientific definitions. The Database Implementation and GitHub Serialization Specification defines conversion to machine-readable artifacts but explicitly does not redefine scientific meaning.

**Precedence rule:** where historical or implementation material differs from the locked v0.7 owner documents, the locked v0.7 owner document for that concern prevails.

## 3. Historical scientific inputs

### Original pilot / Pass-A lineage

The original pilot and the preserved `v0.4-pilot-passA` materials remain scientific provenance and design-history inputs. They are not current operational schema authority.

Their role in Master Plan v1.0 is to demonstrate the origin of the scientific objective, preserve tested historical meaning, and support backward-compatibility reasoning. They must not be used to restore superseded field names, values, or structures over v0.7.

### Pass-B / v0.6 lineage

`v0.6-pilot-passB` is the immediate historical predecessor of v0.7. Its accepted adversarial findings are part of the provenance chain, but its definitions do not override v0.7.

### 31-field Ecosystem + four-framework crosswalk

`07_Atlas_Pre-Freeze_31-Field_and_Framework_Crosswalk — v0.6 Gap Adjudication` is a historical reconciliation input. The operational Drive state records that the 31/31 Ecosystem and 4/4 framework crosswalk was completed before v0.7 promotion.

Therefore the crosswalk is retained as evidence that Atlas implementation concepts were checked against the ontology. It is not a sixth ontology owner and must not become a second field dictionary.

## 4. Current Atlas implementation inputs

Production GitHub `main` is the current Atlas implementation surface and is read-only evidence for Task 1.1.

### Canonical bibliographic layer

`data/papers-master.json` and `data/papers-master.schema.json` currently define the production 853-record bibliographic dataset. The schema includes stable paper IDs, title/citation/DOI/publisher URL, venue/type, year, accessibility, countries, provenance, update date, optional structured bibliographic fields, abstract, and graphical-abstract metadata.

This is an implementation-level bibliographic authority for the current Atlas. It is **not** a replacement for the v0.7 scientific paper model.

**Reconciled rule:** retain one stable Atlas `paper_id` identity and link future scientific entities to it. Do not force all scientific fields into the existing bibliographic JSON object merely because it is currently canonical for production bibliography.

### PINN Ecosystem

`data/pinn-ecosystem/reference-pinn-ecosystem-source.md` preserves the reviewed source taxonomy. `data/pinn-ecosystem/pinn-ecosystem.json` is generated for the public page and includes nine ordered design layers, 35 normalized method groups, relationships, and the seven-stage/31-field Design Studio configuration.

**Reconciled rule:** the Ecosystem is an Atlas implementation/taxonomy/synthesis surface. Its terms and 31-field configuration map to v0.7 scientific owners where applicable, but do not independently define paper-level field semantics. Cross-context repetitions and browser organization must not be mistaken for duplicated scientific facts.

### Four Atlas frameworks

The production framework registry contains:

1. PINN Design Stack & Feedback Loops;
2. PINN Co-Design Framework;
3. PINN Design–Performance Dependency Matrix;
4. PINN Failure-Mode Diagnostics.

These are evidence-backed Atlas synthesis structures. The Design–Performance framework currently represents 98 qualitative dependencies (14 design decisions × 7 performance dimensions).

**Reconciled rule:** framework nodes, matrix cells, diagnostic pathways, and framework edges remain synthesis-layer structures unless direct paper-source ownership exists for the corresponding paper-level fact or relationship. Framework evidence links support synthesis; they do not automatically convert framework topology into canonical paper-level ontology edges.

### Dataset Manager

The production Dataset Manager implements the present single-source bibliographic maintenance pattern: edit one paper record, validate it, submit a controlled request, then regenerate dependent Atlas views. It edits bibliographic metadata and related approved content rather than the locked v0.7 scientific ontology.

**Reconciled rule:** preserve the Dataset Manager's "correct once, rebuild everywhere" principle as an architectural requirement. Do not extend its current editor into scientific ontology/evidence editing until the future ingestion/review workflow, permissions, provenance, and human-verification controls are explicitly designed and tested.

## 5. Master Architecture & Implementation Memory

The Google Drive Master Architecture & Implementation Memory is a planning-memory and completeness contract above the locked ontology.

It may preserve project objectives, architecture ideas, future database requirements, page/tool requirements, integration boundaries, and decisions. It may **not** redefine v0.7 scientific fields, controlled values, taxonomy status, relationships, or governance rules.

**Reconciled rule:** Master Plan v1.0 may operationalize and connect the memory to architecture requirements while keeping all v0.7 scientific ownership unchanged.

## 6. Computational Resources boundary

`data/computational-resources-stage1`, `data/computational-resources-stage2`, and `data/computational-resources-stage3` form an independently governed Atlas workstream.

Their evolving scientific records and schemas are **not authoritative inputs to Task 1.1** and were not used to define or validate the locked ontology.

Computational Resources is nevertheless a first-class future Atlas subsystem and a bounded external architectural dependency. Master Plan v1.0 must preserve future integration requirements for:

- stable Atlas paper linkage;
- independent computational-resource identity;
- evidence/provenance interoperability;
- reproducibility interoperability;
- cross-linking;
- eventual database integration;
- eventual Atlas page integration.

Read-only inspection is permitted only when explicitly needed to understand the integration boundary. No branch modification, merge, schema absorption, or redesign is authorized. Detailed schema reconciliation is deferred to a future explicit integration checkpoint after that workstream reaches an appropriate stable state.

## 7. Reconciliation matrix

| Source | Authority role | Owns / contributes | Must not override | Master Plan v1.0 treatment |
|---|---|---|---|---|
| Drive v0.7 Canonical Schema | Scientific owner | entities, fields, cardinality, structural boundaries | other four owners | preserve exactly |
| Drive v0.7 Controlled Vocabularies | Scientific owner | enumerated states/labels | schema/taxonomy/relations | preserve exactly |
| Drive v0.7 Taxonomy Registry | Scientific owner | concepts, aliases, lifecycle status | field structure/edge types | preserve exactly |
| Drive v0.7 Relationship Registry | Scientific owner | typed relationships, scope/status | entity fields/taxonomy inventory | preserve exactly |
| Drive v0.7 Governance | Scientific owner | lifecycle, promotion, conflict, synthesis eligibility | field/value inventories | preserve exactly |
| Extraction/Evidence Protocol | Operational scientific protocol | extraction, provenance, verification behavior | ontology owner meanings | preserve as workflow contract |
| v0.7 QA | Validation owner | tests/readiness/regression expectations | scientific definitions | preserve as acceptance contract |
| Serialization Spec | Implementation contract | Drive→machine-readable transformation | scientific meaning | use in later technical design |
| Original pilot / v0.4 | Historical scientific provenance | original objective, tested lineage | v0.7 operational definitions | preserve/history only |
| v0.6 / Pass-B | Immediate historical baseline | adversarial findings and migration provenance | v0.7 operational definitions | preserve/history only |
| 31-field/framework crosswalk | Historical reconciliation evidence | coverage/gap adjudication | v0.7 owners | preserve as completed input |
| GitHub `papers-master` | Current production bibliographic implementation | stable paper identity and bibliographic fields | v0.7 scientific model | integrate by stable ID, do not overload |
| PINN Ecosystem | Atlas implementation/taxonomy/synthesis | 9 layers, 35 groups, 31-field builder configuration, relationships | v0.7 scientific ownership | map, do not duplicate authority |
| Four frameworks | Atlas synthesis | design/synthesis/diagnostic structures and evidence-backed framework statements | paper-level facts/relations | keep synthesis boundary |
| Dataset Manager | Current controlled editor | bibliographic maintenance and dependent rebuild pattern | scientific extraction/ontology governance | retain workflow principle, defer expansion |
| Master Memory | Planning/completeness authority | objectives, future architecture, integration requirements, decisions | locked v0.7 | feed Master Plan without ontology change |
| Computational Resources workstream | External Atlas subsystem | future resource/reproducibility integration boundary | Task 1.1 scientific ontology | register interface; defer detailed reconciliation |

## 8. Overlap and conflict adjudication

### 8.1 Scientific ontology vs Ecosystem 31 fields

**Finding:** overlap, not conflict.

The Ecosystem organizes design/configuration concepts for Atlas browsing and the Design Studio. v0.7 owns paper-level semantic structure. The historical 31/31 crosswalk demonstrates that the Ecosystem was considered during ontology pre-freeze work.

**Decision:** no new ontology fields are created in Task 1.1 merely because an Ecosystem item or builder field exists. Future implementation must map each Ecosystem capability to the appropriate v0.7 field/taxonomy/relationship/synthesis owner.

### 8.2 Scientific ontology vs four frameworks

**Finding:** overlap, not conflict.

Frameworks synthesize relationships across design, performance, failure, and redesign. Paper-level evidence may support a framework statement, but the framework graph is not itself a paper-source ontology.

**Decision:** preserve paper-evidence versus Atlas-synthesis separation. No framework-only edge is promoted into a canonical paper-level relationship without governed evidence ownership.

### 8.3 Drive paper model vs GitHub `papers-master`

**Finding:** different scope, not conflict.

The production JSON is presently bibliographic; the v0.7 paper scientific model is substantially richer.

**Decision:** stable paper identity is the integration key. Future relational design should separate bibliographic core, scientific paper records, evidence, taxonomies/relationships, and synthesis rather than inflate the current bibliographic JSON into an ungoverned universal record.

### 8.4 Dataset Manager vs future scientific ingestion tool

**Finding:** complementary roles.

The existing Dataset Manager proves the single-authoritative-value → validated change → deterministic rebuild pattern. The future scientific ingestion/review tool requires substantially stronger evidence, ontology-review, ambiguity/conflict, and human-verification controls.

**Decision:** preserve the workflow principle but keep the current Dataset Manager's authority bounded until later roadmap tasks explicitly redesign the editing architecture.

### 8.5 Master Memory vs locked ontology

**Finding:** intentional hierarchy.

The Memory is broader than v0.7 because it records future architecture and product requirements.

**Decision:** Memory requirements may create implementation obligations, pages, tools, interfaces, analytics, or future-governance work; they may not silently become v0.7 ontology fields.

### 8.6 Computational Resources vs Master Architecture

**Finding:** bounded future dependency, not current scientific-authority conflict.

**Decision:** register the integration interface now; defer internal schema reconciliation and keep its branches independently governed.

## 9. Non-negotiable no-merge boundaries established by Task 1.1

The following conceptual merges are prohibited unless a later governed change explicitly authorizes them:

- author claim ≠ Atlas extraction ≠ Atlas synthesis;
- claimed solution ≠ demonstrated solution;
- demonstrated application ≠ related application ≠ potential application;
- physical problem ≠ computational task ≠ PINN methodological challenge;
- limitation ≠ open problem ≠ future work ≠ Atlas research gap;
- raw/verbatim evidence ≠ normalized scientific record;
- taxonomy term ≠ database field;
- framework relationship ≠ paper-level ontology relationship;
- bibliographic paper record ≠ complete scientific paper profile;
- implementation convenience ≠ scientific justification;
- historical source ≠ current operational authority.

## 10. What enters Master Plan v1.0 from Task 1.1

Master Plan v1.0 shall carry forward:

1. the v0.7 scientific ownership hierarchy unchanged;
2. the complete original scientific objective and historical provenance without restoring superseded structures;
3. explicit mapping requirements for the 31-field Ecosystem and four frameworks;
4. stable Atlas paper identity as the integration key between bibliography and future scientific records;
5. the Dataset Manager single-source/update-propagation principle;
6. the paper-evidence versus Atlas-synthesis boundary;
7. Master Memory architecture and product requirements as implementation obligations, not silent ontology amendments;
8. the Computational Resources bounded external-subsystem integration requirement;
9. preservation of verified bibliographic corrections and provenance;
10. deferred detailed page/data dependency auditing under Roadmap Task 9 rather than duplicating it in Task 1.1.

## 11. Deferred items — not Task 1.1 failures

The following are intentionally deferred to their roadmap owners:

- complete objective formalization → Task 1.2;
- formal non-negotiable rule specification → Task 1.3;
- dynamic-extension rules → Task 1.4;
- scale-out gates → Task 1.5;
- formal requirement/coverage matrix → Task 1.6;
- Master Plan v1.0 freeze → Task 1.7;
- detailed permanent architecture/ERD → Task 2;
- full framework specification → Task 7;
- every-page dependency audit → Task 9;
- metadata history/correction propagation design → Task 10;
- detailed Computational Resources schema integration → future explicit integration checkpoint when the subsystem is stable.

## 12. Task 1.1 verdict

**PASS**

No genuine scientific inconsistency requiring an ontology change was found in the Task 1.1 reconciliation.

No locked v0.7 scientific document was modified.

No production Atlas `main` file was modified.

No Computational Resources branch was modified.

The source hierarchy, ownership boundaries, overlaps, historical roles, implementation roles, synthesis boundaries, and future integration boundaries are now explicit enough to proceed.

**Exact next action:** Roadmap **Task 1.2 — Define the complete project objective from source papers through evidence, structured knowledge, ontology, synthesis, frameworks, pages, and tools**, using this reconciliation as the authority map.