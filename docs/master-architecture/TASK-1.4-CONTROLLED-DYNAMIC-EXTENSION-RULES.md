# Task 1.4 — Controlled Dynamic-Extension Rules

Status: **PASS**

Date: 2026-09-07

Roadmap parent: `docs/master-architecture/CONTROLLED-ROADMAP.md` → Task 1.4

Controlling inputs:

- locked Google Drive scientific authority `v0.7-pilot-atlas-prefreeze`;
- `TASK-1.1-AUTHORITATIVE-RECONCILIATION.md`;
- `TASK-1.2-COMPLETE-PROJECT-OBJECTIVE.md`;
- `TASK-1.3-NON-NEGOTIABLE-SCIENTIFIC-RULES.md` (R1–R48 are mandatory invariants);
- `ATLAS-PRODUCTION-SURFACE-REGISTER.md`;
- locked v0.7 Canonical Schema / Field Dictionary;
- locked v0.7 Controlled Vocabularies;
- locked v0.7 Taxonomy Term and Alias Registry;
- locked v0.7 Relationship Registry;
- locked v0.7 Ontology Governance and Change Rules;
- Google Drive `PINN Review Atlas — Master Architecture & Implementation Memory`.

Scope: planning/specification only. This record defines how the Atlas may encounter, preserve, classify, review, promote, merge, alias, re-parent, deprecate, structurally specialize, migrate, and expose new scientific concepts or capabilities without violating Task 1.3. It does not modify locked v0.7, set Task 1.5 numerical scale-out thresholds, implement a database, modify production `main`, or modify any Computational Resources Stage 1/2/3 branch.

## 1. Governing principle

The Atlas must be **extensible without becoming an uncontrolled tag system and stable without becoming scientifically rigid**.

The extension order is:

**preserve source evidence → test current representation → retain source-specific meaning if needed → use governed provisional representation → review recurrence/generalizability/analytical need → promote only through the correct owner and version process → migrate normalized records without rewriting source evidence**.

No extension mechanism may violate Task 1.3 R1–R48.

## 2. Authority and lock rule

`v0.7-pilot-atlas-prefreeze` is locked. Its five single-owner documents remain authoritative for their concerns.

Therefore:

- a new paper, term, alias, relation, UI page, framework idea, database convenience, or extraction model may **propose** new scientific representation;
- no proposal may silently mutate the scientific meaning of locked v0.7;
- paper-specific, source-local, provisional, unresolved, or verbatim information may be preserved without pretending it is a new v0.7 canonical scientific rule;
- a new canonical scientific term/value/relation or structural scientific field/entity adopted after the v0.7 lock must enter through a later governed ontology version and changelog;
- implementation-only additions that do not alter scientific meaning may evolve without an ontology-version change, but they remain subordinate to the locked scientific owners.

## 3. Extension classes

Every extension request must first be classified into one of the following classes. The classes are mutually distinguishable even when one paper triggers more than one class.

### X1 — Existing representation is scientifically adequate

The encountered concept maps faithfully to an existing field, controlled value, canonical/scoped taxonomy term, alias, relation, or repeatable record.

**Action:** use the current representation. Preserve source wording/evidence and scope. Do not create a new concept merely because the paper uses different wording.

### X2 — Source-local / paper-specific concept

The concept is meaningful in the source but is not yet justified as a corpus-global concept.

**Action:** preserve exact wording and evidence; represent as `paper_specific`, `author_defined`, `source_local`, or equivalent governed scoped representation. Do not globalize it.

### X3 — Provisional taxonomy concept or alias candidate

Existing canonical terms would distort meaning, but the concept may recur or be analytically useful across papers.

**Action:** retain a governed provisional candidate with definition, dimension, parent/context, first-seen paper/evidence, scope, and review state. It does not become canonical merely by being captured.

### X4 — Provisional relationship candidate

A scientifically meaningful source→relation→target statement cannot be represented by an existing relation type without distortion.

**Action:** retain a provisional relation candidate with source type, relation type, target type, definition, scope/context, first-seen paper/evidence, and review notes. Do not create a context-free universal edge from one paper.

### X5 — Controlled/extensible value candidate

A structured field is scientifically correct, but an encountered value is absent from its current controlled/extensible value set.

**Action:** preserve the reported value without inventing a canonical label. Use an existing `other_explicit...`/scoped/provisional mechanism where scientifically adequate. If the value deserves canonical controlled status, route it through the responsible Controlled Vocabularies owner and a later governed version.

### X6 — Structural specialization / schema candidate

Existing fields, repeatable records, scope locators, taxonomy terms, controlled values, and typed relationships cannot represent the information without irreducible scientific loss, ambiguity, or unstable cross-record linking.

**Action:** create a schema-change candidate. Do not add a field/entity immediately. Structural change requires demonstrated need, owner adjudication, migration design, backward-compatibility review, QA, and a later governed ontology version.

### X7 — Synthesis-only extension

The new object is an Atlas cross-paper interpretation, framework node/edge, matrix dimension/cell, diagnostic category, research-gap family, research opportunity, or other synthesis product rather than a paper-level fact.

**Action:** keep it in the synthesis layer. It may become a governed synthesis object, but must not be promoted into paper-level schema/taxonomy/relations solely because an Atlas framework uses it.

### X8 — Page/tool/information-architecture extension

A new page, explorer, profile, builder, route family, compatibility route, or navigation hierarchy is needed.

**Action:** it may be added under the permanent Atlas architecture without creating scientific authority. If it requires new scientific semantics, those semantics must independently pass X1–X7 governance.

### X9 — External/bounded-subsystem integration extension

An independently governed subsystem such as Computational Resources needs a new interoperability mapping, page/API cross-link, or integration interface.

**Action:** preserve both systems' identities and governance. Define an explicit mapping/interface; do not absorb the external subsystem or treat its internal schema as a silent extension of the paper ontology.

## 4. Mandatory extension decision sequence

For every novel scientific item encountered during extraction, review, synthesis, migration, or product development, apply this sequence in order:

1. **Preserve evidence first.** Capture verbatim/source-grounded evidence, origin, locator, scope, evidence role, and relevant context before normalization decisions.
2. **Search current owners.** Check the current schema field, controlled values, taxonomy terms/aliases, relationship registry, and relevant synthesis structures.
3. **Test semantic adequacy.** Ask whether an existing representation preserves the source meaning without collapsing a Task 1.3 distinction.
4. **Normalize only when adequate.** If yes, use the existing canonical/scoped representation and retain source wording separately.
5. **Do not force-fit.** If no, retain paper-specific/source-local/provisional/unresolved representation rather than choosing the nearest inaccurate category.
6. **Classify the extension type.** Assign X2–X9 as appropriate.
7. **Record the trigger.** Store triggering paper(s), evidence ID(s), definition, scope, rationale, neighboring concepts/relations, and why existing representation is insufficient.
8. **Review recurrence/generalizability/analytical value.** Compare against later or already-known independent papers and adjacent concepts; check whether the distinction changes scientific querying, interpretation, evidence ownership, or cross-record structure.
9. **Adjudicate.** Decide one of: normalize existing; keep paper-specific; keep provisional; alias; merge; re-parent; promote; deprecate; relation-add/change; controlled-value change; schema-add/change; synthesis-only; implementation-only; reject.
10. **Change only the correct owner.** If approved scientifically, modify only the owner document/registry for that concern in the candidate future version; do not duplicate definitions across owners.
11. **Log the change.** Record version, change type, affected record, rationale, triggering papers, supporting evidence, reviewer/date, and migration notes where relevant.
12. **Migrate normalized records, not source evidence.** Reclassification or structural migration may change normalized labels/links/current normalization version; it must not alter raw evidence, evidence IDs, source locators, original scope/origin, conflict/mismatch states, or historical extraction-version labels.
13. **Run backward/regression QA before promotion.** Existing accepted records, no-merge boundaries, conflicts, evidence traceability, and dependent implementation contracts must remain valid or have explicit lossless migration.
14. **Promote only after governed approval.** A future scientific version becomes authoritative only after its prescribed QA/readback/promotion process passes.

Task 1.5 will define operational scale-out acceptance thresholds; Task 1.4 deliberately does not set numerical percentages or corpus-size gates.

## 5. Taxonomy-term lifecycle rules

The locked v0.7 taxonomy statuses remain authoritative:

- `canonical` — approved Atlas term used for normalization;
- `provisional` — distinct encountered concept awaiting sufficient review/recurrence;
- `alias` — alternate wording mapped under explicit scope;
- `deprecated` — historical term no longer used for new normalization;
- `paper_specific` — meaningful source concept intentionally not globalized.

Rules:

1. A single clear source may justify preserving a provisional or paper-specific concept; it does not automatically justify corpus-global canonicalization.
2. Promotion requires independent recurrence **and/or** clear cross-paper generalizability plus scientific/analytical usefulness; frequency alone is insufficient.
3. A candidate must have a definition precise enough to distinguish it from neighboring concepts.
4. Parent/child placement must preserve scientific meaning; re-parenting is a logged ontology change, not a UI rearrangement.
5. Deprecation does not erase historical use. `version_deprecated`, replacement mapping, and prior record history must remain available.
6. A source-named method is not automatically a new global PINN family.
7. A new structured field does not automatically create a new taxonomy family.
8. Atlas Ecosystem labels, framework labels, navigation labels, and UI groupings are audit inputs, not automatic canonical taxonomy terms.
9. Permanent no-merge invariants in v0.7 remain binding during all taxonomy review.

## 6. Alias extension rules

Aliases are lexical/terminological mappings, not permission to erase scientific distinctions.

Every alias candidate must have an explicit scope compatible with the v0.7 alias model (`corpus_global`, `source_local`, `author_defined`, or `unresolved` where applicable).

Rules:

- use a corpus-global alias only when equivalence is stable across the corpus context;
- use source-local or author-defined scope when wording has paper-specific meaning;
- do not alias across any Task 1.3 or v0.7 no-merge boundary;
- split compound phrases when they collapse distinct concepts (for example sparse data versus noise sensitivity);
- retain exact author wording even when normalized through an alias;
- changing alias scope or target is a versioned/logged scientific change;
- unresolved alias candidates must remain unresolved rather than being assigned by similarity alone.

## 7. Controlled-vocabulary extension rules

Controlled labels are owned only by the Controlled Vocabularies owner.

### 7.1 Closed or semantically constrained values

If a field has a closed/controlled set whose members carry scientific meaning, a new canonical value is a scientific ontology change. It must not be injected through SQL, UI, JSON, or an extractor alone.

### 7.2 Evidence-supported/extensible value sets

Where v0.7 explicitly describes values as initial/evidence-supported/extensible:

- preserve novel explicit source values;
- map to an existing value only if semantically faithful;
- use an available `other_explicit...` or scoped/provisional representation when appropriate;
- do not infer unreported values;
- do not treat `other_explicit...` as automatic canonicalization;
- a recurring value that merits canonical controlled status must be reviewed by the vocabulary owner and included in a later governed version/changelog.

### 7.3 Structural field versus vocabulary

Adding a vocabulary value must not create a new field merely for convenience, and adding a field must not imply that all encountered method names become controlled values.

## 8. Relationship-extension rules

The Relationship Registry owns typed scientific edges.

Every stored or proposed relation must preserve, at minimum, source entity type, relation type, target entity type, status, definition, first-seen paper, evidence pointer when available, version information, and review notes.

Rules:

1. If an existing relation would distort meaning, retain a provisional relation candidate rather than misuse the existing edge.
2. Canonical promotion requires independent recurrence/generalizability review and retained context.
3. Performance, superiority, causality, mitigation, or improvement relations must not become context-free global edges from one comparator or one test case.
4. Test case, hardware/software, training/inference phase, temporal/spatial scope, comparator configuration, and other material conditions remain attached through evidence/context when relevant.
5. Record adjacency is not automatically an ontology relation. This applies especially to diagnostic pathways and multi-component records.
6. Framework edges and Design–Performance matrix cells remain synthesis relations unless independently justified at paper level.
7. New schema fields do not automatically require new universal relation types.
8. Deprecating/replacing a relation preserves historical relation IDs/usage and migration trace.
9. Prohibited unconditional edges from v0.7 remain prohibited unless a later governed scientific version explicitly supersedes them with evidence.

## 9. Structural/schema-extension rules

Structural change has the highest evidentiary burden because it changes the paper-level scientific contract.

### 9.1 Structural-home-first rule

Before proposing a new field/entity, test whether the information can be represented without loss by:

- an existing field or repeatable record;
- an existing controlled/extensible value;
- taxonomy term/provisional term;
- scoped alias;
- typed/provisional relationship;
- evidence scope locator;
- component-level evidence link;
- existing contextual attributes;
- a synthesis-layer object if the information is Atlas-derived rather than paper-level.

### 9.2 Structural-need rule

A schema candidate is justified only by demonstrated structural need, such as:

- irreducible scientific information loss;
- materially ambiguous normalization that cannot be resolved by scope/evidence;
- stable cross-record identity/linking failure;
- a scientifically distinct dimension that cannot be reconstructed from existing fields;
- recurring information whose separation is necessary for valid analysis and cannot be represented safely by taxonomy/relationships;
- an existing owner that is demonstrably too narrow and requires governed generalization.

Convenience, UI layout, easier querying, one paper's preferred terminology, or desire for a visually complete profile is not sufficient by itself.

### 9.3 Generalization-before-duplication rule

If an existing field is scientifically the correct owner but too narrow, prefer a governed generalization with a lossless migration over creating a competing long-term owner. The v0.7 `adaptive_weighting[] → loss_weighting_method[]` migration is the canonical precedent.

### 9.4 Multiplicity rule

Do not add scalar convenience fields when repeatable records are scientifically required. Conversely, do not create a new entity when an existing repeatable structure plus evidence scope preserves identity adequately.

### 9.5 Schema-adoption consequence

Any post-v0.7 schema field/entity/generalization that changes the scientific contract requires:

- later ontology version;
- correct single-owner update;
- changelog entry;
- serialization/implementation synchronization;
- migration specification;
- backward-compatibility and semantic regression QA;
- preservation of prior raw evidence and historical versions;
- explicit promotion/lock decision.

Task 1.5 will define operational readiness thresholds; this section defines only the qualitative scientific process.

## 10. Reclassification and migration rules

Reclassification is allowed; evidence rewriting is not.

A governed extension may cause normalized records to:

- map from provisional → canonical;
- map from one canonical term to another after merge/re-parent/deprecation;
- update alias scope/target;
- migrate to a generalized field;
- link to a new canonical relation;
- move from paper-specific/provisional to canonical when promoted;
- remain unchanged when evidence does not support the new structure.

Every such migration must preserve:

- original verbatim evidence;
- evidence ID;
- source locator and source scope;
- source origin/evidence role;
- historical extraction/record version;
- prior classification/version history;
- conflict/mismatch state;
- stable paper identity;
- ability to explain old→new mapping.

No new field/value may be populated retrospectively by inference merely because the new ontology supports it.

## 11. Synthesis-extension rules

The synthesis layer is intentionally extensible but remains evidence-bound.

New synthesis families, framework nodes/edges, matrix dimensions/cells, diagnostic categories, gap families, opportunity families, or exploratory Framework Builder structures may be proposed when useful.

Rules:

- synthesis objects must identify their source paper/evidence basis where scientifically material;
- a synthesis extension does not modify paper-level facts automatically;
- frequency alone cannot promote a synthesis claim into stronger evidence;
- contradictory and scope-dependent evidence must remain visible;
- official Atlas synthesis must be distinguishable from user-generated/exploratory synthesis;
- if persistence requires a new database-native synthesis entity, that is an implementation/synthesis design decision unless it changes paper-level scientific semantics;
- if a synthesis need reveals irreducible missing paper-level structure, route that separate issue through X6 rather than silently storing paper facts inside the framework object.

## 12. Current and future Atlas page/tool extension rules

The 26-route production register is a preservation/migration baseline, not the final information architecture and not a route ceiling.

New pages and page families may be added under governed architecture. Current pages may later be retained, redesigned, merged, nested, renamed, replaced, redirected, or retired after the required audit/migration/regression work.

Rules:

1. A page does not become a scientific owner merely because it exposes or edits data.
2. New page-specific scientific fields are prohibited; scientific semantics must come from the governed architecture.
3. UI grouping/navigation hierarchy must not be mistaken for taxonomy hierarchy.
4. New explorers must respect scientifically valid comparison rules and provenance drill-down.
5. Page-level caches/derived datasets may optimize delivery but must not become unsynchronized scientific authorities.
6. New write-capable tools must use explicit review/provenance/permission workflows appropriate to the scientific record being changed.
7. Future pages must be addable without redesigning the whole ontology/database when they consume existing governed entities/queries.
8. If a page concept genuinely requires new scientific semantics, route it through X1–X7 first.

## 13. Computational Resources / bounded-subsystem extension rules

Computational Resources remains independently governed.

The reserved future information-architecture direction remains:

```text
Computational Resources
├── Code & Software
├── Datasets
├── Frameworks & Libraries
├── Simulators & Solvers
└── Reproducibility Explorer
```

Task 1.4 rules for future integration:

- keep Atlas `paper_id` and computational-resource IDs independent;
- connect them through explicit governed relationship semantics;
- preserve each subsystem's evidence/provenance model;
- do not equate paper reproducibility with resource verification automatically;
- do not import unfinished Stage 1/2/3 schema decisions as Atlas ontology extensions;
- do not let a new resource page/tool silently redefine paper-level methodology fields;
- detailed schema reconciliation remains deferred to an explicit future integration checkpoint when Computational Resources is sufficiently stable.

No Computational Resources branch is modified by Task 1.4.

## 14. Change-log and decision-record requirements

For any accepted scientific ontology/schema change, preserve at least the v0.7 changelog contract:

- `change_id`;
- `ontology_version`;
- `change_type`;
- affected record type/id;
- rationale;
- triggering paper IDs;
- supporting evidence IDs;
- reviewer/date;
- migration notes when linked normalized records change.

The controlled change types already recognized by v0.7 include:

`add`, `promote`, `merge`, `alias`, `re-parent`, `deprecate`, `relation-add`, `relation-change`, `schema-add`, `schema-change`.

Implementation/product changes that do not alter scientific meaning should still be version-controlled in GitHub, but they must not be misregistered as scientific ontology changes solely because a route, API, or database representation changed.

## 15. Candidate working state versus authoritative scientific state

Later implementation should explicitly separate **working candidates** from **authoritative scientific state**.

A candidate may include proposed terms, aliases, relations, vocabulary values, schema changes, migrations, page mappings, or synthesis extensions under review.

A candidate must not:

- overwrite the locked baseline;
- be exposed as canonical merely because software can query it;
- enter verified synthesis as positive support unless it independently meets synthesis-eligibility rules;
- cause production pages to present an unapproved concept as settled Atlas science.

After approval, only the relevant scientific owner(s), version/changelog, serialization contract, migration artifacts, and QA records are updated through the governed release process.

## 16. Extension rejection / defer rules

A proposal may be rejected or deferred when:

- existing representation is already adequate;
- the distinction is source-local only;
- evidence is too weak or ambiguous;
- recurrence/generalizability is insufficient for the requested promotion level;
- the requested merge violates a no-merge invariant;
- analytical usefulness is not demonstrated;
- the proposal duplicates an existing owner;
- it confuses synthesis with paper-level facts;
- it is motivated primarily by implementation/UI convenience;
- it would require unsupported retrospective filling;
- it cannot preserve backward compatibility/evidence history safely.

A rejection/defer decision should retain reopening criteria when a future evidence pattern could legitimately change the decision.

## 17. Reopening rules

Deferred or rejected structural concepts are not permanently forbidden unless a no-merge/prohibited-edge invariant says so.

A deferred issue may be reopened when new evidence demonstrates the specific deficiency that originally remained unproven. Examples of valid reopening signals include:

- stable cross-record linking failure not solvable by current repeatable records/scope locators;
- independently recurrent, analytically useful information not reconstructable from existing fields;
- repeated relation semantics that cannot be represented without distortion;
- repeated controlled-value distinctions that materially change scientific interpretation;
- a decisive adversarial case demonstrating irreducible structural information loss, followed by appropriate cross-corpus review.

Reopening does not imply adoption; it restarts governed adjudication.

## 18. Task 1.3 invariant compatibility matrix

Task 1.4 is constrained especially by the following Task 1.3 groups:

| Extension concern | Mandatory Task 1.3 constraints |
|---|---|
| Evidence preservation | R1–R6, R19, R29, R45, R48 |
| Taxonomy / aliases | R13, R16–R20, R25, R43–R46 |
| Relationships | R14, R17–R20, R25–R29, R47 |
| Schema specialization | R2, R7–R15, R18–R24, R33, R44–R46 |
| AI-assisted proposals | R30–R33 |
| Synthesis extension | R25–R29, R48 |
| Current/future pages | R34–R38, R47 |
| Computational Resources | R39–R42 |
| Version/migration | R24, R43–R45, R48 |

This matrix is a constraint map only. Task 1.6 will create the formal requirement/coverage matrix across all Master Plan requirements.

## 19. What Task 1.4 deliberately does not decide

Task 1.4 does not define:

- numerical clean-mapping percentages or allowable unresolved rates → Task 1.5;
- exact batch sizes or stop/go thresholds for 853-paper scale-out → Task 1.5 / later execution planning;
- full requirement/coverage matrix → Task 1.6;
- Master Plan v1.0 freeze → Task 1.7;
- permanent SQL tables/cardinalities/API design → Task 2 / Task 12;
- exact future Atlas navigation hierarchy or per-route disposition → Task 9 and later prototype reconciliation;
- detailed Computational Resources schema mapping → future explicit integration checkpoint;
- whether a particular future concept actually deserves v0.8 promotion until evidence triggers the governed process.

## 20. Task 1.4 acceptance checklist

Task 1.4 passes only if the extension contract ensures that:

- new evidence can always be preserved without force-fitting;
- source-local/paper-specific concepts remain representable;
- provisional terms/relations can be reviewed without pretending to be canonical;
- controlled/extensible values cannot be silently expanded as canonical science;
- taxonomy/alias/relation/schema owners remain distinct;
- structural change is evidence-driven and last-resort rather than convenience-driven;
- later canonical scientific changes require a governed version/changelog;
- migration preserves raw evidence/history/conflicts/IDs;
- synthesis extensions remain distinct from paper-level facts;
- current and future pages can evolve without becoming independent scientific authorities;
- Computational Resources remains independently governed but integrable;
- Task 1.3 R1–R48 remain enforceable;
- Task 1.5 thresholds remain unpreempted.

## 21. Task 1.4 verdict

**PASS**

The controlled dynamic-extension lifecycle is now explicit enough to guide later ingestion, ontology review, database design, page/tool growth, synthesis evolution, migration, and future scientific-version changes without modifying locked v0.7.

No locked v0.7 scientific document was modified.

No production Atlas `main` file was modified.

No Computational Resources Stage 1/2/3 branch was modified.

No production database, schema migration, ontology promotion, route change, or page redesign was authorized.

**Exact next action:** Roadmap **Task 1.5 — Restore/formalize operational scale-out acceptance gates**, using Task 1.3 R1–R48 and this Task 1.4 extension lifecycle as mandatory constraints.