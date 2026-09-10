# PINN Review Atlas — Controlled Master Roadmap

Status: planning/documentation only. This roadmap does not authorize production migration or modification of the live Atlas data model.

## Execution principles

- Preserve the locked scientific ontology and all historical evidence/provenance.
- One authoritative value should feed many derived Atlas views.
- Author claim, Atlas extraction, and Atlas synthesis remain distinct.
- Claimed solution and demonstrated solution remain distinct.
- Demonstrated, related, and potential applications remain distinct.
- Physical problem, computational task, and PINN methodological challenge remain distinct.
- Limitation, open problem, future work, and Atlas research gap remain distinct.
- Verified contradictions are preserved rather than force-resolved.
- New concepts enter through controlled taxonomy/relationship extension; structural specialization requires a governed future ontology version.
- AI-assisted extraction must be reviewed before it becomes verified scientific data.
- Do not skip directly to production implementation.

## Master execution order

### Task 0 — Preserve authority and project memory — DONE / ongoing
- 0.1 Keep the locked scientific ontology unchanged unless a governed version change is approved.
- 0.2 Maintain the Google Drive Master Architecture & Implementation Memory.
- 0.3 Record major architecture/platform decisions in that memory.
- 0.4 Preserve provenance/history for all prior ontology baselines.
- 0.5 Never change scientific meaning merely for implementation convenience.

### Task 1 — Build the formal Master Atlas Scientific Database & Implementation Plan — COMPLETE / MASTER PLAN v1.0 FROZEN
- 1.1 Reconcile the locked ontology, original pilot, 31-field Ecosystem, four frameworks, current Atlas architecture, verified bibliographic work, Dataset Manager, and Master Memory.
- 1.2 Define the complete project objective from source papers through evidence, structured knowledge, ontology, synthesis, frameworks, pages, and tools.
- 1.3 Formalize non-negotiable scientific rules.
- 1.4 Formalize controlled dynamic-extension rules.
- 1.5 Restore operational scale-out acceptance gates, including clean-mapping thresholds and provenance completeness.
- 1.6 Produce the formal requirement/coverage matrix.
- 1.7 Freeze Master Plan v1.0 as the implementation contract, not as a new ontology version.

Authoritative freeze record: `TASK-1.7-MASTER-PLAN-V1.0-FREEZE.md`.

### Task 2 — Design the complete permanent Atlas Architecture system — COMPLETE / PASS
- 2.1 Define the full eight-level conceptual architecture plus global QA/versioning/governance.
- 2.2 Expand every major level into its complete internal components and fields.
- 2.3 Create version-controlled Mermaid architecture source.
- 2.4 Create version-controlled DBML/technical ERD source for the data model.
- 2.5 Design the interactive Atlas Architecture & Data Map page.
- 2.6 Reuse shared architecture definitions so dependent documentation/UI can be validated automatically.

Task 2 shared architecture registry: `atlas-architecture-registry.json`.

Task 2 read-only drift validator: `validate-architecture-registry.py`.

### Task 3 — Define the complete Paper Profile — COMPLETE / PASS
- 3.1 Define all first-class profile sections: bibliographic identity, study/extraction identity, application, problem, task, challenge, PINN type, methodology, contribution, claim-vs-demonstration, outcome, validation, evaluation, reproducibility, limitations, open problems, future work, diagnostic pathways, and evidence. — **PASS / COMPLETE**
- 3.2 Expand each section field-by-field. — **PASS / COMPLETE**
- 3.3 Define conditional profile sections and display logic. — **PASS / COMPLETE**
- 3.4 Define evidence/provenance drill-down behavior. — **PASS / COMPLETE**
- 3.5 Create a machine-readable profile specification in GitHub. — **PASS / COMPLETE**
- 3.6 Create a Paper Profile UI mockup before implementation. — **PASS / COMPLETE**

Task 3 machine-readable profile contract: `atlas-paper-profile-spec.json`.

Task 3 read-only drift validator: `validate-paper-profile-spec.py`.

Task 3 non-production UI mockup: `mockups/paper-profile-ui-mockup.html`.

### Task 4 — Formalize PINN Type / Variant classification — COMPLETE / PASS
- 4.1 Audit the existing Abbreviations/PINN-type material. — **PASS / COMPLETE**
- 4.2 Define an extensible PINN type/family taxonomy. — **PASS / COMPLETE**
- 4.3 Link PINN types to papers and evidence. — **PASS / COMPLETE**
- 4.4 Link PINN types to applications, problems, methods, outcomes, and failures. — **PASS / COMPLETE**
- 4.5 Specify the future PINN Type Explorer. — **PASS / COMPLETE**

Task 4.2 taxonomy coordination source: `atlas-pinn-type-taxonomy-spec.json`.

Task 4.3 paper/evidence linkage coordination source: `atlas-pinn-type-paper-evidence-linkage-spec.json`.

Task 4.4 cross-dimensional linkage coordination source: `atlas-pinn-type-cross-dimensional-linkage-spec.json`.

Task 4.5 future explorer coordination source: `atlas-pinn-type-explorer-spec.json`.

### Task 5 — Formalize methodological extensibility — COMPLETE / PASS
- 5.1 Catalogue existing methodology dimensions. — **PASS / COMPLETE**
- 5.2 Define learning/integration-type taxonomy. — **PASS / COMPLETE**
- 5.2B Define the General Machine-Learning Learning-Paradigm Taxonomy. — **PASS / COMPLETE**
- 5.2C Perform the External Methodology Coverage / Gap Audit. — **PASS / COMPLETE**
- 5.3 Define the Model / Representation / Coupled-ML Architecture Taxonomy, informed by 5.2C. — **PASS / COMPLETE**
- 5.4 Decide which concepts require specialized structure versus dynamic taxonomy/linking records. — **PASS / COMPLETE**
- 5.5 Define evidence/recurrence criteria for future ontology promotion (for example v0.8). — **PASS / COMPLETE**

Task 5.1 human-readable catalogue: `TASK-5.1-METHODOLOGY-DIMENSION-CATALOGUE.md`.

Task 5.1 machine-readable coordination catalogue: `atlas-methodology-dimension-catalogue.json`.

Task 5.2 human-readable taxonomy: `TASK-5.2-LEARNING-INTEGRATION-TYPE-TAXONOMY.md`.

Task 5.2 machine-readable coordination taxonomy: `atlas-learning-integration-taxonomy-spec.json`.

Task 5.2B human-readable taxonomy: `TASK-5.2B-GENERAL-ML-LEARNING-PARADIGM-TAXONOMY.md`.

Task 5.2B machine-readable coordination taxonomy: `atlas-learning-paradigm-taxonomy-spec.json`.

Task 5.2B reference QA: `TASK-5.2B-REFERENCE-AUDIT-AND-MDPI-BIBLIOGRAPHY.md` and `atlas-learning-paradigm-reference-register.json`.

Task 5.2C human-readable audit: `TASK-5.2C-EXTERNAL-METHODOLOGY-COVERAGE-GAP-AUDIT.md`.

Task 5.2C machine-readable audit: `atlas-external-methodology-coverage-gap-audit.json`.

Task 5.3 human-readable taxonomy: `TASK-5.3-MODEL-REPRESENTATION-COUPLED-ML-ARCHITECTURE-TAXONOMY.md`.

Task 5.3 machine-readable coordination taxonomy: `atlas-model-representation-coupled-ml-taxonomy-spec.json`.

Task 5.3 machine-readable validation: `TASK-5.3-MACHINE-READABLE-VALIDATION.md`.

Task 5.4 human-readable structural decision: `TASK-5.4-STRUCTURAL-SPECIALIZATION-VS-DYNAMIC-TAXONOMY-DECISION.md`.

Task 5.4 machine-readable structural-decision contract: `atlas-structural-specialization-decision-spec.json`.

Task 5.4 machine-readable validation: `TASK-5.4-MACHINE-READABLE-VALIDATION.md`.

Task 5.5 human-readable promotion criteria: `TASK-5.5-EVIDENCE-RECURRENCE-ONTOLOGY-PROMOTION-CRITERIA.md`.

Task 5.5 machine-readable promotion criteria: `atlas-ontology-promotion-criteria-spec.json`.

Task 5.5 machine-readable validation: `TASK-5.5-MACHINE-READABLE-VALIDATION.md`.

Task 5.2B defines general learning paradigms as orthogonal facets rather than one scalar `learning_type`. Its ten facets cover supervision/feedback, label availability/acquisition, learning/update regime, adaptation/reuse, target-support/sample-scarcity, task organization, distributed/collaborative learning, model combination/ensemble, statistical learning character, and inference/generalization. Terms remain evidence-governed and extensible rather than exhaustively pre-enumerated.

Task 5.2C completed the methodology-comprehensiveness gate under the mandatory X → Y → Z protocol. All **37/37** internal Task 5.1 methodology dimensions were mapped to at least one external-search axis and received a final coverage disposition. The audit used **16** external search axes and explicitly dispositioned **15/15** materially new or externally emphasized dimensions discovered beyond the original X baseline.

The main 5.2C result is that the Atlas has **taxonomy/coordination gaps rather than a foundational architecture failure**. Important externally emphasized facets include prior/domain-knowledge source, knowledge representation, knowledge-integration locus, distributed-learning topology/aggregation/partition, lifecycle/deployment/inference organization, compression/efficiency transformations, NAS/HPO, and several cross-cutting method families. These do not authorize immediate locked-v0.7 fields; Task 5.4 determined their structural treatment.

Controlling principle for Tasks 5.2B–5.5: **comprehensive architecture = complete semantic dimensions + extensible vocabularies + extensible typed relations + controlled structural extension; it does not mean enumerating every known ML method.**

Task 5.3 formalizes model/representation/coupled-ML semantics as six orthogonal coordination facets: backbone model architecture; model composition; scientific representation; generative/latent model systems; coupled external ML/operator methods; and architecture lifecycle/search/transformation processes. It preserves the controlling separation **PINN type/family ≠ architecture family ≠ network configuration ≠ representation ≠ learning paradigm ≠ training protocol ≠ solver coupling ≠ application/equation specialization**. It creates no locked-v0.7 field, canonical promotion, global alias promotion, or paper-level assignment. Task 5.3 runtime machine validation passed with 0 errors.

Task 5.4 resolves the structural-specialization question with five disposition classes: retain existing specialized owner (`E1`), dynamic taxonomy assignment (`D1`), dynamic taxonomy plus typed/evidence-scoped relations (`D2`), derived projection (`P1`), and other established owner (`O1`). It explicitly dispositioned **37/37** Task 5.1 dimensions, **6/6** Task 5.2 integration/derived dimensions, **10/10** Task 5.2B facets, **15/15** Task 5.2C external dimensions, and **4/4** Task 5.3 handoffs.

Task 5.4 finds **no demonstrated X6 structural defect** in the Tasks 5.1–5.3 evidence package and therefore authorizes **0** new locked-v0.7 fields/entities and **0** v0.8 schema proposals. Seven monitor-only structural-watch sentinels are retained for future evidence: internal latent semantics; learned-model/component identity; temporal decomposition; collaborative/federated workflow; formulation detail; domain-decomposition enrichment; and transfer/adaptation event structure. These are reopening sentinels, not schema approvals.

Task 5.4 also requires future implementation to support evidence-backed N:M taxonomy assignments and evidence-scoped relation instances without treating their physical tables as new scientific authority. Physical relational design remains Task 12 work.

Task 5.5 closes the promotion-governance layer by defining the **Promotion Evidence Unit (PEU)**, ten universal promotion gates `PG-01`–`PG-10`, six promotion classes (`PR-TAX`, `PR-ALIAS`, `PR-CV`, `PR-REL`, `PR-STRUCT`, `PR-SEM`), anti-inflation/anti-gaming rules, candidate-version lock requirements, and explicit criteria for all seven Task 5.4 structural watches. Standard taxonomy/value/relation promotion uses independent evidence-bearing study-family recurrence rather than mention frequency; global aliasing additionally requires no incompatible corpus usage; relation-domain broadening adds an adversarial/negative sentinel. Structural promotion is stricter: it requires an actual H9/X6 representational failure, triggered either by one adversarial hard semantic/provenance/identity/multiplicity/linkage failure or by the same irreducible deficiency recurring in at least two independent study families. **Recurrence without X6 loss never justifies a schema field/entity.** Numeric thresholds create review eligibility only and never automatic canonicalization. Task 5.5 promotes nothing and creates no v0.8 candidate version.

### Task 6 — Define the complete Cross-Paper Intelligence system — IN PROGRESS
- 6.1 Define the dimension catalogue. — **PASS / COMPLETE**
- 6.2 Define a complete single-dimension explorer for each principal dimension. — **PASS / COMPLETE**
- 6.3 Implement/specify the current 20 synthesis families. — **PASS / COMPLETE**
- 6.4 Map all scientifically meaningful cross-dimensional comparison choices. — **PASS / COMPLETE**
- 6.5 Define invalid or misleading combinations explicitly. — **PASS / COMPLETE**
- 6.6 Store the comparison-choice map in version-controlled, machine-readable form where practical. — **PASS / COMPLETE**
- 6.7 Design the interactive comparison/explorer UI. — **NEXT / NOT STARTED**

Task 6.1 human-readable catalogue: `TASK-6.1-CROSS-PAPER-INTELLIGENCE-DIMENSION-CATALOGUE.md`.

Task 6.1 machine-readable coordination catalogue: `atlas-cross-paper-intelligence-dimension-catalogue.json`.

Task 6.1 machine-readable validation: `TASK-6.1-MACHINE-READABLE-VALIDATION.md`.

Task 6.1 defines **38 principal Cross-Paper Intelligence dimensions** (`XPD-01`..`XPD-38`) grouped into **9 semantic groups** (`DG-01`..`DG-09`) and maps all **20/20 frozen Master Plan intelligence families** (`IF-01`..`IF-20`) to one or more dimensions. Intelligence family, principal dimension, scientific field/entity, taxonomy term, relation type and page remain distinct concepts.

The dimension catalogue is analytical coordination metadata only. Each principal dimension retains its upstream scientific owner, evidence rule, analytical grain, value shape, denominator rule, drill-down path, multiplicity and invalid/misleading no-merge constraints. The global Atlas corpus size is not an automatic denominator for every analysis. Paper, record, assignment, result, relation, evidence, collaboration-edge and independent-study/PEU counts remain distinct.

`XPD-17 Methodology` is a composite analytical parent that reuses all **37/37** Task 5.1 methodology owner dimensions and references Task 5.2, 5.2B, 5.2C and 5.3 faceted coordination layers without introducing a scalar `learning_type`, a generic stored methodology field, or duplicate scientific authority. `XPD-37` Atlas Research Gap and `XPD-38` Atlas Research Opportunity remain governed Level-7 synthesis owners: L6 may analyze approved objects/candidate signals but cannot auto-create official gaps/opportunities.

Task 6.1 formalizes **15 Level-6 analytical invariants**, including frequency ≠ evidence strength, qualitative association ≠ effect size/causality, contradiction visibility, evidence-capable drill-down, explicit numerator/denominator/unit/scope/version, and continued Task 5.5 control over any ontology promotion. Machine-readable validation passed with **0 errors**; the repository payload is **67,614 bytes** with Git blob SHA `355bd6bca5d25c41e23c263176cf9bcf09fdc6d4`. A separate SHA-256 is not claimed because the connector did not expose an independently retrievable raw byte stream.

Task 6.2 human-readable explorer specification: `TASK-6.2-SINGLE-DIMENSION-EXPLORER-SPECIFICATION.md`.

Task 6.2 machine-readable explorer specification: `atlas-cross-paper-intelligence-single-dimension-explorer-spec.json`.

Task 6.2 machine-readable validation: `TASK-6.2-MACHINE-READABLE-VALIDATION.md`.

Task 6.2 defines **38/38 single-dimension explorer contracts** (`EXP-01`..`EXP-38`) aligned one-to-one with the principal `XPD-01`..`XPD-38` analytical dimensions while preserving their upstream scientific ownership. Each explorer declares or inherits its analytical grain, denominator basis, primary view, counting rules, evidence drill-down, provenance/version disclosure, qualified export and accessibility requirements.

Task 6.2 uses dimension-appropriate explorer archetypes rather than a universal chart. Temporal, geographic, network, taxonomy, structured-record, metric/result, evidence/integrity, typed-relation, diagnostic-pathway and curated-Level-7 dimensions therefore retain the counting and display semantics appropriate to their scientific unit. Status/provenance controls are interpretive controls only; scientific cross-dimension filters and comparisons remain explicitly zero until Task 6.4.

`XPD-17 Methodology` receives a mandatory owner-preserving child-dimension selector. It reuses Task 5.1 `MDC-01`..`MDC-37`, Task 5.2 integration facets, Task 5.2B learning-paradigm facets, Task 5.3 model/representation facets and Task 5.2C externally emphasized dimensions under Task 5.4 disposition rules. Every child keeps its own owner and denominator; pooled methodology frequency and a scalar generic `learning_type` are prohibited.

Task 6.2 further preserves high-risk no-merge/counting boundaries for dates, application roles, PINN types, claims/demonstrations, metrics/results, limitations/open problems/future work, diagnostic pathways, evidence states, conflicts, scientific relation types and Level-7 research-gap/opportunity objects. Machine-readable validation passed with **0 validation errors**; repository readback Git blob SHA is `267bcf0b25b03776442a0b3bdd6f450966a228df`.

Task 6.3 human-readable family specification: `TASK-6.3-CROSS-PAPER-INTELLIGENCE-SYNTHESIS-FAMILY-SPECIFICATION.md`.

Task 6.3 machine-readable family contract: `atlas-cross-paper-intelligence-synthesis-family-spec.json`.

Task 6.3 machine-readable validation: `TASK-6.3-MACHINE-READABLE-VALIDATION.md`.

Task 6.3 specifies all **20/20** frozen Cross-Paper Intelligence families (`IF-01`..`IF-20`) as Level-6 synthesis workspaces over the exact Task 6.1 member-dimension map and Task 6.2 constituent explorers. Families may coordinate dimension-specific coverage, evidence/integrity views and qualified narrative synthesis, but they create no new scientific owner and no paper-level scientific fact.

There is no default family-wide pooled denominator. Each constituent XPD retains its own owner, numerator, denominator, grain, eligibility, multiplicity and evidence semantics. Family narrative must identify the supporting member dimensions and evidence basis. Frequency, prominence and network centrality remain distinct from evidence strength/quality; contradictions and counterevidence remain visible; Task 5.5 remains the ontology-promotion gate.

Task 6.3 explicitly defines **0** arbitrary cross-dimensional scientific filters, **0** Task 6.4 comparison choices, **0** Task 6.5 invalid-combination entries, **0** Task 6.6 comparison-map entries and **0** Task 6.7 final UI routes. Machine validation passed with **0 errors**. The machine payload is **13,585 bytes**, repository Git blob SHA `a577010efbd613fb6cc4ce37e342327471a4bf91`, with local serialization SHA-256 `4c5e7bf3d64f482216893b1365ab2629f6146a6bc20d8856eb967a71289c9e1a`.

Task 6.4 human-readable comparison-choice map: `TASK-6.4-CROSS-DIMENSIONAL-COMPARISON-CHOICE-MAP.md`.

Task 6.4 coverage validation: `TASK-6.4-COMPARISON-CHOICE-COVERAGE-VALIDATION.md`.

Task 6.4 reviews the complete **703 unordered XPD-pair universe** and maps **667** scientifically meaningful comparison choices: **347 directly admissible descriptive (`D`)**, **265 conditional (`C`)**, and **55 curated Level-7 contextual (`L7`)** pairs. The remaining **36** pairs were explicitly reserved for Task 6.5 and were not prematurely labelled invalid by Task 6.4.

Task 6.4 defines nine governed comparison modes and requires every executed comparison to disclose both scientific owners, join path, analytical unit, numerator/denominator, eligibility/missingness policy, scope/context, evidence/provenance, integrity state, and ontology/normalization versions. N:M Cartesian inflation, paper-co-membership-as-scoped-linkage, incompatible metric/result pooling, frequency-as-strength, association-as-causality, co-occurrence-as-relation, geographic/network prominence-as-quality and L6-to-L7 automatic synthesis are prohibited. Task 6.4 validation passed with **0 errors**.

Task 6.5 human-readable invalid/misleading catalogue: `TASK-6.5-INVALID-MISLEADING-COMBINATION-CATALOGUE.md`.

Task 6.5 validation record: `TASK-6.5-INVALID-MISLEADING-VALIDATION.md`.

Task 6.5 classifies all **36/36** Task-6.4 residual pairs exactly once: **0 intrinsically invalid (`I`)**, **12 misleading by default (`M`)**, **6 narrowly recoverable (`K`)**, and **18 redirect/better-governed-path (`R`)**. The zero `I` count is intentional: no residual pair is scientifically meaningless under every conceivable governed question; hard invalidity is stated precisely at operation/inference level rather than invented at pair-label level.

Task 6.5 additionally defines **35** operation-level safeguards: **26 hard blocks (`HB-01..HB-26`)** and **9 misleading-unless-guarded rules (`MG-01..MG-09`)**. These govern denominator/unit substitution, N:M inflation, unscoped joins, independent-recurrence inflation, missing-state collapse, metric/result/context compatibility, claim/demonstration and generality evidence, owner/no-merge boundaries, methodology pooling, relation inference, evidence scope/support, L6/L7 separation, versioning, qualified export, temporal semantics, frequency/association interpretation, ecological/quality inference, sparse strata and edge/event-count interpretation. Validation passed with **0 errors**.

Task 6.6 machine-readable comparison/guard contract: `atlas-cross-paper-intelligence-comparison-guard-map.json`.

Task 6.6 machine-readable validation: `TASK-6.6-MACHINE-READABLE-COMPARISON-GUARD-VALIDATION.md`.

Task 6.6 serializes the complete sealed Task-6.4/6.5 governance surface in a compact higher-ID adjacency-row encoding. Expansion yields exactly **703/703** unordered pairs: **347 D**, **265 C**, **55 L7**, **0 I**, **12 M**, **6 K**, and **18 R**, with no duplicates, self-pairs, out-of-range IDs or source-decision mismatches. The contract also serializes `CM-01..CM-09`, `JP-01..JP-07`, `HB-01..HB-26`, `MG-01..MG-09`, residual recovery/redirect profiles, owner/grain/denominator source references, execution qualifiers and Task 6.7 handoff constraints.

The final Task 6.6 JSON is **15,713 bytes**, Git blob SHA `27d28653e9d7e5d845f75255839cbc13db3cbce4`, SHA-256 `668c823a757526fb1bf615c1080f8a93ef535af8015c03e6b77113a9add6bb6e`. GitHub readback matched the pre-write Git blob SHA exactly. Deterministic validation executed **4,253 assertions** with **0 errors**. Task 6.7 UI/routes remain deliberately unstarted.

### Task 7 — Fully specify the four Atlas frameworks and matrix connection
- 7.1 Map Design Stack & Feedback Loops.
- 7.2 Map Co-Design Framework.
- 7.3 Define every cell of the 14 × 7 / 98-cell Design–Performance matrix with synthesis metadata, confidence, evidence, supporting/contradictory papers, scope, and version.
- 7.4 Map Failure-Mode Diagnostics from paper-level pathways to Atlas synthesis.
- 7.5 Preserve the paper-evidence versus Atlas-synthesis boundary.

### Task 8 — Explore the Framework Builder idea
- 8.1 Define selectable entities/dimensions.
- 8.2 Define evidence-supported relationship rules.
- 8.3 Support filters by application, problem, PINN type, time, and related dimensions.
- 8.4 Show supporting and contradictory evidence.
- 8.5 Distinguish official Atlas frameworks from user exploratory frameworks.
- 8.6 Decide later whether this is a v1 or post-v1 feature.

### Task 9 — Audit every existing Atlas page
- 9.1 Inventory every page/tool from the repository/site rather than memory alone.
- 9.2 For each page, identify displayed data, current source files, derived computations, writes, and paper IDs.
- 9.3 Classify each page as authoritative editor, database consumer, synthesis consumer, derived analytical view, or independent linked resource.
- 9.4 Identify duplicated values.
- 9.5 Define future single-source ownership.
- 9.6 Produce an Atlas page/data dependency graph.

Task 9 must use `ATLAS-PRODUCTION-SURFACE-REGISTER.md` as the current-surface baseline and must add every additional production route/page/tool/generated view/deep-link surface/Atlas-facing consumer discovered at audit time. The 26-route baseline is not the final target information architecture and not a route ceiling.

### Task 10 — Design metadata history and correction propagation
- 10.1 Treat verified bibliographic values as authoritative baseline input.
- 10.2 Define metadata-history records: old/new value, reason, source, reviewer, date, verification state.
- 10.3 Define dependent-view refresh logic.
- 10.4 Define rollback and audit behavior.

### Task 11 — Choose the database platform
- 11.1 Estimate structured database size for 853 papers and future growth.
- 11.2 Define security/access requirements.
- 11.3 Define provider-independent backup/export requirements.
- 11.4 Compare Supabase/PostgreSQL, Neon/PostgreSQL, and other justified alternatives.
- 11.5 Test ChatGPT/connector access where available and authorized.
- 11.6 Measure practical free-tier/runtime/API limits in a prototype.
- 11.7 Make the platform decision; PostgreSQL remains the preferred database model unless evidence indicates otherwise.

### Task 12 — Design the actual PostgreSQL relational model
- 12.1 Core paper tables.
- 12.2 Paper scientific tables.
- 12.3 Evidence/provenance tables.
- 12.4 Dynamic taxonomy tables.
- 12.5 Relationship registry and link tables.
- 12.6 PINN-type taxonomy tables.
- 12.7 History/version/audit tables.
- 12.8 Atlas synthesis/framework tables.
- 12.9 Derived database views.
- 12.10 API/query design.
- 12.11 SQL migration/version policy.

### Task 13 — Build a non-production database prototype
- 13.1 Create an isolated prototype DB.
- 13.2 Implement the candidate schema.
- 13.3 Load a small heterogeneous set of already verified papers.
- 13.4 Test the complete Paper Profile.
- 13.5 Test single-dimension queries.
- 13.6 Test cross-dimensional queries.
- 13.7 Test evidence traceability.
- 13.8 Test corrections/version history.
- 13.9 Test adding a new taxonomy term without redesigning the schema.
- 13.10 Simulate a governed ontology migration.

### Task 14 — Build the automated Paper Ingestion / Extraction / Review tool
- 14.1 Add-paper workflow.
- 14.2 Locate/link source PDF.
- 14.3 AI-assisted structured extraction against the current ontology.
- 14.4 Exact provenance extraction.
- 14.5 Canonical ontology matching.
- 14.6 Alias/new-term/relationship proposals.
- 14.7 Ambiguity/conflict detection.
- 14.8 Human review interface with accept/edit/reject/needs-evidence/needs-ontology-review states.
- 14.9 Verification QA.
- 14.10 Publish only accepted records.
- 14.11 Identify and refresh affected Atlas outputs.
- 14.12 Never treat unreviewed AI output as verified scientific data.

### Task 15 — Build the prototype Atlas Architecture/Data Map page
- 15.1 Conceptual architecture view.
- 15.2 Technical ERD/DBML view.
- 15.3 Requirement/coverage matrix view.
- 15.4 Paper Profile architecture view.
- 15.5 Cross-paper synthesis choice map.
- 15.6 Design–Performance matrix view.
- 15.7 Atlas page/data dependency view.
- 15.8 Version/change status view.

### Task 16 — Build prototype Paper Profile page
- 16.1 Complete UI structure.
- 16.2 Evidence/provenance drawer.
- 16.3 Expandable detailed methodology.
- 16.4 Related-paper links.
- 16.5 Cross-links to applications, PINN types, metrics, frameworks, gaps, diagnostics, and computational resources.
- 16.6 Mobile-responsive design.

### Task 17 — Prototype synthesis/explorer system
- 17.1 Single-dimension explorer.
- 17.2 Cross-dimensional explorer.
- 17.3 Side-by-side selected-dimension comparison.
- 17.4 Evidence-backed counts and summaries.
- 17.5 Contradictory-evidence visibility.
- 17.6 Temporal filtering.
- 17.7 Application/PINN-type/method and other governed filters.

### Task 18 — Reconcile prototype against all existing Atlas pages
- 18.1 References regression.
- 18.2 Realm/publication analytics regression.
- 18.3 Dataset Manager regression.
- 18.4 Metrics Explorer regression.
- 18.5 Framework pages regression.
- 18.6 Computational Resources regression.
- 18.7 Navigation/search/deep-link regression.
- 18.8 Mobile regression.

### Task 19 — Production migration plan
- 19.1 Define migration order.
- 19.2 Define staging branch/environment.
- 19.3 Back up current Atlas data.
- 19.4 Import the verified bibliographic baseline.
- 19.5 Migrate already verified pilot scientific records.
- 19.6 Run equivalence checks.
- 19.7 Define rollback.
- 19.8 Deploy only after all required checks pass.

### Task 20 — Pilot production scientific-data scale-out
- 20.1 Use the already verified 36-paper corpus first.
- 20.2 Verify every evidence object after migration.
- 20.3 Verify generated Paper Profiles.
- 20.4 Verify ontology mapping.
- 20.5 Verify synthesis queries.
- 20.6 Verify historical evidence remains unchanged.
- 20.7 Confirm operational scale-out gates before wider extraction.

### Task 21 — Full 853-paper controlled extraction
- 21.1 Create controlled extraction batches.
- 21.2 Generate automated extraction proposals.
- 21.3 Perform scientific review.
- 21.4 Perform ontology/taxonomy review.
- 21.5 Run QA.
- 21.6 Create a checkpoint after each batch.
- 21.7 Publish only verified batches.
- 21.8 Recompute affected synthesis.
- 21.9 Monitor clean-mapping rate and structural gaps.
- 21.10 Create a future ontology version only if scientifically justified.

### Task 22 — Ongoing Atlas lifecycle
- 22.1 New-paper addition.
- 22.2 Metadata correction.
- 22.3 Evidence correction.
- 22.4 Ontology evolution.
- 22.5 Taxonomy maintenance.
- 22.6 Framework updates.
- 22.7 Matrix updates.
- 22.8 Synthesis regeneration.
- 22.9 Database backups/exports.
- 22.10 Releases/data versions.
- 22.11 Quality audits.
- 22.12 New Atlas tools/pages.

## Phase grouping

- **Foundation / specification:** Tasks 0–10
- **Infrastructure design / prototype DB:** Tasks 11–13
- **Tool and UI prototypes:** Tasks 14–18
- **Production migration / scale-out:** Tasks 19–21
- **Continuous lifecycle:** Task 22

## Current position

Task 1 is **COMPLETE** and Master Plan v1.0 remains **FROZEN as the implementation contract, not as a new ontology version**. Scientific authority remains locked Drive `v0.7-pilot-atlas-prefreeze`.

Task 2 is **COMPLETE / PASS**. Tasks 2.1–2.6 are **PASS / COMPLETE**.

Task 3 is **COMPLETE / PASS**. Tasks 3.1–3.6 are **PASS / COMPLETE**.

Task 4 is **COMPLETE / PASS**. Tasks 4.1–4.5 are **PASS / COMPLETE**.

Task 5 is **COMPLETE / PASS**. Tasks 5.1–5.5 are **PASS / COMPLETE**.

Task 5.1 catalogues the existing methodology ownership surface without changing science: locked PP-08/data-context owners, the 25 controlled-vocabulary method-dimension labels, consolidated training-protocol subdimensions, physical-constraint and reproducibility boundaries, and composite/deferred dimensions that later Task 5 work must resolve without premature schema promotion.

Task 5.2 defines a faceted physics/knowledge learning-integration taxonomy over existing owners. It preserves the six locked `physics_integration_mode[]` values; separately governs transfer/reuse/adaptation, multi-fidelity integration, and operator/solver integration; defines derived query facets for integration locus and knowledge/source role; and explicitly prevents integration taxonomy from becoming a second PINN-type hierarchy or a coupled-ML-backbone taxonomy.

Task 5.2B defines the general machine-learning learning-paradigm layer from authoritative external terminology and peer-reviewed taxonomy/review literature. It uses ten orthogonal facets rather than one scalar learning type and preserves explicit boundaries among supervision, label acquisition, update regime, adaptation/reuse, few-/zero-shot support, task organization, federated/collaborative learning, ensemble/model combination, generative/discriminative character, and inductive/transductive generalization semantics.

Task 5.2C completed the entire Atlas methodology external-coverage audit against authoritative external taxonomies/reviews and the curated full-text Drive resources. It passed the hard X → Y → Z gate: **37/37** internal dimensions received external-search and final-matrix coverage; **15/15** new external dimensions were explicitly dispositioned. The audit found no foundational architecture failure and authorized no locked-v0.7 schema mutation. Its main consequence is a controlled set of taxonomy/relationship and future-structure candidates for Tasks 5.3–5.5.

Task 5.3 completed the model/representation/coupled-ML architecture taxonomy using six orthogonal coordination facets. It preserves backbone architecture, composition, representation, generative/latent system semantics, coupled external ML/operator methods, and lifecycle/search/transformation processes as separable concepts. It also preserves the corrected ownership/crosswalk rules: training protocol is `MDC-13`; Task 5.2C compression is `EX-07`; NAS/HPO is `EX-08`; and internal learned latent semantics are not forced into `model_variable_representation[]` unless they are explicit model interfaces. The corrected machine-readable contract passed runtime parse/consistency validation with **0 errors**.

Task 5.4 completed the specialized-structure decision. It retains locked v0.7 specialized owners where structural need has already been proved and otherwise uses governed dynamic taxonomy assignments, evidence-scoped typed/provisional relations, derived projections or another existing scientific owner. It found **0 demonstrated X6 schema defects**, authorizes **0 v0.8 schema proposals**, and preserves seven explicit structural-watch sentinels with evidence-based reopening conditions. The Task 5.4 machine-readable payload passed runtime validation with **0 errors** and its computed Git blob SHA matched GitHub readback byte-for-byte.

Task 5.5 completed the evidence/recurrence promotion criteria. Recurrence is now counted through independent study-family-scoped PEUs rather than raw term mentions; six promotion classes and ten universal gates distinguish taxonomy/value/alias/relation promotion from semantic refactoring and the much stricter X6 structural path. All seven Task 5.4 structural watches are bound to the H9/X6 structural rule. Meeting a numeric recurrence minimum creates eligibility for governed scientific review only; it never automatically promotes a concept. No taxonomy term, alias, value, relation, schema object, paper assignment or v0.8 candidate version was promoted by Task 5.5. The machine-readable Task 5.5 payload passed runtime parse/consistency validation with **0 errors** and byte-level Git readback matched the computed blob SHA.

The future Paper Profile may expose evidence-backed derived methodology facets under PP-08, including learning paradigm, knowledge source/representation/integration locus, architecture/model family and distributed-learning organization. These are projections over governed owners; no silent `learning_type` or other locked-v0.7 structural change is authorized.

Task 5.1 coordination sources are `TASK-5.1-METHODOLOGY-DIMENSION-CATALOGUE.md` and `atlas-methodology-dimension-catalogue.json`.

Task 5.2 coordination sources are `TASK-5.2-LEARNING-INTEGRATION-TYPE-TAXONOMY.md` and `atlas-learning-integration-taxonomy-spec.json`.

Task 5.2B coordination sources are `TASK-5.2B-GENERAL-ML-LEARNING-PARADIGM-TAXONOMY.md`, `atlas-learning-paradigm-taxonomy-spec.json`, `TASK-5.2B-REFERENCE-AUDIT-AND-MDPI-BIBLIOGRAPHY.md` and `atlas-learning-paradigm-reference-register.json`.

Task 5.2C coordination sources are `TASK-5.2C-EXTERNAL-METHODOLOGY-COVERAGE-GAP-AUDIT.md` and `atlas-external-methodology-coverage-gap-audit.json`.

Task 5.3 coordination sources are `TASK-5.3-MODEL-REPRESENTATION-COUPLED-ML-ARCHITECTURE-TAXONOMY.md`, `atlas-model-representation-coupled-ml-taxonomy-spec.json` and `TASK-5.3-MACHINE-READABLE-VALIDATION.md`.

Task 5.4 coordination sources are `TASK-5.4-STRUCTURAL-SPECIALIZATION-VS-DYNAMIC-TAXONOMY-DECISION.md`, `atlas-structural-specialization-decision-spec.json` and `TASK-5.4-MACHINE-READABLE-VALIDATION.md`.

Task 5.5 coordination sources are `TASK-5.5-EVIDENCE-RECURRENCE-ONTOLOGY-PROMOTION-CRITERIA.md`, `atlas-ontology-promotion-criteria-spec.json` and `TASK-5.5-MACHINE-READABLE-VALIDATION.md`.

These Task 5 coordination sources are not scientific authority and cannot independently create locked scientific fields, terms, assignments or relations.

Evidence-driven revision remains controlling: later authoritative external research or primary-source evidence may revise the candidate dimension universe, normalization, dimension placement, relationships, applicability or structural-promotion judgment, but any revision must be evidence-backed, explicit, versioned/history-preserving and traceable; raw wording, locators and prior decisions must not be silently erased.

Task 6 is **IN PROGRESS**. Tasks 6.1–6.6 are **PASS / COMPLETE**. Task 6.7 is **NEXT / NOT STARTED**.

Task 6.1 defines 38 principal analytical dimensions across nine semantic groups while preserving the 20 frozen Master Plan intelligence families as higher-order families rather than forcing a one-family/one-field model. Every material future L6 aggregate must preserve its upstream owner/evidence, declare its analytical unit and denominator, retain multiplicity and conflict states, and support evidence-capable drill-down.

Task 6.1 coordination sources are `TASK-6.1-CROSS-PAPER-INTELLIGENCE-DIMENSION-CATALOGUE.md`, `atlas-cross-paper-intelligence-dimension-catalogue.json` and `TASK-6.1-MACHINE-READABLE-VALIDATION.md`.

Task 6.2 defines one complete owner-preserving explorer contract for each `XPD-01`..`XPD-38`, with dimension-appropriate visualization archetypes, explicit count/denominator semantics, evidence drill-down, qualified export and accessibility. Scientific cross-dimension filtering/comparison remains outside Task 6.2. `XPD-17 Methodology` is implemented conceptually as a child-owner selector, never as pooled methodology frequency.

Task 6.2 coordination sources are `TASK-6.2-SINGLE-DIMENSION-EXPLORER-SPECIFICATION.md`, `atlas-cross-paper-intelligence-single-dimension-explorer-spec.json` and `TASK-6.2-MACHINE-READABLE-VALIDATION.md`.

Task 6.3 specifies the 20 frozen intelligence families as synthesis workspaces over the Task 6.1 dimension map and Task 6.2 explorers. It preserves per-dimension denominators and evidence, permits only qualified family-level synthesis, and explicitly defers cross-dimensional comparison choices to Task 6.4.

Task 6.3 coordination sources are `TASK-6.3-CROSS-PAPER-INTELLIGENCE-SYNTHESIS-FAMILY-SPECIFICATION.md`, `atlas-cross-paper-intelligence-synthesis-family-spec.json` and `TASK-6.3-MACHINE-READABLE-VALIDATION.md`.

Task 6.4 maps the complete cross-dimensional pair universe at the human-readable governance layer. Of 703 unordered XPD pairs, 667 are mapped as scientifically meaningful under direct-descriptive, conditional, or curated-Level-7 semantics; 36 were reserved for Task 6.5 classification. Every comparison retains owner, join, unit, denominator, eligibility, scope, provenance and warning metadata.

Task 6.4 coordination sources are `TASK-6.4-CROSS-DIMENSIONAL-COMPARISON-CHOICE-MAP.md` and `TASK-6.4-COMPARISON-CHOICE-COVERAGE-VALIDATION.md`.

Task 6.5 resolves the complete residual surface without weakening Task 6.4. The 36 residual pairs are classified as 12 misleading-by-default, 6 narrowly recoverable and 18 redirect/better-governed-path cases; no pair-level intrinsic-invalid classification is fabricated. Separately, 26 hard-block operations and 9 misleading-inference guards prevent unsafe denominator, unit, linkage, metric, evidence, relation, owner, temporal, bibliographic and Level-7 interpretations even for otherwise admissible pairs.

Task 6.5 coordination sources are `TASK-6.5-INVALID-MISLEADING-COMBINATION-CATALOGUE.md` and `TASK-6.5-INVALID-MISLEADING-VALIDATION.md`.

Task 6.6 serializes the complete Task 6.4/6.5 comparison and guard system in `atlas-cross-paper-intelligence-comparison-guard-map.json` (`task-6.6-v1.0.0`). The compact higher-ID adjacency encoding represents every one of the 703 unordered pairs exactly once and preserves the seven pair classes, comparison modes, join policies, residual recovery/redirect behavior, hard blocks, misleading guards, source pins and execution qualifiers without creating a new scientific owner.

Task 6.6 validation is recorded in `TASK-6.6-MACHINE-READABLE-COMPARISON-GUARD-VALIDATION.md`: **4,253 deterministic assertions, 0 errors**, with repository Git blob SHA `27d28653e9d7e5d845f75255839cbc13db3cbce4` matching the pre-write computed Git blob exactly. `TASK-6-STATUS.md` is the current Task 6 progress register.

These Task 6.1–6.6 coordination sources are not scientific authority and cannot independently create locked scientific fields, terms, assignments, relations or Level-7 synthesis objects.

**STOP boundary:** Tasks 6.1–6.6 are COMPLETE / PASS. Task 6.7 has not started.

The exact next substantive roadmap task, only when separately authorized, is **Task 6.7 — design the interactive comparison/explorer UI that consumes the sealed Task 6.1–6.6 contracts without reinterpreting scientific ownership, pair admissibility, operation guards, denominators, evidence/provenance or Level-7 boundaries**.