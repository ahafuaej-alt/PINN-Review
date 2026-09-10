# Task 1.6 — Formal Requirement / Coverage Matrix

Status: **PASS**

Date: 2026-09-07

Roadmap parent: `docs/master-architecture/CONTROLLED-ROADMAP.md` → Task 1.6

Controlling inputs: Task 1.1 authoritative reconciliation; Task 1.2 complete project objective; Task 1.3 R1–R48; Task 1.4 X1–X9; Task 1.5 H1–H11 and NDU/CMR dispositions; `ATLAS-PRODUCTION-SURFACE-REGISTER.md`; locked Google Drive scientific authority `v0.7-pilot-atlas-prefreeze`; and the Google Drive Master Architecture & Implementation Memory.

Scope: planning/specification only. This matrix establishes requirement ownership and downstream coverage. It does **not** claim that later database, UI, ingestion, migration, Task 9 page audit, Task 20 production pilot, or Task 21 corpus extraction work is already implemented.

## 1. Matrix semantics

A requirement is covered at Master-Plan specification level only when the matrix identifies: (1) authority/owner; (2) representation obligation; (3) evidence/provenance obligation; (4) QA/acceptance mechanism; and (5) downstream roadmap/consumer coverage. Task 1.6 PASS therefore means **no Task 1.1–1.5 requirement is orphaned in the implementation contract**, not that downstream implementation is complete.

Abbreviations: `CS` Canonical Schema / Field Dictionary; `CV` Controlled Vocabularies; `TR` Taxonomy Term and Alias Registry; `RR` Relationship Registry; `OG` Ontology Governance and Change Rules; `EP` Extraction/Evidence/Verification Protocol; `QA` General QA and Validation Rules; `SER` Database Implementation/Serialization Specification; `BIB` bibliographic owner; `SYN` Atlas synthesis; `CR` independently governed Computational Resources.

## 2. Task 1.1 authority and reconciliation coverage

| ID | Requirement | Authority / owner | Required representation | Evidence / provenance | QA / acceptance | Primary downstream coverage | State |
|---|---|---|---|---|---|---|---|
| A01 | Locked v0.7 remains operational scientific authority | OG + five v0.7 owners | Authority/version pointer; no duplicate owner | Locked baseline provenance/version | Authority/readback regression; later changes only via governed version | All layers; Tasks 2–22 | LOCKED / MANDATORY |
| A02 | Five scientific owners remain non-overlapping | CS/CV/TR/RR/OG | Single-owner definitions with explicit references | Owner/version provenance | Owner-boundary QA; duplicate-definition failure | Schema, extraction, DB, pages; Tasks 2,12,14 | LOCKED / MANDATORY |
| A03 | Extraction/Evidence Protocol operationalizes owners but does not redefine them | EP subordinate to CS/CV/TR/RR/OG | Workflow rules and evidence capture contract | Evidence/source-role/verification metadata | Protocol↔owner consistency QA | Ingestion/review; Tasks 14,20,21 | LOCKED / MANDATORY |
| A04 | QA owns tests/readiness, not scientific definitions | QA | Validation rules, sentinels, readiness records | QA execution provenance | Regression/readback/gate results | Tasks 13,18–21 | LOCKED / MANDATORY |
| A05 | Serialization/implementation cannot redefine scientific meaning | SER + GitHub implementation | Machine-readable representation derived from owners | Version + migration trace | Schema/referential/semantic regression | Tasks 2,12–13,19–21 | LOCKED / MANDATORY |
| A06 | Historical v0.4–v0.6/candidates remain provenance, not authority | OG | Immutable historical baseline references/history | Historical version IDs and changelog | Backward-compatibility/readback tests | Tasks 10,19–21 | LOCKED / MANDATORY |
| A07 | Stable Atlas paper_id integrates bibliography and scientific records; bibliography ≠ full profile | BIB + CS | Bibliographic core keyed by paper_id; separate scientific entities | Metadata provenance + scientific evidence links | ID uniqueness/referential integrity | References, profiles, analytics; Tasks 3,9,12 | SPECIFIED |
| A08 | Ecosystem and four frameworks are mapping/synthesis inputs, not extra ontology owners | TR/RR/OG + SYN | Mapped scientific primitives; separate synthesis objects | Paper evidence for paper facts; synthesis evidence chains | 31/31 + 4/4 regression; no framework-edge promotion | Ecosystem/frameworks; Tasks 6–9 | SPECIFIED |
| A09 | Dataset Manager single-source/update-propagation principle retained; scientific editing authority bounded | BIB now; future scientific workflow separate | Authoritative record → validated change → deterministic rebuild | Correction source/reviewer/history | Write-path, validation, propagation regression | Dataset Manager + dependent views; Tasks 9,10,14,18 | SPECIFIED |
| A10 | Master Memory creates implementation obligations but cannot amend v0.7 | Master Memory planning; science owners unchanged | Requirement/decision references | Decision provenance/revision history | Task 1.6 coverage + Task 1.7 freeze checks | Architecture/docs; Tasks 1.7,2+ | SPECIFIED |
| A11 | Computational Resources remains independently governed but future-integrable | CR independent + Atlas integration boundary | Independent resource IDs + explicit paper-resource links/interfaces | Both subsystems retain provenance | Boundary regression at future explicit integration checkpoint | CR hierarchy/crosslinks; Tasks 9,18,22 | SPECIFIED / DEFERRED INTEGRATION |

## 3. Task 1.2 end-to-end objective coverage

| ID | Requirement | Authority / owner | Required representation | Evidence / provenance | QA / acceptance | Primary downstream coverage | State |
|---|---|---|---|---|---|---|---|
| O01 | Primary-source association and source-grounded extraction | EP/OG | Paper↔source association; evidence objects; locators | Verbatim evidence, locator, source role | Source association + provenance QA | Tasks 3,14 | SPECIFIED |
| O02 | Verified bibliographic identity feeds all dependent views | BIB | Single authoritative metadata core keyed by paper_id | Metadata source/correction history | Uniqueness, validation, propagation regression | References, Realm, all linked pages; Tasks 9,10,12 | SPECIFIED |
| O03 | Evidence/provenance is first-class and drillable | OG/EP/CS | Stable evidence records linked to normalized records/synthesis | Mandatory evidence chain by applicability | H2/H4/H8; evidence-link QA | All scientific/synthesis pages; Tasks 3,6,7,14 | SPECIFIED |
| O04 | Complete evidence-linked Paper Profile | CS + owners | Repeatable/conditional scientific profile sections | Evidence per material scientific record | Semantic/multiplicity/provenance QA | Tasks 3,16 | SPECIFIED |
| O05 | Dynamic ontology/taxonomy/relationships with versioned growth | TR/RR/CV/OG | Canonical/provisional/source-local terms, aliases, relations, versions | Trigger papers/evidence + changelog | X1–X6 lifecycle + regression | Tasks 4–6,14 | SPECIFIED |
| O06 | Cross-paper intelligence across 20 families and valid combinations | OG + SYN + owners | Governed dimensions, query map, comparison constraints | Eligible reviewed inputs + drilldown | R25–R29/R47; synthesis reproducibility | Task 6 | SPECIFIED |
| O07 | Atlas synthesis frameworks/gaps/opportunities separate from paper facts | SYN + OG | Framework/gap/opportunity synthesis objects | Supporting/contradicting paper/evidence IDs, version, scope | H8 + framework-boundary regression | Task 7 | SPECIFIED |
| O08 | Complete current Atlas surface and future pages consume governed architecture | Implementation + Task9; science upstream | Shared authoritative records/derived views; page declarations | Provenance retained where material | Task9 audit + Task18 regression | Tasks 9,15–18,22 | SPECIFIED |
| O09 | Semi-automated ingestion with mandatory human scientific review | EP/OG + future tool | Candidate → review states → verified publication | Extraction evidence + reviewer disposition/history | H3/H11 workflow QA | Task 14 | SPECIFIED |
| O10 | Corrections preserve old/new state and deterministically propagate | OG/BIB + datum owner | Version/history records + dependency invalidation/rebuild | Old/new value, source, reason, reviewer, timestamp | Rollback + propagation regression | Task 10 | SPECIFIED |
| O11 | Scientific/conceptual Master Architecture is version-controlled | Master Plan / GitHub docs | Conceptual architecture source | Requirement references/decision provenance | Consistency against matrix/owners | Tasks 2,15 | SPECIFIED |
| O12 | Technical ERD/Mermaid/DBML mirrors scientific contract | GitHub implementation under owner constraints | ERD/DBML/Mermaid with keys/cardinalities | Version/migration references | Semantic equivalence + referential QA | Tasks 2,12,15 | SPECIFIED |
| O13 | Requirement/Coverage Matrix remains formal implementation contract | Task1.6 / Master Plan | This matrix + later status updates | Requirement source trace | No-orphan requirement check; Task1.7 gate | Tasks 1.7+ | SPECIFIED |
| O14 | Storage responsibilities remain separated | Master Plan; OG for science | Drive source/science; GitHub implementation; future DB accepted structured state | Source/evidence/version provenance | Storage-boundary, backup/export QA | Tasks 11–13,19 | SPECIFIED |
| O15 | Computational Resources interoperability without schema absorption | CR independent + Atlas integration | Explicit mapping/interface, separate IDs, bounded crosslinks | Independent provenance retained | X9 + boundary regression | Future CR checkpoint | SPECIFIED |
| O16 | 853-paper and future-corpus lifecycle is batch-controlled, checkpointed, stoppable | OG/QA + future operations | Batch/checkpoint records, gate states, versions | Batch evidence/review provenance | H1–H11 + CMR continuous monitoring | Tasks 20–22 | SPECIFIED |
| O17 | Scientific defensibility outranks completeness optics | OG | Explicit unresolved/not_reported/not_applicable/conflict states | Evidence retained; no invented completeness | R46 + H1/H7 | All scientific pages/analytics | SPECIFIED |
| O18 | Comparisons and synthesis scientifically valid and reproducible | OG + SYN | Comparison-choice map, invalid-combination rules, reproducible synthesis inputs | Eligible inputs, evidence/version trace | R47/R48 + H8 | Tasks 6–8,17 | SPECIFIED |
| O19 | Corrections identify and refresh every dependent consumer | BIB/OG + implementation dependency graph | Dependency graph + invalidation/rebuild mechanism | Correction/history links | Task9 dependency audit + Task10 propagation QA | Complete production surface | SPECIFIED |
| O20 | Architecture remains open to future pages/tools without ad hoc scientific owners | Task2 IA + Task9/22; science upstream | Reusable entities/queries/navigation registration; X8 | Page declares upstream owners/provenance | R34–R38 + X8 regression | Tasks 2,9,22 | SPECIFIED |

## 4. Task 1.3 non-negotiable scientific invariants — R1–R48

| ID | Requirement | Authority / owner | Required representation | Evidence / provenance | QA / acceptance | Primary downstream coverage | State |
|---|---|---|---|---|---|---|---|
| R01 | Author statement ≠ Atlas inference/synthesis | OG/EP | Separate origin/epistemic-state objects | Evidence role/origin retained | H6 semantic-boundary regression | Tasks 3,14,20–21 | MANDATORY |
| R02 | Raw/verbatim evidence is immutable | OG/EP | Immutable evidence object + normalized links | Verbatim text/locator/version retained | H4 migration/history regression | Tasks 3,14,20–21 | MANDATORY |
| R03 | Every material scientific assertion is traceable | OG/EP | Evidence link or explicit synthesis/inference chain | Evidence ID/locator/role/support | H2 provenance QA | Tasks 3,14,20–21 | MANDATORY |
| R04 | Evidence location is never invented | OG/EP | Nullable/qualified locator + review state | Locator only as available/permitted | H2 provenance QA | Tasks 3,14,20–21 | MANDATORY |
| R05 | Evidence strength is never inflated | OG/EP | Evidence role/strength/support/context | Source wording and scope | H2/H6 review | Tasks 3,14,20–21 | MANDATORY |
| R06 | Absence of reporting ≠ negative evidence | OG/EP | Distinct availability/reporting/result states | Evidence or explicit not-reported state | H6/H7 regression | Tasks 3,14,20–21 | MANDATORY |
| R07 | Claimed solution ≠ demonstrated solution | CS + relevant owner | Separate claim/demonstration status | Source evidence for each | H6 boundary regression | Tasks 3,6–7,12,14 | MANDATORY |
| R08 | Demonstrated ≠ related ≠ potential application | CS + relevant owner | Application role/status | Evidence per application role | H6 boundary regression | Tasks 3,6–7,12,14 | MANDATORY |
| R09 | Physical problem ≠ computational task ≠ PINN challenge | CS + relevant owner | Separate problem/task/challenge structures | Evidence/context per record | H6 boundary regression | Tasks 3,6–7,12,14 | MANDATORY |
| R10 | Limitation ≠ open problem ≠ future work ≠ Atlas gap | CS + OG/SYN | Separate paper records + synthesis gap object | Paper evidence; synthesis chain | H6/H8 regression | Tasks 3,6–8,14 | MANDATORY |
| R11 | Contribution ≠ outcome | CS | Separate contribution/outcome records | Evidence per record | H6 regression | Tasks 3,6,12,14 | MANDATORY |
| R12 | Validation ≠ evaluation result | CS | Separate validation/evaluation structures | Evidence/test context | H6 regression | Tasks 3,6,12,14 | MANDATORY |
| R13 | Scientific record ≠ taxonomy term | TR + CS boundary | Taxonomy links separate from record/field structures | Paper evidence for classification | H6 regression | Tasks 3–6,12,14 | MANDATORY |
| R14 | Paper-level relation ≠ framework relation | RR + SYN boundary | Paper relation registry separate from synthesis graph | Paper evidence vs synthesis evidence | H6/H8 regression | Tasks 6–8,12,14 | MANDATORY |
| R15 | Bibliographic record ≠ complete Paper Profile | BIB + CS | Bibliographic core + linked scientific entities | Metadata provenance + scientific evidence | H5/H6 | Tasks 3,9,12 | MANDATORY |
| R16 | Ambiguity remains visible | OG/EP | Unresolved/qualified states | Evidence retained | H1/H7; zero hidden states | Tasks 3–7,14,20–21 | MANDATORY |
| R17 | Contradictory evidence is preserved | OG/EP | Conflict records + multiple evidence objects | Conflicting evidence retained | H7 | Tasks 3–7,14,20–21 | MANDATORY |
| R18 | Novel evidence is not force-fit | OG/EP + relevant owner | Paper-specific/provisional/unresolved/X6 states | Evidence preserved before classification | H1; forced mappings=0 | Tasks 3–7,14,20–21 | MANDATORY |
| R19 | Classification may change; source evidence may not | OG/EP | Versioned normalized classification + immutable evidence | Prior/new classification history | H4 | Tasks 3–7,10,14,19–21 | MANDATORY |
| R20 | Context dependence is preserved | OG/EP + owners | Context/scoping attributes/evidence | Application/problem/data/training/validation context | H6 | Tasks 3–8,14,20–21 | MANDATORY |
| R21 | Stable canonical identities are reused | CS/BIB | Stable IDs + explicit cross-entity links | Identity/version provenance | H5 | Tasks 9–12,14,19–21 | MANDATORY |
| R22 | Material multiplicity is not flattened | CS | Repeatable entities/records | Evidence per distinct component/test case | H6 + cardinality QA | Tasks 3,12,14,19–21 | MANDATORY |
| R23 | One authoritative value feeds many derived views | BIB/CS + implementation | Authoritative source + deterministic derived views | Update/source history | Duplication + propagation regression | Tasks 9–12,18–19 | MANDATORY |
| R24 | Corrections preserve history | OG/BIB | History/change records + dependency propagation | Old/new/source/reviewer history | H4 + Task10 regression | Tasks 10,12,19–21 | MANDATORY |
| R25 | Frequency ≠ evidence strength | OG/SYN | Synthesis evidence model, not simple counts | Directness/independence/scope/contradiction | H8 | Tasks 6–8,17,20–21 | MANDATORY |
| R26 | Only eligible reviewed records enter governed synthesis | OG/SYN | Eligibility state + reviewed inputs | Evidence/review status | H8 contamination=0 | Tasks 6–8,17,20–21 | MANDATORY |
| R27 | Citation repetition ≠ independent support | OG/SYN | Independent-source attribution where detectable | Origin/source chain | H8 synthesis review | Tasks 6–8,17 | MANDATORY |
| R28 | Qualitative synthesis ≠ quantitative effect estimation | OG/SYN | Qualitative synthesis type/confidence/scope | Supporting/contradictory evidence | H6/H8 | Tasks 6–8,17 | MANDATORY |
| R29 | Aggregates drill down to evidence basis | OG/SYN | Aggregate→record→paper/evidence trace | Supporting IDs/versions | H8/reproducibility | Tasks 6–8,17 | MANDATORY |
| R30 | AI output remains proposal until human review | OG/EP | Candidate vs verified states | Reviewer disposition/history | H3 = 100% for verified records | Tasks 12–14,20–21 | MANDATORY |
| R31 | Review dispositions are explicit | OG/EP | Accept/edit/reject/needs-evidence/ontology-review/unresolved states | Review history | H3/H11 workflow QA | Tasks 14,20–21 | MANDATORY |
| R32 | Automation preserves scientific boundaries | OG/EP | Guardrailed automation/workflow | Source evidence remains upstream | H1/H3/H6 | Tasks 12–14,20–21 | MANDATORY |
| R33 | Serialization cannot redefine meaning | SER under scientific owners | Schema/API/UI derived from governed model | Version/migration trace | H5/H6 semantic equivalence | Tasks 12–14,19–21 | MANDATORY |
| R34 | Complete Atlas surface is in scope | Science owners + Task9/implementation | Surface register + dependency graph | Upstream provenance retained | Task9 + Task18 | Tasks 2,9,15–19,22 | MANDATORY |
| R35 | Page reorganization cannot change scientific meaning | Science owners + Task9/implementation | Route mapping independent of scientific ownership | Migration decision/history | H6 + Task18 | Tasks 2,9,18–19 | MANDATORY |
| R36 | Future pages inherit the same governance | Science owners + Task2/9/22 | Reusable governed entities/queries | Page declares owner/provenance/write behavior | X8 + Task18 as applicable | Tasks 2,9,15–18,22 | MANDATORY |
| R37 | Cross-links preserve entity meaning | Science owners + RR | Governed IDs/typed relations | Evidence where scientific relation is implied | H6 + link regression | Tasks 3,9,16–18 | MANDATORY |
| R38 | Route compatibility never requires conflicting scientific duplicates | Task9/19 + owners | Redirect/compatibility layer separate from authority | Migration/route history | Task18/19 regression | Tasks 2,9,18–19 | MANDATORY |
| R39 | Computational Resources remains independently governed | CR independent + Atlas boundary | Separate CR schema/IDs/governance | CR provenance preserved | X9 boundary regression | Tasks 9,18,22 + future checkpoint | MANDATORY |
| R40 | CR interoperability preserves both identities/provenance | CR independent + Atlas boundary | Explicit paper↔resource mapping/interface | Both provenance chains preserved | X9 boundary/integration regression | Tasks 9,18,22 + future checkpoint | MANDATORY |
| R41 | CR Frameworks & Libraries ≠ Atlas scientific frameworks | CR + SYN boundary | Distinct namespace/category semantics | Independent provenance | H6 boundary regression | Tasks 9,18,22 | MANDATORY |
| R42 | Paper reproducibility ≠ automatically CR reproducibility | CR + CS/OG boundary | Explicit reproducibility mapping states | Evidence on each side | H6 + integration regression | Tasks 9,18,22 | MANDATORY |
| R43 | Historical baselines are provenance, not current authority | OG | Historical version store/reference | Version/change provenance | H4/readback | Tasks 10,12,19–21 | MANDATORY |
| R44 | Scientific version changes are explicit | OG + correct owner | Ontology version + changelog/promotion | Trigger evidence + migration notes | H4/H10; promotion QA | Tasks 10,12,19–21 | MANDATORY |
| R45 | Backward compatibility preserves evidence/history | OG/SER | Migration map + preserved old state | Raw evidence/history retained | H4/H10 | Tasks 10,12,19–21 | MANDATORY |
| R46 | Scientific defensibility outranks completeness optics | OG | Explicit unresolved/not_reported/not_applicable states | Evidence retained | H1/H7 | Tasks 6–8,14,17,20–22 | MANDATORY |
| R47 | Comparisons must be scientifically valid | OG/SYN | Comparison-choice constraints/warnings | Scope/metric/baseline/context evidence | H6/H8 | Tasks 6–8,17,20–22 | MANDATORY |
| R48 | Atlas synthesis must be reproducible/auditable | OG/SYN | Versioned synthesis definitions + eligible input trace | Paper/evidence/version links | H8 + reproducibility audit | Tasks 6–8,17,20–22 | MANDATORY |

## 5. Task 1.4 controlled dynamic-extension coverage — X1–X9

| ID | Requirement | Authority / owner | Required representation | Evidence / provenance | QA / acceptance | Primary downstream coverage | State |
|---|---|---|---|---|---|---|---|
| X01 | Existing representation is adequate | Correct current owner | Existing field/value/term/relation/repeatable record | Preserve wording/evidence/scope | H1 + semantic adequacy review | Tasks 14,20–21 | MANDATORY |
| X02 | Source-local/paper-specific concept | TR/OG + field owner | paper_specific/source_local/author_defined scoped representation | Exact wording, paper/evidence, scope | No globalization; H1/H2 | Tasks 4–6,14 | MANDATORY |
| X03 | Provisional taxonomy/alias candidate | TR | Provisional term/alias with definition,parent/context,status | First-seen paper/evidence + scope | Recurrence/generalizability review; changelog if promoted | Tasks 4–6,14 | MANDATORY |
| X04 | Provisional relationship candidate | RR | Provisional typed relation with source/target/context/status | First-seen paper/evidence + material conditions | Relation review; no context-free promotion | Tasks 6–7,14 | MANDATORY |
| X05 | Controlled/extensible value candidate | CV + field owner | Existing other-explicit/scoped/provisional mechanism | Exact reported value + evidence | Vocabulary-owner review before canonical addition | Tasks 5,14 | MANDATORY |
| X06 | Structural/schema candidate | CS + OG | Candidate only until demonstrated structural need + future version | Trigger papers/evidence; proof of loss/ambiguity/linking failure | H9; migration/backward regression; owner promotion | Tasks 2,5,12–14,20–21 | MANDATORY |
| X07 | Synthesis-only extension | SYN + OG | Framework/gap/opportunity/synthesis object | Eligible supporting/contradicting evidence | H8; paper-vs-synthesis boundary | Tasks 6–8,17 | MANDATORY |
| X08 | Page/tool/information-architecture extension | Task2/9/22; science upstream | New route/tool consumes governed entities/queries | Declare upstream owners/provenance/write behavior | R34–R38 + Task9/18 | Tasks 2,9,15–18,22 | MANDATORY |
| X09 | Bounded-subsystem integration extension | CR independent + Atlas interface | Explicit mapping/API/crosslink; no absorption | Independent provenance + mapping semantics | Boundary/integration regression | Tasks 9,18,22 + future CR checkpoint | MANDATORY |

## 6. Task 1.5 hard operational gates — H1–H11

| ID | Requirement | Authority / owner | Required representation | Evidence / provenance | QA / acceptance | Primary downstream coverage | State |
|---|---|---|---|---|---|---|---|
| H01 | Scientific representability / zero forced mappings | OG/CS/TR/RR/CV | Faithful, provisional/unresolved, or X6 representation | Evidence preserved before normalization | `forced_mapping_count = 0` | Every extraction batch; Tasks 14,20–21 | HARD GATE |
| H02 | Provenance completeness | OG/EP | Provenance-complete accepted evidence-bound records | paper/evidence IDs, verbatim evidence, locator, role, status, version, conflict/scope | PCR = 100% | Verified publication/synthesis; Tasks 14,20–21 | HARD GATE |
| H03 | Human scientific review coverage | OG/EP | Candidate vs verified state + reviewer disposition | Reviewer/history linked to verified record | Human Review Coverage = 100% | Tasks 14,20–21 | HARD GATE |
| H04 | Evidence/history immutability | OG | Immutable evidence/history + versioned normalization | Raw evidence/IDs/locators/history preserved | Unauthorized rewrites = 0; rollback on violation | Tasks 10,19–21 | HARD GATE |
| H05 | Identity/referential integrity | CS/SER/BIB | Unique canonical IDs and resolved links/FKs | Version/identity provenance | 100% referential integrity; collisions = 0 | Tasks 12–13,19–21 | HARD GATE |
| H06 | Semantic-boundary regression | OG + relevant owners | All R1–R48 separations represented | Evidence/context preserved | All applicable boundary tests PASS | Tasks 13,18,20–21 | HARD GATE |
| H07 | Conflicts/mismatches/ambiguity/negative evidence retained | OG/EP | Explicit conflict/mismatch/unresolved/negative states | Underlying evidence retained | silent resolve/promote/hide counts = 0 | Tasks 14,20–21 | HARD GATE |
| H08 | Synthesis eligibility / contamination control | OG + SYN | Only eligible reviewed inputs; drilldown + contradictions | Supporting/contradicting evidence IDs | `ineligible_positive_synthesis_inputs = 0` | Tasks 6–8,17,20–21 | HARD GATE |
| H09 | Major structural gaps | CS/OG | X6 structural-gap register | Trigger evidence + recurrence/generalizability assessment | `active_major_structural_gap_count = 0` before widening | Tasks 5,12–14,20–21 | HARD GATE |
| H10 | Regression corpus/sentinel preservation | QA + owners | 36-paper + 8 sentinels + A6 + no-merge + 31/31 + 4/4 assets | Existing evidence/history unchanged | 100% applicable regression tests PASS | Tasks 13,18–21 | HARD GATE |
| H11 | Batch publication readiness | QA/operations under OG | Checkpoint with IDs, review, provenance, CMR, X counts, gaps, conflicts, validation, disposition | Batch review/evidence/provenance summary | All publication gates PASS + explicit disposition | Tasks 20–21 | HARD GATE |

## 7. NDU / CMR / gate-state coverage

| ID | Requirement | Authority / owner | Required representation | Evidence / provenance | QA / acceptance | Primary downstream coverage | State |
|---|---|---|---|---|---|---|---|
| G01 | CMR uses paper-scoped Normalization Decision Units | QA/OG | NDU ledger/classification through X1–X9 | Paper scope retained; repeated mentions deduplicated | CMR formula reproducible | Tasks 14,20–21 | MANDATORY |
| G02 | GO threshold | QA | Gate-state record | Supporting metrics retained | All H1–H11 pass; gaps=0; CMR ≥95% | Next already-authorized controlled stage only | MANDATORY |
| G03 | CONDITIONAL GO threshold | QA | Gate-state record + bounded qualification plan | Non-clean NDU evidence retained | All hard gates pass; gaps=0; 90%≤CMR<95% | Bounded adversarial qualification only | MANDATORY |
| G04 | STOP threshold | QA + owning repair layer | Stop record + defect classification | Evidence/history preserved | Any hard gate fail OR gaps>0 OR CMR<90% | Repair owner; rerun QA | MANDATORY |
| G05 | ROLLBACK REQUIRED | QA/implementation + owner | Restore normalized/derived state to last passed checkpoint | Raw evidence/audit history preserved | Corruption of evidence/history/identity/provenance/semantics | Tasks 19–21 | MANDATORY |

## 8. Complete Atlas production-surface and future-extension coverage

| ID | Requirement | Authority / owner | Required representation | Evidence / provenance | QA / acceptance | Primary downstream coverage | State |
|---|---|---|---|---|---|---|---|
| S01 | 26-route current production surface is preservation/migration baseline | Task9/implementation; science upstream | Route register and dependency graph | Upstream scientific provenance unchanged | Inventory completeness + Task18 regression | Tasks 9,18–19 | MANDATORY |
| S02 | Current routes are not final target IA and not a route ceiling | Task2 IA + Task9 | Explicit current→target mapping | Migration decision provenance | No silent retirement/semantic repurpose | Tasks 2,9,19 | MANDATORY |
| S03 | Future pages/tools are open-ended but governed | Task2/9/22 + science upstream | Reusable entities/queries + page registration | Page declares owner/evidence/write behavior | R36 + X8 regression | Tasks 2,9,22 | MANDATORY |
| S04 | Reserved Computational Resources hierarchy preserved as bounded target direction | CR independent + Task2/9 interface | CR parent: Code & Software; Datasets; Frameworks & Libraries; Simulators & Solvers; Reproducibility Explorer | Independent paper/resource provenance | X9 boundary checks; no branch mutation | Tasks 2,9,18,22 | MANDATORY |
| S05 | Every current/discovered surface receives full Task9 dependency/ownership audit | Task9 | Per-page source/write/key/dependency/crosslink/migration record | Value-owner and mutation-path provenance | Audit completeness checklist | Task 9 | MANDATORY |
| S06 | Every current route receives explicit future disposition | Task9 + Task2 IA | retain/redesign/merge/child/rename/replace/redirect/retire-after-verified-migration | Decision rationale + dependency evidence | No disposition without audit/regression requirements | Tasks 9,19 | MANDATORY |
| S07 | No route/page/tool retired or disconnected before verified migration/regression closure | Task9/19/18 | Compatibility/redirect or replacement plan | Preserve scientific owner and historical dependency rationale | Navigation/deep-link/mobile/accessibility/functional regression as applicable | Tasks 18–19 | MANDATORY |

## 9. Current 26-route baseline — explicit coverage register

Every route below is recognized by Task 1.6. This is deliberately **not** a completed page dependency audit; it binds every route to Task 9 before production migration.

| Current route | Current functional group | Upstream authority expectation | Mandatory Task 9 coverage | Target disposition status |
|---|---|---|---|---|
| `/` | Entry/navigation & support | Support/navigation; scientific owner only where linked content exists | Files/data/writes/keys/duplication/crosslinks/deep-links/mobile/accessibility/migration/regression | PENDING TASK 9; target IA not frozen |
| `/pinn-ecosystem/` | Methodology/scientific knowledge | Relevant CS/CV/TR/RR/OG + derived synthesis | Full Task 9 audit | PENDING TASK 9 |
| `/architectures/` | Methodology/scientific knowledge | Relevant scientific owners + derived analytics | Full Task 9 audit | PENDING TASK 9 |
| `/activation-functions/` | Methodology/scientific knowledge | Relevant scientific owners + derived analytics | Full Task 9 audit | PENDING TASK 9 |
| `/training/` | Methodology/scientific knowledge | Relevant scientific owners + derived analytics | Full Task 9 audit | PENDING TASK 9 |
| `/optimizers/` | Methodology/scientific knowledge | Relevant scientific owners + derived analytics | Full Task 9 audit | PENDING TASK 9 |
| `/performance-metrics/` | Methodology/scientific knowledge | Relevant scientific owners + governed evaluation/synthesis | Full Task 9 audit | PENDING TASK 9 |
| `/mathematical-formulations/` | Methodology/scientific knowledge | Relevant scientific owners + derived knowledge | Full Task 9 audit | PENDING TASK 9 |
| `/pinn-types/` | Methodology/scientific knowledge | Relevant scientific owners/taxonomy | Full Task 9 audit | PENDING TASK 9 |
| `/abbreviations/` | Methodology/scientific knowledge | Taxonomy/terminology + implementation | Full Task 9 audit | PENDING TASK 9 |
| `/pinn-realm/` | Bibliographic/publication intelligence | BIB + governed derived analytics | Full Task 9 audit | PENDING TASK 9 |
| `/applications/` | Methodology/scientific knowledge | Application scientific owners + analytics | Full Task 9 audit | PENDING TASK 9 |
| `/references/` | Bibliographic/publication intelligence | BIB | Full Task 9 audit | PENDING TASK 9 |
| `/software/` | Software/data/resource-oriented | Current implementation; future CR bounded mapping where approved | Full Task 9 audit including CR target mapping | PENDING TASK 9; may later nest/redirect |
| `/datasets/` | Software/data/resource-oriented | Current implementation; future CR bounded mapping where approved | Full Task 9 audit including CR target mapping | PENDING TASK 9; may later nest/redirect |
| `/frameworks/` | Synthesis frameworks | SYN with paper-evidence boundary | Full Task 9 audit | PENDING TASK 9 |
| `/frameworks/design-stack/` | Synthesis frameworks | SYN with paper-evidence boundary | Full Task 9 audit | PENDING TASK 9 |
| `/frameworks/co-design/` | Synthesis frameworks | SYN with paper-evidence boundary | Full Task 9 audit | PENDING TASK 9 |
| `/frameworks/design-performance/` | Synthesis frameworks | SYN; 98-cell synthesis remains synthesis-level | Full Task 9 audit | PENDING TASK 9 |
| `/frameworks/failure-diagnostics/` | Synthesis frameworks | SYN; paper diagnostic pathways remain evidence-bound | Full Task 9 audit | PENDING TASK 9 |
| `/dataset-manager/` | Controlled maintenance/review | Current BIB/editor workflow; future science writes separately governed | Full Task 9 write-path/authority audit | PENDING TASK 9 |
| `/dataset-manager/review/` | Controlled maintenance/review | Current review workflow; future science writes separately governed | Full Task 9 write-path/authority audit | PENDING TASK 9 |
| `/references/changelog/` | Bibliographic/publication intelligence | BIB correction/history | Full Task 9 audit | PENDING TASK 9 |
| `/cite/` | Entry/navigation & support | Support/citation surface | Full Task 9 audit | PENDING TASK 9 |
| `/privacy/` | Entry/navigation & support | Legal/privacy surface | Full Task 9 audit | PENDING TASK 9 |
| `/404.html` | Entry/navigation & support | Fallback/navigation surface | Full Task 9 audit | PENDING TASK 9 |

## 10. Mandatory Task 9 per-surface audit contract

For every current route, newly discovered production surface, generated view, deep-link surface, or independently linked Atlas-facing consumer, Task 9 must record at minimum: route/page/tool identity and purpose; implementation files; authoritative upstream data; generated/derived datasets and transformations; joining IDs/keys; read/write behavior; forms/request/review/mutation pathways; duplicated values/semantics; current and future owners; relationship to ontology/bibliography/synthesis/independent subsystems; scripts/workflows/assets/indexes/search/navigation/deployment dependencies; inbound/outbound crosslinks; deep-link stability; mobile/responsive; accessibility/fallback where applicable; migration impact; regression tests; and explicit future disposition.

Task 9 may discover additional routes/surfaces. Such additions extend the audit inventory without changing the ontology or treating the current 26 routes as a ceiling.

## 11. Reserved target direction for Computational Resources

```text
Computational Resources
├── Code & Software
├── Datasets
├── Frameworks & Libraries
├── Simulators & Solvers
└── Reproducibility Explorer
```

Current `/software/` and `/datasets/` are preserved and audited first, not assumed to remain permanent top-level routes. `Frameworks & Libraries` is a resource/software category and not the four Atlas scientific synthesis frameworks. The future Reproducibility Explorer may integrate paper-level and resource-level reproducibility only through explicit governed mapping. No Computational Resources Stage 1/2/3 branch or internal schema is modified or absorbed by Task 1.6.

## 12. Requirement-to-roadmap handoff map

| Downstream owner | Mandatory inherited contract |
|---|---|
| Task 2 | A01–A11, O01–O20, R1–R48, X1–X9, S01–S07 |
| Task 3 | O01–O04, R1–R24, H1–H7 |
| Tasks 4–5 | O05, R13/R16–R20/R43–R46, X1–X6, H1/H9 |
| Task 6 | O06/O18, R25–R29/R47–R48, H8 |
| Tasks 7–8 | O07/O18, R14/R25–R29/R47–R48, X7, H8 |
| Task 9 | O08/O19/O20, R23/R34–R38, X8/X9, S01–S07, all current/discovered surfaces |
| Task 10 | O10/O19, R19/R23/R24/R43–R45, H4 |
| Tasks 11–13 | A05/A07, O11–O16, R21–R24/R33/R43–R45, X1–X6, H5/H10 |
| Task 14 | O01/O03/O05/O09, R1–R20/R30–R33/R46, X1–X6, H1–H9/H11, CMR |
| Tasks 15–17 | O04/O06–O08/O18/O20, R29/R34–R38/R47–R48, X7/X8 |
| Task 18 | R23/R34–R38, H5/H6/H10, S01–S07, Task 9 outputs |
| Task 19 | R19/R21–R24/R33/R38/R43–R45, H4/H5/H10, S01–S07, rollback |
| Task 20 | H1–H11, G01–G05, 36/36 + 8/8 + A6 + 31/31 + 4/4 regression |
| Task 21 | H1–H11 + continuous CMR; verified checkpoint for every batch |
| Task 22 | O10/O16/O20, R23/R24/R34–R48, X1–X9, applicable H gates, S03/S07 |

## 13. Coverage closure and orphan check

Task 1.6 covers **111 explicit Master-Plan contract requirements** derived from Tasks 1.1–1.5: Task 1.1 authority/reconciliation 11; Task 1.2 objectives 20; Task 1.3 invariants 48; Task 1.4 extension classes 9; Task 1.5 hard gates 11; Task 1.5 NDU/CMR/disposition rules 5; complete-surface/future-extension rules 7. The current 26-route production baseline is additionally enumerated route-by-route and bound to Task 9.

**Specification orphan check: 0.**

No R1–R48 invariant lacks an owner, representation obligation, provenance expectation, QA path, and downstream assignment. No X1–X9 class lacks an owner/workflow/QA consequence. No H1–H11 gate or CMR disposition lacks a measurable acceptance condition and downstream execution point. No registered current Atlas route is omitted from the preservation/audit contract.

This does **not** assert downstream implementation completion.

## 14. Task 1.7 freeze safeguard

Task 1.7 may freeze Master Plan v1.0 only if final readback confirms: Task 1.1–1.6 records are mutually consistent; locked v0.7 is unchanged; R1–R48, X1–X9, H1–H11 and G01–G05 remain represented; the 26-route register is a preservation/audit baseline rather than final IA/ceiling; Task 9 remains mandatory for registered and later-discovered surfaces; the reserved CR hierarchy remains a bounded target direction; future pages remain open-ended but governed; no downstream implementation/provider/migration/ontology-version decision is falsely presented as complete; and the roadmap handoffs in this matrix remain intact.

Master Plan v1.0 is an **implementation contract**, not a new ontology version.

## 15. Task 1.6 verdict

**PASS**

- Explicit contract requirements mapped: **111/111**.
- Task 1.3 invariants mapped: **48/48**.
- Task 1.4 extension classes mapped: **9/9**.
- Task 1.5 hard gates mapped: **11/11**.
- NDU/CMR/disposition rules mapped: **5/5**.
- Current registered production routes recognized: **26/26**.
- Specification orphan requirements: **0**.

No locked v0.7 scientific document was modified. No production Atlas `main` file was modified. No Computational Resources Stage 1/2/3 branch was modified. No database/provider/schema migration, ontology promotion, production extraction, route redesign, or page implementation was authorized.

**Exact next action:** Roadmap **Task 1.7 — Freeze Master Plan v1.0 as the implementation contract (not a new ontology version)** by performing a final Task 1.1–1.6 consistency/readback audit, confirming the Task 1.6 orphan count remains zero and complete-surface/future-extension safeguards remain present, recording the freeze decision, synchronizing the Master Memory, and stopping before Task 2.
