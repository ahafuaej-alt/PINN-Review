# Task 4.1A — Preserve and Inventory the Raw Terminology Source

Status: **PASS — COMPLETE**

Date: 2026-09-08

Parent roadmap task: `CONTROLLED-ROADMAP.md` → Task 4.1.

Source audited: `data/reference-pinn-abbreviations.txt`.

Scientific authority remains locked Google Drive `v0.7-pilot-atlas-prefreeze`. This audit is an implementation/history inventory only. It does not define the PINN Type / Variant taxonomy, does not promote aliases or types, does not create `pinn_type_id`, and does not modify the raw source.

## 1. Preservation decision

`data/reference-pinn-abbreviations.txt` is preserved **byte-for-byte / content-for-content as the current historical raw terminology collection source** for Task 4 work.

Verified branch/source state at audit start:

- branch: `docs/master-atlas-roadmap`;
- starting branch head: `1fbbe6aba7cc2f313115465611745a87a724cd22`;
- raw source blob SHA: `c712b9625d4a4dd838bba582d0bafe56a79c6350`.

Task 4.1A makes **no edit** to this file. Any later cleaning, normalization, aliasing, filtering, PINN-type selection, or taxonomy assignment must occur in new derived/governed artifacts while retaining this source as provenance.

## 2. What the raw file actually is

The file is a two-column Markdown-like register:

`Reference | Abbreviation(s)`

Each data row associates one Atlas reference ID with one or more exact reported terminology strings.

Observed reference-ID span is **2–853**. The file is not a complete 1–853 row matrix; it contains only references for which terminology was gathered.

The current `/abbreviations/` page describes the snapshot as **501 reported PINN-related forms across 618 primary reference records**. Its JavaScript does not trust static counts for rendering: it parses this TXT at runtime and derives reference count, distinct exact-form count, paper–term link count, and ID range from the loaded source.

Task 4.1A records 501/618 as the current implementation snapshot description, not as a newly independently scientifically verified census. Formal candidate verification and scientific triage belong to Task 4.1B and later Task-4 work.

## 3. Current parser semantics

`assets/abbreviations.js` currently:

1. reads `../data/reference-pinn-abbreviations.txt` directly;
2. accepts rows matching a numeric reference ID plus terminology cell;
3. splits reported forms on semicolons and commas **only when outside parentheses**;
4. collapses repeated whitespace inside the parsed display string;
5. preserves capitalization, punctuation, hyphenation and wording otherwise;
6. deduplicates an identical exact string only within the same reference row before building the exact-form index;
7. indexes exact strings case-sensitively as distinct reported forms;
8. counts how many distinct reference rows contain each exact form;
9. links terms back to Atlas reference IDs;
10. overlays a small manually curated `verifiedMeanings` map for selected terms, without converting the raw TXT into a scientific taxonomy.

This parser behavior is useful for evidence-oriented browsing but must not be mistaken for scientific normalization.

## 4. Inventory content classes visible in the raw source

Without deciding the final taxonomy, the raw file visibly mixes several different kinds of objects:

- generic `PINN` / `PINNs` expressions;
- named PINN-family or PINN-variant candidates;
- formulation-specific or constraint-specific PINN labels;
- decomposition, temporal, training, transfer/meta-learning and adaptivity labels;
- architecture/backbone-coupled labels such as CNN/RNN/LSTM/GNN/Transformer/GAN/KAN-related names;
- neural-operator and broader physics-informed-learning terminology;
- equation/application/problem-specific method names;
- author-defined/source-local named methods;
- software/package names;
- comparator/baseline algorithms and generic machine-learning acronyms;
- scientific/material/model abbreviations unrelated to PINN-type classification;
- negative labels such as `Non-PINN`;
- parenthetical source-supplied expansions/notes embedded directly in the terminology string.

Therefore **membership in this file is not evidence that an item is a PINN type**.

## 5. Raw-source quality and normalization risks

Task 4.1A identifies the following source-level risks that later triage must preserve rather than erase:

### 5.1 Exact-form variation

The source contains capitalization, hyphenation, spacing, pluralization and punctuation variants. Similar-looking strings cannot be merged by text normalization alone.

### 5.2 Homographs / overloaded abbreviations

One exact abbreviation may carry different meanings in different papers. The current implementation already demonstrates this for `DD-PINN`. Exact string identity therefore cannot serve as canonical scientific concept identity.

### 5.3 Case-sensitive scientific collisions

Case can carry meaning. `CPINN` and `cPINN`, for example, cannot be lower-cased into one identity without scientific review.

### 5.4 Inline expansion mixed with identity

Some entries include parenthetical definitions in the same raw string, for example a short form followed by a source-supplied expansion. These are evidence-bearing source expressions, not automatically canonical definitions.

### 5.5 Mixed object classes

The file contains PINN variants together with methods, architectures, operators, software, general ML concepts and unrelated abbreviations. It is therefore unsuitable as a direct PINN-type dataset.

### 5.6 No explicit verification-state column

The TXT does not record whether each individual term/meaning was verified, unresolved, source-local, alias, non-PINN, or candidate PINN type.

### 5.7 No governed concept IDs

There are no stable taxonomy term IDs, alias IDs, collision IDs or PINN-type assignment IDs in the raw source.

### 5.8 Reference-level provenance only

The source records Atlas reference IDs, but it does not itself encode page/section/paragraph/evidence IDs, source roles, support status or evidence-strength metadata required by the locked evidence model.

### 5.9 Frequency is only exact-form recurrence

Current frequency is the number of reference rows containing an exact parsed form. It is **not** normalized concept frequency, independent-evidence strength, number of validated PINN-type assignments, or proof of canonical status.

## 6. Preservation and derivation contract for later Task 4 work

The raw file must remain untouched while Task 4 proceeds.

Later work should create derived records rather than rewriting this source. Every derived candidate should retain, at minimum:

- exact raw reported form;
- source reference ID;
- raw-source provenance pointer;
- proposed object class/disposition;
- verified expansion/definition only when evidence supports it;
- alias/collision state and scope;
- source-local/author-defined state where applicable;
- PINN-type eligibility state;
- evidence ID/locator when verified from the source paper;
- reviewer/verification state;
- later taxonomy term ID only if governed promotion occurs.

The required directional flow is:

`raw exact-form inventory → evidence verification → scientific triage → provisional/source-local/alias/collision handling → PINN-type candidate subset → Task 4.2 taxonomy design`

The reverse flow is prohibited: a later taxonomy must never rewrite the original raw terminology evidence to make the historical source appear cleaner.

## 7. Relationship to the two unfinished Atlas surfaces

### `/abbreviations/`

The current page is best understood as an unfinished **terminology evidence index** over this raw file. Its useful interaction patterns—search, exact-form preservation, reference lookup, frequency browsing, deep links and CSV export—may be reused later. Its present dataset scope must not be treated as the final all-review Abbreviations Registry.

The intended future Abbreviations system is broader: all review abbreviations, evidence-backed, searchable, organized and traceable to where terms occur.

### `/pinn-types/`

The current PINN Types page is a scaffold with no validated type dataset. Nothing from the raw TXT may be transferred into its scientific classification/frequency/profile views merely by name matching.

Only the scientifically triaged and evidence-backed candidate subset from later Task 4.1 work may become input to Task 4.2–4.5.

## 8. 4.1A acceptance audit

- raw source identified and read from the controlled branch: **PASS**;
- raw source blob identity recorded: **PASS**;
- raw file rewritten/normalized/deleted: **0 changes**;
- source format and current parser behavior documented: **PASS**;
- current snapshot descriptor (501 forms / 618 references) recorded with correct limitation: **PASS**;
- mixed-object nature of the source documented: **PASS**;
- exact-form, homograph, case, inline-expansion, verification, identity, provenance and frequency risks documented: **PASS**;
- later derivation contract defined without taxonomy promotion: **PASS**;
- new locked-v0.7 fields/entities created: **0**;
- PINN-type taxonomy defined/promoted: **0**;
- production `main` changes: **0**;
- Computational Resources branch changes: **0**.

### Result

**PASS — COMPLETE.** `data/reference-pinn-abbreviations.txt` is now formally registered as a preserved historical/raw terminology source for Task 4. It is not a PINN-type authority and must not be destructively cleaned.

## 9. Stop boundary

**Task 4.1B has not been started.**

Exact next action, only when separately authorized: **Task 4.1B — verify and scientifically triage every PINN-related candidate derived from the preserved raw terminology source**, without rewriting the raw TXT and without yet defining the final Task 4.2 taxonomy.