# Task 2.1 — Permanent Atlas Eight-Level Conceptual Architecture

Status: **PASS — COMPLETE**

Date: 2026-09-07

Roadmap parent: `docs/master-architecture/CONTROLLED-ROADMAP.md` → Task 2.1

Branch: `docs/master-atlas-roadmap`

Controlling contract: frozen **Master Plan v1.0** (`TASK-1.7-MASTER-PLAN-V1.0-FREEZE.md`), including the Task 1.6 111-requirement coverage matrix, Task 1.3 R1–R48, Task 1.4 X1–X9, Task 1.5 H1–H11/NDU/CMR gates, `ATLAS-PRODUCTION-SURFACE-REGISTER.md`, and locked Google Drive scientific authority `v0.7-pilot-atlas-prefreeze`.

Scope: conceptual architecture only. Task 2.1 defines permanent responsibility domains, authority boundaries, information flow, cross-layer interfaces, and the global QA/versioning/governance plane. It does **not** yet enumerate every internal field (Task 2.2), create Mermaid source (Task 2.3), create DBML/technical ERD (Task 2.4), design the interactive Architecture & Data Map page (Task 2.5), or define shared machine-readable architecture definitions (Task 2.6).

---

## 1. Architecture decision

The permanent PINN Review Atlas architecture is an **eight-level governed scientific knowledge architecture surrounded by one global QA/versioning/governance plane**.

The eight levels are **logical responsibility and authority domains**. They are not eight database tables, not eight deployment tiers, and not a rigid one-way ETL pipeline. A future relational implementation may represent one level with many tables or several levels with shared technical infrastructure, provided scientific ownership remains unchanged.

The architecture is designed around one governing chain:

**primary sources → stable bibliographic identity → evidence/provenance → verified paper-level scientific knowledge → governed semantic/ontology control → cross-paper intelligence → curated Atlas synthesis → Atlas pages/tools/integration surfaces**

with controlled feedback from scientific records into ontology-extension review, and with global governance applied to every level.

The core scientific rule remains:

> Store what the paper says, where it says it, how strongly it says it, and separately what the Atlas concludes from it.

No lower-level scientific meaning may be silently overwritten by a higher-level analytical, synthesis, implementation, or UI layer.

---

## 2. Permanent architecture at a glance

| Level | Permanent responsibility domain | Primary authoritative objects | Principal upstream dependency | Principal downstream consumers |
|---|---|---|---|---|
| **L1** | Primary Scientific Sources | papers/PDFs, supplements, authoritative source associations, governed external validation sources | external scientific/publication sources | L2, L3 |
| **L2** | Bibliographic Identity & Corpus Registry | stable `paper_id`, verified bibliographic metadata, corpus membership, metadata history | L1 + bibliographic verification | L3–L8 |
| **L3** | Evidence & Provenance | evidence records, verbatim evidence, locators, origin/source role, verification/support/conflict state | L1 + L2 | L4, L6, L7, drill-down in L8 |
| **L4** | Verified Paper Scientific Knowledge | evidence-linked paper-level applications, problems, tasks, challenges, methodology, outcomes, validation, reproducibility, limitations, etc. | L2 + L3 + L5 semantic control | L6, L7, L8 |
| **L5** | Ontology, Taxonomy & Semantic Control | controlled vocabularies, taxonomy terms/aliases, relationships, provisional/source-local concepts, ontology/version/change state | locked v0.7 owners + governed extension proposals | L4, L6, L7, L8 |
| **L6** | Cross-Paper Intelligence & Analytical Semantics | dimension catalogues, valid comparisons, aggregates, recurrence/trend/contradiction analytics, evidence-backed analytical products | verified L4 + L5 + eligible L3 | L7, L8 |
| **L7** | Curated Atlas Synthesis & Frameworks | official Atlas synthesis statements, gaps/opportunities, four frameworks, 98-cell matrix synthesis, curated diagnostic synthesis | eligible L3/L4 + L5 + reproducible L6 | L8 |
| **L8** | Atlas Experience, Tools & Integration Surfaces | current/future pages, profiles, explorers, controlled editors/review tools, APIs/views, navigation/crosslinks | governed outputs from L2–L7 | users + governed write workflows back to owning layers |

**Global plane:** scientific authority, QA, provenance enforcement, verification, versioning, controlled extension, conflict preservation, correction/history, rollback, scale-out gates, dependency propagation, access/write governance, full-surface preservation, and bounded-subsystem governance.

---

## 3. Level 1 — Primary Scientific Sources

### 3.1 Purpose

L1 preserves the scientific and documentary origin from which Atlas knowledge is derived. It is the source-association layer, not the normalization layer.

### 3.2 Conceptual contents

L1 includes, as applicable:

- primary paper PDFs or authoritative full-text source associations;
- supplementary material;
- appendices, datasets, code supplements, graphical material, and related source artifacts when used as scientific evidence;
- authoritative bibliographic source records used to verify publication identity;
- governed external validation sources when explicitly allowed by protocol;
- source-access state and source provenance;
- immutable associations between Atlas paper identity and the source artifacts used for extraction/review.

### 3.3 Authority rule

L1 owns **source identity and source association**, not scientific normalization. A source can contain claims, data, contradictions, omissions, or errors; L1 preserves them rather than correcting their scientific meaning.

### 3.4 Required boundaries

- A metadata source is not automatically scientific evidence.
- A cited paper is not evidence for the current paper unless evidence role/origin is explicitly represented.
- A source conflict is not silently corrected.
- Missing source material is represented as unavailable/unknown rather than reconstructed.
- Full source documents remain separate from the future live relational scientific record store unless a later provider/storage design explicitly supports references to them.

### 3.5 Primary interfaces

- **L1 → L2:** bibliographic verification and stable source association.
- **L1 → L3:** evidence capture from precise source locations.

No L1 source artifact is mutated merely because L3–L7 classifications change.

---

## 4. Level 2 — Bibliographic Identity & Corpus Registry

### 4.1 Purpose

L2 provides the stable paper/corpus identity backbone used by all scientific, analytical, synthesis, and Atlas-facing layers.

### 4.2 Conceptual contents

L2 includes:

- stable Atlas `paper_id` / reference identity;
- verified title;
- authorship;
- publication year;
- venue/publisher metadata;
- DOI and authoritative URLs;
- publication/reference type;
- access/open-access state where governed;
- country/institution/collaboration metadata where bibliographically justified;
- corpus membership and status;
- bibliographic verification state;
- metadata correction/history and provenance;
- links from paper identity to L1 source artifacts.

### 4.3 Authority rule

L2 is the single authoritative bibliographic identity layer. One verified bibliographic value should feed all dependent Atlas views.

`papers-master.json` is the current production bibliographic implementation evidence, but the conceptual L2 authority is not permanently tied to that file format.

### 4.4 Required boundaries

- Bibliographic identity ≠ complete scientific Paper Profile.
- Stable `paper_id` must not change because navigation, database provider, or page layout changes.
- Historical corrections remain auditable.
- Duplicate metadata copies in downstream views are derived representations, not independent authorities.

### 4.5 Primary interfaces

L2 provides stable identity keys to **every level L3–L8**. All paper-linked scientific/evidence/synthesis/resource relationships must resolve through stable governed identity rather than page-specific ad hoc identifiers.

---

## 5. Level 3 — Evidence & Provenance

### 5.1 Purpose

L3 is the evidentiary spine of the Atlas. It records what supports, contradicts, qualifies, or fails to support normalized scientific records and Atlas synthesis.

### 5.2 Conceptual contents

L3 includes, where applicable:

- stable evidence identity;
- verbatim/source-preserving evidence;
- normalized evidence statement or interpretation staging, distinct from the final L4 scientific record;
- precise locator: chapter/section/subsection/page/paragraph/figure/table/appendix/component scope as available;
- evidence type;
- source/origin role;
- statement strength;
- workflow verification status;
- semantic support status;
- conflict/mismatch state;
- scope/context attached to the evidence;
- source extraction version;
- current normalization/ontology version reference;
- reviewer/date/history;
- links to the L2 paper and L1 source artifact;
- links from one evidence object to one or more paper-level records or synthesis objects where scientifically justified.

### 5.3 Authority rule

L3 owns **evidence provenance and evidentiary state**. Raw/verbatim evidence is immutable; interpretation/classification may be revised with history.

### 5.4 Required boundaries

- `verification_status` answers whether evidence was checked; it does not say whether evidence supports the claim.
- `support_status` answers how checked evidence relates to the claim; verified evidence can be mismatched or contradictory.
- Absence of reporting ≠ negative evidence.
- A locator is never invented.
- Evidence strength is never inflated.
- Reclassification does not rewrite source evidence.

### 5.5 Primary interfaces

- **L3 → L4:** evidence-backed paper scientific records.
- **L3 → L6:** eligible analytical inputs and drill-down basis.
- **L3 → L7:** supporting/contradicting evidence chains for curated Atlas synthesis.
- **L3 → L8:** user-facing provenance drill-down.

No L4, L6, L7, or L8 object may replace L3 evidence with a summary-only representation when traceability is required.

---

## 6. Level 4 — Verified Paper Scientific Knowledge

### 6.1 Purpose

L4 stores the normalized, evidence-linked scientific model of each paper. It is the authoritative paper-level scientific knowledge layer, subject to locked v0.7 owners and later governed ontology versions.

### 6.2 First-class conceptual domains

L4 contains repeatable and conditional paper-level structures for:

1. study/extraction identity and verification state;
2. application and physical system;
3. problem definition and governing equations/constraints;
4. computational task;
5. PINN problem/challenge addressed;
6. PINN type/family assignment;
7. methodological features;
8. contribution;
9. claim versus actual demonstration;
10. outcome/degree of resolution;
11. validation;
12. evaluation results/test cases;
13. reproducibility;
14. limitations;
15. open problems;
16. future work;
17. paper-level diagnostic pathways;
18. links to evidence/provenance;
19. links to governed taxonomy/relationships.

Task 2.2 will expand these domains into the complete internal conceptual field/component map. Task 3 remains responsible for the complete Paper Profile product specification and display logic.

### 6.3 Authority rule

L4 owns **paper-level normalized scientific facts/records**, not Atlas-wide conclusions.

### 6.4 Permanent semantic separations

The following remain structurally distinct:

- author statement ≠ Atlas inference ≠ Atlas synthesis;
- claimed solution ≠ demonstrated solution;
- demonstrated application ≠ related application ≠ potential application;
- physical problem ≠ computational task ≠ PINN challenge;
- contribution ≠ outcome;
- validation ≠ evaluation result;
- limitation ≠ open problem ≠ future work ≠ Atlas research gap;
- paper-level relationship ≠ framework/synthesis relationship;
- bibliographic record ≠ scientific profile.

### 6.5 Multiplicity rule

Materially different experiments, configurations, cases, components, results, diagnostic pathways, or scopes must remain repeatable/qualified rather than flattened into a single paper-level summary.

### 6.6 Primary interfaces

- **L5 → L4:** canonical semantic structures, vocabularies, terms, aliases, relation types, and version context.
- **L4 → L5:** controlled proposals for new/provisional/source-local concepts, relation candidates, controlled-value candidates, or structural issues through X1–X6; never direct silent ontology mutation.
- **L4 → L6:** verified paper-level records for cross-paper intelligence.
- **L4 → L7:** eligible source records for curated synthesis.
- **L4 → L8:** Paper Profiles, detail views, crosslinks, and governed editing/review displays.

---

## 7. Level 5 — Ontology, Taxonomy & Semantic Control

### 7.1 Purpose

L5 provides the governed semantic system that lets L4–L8 use stable meaning while still supporting controlled scientific growth.

### 7.2 Conceptual contents

L5 includes:

- controlled vocabularies;
- canonical taxonomy terms;
- aliases and alias scope;
- parent/child and other taxonomy organization;
- paper-specific/source-local terms;
- provisional terms;
- deprecated/merged/re-parented states;
- typed paper-level relationship registry;
- provisional relationship candidates;
- controlled/extensible value states;
- no-merge/non-equivalence constraints;
- ontology/version references;
- change log and migration references;
- links to triggering papers/evidence/reviewer decisions;
- semantic declarations used by L4, L6, L7, and L8.

The locked Canonical Schema / Field Dictionary governs structural scientific field/entity meaning used primarily in L4. The locked Controlled Vocabularies, Taxonomy Term and Alias Registry, Relationship Registry, and Ontology Governance owners govern their respective semantic responsibilities. L5 does not merge these owner roles into a new sixth owner.

### 7.3 Authority rule

L5 is the canonical semantic control layer, but locked v0.7 remains the scientific authority until a later governed scientific version is explicitly promoted.

### 7.4 Dynamic-extension rule

Task 1.4 X1–X9 is mandatory. New information follows:

**preserve evidence → search current owners → test adequacy → normalize if adequate → preserve scoped/provisional meaning if not → classify extension → review evidence/recurrence/generalizability → adjudicate → change only the correct owner in a candidate future version → log/migrate/test → promote explicitly**.

A new field/entity is a last resort requiring demonstrated structural need. UI/query convenience is not scientific justification.

### 7.5 Primary interfaces

L5 supplies semantic control to L4, L6, L7, and L8. It receives governed extension proposals from L4/L6/L7/L8 workflows, but no consumer may write canonical ontology state directly.

---

## 8. Level 6 — Cross-Paper Intelligence & Analytical Semantics

### 8.1 Purpose

L6 transforms eligible verified paper-level records into reproducible cross-paper analytical products without converting patterns into unsupported universal claims.

### 8.2 Conceptual contents

L6 includes:

- the principal dimension catalogue;
- single-dimension intelligence profiles;
- governed cross-dimensional comparison choices;
- explicitly invalid/misleading comparison combinations;
- counts and distributions based on eligible records;
- temporal trends;
- geographic/collaboration trends where bibliographically supported;
- recurrence of limitations/open problems/future directions;
- methodological/application/problem/PINN-type patterns;
- outcome/validation/evaluation/reproducibility patterns;
- contradiction/mismatch analytics;
- failure/diagnostic pattern analytics;
- evidence-strength and support-independence descriptors;
- analytical candidate signals for research gaps/opportunities;
- reproducible query/synthesis inputs used by L7 and L8.

The current 20 intelligence families from Master Plan v1.0 remain the required starting set. Task 6 will fully specify their dimensions, valid crossings, and explorer behavior.

### 8.3 Authority rule

L6 owns **reproducible analytical products**, not paper facts and not automatically official Atlas synthesis conclusions.

### 8.4 Analytical integrity rules

- Frequency ≠ evidence strength.
- Repeated statements inside one paper do not become independent support.
- Only eligible reviewed records enter governed positive aggregation.
- Contradictions remain visible.
- Qualitative association is not effect-size estimation or causal inference.
- Every aggregate must drill down to the paper/record/evidence basis where scientifically material.
- Context and denominator definitions must be explicit.

### 8.5 Primary interfaces

- **L4 + L5 + eligible L3 → L6** for governed analysis.
- **L6 → L7** for curated synthesis inputs.
- **L6 → L8** for explorers, filters, distributions, comparisons, and trends.

L6 may identify a gap/opportunity candidate but does not silently create an official Atlas gap/opportunity synthesis without L7 review/governance.

---

## 9. Level 7 — Curated Atlas Synthesis & Frameworks

### 9.1 Purpose

L7 stores and governs Atlas-level scientific synthesis that goes beyond individual paper statements while remaining reconstructable from eligible evidence.

### 9.2 Conceptual contents

L7 includes:

- explicit Atlas synthesis statements;
- Atlas research-gap synthesis;
- Atlas research-opportunity synthesis;
- supporting and contradictory paper/evidence sets;
- scope/context and confidence/strength descriptors;
- synthesis version and review history;
- **PINN Design Stack & Feedback Loops**;
- **PINN Co-Design Framework**;
- **14 × 7 / 98-cell Design–Performance Dependency Matrix**;
- **PINN Failure-Mode Diagnostics Framework**;
- future official Atlas frameworks approved under governance;
- official framework-to-paper/evidence mappings;
- separation between paper-supported diagnostic pathways and Atlas-normalized failure categories/recommendations;
- future official synthesis objects needed to persist framework relations without misclassifying them as paper-level ontology edges.

### 9.3 Authority rule

L7 owns **Atlas synthesis**, not lower-layer source/evidence/paper facts.

### 9.4 Synthesis integrity rules

- Framework topology does not become a paper-level relationship merely because it is useful scientifically.
- Matrix cells remain qualitative synthesis unless a separate quantitative evidence model is explicitly justified.
- Gaps/opportunities must retain independent support, contradictions, scope, and version.
- Curated synthesis must be reproducible/auditable from L3/L4/L6 inputs.
- User exploratory frameworks, if later implemented, remain distinct from official Atlas synthesis.

### 9.5 Primary interfaces

- **L3/L4/L5/L6 → L7** through eligible governed synthesis workflows.
- **L7 → L8** through framework pages, matrix views, gap/opportunity explorers, diagnostics, builders, and crosslinks.

L7 cannot rewrite L3 evidence or L4 paper records to make a synthesis appear cleaner.

---

## 10. Level 8 — Atlas Experience, Tools & Integration Surfaces

### 10.1 Purpose

L8 is the presentation, interaction, editing/review, navigation, and integration boundary through which users and external bounded systems access Atlas knowledge.

### 10.2 Surface classes

L8 includes five conceptual surface classes:

1. **Read-only knowledge surfaces** — references, Paper Profiles, methodology pages, framework views, explorers, Architecture/Data Map, citation/privacy/support pages, etc.
2. **Analytical/explorer surfaces** — single-dimension and cross-dimensional intelligence, metrics, Realm, application/PINN-type/methodology/gap/diagnostic/reproducibility explorers.
3. **Controlled maintenance/review surfaces** — Dataset Manager, scientific ingestion/review tool, correction workflow, ontology-review queues, governance views.
4. **Builder/exploratory surfaces** — Design Studio/PINN Builder, possible Framework Builder, user-defined analytical views; these never create official scientific facts merely by interaction.
5. **Integration surfaces** — APIs, generated views, exports, search/index/navigation data, and explicitly governed interfaces to independently governed subsystems such as Computational Resources.

### 10.3 Authority rule

**A page/tool is never a scientific authority merely because it displays or edits information.**

Read surfaces consume governed owners. Write-capable surfaces submit validated commands/proposals into the owning L2/L3/L4/L5/L7 workflow with review/history/QA; they do not bypass those layers.

### 10.4 Current-surface preservation rule

The current 26 registered production routes remain a **preservation/migration baseline only**, not the final target information architecture and not a route ceiling.

Task 9 remains mandatory for all 26 current routes and any additional current surface discovered later. Task 9 will determine final disposition: retain, redesign, merge, nest, rename, replace, compatibility redirect, or retire only after verified migration/regression closure.

### 10.5 Future-page rule

Future pages/page families are open-ended but governed. Every new surface must declare, as applicable:

- purpose/user role;
- authoritative upstream owner(s);
- paper-level vs analytical vs synthesis scope;
- identifiers/keys;
- read/write behavior;
- provenance/evidence requirements;
- taxonomy/relationship dependencies;
- navigation/crosslinks;
- update/regeneration behavior;
- QA/regression obligations;
- lifecycle/retirement behavior.

### 10.6 Primary interfaces

L8 consumes governed outputs from L2–L7. Controlled user actions may create **requests/proposals/events** routed back to the appropriate owner; direct uncontrolled mutation of authoritative scientific state is prohibited.

---

## 11. Global QA, Versioning & Governance Plane

The global plane surrounds and constrains all eight levels. It is not a ninth scientific layer and does not own scientific field meanings already assigned to locked v0.7 owners.

### G1. Scientific authority and ownership

- Locked Drive `v0.7-pilot-atlas-prefreeze` remains the scientific authority.
- Five scientific owner documents retain non-overlapping ownership.
- Master Plan v1.0 governs implementation architecture/order but cannot amend scientific meaning.
- Implementation artifacts must conform to owners rather than reinterpret them.

### G2. Evidence/provenance enforcement

- Material scientific assertions remain traceable.
- Raw evidence, evidence IDs, and source locators remain immutable once governed except for explicitly governed correction of recording errors with history.
- Origin, source role, scope, verification, support, and conflict state remain visible.

### G3. Human verification and review-state governance

- AI output remains proposal/candidate until human scientific review.
- Verified/published scientific records require 100% applicable human review coverage.
- Review state and publication state remain explicit.

### G4. Semantic-boundary and no-merge governance

All Task 1.3 R1–R48 remain mandatory. No architecture layer, database design, query, page, migration, or synthesis may collapse protected distinctions.

### G5. Controlled dynamic extension

Task 1.4 X1–X9 governs extension at every relevant layer:

- X1 existing adequate representation;
- X2 source-local/paper-specific concept;
- X3 provisional taxonomy/alias candidate;
- X4 provisional relationship candidate;
- X5 controlled/extensible-value candidate;
- X6 structural/schema candidate;
- X7 synthesis-only extension;
- X8 page/tool/information-architecture extension;
- X9 bounded-subsystem integration extension.

Scientific canonicalization/structural change after v0.7 requires the appropriate later governed scientific version; page/tool growth alone does not.

### G6. QA and regression

Task 1.5 H1–H11 remain non-bypassable. Global QA includes, as applicable:

- zero forced mappings;
- complete provenance for accepted verified evidence-bound records;
- complete human review before verified publication;
- evidence/history immutability;
- identity/referential integrity;
- semantic-boundary regression;
- conflict/mismatch/ambiguity preservation;
- zero ineligible positive-synthesis contamination;
- zero active major structural gaps before widening;
- 36-paper/eight-sentinel/A6/no-merge/31-field/four-framework regression requirements;
- explicit checkpoint/publication readiness.

### G7. Scale-out control

NDU/CMR gates remain:

- **GO:** CMR ≥95% only when all hard gates pass and active major structural gaps = 0;
- **CONDITIONAL GO:** 90% ≤ CMR <95%, bounded qualification/adversarial work only;
- **STOP:** CMR <90%, any hard-gate failure, or any active major structural gap;
- **ROLLBACK REQUIRED:** corruption of accepted evidence/history/identity/provenance/mandatory semantics.

### G8. Version separation

The architecture requires distinct version identities rather than one overloaded version number. Conceptually distinguish:

- scientific ontology/normalization version;
- source extraction version;
- bibliographic data snapshot/release;
- implementation/schema/migration version;
- synthesis version;
- page/tool release version;
- Master Plan/architecture contract version.

A GitHub implementation release never silently becomes a scientific ontology version, and a Master Plan amendment never substitutes for ontology promotion.

### G9. Change history, correction, invalidation and rollback

A governed correction preserves:

- old value/state;
- new value/state;
- reason;
- source/evidence;
- reviewer/time;
- affected owner;
- downstream dependencies;
- invalidation/rebuild action;
- rollback path where applicable.

Derived views must be deterministically refreshed or marked stale/invalid when authoritative inputs change.

### G10. Identity and referential integrity

Stable identities must exist conceptually for papers, evidence, taxonomy concepts, relations, synthesis objects, and independently governed resources where integration occurs. Duplicate technical records may never create duplicate scientific identities silently.

### G11. Dependency and single-source propagation

One authoritative value should feed many derived views. The future implementation must expose dependency relationships sufficiently to answer: **if this authoritative datum changes, what must be regenerated, revalidated, or reviewed?**

Task 9 and Task 10 will make this operational for current Atlas surfaces and correction propagation.

### G12. Access/write governance

Conceptually separate:

- read authority;
- proposal/request authority;
- review/adjudication authority;
- canonical write authority;
- publication/release authority.

Provider-specific authentication/authorization is deferred to later infrastructure tasks, but no future provider may collapse these governance roles merely for convenience.

### G13. Full production-surface preservation

The 26-route register remains mandatory input. Current-surface preservation, target IA redesign, and future extensibility remain distinct. No production cutover can bypass Task 9/18/19 regression treatment.

### G14. Bounded-subsystem governance

Computational Resources remains independently governed. Cross-system interoperability must preserve:

- stable Atlas paper linkage;
- independent resource identity;
- explicit paper-resource relations;
- separate evidence/provenance ownership;
- reproducibility interoperability;
- independently versioned subsystem state;
- explicit integration contracts.

No internal Stage 1/2/3 Computational Resources schema becomes Atlas ontology merely through future page integration.

---

## 12. Permanent cross-level interface contract

The architecture uses the following controlled information paths.

### 12.1 Principal scientific path

`L1 source` → `L2 paper identity` → `L3 evidence` → `L4 verified paper knowledge` → `L6 cross-paper intelligence` → `L7 curated synthesis` → `L8 user-facing surfaces`

### 12.2 Semantic-control path

`L5 semantic control` → L4/L6/L7/L8

and, when current semantics are inadequate:

L3/L4/L6/L7/L8 observation → governed X1–X9 proposal → L5 review/adjudication → possible later scientific-version change → controlled reclassification/migration without rewriting L3 source evidence.

### 12.3 Bibliographic propagation path

`L2 authoritative bibliographic value` → all dependent L3–L8 objects/views.

A bibliographic correction triggers governed history + dependency invalidation/rebuild rather than independent manual edits across pages.

### 12.4 Controlled-write path

`L8 user/tool action` → validated request/proposal → correct owning workflow in L2/L3/L4/L5/L7 → human review/QA as required → canonical accepted state → deterministic regeneration back to L8.

Direct UI-to-database mutation that bypasses scientific ownership/review/history is prohibited for governed scientific state.

### 12.5 Synthesis drill-down path

`L8 synthesis display` → L7 synthesis object → L6 analytical basis where applicable → L4 paper records → L3 evidence → L1 source locator/artifact.

The user should be able to move from an important Atlas conclusion toward its evidence basis rather than encounter an opaque summary.

---

## 13. Explicit architectural anti-patterns

The permanent architecture rejects the following patterns:

1. **Page-as-authority:** a page-specific JSON value becomes truth because that page uses it.
2. **Database-as-ontology:** table convenience determines scientific meaning.
3. **Framework-to-paper collapse:** curated framework edges become paper-level relations without evidence.
4. **Evidence rewrite:** source wording is edited to fit a new classification.
5. **Flat-paper record:** materially distinct cases/components are reduced to one summary value.
6. **Tag sprawl:** every new concept becomes an uncontrolled free-form tag.
7. **Column-per-concept growth:** every future method/type/application requires a new schema column.
8. **AI auto-verification:** machine extraction is published as verified science without human review.
9. **Silent canonicalization:** provisional/source-local values are presented as canonical without governance.
10. **Count-as-strength:** frequency is displayed as evidence strength without qualification.
11. **Route freeze:** the current 26 pages are treated as the permanent IA.
12. **Route loss:** a current route is removed without dependency/deep-link/regression treatment.
13. **Subsystem absorption:** Computational Resources is merged into the scientific ontology because both relate to papers.
14. **Version conflation:** ontology, schema, data release, synthesis, and site release all use one ambiguous version state.
15. **Untracked correction:** an authoritative value is overwritten without history and dependent-view propagation.

---

## 14. Storage and deployment neutrality

Task 2.1 deliberately defines a **conceptual** architecture. The eight levels do not prescribe physical storage placement.

The frozen responsibility direction remains:

- Google Drive: scientific/source authority and preserved scientific governance/history;
- GitHub: version-controlled implementation definitions, code, tests, architecture sources, documentation, and static/generated exports where appropriate;
- future relational database: accepted structured operational state after platform/schema/prototype decisions;
- source PDFs/full artifacts: separate source storage rather than being treated as ordinary relational rows.

Task 11 will choose infrastructure; Task 12 will define the relational implementation. Neither may change the conceptual authority model established here.

---

## 15. Current Atlas and target-information-architecture treatment

Task 2.1 does **not** finalize the navigation hierarchy.

The present current-surface baseline remains 26 registered routes, plus later discovered surfaces. Conceptually, all are L8 surfaces whose underlying authorities may reside in L2–L7 or in bounded external subsystems.

The target IA may later reorganize current pages after Task 9. The reserved Computational Resources direction remains:

```text
Computational Resources
├── Code & Software
├── Datasets
├── Frameworks & Libraries
├── Simulators & Solvers
└── Reproducibility Explorer
```

This is an L8 target-IA direction backed by an X9 bounded integration contract; it is not an L5 ontology declaration.

---

## 16. Conceptual coverage against frozen Master Plan v1.0

Task 1.6 remains the authoritative 111-row requirement/coverage matrix. Task 2.1 allocates those requirement families into permanent architecture homes without replacing the matrix:

| Frozen requirement family | Permanent conceptual home |
|---|---|
| Task 1.1 authority/ownership A01–A11 | Global plane + L2–L8 boundaries |
| Task 1.2 end-to-end O01–O20 | L1–L8 + global plane |
| Task 1.3 R1–R48 | Global G1–G14, enforced in relevant L2–L8 interfaces |
| Task 1.4 X1–X9 | Global G5 + L5 extension control + L8/X8 + CR/X9 |
| Task 1.5 H1–H11 | Global G6 |
| NDU/CMR dispositions | Global G7 |
| Complete-surface/future-extension requirements | L8 + G13 + Task 9 contract |
| Computational Resources boundary | G14 + L8 integration boundary |

**Conceptual orphan check: 0 requirement families.**

This statement means each frozen requirement family has a permanent conceptual architecture home. It does not replace Task 1.6's 111-row ownership matrix and does not claim that downstream implementation exists.

---

## 17. Task 2.1 acceptance checks

| Acceptance check | Result |
|---|---|
| Exactly eight permanent conceptual levels defined | **PASS — 8/8** |
| Global QA/versioning/governance plane defined | **PASS** |
| Locked v0.7 scientific authority preserved | **PASS** |
| Master Plan v1.0 remains implementation contract, not ontology | **PASS** |
| R1–R48 remain mandatory | **PASS** |
| X1–X9 controlled extension preserved | **PASS** |
| H1–H11/NDU/CMR preserved | **PASS** |
| Evidence → paper fact → analytics → synthesis boundaries explicit | **PASS** |
| Bibliographic identity separated from scientific Paper Profile | **PASS** |
| Paper-level relations separated from framework relations | **PASS** |
| Current 26-route baseline preserved without freezing target IA | **PASS** |
| Future-page extensibility preserved | **PASS** |
| Task 9 mandatory audit preserved | **PASS** |
| Computational Resources remains bounded/independent | **PASS** |
| Provider/database/ERD decisions not preempted | **PASS** |
| Task 2.2–2.6 not falsely claimed complete | **PASS** |

---

## 18. Task 2.1 verdict

**PASS — COMPLETE.**

The permanent Atlas conceptual architecture is now defined as **eight governed responsibility levels plus one cross-cutting QA/versioning/governance plane**.

No scientific ontology version is changed. Locked `v0.7-pilot-atlas-prefreeze` remains authoritative. Master Plan v1.0 remains frozen as the implementation contract.

No production `main`, current Atlas page, production database, migration, extraction record, or Computational Resources Stage 1/2/3 branch is modified by Task 2.1.

**STOP BOUNDARY:** Task 2.2 has not been started.

**Exact next action, only when separately authorized:** Task 2.2 — expand every major level into its complete internal conceptual components and fields, preserving the Task 2.1 level boundaries and avoiding premature physical SQL/DBML design.