# Task 3.1 — First-Class Paper Profile Sections

Status: **PASS — COMPLETE**

Date: 2026-09-07

Roadmap parent: `docs/master-architecture/CONTROLLED-ROADMAP.md` → Task 3.1.

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

Implementation contract: frozen Master Plan v1.0.

Architecture inputs: completed Task 2.1–2.6, especially the L2/L3/L4 responsibility boundaries and the shared architecture registry.

This task defines the **section architecture** of the complete Paper Profile only. It does not perform Task 3.2 field-by-field expansion, Task 3.3 conditional display rules, Task 3.4 evidence-drawer interaction design, Task 3.5 machine-readable profile specification, Task 3.6 UI mockup, database implementation, production page implementation, or ontology change.

## 1. Verified starting state

Before Task 3.1 writes:

- branch `docs/master-atlas-roadmap` was verified at Task-2 closure head `f830b8511fd9822f60486d2fd7824a952feff6c3`;
- `TASK-2-STATUS.md` recorded Task 2 = COMPLETE / PASS and Task 3 not started;
- `CONTROLLED-ROADMAP.md` assigned the 19 requested first-class sections to Task 3.1;
- locked v0.7 Canonical Schema / Field Dictionary remained unchanged;
- Master Memory Section 6 preserved the original A–S Paper Profile intent;
- Master Memory Section 39 recorded Task 2 final completion and the Task-3 stop boundary.

## 2. What “first-class profile section” means

A first-class Paper Profile section is a stable, independently addressable semantic region of one paper’s profile. It has a defined scientific/architectural purpose and authoritative upstream source, and it may contain singular, repeatable, conditional, linked, or cross-cutting records without flattening their scientific distinctions.

First-class status does **not** mean:

- a new v0.7 ontology entity or field;
- a new database table;
- a new scientific owner;
- that the section must contain positive content for every paper;
- that absence of content means negative evidence;
- that display order establishes causality;
- that L6 analytics or L7 Atlas synthesis become paper-level facts.

The Paper Profile is an L8 read/delivery projection composed from governed L2 bibliographic identity, L3 evidence/provenance, L4 verified paper scientific knowledge, and L5 semantic identities/relations. It is **not a new source of scientific authority**.

## 3. Stable Task-3.1 section identities

Task 3.1 defines the following 19 stable profile-section IDs. These are architecture/documentation identities. Task 3.5 will later define their machine-readable specification and validation binding.

| ID | First-class section | Primary architecture home | Core purpose |
|---|---|---|---|
| `PP-01` | Bibliographic Identity | L2 | Stable paper identity and verified bibliographic/corpus metadata projection. |
| `PP-02` | Study / Extraction Identity | L4-P1 + L4-P2 | Study-design/applicability context plus extraction, review, verification and ontology-version state. |
| `PP-03` | Application | L4-P3 | Application domain/system/context with demonstrated, related and potential roles kept distinct. |
| `PP-04` | Problem | L4-P4 | Physical problem, governing physics/equations, constraints and problem characteristics. |
| `PP-05` | Computational Task | L4-P5 | Scientific/computational objective and the computational task actually undertaken. |
| `PP-06` | PINN Problem / Challenge | L4-P7 | PINN-specific difficulty, methodological challenge or problem the work addresses. |
| `PP-07` | PINN Type / Family | L4-P8 + governed L5 link | Paper-level assignment to governed PINN type/family identities without redefining the taxonomy. |
| `PP-08` | Methodology | L4-P6 + L4-P9 | Complete methodological design plus explicit data/observation context and implementation-relevant scientific choices. |
| `PP-09` | Contribution | L4-P10 | What the paper contributes or introduces, including the nature of its scientific/methodological innovation. |
| `PP-10` | Claim vs Demonstration | L4-P11 | Explicit separation of author claims/generality from what is actually demonstrated and supported. |
| `PP-11` | Outcome | L4-P12 | What happened scientifically/computationally and the degree of resolution, including negative/inconclusive outcomes. |
| `PP-12` | Validation | L4-P13 | How the study validates its model/results and what validation dimensions were tested. |
| `PP-13` | Evaluation | L4-P14 | Repeatable metrics/results/test cases/comparisons with materially distinct conditions preserved. |
| `PP-14` | Reproducibility | L4-P15 | Author-reported reproducibility information plus separately labelled operational reproduction state where available. |
| `PP-15` | Limitations | L4-P16 | Separate evidence-linked limitations with scope/origin retained. |
| `PP-16` | Open Problems | L4-P17 | Unresolved scientific/methodological problems, preserving author-stated versus Atlas-inferred origin. |
| `PP-17` | Future Work | L4-P18 | Future directions explicitly distinguished from current limitations/open problems and Atlas research gaps. |
| `PP-18` | Diagnostic Pathways | L4-P19 | Paper-level failure/problem → symptom → mechanism → diagnostic check → intervention/improvement/trade-off pathways. |
| `PP-19` | Evidence / Provenance | L3 + L4-P20 | Profile-wide evidence index/graph and drill-down basis linking material records to source evidence and semantic identities. |

## 4. Section definitions and mandatory boundaries

### PP-01 — Bibliographic Identity

Purpose: identify the paper unambiguously and expose the verified bibliographic baseline used throughout the Atlas.

Authority boundary: this section is a projection of **L2 Bibliographic Identity & Corpus Registry**. The current bibliographic record is not itself the complete Paper Profile. Scientific sections must join through stable `paper_id`; profile presentation must not create competing copies of authoritative bibliographic values.

The section must preserve metadata verification/history and unresolved bibliographic conflicts when applicable. Detailed field inventory belongs to Task 3.2.

### PP-02 — Study / Extraction Identity

Purpose: state what kind of study/extraction context applies and whether the scientific record is extracted, reviewed and verified under the relevant ontology/version state.

This section is the profile home for the Task 2.2 concepts **Study Design, Applicability & Review Scope** and **Scientific Record Lifecycle & Extraction State**.

Mandatory boundary: publication/document type is not automatically equivalent to scientific study design. Review/synthesis scope is conditional and must not be fabricated for ordinary research papers. Extraction/verification metadata describes Atlas process state and must not be confused with author scientific claims.

### PP-03 — Application

Purpose: describe where the work is applied and the physical/application system involved.

Mandatory boundaries:

- demonstrated application ≠ related application ≠ potential application;
- primary application ≠ all secondary associations;
- a taxonomy label does not replace the evidence-linked paper-level application record.

Multiplicity and application-role semantics must remain recoverable.

### PP-04 — Problem

Purpose: describe the physical/mathematical problem being studied, including governing physics, equations/constraints and problem characteristics.

Mandatory boundary: **physical problem ≠ computational task ≠ PINN methodological challenge**. Problem context may include conditions and scientific assumptions/applicability, but it must not absorb the task or challenge merely for display simplicity.

### PP-05 — Computational Task

Purpose: state what computational/scientific operation the paper actually performs or attempts, together with its relevant scientific objective.

Examples may later include forward solution, inverse estimation, system identification, PDE discovery, data assimilation, surrogate/operator learning, UQ, optimization/control and reconstruction, but Task 3.1 does not freeze a new task vocabulary.

Mandatory boundary: the task is not inferred solely from application or PDE family, and it remains distinct from the PINN challenge the method is intended to overcome.

### PP-06 — PINN Problem / Challenge

Purpose: expose the PINN-specific difficulty or methodological challenge addressed by the work.

The section may contain multiple governed challenge/problem assignments when justified by evidence.

Mandatory boundary: a PINN challenge is not merely a physical problem characteristic. New challenge concepts enter through the existing L5/X1–X6 governance rather than uncontrolled page tags.

### PP-07 — PINN Type / Family

Purpose: make paper-level PINN type/family assignment a visible first-class profile dimension.

The profile displays governed type/family identities and paper terminology/aliases where appropriate; it does not own the taxonomy. Task 4 remains responsible for formal PINN Type / Variant classification.

Task 3.1 therefore creates **no new `pinn_type_id` scientific field** and does not promote abbreviations into canonical types merely because they appear in the profile.

### PP-08 — Methodology

Purpose: provide the profile’s complete methodological design region while preserving internal scientific structure and multiplicity.

This section is the primary profile home for both **L4-P9 Methodological Features** and the Task-2.2 **L4-P6 Data & Observation Context** facet. Data/observation context must therefore remain explicitly visible within the profile and may be cross-referenced from Problem, Validation and Evaluation where scientifically relevant; it is not discarded simply because Task 3.1 has no separate twentieth “Data” section.

Methodological subfacets include, at conceptual level, architecture/network configuration, model variables, physics formulation/integration and enforcement, loss/weighting, sampling, differentiation, activation, optimization/training, transformations/scaling, geometry, domain decomposition, parallel execution, uncertainty, fidelity roles, software, derived outputs and other governed methodological terms. Exact fields and nesting are Task 3.2.

Mandatory boundary: methodology terms, structured method records and controlled taxonomy identities must not be flattened into an uncontrolled tag list.

### PP-09 — Contribution

Purpose: state what the paper contributes—scientific, methodological, algorithmic, architectural, theoretical, diagnostic, benchmark, software/data or other governed contribution classes.

Mandatory boundary: **contribution ≠ outcome**. A novel method can be a contribution even when performance is mixed; an observed outcome does not automatically constitute the paper’s contribution.

### PP-10 — Claim vs Demonstration

Purpose: make one of the Atlas’s central epistemic distinctions visible rather than burying it in prose.

This section separates what the paper claims to solve/generalize from what its experiments, analysis or evidence actually demonstrate.

Mandatory boundaries:

- claimed solution ≠ demonstrated solution;
- author-stated generality ≠ demonstrated generality;
- Atlas inference/synthesis must remain separately labelled and cannot be presented as the author’s claim.

This section is cross-referential to Contribution, Outcome, Validation and Evaluation but retains its own first-class identity.

### PP-11 — Outcome

Purpose: report what the study achieved and the degree of resolution under the studied conditions.

Positive, partial, negative, failure and inconclusive outcomes must remain representable. Reported advantages/disadvantages/failure cases must not be deleted to create a positive-only profile.

Mandatory boundary: outcome ≠ contribution, and outcome scope must remain tied to what was actually tested/demonstrated.

### PP-12 — Validation

Purpose: describe **how and to what extent** the work validates the method or result.

It covers validation strategy/source and dimensions such as analytical, numerical, experimental, real-world, generalization, robustness, noise and scalability when applicable.

Mandatory boundary: **validation ≠ evaluation result**. Validation establishes the nature/scope of checking; specific metrics, values and test-case results belong to PP-13.

### PP-13 — Evaluation

Purpose: expose repeatable quantitative/qualitative evaluation results while preserving their test-case conditions, comparators and reference solutions.

Materially different experiments/configurations/test cases must not be collapsed into a single paper-level score. A profile may therefore contain many evaluation records.

Mandatory boundary: metric/result ≠ validation strategy, and cross-paper comparability must not be implied solely because two papers use labels that look similar.

### PP-14 — Reproducibility

Purpose: show the paper’s reported reproducibility information and, where later available, clearly separate operational reproduction/replication attempts.

The section must distinguish states such as reported, not reported and unavailable rather than treating absence as a negative finding.

Computational Resources may later be cross-linked through the governed bounded interface, but CR resource identity, repositories, datasets and reproducibility records remain independently governed. Paper-level reproducibility is not automatically CR reproducibility.

### PP-15 — Limitations

Purpose: preserve each limitation as a separate, scoped, evidence-linked record where material.

Mandatory boundary: **limitation ≠ open problem ≠ future work ≠ Atlas research gap**. Explicit author limitations and Atlas-inferred limitations must retain their origin distinction.

### PP-16 — Open Problems

Purpose: represent unresolved problems or research questions associated with the paper while retaining scope, persistence and epistemic origin.

An author-stated open problem may later contribute to cross-paper gap synthesis, but PP-16 itself does not create an L7 Atlas research gap.

### PP-17 — Future Work

Purpose: expose explicit or governed future-work directions as distinct paper-level records.

Future work must not be silently inferred from every limitation, nor treated as an Atlas recommendation unless separately synthesized and reviewed.

### PP-18 — Diagnostic Pathways

Purpose: expose evidence-owned paper-level diagnostic logic for failures/problems, symptoms, mechanisms, checks, interventions, targeted improvements, verification and trade-offs.

Mandatory boundary: **paper-level diagnostic pathway ≠ L7 Atlas Failure-Mode Diagnostics synthesis**. A paper pathway can support later L7 synthesis but cannot be replaced by the framework’s normalized topology.

### PP-19 — Evidence / Provenance

Purpose: provide the profile-wide source basis for material scientific content.

PP-19 is both a first-class section and a cross-cutting capability. The section provides a paper-wide evidence index/graph; individual records in PP-02–PP-18 must also retain direct evidence linkage as required.

Mandatory boundaries:

- raw/verbatim evidence ≠ normalized record;
- evidence locator must never be invented;
- evidence strength must not be inflated;
- verification status ≠ support status;
- contradictory/mismatched evidence remains visible;
- source evidence/history remains immutable even if later normalization/classification changes;
- evidence links to L5 semantic identities do not make the profile an ontology owner.

Detailed drill-down and interaction behavior is Task 3.4.

## 5. Cross-section no-merge rules

The profile architecture must preserve at least these boundaries everywhere, including summary cards, mobile views, exports and future APIs:

1. bibliographic identity ≠ complete scientific profile;
2. study design ≠ publication/document type;
3. demonstrated ≠ related ≠ potential application;
4. physical problem ≠ computational task ≠ PINN challenge;
5. PINN type assignment ≠ PINN taxonomy definition;
6. methodology ≠ contribution;
7. contribution ≠ outcome;
8. claim ≠ demonstration;
9. validation ≠ evaluation result;
10. paper-reported reproducibility ≠ operational reproduction attempt ≠ Computational Resources reproducibility;
11. limitation ≠ open problem ≠ future work ≠ Atlas research gap;
12. paper diagnostic pathway ≠ Atlas Failure-Mode Diagnostics synthesis;
13. raw evidence ≠ normalized paper record ≠ Atlas inference ≠ Atlas synthesis;
14. taxonomy term ≠ profile section/database field;
15. L6/L7 contextual intelligence ≠ paper-level fact.

If a future UI cannot preserve one of these distinctions, the UI fails scientific acceptance even if the underlying data is correct.

## 6. Profile composition and ownership rule

The complete Paper Profile is not one flat record. It is a governed composition anchored by stable `paper_id`:

`L2 bibliographic identity + L3 evidence/provenance + L4 verified paper scientific records + L5 semantic identities/relations → L8 Paper Profile`

L6 cross-paper intelligence and L7 Atlas synthesis may later be shown as explicitly labelled contextual panels/cross-links, but they are **not members of the 19 first-class paper-level sections** and must never be rendered as if they were direct facts reported by the paper.

The profile must therefore support both:

- section-level addressability; and
- record-level evidence/semantic drill-down.

Task 3.1 defines only the semantic section architecture. Task 3.2 will define exact field-by-field composition and repeatable nested structures.

## 7. Task 2.2 completeness crosswalk

Every permanent Task-2.2 L4 conceptual facet has a Paper Profile home:

| Task 2.2 facet | Task 3.1 profile home |
|---|---|
| L4-P1 Study Design, Applicability & Review Scope | PP-02 |
| L4-P2 Scientific Record Lifecycle & Extraction State | PP-02 |
| L4-P3 Application & Physical System | PP-03 |
| L4-P4 Problem Definition & Governing Physics | PP-04 |
| L4-P5 Scientific Objective & Computational Task | PP-05 |
| L4-P6 Data & Observation Context | PP-08, with governed cross-references to PP-04/PP-12/PP-13 |
| L4-P7 PINN Problem / Challenge Addressed | PP-06 |
| L4-P8 PINN Type / Family Assignment | PP-07 |
| L4-P9 Methodological Features | PP-08 |
| L4-P10 Contribution & Innovation | PP-09 |
| L4-P11 Claim, Demonstration & Generality | PP-10 |
| L4-P12 Outcome / Degree of Resolution | PP-11 |
| L4-P13 Validation | PP-12 |
| L4-P14 Evaluation Results & Test Cases | PP-13 |
| L4-P15 Reproducibility & Reproduction State | PP-14 |
| L4-P16 Limitations | PP-15 |
| L4-P17 Open Problems | PP-16 |
| L4-P18 Future Work | PP-17 |
| L4-P19 Paper Diagnostic Pathways | PP-18 |
| L4-P20 Evidence and Semantic Linkage Facets | PP-19 |

L2 bibliographic identity is separately surfaced through PP-01. L3 evidence/provenance is surfaced through PP-19 and cross-cutting direct record links.

## 8. Extensibility rule

The 19 first-class sections are the **Task-3.1 profile architecture baseline**, not permission to force every future scientific concept into one of them.

A new paper-specific/source-local concept can remain scoped/provisional under X1–X5. A genuinely recurring irreducible structural dimension that cannot be represented without information loss must follow X6 governance and a future scientific version if promotion is justified. Task 3.1 does not pre-approve a twentieth canonical section or a v0.8 change.

Likewise, future L8 presentation sections may be added for navigation/context (for example related Atlas intelligence, framework context or resource links) without becoming new paper-level scientific owners.

## 9. Completeness and acceptance checks

Task 3.1 acceptance result:

- requested first-class profile sections defined = **19/19**;
- stable Task-3.1 section identities = **PP-01–PP-19**;
- Task 2.2 permanent L4 facets mapped = **20/20**;
- L2 bibliographic identity mapped = **PASS**;
- L3 evidence/provenance mapped = **PASS**;
- L5 semantic-control linkage preserved = **PASS**;
- critical Task 1.3 no-merge boundaries preserved = **PASS**;
- Computational Resources boundary preserved = **PASS**;
- profile-section conceptual orphan count = **0**;
- new locked-v0.7 scientific fields/entities created = **0**;
- rejected/deferred scientific structures revived = **0**.

## 10. Change boundary

Task 3.1 changes only roadmap/specification documentation on `docs/master-atlas-roadmap` plus the synchronized Master Memory completion record.

It does not:

- modify locked v0.7;
- modify production `main`;
- modify Computational Resources Stage 1/2/3;
- create or migrate a production database;
- choose a database provider;
- create the Task 3.5 machine-readable Paper Profile specification;
- implement a Paper Profile page or route;
- perform Task 3.2 field-by-field design;
- define Task 3.3 conditional display logic;
- implement Task 3.4 evidence interaction behavior;
- perform Task 3.6 UI mockup;
- begin Task 4.

## 11. Task 3.1 verdict and stop boundary

**PASS — COMPLETE.**

The complete Paper Profile now has a controlled 19-section first-class semantic architecture that preserves all Task-2.2 L4 facets and the L2/L3/L5 authority boundaries without changing locked scientific meaning.

**STOP: Task 3.2 has not been started.**

Exact next action, only when separately authorized: **Task 3.2 — expand each PP-01–PP-19 section field-by-field**, mapping every field/substructure to its locked owner, multiplicity, evidence/provenance requirements, vocabulary/taxonomy relation, applicability and technical serialization without silently changing v0.7.