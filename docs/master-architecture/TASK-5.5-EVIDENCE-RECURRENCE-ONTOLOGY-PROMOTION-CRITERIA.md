# Task 5.5 — Evidence / Recurrence Criteria for Future Ontology Promotion

Status: **PASS / COMPLETE**

Date: 2026-09-10

Branch: `docs/master-atlas-roadmap`

Starting branch head: `5fe6eb09c270ddc252198f8ce6f6a0abc89dba5f`

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

Implementation contract: frozen Master Plan v1.0.

Machine-readable coordination contract: `atlas-ontology-promotion-criteria-spec.json` (`task-5.5-v1.0.0`).

This task defines **evidence and recurrence criteria for future ontology promotion**. It does not promote any candidate, create v0.8, modify locked v0.7, reopen Tasks 1–4, create paper assignments, implement a database, start Task 6, or modify production `main` or Computational Resources Stage branches.

## 1. Question resolved

Task 5.5 answers:

> What evidence, recurrence, independence, semantic, structural, review, migration and regression conditions must be satisfied before a provisional/scoped concept, value, alias, relation, semantic refactor or structural-watch case can be promoted into a future governed ontology version?

The controlling answer is:

**Promotion is a governed scientific decision, never an automatic consequence of frequency.** Numeric recurrence minima create eligibility for scientific review; they do not create canonical status. Frequency is not evidence strength.

A single clear source may justify preservation as paper-specific, source-local or provisional. Corpus-global canonicalization requires independent recurrence and/or a defensible cross-paper generalizability pathway, plus semantic distinctness, correct ownership, collision/counterevidence review, human scientific approval, versioned change control and applicable regression QA.

Structural promotion has the highest burden: it first requires a demonstrated Task 5.4 / X6 representational failure. Recurrence alone never turns a useful concept into a new field or entity.

## 2. Controlling inputs re-read

Task 5.5 is governed by:

- Task 1.3 — R1–R48 non-negotiable scientific rules;
- Task 1.4 — X1–X9 controlled dynamic-extension lifecycle;
- Task 1.5 — H1–H11 operational gates and NDU/CMR controls, especially H9 major structural gaps and H10 regression;
- locked v0.7 Ontology Governance and Change Rules;
- the other locked v0.7 single-owner ontology documents and evidence protocol as applicable;
- Task 5.1 methodology-dimension catalogue;
- Task 5.2 physics/knowledge learning-integration taxonomy;
- Task 5.2B general ML learning-paradigm taxonomy;
- Task 5.2C external methodology coverage/gap audit;
- Task 5.3 model/representation/coupled-ML architecture taxonomy;
- Task 5.4 structural-specialization decisions and SW-01–SW-07 watch register.

Locked v0.7 remains unchanged. Task 5.5 defines future review criteria only.

## 3. Promotion Evidence Unit — PEU

To prevent mention-frequency inflation, Task 5.5 defines a **Promotion Evidence Unit (PEU)**:

> One deduplicated **study-family-scoped, evidence-backed support instance** for one candidate meaning or relation, after repeated mentions and duplicate publication versions of the same underlying study are collapsed for recurrence counting.

### 3.1 Independence rules

1. At most one positive recurrence count is assigned per independent study family for the same candidate meaning and promotion question.
2. Multiple experiments, components or test cases inside one paper may demonstrate multiplicity, structural severity or scope, but do not become multiple independent recurrence counts.
3. Preprint, conference and journal versions of substantially the same study count as one study family unless an independently evidenced scientific development materially changes the promotion question.
4. A review that merely repeats a cited primary-study claim does not create an independent primary recurrence count.
5. A review, standard or taxonomy source may contribute **external semantic/generalizability evidence** when it independently defines or synthesizes a concept. This contribution is recorded separately from Atlas primary-paper recurrence.
6. Paper identity, source role, evidence lineage and material scope remain explicit.

### 3.2 Positive PEU eligibility

A PEU can count positively only when:

- paper/study identity is resolved;
- the evidence is workflow-verified;
- semantic support is supporting, or partially supporting only after narrowing the candidate claim to the actually supported scope;
- the evidence locator is retained as precisely as available and is never invented;
- evidence/source role is appropriate to the promotion question;
- conflict or mismatch is not counted as positive support for the affected claim;
- unreviewed AI/extractor output is not counted as positive support.

Contradictory, mismatched, negative and unresolved evidence remains first-class evidence in the promotion packet; it is never discarded to satisfy a threshold.

## 4. Ten universal promotion gates

Every promotion class must pass all applicable gates.

| Gate | Requirement |
|---|---|
| `PG-01` Owner correctness | Identify the single scientific owner. UI/database convenience cannot choose the owner. |
| `PG-02` Definition and distinctness | Provide a precise operational definition and preserve all no-merge boundaries. |
| `PG-03` Evidence traceability | Positive PEUs must be linked to verified evidence, source role and scope; raw evidence stays immutable. |
| `PG-04` Independence audit | Deduplicate repeated mentions and publication versions; report study-family recurrence separately from raw occurrence count. |
| `PG-05` Collision/counterevidence | Search known homographs, incompatible meanings, negative/counterevidence and conflicting authoritative taxonomies; preserve them. |
| `PG-06` Scientific/analytical utility | Promotion must improve scientifically valid normalization, interpretation, querying or linking; popularity alone is insufficient. |
| `PG-07` Human scientific review | A human reviewer must approve the scientific meaning and scope. AI/extractors cannot self-promote. |
| `PG-08` Version/history | Approved scientific changes enter only through the correct future candidate ontology version and changelog, preserving prior state. |
| `PG-09` Migration/regression | If records/structure change, migration and all applicable regression/sentinel checks must pass before lock. |
| `PG-10` No automatic threshold action | Meeting a numeric minimum creates **eligibility for review**, never automatic canonicalization. |

## 5. Promotion classes and criteria

### 5.1 PR-TAX — canonical taxonomy term or global hierarchy placement

Standard recurrence path:

- **at least 2 independent Atlas PEUs** supporting the same scientifically consistent meaning.

Alternative generalizability path:

- **at least 1 Atlas PEU**, plus either:
  - one formal/consensus standard **and** one independent peer-reviewed source; or
  - two independent peer-reviewed taxonomy/review/method sources;
- plus an explicit rationale showing cross-paper applicability.

Additional requirements:

- the candidate is scientifically distinct, not merely alternate wording;
- global `is_a`/parent placement requires semantic entailment, not co-occurrence or a source-specific hierarchy preference;
- authoritative hierarchy disagreement blocks forced global `is_a`; retain source-local/related-concept semantics instead where needed;
- unresolved collisions that make one global meaning unsafe block canonical promotion.

External literature can establish semantics/generalizability but cannot manufacture Atlas paper assignments.

### 5.2 PR-ALIAS — alias-scope promotion

A single explicit source may justify a **source-local** or **author-defined** alias when equivalence is directly evidenced in that source scope.

A **corpus-global alias** requires:

- at least **2 independent equivalence contexts**;
- a corpus collision/homograph search;
- **0 known incompatible usages** for the proposed global equivalence.

Case, punctuation, hyphenation, pluralization, acronym similarity or lexical proximity are never sufficient by themselves. Any unresolved incompatible meaning blocks corpus-global aliasing.

### 5.3 PR-CV — canonical controlled-vocabulary value

Standard recurrence path:

- **at least 2 independent Atlas PEUs**.

Alternative generalizability path:

- **at least 1 Atlas PEU**, plus either one formal/consensus standard or two independent peer-reviewed sources that define a stable general value.

Additional requirements:

- the existing field/entity is already the correct owner;
- the value has an operational definition;
- the value is not merely a proxy for another dimension;
- adding the value does not silently broaden the scientific meaning of its owner.

If the owner itself is inadequate, this is not PR-CV; it must be routed through X6 / PR-STRUCT.

### 5.4 PR-REL — canonical relation type or relation-domain generalization

A new canonical relation type requires:

- **at least 2 independent Atlas PEUs containing direct evidence for the relation**;
- consistent relation direction, source class, target class and semantic meaning.

A relation type can be canonical while individual relation assertions remain paper/component/test-case scoped. Promotion must therefore never turn context-sensitive evidence into a context-free universal edge.

Performance, superiority, causality, mitigation and improvement claims remain instance-scoped.

For **broadening an existing canonical relation domain**, positive recurrence is not enough. In addition to positive recurrence, require at least **one adversarial/negative boundary sentinel** demonstrating that the generalized definition does not swallow a known non-equivalent case. This preserves the successful R-C20 precedent.

### 5.5 PR-STRUCT — field, entity or structural generalization

Structural promotion has the highest evidentiary burden.

First, Task 5.4's structural-home-first test must fail and an X6 deficiency must be demonstrated. The trigger follows Task 1.5 H9 exactly through either path:

**Single-case severity path:** one adversarial verified paper demonstrates that current structure cannot preserve a mandatory Task 1.3 distinction, evidence/provenance, stable identity, required multiplicity or scientifically necessary linkage without information loss.

**Independent-recurrence path:** the same irreducible X6 deficiency recurs in **at least 2 independent study families** and cannot be reconstructed through existing fields, repeatable records, taxonomy, scoped aliases, typed relations, evidence locators or synthesis objects.

After either trigger, promotion is still **not automatic**. A future structural candidate must also demonstrate:

- correct owner;
- irreducible scientific loss/ambiguity/linking failure rather than easier querying;
- generalization-before-duplication;
- minimal additive/backward-compatible structure where scientifically sufficient;
- lossless migration without raw-evidence rewriting;
- applicable H1–H11 PASS;
- resolution of the active structural gap;
- applicable 36-paper regression, targeted sentinels, A6 migration/no-merge/evidence checks, 31-field/four-framework crosswalk and dependent architecture/profile contract regression;
- explicit future ontology-version approval and lock.

**Recurrence without X6 loss is never sufficient for structural promotion.**

### 5.6 PR-SEM — merge, re-parent, deprecate or semantic refactor

This class has **no fixed recurrence minimum** because a scientific correction may be required by semantic evidence rather than popularity.

It requires:

- a full collision/no-merge audit;
- no unresolved incompatible usages for a global merge;
- inventory of every affected normalized record/alias/relation;
- preservation/resolvability of historical IDs, labels and decisions;
- explicit replacement/re-parent rationale;
- lossless or explicitly scoped migration with rollback path;
- regression covering both previous and proposed semantics.

A canonical concept is not retained merely because it is frequent if new evidence proves the current semantics wrong.

## 6. Decision-state lifecycle

Candidates use the following governed progression where applicable:

`captured → evidence_incomplete / keep_paper_specific_or_source_local / keep_provisional / monitor_recurrence → eligible_for_promotion_review → approved_for_candidate_version → candidate_version_regression_passed → promoted_and_locked`

Blocking/terminal states remain explicit:

- `blocked_by_collision_or_counterevidence`;
- `rejected_or_deferred`.

A candidate may remain provisional indefinitely when that is the scientifically correct state.

## 7. Task 5.4 structural-watch binding

All seven Task 5.4 watches are now bound to `PR-STRUCT`; none is promoted by Task 5.5.

| Watch | Current treatment | Evidence needed before structural review can advance |
|---|---|---|
| `SW-01` internal latent semantics | D2 taxonomy/objective + model/component relations | Latent objects require scientifically distinct identity/role/objective/provenance links that current representation cannot preserve without ambiguity/loss. |
| `SW-02` learned-model/component identity | D2 composition + typed component-role links | Distinct learned components require stable links to own architecture/configuration/I-O/training/role/evidence and scope/context fails to preserve identity. |
| `SW-03` temporal decomposition | D2 temporal-decomposition + protocol/decomposition/parallel/transfer links | Windows/segments require stable boundaries, order, interfaces/transfers or segment attributes unreconstructable from existing records. |
| `SW-04` collaborative/federated workflow | D2 learning taxonomy + participant/topology/aggregation/partition links | Repeatable participant/data-owner/topology/aggregation identities become scientifically necessary and contextual relations prove inadequate. |
| `SW-05` formulation detail | D2 formulation taxonomy + constraint/enforcement/integration links | Repeatable formulation attributes/component links materially affect interpretation and cannot be reconstructed. |
| `SW-06` domain-decomposition enrichment | E1 existing owner + dynamic taxonomy | Recurring decomposition attributes/linkages become scientifically necessary and unreconstructable from current owner, parallel execution, network config, relations and evidence. |
| `SW-07` transfer/adaptation events | D2 transfer/adaptation taxonomy + source/target/task/model/training links | Multiple events require separately stable source/target/stage/model/domain/task/evidence identity and current context becomes ambiguous/lossy. |

For SW-02 and SW-07 especially, multiple components/events inside one paper may prove **severity or multiplicity failure**, but they remain one independent recurrence unit for the recurrence path.

The appearance of words such as latent, federated, weak, variational, domain decomposition or transfer is not structural evidence by itself.

## 8. Candidate promotion packet

Before any future approval, prepare one review packet containing at minimum:

1. candidate ID and promotion class;
2. current status and proposed status;
3. single scientific owner;
4. precise definition plus neighboring/no-merge distinctions;
5. exact source wording preserved;
6. positive PEU table with paper/study-family identities and evidence IDs/locators;
7. raw occurrence count reported separately from independent PEU count;
8. external semantic/generalizability evidence reported separately from Atlas recurrence;
9. collision, counterevidence and negative-evidence audit;
10. scientific/analytical utility rationale;
11. affected records, aliases, relations or structures;
12. migration/backward-compatibility plan when applicable;
13. regression/sentinel plan;
14. human reviewer decision and rationale;
15. candidate ontology version and changelog entry if approved.

Without this packet, the candidate cannot move from review eligibility to candidate-version approval.

## 9. Anti-gaming and scientific-integrity rules

The promotion system must never:

- split repeated mentions in one paper into artificial independent PEUs;
- count preprint/conference/journal versions of one underlying study as independent recurrence without material scientific independence;
- count review repetition of cited claims as independent primary recurrence;
- suppress collisions, mismatches, contradictory evidence, negative results or unresolved states to satisfy a threshold;
- promote a concept merely because it appears in an external taxonomy;
- retroactively infer unreported classifications just because a new term/field later exists;
- convert page/filter demand into scientific structural need;
- use raw frequency, citation count or popularity as a substitute for semantic evidence;
- weaken Task 1.3 no-merge boundaries to raise recurrence counts.

## 10. Future-version promotion gate

Meeting a Task 5.5 criterion makes a candidate **eligible for governed promotion review**. Actual scientific promotion requires a separately authorized candidate ontology version.

Before that candidate version may be locked/promoted:

- only the correct owner document/registry is changed;
- the versioned changelog is complete;
- migration is specified where normalized records change;
- raw evidence/history immutability is confirmed;
- collisions/no-merge constraints and contradictions remain preserved;
- human scientific review is complete;
- applicable regressions/sentinels pass;
- serialization, architecture and Paper Profile contracts are synchronized if affected;
- the change creates no unresolved major structural gap;
- an explicit lock/promotion decision is recorded.

Task 5.5 does **not** create such a candidate version.

## 11. Relationship to Task 1.5 CMR and scale-out

PEU recurrence and NDU/CMR measure different things:

- **NDU/CMR** measures representational maturity of paper-scoped normalization decisions during scale-out;
- **PEU** measures independent evidence support for a specific future ontology-promotion question.

A high CMR cannot substitute for PEU evidence or override a structural hard gate. Likewise, a frequent provisional concept can remain correctly represented and therefore count as cleanly mapped without being canonicalized.

## 12. Historical precedent consistency check

The criteria are consistent with the locked ontology's own successful evolution:

- `fidelity_source_role[]` used Atlas 588 plus independent recurrence 583/740;
- `derived_output_method[]` used 709 plus 546;
- differentiation scheme-detail enrichment used 445 + 554;
- R-C21 used 349 + 644 + 758;
- R-C20 relation broadening used positive 626 + 735 plus negative semantic sentinel 644;
- `study_component_id` remained rejected because existing structure preserved identity sufficiently;
- `physical_knowledge_representation[]` remained deferred because conceptual distinction did not yet demonstrate irreducible structural need;
- structured `domain_decomposition_method[]` enrichment remained monitor-only when the evidence primarily established queryability benefit.

The Task 5.5 framework therefore formalizes prior good governance rather than replacing it with arbitrary popularity thresholds.

## 13. Machine-readable contract and validation obligation

The companion file `atlas-ontology-promotion-criteria-spec.json` records:

- PEU definition and counting rules;
- 10 universal gates `PG-01`–`PG-10`;
- six promotion classes `PR-TAX`, `PR-ALIAS`, `PR-CV`, `PR-REL`, `PR-STRUCT`, `PR-SEM`;
- decision states;
- all seven `SW-01`–`SW-07` watch bindings;
- promotion-packet requirements;
- anti-gaming rules;
- future-version lock gate;
- explicit zero-promotion/change boundary.

The machine-readable file is architecture/governance coordination metadata. It is not itself scientific authority and cannot promote a term, alias, value, relation or schema object.

## 14. Acceptance and change boundary

Task 5.5 acceptance result:

- promotion evidence unit defined: **PASS**;
- universal promotion gates: **10/10**;
- promotion classes: **6/6**;
- Task 5.4 structural watches bound: **7/7**;
- structural trigger aligned with H9/X6: **PASS**;
- independent-recurrence anti-inflation rules: **PASS**;
- collision/counterevidence preservation: **PASS**;
- human-review requirement: **PASS**;
- version/migration/regression gate: **PASS**;
- automatic promotions authorized: **0**.

Change boundary:

- new locked-v0.7 fields/entities: **0**;
- canonical taxonomy terms promoted: **0**;
- global aliases promoted: **0**;
- controlled values promoted: **0**;
- canonical relations promoted: **0**;
- schema changes promoted: **0**;
- paper-level assignments created: **0**;
- Tasks 1–4 reopened: **0**;
- production `main` changes: **0**;
- Computational Resources Stage 1/2/3 changes: **0**;
- Task 6 work performed: **0**.

## 15. Final Task 5 decision

**TASK 5.5 FINAL RESULT: PASS / COMPLETE.**

Tasks 5.1, 5.2, 5.2B, 5.2C, 5.3, 5.4 and 5.5 collectively complete the methodological-extensibility specification layer.

**TASK 5 FINAL RESULT: COMPLETE / PASS.**

Task 5 establishes a comprehensive methodology architecture through complete semantic dimensions, extensible vocabularies, extensible typed relations, controlled structural extension, explicit structural-watch sentinels and governed evidence/recurrence promotion criteria. It does not claim exhaustive enumeration of all future ML methods.

## Stop boundary

**Task 6 was not started.**

Exact next substantive roadmap action, only when separately authorized: **Task 6 — Define the complete Cross-Paper Intelligence system, beginning with Task 6.1: define the dimension catalogue.**
