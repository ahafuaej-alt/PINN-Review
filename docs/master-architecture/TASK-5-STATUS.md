# Task 5 — Methodological Extensibility Status

Status: **IN PROGRESS — Tasks 5.1–5.2B PASS / COMPLETE; 5.2C NEXT**

Date: 2026-09-09

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

Implementation contract: frozen Master Plan v1.0.

## Current state

- **Task 5.1 — Catalogue existing methodology dimensions: PASS / COMPLETE**
- **Task 5.2 — Define learning/integration-type taxonomy: PASS / COMPLETE**
- **Task 5.2B — General Machine-Learning Learning-Paradigm Taxonomy: PASS / COMPLETE**
- **Task 5.2C — External Methodology Coverage / Gap Audit: NEXT / NOT STARTED**
- **Task 5.3 — Model / Representation / Coupled-ML Architecture Taxonomy: NOT STARTED**
- Task 5.4 — Decide specialized structure versus dynamic taxonomy/linking: **NOT STARTED**
- Task 5.5 — Define evidence/recurrence criteria for future ontology promotion: **NOT STARTED**

## Task 5.1 artifacts

- `TASK-5.1-METHODOLOGY-DIMENSION-CATALOGUE.md`
- `atlas-methodology-dimension-catalogue.json` — non-authoritative machine-readable coordination catalogue

## Task 5.2 artifacts

- `TASK-5.2-LEARNING-INTEGRATION-TYPE-TAXONOMY.md`
- `atlas-learning-integration-taxonomy-spec.json` — non-authoritative machine-readable coordination taxonomy

## Task 5.2B artifacts

- `TASK-5.2B-GENERAL-ML-LEARNING-PARADIGM-TAXONOMY.md`
- `atlas-learning-paradigm-taxonomy-spec.json` — non-authoritative machine-readable coordination taxonomy

## Task 5.1 result

Task 5.1 inventoried the existing methodology model before any extensibility redesign. It accounts for all 25 methodology-dimension labels already named in locked v0.7 Controlled Vocabularies; the complete PP-08 methodology/data ownership surface; structured subdimensions; the consolidated training protocol; physical-constraint and reproducibility boundaries; and composite/deferred dimensions.

Task 5.1 created **no new scientific fields, entities, canonical terms or relationships**.

## Task 5.2 result

Task 5.2 defines the physics/knowledge learning-integration system as a **faceted governed taxonomy graph**, not a replacement field and not a second PINN-type hierarchy. It separates physics incorporation, transfer/reuse/adaptation, multi-source/multi-fidelity integration, and operator/solver integration while preserving existing locked owners and no-merge boundaries.

## Task 5.2B result

Task 5.2B used authoritative external terminology and peer-reviewed taxonomy/review literature rather than flat internet lists. It defines **ten orthogonal general-learning facets**:

1. supervision / feedback paradigm;
2. label availability / acquisition paradigm;
3. learning / update regime;
4. adaptation / reuse paradigm;
5. target-support / sample-scarcity regime;
6. task-organization paradigm;
7. distributed / collaborative learning paradigm;
8. model-combination / ensemble paradigm;
9. statistical learning character;
10. inference / generalization regime.

Evidence-supported coordination concepts include supervised, unsupervised, semi-supervised, self-supervised, reinforcement, active, weak-supervision, positive-unlabeled, online, incremental, continual, transfer, domain adaptation, domain generalization, meta-learning, few-/one-/zero-shot, multi-task, federated, ensemble, generative/discriminative, and inductive/transductive learning.

These are **facets, not mutually exclusive global classes**. A study may occupy several simultaneously. The taxonomy therefore forbids a single scalar `learning_type` as the architectural solution.

Task 5.2B explicitly preserves these boundaries:

- general learning paradigm ≠ physics/knowledge integration mode;
- general learning paradigm ≠ PINN type/family;
- learning paradigm ≠ representation/model architecture;
- reinforcement learning ≠ architecture;
- deep learning ≠ one architecture family;
- self-supervised ≠ automatically unsupervised;
- semi-supervised ≠ weak supervision ≠ positive-unlabeled;
- active learning ≠ adaptive collocation/sampling by default;
- online ≠ incremental ≠ continual globally;
- transfer ≠ fine-tuning schedule ≠ domain adaptation ≠ domain generalization;
- meta-learning ≠ transfer learning ≠ few-shot learning;
- few-shot ≠ sparse data; zero-shot ≠ zero observational data;
- multi-task ≠ multiple outputs ≠ multiple loss components;
- federated learning ≠ distributed/parallel execution;
- ensemble learning ≠ uncertainty quantification;
- mixture-of-experts ≠ ensemble learning automatically;
- generative/discriminative character ≠ model-family identity;
- inductive/transductive regime ≠ interpolation/extrapolation result labeling.

### Existing Atlas ownership consequence

Task 5.2B creates **no generic `learning_type[]` field**. Existing owners provide context/evidence where applicable: `data_regime[]`, `sampling_strategy[]`, `training_protocol[]`, Task 5.2 transfer/reuse semantics, computational-task/study context, `parallel_execution[]`, `uncertainty_method[]`, architecture/model evidence, TR/RR and L3 evidence. None of these owners is silently redefined as the missing global learning-paradigm owner.

Task 5.4 remains responsible for deciding whether taxonomy/relationship projections are sufficient or recurrent evidence later justifies specialized future structure under governed X6/versioning rules.

### Paper Profile consequence

The future Paper Profile may expose multiple evidence-backed learning-paradigm facets under PP-08 Methodology. No scalar `learning_type` and no locked-v0.7 Paper Profile/schema mutation is authorized. Any future structural change requires Task 5.4 and a governed later ontology/profile version.

## Authoritative external research basis for Task 5.2B

The Task 5.2B record includes source-level citations. The principal evidence stack includes NIST AI 100-2 E2025 terminology; Emmert-Streib et al. 2022 WIREs ML-paradigm taxonomy; peer-reviewed surveys/reviews of online learning, continual learning, active learning, positive-unlabeled learning, weak supervision, meta-learning, multi-task learning, federated learning, ensemble learning, domain adaptation/generalization, zero-shot learning, and generative/discriminative learning. PINN/SciML relevance was checked against peer-reviewed examples of active-learning PINNs, multi-task PINNs, and decentralized federated PINNs.

External definitions establish semantics only. They do **not** assign paradigms to Atlas papers without paper-scoped evidence.

## Roadmap refinement after Task 5.2

The methodology-comprehensiveness discussion recorded in Master Memory Sections 57–58 showed that Task 5.2 correctly covers physics/knowledge learning-integration but not all general ML paradigms. Task 5.2B now closes that general-learning taxonomy step. Task 5.2C remains the broader methodology-comprehensiveness gate.

## Task 5.2C purpose and hard traceability gate

Task 5.2C must test whether the Atlas methodology architecture is semantically comprehensive across the full methodological space, not merely whether current vocabulary is large.

Hard traceability gate:

- every internally identified methodology dimension must map to at least one external-search axis;
- every such dimension must appear in the final coverage matrix;
- every newly discovered external dimension must also appear in that matrix with an explicit disposition;
- uncovered, partially covered, compositely covered, irrelevant and possible-future-structure cases must remain distinguishable;
- the audit must not assume the current internal list is a ceiling.

The controlling principle remains:

> **Comprehensive architecture = complete semantic dimensions + extensible vocabularies + extensible typed relations + controlled structural extension.**

This does not mean enumerating every machine-learning method currently known.

Only after Task 5.2C passes should Task 5.3 begin.

## Expanded Task 5.3 scope

Task 5.3 is **Model / Representation / Coupled-ML Architecture Taxonomy**. It will classify representation/model families and coupled ML methods such as MLP, CNN, RNN/LSTM/GRU, Transformer/attention, GNN, KAN, Autoencoder/VAE, GAN, diffusion/generative families, operator-learning models and other evidence-supported model families while preserving boundaries among architecture, learning paradigm, PINN type, training method and computational task.

The exact taxonomy scope may be refined by Task 5.2C; Task 5.3 must not preempt that audit.

## Governing revision rule

Later authoritative external research, Task 5.2C findings or primary-source evidence may revise the candidate dimension universe, normalization, dimension placement, relationships, applicability or structural-promotion judgment. Any correction must be explicit, evidence-backed, versioned and history-preserving. Raw wording, locators, prior decisions, contradictions and deferred/rejected alternatives must remain traceable.

## Change boundary

- New locked-v0.7 scientific fields/entities: **0**.
- Automatic canonical ontology promotions: **0**.
- Automatic paper-level learning-paradigm assignments: **0**.
- Task 5.3 architecture taxonomy work performed: **0**.
- Production `main` changes: **0**.
- Computational Resources Stage 1/2/3 changes: **0**.

## Stop boundary

**Task 5.2C was not started by Task 5.2B.**

Exact next action, only when separately authorized: **Task 5.2C — perform the External Methodology Coverage / Gap Audit using Tasks 5.1, 5.2, 5.2B and Master Memory Sections 57–59 as controlling inputs.**
