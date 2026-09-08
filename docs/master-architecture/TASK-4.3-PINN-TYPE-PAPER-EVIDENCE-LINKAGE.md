# Task 4.3 — PINN Type ↔ Paper ↔ Evidence Linkage

Status: **PASS / COMPLETE**

Date: 2026-09-08

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

Implementation contract: frozen Master Plan v1.0.

Controlling inputs: Task 4.1A–4.1E; Task 4.2 taxonomy; Task 1.3 R1–R48; Task 1.4 X1–X9; locked-v0.7 evidence/provenance states; PP-07/L4-P8 boundary.

Task 4.3 defines the governed linkage between PINN-type concepts/candidates, Atlas papers, exact source terminology, and evidence. It does **not** create cross-dimensional application/problem/method/outcome/failure links (Task 4.4), redesign pages (Task 4.5), modify locked v0.7, or populate production `main`.

## 1. Core design decision

A paper-to-PINN-type link is not created from a string match alone.

Task 4.3 separates two layers:

1. **reported-term occurrence** — a paper contains an exact reported form such as `XPINN`, `B-PINN`, `DD-PINN`, `LSTM-PINN`, etc.; and
2. **normalized type assignment** — evidence establishes that the reported form in that paper denotes a governed PINN concept/variant under Task 4.2 semantics.

Every normalized assignment must be backed by an occurrence/evidence record. An occurrence may exist without a normalized assignment.

This prevents the legacy abbreviation inventory from silently becoming a scientific type-assignment table.

## 2. Assignment object

The future relational owner may use a dedicated assignment entity, but Task 4.3 is a non-authoritative coordination specification and does not add a locked-v0.7 field/entity.

The logical assignment object contains:

- `assignment_id` — implementation identifier;
- `paper_id` — stable Atlas paper ID;
- `reported_form` — exact source-reported term;
- `term_reference` — governed L5 term/candidate reference when available;
- `concept_role` — Task 4.2 role (`family`, `subfamily`, `variant`, `source_local_variant`, etc.);
- `primary_lane` and optional `secondary_lanes`;
- `assignment_scope` — paper-level / component-level / test-case-level / source-local;
- `assignment_status`;
- `verification_status`;
- `support_status`;
- `source_role`;
- `evidence_links[]`;
- `collision_ids[]`;
- `alias_scope` where applicable;
- `review_note` / reason for pending, blocked, or rejected normalization;
- `version/history` reference.

The object is multi-valued per paper: one paper may legitimately use several PINN types/variants, and one reported term may have different meanings in different papers.

## 3. Assignment statuses

Task 4.3 defines these linkage states:

### `reported_occurrence`
The exact term occurs in the paper/source inventory. This records terminology occurrence only and does not imply normalized scientific identity.

### `verified_assignment`
Primary-source or equivalently strong scoped evidence supports a normalized link to a governed concept/candidate. This is eligible for public Paper Profile display and later synthesis, subject to the underlying term status and other eligibility rules.

### `provisional_assignment`
The term is plausibly a PINN concept/variant but still needs source verification, recurrence review, or taxonomy adjudication. It remains visible to maintenance/review workflows but is not positive published evidence of a canonical type.

### `source_local_assignment`
The paper explicitly defines a local named method/variant that should be preserved without corpus-global normalization.

### `blocked_collision`
Normalization is blocked because the exact form is overloaded, collision-prone, or insufficiently scoped (for example unqualified `DD-PINN`, `SPINN`, `IPINN`, `E-PINN/e-PINN`).

### `adjacent_not_type`
The term is related but is not a PINN subtype assignment under current evidence (for example PINO/neural-operator or software identity).

### `rejected_assignment`
A proposed normalization was reviewed and rejected. The rejected decision remains historically traceable; the source occurrence is not deleted.

## 4. Evidence requirements

A `verified_assignment` requires, at minimum:

1. stable `paper_id`;
2. exact `reported_form` preserved;
3. evidence sufficient to establish the meaning of that form in the scoped paper;
4. non-invented source locator when an exact locator is available/required;
5. `verification_status=verified` for the assignment evidence;
6. `support_status=supported` or an explicitly scoped partially-supported state that does not overstate the link;
7. a valid `source_role`;
8. collision/alias rules satisfied;
9. the target term/candidate status recorded;
10. reviewer/version history.

The locked-v0.7 distinction remains mandatory:

- workflow verification status ≠ semantic support status;
- author statement ≠ Atlas inference;
- review synthesis ≠ direct current-paper original evidence;
- occurrence frequency ≠ evidence strength.

## 5. Source-role rule

### Primary research paper
For a type assignment about the current primary study, preferred evidence role is `current_paper_original` or `current_paper_reanalysis` where appropriate.

### Review paper
A review paper may contain many PINN names. Those occurrences are valid review terminology evidence, but they do **not** automatically create direct type assignments for the cited primary studies.

`review_synthesis` can support what the review says; a cited study's own scientific assignment requires its own primary-source evidence or an explicitly governed `cited_primary_study` linkage with correct provenance.

This prevents review articles such as large variant surveys from manufacturing hundreds of primary-study assignments.

## 6. Current Task-4.1D inventory → Task-4.3 linkage mapping

The 268 candidate-form inventory / 746 occurrences is retained as the occurrence baseline, not converted wholesale to verified assignments.

Deterministic mapping:

- `eligible_verified_candidate` → occurrence links may become `verified_assignment` **only at the paper scopes actually supported by the verification evidence**; other occurrences remain occurrence/provisional until verified;
- `eligible_unverified_candidate` → `provisional_assignment` by default;
- `conditional_method_dimension_candidate` → occurrence plus methodology relation candidate; no type assignment unless Task 4.2 method-identity criteria are satisfied;
- `conditional_source_specialization_candidate` → source/application specialization link or provisional/source-local assignment, not automatic global family assignment;
- `conditional_source_local_candidate` → `source_local_assignment` by default;
- `conditional_collision_candidate` → `blocked_collision` until the paper-scoped meaning is established;
- `conditional_alias_candidate` → occurrence link plus scoped alias review; corpus-global aliasing remains blocked.

The 59 adjacent/non-type forms excluded from the PINN Type Candidate Inventory remain occurrence/Abbreviation Registry material unless new evidence justifies reconsideration.

## 7. Verified seed assignments from existing scoped evidence

Task 4.3 records a small seed set only where Task 4.1 already established scoped support. These are **not** a claim that all occurrences of the same string are verified.

| Paper | Reported form | Scoped meaning / assignment | Assignment state | Evidence basis |
|---:|---|---|---|---|
| 628 | `cPINN` | Conservative PINN candidate | `verified_assignment` | primary-source title/abstract verification from Task 4.1B |
| 707 | `CPINN` | Coupled PINN candidate | `verified_assignment` | current scoped Atlas meaning + Task 4.1C control |
| 708 | `CPINN` | Coupled PINN candidate | `verified_assignment` | primary-source title/meaning verification from Task 4.1B |
| 410 | `B-PINN` / `B-PINNs` | Bayesian PINN candidate | `verified_assignment` | primary-source title verification from Task 4.1B |
| 616 | `BPINN` | Bayesian PINN candidate | `verified_assignment` | primary-source/scoped verification from Task 4.1B |
| 651 | `DD-PINN` | Domain-decoupled PINN, paper-scoped identity | `source_local_assignment` / scoped verified meaning | primary-source title verification; global normalization blocked by C002/C023/C026 |
| 740 | `DD-PINN` | Data-driven PINN, paper-scoped identity | `source_local_assignment` / scoped verified meaning | scoped source evidence; global normalization blocked by C002/C023/C026 |
| 548 | `DD-PINN` | Domain-discretized PINN, paper-scoped identity | `source_local_assignment` / scoped verified meaning | source verification recorded in Task 4.1C; global normalization blocked |
| 609 | `SPINN` | Soft-constraint PINN meaning used in this paper | `source_local_assignment` | current Atlas meaning explicitly paper-scoped |
| 659 | `E-PINN` | Explicit-time-domain PINN meaning at this paper | `source_local_assignment` | current Atlas meaning explicitly scoped to ref 659 |

These seed rows demonstrate the model. They do not bypass Task 4.3 evidence requirements for the remaining candidate occurrences.

## 8. Collision behavior

Task 4.1C `C001–C030` are mandatory on assignment records.

Examples:

- lowercase `cPINN` assignment cannot be inferred from uppercase `CPINN`;
- `DD-PINN` requires paper-scoped meaning before normalization;
- `SPINN`, `IPINN`, `E-PINN/e-PINN`, `PiNN` and hp-VPINN/HP-VPINN remain scoped as previously adjudicated;
- `B-PINN`/`BPINN` Bayesian evidence does not automatically grant a corpus-global alias relation.

If later evidence resolves a collision differently, the assignment is versioned/revised; the prior state and raw occurrence remain.

## 9. Multi-type and component/test-case scope

A paper may contain multiple genuine PINN method identities. Task 4.3 therefore prohibits a single-value paper type field.

When a paper uses different types for different components/test cases, scope is carried through existing evidence/scope locators and existing identifiers where available. Task 4.3 does **not** introduce mandatory `study_component_id`.

Review-only mentions, comparator methods, proposed variants, and the method actually implemented by the paper must not be collapsed into one undifferentiated paper-type list.

## 10. Claim vs use vs comparison

A paper-type link must preserve the role of the term in that paper. At minimum, implementation must be able to distinguish:

- method used / implemented by current study;
- method introduced/proposed by current study;
- baseline/comparator method;
- cited/reviewed method only;
- background terminology only;
- source-local taxonomy/category label.

Task 4.3 does not create a new locked-v0.7 closed vocabulary for these roles; the role is an implementation/specification requirement to be reconciled with the future relational model in Task 12.

## 11. Public-display and synthesis eligibility

Only assignments with adequate evidence and verified/scoped semantics may be treated as positive public type assignments.

- `verified_assignment` → potentially publishable;
- `source_local_assignment` → publishable only with clear local scope and evidence;
- `provisional_assignment` → maintenance/review layer, not canonical public support;
- `blocked_collision` → never normalized for public counts until resolved;
- `adjacent_not_type` → may be shown as related method, not counted as a PINN subtype;
- `rejected_assignment` → historical/audit record only.

Normalized PINN-type frequency must count eligible paper assignments, not raw term occurrences.

## 12. Paper Profile PP-07 projection

PP-07 remains a read projection over L5 taxonomy + Task-4.3 assignments/evidence.

A public PP-07 can show:

- exact source term;
- normalized/scoped concept when supported;
- family/variant role and lane when governed;
- source-local status/alias scope;
- evidence link;
- component/test-case scope;
- ambiguity/conflict warning where relevant.

PP-07 does not own taxonomy or assignments.

## 13. Machine-readable coordination source

Companion file:

`atlas-pinn-type-paper-evidence-linkage-spec.json`

This is a non-authoritative coordination artifact. It defines assignment states, evidence gates, candidate-state mapping, seed scoped assignments, collision controls, and publication rules. It does not replace the locked ontology or the future relational tables.

## 14. Evidence-driven revision rule

Later primary-source evidence may add, revise, split, merge-with-scope, demote, reject, or reclassify a normalized assignment.

Every revision must preserve:

- original reported form;
- prior assignment decision;
- evidence and locator history;
- reason for change;
- reviewer/version context.

A corrected assignment never requires rewriting the historical raw terminology source.

## 15. Acceptance audit

- occurrence vs normalized assignment separated: **PASS**
- exact reported form preserved: **PASS**
- paper ↔ term ↔ evidence chain defined: **PASS**
- verification vs support separated: **PASS**
- source-role boundary preserved: **PASS**
- review mentions cannot manufacture primary-study assignments: **PASS**
- Task 4.1C collisions inherited: **PASS**
- multi-type/multi-scope paper support defined: **PASS**
- no mandatory `study_component_id`: **PASS**
- normalized frequency based on eligible assignments rather than raw term recurrence: **PASS**
- conservative verified/scoped seed assignments recorded: **PASS**
- all 746 raw candidate occurrences automatically promoted to verified assignments: **0**
- locked-v0.7 fields/entities added: **0**
- production `main` changes: **0**
- Computational Resources changes: **0**
- Task 4.4 cross-dimensional links created: **0**

### Result

**PASS / COMPLETE.**

Task 4.3 establishes the controlled paper/type/evidence linkage contract and scoped seed assignments without converting the legacy abbreviation occurrence inventory into unsupported normalized science.

## 16. Stop boundary

**Task 4.4 was not started.**