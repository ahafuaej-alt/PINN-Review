# Task 3.4 — Evidence / Provenance Drill-Down Behavior

Status: **PASS — COMPLETE**

Date: 2026-09-07

Roadmap parent: `docs/master-architecture/CONTROLLED-ROADMAP.md` → Task 3.4.

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

Implementation contract: frozen Master Plan v1.0.

Controlling Paper Profile inputs:

- `TASK-3.1-FIRST-CLASS-PAPER-PROFILE-SECTIONS.md` — `PP-01`–`PP-19` section identities and no-merge rules;
- `TASK-3.2-PAPER-PROFILE-FIELD-SPECIFICATION.md` — evidence ownership, field-level provenance classes and exact v0.7 `EVIDENCE` fields;
- `TASK-3.3-CONDITIONAL-PROFILE-SECTIONS-AND-DISPLAY-LOGIC.md` — minimum evidence/status visibility, public-vs-maintenance separation and forced-visibility rules.

This task defines the **scientific interaction contract** for moving from a Paper Profile claim/record to its evidence, source context, provenance, semantic mapping and integrity state. It does not modify locked v0.7, create a new evidence entity, create production UI code, create the machine-readable Paper Profile specification reserved for Task 3.5, or create the visual mockup reserved for Task 3.6.

---

## 1. Verified starting state and locked evidence contract

Before Task 3.4 writes, the roadmap branch was verified at:

`e63096db45ed5a26347b69b01d4ca5af09c235a1`

with Tasks 3.1–3.3 PASS/COMPLETE and Task 3.4 explicitly NEXT.

Locked v0.7 readback reconfirmed that:

1. every scientific record used for synthesis must link to an `EVIDENCE` record;
2. `verbatim_evidence` is exact source text and mandatory for a valid evidence object;
3. source location must be preserved as precisely as available and never invented;
4. original verbatim evidence, original source location, evidence source role and recorded conflict/mismatch are immutable after capture except through explicit correction/supersession with history preserved;
5. `verification_status` and `support_status` are independent dimensions;
6. mixed papers require source/component scope preservation through `evidence_source_role` and `scope_locator`, not a fabricated mandatory `study_component_id`;
7. cited-study or adapted evidence must not be presented as current-paper original evidence;
8. only reviewed/eligible evidence may support published Atlas scientific claims or synthesis.

Task 3.4 therefore defines only an L8 **read/navigation behavior** over L3 evidence and related L2/L4/L5 provenance. It creates no new scientific state.

## 2. Core principle: every material Paper Profile claim must be auditable in place

A reader must be able to answer, without leaving the scientific context of the record:

1. **What exactly is the Atlas displaying?**
2. **Which normalized paper record owns it?**
3. **What source evidence supports, partially supports, mismatches or conflicts with it?**
4. **Where in the source does that evidence occur?**
5. **What is the source/evidence role?**
6. **Has the evidence been reviewed?**
7. **What did the reviewed evidence establish?**
8. **Which canonical/provisional semantic identity was applied, if any?**
9. **What ambiguity/conflict/history remains?**

The drill-down must never require the user to infer these answers from styling, ordering, terminology similarity or a generic “verified” badge.

## 3. Evidence/provenance pathways by Task-3.2 evidence class

Task 3.2 defines six evidence/provenance behaviors. Task 3.4 fixes the corresponding UI/drill-down pathway.

| Task-3.2 code | Meaning | Task-3.4 drill-down behavior |
|---|---|---|
| `BIB-PROV` | bibliographic provenance/history | open bibliographic provenance/history context; do **not** manufacture an L3 scientific evidence object |
| `E-LINK` | separate L3 evidence link required | open the record-linked evidence drill-down using `linked_entity_type` + `linked_record_id` and any explicit governed evidence IDs |
| `E-INLINE` | nested scientific structure carries `evidence_locator` | show the nested locator in context **and** resolve linked L3 evidence when synthesis-relevant; inline locator never substitutes for L3 evidence |
| `E-DIRECT` | source record carries `evidence_location` / `evidence_text` | show those owned fields and resolve the L3 evidence link where required; do not count the same evidence twice |
| `PROV` | workflow/version/provenance metadata | open operational provenance/history context, not a scientific evidence quote |
| `N/A` | ID/technical key | no evidence claim belongs to the key itself; follow evidence from the owning scientific record |

This prevents the future UI from turning every metadata value into a faux citation or, conversely, hiding scientific evidence behind generic workflow metadata.

## 4. Required drill-down entry points

Evidence/provenance must be reachable from all of the following places where applicable:

### 4.1 Record-level affordance

Every displayed material scientific record in `PP-02`–`PP-18` that requires scientific evidence must expose a visible evidence/provenance affordance.

The affordance must communicate at minimum:

- linked evidence exists / evidence integrity problem exists;
- whether conflict/mismatch is present;
- whether evidence is still pending review in maintenance mode.

It must not communicate evidence strength by an undocumented icon, color or evidence-count alone.

### 4.2 Field/substructure-level affordance

Where one structured record contains scientifically distinct evidence-bearing components, the drill-down must target the component rather than only the parent card.

Examples include:

- physical constraints;
- model-variable representations;
- differentiation details;
- fidelity-source roles;
- derived-output methods;
- diagnostic pathway components.

Explicit component evidence IDs or governed nested evidence links take precedence over loose parent-level association.

### 4.3 PP-19 paper-wide evidence index

`PP-19 Evidence / Provenance` is always rendered and provides a complete evidence index for the current Paper Profile.

It must support grouping/filtering by:

- Paper Profile section;
- linked entity/record;
- evidence source role;
- evidence type;
- interpretation origin (`author_or_reviewer`);
- verification status;
- support status;
- statement strength;
- scope/component locator where present.

PP-19 is an index/view over L3 evidence. It does **not** copy evidence into the paper record or become a second evidence store.

### 4.4 Integrity-warning entry point

If Task 3.3 forces a section visible because of conflict, mismatch, missing required evidence or source-role ambiguity, the warning itself must open directly to the affected evidence/provenance context rather than to a generic paper-wide help panel.

## 5. Five-stage drill-down model

The future Paper Profile interaction must support the following conceptual stages. A UI may combine stages visually, but the information boundaries must remain recoverable.

### D1 — Scientific record context

Show the exact Paper Profile record/subrecord from which the user opened the evidence view.

Required context:

- `PP-xx` section identity;
- record type;
- stable record identifier where one exists;
- displayed normalized value/statement;
- applicability/display state when scientifically relevant;
- canonical/provisional/source-local semantic label state where relevant.

The UI must not rewrite the record into a new summary that changes its scientific scope.

### D2 — Evidence set summary

Show **all evidence records explicitly linked to the selected scientific record/component**, including supporting, partially supporting, mismatched and conflict evidence.

The summary must expose separately:

- number of linked evidence records;
- verification-status distribution;
- support-status distribution;
- source-role distribution;
- presence of unclear provenance;
- presence of mixed-component scope;
- presence of conflict/mismatch.

**Forbidden:** converting evidence-record count into “evidence strength,” “number of independent studies,” or scientific confidence. Repeated citations/passages are not automatically independent support.

### D3 — Evidence record detail

For a selected `EVIDENCE` record, expose the exact locked v0.7 fields as applicable:

- `evidence_id`;
- `paper_id`;
- `evidence_category`;
- `linked_entity_type`;
- `linked_record_id`;
- `normalized_statement`;
- `verbatim_evidence`;
- `source_section`;
- `source_subsection`;
- `page`;
- `paragraph`;
- `figure`;
- `table`;
- `appendix`;
- `evidence_type`;
- `statement_strength`;
- `author_or_reviewer`;
- `evidence_source_role`;
- `scope_locator`;
- `verification_status`;
- `support_status`;
- `verified_by` when present;
- `verification_date` when present;
- `verification_notes` when present.

No additional scientific field is introduced by this display contract.

### D4 — Source context / source navigation

From an evidence record, the reader must be able to recover the source location as precisely as the governed data permit.

The UI may provide a source-open action only when a valid source association exists.

Rules:

- use recorded section/subsection/page/paragraph/figure/table/appendix/scope data exactly;
- never synthesize a page, paragraph, anchor or deep link that was not verified;
- if the source can be opened only at document level, open the document and display the verified locator separately;
- if direct source access is unavailable, keep the locator visible and state that source opening is unavailable rather than inventing a link;
- source access behavior must respect publication/access rights and later deployment policy.

### D5 — Semantic/provenance trace

Where a normalized record uses L5 semantic control, the evidence view must allow the reader to inspect the relevant semantic identity without implying that the evidence itself defines the ontology.

Possible trace targets include:

- canonical taxonomy term;
- scoped alias;
- provisional term;
- paper-specific/source-local concept;
- registered/provisional relationship;
- ontology version used for normalization.

The trace must preserve:

`source wording/evidence → normalized paper record → semantic identity/status`

and never reverse this into “canonical term → therefore the paper said it.”

## 6. Source text and Atlas interpretation must be visually and semantically separate

For every evidence detail:

### 6.1 Source text

`verbatim_evidence` is the captured source text and must be labelled as source evidence.

It must not be silently edited to improve grammar, expand abbreviations, merge sentences, remove qualifiers or harmonize terminology.

### 6.2 Normalized statement

`normalized_statement` is the Atlas interpretation/normalization of what the evidence establishes.

It must be displayed separately from the source text and must never masquerade as a direct quotation.

### 6.3 Interpretation origin

`author_or_reviewer` uses the locked evidence/interpretation-origin vocabulary and must remain visible/recoverable:

- `author_stated`;
- `author_result`;
- `author_limitation`;
- `author_future_work`;
- `author_open_problem`;
- `strongly_implied`;
- `atlas_extraction`;
- `atlas_synthesis`.

The UI must not collapse author-stated material and Atlas interpretation into one narrative block.

## 7. Exact evidence-status semantics

### 7.1 Verification status

The locked record/evidence verification values are:

- `unverified`;
- `partially_verified`;
- `verified`;
- `needs_review`;
- `conflict_found`.

This answers: **has the evidence/record been checked?**

### 7.2 Support status

The locked evidence support values are:

- `supported`;
- `partially_supported`;
- `mismatched`;
- `unverified`;
- `conflict_found`;
- `not_applicable`.

This answers: **what does the evidence establish about the linked claim/record?**

### 7.3 Mandatory independent rendering

Verification and support status must be rendered as separate labelled dimensions.

Examples that must remain possible:

- `verified + supported`;
- `verified + partially_supported`;
- `verified + mismatched`;
- reviewed conflict state + `conflict_found` support;
- `needs_review + unverified` support state in maintenance mode.

**Forbidden:** translating `mismatched` into “unverified.” A citation can be fully checked and still fail to support the linked statement.

## 8. Exact evidence source-role behavior

The locked `evidence_source_role` values are:

- `current_paper_original`;
- `current_paper_reanalysis`;
- `review_synthesis`;
- `cited_primary_study`;
- `adapted_from_cited_study`;
- `unclear`.

The source role must be visible in each evidence detail and recoverable in summary/filter views.

Rules:

1. `unclear` must remain visibly unclear; the renderer may not upgrade it to current-paper originality.
2. review-synthesis evidence cannot be presented as direct current-paper empirical evidence.
3. cited-study evidence cannot be presented as a direct result of the current paper.
4. adapted figures/analyses retain adapted provenance.
5. `current_paper_reanalysis` remains distinct from both original current-paper evidence and review synthesis.
6. mixed papers use `scope_locator` plus source role to preserve component scope; Task 3.4 does not invent `study_component_id`.

## 9. Evidence type and statement strength

The locked evidence types are:

- `explicit_statement`;
- `explicit_result`;
- `explicit_limitation`;
- `explicit_future_work`;
- `explicit_open_problem`;
- `strongly_implied`;
- `atlas_inference`.

The locked statement-strength values are:

- `direct`;
- `strong`;
- `moderate`;
- `weak`;
- `ambiguous`.

These fields may be displayed/filterable, but the renderer must not transform them into a universal numeric score or confidence percentage.

Evidence frequency is not evidence strength, and statement strength is not equivalent to cross-paper independent support.

## 10. Multi-evidence and contradiction behavior

A scientific record may have multiple evidence records. The drill-down must preserve multiplicity.

### 10.1 No positive-only filtering by default

Default record-level evidence inspection must not hide mismatched or conflicting evidence merely because supporting evidence also exists.

### 10.2 Conflict presentation

When conflict exists:

- preserve each source statement/evidence object separately;
- show the affected scope/record;
- show verification and support status independently;
- do not generate a synthetic reconciled statement unless a governed reviewed normalized record already provides one;
- do not contaminate unrelated verified fields with the conflict.

### 10.3 Mismatch presentation

For `support_status=mismatched`:

- show the linked claim/record that was tested;
- show the actual evidence text and normalized interpretation;
- state that the evidence does not semantically support the linked claim;
- preserve workflow verification state separately.

### 10.4 Ordering

Within one linked record, evidence must use a deterministic, scientifically neutral ordering.

Preferred order:

1. group by explicit source/component scope when needed;
2. preserve source-document order when locators make that possible;
3. otherwise use stable evidence identity as deterministic fallback.

Supporting evidence must not automatically appear above contradictory evidence in a way that implies priority or stronger truth status.

## 11. Inline/direct evidence must not be double-counted

Some locked structures carry their own `evidence_locator`, `evidence_location` or `evidence_text` while also participating in L3 evidence.

The UI must treat these as two views of the same provenance chain when they refer to the same scientific support, not as two independent evidence items.

For `E-INLINE` and `E-DIRECT`:

- show owner-local evidence information in record context;
- provide the L3 evidence object for full provenance/status where required;
- do not increment an “evidence count” twice for the same governed evidence record;
- if the inline/direct text and L3 evidence disagree, surface an integrity defect rather than silently choosing one.

## 12. PP-19 evidence index behavior

PP-19 is not merely a list of quotes. It is the paper-wide audit surface.

It must support these conceptual views:

### 12.1 By Paper Profile section

Group evidence under `PP-02`–`PP-18` records so the reader can see which profile claims have evidence and which have integrity issues.

### 12.2 By source role

Separate current-paper original, reanalysis, review synthesis, cited/adapted evidence and unclear provenance.

### 12.3 By integrity state

Allow explicit inspection of:

- conflict;
- mismatch;
- needs review;
- partially verified;
- unclear provenance;
- missing required link.

### 12.4 By source location

Provide a source-oriented index without implying that nearby passages support the same claim.

### 12.5 By semantic target

Where applicable, allow evidence to be traced to the normalized record and then to the L5 canonical/provisional semantic identity.

PP-19 may show counts for navigation, but those counts must be labelled as **evidence-record counts**, not independent-study counts or evidence strength.

## 13. Public verified mode versus review/maintenance mode

### 13.1 Public verified mode

The public Paper Profile must expose only evidence that is eligible under current review/publication rules for the published scientific record, while still preserving reviewed conflicts/mismatches that materially qualify the published record.

It must never use `unverified`, `partially_verified` or `needs_review` evidence as positive proof for a verified public claim.

If a published scientific record requires evidence but no eligible evidence resolves to it, profile generation must raise an integrity/QA failure rather than display the unsupported claim as normal.

### 13.2 Review/maintenance mode

Maintenance mode may expose:

- pending evidence;
- unverified/partially verified evidence;
- `needs_review` states;
- proposed semantic mappings;
- extraction/AI candidates.

These must remain visually and semantically separated from accepted verified public science.

No action inside the evidence drill-down automatically promotes pending evidence or changes scientific status. Review actions belong to later ingestion/review tooling.

## 14. Evidence history, correction and supersession

Task 3.4 must support future display of governed correction/history without rewriting the original captured evidence.

Required principle:

- original `verbatim_evidence`, locator, source role and recorded mismatch/conflict remain historically recoverable;
- normalization/classification may change only through governed review/change processes;
- if a corrected/superseding evidence record or evidence-classification history exists under later implementation, the UI must show the lineage rather than silently replacing the earlier state.

Task 3.4 does **not** create a new locked history entity. Exact physical history tables/workflows remain Tasks 10/12/14.

## 15. Source-access and quotation-display boundary

The existence of canonical `verbatim_evidence` does not force the public UI to reproduce unlimited copyrighted source text.

The drill-down contract therefore separates:

- **scientific evidence storage/auditability** — governed by locked L3 evidence; from
- **public excerpt-display policy** — a later deployment/content-rights decision.

A future public renderer may show a bounded excerpt and source locator while preserving the complete governed evidence object internally. Any such display restriction must not sever record → evidence → source traceability or alter the underlying evidence text.

## 16. Stable navigation and deep-link semantics

Task 3.4 defines logical deep-link targets, not a production route syntax.

A future implementation must be able to restore at least:

- `paper_id`;
- `PP-xx` section;
- linked record/component identity where present;
- `evidence_id` when a specific evidence item is selected.

Browser back/forward behavior must restore the originating Paper Profile context rather than dropping the user at a generic evidence page.

Task 3.4 does not freeze URL structure; Task 3.5/3.6/16 may bind these logical targets to machine-readable/UI routes.

## 17. Accessibility and compact-view equivalence

Evidence/provenance drill-down must remain usable without hover, color-only status or pointer-only interaction.

Minimum requirements:

- keyboard-operable evidence affordances;
- visible focus state;
- semantic labels for verification/support/source role;
- source text and normalized interpretation announced as distinct regions;
- conflict/mismatch communicated textually, not only by color/icon;
- repeated evidence records individually navigable;
- compact/mobile mode preserves the full scientific-status information even if layout changes;
- opening/closing the drill-down returns focus to the originating record.

The exact visual component (drawer, dialog, side panel, full-screen mobile sheet) remains Task 3.6.

## 18. Integrity/QA failures surfaced by the drill-down layer

The future renderer/validator must treat the following as defects rather than cosmetic gaps:

1. required scientific record has no resolvable evidence link;
2. `linked_entity_type` / `linked_record_id` cannot resolve;
3. evidence `paper_id` does not match the owning profile context unless an explicitly governed cross-source mechanism applies;
4. mandatory `verbatim_evidence` is absent;
5. mandatory `source_section` is absent without a governed correction/state;
6. fabricated locator/source URL is detected;
7. `verification_status` and `support_status` are collapsed or swapped;
8. `evidence_source_role` is missing/invalid;
9. mixed-study evidence loses `scope_locator` when needed to preserve scope;
10. mismatched/conflicting evidence is suppressed while the linked claim remains visible;
11. cited/adapted/review evidence is relabelled as current-paper original;
12. inline/direct evidence is double-counted as independent evidence;
13. raw source text is silently rewritten to match normalized terminology;
14. unreviewed evidence is used as positive public proof;
15. evidence count is presented as scientific strength or independent support count.

## 19. Deterministic drill-down resolution procedure

For any evidence affordance, the future implementation must resolve in this order:

1. identify Paper Profile mode (public verified vs maintenance/review);
2. resolve the originating `PP-xx` record/component and authoritative owner;
3. determine its Task-3.2 evidence class (`BIB-PROV`, `E-LINK`, `E-INLINE`, `E-DIRECT`, `PROV`, `N/A`);
4. resolve explicit L3 evidence links by governed IDs, not text similarity;
5. include explicit component-level evidence links where defined;
6. verify `paper_id`, linked entity/record integrity and scope;
7. retain all eligible support/mismatch/conflict evidence;
8. expose verification and support status independently;
9. expose source role/origin and exact source locator;
10. expose source text separately from normalized statement;
11. expose semantic identity/status where applicable;
12. apply public-vs-maintenance eligibility rules;
13. surface any integrity failure instead of silently degrading provenance.

The same canonical data + same profile mode + same selected record must yield the same evidence set and status representation.

## 20. Adversarial acceptance cases

Task 3.4 is accepted only if the specification handles all of these without semantic corruption:

1. **single direct statement** — one current-paper evidence item resolves cleanly;
2. **one record / multiple passages** — all evidence is preserved without flattening;
3. **verified mismatched citation** — `verified + mismatched` remains visible;
4. **genuine internal conflict** — both source statements remain separately inspectable;
5. **review paper** — review-synthesis and cited-study evidence cannot masquerade as direct current-paper result evidence;
6. **mixed paper** — current original/reanalysis/review/cited/adapted scope remains distinguishable via source role/scope locator;
7. **diagnostic pathway** — evidence can resolve to individual symptom/cause/check/intervention/verification components;
8. **inline locator + L3 evidence** — one support chain is not double-counted;
9. **direct evidence text + L3 evidence** — one support chain is not double-counted;
10. **provisional/source-local semantic mapping** — source evidence remains visible while semantic status remains noncanonical;
11. **missing locator** — renderer reports integrity issue rather than inventing location;
12. **maintenance-only pending evidence** — visible to reviewers but not used as verified public proof;
13. **public conflict** — reviewed conflict remains visible and qualifies the affected claim;
14. **source inaccessible** — verified locator remains visible without fabricated source opening;
15. **mobile/keyboard use** — all evidence/status distinctions remain recoverable.

All fifteen cases are covered by explicit rules above.

## 21. Coverage audit

Task 3.4 completion coverage:

- PP-19 locked v0.7 evidence fields represented in drill-down = **24/24 scientific/metadata fields** (`F01`–`F24`);
- PP-19 derived evidence-index/grouping projections governed = **2/2** (`F25`–`F26`);
- Task-3.2 evidence/provenance classes governed = **6/6**;
- exact verification-status vocabulary preserved = **5/5**;
- exact support-status vocabulary preserved = **6/6**;
- exact evidence-source-role vocabulary preserved = **6/6**;
- exact evidence-type vocabulary preserved = **7/7**;
- exact statement-strength vocabulary preserved = **5/5**;
- direct record, component, PP-19 index and integrity-warning entry points = **4/4**;
- five conceptual drill-down stages = **5/5**;
- adversarial acceptance cases = **15/15**;
- raw source text vs normalized interpretation separation = **PASS**;
- verification vs support separation = **PASS**;
- conflict/mismatch preservation = **PASS**;
- mixed/review source-role scope preservation = **PASS**;
- public vs maintenance evidence separation = **PASS**;
- source-locator no-invention rule = **PASS**;
- evidence-count ≠ strength/independence rule = **PASS**;
- new locked-v0.7 fields/entities = **0**;
- silently revived prohibited/deferred structures = **0**;
- Computational Resources boundary violations = **0**.

### Acceptance result

**PASS.** Task 3.4 defines an auditable record → evidence → source → semantic/provenance drill-down without changing locked scientific ownership. PP-19 remains a read/index projection over L3 evidence, and evidence interaction cannot silently promote, rewrite, suppress or reinterpret governed scientific evidence.

## 22. Stop boundary

Task 3.4 ends with the evidence/provenance drill-down contract above.

**Task 3.5 has not been started.**

Exact next action, only when separately authorized: **Task 3.5 — create a version-controlled machine-readable Paper Profile specification in GitHub**, binding Tasks 3.1–3.4 to shared IDs, section/field ownership, conditional display states and evidence-drill-down rules without creating a new scientific ontology owner.
