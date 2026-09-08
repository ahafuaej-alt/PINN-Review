# Task 4.1C — Collision / Non-Equivalence Register

Status: **PASS — COMPLETE**

Date: 2026-09-08

Parent task: Task 4.1 — audit the existing Abbreviations/PINN-type material.

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

Implementation contract: frozen Master Plan v1.0.

Controlling inputs:

- preserved raw terminology source `data/reference-pinn-abbreviations.txt`;
- Task 4.1A raw-source preservation/inventory record;
- Task 4.1B candidate triage record and `task-4.1b-pinn-candidate-triage-policy.json`;
- Task 1.3 R1–R48, especially evidence immutability, ambiguity visibility, no force-fit and context-dependence rules;
- Task 1.4 X1–X9 controlled extension lifecycle;
- Task 3 PP-07 boundary: Paper Profile may project a governed PINN Type / Family assignment, but Task 4 owns formal classification.

Machine-readable companion register:

`docs/master-architecture/task-4.1c-terminology-collision-register.json`

This task does **not** define the final Task 4.2 PINN taxonomy, create `pinn_type_id`, promote corpus-global aliases, modify locked v0.7, modify the raw terminology TXT, populate Task 4.1D inventories, or implement `/pinn-types/`.

## 1. Verified starting state

Before Task 4.1C writes:

- branch `docs/master-atlas-roadmap` head was verified at `279bbafda2b9fbff76176648e84265741a1876d4`;
- `TASK-4-STATUS.md` recorded Task 4.1A and 4.1B PASS / COMPLETE, Task 4.1C NEXT / NOT STARTED;
- Task 4.1B explicitly stopped before collision adjudication;
- the raw terminology source blob SHA was re-read as `c712b9625d4a4dd838bba582d0bafe56a79c6350`, matching Task 4.1A/4.1B;
- the Master Memory revision before this task was `ANLCKQnXzu4kLY-KtFnrc5-G3gVjE6YEG_F3nQx4bDu3bvjUy3mqWWD3vQViCn_oVEGcIlFfo6GvB9Bjb4d19Ysl9rk3q51bVsvqj8h0zZY` and Section 47 confirmed the Task-4.1B stop boundary;
- no production `main` or Computational Resources branch was touched.

## 2. Purpose of Task 4.1C

Task 4.1B answered **what kind of candidate a term appears to be**. Task 4.1C answers a narrower but essential question:

> **Which strings are unsafe to merge, case-fold, de-hyphenate, plural-normalize, or globally expand because the corpus uses them for different meanings or scientifically distinct concepts?**

The result is a collision/non-equivalence layer between raw terminology and later candidate inventories/taxonomy.

The register protects against three especially dangerous normalization errors:

1. **homographs** — the same string carries different meanings in different papers;
2. **near-collisions** — visually similar strings are scientifically different;
3. **false aliases** — related methods share wording, architecture, training strategy, equation scope or broader paradigm but are not identical concepts.

## 3. Decision-state semantics

Task 4.1C uses eight audit states. These are audit/normalization controls, not new scientific ontology statuses.

| State | Meaning |
|---|---|
| `hard_no_merge` | Available evidence establishes that the forms/concepts must not be merged. |
| `same_form_homograph` | The same exact form has multiple paper-scoped meanings; resolution must use paper/evidence context. |
| `case_sensitive_non_equivalence` | Case/capitalization is scientifically material or unresolved; case-folding is prohibited. |
| `scoped_alias_candidate` | Evidence suggests equivalence in some scopes, but no corpus-global alias is promoted. |
| `source_scoped_meaning_only` | A meaning is verified only for particular paper(s); it must not propagate globally. |
| `orthographic_candidate_unresolved` | Case/hyphen/plural variation may be orthographic only, but source equivalence is not yet sufficient. |
| `adjacent_concept_non_equivalence` | Terms are scientifically related but represent different paradigm/architecture/training/operator/application roles. |
| `source_text_anomaly_preserve_exactly` | The source contains a potentially anomalous/erroneous form; preserve it and verify rather than silently correcting it. |

## 4. Confirmed high-risk collision register

Task 4.1C registers **30 collision/non-equivalence classes** (`C001`–`C030`). The machine-readable file records exact forms, paper-scoped evidence basis, verification state and required decision for each class.

### C001 — `cPINN` ≠ `CPINN`

**Decision: hard no-merge.**

- Paper 628 directly uses `cPINN` for **Conservative PINN**.
- Paper 791 raw expansion also reports `cPINN; Conservative PINN`.
- Papers 707/708 use uppercase `CPINN` for **Coupled PINN**; paper 708 primary-source text explicitly states “coupled physics informed neural network (CPINN)”.

Consequence: lowercase/uppercase normalization would destroy scientific meaning. `cPINN` and `CPINN` must remain separate identities unless a paper-specific occurrence is independently verified.

### C002 — `DD-PINN` is a confirmed three-way homograph

**Decision: same-form homograph; no corpus-global expansion.**

Task 4.1C strengthened Task 4.1B by verifying a third meaning from the primary source:

- Paper 548: **Domain-discretized PINN (DD-PINN)** — stated directly in the abstract of *A novel discretized physics-informed neural network model applied to the Navier–Stokes equations*.
- Paper 651: **Domain-decoupled PINN** — source title and raw expansion.
- Paper 740: **Data-driven PINN (DD-PINN)** — source abstract and methodology explicitly use DD-PINNs for data-driven PINNs.

This is a definitive example of why one acronym-to-one-expansion normalization is scientifically invalid for the Atlas.

Task 4.1D must resolve `DD-PINN` by `paper_id`/evidence context, not by the string alone.

### C003 — `B-PINN` / `BPINN` / `B-PINNs`

**Decision: scoped alias candidate only.**

`B-PINN` (paper 410) and `BPINN` (papers including 616/618) have Bayesian PINN support in their verified scopes. `B-PINNs` occurs as a plural/orthographic form in paper 503.

Task 4.1C records a plausible Bayesian alias family but **does not promote a global alias**. Every raw form remains preserved, and unverified occurrences remain source-scoped.

### C004 — `IPINN` / `iPINN` / `IPINNs` / generic “Improved PINN”

**Decision: homograph/source-scope protection.**

The corpus includes:

- paper 489 `IPINN` with existing scoped “Improved PINN” meaning;
- paper 629 `IPINN (conservation law constraint)`;
- paper 632 `IPINN; Improved PINN (with conservation laws)`;
- lower-case `iPINN` at paper 66;
- plural `IPINNs` at paper 581;
- generic `Improved PINN` at other papers.

No one global `IPINN` expansion or alias set is scientifically justified at this stage.

### C005 — `SPINN` ≠ `sPINN`

**Decision: case-sensitive non-equivalence.**

The current Atlas meaning map explicitly restricts paper 609 `SPINN` to a source-specific **Soft-constraint PINN** meaning. Other `SPINN` occurrences and paper 150 lower-case `sPINN` remain unresolved.

The paper-609 meaning must not propagate globally.

### C006 — `E-PINN` / `e-PINN` / `EP-PINNs`

**Decision: case/punctuation-sensitive no automatic normalization.**

The existing `E-PINN = Explicit-time-domain PINN` expansion is source-scoped to paper 659. Paper 291 `E-PINN`, paper 221 `e-PINN`, and paper 834 `EP-PINNs` require independent evidence.

### C007 — `PiNN` has mixed scientific and software identity

**Decision: hard no global merge with either `PINN` or the PiNN software family.**

The raw corpus includes:

- paper 838 `PiNN (physics-informed neural networks)`;
- paper 744 `PiNN; PiNN package; PiNet2; ...` where PiNN is explicitly software/package identity;
- paper 681 `Defect-driven PiNN; PiNN`;
- paper 549 `trapz-PiNN`.

A future Abbreviation Registry must therefore support the same exact form under different entity/meaning scopes.

### C008 — `hp-VPINN` / `HP-VPINN`

**Decision: unresolved orthographic/case candidate.**

`hp-VPINN` has a verified scoped hp-variational meaning; upper-case `HP-VPINN` cannot be merged merely by case normalization.

### C009 — `PPINN`

**Decision: source-scoped meaning only.**

Paper 413 has scoped `PPINN = Parareal PINN` support. Other raw `PPINN` occurrences must not inherit that expansion automatically.

### C010 — `fPINN` / `fPINNs` / `gfPINNs`

**Decision: scoped alias candidate with protected non-equivalence.**

Paper 470 supports fractional `fPINN`; plural `fPINNs` may be an orthographic variant in some sources. `gfPINNs`, however, must not be reduced to `fPINN` by stripping a prefix.

### C011 — `SA-PINN` / `SAPINN` / `SAS-PINN`

**Decision: scoped alias candidate only.**

`SA-PINN` and paper 700 `SAPINN; Self-Adaptive PINN` are compatible under scoped evidence. `SAS-PINN` remains independent until verified.

### C012 — `PIKAN` / `KAN-PINN` / `Physics-KAN`

**Decision: adjacent concepts, not aliases.**

These may share KAN architecture ancestry, but architecture/integration relationship does not establish terminology identity or one PINN type.

### C013 — recurrent/LSTM terminology

Forms: `PI-LSTM`, `PILSTM`, `LSTM-PINN`, `PI-RNN`, `PIRNN`, `recurrent PINN`.

**Decision: architecture/integration-related but non-equivalent by default.**

A physics-informed LSTM, an LSTM-backed PINN and a recurrent PINN may occupy related methodological space while remaining distinct scientific constructions.

### C014 — neural-operator/operator-learning cluster

Forms: `PINO`, `PI-DeepONet`, `PINN-DeepONet`, `PI-FNO`, `DeepONet`.

**Decision: explicit non-equivalence to ordinary PINN identity.**

A hybrid link may later be represented, but operator-learning methods are not aliases of PINN and are not automatically PINN taxonomy nodes.

### C015 — broader physics-informed paradigms

Forms: `PIML`, `PgNN`, `PeNN`, `PiNN`, `PINN`.

**Decision: broader-paradigm non-equivalence.**

Physics-informed ML, physics-guided NN, physics-encoded NN and PINNs are related but must not be globally collapsed.

### C016 — GAN-related forms

Forms: `PI-GAN`, `PIGAN`, `GAN-PINN`, `PIG-GAN`.

**Decision: related generative/PINN integrations, not automatic aliases.**

### C017 — `PI-VAE` / `PIVAE`

**Decision: possible scoped orthographic alias; not globally promoted.**

Paper 508 supplies `Physics-informed VAE (PIVAE)`. Other PI-VAE occurrences require source confirmation before global aliasing.

### C018 — convolution-related acronym collision

Forms: `PI-CNN`, `PICNN`, `CNN-PINN`, `PIDCNN`, `PiCNN`.

**Decision: paper-scoped resolution mandatory.**

Visually similar convolution-related abbreviations cannot be normalized by punctuation/case rules. `PICNN` is particularly collision-prone in the wider ML literature and therefore must remain evidence-scoped.

### C019 — visually similar H/h-PINN forms

Forms: `HPINN`, `HWPINN`, `HCPINN`, `hp-VPINN`, `KKT-hPINN`.

**Decision: hard no-merge based on visual similarity.**

For example, `HWPINN` has a source-scoped hard-constraint wide-body meaning while `hp-VPINN` represents hp-variational PINN. Their letter similarity has no equivalence semantics.

### C020 — `MPINN` / `mp-PINN` / `MTL-PINN`

**Decision: case/hyphen/acronym-stem normalization prohibited.**

### C021 — A-prefixed near-collisions

Forms: `APINN`, `A-PINN`, `AT-PINN`, `AW-PINN`.

**Decision: hard no-merge.**

Known raw expansions already distinguish `AT-PINN = Advanced time-marching PINN` and `AW-PINN = Adaptive Weight PINN`.

### C022 — `CPNN` / `CPINN` / `cPINN`

**Decision: high-risk visual collision triad; hard no-merge.**

The corpus contains composite-PINN context for `CPNN`, coupled PINN for `CPINN`, and conservative PINN for `cPINN`.

### C023 — D-prefixed PINN forms

Forms: `DPINN`, `dPINN`, `DD-PINN`, `PINN-DD`, `dmPINNs`.

**Decision: hard no-merge.**

Known examples already include discrete PINN, three separate DD-PINN meanings, domain-decomposition PINN and data-driven/mechanism-based PINNs.

### C024 — G/g-PINN forms

Forms: `GPINN`, `gPINNs`, `GatedPINN`, `Gated-PINN`.

**Decision: hard no-merge.**

Paper 479 explicitly gives `gPINNs = gradient-enhanced PINNs`; gated forms represent a different architecture concept.

### C025 — `NSFnet` / `NSfNet` / `NSFnets`

**Decision: unresolved orthographic/plural candidate.**

Exact forms stay distinct until source equivalence is confirmed. These names are also not automatically PINN taxonomy nodes merely because they are adjacent physics-informed solvers.

### C026 — `DD-PINN` ≠ `PINN-DD`

**Decision: hard no-merge.**

Reversing token order is not a valid alias rule. This is especially important because `DD-PINN` itself is already a three-way homograph, while paper 781 explicitly reports `PINN-DD; domain decomposition PINN`.

### C027 — equation/application-conditioned PINN names

Forms include `PINN-RANS`, `RANS-based PINN`, `PINN-Euler`.

**Decision: specialization/relationship, not alias identity.**

These labels may describe the governing-equation/application context of a PINN without constituting a separate globally reusable family.

### C028 — forward / reverse / inverse PINN labels

**Decision: computational-role/task relation, not alias/type identity by default.**

Paper 668 supplies forward/reverse PINN labels; paper 841 uses `Inverse PINN`. Task 4 must not confuse computational task with PINN family.

### C029 — generic “Improved PINN” wording

**Decision: source-scoped descriptor, not global `IPINN` alias.**

Different papers can independently call a method “improved” for different mechanisms. Generic improvement language therefore cannot create one canonical PINN type.

### C030 — paper-839 `HFD-PINN` / `PIONN` source-text anomaly

The preserved raw record says:

`HFD-PINN (High-Fidelity Data-Driven PIONN)`.

**Decision: preserve exact source text; do not silently correct `PIONN` to `PINN` or `PINO`.**

Primary-source verification is required before normalization.

## 5. Mandatory normalization rules established by Task 4.1C

The following rules are now controlling inputs to Task 4.1D and Task 4.2:

1. **Exact source form is immutable provenance.** Later canonicalization never deletes the original form.
2. **Case folding is not globally safe.** `cPINN`/`CPINN`, `SPINN`/`sPINN`, `E-PINN`/`e-PINN`, `PiNN`/`PINN` demonstrate this directly.
3. **Hyphen removal is not globally safe.** `B-PINN`/`BPINN` may be aliases in some scopes, while `DD-PINN`/`PINN-DD` are explicitly unsafe to merge.
4. **Plural stripping is not globally safe.** A plural may be orthographic, but it can also be part of a separately introduced author label.
5. **Acronym similarity is not scientific identity.** `CPNN`/`CPINN`/`cPINN`, H/h-PINN and D-PINN clusters demonstrate this.
6. **One string may map to multiple meanings.** `DD-PINN` is the strongest confirmed example.
7. **Related methodology is not aliasing.** Architecture, training/adaptivity, decomposition, operator learning, generative modeling and application conditioning must remain represented as relations/dimensions when appropriate.
8. **A verified meaning is scoped to its evidence.** A meaning verified in one paper cannot be assigned to all identical strings in reviews or other papers without evidence.
9. **Source anomalies are preserved.** They are corrected only through an explicit verified normalization/history process, never by rewriting raw provenance.
10. **Task 4.1C does not create final taxonomy hierarchy.** Alias/collision decisions and family/variant hierarchy remain separate concerns.

## 6. Task 4.1D integration contract

When Task 4.1D materializes the two inventories, each relevant candidate row must be able to carry:

- exact raw reported form;
- `paper_id`;
- raw source pointer;
- Task-4.1B scientific disposition;
- verification state;
- applicable `collision_id` from `C001`–`C030`;
- collision decision state;
- paper-scoped verified expansion if available;
- alias candidate state without silent promotion;
- source-local scope;
- PINN-type eligibility state;
- evidence/locator when verified;
- unresolved notes where needed.

The Abbreviation Registry Candidate Inventory must retain **all** terminology regardless of PINN-type eligibility. The PINN Type Candidate Inventory must include only scientifically eligible candidates while still retaining collision provenance.

## 7. Scientific consequences for Task 4.2

Task 4.2 must design an extensible classification capable of representing at least:

- stable canonical PINN concepts;
- aliases with explicit scope;
- source-local names;
- homographs with paper-scoped meanings;
- case-sensitive distinctions where scientifically material;
- architecture/backbone relations;
- training/adaptivity relations;
- decomposition/time-marching relations;
- operator-learning adjacency/hybrids;
- broader physics-informed ML adjacency;
- equation/application-conditioned source names;
- unresolved candidates.

Task 4.2 must **not** force every PINN-looking acronym into a flat “PINN type” list.

## 8. Acceptance audit

- Task 4.1A raw-source preservation retained: **PASS**;
- Task 4.1B triage baseline retained: **PASS**;
- machine-readable collision register created: **PASS**;
- collision/non-equivalence classes registered: **30 (`C001`–`C030`)**;
- confirmed three-way `DD-PINN` homograph recorded: **PASS**;
- `cPINN` vs `CPINN` hard no-merge recorded: **PASS**;
- mixed scientific/software `PiNN` identity recorded: **PASS**;
- scoped-alias candidates distinguished from promoted aliases: **PASS**;
- operator-learning/broader-PIML/architecture/training/application relations kept distinct from alias identity: **PASS**;
- source-text anomaly preservation rule recorded: **PASS**;
- corpus-global aliases promoted: **0**;
- final Task 4.2 taxonomy nodes created: **0**;
- `pinn_type_id` created: **0**;
- raw source changes: **0**;
- locked-v0.7 changes: **0**;
- production `main` changes: **0**;
- Computational Resources Stage 1/2/3 changes: **0**.

### Result

**PASS — COMPLETE.**

Task 4.1C now provides the formal no-merge/collision/scoped-alias control layer required before the terminology inventories can be materialized safely.

## 9. Stop boundary

**Task 4.1D has not been started.**

Exact next action, only when separately authorized: **Task 4.1D — produce the Abbreviation Registry Candidate Inventory and PINN Type Candidate Inventory**, carrying forward Task 4.1A exact raw provenance, Task 4.1B triage state and Task 4.1C collision/non-equivalence IDs without defining the final Task 4.2 taxonomy.
