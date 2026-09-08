# Task 4.2 — Extensible PINN Type / Family Taxonomy

Status: **PASS / COMPLETE**

Date: 2026-09-08

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

Implementation contract: frozen Master Plan v1.0.

Controlling inputs: Task 4.1A–4.1E; Task 1.3 R1–R48; Task 1.4 X1–X9; locked v0.7 Controlled Vocabularies and Taxonomy Term/Alias Registry; Paper Profile PP-07 / L4-P8 boundary.

Task 4.2 defines the **classification system**, not paper assignments. It does not modify locked v0.7, create a locked-v0.7 `pinn_type_id`, rewrite raw terminology, promote every candidate to a canonical term, or start Task 4.3.

## 1. Core design decision

The PINN Type system is a **faceted governed taxonomy graph**, not a one-level acronym list and not a strict tree in which every PINN-looking name becomes a family.

A governed concept may participate in a true subtype hierarchy only when evidence supports an `is_a` relationship. Other scientific differences are represented by typed relations/facets such as formulation, decomposition, architecture/backbone, training/adaptivity, uncertainty, transfer/multi-fidelity, and application specialization.

This prevents names such as `LSTM-PINN`, `SA-PINN`, `PINN-RANS`, `PINO`, or source-local labels from being flattened into the same semantic level.

## 2. Scope boundary

### In scope

A term may enter the PINN Type system when it denotes a source-supported PINN method identity, subtype, variant, or scientifically meaningful named specialization whose core method is a PINN.

### Adjacent but not automatically PINN types

The following remain outside the PINN subtype hierarchy unless primary-source evidence explicitly establishes a PINN identity:

- broader physics-informed machine learning (`PIML`);
- neural operators (`PINO`, PI-FNO, PI-DeepONet and related operator-learning methods);
- physics-guided / physics-encoded / theory-guided neural-network families;
- software/package names;
- optimizers, activations, loss-weighting schemes, sampling rules, hardware/execution labels, and generic training protocols;
- generic application, equation, or task labels that do not define a distinct PINN method.

Permanent v0.7 no-merge invariants remain controlling: `PIML ≠ PINN`; neural operator `≠ PINN`; `PgNN ≠ PiNN/PINN ≠ PeNN` globally; network configuration `≠` architecture family; probabilistic uncertainty propagation `≠` Bayesian PINN; time-marching PINN `≠` generic spatial domain decomposition.

## 3. Taxonomy object classes

Every governed terminology object must use exactly one principal `concept_role`:

1. `root_scope` — scope anchor, e.g. the PINN method space.
2. `family` — recurrent, evidence-supported scientific family with a genuine method-level identity.
3. `subfamily` — narrower scientific family whose `is_a` parent is evidence-supported.
4. `variant` — named PINN variant that differs meaningfully but does not yet justify family-level status.
5. `source_local_variant` — author-defined or paper-specific method identity intentionally not globalized.
6. `alias` — alternate wording/form mapped under explicit alias scope.
7. `adjacent_method` — related physics-informed method explicitly outside the PINN subtype hierarchy.
8. `excluded_non_type` — terminology retained for audit/abbreviations but not a PINN-type concept.

`family`, `subfamily`, and `variant` are scientific roles, not prestige levels. Promotion requires evidence; frequency alone is insufficient.

## 4. Classification lanes

The taxonomy uses the following controlled **classification lanes**. A lane describes the scientific basis of a concept; it is not automatically a parent node.

| Lane | Meaning | Typical treatment |
|---|---|---|
| `core_pinn` | baseline/core PINN identity | hierarchy eligible |
| `formulation_enforcement` | strong/weak/variational/conservative/integral or constraint-formulation identity | hierarchy eligible only if the method identity is source-supported; otherwise relation/facet |
| `decomposition_temporal` | spatial/domain decomposition, partitioning, parallel-in-time or time-marching identity | hierarchy eligible only when method identity is established |
| `probabilistic_uncertainty` | Bayesian/probabilistic PINN identity | hierarchy eligible when source-supported; generic UQ is not enough |
| `architecture_backbone_hybrid` | CNN/RNN/LSTM/Transformer/KAN/GNN/GAN/other coupled architecture | normally relation/facet; promote to family only with independent scientific justification |
| `training_adaptivity` | self-adaptive, causal, curriculum, warm-start, meta/transfer or related training identity | normally relation/facet or variant, not automatic family |
| `multifidelity_transfer` | multi-fidelity, transfer/meta-learning and source-role-driven combinations | relation/facet or variant; not automatically one family |
| `application_equation_specialization` | named domain/equation/task specialization | normally variant/source-local; application identity remains separate |
| `source_local_named_method` | author-defined labels and one-paper taxonomies | source-local unless recurrence and equivalence justify promotion |
| `adjacent_physics_informed_method` | neural operators, PgNN/PeNN, PIML-adjacent methods, software/resource identities | outside PINN subtype hierarchy |

A concept can have one `primary_lane` and zero or more `secondary_lanes` when scientifically necessary. Multi-lane membership does not imply multiple parents.

## 5. Hierarchy and relationship model

Only `is_a` establishes subtype hierarchy.

The following typed relations are permitted for Task-4 taxonomy design:

- `is_a`
- `alias_of`
- `source_local_alias_of`
- `uses_formulation`
- `uses_enforcement`
- `uses_architecture`
- `uses_training_strategy`
- `uses_decomposition_strategy`
- `uses_uncertainty_method`
- `uses_transfer_or_multifidelity_strategy`
- `specialized_for_application_or_equation`
- `integrates_with`
- `adjacent_to`
- `not_equivalent_to`
- `historically_derived_from`

No relation may be inferred solely from lexical similarity.

## 6. Term lifecycle

Task 4.2 inherits the locked lifecycle states without changing them:

- `canonical`
- `provisional`
- `alias`
- `deprecated`
- `paper_specific`

Alias scope remains:

- `corpus_global`
- `source_local`
- `author_defined`
- `unresolved`

New post-v0.7 terms begin as `provisional` or `paper_specific` unless a governed review explicitly promotes them. No term becomes canonical merely because it is frequent, appears in a review article, or contains `PINN` in its name.

## 7. Promotion criteria

A candidate may be promoted to a corpus-level family/subfamily/variant only when all applicable conditions hold:

1. the scientific meaning is supported by primary-source evidence;
2. the concept is semantically distinct from existing terms;
3. aliases/collisions have been adjudicated or explicitly scoped;
4. the concept denotes a method identity rather than only a configuration, training control, application label, optimizer, software name, or evidence artifact;
5. recurrence/generalizability is sufficient for the requested scope, or a strong scientific reason justifies a single-source provisional concept;
6. the relationship to existing concepts is explicit;
7. no Task 1.3 invariant or Task 4.1C no-merge rule is violated;
8. the decision is versioned and evidence-traceable.

Frequency is evidence of recurrence only; it is not evidence of equivalence, scientific validity, or family rank.

## 8. Demotion / exclusion criteria

A candidate remains a modifier, source-local term, adjacent method, or excluded non-type when its apparent type identity is explained only by:

- backbone/network architecture;
- training/adaptivity procedure;
- optimizer or loss-weighting method;
- application/equation/task context;
- implementation/software package;
- generic physics-informed umbrella terminology;
- operator learning rather than PINN;
- ambiguous acronym without scoped evidence;
- one-off experiment/model label such as `PINN-1` or `PINN-3`.

This does not delete the term. It remains available to the Abbreviation Registry and can be related to the PINN concept graph.

## 9. Collision and alias controls

Task 4.1C `C001–C030` remain mandatory constraints.

Examples:

- `cPINN` and `CPINN` remain distinct.
- `DD-PINN` cannot have one global meaning; its domain-discretized, domain-decoupled and data-driven meanings remain source-scoped until separately represented.
- `B-PINN`, `BPINN`, and `B-PINNs` remain scoped alias candidates until governed alias promotion.
- `SPINN`, `IPINN`, `E-PINN/e-PINN`, `PiNN`, `hp-VPINN/HP-VPINN` retain their existing collision/alias controls.

Case folding, hyphen removal, plural stripping, prefix matching, and acronym expansion are never sufficient for merge.

## 10. Initial placement policy for the 268 Task-4.1D candidates

Task 4.2 does **not** declare all 268 candidates to be types. Instead, the existing eligibility states map into the taxonomy workflow:

- `eligible_verified_candidate` → eligible for governed family/subfamily/variant placement review;
- `eligible_unverified_candidate` → provisional candidate; primary-source verification required before publication as a normalized type;
- `conditional_method_dimension_candidate` → default to relation/facet; promote only with evidence that the name is a distinct method identity;
- `conditional_source_specialization_candidate` → default to specialization relation/variant, not global family;
- `conditional_source_local_candidate` → `source_local_variant` / `paper_specific` by default;
- `conditional_collision_candidate` → blocked from normalization until scoped collision resolution;
- `conditional_alias_candidate` → blocked from corpus-global aliasing until alias evidence is sufficient.

The 59 Task-4.1B adjacent/non-type forms excluded from the 268-candidate set remain outside the PINN subtype hierarchy unless new evidence justifies reconsideration.

## 11. Examples of correct semantic treatment

These examples are classification tests, not new canonical promotions:

- `PINN` → core PINN concept candidate.
- `VPINN` / `hp-VPINN` → formulation-oriented candidates; exact hierarchy requires evidence.
- `cPINN` → conservative/formulation-oriented candidate, distinct from `CPINN`.
- `XPINN` → decomposition-oriented candidate when supported by source evidence.
- `B-PINN` / `BPINN` → probabilistic/Bayesian candidate with alias scope still governed.
- `SA-PINN` → training/adaptivity lane; not automatically a top-level family.
- `LSTM-PINN` → architecture/backbone relation by default, not automatically a family.
- `PINN-RANS` → application/equation specialization by default.
- `PINO` → adjacent neural-operator method, not a PINN subtype by default.
- `PiNN package` → software identity, not a scientific PINN type.

## 12. Paper Profile and ownership boundary

Task 4.2 defines L5 taxonomy semantics only.

PP-07 / L4-P8 may later display:

- governed term reference;
- exact source terminology/alias;
- assignment role/scope;
- component/test-case scope;
- supporting evidence.

Task 4.2 does not create paper assignments. Task 4.3 owns the paper/evidence linkage.

The existing locked-v0.7 `PINN_architecture[]` remains a methodological field and is not silently renamed into a dedicated `pinn_type_id` field.

## 13. Evidence-driven revision rule

Any family/variant placement, alias, collision decision, relationship, lane assignment, or canonical status may be revised if later primary-source evidence justifies it.

Revision must be explicit, evidence-backed, versioned/history-preserving, and traceable. Raw source wording and previous decisions must never be silently rewritten or deleted.

## 14. Machine-readable coordination source

Companion file:

`atlas-pinn-type-taxonomy-spec.json`

It is a **non-authoritative coordination/specification artifact**. It records roles, lanes, relations, lifecycle states, promotion rules, candidate-state mappings, and protected boundaries. It does not supersede the locked Drive ontology or independently make a scientific term canonical.

## 15. Acceptance audit

- Task 4.1A–4.1E used as controlling input: **PASS**
- faceted taxonomy graph defined: **PASS**
- strict single-level acronym taxonomy avoided: **PASS**
- hierarchy relation isolated to evidence-supported `is_a`: **PASS**
- methodology/backbone/application/operator boundaries preserved: **PASS**
- Task 4.1C collision controls inherited: **PASS**
- v0.7 lifecycle/alias scopes inherited: **PASS**
- evidence-driven future correction preserved: **PASS**
- 268 candidates automatically promoted: **0**
- corpus-global aliases automatically promoted: **0**
- locked-v0.7 fields/entities added: **0**
- raw terminology changes: **0**
- production `main` changes: **0**
- Computational Resources changes: **0**
- Task 4.3 paper assignments created: **0**

### Result

**PASS / COMPLETE.**

Task 4.2 defines an extensible, evidence-governed PINN type/family taxonomy that can grow as later papers provide new evidence without flattening scientific dimensions or erasing historical decisions.

## 16. Stop boundary

**Task 4.3 was not started.**