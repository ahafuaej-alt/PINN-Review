# Task 3.5 — Machine-Readable Paper Profile Specification

Status: **PASS — COMPLETE**

Date: 2026-09-07

Roadmap parent: `docs/master-architecture/CONTROLLED-ROADMAP.md` → Task 3.5.

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

Implementation contract: frozen Master Plan v1.0.

Machine-readable coordination source:

`docs/master-architecture/atlas-paper-profile-spec.json`

Read-only drift validator:

`docs/master-architecture/validate-paper-profile-spec.py`

Task 3.5 binds Tasks 3.1–3.4 into a version-controlled machine-readable **L8 coordination contract**. It is explicitly not a scientific ontology/schema owner, does not redefine locked fields or vocabularies, and does not create a canonical Paper Profile data store. Scientific meaning remains owned by locked v0.7 and the Task-3.2 owner mapping.

## 1. Verified starting state

Before Task 3.5 writes, branch `docs/master-atlas-roadmap` was verified at:

`ec2edf4c2154e4abb5843ea78708d8f645a31bd7`

with Tasks 3.1–3.4 PASS/COMPLETE and Task 3.5 explicitly NEXT.

The current Google Drive Master Memory revision before Task 3.5 was:

`ANLCKQlIV0aqS-HrPx2GDhDhP37c1bLMfeqlxax-h9JnSmaf_T7cgyIiyzCW5vry4Ilc60NaXmJPtd6hHvW8XIxBavzbNLSjvOx5GNl6Kkg`

Controlling inputs read back before construction:

- Task 3.1 — 19 permanent Paper Profile section identities and semantic no-merge boundaries;
- Task 3.2 — complete owner/multiplicity/evidence/semantic/applicability/serialization field mapping;
- Task 3.3 — three-axis display state and R-D01–R-D18 rendering rules;
- Task 3.4 — evidence/provenance drill-down behavior;
- `atlas-architecture-registry.json` — shared L1–L8/G architecture IDs;
- locked v0.7 evidence/vocabulary state from Google Drive.

## 2. Scientific-authority boundary

`atlas-paper-profile-spec.json` declares:

- `scientific_authority=false`;
- `may_define_scientific_meaning=false`;
- `may_modify_locked_v0_7=false`.

The JSON therefore coordinates implementation/UI consumers only. It may bind stable architecture coordinates to their authoritative source rows, but cannot change the meaning, cardinality, evidence requirement, controlled vocabulary, taxonomy state, relationship semantics or applicability owned by locked v0.7.

Task 3.2 remains the controlling human-readable field/owner contract. For every explicit field coordinate, the machine-readable specification binds to the Task-3.2 row with the same coordinate and treats the row columns `Owner`, `Multiplicity / req.`, `Evidence`, `Semantic control`, `Applicability` and `Serialization` as controlling. This prevents the Task-3.5 JSON from becoming a competing scientific dictionary.

## 3. Stable Paper Profile ID contract

### 3.1 Section IDs

The following are now stable **profile architecture IDs**, not ontology IDs:

`PP-01` through `PP-19`.

They retain Task-3.1 fixed semantic order and titles.

### 3.2 Explicit field coordinates

Existing Task-3.2 coordinates become stable machine-readable profile coordinates under this architecture contract:

`^PP-[0-9]{2}\.(F|R|X|D|M)[0-9]{2}$`

The JSON stores their deterministic coordinate ranges per section.

Expanded explicit coordinate count = **274**.

### 3.3 Nested structured subfields

Task-3.2 nested-arrow rows receive deterministic profile IDs:

`<parent_coordinate>.<normalized_source_key>`

where `[]` is removed only from the identifier spelling; the underlying scientific source key/array semantics are unchanged.

Nested structured subfields = **73**.

They are bound under exactly these parent structures:

- `PP-04.F08` physical constraints;
- `PP-08.D02` data regime;
- `PP-08.M04` model-variable representation;
- `PP-08.M05` network configuration;
- `PP-08.M11` training protocol;
- `PP-08.M13` differentiation method;
- `PP-08.M16` parallel execution;
- `PP-08.M17` loss weighting;
- `PP-08.M18` transformation method;
- `PP-08.M21` fidelity-source role;
- `PP-08.M22` derived-output method;
- `PP-18.F12` diagnostic component evidence links.

Total machine-readable Paper Profile field IDs = **347** (`274 + 73`).

This count is deliberately distinguished from Task 3.2's **317/317 locked scientific mappings**:

- locked top-level mappings = **244**;
- locked structured subfield mappings = **73**;
- locked mappings total = **317**;
- additional explicit profile coordinates = **30**, representing bibliographic/L2, technical/provenance, L3 projection, ARCH or future-bounded view coordinates already documented by Task 3.2; they are **not new locked-v0.7 fields**.

## 4. Architecture binding

Every PP section carries explicit architecture references to the accepted Task-2 registry.

Coverage includes:

- PP-01 → L2 bibliographic identity components;
- PP-02 → L4-P1/L4-P2;
- PP-03 → L4-P3;
- PP-04 → L4-P4;
- PP-05 → L4-P5;
- PP-06 → L4-P7;
- PP-07 → L4-P8;
- PP-08 → L4-P6 + L4-P9;
- PP-09 → L4-P10;
- PP-10 → L4-P11;
- PP-11 → L4-P12;
- PP-12 → L4-P13;
- PP-13 → L4-P14;
- PP-14 → L4-P15;
- PP-15 → L4-P16;
- PP-16 → L4-P17;
- PP-17 → L4-P18;
- PP-18 → L4-P19;
- PP-19 → L3-E1–L3-E7 + L4-P20.

Task-2 architecture remains the architecture-ID owner; Task 3.5 only references it.

## 5. Conditional-display binding

The JSON makes Task-3.3 derived presentation logic machine-readable without persisting it as science.

It encodes:

- all 19 section identities always present in the section-status index;
- core body sections = `PP-01`, `PP-02`, `PP-19` (**3/3**);
- conditional body sections = `PP-03`–`PP-18` (**16/16**);
- applicability axis = `A-APPLICABLE`, `A-NOT-APPLICABLE`, `A-UNRESOLVED`;
- content axis = `C-POPULATED`, `C-EXPLICIT-STATE`, `C-UNREPRESENTED`, `C-PENDING`;
- integrity modifiers = `I-VERIFIED`, `I-NEEDS-REVIEW`, `I-CONFLICT`, `I-MISMATCHED`, `I-PROVISIONAL`, `I-SOURCE-LOCAL`, `I-UNCLEAR`;
- display rule references R-D01–R-D18;
- modes `public_verified` and `review_maintenance`.

The specification explicitly records that these presentation states are **not persisted scientific state**.

## 6. Evidence/provenance binding

Task-3.4 evidence behavior is represented in the JSON as coordination metadata:

Evidence/provenance classes = **6/6**:

`BIB-PROV`, `E-LINK`, `E-INLINE`, `E-DIRECT`, `PROV`, `N/A`.

Entry points = **4/4**:

record; component/substructure; PP-19 index; integrity warning.

Drill-down stages = **5/5**:

record context → linked evidence set → evidence record → source context → semantic/provenance trace.

The exact locked vocabularies carried for rendering/validation are:

- verification status = **5/5**;
- support status = **6/6**;
- evidence source role = **6/6**;
- evidence type = **7/7**;
- statement strength = **5/5**.

The JSON also encodes mandatory Task-3.4 safeguards:

- verification and support are independent;
- positive-only evidence filtering is not the default;
- inline/direct plus L3 evidence cannot be counted twice;
- source-locator invention is forbidden;
- logical deep-link state can retain `paper_id`, section, record/component identity and `evidence_id`.

## 7. Semantic no-merge safeguards

The machine-readable specification carries the principal Paper Profile no-merge guards so UI/schema consumers cannot silently collapse them. These include:

- problem ≠ computational task ≠ PINN challenge;
- demonstrated ≠ related ≠ potential application;
- contribution ≠ outcome;
- claim ≠ demonstration;
- validation ≠ evaluation;
- limitation ≠ open problem ≠ future work ≠ Atlas research gap;
- paper diagnostic pathway ≠ L7 Failure-Diagnostics synthesis;
- raw evidence ≠ normalized record ≠ Atlas inference ≠ Atlas synthesis;
- data regime ≠ fidelity-source role;
- model-variable identity ≠ transformation ≠ derived output;
- physical constraint ≠ enforcement;
- network configuration ≠ architecture family;
- loss component ≠ loss weighting ≠ training protocol;
- parallel execution ≠ hardware reporting.

These strings are validation safeguards only; they do not replace R1–R48 or locked ontology governance.

## 8. Protected non-additions and subsystem boundary

Task 3.5 creates no:

- mandatory `study_component_id`;
- `physical_knowledge_representation[]`;
- competing `solution_postprocessing[]`;
- competing canonical `adaptive_weighting[]`;
- premature `pinn_type_id` / PINN-type assignment entity before Task 4;
- framework-synthesis fields inside paper science;
- Computational Resources fields inside the Paper Profile.

Computational Resources remains independently governed and may later be linked only through the existing bounded integration contract.

## 9. Read-only validator

`validate-paper-profile-spec.py` is a read-only drift validator intended to fail when the Task-3.5 JSON drifts from Tasks 3.1–3.4 or the architecture registry.

It checks, among other things:

1. non-authoritative metadata flags;
2. exact PP-01–PP-19 order;
3. 3 core / 16 conditional body split;
4. presence of R-D01–R-D18 in Task 3.3;
5. expansion of the machine-readable ranges against every explicit Task-3.2 field coordinate;
6. deterministic nested-subfield inventory against Task-3.2 nested rows;
7. Task-3.2 locked counts 244/73/317;
8. PP-19 F01–F26 presence;
9. Task-3.4 evidence classes/status/source-role presence;
10. all architecture references resolve in `atlas-architecture-registry.json`;
11. no new locked-v0.7 field declaration;
12. Computational Resources boundary remains intact;
13. Task-3.6 stop boundary remains intact.

The validator source was syntax-checked during construction before commit. This connector session does not provide a repository-checkout execution environment, so **an executed repository validator run is not claimed**. The committed JSON itself was generated from a valid JSON structure and then read back through GitHub.

## 10. Coverage and acceptance audit

Task 3.5 result:

- first-class sections represented = **19/19**;
- section order stable = **PASS**;
- explicit Task-3.2 profile coordinates bound = **274**;
- nested structured subfields bound = **73**;
- total stable profile field IDs = **347**;
- locked Task-3.2 field/subfield mappings preserved = **317/317**;
- Task-3.3 core body sections = **3/3**;
- Task-3.3 conditional body sections = **16/16**;
- Task-3.3 display-rule references = **18/18**;
- Task-3.4 evidence classes = **6/6**;
- Task-3.4 entry points = **4/4**;
- Task-3.4 drill-down stages = **5/5**;
- PP-19 locked fields remain = **24/24**;
- PP-19 derived index/grouping coordinates remain = **2/2**;
- new locked-v0.7 scientific fields/entities = **0**;
- new ontology owner = **0**;
- prohibited/deferred structures silently restored = **0**;
- Computational Resources boundary violations = **0**.

### Acceptance result

**PASS.** Task 3.5 supplies a machine-readable, version-controlled Paper Profile coordination contract while preserving the five locked scientific owners, evidence/provenance ownership, Task-3.1–3.4 semantic boundaries and Task-2 architecture IDs.

## 11. Stop boundary

Task 3.5 ends with the machine-readable specification and read-only validator above.

**Task 3.6 has not been started.**

Exact next action, only when separately authorized: **Task 3.6 — create the Paper Profile UI mockup before implementation**, using `atlas-paper-profile-spec.json` plus Tasks 3.1–3.5 as controlling design inputs without implementing a production route/page.
