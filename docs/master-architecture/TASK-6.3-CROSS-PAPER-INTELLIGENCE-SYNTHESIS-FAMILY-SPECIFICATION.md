# Task 6.3 — Cross-Paper Intelligence Synthesis-Family Specification

Status: **PASS / COMPLETE**

Date: 2026-09-10

Branch: `docs/master-atlas-roadmap`

Starting head: `6336968da56e7ef134856d5de0d51abf7b761ee3`

Locked scientific authority: Google Drive `v0.7-pilot-atlas-prefreeze`.

Frozen implementation contract: Master Plan v1.0.

Machine-readable dependencies:
- `atlas-cross-paper-intelligence-dimension-catalogue.json` (`task-6.1-v1.0.0`)
- `atlas-cross-paper-intelligence-single-dimension-explorer-spec.json` (`task-6.2-v1.0.0`)

## 1. Purpose and hard boundary

Task 6.3 specifies the frozen **20 Cross-Paper Intelligence synthesis families** `IF-01`–`IF-20`.

The controlling distinction is:

> **intelligence family ≠ principal dimension ≠ scientific field/entity ≠ taxonomy term ≠ relation type ≠ comparison choice ≠ page.**

A family is a Level-6 analytical workspace that coordinates one or more already governed Task 6.1 principal dimensions and their Task 6.2 explorers. It creates no new scientific owner and no new paper-level scientific fact.

Task 6.3 may coordinate constituent views, coverage, integrity and qualified narrative synthesis. It does **not** yet define arbitrary scientific XPD×XPD filters, pairwise/multivariate comparison choices, contingency tables, effect-size estimation, causal inference, ranking one dimension by another, the Task 6.5 invalid-combination catalogue, the Task 6.6 comparison-choice map, or the final Task 6.7 interactive UI.

## 2. Shared family contract

Every family must expose eight logical surfaces:

1. **Identity/scope header** — IF ID, governed label, member XPDs, family purpose, ontology/normalization version.
2. **Member-dimension register** — exact Task 6.1 XPD membership; no hidden dimensions.
3. **Constituent explorer panels** — reuse the relevant Task 6.2 explorer contract(s); do not duplicate scientific ownership.
4. **Family coverage ledger** — show each member dimension's eligible population, numerator, denominator, principal unit and missingness states independently.
5. **Evidence/integrity ledger** — preserve evidence source role, verification/support, contradictions, counterevidence, ambiguity and unresolved states.
6. **Qualified family narrative** — prose synthesis is allowed only when every material statement identifies the supporting constituent dimension(s), scope and evidence basis.
7. **Provenance/version footer** — family-spec version plus member ontology/normalization state.
8. **Scientifically qualified export** — export the family manifest and constituent outputs with dimension-specific denominators/provenance; never export an unlabeled family-wide count as if all members shared one unit.

## 3. Denominator and synthesis invariants

There is **no default family-wide pooled denominator**.

For every family:
- each constituent XPD retains its own numerator, denominator, grain, eligibility and multiplicity;
- `N = 853` is never inherited automatically;
- paper, record, assignment, result, relation, evidence, collaboration-edge, curated-object and independent-study/PEU counts remain distinct;
- repeated mentions inside one study family do not create independent recurrence;
- frequency, prominence or network centrality is not evidence strength, validity, importance or quality;
- qualitative association is not effect size and does not establish causality;
- family synthesis must preserve contradictions and counterevidence rather than collapse them into a consensus score;
- Task 5.5 remains the only ontology-promotion gate;
- Level-6 family synthesis cannot silently create official Level-7 gaps, opportunities or framework conclusions.

## 4. Permitted Task 6.3 operations

Task 6.3 permits:
- navigation among member XPDs;
- reuse of single-dimension explorers;
- dimension-specific coverage summaries;
- dimension-specific distributions/structures;
- family evidence and integrity ledgers;
- qualified family narrative assembled from explicit constituent results;
- family export preserving per-dimension denominator/evidence/version semantics.

The following remain deferred:
- arbitrary cross-dimensional scientific filtering;
- pairwise or multivariate comparison-choice mapping;
- XPD×XPD contingency tables;
- cross-dimensional association/effect-size analysis;
- causal inference;
- ranking a scientific dimension by another scientific dimension;
- final family/explorer routes and interactive UI.

## 5. Complete family register — 20/20

| ID | Family | Task 6.1 member dimensions | Class |
|---|---|---|---|
| IF-01 | Application Intelligence | XPD-07, XPD-08, XPD-09 | coordinated multi-dimension |
| IF-02 | Problem Intelligence | XPD-09, XPD-10, XPD-11, XPD-12, XPD-13, XPD-15 | coordinated multi-dimension |
| IF-03 | Computational-Task Intelligence | XPD-14 | single |
| IF-04 | PINN-Type Intelligence | XPD-16 | single |
| IF-05 | Methodology Intelligence | XPD-13, XPD-17 | coordinated multi-dimension |
| IF-06 | Contribution Intelligence | XPD-18 | single |
| IF-07 | Outcome Intelligence | XPD-19, XPD-20, XPD-21, XPD-22 | coordinated multi-dimension |
| IF-08 | Validation Intelligence | XPD-23, XPD-24 | coordinated multi-dimension |
| IF-09 | Evaluation Intelligence | XPD-25, XPD-26 | coordinated multi-dimension |
| IF-10 | Reproducibility Intelligence | XPD-03, XPD-27, XPD-28 | coordinated multi-dimension |
| IF-11 | Limitations Intelligence | XPD-29 | single |
| IF-12 | Open-Problem Intelligence | XPD-30 | single |
| IF-13 | Future-Work Intelligence | XPD-31 | single |
| IF-14 | Research-Gap Intelligence | XPD-37 | single |
| IF-15 | Research-Opportunity Intelligence | XPD-38 | single |
| IF-16 | Failure-Mode / Diagnostic Intelligence | XPD-15, XPD-22, XPD-29, XPD-30, XPD-32 | coordinated multi-dimension |
| IF-17 | Evidence Intelligence | XPD-02, XPD-03, XPD-19, XPD-20, XPD-33, XPD-34, XPD-35 | coordinated multi-dimension |
| IF-18 | Relationship Intelligence | XPD-36 | single |
| IF-19 | Temporal Intelligence | XPD-01, XPD-02 | coordinated multi-dimension |
| IF-20 | Domain / Geographic / Collaboration Intelligence | XPD-04, XPD-05, XPD-06, XPD-08 | coordinated multi-dimension |

## 6. Family-specific contracts

### IF-01 — Application Intelligence

**Member dimensions:** `XPD-07`, `XPD-08`, `XPD-09`

**Purpose:** Coordinate application evidence role, application taxonomy and physical-system context without collapsing them.

**Family questions:** What application roles are represented in the governed corpus?; What application taxonomy assignments are represented?; What physical systems are represented alongside the application evidence landscape?

**Synthesis rule:** This family reuses the Task 6.2 explorer(s) for its member dimension(s). Each member keeps its own scientific owner, eligibility, grain, multiplicity and denominator. Family-level narrative may summarize explicit constituent results, but it must disclose which member dimension(s) support each statement and must preserve contradiction/counterevidence.

**No-merge / no-overreach constraints:** `application_role_ne_taxonomy`, `application_ne_physical_system`, `demonstrated_related_potential_review_scoped_separate`.

### IF-02 — Problem Intelligence

**Member dimensions:** `XPD-09`, `XPD-10`, `XPD-11`, `XPD-12`, `XPD-13`, `XPD-15`

**Purpose:** Coordinate the scientific-problem landscape across physical systems, problems, governing equations, characteristics, data regimes and PINN challenges while preserving each owner.

**Family questions:** What physical systems and physical problems are represented?; Which equation families and problem characteristics are represented?; Which data regimes and PINN challenges are reported within the problem landscape?

**Synthesis rule:** This family reuses the Task 6.2 explorer(s) for its member dimension(s). Each member keeps its own scientific owner, eligibility, grain, multiplicity and denominator. Family-level narrative may summarize explicit constituent results, but it must disclose which member dimension(s) support each statement and must preserve contradiction/counterevidence.

**No-merge / no-overreach constraints:** `physical_problem_ne_computational_task`, `physical_problem_ne_pinn_challenge`, `problem_characteristic_ne_failure`, `equation_family_ne_problem_class`.

### IF-03 — Computational-Task Intelligence

**Member dimensions:** `XPD-14`

**Purpose:** Provide the family-level analytical view of computational tasks and scientific objectives without reclassifying problems or challenges as tasks.

**Family questions:** What computational tasks or scientific objectives are represented?; What is the eligible coverage and evidence basis for each task/objective assignment?

**Synthesis rule:** This family reuses the Task 6.2 explorer for `XPD-14`; no second scientific owner is introduced.

**No-merge / no-overreach constraints:** `computational_task_ne_physical_problem`, `computational_task_ne_pinn_challenge`.

### IF-04 — PINN-Type Intelligence

**Member dimensions:** `XPD-16`

**Purpose:** Provide the family-level view of governed PINN type/family assignments using the Task 4 taxonomy and explorer safeguards.

**Family questions:** Which verified/scoped PINN types or families are represented?; What lifecycle, support and collision states accompany those assignments?

**Synthesis rule:** The family reuses the Task 6.2 `XPD-16` explorer and inherits Task 4.5 lifecycle/collision/evidence controls.

**No-merge / no-overreach constraints:** `pinn_type_ne_architecture`, `raw_term_occurrence_ne_verified_type_assignment`, `lexical_similarity_ne_alias_or_hierarchy`.

### IF-05 — Methodology Intelligence

**Member dimensions:** `XPD-13`, `XPD-17`

**Purpose:** Coordinate data/observation regime with the owner-preserving methodology parent without creating a generic methodology variable or pooled method frequency.

**Family questions:** Which data/observation regimes are represented?; Which governed methodology child dimensions are available for analysis?; What evidence and applicability govern each selected methodology child?

**Synthesis rule:** `XPD-17` remains a parent over governed Task 5 child owners. The family may coordinate member panels but cannot pool heterogeneous methodology child dimensions.

**No-merge / no-overreach constraints:** `data_regime_ne_methodology`, `no_pooled_methodology_frequency`, `no_scalar_learning_type`, `child_owner_denominator_preserved`.

### IF-06 — Contribution Intelligence

**Member dimensions:** `XPD-18`

**Purpose:** Provide the family-level view of reported contributions/innovations while preserving structured contribution records and evidence.

**Family questions:** What contribution or innovation types are represented?; What evidence supports each contribution record?

**Synthesis rule:** The family reuses the Task 6.2 `XPD-18` explorer.

**No-merge / no-overreach constraints:** `contribution_ne_outcome`, `contribution_ne_claim`, `novelty_frequency_ne_importance`.

### IF-07 — Outcome Intelligence

**Member dimensions:** `XPD-19`, `XPD-20`, `XPD-21`, `XPD-22`

**Purpose:** Coordinate claim-versus-demonstration, generality/transfer scope, outcome/resolution and reported advantages/disadvantages/failures without merging these semantics.

**Family questions:** What claim-versus-demonstration states are reported?; What generality or transfer scope is claimed or tested?; What outcomes and reported advantages/disadvantages/failures are recorded?

**Synthesis rule:** Member panels may be narrated together, but no constituent state substitutes for another and missing demonstration is not a negative result by default.

**No-merge / no-overreach constraints:** `claim_ne_demonstration`, `generality_claim_ne_generality_evidence`, `contribution_ne_outcome`, `reported_failure_ne_diagnostic_cause`, `missing_demonstration_ne_negative_result`.

### IF-08 — Validation Intelligence

**Member dimensions:** `XPD-23`, `XPD-24`

**Purpose:** Coordinate validation strategy and validation reference/data/baseline context while keeping validation distinct from evaluation.

**Family questions:** What validation strategies are reported?; What references, data sources or baselines support validation?

**Synthesis rule:** Validation strategy and reference/baseline context retain separate records/denominators.

**No-merge / no-overreach constraints:** `validation_ne_evaluation`, `baseline_identity_ne_metric_result`, `strategy_ne_quality_score`.

### IF-09 — Evaluation Intelligence

**Member dimensions:** `XPD-25`, `XPD-26`

**Purpose:** Coordinate metric identity with context-rich evaluation observations while prohibiting naive pooling of heterogeneous metrics/results.

**Family questions:** Which evaluation metrics are used?; Which result observations/test cases are reported under compatible definitions and contexts?

**Synthesis rule:** Metric identity and observations are coordinated but never merged. Statistical/result pooling remains disabled unless future comparison logic explicitly establishes compatibility.

**No-merge / no-overreach constraints:** `metric_identity_ne_metric_result`, `no_naive_heterogeneous_pooling`, `directionality_not_assumed`, `test_case_context_preserved`.

### IF-10 — Reproducibility Intelligence

**Member dimensions:** `XPD-03`, `XPD-27`, `XPD-28`

**Purpose:** Coordinate study-design/review-scope context with reproducibility availability and computational reporting without turning reporting completeness into scientific quality.

**Family questions:** What reproducibility artifacts are available?; Which computational-context attributes are reported?; What study-design/review-scope context must be retained when interpreting reproducibility coverage?

**Synthesis rule:** Study design/review scope contextualizes but does not determine reproducibility status or quality.

**No-merge / no-overreach constraints:** `reporting_completeness_ne_scientific_quality`, `study_design_ne_reproducibility_status`, `review_scope_ne_primary_study_evidence`, `not_reported_ne_reported_unavailable`.

### IF-11 — Limitations Intelligence

**Member dimensions:** `XPD-29`

**Purpose:** Provide evidence-grounded synthesis of reported study limitations while preserving statement, paper and independent-recurrence counts.

**Family questions:** What limitations are reported?; How many papers and independent study families support each recurring limitation?

**Synthesis rule:** Recurrence claims use paper and PEU/study-family counts separately.

**No-merge / no-overreach constraints:** `limitation_ne_open_problem`, `limitation_ne_future_work`, `limitation_ne_atlas_gap`, `record_count_ne_independent_support`.

### IF-12 — Open-Problem Intelligence

**Member dimensions:** `XPD-30`

**Purpose:** Provide evidence-grounded synthesis of explicit open problems while preventing automatic promotion to Atlas research gaps.

**Family questions:** What open problems are explicitly reported?; What paper and independent-study recurrence supports each normalized open-problem concept?

**Synthesis rule:** Recurrence is a Level-6 signal only and remains subject to Task 5.5/Level-7 governance.

**No-merge / no-overreach constraints:** `open_problem_ne_limitation`, `open_problem_ne_future_work`, `open_problem_ne_atlas_gap`, `recurrence_ne_official_gap`.

### IF-13 — Future-Work Intelligence

**Member dimensions:** `XPD-31`

**Purpose:** Provide evidence-grounded synthesis of reported future-work directions while separating author proposals from Atlas opportunities.

**Family questions:** What future-work directions are explicitly proposed?; What recurrence and evidence support each normalized future-work direction?

**Synthesis rule:** Author future-work statements remain source claims and do not become Atlas recommendations automatically.

**No-merge / no-overreach constraints:** `future_work_ne_open_problem`, `future_work_ne_atlas_opportunity`, `author_proposal_ne_atlas_recommendation`, `record_count_ne_independent_support`.

### IF-14 — Research-Gap Intelligence

**Member dimensions:** `XPD-37`

**Purpose:** Provide a read-only Level-6 analytical view over already governed Level-7 Atlas research-gap objects.

**Family questions:** Which approved Atlas research-gap objects exist?; What evidence and independent support are attached to each approved object?

**Synthesis rule:** Only already approved Level-7 objects are displayed as official gaps.

**No-merge / no-overreach constraints:** `l6_signal_ne_official_l7_gap`, `frequency_ne_gap_status`, `limitations_open_problems_future_work_ne_gap_without_governance`.

### IF-15 — Research-Opportunity Intelligence

**Member dimensions:** `XPD-38`

**Purpose:** Provide a read-only Level-6 analytical view over already governed Level-7 Atlas research-opportunity objects.

**Family questions:** Which approved Atlas research-opportunity objects exist?; What evidence and independent support are attached to each approved object?

**Synthesis rule:** Only already approved Level-7 objects are displayed as official opportunities.

**No-merge / no-overreach constraints:** `l6_signal_ne_official_l7_opportunity`, `frequency_ne_opportunity_status`, `future_work_ne_atlas_opportunity_without_governance`.

### IF-16 — Failure-Mode / Diagnostic Intelligence

**Member dimensions:** `XPD-15`, `XPD-22`, `XPD-29`, `XPD-30`, `XPD-32`

**Purpose:** Coordinate challenges, reported failures/disadvantages, limitations, open problems and diagnostic pathways without inferring diagnosis, causality or Level-7 framework conclusions.

**Family questions:** What challenges/failures/limitations/open problems are reported?; Which explicit diagnostic pathways are represented?; What integrity and evidence states qualify the failure/diagnostic landscape?

**Synthesis rule:** Family synthesis can align the evidence landscape narratively but cannot infer causal or diagnostic edges not present in governed records.

**No-merge / no-overreach constraints:** `symptom_ne_diagnosis`, `failure_statement_ne_cause`, `intervention_ne_verified_improvement`, `paper_pathway_ne_l7_framework`, `challenge_ne_failure`.

### IF-17 — Evidence Intelligence

**Member dimensions:** `XPD-02`, `XPD-03`, `XPD-19`, `XPD-20`, `XPD-33`, `XPD-34`, `XPD-35`

**Purpose:** Provide a corpus-level evidence and integrity meta-view across source context, study scope, claim/demonstration, generality, provenance, support/verification and contradictions without creating a scalar quality score.

**Family questions:** What evidence source roles and provenance states are represented?; What verification/support/strength states are represented?; Where do claim-demonstration or generality mismatches and contradictions occur?

**Synthesis rule:** Verification, support, strength, provenance and integrity remain orthogonal facets and retain their own counts.

**No-merge / no-overreach constraints:** `verification_ne_support`, `evidence_count_ne_independent_support`, `source_type_ne_quality`, `no_scalar_evidence_quality_score`, `absence_of_conflict_ne_consensus`.

### IF-18 — Relationship Intelligence

**Member dimensions:** `XPD-36`

**Purpose:** Provide family-level analysis of explicit typed scientific relation instances while preserving relation semantics and graph boundaries.

**Family questions:** Which typed scientific relations are represented?; What direction, evidence and lifecycle state governs each relation instance?

**Synthesis rule:** Only explicit governed relation instances are counted; co-occurrence does not create a relation.

**No-merge / no-overreach constraints:** `cooccurrence_ne_relation`, `reverse_relation_not_inferred`, `paper_relation_ne_taxonomy_hierarchy`, `paper_relation_ne_collaboration_edge`, `paper_relation_ne_l7_framework_edge`.

### IF-19 — Temporal Intelligence

**Member dimensions:** `XPD-01`, `XPD-02`

**Purpose:** Coordinate temporal context with publication/source context while preserving date semantics and avoiding unapproved cross-dimensional trend comparisons.

**Family questions:** What publication-time distributions are represented?; What source/publication contexts are represented for temporal interpretation?

**Synthesis rule:** Member views can coexist, but source-by-time cross-comparison is not yet authorized.

**No-merge / no-overreach constraints:** `publication_year_ne_extraction_or_verification_date`, `source_context_ne_evidence_quality`, `no_source_by_time_cross_comparison_before_task_6_4`.

### IF-20 — Domain / Geographic / Collaboration Intelligence

**Member dimensions:** `XPD-04`, `XPD-05`, `XPD-06`, `XPD-08`

**Purpose:** Coordinate application-domain taxonomy, geographic provenance, institutions and bibliographic collaboration as distinct views without turning network/geographic prominence into scientific quality.

**Family questions:** What application domains, countries/regions and institutions are represented?; What bibliographic collaboration structures are represented?; What coverage limitations or identity-resolution states qualify these views?

**Synthesis rule:** Geographic, institutional, collaboration and domain views remain separate; cross-dimensional intersections are deferred to Task 6.4.

**No-merge / no-overreach constraints:** `application_domain_ne_geography`, `institution_ne_geography`, `collaboration_edge_ne_scientific_relation`, `network_centrality_ne_scientific_quality`, `association_count_ne_paper_count`.

## 7. Special safeguards

### Methodology Intelligence (`IF-05`)
`IF-05` includes `XPD-13 Data / observation regime` and `XPD-17 Methodology`, but this does not create a generic methodology variable. `XPD-17` remains an owner-preserving parent over the governed Task 5 child dimensions. A family narrative may state which child dimensions are represented, but no pooled methodology frequency or scalar `learning_type` is allowed.

### Evaluation Intelligence (`IF-09`)
Metric identity and evaluation observations remain separate. Task 6.3 can coordinate their constituent panels but cannot pool heterogeneous results or compare methods/metrics/test cases until a later comparison rule explicitly establishes compatibility.

### Research Gap / Opportunity (`IF-14`, `IF-15`)
These are Level-6 analytical views over already approved Level-7 curated objects. They do not turn recurrent limitations, open problems or future-work statements into official Atlas gaps/opportunities.

### Failure-Mode / Diagnostic Intelligence (`IF-16`)
The family can coordinate challenges, reported failures/disadvantages, limitations, open problems and explicit diagnostic pathways. It cannot infer a diagnosis from a symptom, infer causality from recurrence, equate intervention with verified improvement, or silently promote paper-level pathways into the Level-7 Failure-Mode Diagnostics Framework.

### Evidence Intelligence (`IF-17`)
This family is an evidence/integrity meta-view, not a scalar evidence-quality score. Verification, support, statement strength, source role and contradiction are distinct axes. Evidence-object count is not independent support.

### Temporal and Domain/Geographic/Collaboration families (`IF-19`, `IF-20`)
Task 6.3 coordinates member views only. Source-by-time, domain-by-country, institution-by-domain or collaboration-by-application comparisons are Task 6.4 decisions and are not authorized here.

## 8. Evidence drill-down contract

Every material family-level statement must support the chain:

`family statement → IF family → supporting XPD(s) → constituent explorer result → governed record/assignment/object → paper/object identity → evidence locator/source role → verification/support/integrity state → ontology/normalization version`.

A family narrative must never invent missing evidence, hide incompatible denominators, or imply that a dimension relationship has been established merely because two panels are shown in one workspace.

## 9. Export contract

A Task 6.3 family export must preserve:
- IF ID and label;
- member XPD IDs;
- constituent explorer/spec versions;
- per-XPD numerator, denominator, grain and eligibility;
- record/paper/evidence identities available to drill-down;
- verification/support/integrity qualifiers;
- ontology/normalization version;
- statement-to-support mapping for any exported family narrative.

No single unlabeled `family_count`, `family_score`, `quality_score` or pooled denominator is permitted.

## 10. Acceptance result

Task 6.3 passes because:
- all **20/20** frozen Master Plan families `IF-01`–`IF-20` are specified;
- every family uses exactly the Task 6.1 member-dimension map;
- Task 6.2 constituent explorers are reused rather than replaced;
- each family has purpose, research questions, denominator/evidence/recurrence contracts, outputs and family-specific no-merge constraints;
- family-wide default pooled denominators: **0**;
- Task 6.4 comparison choices defined: **0**;
- Task 6.5 invalid-combination catalogue entries defined: **0**;
- Task 6.6 comparison-choice map defined: **0**;
- Task 6.7 final interactive UI routes defined: **0**;
- locked-v0.7 changes, canonical ontology promotions, paper assignments, official Level-7 object creation, production `main` changes and Computational Resources Stage changes: **0**.

## 11. Stop boundary

**Task 6.3 — PASS / COMPLETE. Task 6 remains IN PROGRESS. Task 6.4 has not started.**

Exact next substantive action, only when separately authorized:

**Task 6.4 — map all scientifically meaningful cross-dimensional comparison choices, using Tasks 6.1–6.3 as controlling inputs and preserving each XPD/IF owner, grain, denominator, eligibility, evidence and no-merge boundary.**
