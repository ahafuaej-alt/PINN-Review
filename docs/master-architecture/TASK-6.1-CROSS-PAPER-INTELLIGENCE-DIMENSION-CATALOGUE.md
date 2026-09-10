# Task 6.1 — Cross-Paper Intelligence Dimension Catalogue

Status: **PASS / COMPLETE**

Date: 2026-09-10

Branch: `docs/master-atlas-roadmap`

Starting branch head: `9edf8a74d57764d9212b99e067fb6f66ed89dfac`

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

Implementation contract: frozen Master Plan v1.0.

Machine-readable coordination contract: `atlas-cross-paper-intelligence-dimension-catalogue.json` (`task-6.1-v1.0.0`).

## 1. Question resolved

Task 6.1 answers:

> What are the stable analytical dimensions that Level 6 Cross-Paper Intelligence may use to describe, count, stratify, trend and later compare the Atlas corpus without creating competing scientific owners or unsupported synthesis?

The controlling answer is:

**L6 uses a governed catalogue of analytical axes whose meanings remain owned upstream. An intelligence family is not a database field, and a dimension catalogue entry is not a new ontology concept.**

Task 6.1 therefore defines **38 principal dimensions**, grouped into **9 semantic domains**, and maps them to the **20 intelligence families** frozen in the Master Plan. The Methodology principal dimension reuses all **37 Task 5.1 methodology dimensions** and references the governed Task 5.2, 5.2B, 5.2C and 5.3 faceted coordination layers without creating a generic `learning_type`, generic `method`, or competing field.

Task 6.1 does **not** define explorer UI or detailed explorer behavior (Task 6.2), implement the 20 intelligence families (Task 6.3), define pairwise comparison choices (Task 6.4), enumerate invalid comparison combinations (Task 6.5), serialize the comparison-choice map (Task 6.6), or design the interactive comparison UI (Task 6.7).

## 2. Controlling inputs

The catalogue is subordinate to:

- Task 1.2 complete project objective and the frozen 20 intelligence families;
- Task 1.3 R1–R48, especially R7–R14, R16–R18, R20, R22, R25–R29, R47–R48;
- Task 1.4 X1–X9 dynamic-extension governance;
- Task 1.5 H1–H11 / NDU / CMR controls;
- Task 1.6 requirement/coverage matrix, especially O06 and O18;
- Task 2.1 L6 Cross-Paper Intelligence boundary;
- Task 2.2 L6-A1 through L6-A6 internal-component contract;
- Task 3 Paper Profile scientific owner and evidence-drilldown contracts;
- Task 4 PINN-type evidence and cross-dimensional linkage boundaries;
- Tasks 5.1–5.5 methodology ownership, taxonomy, structural and promotion governance;
- locked v0.7 single-owner ontology and evidence governance.

No controlling scientific owner is changed.

## 3. Core terms

### 3.1 Principal cross-paper dimension

A **principal cross-paper dimension** is a stable analytical axis with a distinct upstream semantic owner and unit/grain that can support reproducible single-dimension corpus analysis.

A principal dimension:

- may expose several owned facets;
- may be hierarchical, categorical, structured, temporal, numeric, relational or curated-synthesis based;
- does not become a new scientific database owner merely by being catalogued in L6;
- retains the original record/evidence scope and multiplicity;
- has an explicit denominator rule.

### 3.2 Intelligence family

An **intelligence family** is a higher-order analytical family that groups one or more principal dimensions around a research question. The 20 Master Plan families are retained exactly.

Therefore:

**intelligence family ≠ dimension ≠ field ≠ taxonomy term ≠ relation type ≠ page.**

Several families may use one dimension, and one family may require several dimensions.

### 3.3 Facet / nested dimension

A facet is a subordinate axis inside a principal dimension. A facet does not create a second authority. For Methodology, the Task 5.1 `MDC-*` catalogue and the Task 5 faceted coordination taxonomies are reused by reference.

## 4. Universal L6 analytical invariants

The following are mandatory for all future Task 6 work:

1. **Frequency is not evidence strength.**
2. Repeated statements/citations within a paper are not independent support.
3. Only eligible reviewed records enter governed positive scientific aggregation.
4. Contradictions, mismatch, ambiguity and negative evidence remain visible.
5. Qualitative association is not an effect size and does not prove causality.
6. Every material aggregate must drill down to its paper/record/evidence basis.
7. Every aggregate must disclose numerator, denominator, unit of analysis, eligibility filter, scope and ontology/normalization version.
8. Paper count, record count, assignment count, relation count, evaluation-result count, evidence count and independent-study/PEU count are distinct.
9. Multiplicity must never be silently flattened.
10. L6 may produce analytical candidate signals but cannot silently create official L7 research gaps, opportunities or framework conclusions.
11. Claim, demonstration, contribution, outcome, validation and evaluation remain separate.
12. Physical problem, computational task and PINN challenge remain separate.
13. Demonstrated, related, potential and review-scoped application evidence remain separate.
14. Paper-level scientific relations, taxonomy hierarchy, bibliographic collaboration edges and L7 framework edges remain different graph semantics.
15. Task 5.5 governs ontology promotion; frequent L6 patterns cannot auto-promote schema, taxonomy or relationships.

## 5. Nine semantic groups

The catalogue groups dimensions for navigation/architecture only:

- `DG-01` Corpus / bibliographic / study context — XPD-01..06.
- `DG-02` Scientific problem and application context — XPD-07..15.
- `DG-03` PINN identity and methodology — XPD-16..17.
- `DG-04` Claims, contributions and outcomes — XPD-18..22.
- `DG-05` Validation and evaluation — XPD-23..26.
- `DG-06` Reproducibility — XPD-27..28.
- `DG-07` Limitations, open questions and diagnostics — XPD-29..32.
- `DG-08` Evidence and relations — XPD-33..36.
- `DG-09` Curated Atlas synthesis outputs — XPD-37..38.

These groups are **not new ontology entities**.

## 6. Principal dimension catalogue

| ID | Principal dimension | Semantic group | Intelligence families | Governing grain |
|---|---|---|---|---|
| `XPD-01` | Temporal context | corpus context | IF-19 | paper_or_explicit_event |
| `XPD-02` | Publication / source context | corpus context | IF-17, IF-19 | paper |
| `XPD-03` | Study design / review scope | corpus context | IF-10, IF-17 | paper_plus_review_scope_record |
| `XPD-04` | Geographic provenance | corpus context | IF-20 | paper_to_geographic_entity_association |
| `XPD-05` | Institutional context | corpus context | IF-20 | paper_to_institution_association |
| `XPD-06` | Collaboration context | corpus context | IF-20 | paper_plus_collaboration_edge |
| `XPD-07` | Application evidence role / scope | scientific context | IF-01 | application_record_or_review_scope_item |
| `XPD-08` | Application taxonomy | scientific context | IF-01, IF-20 | application_record |
| `XPD-09` | Physical system | scientific context | IF-01, IF-02 | application_or_problem_scoped_record |
| `XPD-10` | Physical problem | scientific context | IF-02 | problem_record |
| `XPD-11` | Governing equation / equation family | scientific context | IF-02 | problem_record_plus_equation_item |
| `XPD-12` | Problem class / characteristics | scientific context | IF-02 | problem_record_plus_characteristic_assignment |
| `XPD-13` | Data / observation regime | scientific context | IF-02, IF-05 | structured_data_regime_or_fidelity_role_record |
| `XPD-14` | Computational task / scientific objective | scientific context | IF-03 | problem_or_task_record |
| `XPD-15` | PINN problem / challenge addressed | scientific context | IF-02, IF-16 | challenge_assignment |
| `XPD-16` | PINN type / family | model and method | IF-04 | paper_type_assignment |
| `XPD-17` | Methodology | model and method | IF-05 | method_assignment_or_structured_method_record |
| `XPD-18` | Contribution / innovation | claims and results | IF-06 | contribution_record |
| `XPD-19` | Claim vs demonstration | claims and results | IF-07, IF-17 | paper_or_scoped_claim_record |
| `XPD-20` | Generality / transfer scope | claims and results | IF-07, IF-17 | scoped_generality_claim |
| `XPD-21` | Outcome / degree of resolution | claims and results | IF-07 | outcome_record |
| `XPD-22` | Reported advantage / disadvantage / failure | claims and results | IF-07, IF-16 | outcome_or_failure_statement_record |
| `XPD-23` | Validation strategy | validation and evaluation | IF-08 | validation_record |
| `XPD-24` | Validation reference / data / baseline | validation and evaluation | IF-08 | validation_or_evaluation_context_record |
| `XPD-25` | Evaluation metric | validation and evaluation | IF-09 | evaluation_result_record_metric |
| `XPD-26` | Evaluation result / test case | validation and evaluation | IF-09 | evaluation_result_record |
| `XPD-27` | Reproducibility availability | reproducibility | IF-10 | paper_reproducibility_record |
| `XPD-28` | Reproducibility reporting / computational context | reproducibility | IF-10 | paper_reproducibility_record |
| `XPD-29` | Limitation | gaps and diagnostics | IF-11, IF-16 | limitation_record |
| `XPD-30` | Open problem | gaps and diagnostics | IF-12, IF-16 | open_problem_record |
| `XPD-31` | Future work | gaps and diagnostics | IF-13 | future_work_record |
| `XPD-32` | Failure / diagnostic pathway | gaps and diagnostics | IF-16 | diagnostic_pathway_or_component |
| `XPD-33` | Evidence provenance / source role | evidence and relations | IF-17 | evidence_record |
| `XPD-34` | Evidence verification / support / strength | evidence and relations | IF-17 | evidence_record |
| `XPD-35` | Contradiction / mismatch / ambiguity | evidence and relations | IF-17 | evidence_or_scoped_conflict_group |
| `XPD-36` | Typed scientific relationship | evidence and relations | IF-18 | relation_instance |
| `XPD-37` | Atlas research gap | curated synthesis | IF-14 | curated_gap_object_plus_support_set |
| `XPD-38` | Atlas research opportunity | curated synthesis | IF-15 | curated_opportunity_object_plus_support_set |

### 6.1 XPD-01..06 — corpus, bibliographic and study context

`XPD-01 Temporal context` is anchored primarily in verified publication year. Review search windows and extraction/verification dates remain separately labelled event/date semantics; they must not be pooled as publication time.

`XPD-02 Publication / source context` covers venue/source and document-form context. `publication_document_type` and `publisher_article_label` do not determine scientific study design.

`XPD-03 Study design / review scope` preserves multi-component study design and review-synthesis scope. A review's discussed domain/task/method scope is never reclassified as the review paper's demonstrated primary-study science.

`XPD-04 Geographic provenance`, `XPD-05 Institutional context`, and `XPD-06 Collaboration context` use bibliographically justified associations. Multi-country and multi-institution papers retain multiplicity. Geography is not application domain, and bibliographic collaboration edges are not scientific-method relations.

### 6.2 XPD-07..15 — scientific problem and application context

`XPD-07` preserves application evidence role: primary/secondary demonstrated, related, potential and review-scoped.

`XPD-08` owns the analytical projection of the governed application hierarchy; `XPD-09` keeps physical system separate from both application taxonomy and equation identity.

`XPD-10 Physical problem`, `XPD-11 Governing equation / equation family`, and `XPD-12 Problem class / characteristics` stay distinct. A problem characteristic such as stiffness or multiscale behavior is not automatically a PINN failure.

`XPD-13 Data / observation regime` coordinates `data_regime[]` and `fidelity_source_role[]` while retaining their separate owners. Data availability is a reproducibility question, not a data-regime synonym.

`XPD-14 Computational task / scientific objective` preserves the problem/task distinction and multiple task assignments where evidenced.

`XPD-15 PINN problem / challenge addressed` retains challenge identity separately from physical problem and from demonstrated failure/resolution.

### 6.3 XPD-16..17 — PINN identity and methodology

`XPD-16 PINN type / family` uses Task 4 evidence-scoped assignments. Canonical, provisional, source-local, unresolved and collision states remain visible. A type name does not imply architecture or methodology.

`XPD-17 Methodology` is a **composite analytical parent, not a scientific field**. It must expose owned child axes rather than manufacture one pooled “methodology frequency”.

The complete Task 5.1 owner catalogue remains:

| Method ID | Owned methodology axis |
|---|---|
| `MDC-01` | Architecture family |
| `MDC-02` | Model variable representation |
| `MDC-03` | Network configuration |
| `MDC-04` | Physical constraints |
| `MDC-05` | Physics enforcement |
| `MDC-06` | Physics integration mode |
| `MDC-07` | Strong / weak / variational formulation |
| `MDC-08` | Loss construction / components |
| `MDC-09` | Loss weighting / balancing |
| `MDC-10` | Sampling / adaptive sampling |
| `MDC-11` | Data / collocation / observation regime |
| `MDC-12` | Optimizer identity / optimization strategy |
| `MDC-13` | Training protocol |
| `MDC-14` | Learning-rate control |
| `MDC-15` | Initialization |
| `MDC-16` | Stabilization / regularization |
| `MDC-17` | Batching |
| `MDC-18` | Stopping / restart |
| `MDC-19` | Curriculum / continuation |
| `MDC-20` | Staged training |
| `MDC-21` | Pretraining / fine-tuning control |
| `MDC-22` | Optimizer transition |
| `MDC-23` | Activation strategy |
| `MDC-24` | Differentiation / operator evaluation |
| `MDC-25` | Geometry representation |
| `MDC-26` | Domain decomposition |
| `MDC-27` | Time decomposition / time partitioning |
| `MDC-28` | Parallel execution |
| `MDC-29` | Transformation / encoding / normalization |
| `MDC-30` | Uncertainty method |
| `MDC-31` | Operator-learning integration |
| `MDC-32` | Multi-fidelity integration |
| `MDC-33` | Fidelity source role |
| `MDC-34` | Transfer / meta-learning |
| `MDC-35` | Software framework |
| `MDC-36` | Derived scientific output method |
| `MDC-37` | Reproducibility / methodology reporting context |

In addition, XPD-17 references without duplicating authority:

- Task 5.2: `LIT-F1..LIT-F4`, plus the non-persisted derived query facets `integration_locus` and `knowledge_source_role`;
- Task 5.2B: `LP-F1..LP-F10`;
- Task 5.3: `MRF-01..MRF-06`;
- Task 5.2C: `EX-01..EX-15` only according to their governed coverage/watch dispositions.

Critical rule: **there is no scalar generic `learning_type` and no generic stored `methodology` field introduced by Task 6.1.**

### 6.4 XPD-18..22 — contribution, claim and outcome

`XPD-18 Contribution / innovation` remains separate from `XPD-21 Outcome / degree of resolution`.

`XPD-19 Claim vs demonstration` keeps claimed solution separate from actual demonstration and can expose mismatch/ambiguity without resolving it by assumption.

`XPD-20 Generality / transfer scope` distinguishes author-stated generality from evidence-supported generalization.

`XPD-22 Reported advantage / disadvantage / failure` remains paper-reported evidence; a reported failure does not establish a diagnostic cause, and an advantage does not establish a universal effect size.

### 6.5 XPD-23..26 — validation and evaluation

`XPD-23 Validation strategy` answers **how validity was tested**.

`XPD-24 Validation reference / data / baseline` answers **against what or using what reference context**.

`XPD-25 Evaluation metric` is metric identity/definition.

`XPD-26 Evaluation result / test case` is the repeatable result observation. Different metrics, scales, conditions and test cases may not be pooled simply because they are numerical.

This preserves **validation ≠ evaluation**.

### 6.6 XPD-27..28 — reproducibility

`XPD-27 Reproducibility availability` preserves `not reported`, `reported unavailable` and `available` states for code/data/model resources.

`XPD-28 Reproducibility reporting / computational context` covers hyperparameter, seed, hardware and training-cost reporting states. Missing cost is not zero cost; `parallel_execution[]` is not hardware reporting.

### 6.7 XPD-29..32 — unresolved science and diagnostics

`XPD-29 Limitation`, `XPD-30 Open problem`, and `XPD-31 Future work` remain separate repeatable records with source/origin and scope.

`XPD-32 Failure / diagnostic pathway` retains typed pathway roles: symptom, cause/mechanism, check/analysis, intervention/response, targeted improvement, verification and trade-off. A method aimed at a failure is not a verified improvement.

Paper-level pathways remain distinct from the L7 Failure-Mode Diagnostics Framework.

### 6.8 XPD-33..36 — evidence and relationships

`XPD-33 Evidence provenance / source role` analyzes evidence origin/type/source role/locator.

`XPD-34 Evidence verification / support / strength` retains these as separate axes rather than one quality score.

`XPD-35 Contradiction / mismatch / ambiguity` is a first-class integrity dimension. Contradictions are not removed to make trends cleaner.

`XPD-36 Typed scientific relationship` uses evidence-scoped directed relation instances. Co-occurrence is not a relation. Paper relations are not taxonomy hierarchy, bibliographic collaboration edges or framework edges.

### 6.9 XPD-37..38 — curated L7 synthesis dimensions

`XPD-37 Atlas research gap` and `XPD-38 Atlas research opportunity` are catalogued so the complete Cross-Paper Intelligence system can later query approved L7 synthesis objects.

However, they remain **L7-curated synthesis owners**. L6 can produce candidate signals, recurrence descriptions and evidence sets, but cannot convert them automatically into official gaps/opportunities.

## 7. Twenty Master Plan intelligence families

All 20 frozen intelligence families have explicit dimension coverage:

| Family | Intelligence family | Principal dimensions |
|---|---|---|
| `IF-01` | Application Intelligence | XPD-07, XPD-08, XPD-09 |
| `IF-02` | Problem Intelligence | XPD-09, XPD-10, XPD-11, XPD-12, XPD-13, XPD-15 |
| `IF-03` | Computational-Task Intelligence | XPD-14 |
| `IF-04` | PINN-Type Intelligence | XPD-16 |
| `IF-05` | Methodology Intelligence | XPD-13, XPD-17 |
| `IF-06` | Contribution Intelligence | XPD-18 |
| `IF-07` | Outcome Intelligence | XPD-19, XPD-20, XPD-21, XPD-22 |
| `IF-08` | Validation Intelligence | XPD-23, XPD-24 |
| `IF-09` | Evaluation Intelligence | XPD-25, XPD-26 |
| `IF-10` | Reproducibility Intelligence | XPD-03, XPD-27, XPD-28 |
| `IF-11` | Limitations Intelligence | XPD-29 |
| `IF-12` | Open-Problem Intelligence | XPD-30 |
| `IF-13` | Future-Work Intelligence | XPD-31 |
| `IF-14` | Research-Gap Intelligence | XPD-37 |
| `IF-15` | Research-Opportunity Intelligence | XPD-38 |
| `IF-16` | Failure-Mode / Diagnostic Intelligence | XPD-15, XPD-22, XPD-29, XPD-30, XPD-32 |
| `IF-17` | Evidence Intelligence | XPD-02, XPD-03, XPD-19, XPD-20, XPD-33, XPD-34, XPD-35 |
| `IF-18` | Relationship Intelligence | XPD-36 |
| `IF-19` | Temporal Intelligence | XPD-01, XPD-02 |
| `IF-20` | Domain / Geographic / Collaboration Intelligence | XPD-04, XPD-05, XPD-06, XPD-08 |

This mapping is many-to-many by design. It is a coordination map, not the Task 6.4 comparison-choice map.

## 8. Denominator and unit-of-analysis contract

Each principal dimension carries its own grain and denominator rule. Future explorers/analyses must, at minimum:

- identify whether the numerator is papers, records, assignments, result observations, relations, evidence objects, collaboration edges, curated synthesis objects or independent PEUs;
- state the eligible denominator;
- show missing/not-reported/not-applicable/unresolved states where scientifically relevant;
- preserve multi-valued records without silently forcing one category per paper;
- report paper count separately from record/event/relation counts when both matter;
- avoid averaging or pooling numerical results across incompatible metrics, definitions, test cases or conditions;
- separate raw occurrence from independent scientific support.

No global “N = 853” denominator may be used automatically for every dimension.

## 9. Eligibility modes

Task 6.1 recognizes three analytical modes that later tasks must preserve:

**Positive scientific aggregation.** Only eligible reviewed records under their controlling evidence/owner rules contribute positively.

**Coverage/state reporting.** Missing, not-reported, unavailable, not-applicable and unresolved states remain visible where governed.

**Integrity analytics.** Conflict, mismatch, ambiguity and negative/counterevidence remain analyzable as first-class integrity states and are not deleted because they are ineligible for positive aggregation.

## 10. Why the catalogue is 38 principal dimensions rather than 20

The 20 Master Plan entries answer *families of research questions*. Several require multiple independent semantic axes.

Examples:

- Problem Intelligence needs physical problem, equation family, problem characteristics, data context and PINN challenge—these cannot be merged.
- Outcome Intelligence must not collapse claim/demonstration, generality, outcome and reported failure.
- Evaluation Intelligence must distinguish metric identity from test-case/result observations.
- Evidence Intelligence must distinguish provenance, verification/support/strength and contradiction.
- Domain/Geographic/Collaboration Intelligence spans application-domain context and bibliographic geographic/institutional/collaboration axes.
- Methodology Intelligence requires the 37 owner dimensions and the governed faceted Task 5 expansions.

Using exactly 20 “dimensions” would therefore violate existing no-merge rules.

## 11. Task 6.2 handoff

Task 6.2 must define a complete single-dimension explorer for **each XPD-01..XPD-38**.

Special handoff for `XPD-17`: the Methodology explorer must expose owned child dimensions/facets and their own denominators; it must not present one scientifically meaningless pooled methodology frequency.

Task 6.2 may specify explorer behavior, summaries, filters, drill-down and warnings. Task 6.1 intentionally does not pre-empt that design.

## 12. Explicit non-actions / change boundary

Task 6.1 makes:

- **0** locked-v0.7 field/entity changes;
- **0** canonical taxonomy promotions;
- **0** global alias promotions;
- **0** canonical relation promotions;
- **0** paper assignments;
- **0** official research-gap/opportunity objects;
- **0** production `main` changes;
- **0** Computational Resources Stage 1/2/3 changes;
- **0** Task 6.2 work.

The dimension IDs `XPD-*`, group IDs `DG-*`, family IDs `IF-*`, and L6 analytical rules `L6R-*` are roadmap/architecture coordination identifiers only.

## 13. Acceptance result

Task 6.1 is accepted when:

- all 20 Master Plan intelligence families are represented exactly once in the family registry and map to at least one principal dimension;
- all 38 principal dimensions have a stable ID, definition, upstream owner, grain, value shape, eligibility rule, denominator rule, family mapping and no-merge controls;
- all 38 principal dimensions are assigned to exactly one navigation group;
- `XPD-17` reuses all 37 Task 5.1 methodology owner dimensions;
- Task 5.2, Task 5.2B and Task 5.3 facets are referenced without creating duplicate authority;
- research gaps/opportunities remain L7-owned;
- evidence/contradiction/relationship semantics remain explicit;
- the locked scientific ontology remains unchanged;
- Task 6.2 remains not started.

**Result: PASS / COMPLETE.**

Stop boundary: **Task 6.1 is complete. Task 6.2 has not started.**
