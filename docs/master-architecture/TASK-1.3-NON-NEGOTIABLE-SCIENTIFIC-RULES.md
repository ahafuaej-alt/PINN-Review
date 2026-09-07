# Task 1.3 — Non-Negotiable Scientific Rules

Status: **PASS**

Date: 2026-09-07

Roadmap parent: `docs/master-architecture/CONTROLLED-ROADMAP.md` → Task 1.3

Controlling inputs:

- locked Google Drive scientific authority `v0.7-pilot-atlas-prefreeze`;
- `TASK-1.1-AUTHORITATIVE-RECONCILIATION.md`;
- `TASK-1.2-COMPLETE-PROJECT-OBJECTIVE.md`;
- `ATLAS-PRODUCTION-SURFACE-REGISTER.md`;
- Google Drive `PINN Review Atlas — Master Architecture & Implementation Memory`.

Scope: planning/specification only. This record formalizes scientific invariants that all later architecture, database, extraction, synthesis, page, tool, migration, and lifecycle work must obey. It does not alter locked v0.7, define Task 1.4 extension mechanics, set Task 1.5 numerical scale-out gates, implement a database, modify production `main`, or modify any Computational Resources Stage 1/2/3 branch.

## 1. Authority rule

The locked Google Drive baseline `v0.7-pilot-atlas-prefreeze` remains the operational scientific authority.

The five v0.7 single-owner documents retain their non-overlapping ownership:

1. Canonical Schema / Field Dictionary — entity structure, field names, cardinality, requirement classes, structural boundaries.
2. Controlled Vocabularies — enumerated values and controlled labels.
3. Taxonomy Term and Alias Registry — normalized concepts, aliases, term status, source terminology, promotion state.
4. Relationship Registry — typed scientific relationships, their status and scope, and prohibited generic edges.
5. Ontology Governance and Change Rules — ontology lifecycle, evidence governance, conflict handling, synthesis eligibility, version/change governance.

No implementation artifact, Atlas page, database table, UI convenience, historical document, framework graph, generated dataset, Master Memory requirement, or Computational Resources schema may silently override the owner document for a scientific concern.

## 2. Rule hierarchy

The following invariants are non-negotiable for Master Plan v1.0 and all later implementation unless a separately governed future scientific-version change explicitly amends the relevant v0.7 owner.

A technical implementation may change storage, indexing, APIs, navigation, rendering, route hierarchy, or computation strategy. It may not change scientific meaning merely to simplify implementation.

## 3. Evidence and provenance invariants

### R1 — Author statement is not Atlas inference

An author-stated proposition, an Atlas-normalized extraction, an Atlas inference, and an Atlas synthesis are distinct epistemic objects.

They must remain distinguishable in storage, review state, provenance, queries, aggregation, and user-facing presentation where material.

### R2 — Raw/verbatim evidence is immutable

Source-grounded raw/verbatim evidence must not be rewritten to conform to later terminology, classifications, taxonomies, schemas, or synthesis.

Normalization and classification may evolve under governance; the historical source evidence must remain recoverable unchanged.

### R3 — Every material scientific assertion requires traceability

A material paper-level scientific record must link to governed evidence or be explicitly marked as an Atlas inference/synthesis with its supporting evidence chain.

No UI, generated page, aggregate table, framework cell, explorer, or API response may make provenance disappear merely because the presentation is derived.

### R4 — Evidence location must not be invented

If an exact source locator cannot be established, it must remain absent, unresolved, approximate only where the protocol permits it, or flagged for review. A missing locator must never be fabricated for completeness.

### R5 — Evidence strength must not be inflated

Wording, classification, confidence, and synthesis must not imply stronger evidence than the source or governed evidence set supports.

Author conjecture, proposal, hypothesis, review synthesis, experimental demonstration, benchmark result, and external validation must not be treated as equivalent evidence roles.

### R6 — Absence of reporting is not negative evidence

`not reported`, `not found`, `not applicable`, `reported unavailable`, and an explicitly negative result are scientifically different states and must remain distinguishable whenever the governing schema/vocabulary supports them.

## 4. Scientific-semantic separation invariants

### R7 — Claimed solution is not demonstrated solution

A problem claimed to be solved, improved, generalized, stabilized, accelerated, or otherwise addressed must not be recorded as demonstrated beyond what the actual experiments, analyses, benchmarks, or validations establish.

### R8 — Demonstrated, related, and potential applications are distinct

A demonstrated application must not be merged with a related application mentioned for context or a potential/proposed application.

Counts and application analytics must not silently combine these states.

### R9 — Physical problem, computational task, and PINN methodological challenge are distinct

These dimensions answer different scientific questions and must remain separately representable and queryable.

Examples: a Navier–Stokes flow problem, an inverse parameter-estimation task, and optimization stiffness are not interchangeable labels.

### R10 — Limitation, open problem, future work, and Atlas research gap are distinct

An author-reported limitation is not automatically an open problem; an open problem is not automatically a future-work commitment; repeated future work is not automatically an Atlas research gap.

Atlas gaps require governed cross-paper synthesis and evidence, not category collapse.

### R11 — Contribution is not outcome

A methodological, architectural, theoretical, software, data, benchmark, diagnostic, or other contribution describes what a study contributes. Outcome describes what occurred or was demonstrated. These must not be conflated.

### R12 — Validation is not evaluation metric

Validation design/source/baseline and quantitative or qualitative evaluation results are related but distinct. A reported metric alone does not prove a validation class, robustness, generalization, or real-world validation.

### R13 — Scientific record is not taxonomy term

A taxonomy term classifies or organizes concepts; it is not automatically a dedicated database field or complete scientific record.

### R14 — Paper-level relationship is not framework relationship

A relationship present in an Atlas synthesis framework does not automatically become a canonical paper-level ontology edge.

Paper-level relationships require their own governed source/evidence ownership.

### R15 — Bibliographic record is not complete Paper Profile

Stable bibliographic identity and metadata are the identity/core layer. They do not substitute for the complete evidence-linked scientific model of a paper.

## 5. Ambiguity, contradiction, and novelty invariants

### R16 — Ambiguity stays visible

Scientifically material ambiguity must not be force-resolved merely to satisfy a database constraint, UI requirement, chart, count, or taxonomy assignment.

The architecture must permit unresolved or qualified states where the governed scientific model requires them.

### R17 — Contradictory evidence is preserved

Verified conflicting evidence must remain representable and traceable. Contradictions must not be deleted, averaged away, overwritten by the newest record, or collapsed into false consensus.

### R18 — Novel evidence must not be forced into an existing category

When source evidence does not map faithfully to an existing category, the system must preserve the evidence and surface the classification issue rather than force-fit it for extraction completeness.

Task 1.4 will define the controlled dynamic-extension mechanics; Task 1.3 establishes only this scientific invariant.

### R19 — Classification is revisable; source evidence is not

Later taxonomy or ontology decisions may reclassify accepted normalized records without rewriting raw/verbatim evidence or destroying the prior classification/history.

### R20 — Context dependence must be preserved

A method, outcome, limitation, failure mode, validation result, or design–performance relationship demonstrated under one application/problem/data/training regime must not be universalized without evidence.

Problem, application, data, scale, geometry, dimensionality, training, and validation context must remain available where they materially constrain interpretation.

## 6. Identity and record-granularity invariants

### R21 — Reuse stable canonical identities

Existing governed Atlas identifiers must be reused where applicable rather than creating parallel identities for the same paper or canonical concept.

Stable `paper_id` is the integration key between the bibliographic core and future scientific records.

Independent entities—such as computational resources—retain their own governed identities and connect through explicit relationships rather than being collapsed into paper identity.

### R22 — Material multiplicity must not be flattened

Multiple experiments, configurations, applications, test cases, baselines, outcomes, evidence objects, limitations, future-work items, diagnostic pathways, or other scientifically distinct repeated records must remain separately representable when collapsing them would lose meaning.

### R23 — One authoritative value; many derived views

Where a datum has one governed authoritative owner, dependent Atlas views must consume that authoritative value or deterministic derived forms rather than maintaining unsynchronized copies.

This applies especially to verified bibliographic metadata and later accepted structured scientific records.

### R24 — Corrections preserve history

A verified correction must not erase the prior authoritative state or its provenance. The system must support old/new value history, reason/source/reviewer state where governed, downstream-impact identification, and an auditable update path.

## 7. Synthesis and aggregation invariants

### R25 — Frequency is not evidence strength

The number of papers mentioning a claim, limitation, method, gap, or recommendation is not by itself a measure of scientific strength.

Synthesis must consider evidence type, directness, independence, scope, quality, contradiction, and applicability where the governing synthesis method requires them.

### R26 — Only eligible reviewed records may enter governed synthesis

Unreviewed extraction proposals, unresolved classifications, unsupported inferences, or records excluded by governance must not silently enter Atlas-level counts, framework evidence, gap synthesis, or other governed aggregate conclusions.

### R27 — Citation repetition is not independent support

Where detectable and materially relevant, repeated reliance on the same originating source should not be presented as equivalent to multiple independent demonstrations.

### R28 — Qualitative synthesis is not quantitative effect estimation

Framework influence levels, diagnostic relationships, qualitative trends, and similar Atlas synthesis must not be presented as universal effect sizes, causal estimates, or monotonic laws unless a separate governed quantitative method supports such an interpretation.

### R29 — Aggregate statements must drill down to their evidence basis

A user must be able, directly or through a governed trace path, to identify the records/papers/evidence underlying an important Atlas aggregate or synthesis statement.

## 8. Extraction, automation, and verification invariants

### R30 — AI output is a proposal until human scientific review

AI-assisted extraction, classification, relationship proposals, evidence mapping, or synthesis proposals must not become verified scientific data automatically.

Human review remains mandatory before publication into governed verified scientific records.

### R31 — Review decisions must be explicit

The future review workflow must support explicit scientific dispositions such as accept, edit, reject, needs evidence, needs ontology review, unresolved, or equivalent governed states rather than silent acceptance.

### R32 — Automation must preserve scientific boundaries

Automation may accelerate extraction, normalization, rebuilding, linking, validation, and derived-view generation. It must not collapse epistemic states, invent evidence, universalize findings, or bypass scientific governance.

### R33 — Serialization cannot redefine meaning

Database schemas, JSON serialization, APIs, UI forms, search indexes, denormalization, caching, or generated views are representations of the governed model. They may not redefine the scientific semantics owned by v0.7.

## 9. Architecture and Atlas-surface invariants

### R34 — The complete Atlas surface is in scope

Scientific invariants apply across the complete Atlas—not only the Ecosystem, four frameworks, Dataset Manager, bibliography, or new database-backed pages.

The current 26-route production-surface register is a migration/preservation baseline, not a target-route ceiling.

### R35 — Page reorganization cannot change scientific meaning

A current route may later be retained, redesigned, merged, nested, renamed, replaced, redirected, or retired after verified migration; however, navigation or information-architecture changes must not alter scientific ownership, evidence semantics, identity, or provenance.

### R36 — Future pages inherit the same governance

New pages, explorers, profiles, builders, resource views, and other future Atlas surfaces are open-ended but must consume or create scientific information through the same authority, evidence, verification, and synthesis rules.

A new page does not create a new scientific authority merely by existing.

### R37 — Cross-links must preserve entity meaning

Cross-linking between Paper Profiles, applications, PINN types, methods, metrics, frameworks, diagnostics, Computational Resources, or future pages must connect governed identities/relationships and must not imply unsupported scientific relations.

### R38 — Route compatibility is subordinate to scientific correctness, but migration must be explicit

Legacy/deep-link compatibility may be preserved through redirects or compatibility surfaces. Such compatibility must never require maintaining scientifically conflicting duplicate values.

Route retirement or semantic repurposing requires explicit migration and regression treatment under later roadmap tasks.

## 10. Computational Resources boundary invariants

### R39 — Computational Resources remains independently governed

Computational Resources Stage 1/2/3 records, extraction decisions, schemas, checkpoints, and internal scientific governance remain outside Task 1's ontology authority.

Master Architecture work must not absorb, rewrite, merge, or freeze that evolving subsystem merely for architectural convenience.

### R40 — Future interoperability must preserve both identities and evidence provenance

Later integration may connect papers and computational resources through stable IDs, evidence/provenance, reproducibility information, and page/API cross-links, but must preserve independent resource identity and explicit paper-resource relationship semantics.

### R41 — Resource-oriented frameworks are not Atlas scientific synthesis frameworks

A future Computational Resources category such as `Frameworks & Libraries` refers to software/resource classification and must not be conflated with the four Atlas scientific synthesis frameworks.

### R42 — Reproducibility integration must not manufacture equivalence

Paper-level reproducibility fields and Computational Resources reproducibility evidence may interoperate later, but one must not be treated as automatically complete or equivalent to the other without an explicit governed mapping.

## 11. Historical and versioning invariants

### R43 — Historical baselines remain provenance, not current authority

v0.4, v0.5, v0.6, candidate/pre-freeze artifacts, checkpoints, and superseded documents must remain available for provenance and backward-compatibility analysis but must not override locked v0.7 operational meaning.

### R44 — Scientific version changes must be explicit

If a future scientific need requires changing structural scientific meaning rather than merely adding implementation capability, it must be handled through the governed ontology/version process—not silently through SQL, UI, a page-specific schema, or an ad hoc extractor change.

Task 1.4 will specify dynamic-extension rules; this rule only establishes the non-negotiable requirement for explicit governance.

### R45 — Backward compatibility must preserve evidence/history

A later migration or version change must preserve historical raw evidence, prior accepted records/version history, stable identities where governed, and the ability to explain how old records map to the new representation.

## 12. Research-quality invariants

### R46 — Scientific defensibility takes precedence over completeness optics

It is acceptable for a field, relation, classification, synthesis, or page section to remain unresolved or not reported when the evidence does not justify a stronger state.

False completeness is prohibited.

### R47 — Comparisons must be scientifically valid

Cross-paper and cross-dimensional explorers must not encourage comparisons that are scientifically meaningless or materially misleading because of incompatible scope, task, metric definition, baseline, units, test conditions, application context, or evidence role.

Invalid combinations must be prohibited or clearly warned where practical.

### R48 — Reproducibility of Atlas synthesis is itself a requirement

Important Atlas-level synthesis should be reconstructable from its eligible inputs, governing definitions, versions, and evidence links sufficiently to audit why the conclusion or displayed state exists.

## 13. Rule application across the end-to-end chain

These rules apply to every stage of the Task 1.2 objective chain:

**Primary sources**
→ **bibliographic identity**
→ **evidence/provenance**
→ **verified normalized paper-level records**
→ **ontology/taxonomy/relationships**
→ **cross-paper intelligence**
→ **Atlas synthesis/frameworks**
→ **current and future pages/tools**
→ **correction, extension, QA, versioning, and lifecycle governance**.

No downstream transformation is permitted to erase a distinction required upstream.

## 14. Implementation acceptance consequence

Any later architecture, schema, prototype, page, migration, ingestion workflow, synthesis system, or production release that violates one or more of R1–R48 fails scientific acceptance even if it is technically functional.

The later requirement/coverage matrix in Task 1.6 must map these rules to their relevant scientific owner, data representation, evidence requirement, QA/test obligation, and Atlas consumer surfaces.

Task 1.7 must not freeze Master Plan v1.0 if any non-negotiable rule is omitted from that coverage contract.

## 15. Deliberately deferred items

Task 1.3 does not define:

- the mechanics and lifecycle states for adding new taxonomy terms, aliases, relationships, or structural specialization → Task 1.4;
- numerical clean-mapping thresholds, scale-out percentages, or other operational acceptance gates → Task 1.5;
- the full formal requirement/coverage matrix → Task 1.6;
- the frozen Master Plan implementation contract → Task 1.7;
- technical entity/table/cardinality design → Task 2 / Task 12;
- detailed per-page dependency/disposition decisions → Task 9;
- detailed Computational Resources schema reconciliation → future explicit integration checkpoint.

These deferrals prevent Task 1.3 from silently preempting its downstream roadmap owners.

## 16. Task 1.3 verdict

**PASS**

The non-negotiable scientific rules are now explicit at a level sufficient to constrain all later Master Atlas architecture and implementation work without changing locked v0.7.

No locked v0.7 scientific document was modified.

No production Atlas `main` file was modified.

No Computational Resources Stage 1/2/3 branch was modified.

No production database, schema migration, ontology version, or page redesign was authorized.

**Exact next action:** Roadmap **Task 1.4 — Formalize controlled dynamic-extension rules**, using Task 1.3 R1–R48 as invariants that extension mechanisms are not allowed to violate.
