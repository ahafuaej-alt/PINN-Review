# Task 1.2 — Complete Project Objective

Status: **PASS**

Date: 2026-09-07

Roadmap parent: `docs/master-architecture/CONTROLLED-ROADMAP.md` → Task 1.2

Controlling predecessor: `TASK-1.1-AUTHORITATIVE-RECONCILIATION.md`

Scope: planning/specification only. This record defines the complete end-to-end project objective. It does not modify locked `v0.7-pilot-atlas-prefreeze`, authorize production database construction, migrate Atlas data, alter production `main`, or modify the Computational Resources workstream.

## 1. Mission

Transform the PINN Review Atlas from a principally bibliographic and page-oriented research companion into a governed, evidence-traceable scientific knowledge system for the complete PINN corpus, while preserving the existing Atlas, the locked scientific ontology, historical evidence, verified bibliography, and all independently governed subsystems.

The completed system must support a continuous chain from primary scientific sources to verified paper-level knowledge, controlled ontology/taxonomy representation, cross-paper scientific intelligence, evidence-backed Atlas synthesis, user-facing research tools, and auditable lifecycle maintenance.

The project is not merely a database migration. It is the controlled integration of scientific evidence, structured knowledge, ontology, synthesis, implementation architecture, Atlas pages, review workflows, and long-term governance into one coherent system.

## 2. Core scientific objective

The Atlas must enable users to answer, with traceable evidence and explicit scope, questions including:

- What physical systems, scientific problems, and computational tasks have PINNs actually been used for?
- Which applications were demonstrated, which were only related, and which were merely proposed?
- Which PINN types, architectures, formulations, enforcement strategies, losses, sampling methods, differentiation methods, activations, optimizers, training protocols, uncertainty methods, fidelity roles, domain-decomposition approaches, transformations, software frameworks, and other methodological choices were used?
- Which methodological choices are associated with particular applications, problem classes, tasks, challenges, outcomes, validation strategies, evaluation results, reproducibility levels, limitations, and failure modes?
- What did each paper claim, and what did it actually demonstrate?
- What outcomes were positive, partial, negative, inconclusive, or limited in scope?
- How were results validated, against what references or baselines, and under what test conditions?
- What evidence supports every important paper-level or Atlas-level statement?
- Which limitations, open problems, and future-work directions recur independently across the literature?
- Which research gaps and opportunities can be supported by verified, traceable evidence rather than frequency alone?
- Where does the literature provide contradictory or scope-dependent evidence?
- How strong, direct, independent, current, and context-specific is the evidence behind a synthesis statement?
- How do PINN methods, applications, problem classes, validation practices, reproducibility practices, and research gaps evolve over time and across scientific domains?

The governing scientific principle is:

> Store what the paper says, where it says it, how strongly it says it, and separately what the Atlas concludes from it.

## 3. End-to-end objective chain

The complete project objective is represented as the following controlled chain:

**Primary sources**
→ **bibliographic identity**
→ **evidence/provenance capture**
→ **verified normalized paper-level scientific records**
→ **dynamic ontology/taxonomy/relationships**
→ **cross-paper scientific intelligence**
→ **Atlas synthesis frameworks and research-gap/opportunity synthesis**
→ **user-facing Atlas pages, profiles, explorers, builders, and governance tools**
→ **continuous correction, extension, QA, versioning, and reproducible lifecycle management**.

Every transition in this chain must remain auditable and reversible where appropriate.

## 4. Primary-source objective

The system must preserve a governed connection to the scientific source material from which knowledge is extracted.

Primary-source responsibilities include:

- stable association between Atlas papers and source documents;
- use of full papers and supplementary materials for scientific extraction where available;
- bibliographic sources for identity/metadata verification rather than unsupported scientific inference;
- preservation of exact evidence locators and source roles;
- support for external validation sources only where governance explicitly permits them;
- no rewriting of historical raw evidence merely because normalization or ontology classification changes later.

Google Drive remains the scientific/source authority under the current architecture until a later governed decision changes that responsibility.

## 5. Bibliographic objective

The project must preserve and strengthen the verified bibliographic core already present in the Atlas.

The bibliographic layer must provide a stable Atlas `paper_id` / reference identity and authoritative verified metadata such as title, authors, year, venue, DOI/URL, publication type, access status, country/institution metadata where governed, and correction history.

One verified bibliographic value should feed every dependent Atlas view. Publication year, DOI, title, venue, and similar values must not be maintained independently across unrelated pages once the future architecture is implemented.

The bibliographic record is the identity/core metadata layer; it is not the complete scientific paper profile.

## 6. Evidence and provenance objective

Every material scientific assertion stored by the Atlas must be traceable to evidence or explicitly identified as Atlas synthesis/inference.

The evidence system must support, where applicable:

- stable evidence identifiers;
- verbatim/source-grounded evidence;
- normalized statements;
- section/subsection/page/paragraph/figure/table/appendix/scope locators;
- evidence type and evidence-source role;
- statement strength;
- support/contradiction status;
- verification status;
- ontology/extraction version;
- review notes and history;
- multiple evidence objects supporting or contradicting the same normalized concept;
- preservation of unresolved ambiguity when evidence does not justify forced resolution.

Raw/verbatim evidence, normalized extraction, Atlas inference, and Atlas synthesis must remain distinguishable throughout the system and user interface.

## 7. Paper-level scientific knowledge objective

Each paper must eventually support a complete, evidence-linked scientific profile derived from the governed architecture rather than from manually independent page definitions.

The first-class profile scope includes:

- Bibliographic Identity;
- Study / Extraction Identity;
- Application;
- Problem Definition;
- Computational Task;
- PINN Problem / Challenge;
- PINN Type / Family;
- Methodological Features;
- Contribution;
- Claim vs Demonstration;
- Outcome;
- Validation;
- Evaluation Results;
- Reproducibility;
- Limitations;
- Open Problems;
- Future Work;
- Diagnostic Pathways;
- Evidence / Provenance.

The profile must support conditional sections and repeatable records where the science requires multiplicity rather than flattening materially distinct components into one value.

## 8. Dynamic ontology and knowledge-organization objective

The system must preserve the locked v0.7 scientific ontology as the current authority while allowing controlled future growth.

The permanent architecture must combine:

- stable structural entities and fields;
- controlled vocabularies where enumerated states are scientifically justified;
- dynamic taxonomy terms and aliases;
- provisional and paper-specific concepts;
- typed relationships with explicit status and scope;
- ontology/version changelogs;
- migration rules and backward compatibility;
- evidence-supported promotion or specialization of recurring concepts.

A new scientific concept must not require rewriting old evidence. New terms should normally enter through taxonomy/relationship mechanisms first. Structural specialization into new dedicated fields requires a governed future ontology version rather than a silent change to v0.7.

## 9. Cross-paper intelligence objective

The Atlas must provide scientific intelligence at both single-dimension and cross-dimensional levels.

Each principal scientific dimension should be independently explorable and should also be crossable with other scientifically meaningful dimensions.

The current required intelligence families are:

1. Application Intelligence
2. Problem Intelligence
3. Computational-Task Intelligence
4. PINN-Type Intelligence
5. Methodology Intelligence
6. Contribution Intelligence
7. Outcome Intelligence
8. Validation Intelligence
9. Evaluation Intelligence
10. Reproducibility Intelligence
11. Limitations Intelligence
12. Open-Problem Intelligence
13. Future-Work Intelligence
14. Research-Gap Intelligence
15. Research-Opportunity Intelligence
16. Failure-Mode / Diagnostic Intelligence
17. Evidence Intelligence
18. Relationship Intelligence
19. Temporal Intelligence
20. Domain / Geographic / Collaboration Intelligence

The architecture must support governed cross-dimensional queries such as Application × Method, Problem × Outcome, Challenge × Method, PINN Type × Failure, Method × Reproducibility, Validation × Outcome, and other scientifically justified combinations.

It must also permit explicit prohibition or warning for invalid or misleading comparisons.

## 10. Atlas synthesis objective

Paper-level evidence must support, but remain distinct from, Atlas-level synthesis.

The system must support the current four Atlas scientific frameworks:

- PINN Design Stack & Feedback Loops;
- PINN Co-Design Framework;
- PINN Design–Performance Dependency Matrix;
- PINN Failure-Mode Diagnostics Framework.

The complete 14 × 7 / 98-cell Design–Performance matrix must remain a first-class synthesis structure with the future ability to expose supporting-paper IDs, evidence links, confidence, contradictory evidence, application/problem dependence, synthesis version, and explanatory notes.

Atlas research-gap and research-opportunity synthesis must similarly preserve evidence strength, independent support, contradictions, and scope rather than equating frequency with certainty.

Framework structures are synthesis products; they must not silently redefine paper-level ontology relationships.

## 11. User-facing Atlas objective

The completed architecture must support the Atlas as a coherent research environment rather than a set of disconnected pages.

Required or planned user-facing capabilities include:

- References;
- complete Paper Profiles;
- Realm/publication analytics;
- Applications and related domain explorers;
- Metrics Explorer;
- PINN Type / Abbreviation Explorer;
- methodology explorer;
- reproducibility explorer;
- gap/opportunity explorer;
- diagnostic explorer;
- four framework pages;
- Design Studio / PINN Builder functions;
- Dataset Manager;
- Data Governance views;
- Architecture & Data Map;
- future Framework Builder / exploratory synthesis tools if later approved;
- Computational Resources page integration as a bounded subsystem interface;
- future Atlas pages that consume the same governed architecture.

User-facing views should derive from shared authoritative records and synthesis definitions wherever technically practical.

## 12. Existing-Atlas integration objective

The project must integrate with the complete existing Atlas rather than building a parallel scientific database that ignores current pages and data flows.

Every existing Atlas page/tool must later be audited to determine:

- what data it displays;
- which current files or computations supply that data;
- whether it writes data or is read-only;
- which paper IDs or other keys connect it;
- which values are duplicated elsewhere;
- what should become single-source authoritative data;
- whether the page is an authoritative editor, database consumer, synthesis consumer, derived analytical view, or independent linked resource;
- what migration/regression requirements apply.

That detailed audit belongs to Roadmap Task 9; Task 1.2 establishes it as a mandatory project objective.

## 13. Scientific ingestion and review objective

The system must eventually support controlled semi-automated paper ingestion while keeping human scientific verification mandatory.

Target workflow:

new paper
→ stable paper identity
→ bibliographic verification
→ source association
→ AI-assisted structured extraction proposal
→ exact evidence/provenance capture
→ canonical taxonomy matching
→ alias/provisional-term/relationship proposals
→ ambiguity/conflict/schema-issue detection
→ human scientific review
→ accept/edit/reject/needs-evidence/needs-ontology-review decisions
→ verification QA
→ publish accepted structured records
→ recompute affected synthesis/derived views
→ update affected Atlas pages
→ record data/ontology version and audit history.

Unreviewed AI output must never become verified scientific data automatically.

## 14. Correction and update objective

The project must support verified correction without destroying historical state.

A correction should:

1. preserve the previous authoritative value and its provenance;
2. record the new verified value, reason, verification source, reviewer, timestamp, and state;
3. identify dependent views and analyses;
4. regenerate or invalidate affected outputs deterministically;
5. retain a complete audit trail and rollback path where practical.

This applies to bibliographic metadata, scientific records, taxonomy classification, relationships, synthesis, and future governed migrations according to their respective authority rules.

## 15. Architecture/documentation objective

The permanent architecture must be visible, version-controlled, and synchronized with implementation.

Three linked representations are required:

1. **Scientific/conceptual Master Architecture** — the complete multi-level scientific and product model.
2. **Technical ERD / Mermaid / DBML architecture** — entities/tables, keys, cardinalities, evidence links, taxonomy/relationship structures, history/versioning, synthesis structures, and derived views.
3. **Requirement/Coverage Matrix** — every requirement mapped to its scientific owner, data representation, evidence need, query need, UI consumer, write/read-only behavior, QA rule, implementation state, and dependencies.

The Architecture & Data Map should ultimately expose these representations interactively within the Atlas.

## 16. Storage and implementation objective

The project must maintain a deliberate separation of responsibilities:

### Google Drive
Scientific/source authority: PDFs, supplements, locked ontology/governance, scientific review/extraction records, QA/history, and related source-grounded artifacts.

### GitHub
Version-controlled implementation authority: Atlas source, schemas, migrations, architecture definitions, tests, validation, APIs/client code, documentation, CI/deployment, and appropriate static exports.

### Live relational database
Future structured operational store for accepted scientific/bibliographic relationships and synthesis data. PostgreSQL remains the preferred relational model, but provider selection is deferred to Roadmap Task 11.

The full PDF corpus should not be stored inside the relational database, and GitHub should not be used as the long-term live relational database merely because it currently hosts JSON datasets.

## 17. Computational Resources integration objective

Computational Resources is an independently governed Atlas subsystem and is not absorbed into the Task 1 scientific ontology workstream.

The Master Architecture must nevertheless preserve its future interoperability requirements:

- stable Atlas `paper_id` linkage;
- independent computational-resource identity;
- evidence/provenance interoperability;
- reproducibility interoperability without premature schema duplication;
- bidirectional cross-linking between paper/profile/resource views where later approved;
- database/API/page integration after an explicit future integration checkpoint;
- preservation of its independent governance while its internal model remains under active development.

This requirement ensures the permanent Atlas architecture does not make future Computational Resources integration impossible while avoiding premature freezing of that subsystem.

## 18. Lifecycle and scale objective

The architecture must support both the current 853-paper corpus and future corpus growth.

The intended lifecycle is:

source acquisition
→ extraction proposal
→ human verification
→ accepted structured record
→ database/synthesis publication
→ Atlas consumption
→ correction/extension/versioning
→ continuous QA.

Before full scale-out, the system must pass the later operational acceptance gates defined under Task 1.5 and validated first with the verified heterogeneous 36-paper corpus.

Large-scale extraction must remain batch-controlled, checkpointed, auditable, backward-compatible, and stoppable when structural gaps appear.

## 19. Research-quality objective

The final system must be scientifically defensible, not merely technically functional.

A successful Atlas must:

- preserve uncertainty and contradictions instead of fabricating certainty;
- distinguish absence of reporting from negative evidence;
- distinguish independent evidence from repeated citation chains where possible;
- preserve problem/application/context dependence;
- avoid treating qualitative Atlas synthesis as universal quantitative effect estimation;
- allow paper-level provenance inspection from aggregate claims;
- allow future reclassification without rewriting raw evidence;
- make scientific review and ontology decisions auditable;
- support reproducibility of the Atlas's own synthesis process.

## 20. Project outputs implied by the objective

The complete project objective requires eventual delivery of:

- formal Master Atlas Scientific Database & Implementation Plan;
- permanent scientific/conceptual architecture;
- technical ERD / DBML / Mermaid architecture;
- formal requirement/coverage matrix;
- complete Paper Profile specification and page;
- controlled PINN type/family taxonomy;
- extensible methodology model;
- complete cross-paper intelligence system;
- four governed framework specifications and 98-cell matrix linkage;
- optional governed Framework Builder decision/design;
- complete Atlas page/data dependency audit;
- metadata-history and correction-propagation model;
- selected relational database platform and schema;
- non-production database prototype;
- automated extraction/review workflow;
- Architecture/Data Map page;
- synthesis/explorer prototypes;
- production migration plan;
- 36-paper controlled production pilot;
- full 853-paper controlled extraction;
- ongoing governed Atlas lifecycle.

## 21. Non-goals at this stage

Task 1.2 does **not** authorize:

- changing locked v0.7;
- adding speculative ontology fields;
- selecting a database provider;
- implementing the production database;
- modifying production Atlas `main`;
- rebuilding existing Atlas pages;
- starting full 853-paper extraction;
- treating AI output as verified scientific data;
- merging framework synthesis into paper-level facts;
- absorbing the Computational Resources Stage 1/2/3 workstream;
- resolving Task 1.3–1.7 questions prematurely.

## 22. Completeness test for the project objective

The project objective is considered complete only if it covers the full path from scientific source to maintained Atlas output and explicitly includes:

- source and bibliography;
- evidence/provenance;
- paper-level scientific knowledge;
- ontology/taxonomy/relationships;
- cross-paper intelligence;
- Atlas synthesis/frameworks;
- user-facing pages/tools;
- ingestion/review;
- corrections/history;
- architecture/documentation;
- storage/implementation responsibilities;
- existing Atlas integration;
- Computational Resources integration boundary;
- scale-out and future growth;
- scientific QA/governance.

Task 1.2 satisfies this completeness test.

## 23. Task 1.2 verdict

**PASS**

The complete project objective is now formally defined from source papers through evidence, structured paper knowledge, ontology, synthesis, frameworks, pages, tools, update workflows, governance, and lifecycle management.

No locked scientific ontology document was modified.

No production Atlas `main` file was modified.

No Computational Resources branch was modified.

No production database or migration was created.

**Exact next action:** Roadmap **Task 1.3 — Formalize the non-negotiable scientific rules**, using `TASK-1.1-AUTHORITATIVE-RECONCILIATION.md` and this Task 1.2 objective as controlling inputs.