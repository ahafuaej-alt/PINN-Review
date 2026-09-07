# Task 1.5 — Operational Scale-Out Acceptance Gates

Status: **PASS**

Date: 2026-09-07

Roadmap parent: `docs/master-architecture/CONTROLLED-ROADMAP.md` → Task 1.5

Controlling inputs:

- locked Google Drive scientific authority `v0.7-pilot-atlas-prefreeze`;
- `TASK-1.3-NON-NEGOTIABLE-SCIENTIFIC-RULES.md` — R1–R48 are mandatory hard constraints;
- `TASK-1.4-CONTROLLED-DYNAMIC-EXTENSION-RULES.md` — X1–X9 extension lifecycle is mandatory;
- locked v0.7 Ontology Governance and Change Rules;
- locked v0.7 General QA and Validation Rules;
- locked v0.7 five-owner ontology package, extraction/evidence protocol, and serialization specification;
- the verified 36-paper heterogeneous regression corpus and eight targeted v0.7 sentinels;
- Google Drive `PINN Review Atlas — Master Architecture & Implementation Memory`, especially the preserved Point-21 scale-out policy.

Scope: planning/specification only. This record restores and formalizes the operational gates that must be satisfied before the scientific extraction system is widened from qualification/pilot work to larger controlled corpus processing. It does **not** authorize full 853-paper extraction, production migration, database deployment, page redesign, ontology promotion, or modification of production `main` or Computational Resources Stage 1/2/3.

## 1. Governing principle

Scale-out is permitted only when the system demonstrates **scientific integrity, representational adequacy, provenance completeness, review discipline, and operational stability**.

The historical `≈90–95% clean mapping` criterion is an **operational maturity threshold**, not permission to tolerate scientific error.

Accordingly, Task 1.5 separates:

1. **hard scientific-integrity gates** — normally 100% or zero tolerance;
2. **clean-mapping maturity gates** — the restored 90–95% range, now formalized into GO / CONDITIONAL GO / STOP bands;
3. **structural-gap gates** — repeated irreducible missing structure is not averaged away by a high mapping percentage;
4. **batch/checkpoint gates** — every verified batch must independently satisfy the hard gates;
5. **change/regression gates** — any ontology, schema, serialization, migration, or evidence-affecting change must re-run the relevant regression set before scale-out resumes.

No metric may override Task 1.3 R1–R48 or Task 1.4 X1–X9.

## 2. Scale-out unit of measurement

Raw text mentions must not be used as the denominator because repeated wording inside one paper would distort the readiness rate.

Define a **Normalization Decision Unit (NDU)** as one unique paper-scoped scientific normalization decision after deduplicating repeated statements of the same scientific meaning within the same relevant source scope.

An NDU may concern:

- a taxonomy concept;
- an alias decision;
- a controlled/extensible value;
- a relationship;
- a paper-level scientific role/classification;
- a structural representation decision.

Repeated occurrences of the same meaning in one paper do not create artificial independent NDUs. Materially different applications, experiments, test cases, components, scopes, or relations remain separate where Task 1.3 requires multiplicity.

Every NDU must be classified through the Task 1.4 extension lifecycle.

## 3. Clean Mapping Rate — restored and formalized

### 3.1 Definition

The **Clean Mapping Rate (CMR)** measures whether encountered scientific meaning can be represented without structural loss or semantic coercion under the current governed model.

An NDU counts as **cleanly mapped** when it is represented through Task 1.4 X1–X5 using the existing governed structure:

- X1 — existing representation is scientifically adequate;
- X2 — source-local/paper-specific concept preserved in an existing governed scoped mechanism;
- X3 — provisional taxonomy/alias candidate retained without force-fitting;
- X4 — provisional relationship candidate retained with evidence/context;
- X5 — controlled/extensible value candidate preserved in the existing field/owner without inventing a canonical value.

An NDU does **not** count as cleanly mapped when:

- X6 structural/schema specialization is required;
- the correct scientific owner cannot be determined without unresolved structural ambiguity;
- information would be lost, merged incorrectly, or forced into an inadequate current structure.

X7 synthesis-only, X8 page/tool, and X9 bounded-subsystem integration requests are tracked separately and are not placed in the paper-normalization CMR denominator unless they expose a genuine paper-level X6 deficiency.

Formula:

`CMR = cleanly_mapped_NDUs / all_paper_scoped_normalization_NDUs × 100`

### 3.2 Threshold bands

**GO — CMR ≥ 95%**

- Clean-mapping maturity is adequate for the next already-authorized controlled scale-out stage, provided every hard gate also passes.
- This does not authorize automatic verification or uncontrolled extraction.

**CONDITIONAL GO — 90% ≤ CMR < 95%**

- Do **not** widen immediately to unrestricted corpus-scale extraction.
- Continue only with bounded qualification/adversarial batches.
- Review the non-clean NDUs through Task 1.4.
- Determine whether the issue is legitimate novelty, recurring structural deficiency, extraction inconsistency, or implementation error.
- Return to GO only when the applicable hard gates pass and CMR reaches ≥95%, or when a governed later-version change is separately completed and regressed.

**STOP — CMR < 90%**

- Suspend scale-out expansion.
- Existing reviewed work remains preserved.
- Diagnose the owning layer before further widening.
- Do not improve the percentage by forced normalization, suppressing provisional concepts, deleting difficult records, or excluding scientifically inconvenient evidence.

### 3.3 Interpretation rule

CMR measures **representational maturity**, not evidence strength, model quality, truth, or canonical-term prevalence.

A paper-specific or provisional concept may count as cleanly mapped if Task 1.4 preserves it correctly inside the existing extensible structure. This prevents scientific novelty from being penalized merely because it is noncanonical.

## 4. Hard Gate H1 — scientific representability and no forced meaning

Required result: **PASS / zero forced mappings**.

Every extracted scientific statement selected for structured representation must be either:

- faithfully represented in the governed model;
- explicitly preserved as source-local/paper-specific/provisional;
- explicitly unresolved/needs ontology review;
- routed to a genuine structural candidate under X6.

Failures include:

- force-fitting a novel concept to raise CMR;
- collapsing distinct Task 1.3 meanings;
- inventing a value because a field exists;
- treating absence as negative evidence;
- discarding difficult evidence because it lowers apparent completion.

`forced_mapping_count = 0` is mandatory.

## 5. Hard Gate H2 — provenance completeness

The preserved Point-21 requirement `provenance completeness required` is formalized as **100% for every accepted verified evidence-bound scientific record**.

A provenance-complete accepted record must have, where applicable under its owner contract:

- resolved canonical `paper_id` / Atlas paper identity;
- linked `evidence_id` or governed evidence link;
- immutable verbatim evidence;
- source locator as precisely as available;
- source/evidence role;
- evidence type;
- statement strength where required;
- origin/interpretation class;
- workflow verification status;
- semantic support status;
- ontology/normalization version;
- known mismatch/conflict state retained;
- component/scope locator where materially required.

Formula for accepted evidence-bound records:

`Provenance Completeness Rate (PCR) = provenance_complete_accepted_records / accepted_evidence_bound_records × 100`

Required: **PCR = 100%**.

A candidate with incomplete provenance may remain `needs_review`, `unverified`, or equivalent; it may not be promoted merely to keep throughput high.

For governed synthesis eligibility, provenance completeness plus the v0.7 synthesis-eligibility rules is mandatory. Missing provenance on a synthesis-eligible claim is a hard failure.

## 6. Hard Gate H3 — human scientific review coverage

Task 1.3 R30–R32 remain absolute.

`Human Review Coverage = human-reviewed verified/published scientific records / verified/published scientific records × 100`

Required: **100%**.

AI-assisted extraction, classification, relation proposals, gap proposals, or synthesis proposals may remain candidates, but no unreviewed AI proposal may become verified scientific data or positive governed synthesis support.

## 7. Hard Gate H4 — evidence/history immutability

Required result: **100% preservation / zero unauthorized rewrites**.

No scale-out batch, migration, normalization, or extension may alter:

- verbatim evidence;
- evidence IDs;
- source locators;
- historical extraction-version values;
- prior locked baseline contents;
- conflict/mismatch records merely to simplify normalization;
- recorded no-merge sentinels.

Reclassification may change normalized interpretation only through governed history/version handling.

Any unauthorized evidence/history rewrite is a STOP condition and may require rollback of the affected normalized/derived layer.

## 8. Hard Gate H5 — identity and referential integrity

Required: **100% referential integrity and zero canonical identity collisions**.

At the applicable implementation stage:

- canonical paper IDs are unique;
- legacy/batch/checkpoint IDs cannot masquerade as canonical IDs;
- evidence links resolve;
- taxonomy IDs resolve;
- relation IDs resolve;
- foreign keys/linked records resolve;
- ontology/normalization versions resolve;
- one authoritative value is not replaced by unsynchronized duplicate authority.

Any broken reference that changes or obscures scientific meaning is a STOP condition.

## 9. Hard Gate H6 — semantic-boundary regression

Required: **all applicable Task 1.3 R1–R48 semantic-boundary tests PASS**.

At minimum, scale-out must preserve the established distinctions covering:

- author statement / Atlas extraction / Atlas inference / Atlas synthesis;
- claim / demonstration;
- demonstrated / related / potential application;
- physical problem / computational task / PINN challenge;
- limitation / open problem / future work / Atlas gap / Atlas opportunity;
- contribution / outcome;
- validation / evaluation result;
- taxonomy term / database field;
- paper relation / framework-synthesis relation;
- model input/output / transformation / derived output;
- physical constraint / enforcement mechanism;
- network configuration / architecture family;
- loss weighting / generic training protocol;
- parallel execution / hardware reporting;
- symptom / cause / intervention / verified improvement;
- not reported / reported unavailable / not applicable / negative result where governed.

A violation is not averaged into CMR; it is a hard failure.

## 10. Hard Gate H7 — conflicts, mismatches, ambiguity and negative evidence

Required result: **100% retention of known states**.

Known conflicts/mismatches must remain visible, including established regression sentinels. Ambiguity may remain unresolved when scientifically justified.

Required:

- `conflict_silently_resolved_count = 0`;
- `mismatch_promoted_as_positive_support_count = 0`;
- `unresolved_state_hidden_for_completion_count = 0`.

Negative or inconclusive findings may not be removed to improve apparent method performance or corpus cleanliness.

## 11. Hard Gate H8 — synthesis eligibility and contamination control

Required result: **zero ineligible positive-support contamination**.

Unreviewed candidates, unresolved classifications, mismatched support, conflict-bearing evidence used as positive support for the affected claim, or framework-only semantics must not silently feed governed synthesis.

`ineligible_positive_synthesis_inputs = 0`.

Synthesis records must retain drill-down to eligible supporting paper IDs/evidence IDs and contradictory evidence where governed.

## 12. Hard Gate H9 — major structural gaps

The historical requirement `major repeatedly missing entities = 0` is retained as a hard gate.

A **major structural gap** exists when either:

1. one adversarial case demonstrates that the current structure cannot preserve a Task 1.3 mandatory distinction, evidence/provenance, stable identity, required multiplicity, or scientifically necessary linkage without information loss; **or**
2. the same irreducible X6 deficiency recurs in **two or more independent papers** and cannot be reconstructed from existing governed fields, repeatable records, taxonomy, scoped aliases, relationships, evidence locators, or synthesis objects.

Required before widening scale-out:

`active_major_structural_gap_count = 0`.

A repeated X6 gap cannot be hidden by a corpus-wide CMR above 95%.

Minor queryability preferences or UI conveniences are not major structural gaps.

## 13. Hard Gate H10 — regression corpus and sentinel preservation

Before Task 20 can authorize widening beyond the verified pilot, the operational implementation must retain the complete locked regression contract:

- 36/36 heterogeneous Pass-A + Pass-B papers representable without forced scientific loss;
- 8/8 targeted v0.7 new-field sentinels pass;
- A6 `adaptive_weighting[] → loss_weighting_method[]` migration remains lossless where applicable;
- carried-forward evidence/conflict/mismatch/no-merge sentinels pass;
- 31/31 Ecosystem dimensions remain scientifically representable;
- 4/4 framework boundaries remain correctly paper-level versus synthesis-level.

Required: **100% of applicable regression tests pass**.

If a later version changes an affected owner, migration, serialization rule, or scientific representation, rerun the impacted regression suite before scale-out resumes.

## 14. Hard Gate H11 — batch publication readiness

Every controlled extraction batch must have a checkpoint stating at minimum:

- batch identity and paper IDs;
- source availability/association status;
- extraction completion state;
- human-review state;
- provenance completeness result;
- CMR for the batch and cumulative CMR;
- X1–X9 extension counts relevant to the batch;
- unresolved/provisional/source-local counts;
- X6 structural candidates and recurrence status;
- conflict/mismatch preservation result;
- referential/schema validation result where implemented;
- applicable sentinel/regression result;
- synthesis-eligibility contamination result;
- exact GO / CONDITIONAL GO / STOP disposition;
- exact next paper/batch or repair action.

A batch may be preserved as work-in-progress without passing, but it may not be published as a verified batch until all hard publication gates pass.

## 15. Gate-state decision table

| State | Required conditions | Allowed action |
|---|---|---|
| **GO** | All hard gates pass; active major structural gaps = 0; CMR ≥95% | Proceed only to the next already-authorized controlled scale-out stage/batch |
| **CONDITIONAL GO** | All hard gates pass; active major structural gaps = 0; 90% ≤ CMR <95% | Continue bounded qualification/adversarial work only; no widening to unrestricted corpus scale |
| **STOP** | Any hard gate fails; or active major structural gap >0; or CMR <90% | Suspend widening; classify defect; repair owning layer; rerun dependent QA |
| **ROLLBACK REQUIRED** | An accepted migration/implementation corrupts evidence/history, canonical identity, provenance, or mandatory semantics | Restore affected normalized/derived state to last passed checkpoint; preserve raw evidence and audit history; repair and regress before resuming |

A high CMR never overrides a hard-gate failure.

## 16. Defect classification and repair routing

When a gate fails, classify the defect before repair:

- **source ambiguity** — retain ambiguity; do not manufacture certainty;
- **extraction error** — correct normalized extraction, preserve source evidence/history;
- **taxonomy/vocabulary deficiency** — route through X2/X3/X5 and governed owner review;
- **relationship deficiency** — route through X4;
- **schema/structural deficiency** — route through X6 and later governed-version process if justified;
- **synthesis defect** — repair synthesis layer, not paper evidence;
- **implementation/serialization defect** — repair implementation representation without redefining science;
- **migration defect** — stop affected migration, restore last valid normalized state, rerun regression;
- **page/tool defect** — repair consumer/editor behavior without creating page-local scientific authority;
- **bounded-subsystem integration defect** — preserve independent ownership and route through X9.

Repair the owning layer, not the symptom.

## 17. Continuous scale-out monitoring

Once a later roadmap task explicitly authorizes full-corpus extraction, the gates remain continuous rather than one-time.

For every batch:

- hard gates are evaluated independently;
- batch CMR and cumulative CMR are recorded;
- X6 recurrence is monitored across independent papers;
- provisional/source-local concepts are retained rather than suppressed;
- changes in mapping behavior are reviewed for drift;
- newly discovered no-merge or semantic-boundary risks are added to regression where governed;
- only verified batches enter governed public scientific data/synthesis.

If cumulative CMR remains ≥95% but a major recurring structural gap appears, the state is STOP, not GO.

If one batch falls into CONDITIONAL GO, widening pauses while bounded diagnostic work continues. If the failure is caused by a genuine new scientific dimension, use Task 1.4 rather than changing extraction rules ad hoc.

## 18. What is allowed to remain unresolved

Task 1.3 R46 remains controlling: scientific defensibility outranks completeness optics.

Therefore scale-out readiness does **not** require every paper to have every field populated or every concept to become canonical.

The following may remain, if explicitly represented and governed:

- `not_reported` / `not_applicable` states;
- unresolved ambiguity;
- verified conflicts/mismatches;
- provisional taxonomy terms;
- paper-specific/source-local concepts;
- provisional relations;
- deferred structural candidates under active review;
- negative or inconclusive results.

They become blockers only when their handling violates a hard gate, causes a major structural gap, or drives CMR below the relevant band.

## 19. Scale-out phase application

### Task 20 — 36-paper production scientific-data pilot

Task 20 must use the verified 36-paper heterogeneous corpus as the operational qualification set after the later database/migration/prototype work exists.

Widening beyond Task 20 requires:

- all hard gates PASS;
- 36/36 operational records pass migration/evidence checks;
- active major structural gaps = 0;
- CMR ≥95%;
- exact GO disposition recorded.

A Task 20 CMR of 90–<95 permits only additional bounded qualification/adversarial work, not Task 21 full-corpus widening.

### Task 21 — full 853-paper controlled extraction

Task 21 remains batch-controlled even after GO. It does not become unattended bulk ingestion.

Each batch must pass H1–H11 before verified publication. CMR and structural-gap status are monitored continuously. Any STOP/ROLLBACK condition suspends widening until repair and regression close the issue.

## 20. Relationship to Task 1.4 dynamic extension

Scale-out metrics may detect an extension need but may not decide scientific promotion by themselves.

Examples:

- many X3 provisional terms may justify taxonomy review, but recurrence does not automatically equal canonical promotion;
- many X4 relation candidates may justify relationship review, but context must remain preserved;
- a repeated X5 value may justify vocabulary review, not silent enum expansion;
- repeated X6 cases may trigger a later ontology-version proposal, but schema change still requires demonstrated structural need and governed adjudication;
- X7/X8/X9 needs do not become paper-level schema changes unless an independent X6 deficiency is demonstrated.

CMR is therefore a readiness signal, not an ontology voting mechanism.

## 21. Relationship to Task 1.3 invariants

The gate families enforce Task 1.3 as follows:

| Gate family | Principal Task 1.3 constraints |
|---|---|
| No forced meaning / representability | R1–R3, R7–R20, R46 |
| Provenance completeness / immutability | R4–R6, R19, R24, R29, R45, R48 |
| Human review / automation | R30–R33 |
| Identity / referential integrity | R21–R24, R33, R45 |
| Synthesis eligibility | R25–R29, R48 |
| Page/tool implications | R34–R38, R47 |
| Computational Resources boundary | R39–R42 |
| Version/regression/rollback | R43–R45, R48 |

A violation of any applicable R1–R48 rule remains a hard acceptance failure even if not separately named in this table.

## 22. What Task 1.5 deliberately does not decide

Task 1.5 does not define:

- the exact number of papers per future extraction batch;
- database tables, indexes, APIs, or platform;
- exact Task 9 route disposition or target navigation hierarchy;
- detailed Computational Resources schema integration;
- a new ontology version;
- which specific future provisional term/relation/value deserves promotion;
- full requirement/coverage mapping → Task 1.6;
- Master Plan v1.0 freeze → Task 1.7;
- authorization to start Task 20 or Task 21.

Batch size may later be selected operationally based on review capacity and tooling, but changing batch size never relaxes these gates.

## 23. Task 1.5 acceptance checklist

Task 1.5 passes only if the policy establishes that:

- hard scientific-integrity gates are distinct from mapping-percentage gates;
- provenance completeness for accepted verified evidence-bound records is 100%;
- human review coverage for verified/published scientific records is 100%;
- forced mappings, silent conflict resolution, ineligible positive synthesis contamination, and active major structural gaps are zero;
- identity/referential integrity is complete;
- the 36-paper/sentinel/no-merge regression contract remains mandatory;
- the historical 90–95% clean-mapping concept is restored as ≥95% GO, 90–<95% CONDITIONAL GO, <90% STOP;
- provisional/source-local scientific novelty is not incorrectly penalized as structural failure;
- repeated X6 deficiency cannot be averaged away by a high CMR;
- batch publication requires an explicit checkpoint and disposition;
- STOP/ROLLBACK repairs the owning layer without rewriting raw evidence;
- full 853-paper extraction remains separately authorized and batch-controlled.

## 24. Task 1.5 verdict

**PASS**

The operational scale-out acceptance gates are now explicit, measurable, and compatible with locked v0.7, Task 1.3 R1–R48, and Task 1.4 X1–X9.

No locked v0.7 scientific document was modified.

No production Atlas `main` file was modified.

No Computational Resources Stage 1/2/3 branch was modified.

No database, schema migration, ontology promotion, production extraction, route change, or page redesign was authorized.

**Exact next action:** Roadmap **Task 1.6 — Produce the formal requirement/coverage matrix**, mapping the completed Task 1.1–1.5 requirements—including R1–R48, X1–X9, the hard gates H1–H11, CMR thresholds, the complete Atlas production-surface rule, and the mandatory Task 9 audit—to scientific owners, representation, evidence/provenance requirements, QA/tests, workflows, and Atlas consumer surfaces.