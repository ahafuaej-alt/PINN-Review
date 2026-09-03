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

### Task 1 — Build the formal Master Atlas Scientific Database & Implementation Plan
- 1.1 Reconcile the locked ontology, original pilot, 31-field Ecosystem, four frameworks, current Atlas architecture, verified bibliographic work, Dataset Manager, and Master Memory.
- 1.2 Define the complete project objective from source papers through evidence, structured knowledge, ontology, synthesis, frameworks, pages, and tools.
- 1.3 Formalize non-negotiable scientific rules.
- 1.4 Formalize controlled dynamic-extension rules.
- 1.5 Restore operational scale-out acceptance gates, including clean-mapping thresholds and provenance completeness.
- 1.6 Produce the formal requirement/coverage matrix.
- 1.7 Freeze Master Plan v1.0 as the implementation contract, not as a new ontology version.

### Task 2 — Design the complete permanent Atlas Architecture system
- 2.1 Define the full eight-level conceptual architecture plus global QA/versioning/governance.
- 2.2 Expand every major level into its complete internal components and fields.
- 2.3 Create version-controlled Mermaid architecture source.
- 2.4 Create version-controlled DBML/technical ERD source for the data model.
- 2.5 Design the interactive Atlas Architecture & Data Map page.
- 2.6 Reuse shared architecture definitions so dependent documentation/UI can be validated automatically.

### Task 3 — Define the complete Paper Profile
- 3.1 Define all first-class profile sections: bibliographic identity, study/extraction identity, application, problem, task, challenge, PINN type, methodology, contribution, claim-vs-demonstration, outcome, validation, evaluation, reproducibility, limitations, open problems, future work, diagnostic pathways, and evidence.
- 3.2 Expand each section field-by-field.
- 3.3 Define conditional profile sections and display logic.
- 3.4 Define evidence/provenance drill-down behavior.
- 3.5 Create a machine-readable profile specification in GitHub.
- 3.6 Create a Paper Profile UI mockup before implementation.

### Task 4 — Formalize PINN Type / Variant classification
- 4.1 Audit the existing Abbreviations/PINN-type material.
- 4.2 Define an extensible PINN type/family taxonomy.
- 4.3 Link PINN types to papers and evidence.
- 4.4 Link PINN types to applications, problems, methods, outcomes, and failures.
- 4.5 Specify the future PINN Type Explorer.

### Task 5 — Formalize methodological extensibility
- 5.1 Catalogue existing methodology dimensions.
- 5.2 Define learning/integration-type taxonomy.
- 5.3 Define coupled ML-method taxonomy such as CNN, GNN, RNN/LSTM, Transformer, GAN, Autoencoder, and RL.
- 5.4 Decide which concepts require specialized structure versus dynamic taxonomy/linking records.
- 5.5 Define evidence/recurrence criteria for future ontology promotion (for example v0.8).

### Task 6 — Define the complete Cross-Paper Intelligence system
- 6.1 Define the dimension catalogue.
- 6.2 Define a complete single-dimension explorer for each principal dimension.
- 6.3 Implement/specify the current 20 synthesis families.
- 6.4 Map all scientifically meaningful cross-dimensional comparison choices.
- 6.5 Define invalid or misleading combinations explicitly.
- 6.6 Store the comparison-choice map in version-controlled, machine-readable form where practical.
- 6.7 Design the interactive comparison/explorer UI.

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

Task 0 is sufficiently established to proceed. The exact next substantive task is **Task 1 — Build the formal Master Atlas Scientific Database & Implementation Plan**.
