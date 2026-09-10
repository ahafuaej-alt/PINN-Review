# Task 4.1B — Verify and Scientifically Triage PINN-Related Candidates

Status: **PASS — COMPLETE**

Date: 2026-09-08

Parent task: Task 4.1 — audit the existing Abbreviations/PINN-type material.

Controlling inputs:

- preserved raw source `data/reference-pinn-abbreviations.txt`;
- Task 4.1A preservation audit;
- locked Drive scientific authority `v0.7-pilot-atlas-prefreeze`;
- Task 1.3 R1–R48;
- Task 1.4 X1–X9 controlled extension rules;
- Task 3 PP-07 boundary: paper-level PINN Type / Family projection exists, but Task 4 owns formal classification;
- current `/abbreviations/` meaning map and parser only as read-only implementation evidence.

This task does **not** define the final PINN Type / Variant taxonomy, does not create `pinn_type_id`, does not promote aliases globally, does not resolve every collision, does not modify the raw terminology source, and does not populate the production `/pinn-types/` page.

## 1. What Task 4.1B means in simple terms

Task 4.1A preserved the old mixed terminology list. Task 4.1B now answers a different question for every PINN-related item encountered in that list:

> **What kind of thing does this appear to be, and how certain are we?**

The possible answers are controlled dispositions such as:

- core PINN family candidate;
- PINN variant candidate;
- likely PINN-related but still needing primary-source verification;
- alias/orthographic candidate;
- ambiguous/homographic abbreviation;
- source-local/author-defined label;
- architecture/backbone coupling rather than a PINN type;
- training/adaptivity strategy rather than a PINN type;
- decomposition/time-marching strategy rather than a PINN type;
- operator-learning/neural-operator adjacent method;
- broader physics-informed ML method;
- equation/application-specific PINN name;
- software/package name;
- non-PINN negative label;
- unresolved.

Task 4.1B therefore creates a **scientific triage baseline**, not a taxonomy.

## 2. Complete-screen rule

The preserved raw source is mixed and includes many terms unrelated to PINN classification. Task 4.1B uses a deterministic screening contract stored in:

`docs/master-architecture/task-4.1b-pinn-candidate-triage-policy.json`

Every parsed raw term has one of two outcomes:

1. **selected into the PINN-related candidate pool** because the exact form/expansion identifies a PINN/PiNN or an adjacent physics-informed model that could be confused with a PINN type; or
2. **outside Task 4.1B**, retained untouched for the future all-review Abbreviation Registry.

Every selected candidate then receives either an explicit sentinel disposition or one of the controlled family-rule dispositions. If the scientific meaning cannot be established safely, the result is `needs_primary_source_verification` or `unresolved_collision`, never a forced taxonomy assignment.

The actual two materialized inventories are intentionally deferred to Task 4.1D. Task 4.1B defines and records the triage decision for the candidate space; it does not falsely claim that the current raw TXT has already become a clean database table.

## 3. Evidence levels used

Task 4.1B distinguishes five states:

- `verified_from_primary_source` — direct source-paper evidence was read/search-verified;
- `verified_from_current_Atlas_meaning_map` — the current Abbreviations implementation already contains a manually scoped verified meaning tied to specific reference IDs;
- `supported_by_raw_source_supplied_expansion` — the raw record itself includes an expansion/description, but this remains weaker than a fresh primary-source verification;
- `needs_primary_source_verification` — candidate is plausible but cannot safely be normalized yet;
- `unresolved_collision` — one string has multiple meanings/scopes or insufficiently separable usages.

This keeps “triaged” separate from “canonically verified.”

## 4. Primary-source/high-risk sentinel verification performed

Task 4.1B checked the most dangerous normalization sentinels against Drive source material where available.

### 4.1 `cPINN`

Paper 628 is titled *Conservative physics-informed neural networks on discrete domains for conservation laws* and its abstract explicitly states that the authors propose a **conservative physics-informed neural network (cPINN)**. Therefore lowercase `cPINN` has direct source support for the conservative meaning in paper 628.

Disposition: **validated PINN variant candidate** for the scoped paper evidence.

Important: this does **not** justify lower-casing or merging uppercase `CPINN` into it.

### 4.2 `DD-PINN`

Paper 651 is the primary source *Domain-decoupled Physics-informed Neural Networks with Closed-form Gradients for Fast Model Learning of Dynamical Systems*.

Paper 740 is *Data-driven physics-informed neural networks: A digital twin perspective* and the preserved raw source associates `DD-PINN` with that paper.

Therefore one global `DD-PINN` expansion is unsafe.

Disposition: **ambiguous/homographic abbreviation; unresolved collision**.

Task 4.1C must formally record the paper-scoped meanings and no-merge decision.

### 4.3 `B-PINN` / `BPINN`

Paper 410 is *B-PINNs: Bayesian Physics-Informed Neural Networks for Forward and Inverse PDE Problems with Noisy Data*.

Paper 616 is *Bayesian Physics Informed Neural Networks for real-world nonlinear dynamical systems*.

The current Atlas meaning map also records `B-PINN` and `BPINN` as Bayesian PINN forms for scoped references.

Disposition: both are **validated Bayesian PINN variant candidates at scoped references**.

However, punctuation/plural/case similarity does **not** authorize a global alias merge in Task 4.1B. That belongs to Task 4.1C.

### 4.4 `CPINN` versus `cPINN`

The raw inventory uses uppercase `CPINN` for papers 707/708, and paper 708 is explicitly titled as a **coupled physics informed neural network** study. The current meaning map records `CPINN = Coupled physics-informed neural network` for refs 707/708.

Lowercase `cPINN` is directly supported as **Conservative PINN** by paper 628.

Disposition: **case-sensitive non-equivalence sentinel**. No case-folding is permitted.

Occurrences of uppercase `CPINN` outside the verified coupled scope, such as review-paper occurrences, remain source-scoped until Task 4.1C adjudicates them.

### 4.5 `IPINN`

The raw inventory contains `IPINN` in several papers and also explicit strings such as `Improved PINN`, `IPINN (conservation law constraint)`, and `Improved PINN (with conservation laws)`.

The existing Atlas meaning map has a scoped `IPINN = Improved physics-informed neural network` meaning for paper 489, but the full raw corpus shows that global equivalence is unsafe.

Disposition: **ambiguous/homographic abbreviation; unresolved collision**.

### 4.6 `SPINN`

The current Atlas meaning map explicitly qualifies its `SPINN` expansion as **“meaning used in this paper”** for paper 609. The raw inventory contains `SPINN` in several other references.

Disposition: **ambiguous/source-scoped candidate**. The paper-609 meaning cannot propagate globally.

### 4.7 `E-PINN` / `e-PINN`

The existing Atlas meaning map records `E-PINN = Explicit-time-domain physics-informed neural network` only for paper 659. The raw source also contains `E-PINN` at paper 291 and lowercase `e-PINN` at paper 221.

Disposition: **case-sensitive unresolved/source-scoped candidates**. No global expansion is assigned.

### 4.8 `PiNN`

The raw corpus uses `PiNN` in scientific terminology but paper 744 explicitly contains `PiNN package` and associated PiNN software-family names.

Disposition: **ambiguous identity**. Scientific terminology and software/package identity must remain separate.

## 5. Scientifically important triage families

The following distinctions are now mandatory inputs to Tasks 4.1C–4.2.

### A. Core/named PINN candidate

Examples with current support include `PINN`, `XPINN`, `VPINN`, `cPINN`, `B-PINN`/`BPINN`, `PPINN`, `fPINN`, and `hp-VPINN` under scoped evidence.

These are **candidates for Task 4.2 classification**, not automatically peers at one taxonomy level.

### B. Architecture/backbone-coupled methods

Examples include `PI-LSTM`, `LSTM-PINN`, `CNN-PINN`, `GCN-PINN`, `TransformerPINN`, `Tr-PINN`, `PINN-SIREN`, `KAN-PINN`, and `PIKAN`.

They must preserve the relation to their network/backbone/representation choice. Task 4.2 must not automatically flatten all of them into independent top-level PINN families.

### C. Training/adaptivity/learning strategies

Examples include `SA-PINN`, `SAPINN`, `Meta-PINN`, `MLPINN`, `Transfer Learning PINN`, `TL-PINN`, `Causal PINN`, `AW-PINN`, warm-start variants and related adaptive/weighting names.

These may be important PINN variants, but the scientific distinction from training protocol/adaptivity must remain visible.

### D. Decomposition/time-marching/parallel strategies

Examples include `XPINN`, `FBPINN`, `DD-PINN`, `PINN-DD`, `DF-ParPINN`, `STD-PINN`, `tpPINN/tpPINNs`, `AT-PINN`, `cPINN`, `hp-VPINN` and other decomposition/time-segmentation names.

A method may be a recognized PINN variant **and** carry a decomposition/time role. The future taxonomy must support this without pretending those dimensions are identical.

### E. Operator-learning / neural-operator adjacent

Examples include `PINO`, `PI-DeepONet`, `PINN-DeepONet`, `PI-FNO`, DeepONet-derived methods and related operator-learning hybrids.

Rule: **neural operator ≠ PINN**. An explicit hybrid relation may exist, but operator-learning methods are not automatically PINN types.

### F. Broader physics-informed ML adjacent

Examples include `PIML`, `PgNN`, `PeNN`, `PI-GAN`, `PI-VAE`, physics-informed CNN/RNN/GNN constructs and similar methods.

Rule: **PIML/PgNN/PeNN/physics-informed adjacent model ≠ PINN globally**.

### G. Equation/application-specific names

Examples include `PINN-RANS`, `PINN-Euler`, `NLSE-PINN`, `NC-PINN`, `EIK-PINN`, `BatteryPINN`, `PINN-Ray` and many bespoke domain-specific labels.

These may be valid source-local named variants, but a paper-specific application name does not automatically deserve a corpus-global PINN family.

### H. Source-local/generic labels

Examples include `PINN-1`, `PINN-3`, `Vanilla PINN`, `Improved PINN`, `Hybrid PINN`, `forward PINN`, `reverse PINN`, and generic “PINN variant” wording.

These must remain source-scoped unless independent evidence shows a stable reusable scientific concept.

### I. Negative/non-type labels

`Non-PINN` is explicitly a negative label and can never become a PINN type.

## 6. Candidate handling rule for terms not individually named above

Because the preserved source contains hundreds of mixed exact forms, Task 4.1B does not fabricate expansions for every bespoke acronym.

For any selected PINN-related candidate not covered by an explicit sentinel:

1. preserve exact raw string and paper ID;
2. inspect whether the string clearly encodes architecture/backbone, training/adaptivity, decomposition/time, operator learning, broader PIML, equation/application scope, or a bespoke source name;
3. assign that controlled disposition;
4. set verification state to `needs_primary_source_verification` unless a source-supplied expansion or existing scoped meaning is available;
5. never create a canonical alias or taxonomy parent from lexical similarity;
6. carry it forward to the materialized Task 4.1D inventory.

This is the reason Task 4.1B can cover the full candidate space without pretending every acronym has already received a final scientific definition.

## 7. What Task 4.1B deliberately does not decide

Task 4.1B does **not** decide:

- which candidates are top-level families versus child variants;
- whether `B-PINN`, `BPINN`, and plural forms are one global alias set;
- final meanings for all overloaded `DD-PINN`, `IPINN`, `SPINN`, `E-PINN`, `CPINN`, `PiNN` occurrences;
- the final parent/child relationship between `XPINN`, `cPINN`, `FBPINN`, `hp-VPINN`, etc.;
- whether architecture/training/application-specific variants deserve dedicated taxonomy nodes;
- a final PINN Type Explorer route/data model;
- any production frequency count based on normalized types.

Those decisions belong to 4.1C, 4.1D and Task 4.2.

## 8. Extraction implications already established

Future extraction must preserve two separate outputs:

1. **all abbreviations/terms found in each paper** for the future Abbreviation Registry; and
2. **PINN type/variant candidate assignments** only when the term is scientifically eligible.

A term can therefore appear in the Abbreviation Registry without belonging to the PINN Type taxonomy.

Future PINN-type candidate extraction must retain at minimum:

- exact raw/source label;
- paper ID;
- evidence/locator when verified;
- scientific disposition;
- verification state;
- alias/collision state;
- source-local scope;
- PINN-type eligibility state.

Task 4.1D will materialize these into the two candidate inventories.

## 9. Acceptance audit

- Task 4.1A raw-source preservation retained: **PASS**;
- raw source modified: **0 changes**;
- deterministic candidate-screen policy created: **PASS**;
- controlled scientific disposition set created: **PASS**;
- every selected candidate has an explicit sentinel or deterministic fallback disposition: **PASS**;
- unresolved candidates are allowed and remain visible: **PASS**;
- high-risk collision sentinels checked against available primary-source/current Atlas evidence: **PASS**;
- `cPINN` conservative source verification: **PASS**;
- `DD-PINN` global single-meaning rejection: **PASS**;
- `CPINN` vs `cPINN` case-sensitive non-equivalence protection: **PASS**;
- `B-PINN`/`BPINN` Bayesian scoped evidence: **PASS**;
- `IPINN`, `SPINN`, `E-PINN/e-PINN`, `PiNN` ambiguity retained: **PASS**;
- operator-learning ≠ PINN boundary retained: **PASS**;
- broader PIML ≠ PINN boundary retained: **PASS**;
- architecture/training/decomposition/application dimensions not silently collapsed into type: **PASS**;
- new locked-v0.7 fields/entities: **0**;
- final Task 4.2 taxonomy terms promoted: **0**;
- production `main` changes: **0**;
- Computational Resources changes: **0**.

### Result

**PASS — COMPLETE.** Task 4.1B establishes a complete controlled triage baseline for the PINN-related candidate space while keeping uncertain meanings unresolved and preserving all exact raw terminology.

## 10. Stop boundary

**Task 4.1C has not been started.**

Exact next action, only when separately authorized: **Task 4.1C — build the formal collision/non-equivalence register**, using this Task 4.1B triage baseline to record overloaded abbreviations, case-sensitive distinctions, scoped aliases, forbidden merges and per-paper meanings before Task 4.1D materializes the two inventories.