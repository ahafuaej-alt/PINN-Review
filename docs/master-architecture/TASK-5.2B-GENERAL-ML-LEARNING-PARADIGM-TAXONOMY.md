# Task 5.2B — General Machine-Learning Learning-Paradigm Taxonomy

Status: **PASS / COMPLETE**

Date: 2026-09-09

Roadmap parent: `docs/master-architecture/CONTROLLED-ROADMAP.md` → Task 5.2B.

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

Implementation contract: frozen Master Plan v1.0.

Controlling inputs: Task 5.1 existing methodology catalogue; Task 5.2 physics/knowledge learning-integration taxonomy; Task 3 PP-08 methodology ownership; Task 4 PINN-type boundaries; Master Memory Sections 57–58.

## 1. Purpose and boundary

Task 5.2B defines a **general machine-learning learning-paradigm taxonomy as orthogonal facets**, using authoritative external terminology and peer-reviewed taxonomy/review literature. It is not a flat list of all ML methods, not a new PINN taxonomy, and not a new locked-v0.7 field.

The central scientific decision is:

> A study may legitimately occupy several learning-paradigm facets at once. Therefore the Atlas must not force a single scalar `learning_type`.

For example, one future PINN/SciML study could be simultaneously supervised, active-learning-driven, continual, transfer-based, multi-task, federated and inductive. Those statements describe different semantic axes and must remain separately evidenced and queryable.

Task 5.2B does **not**:

- create or modify a locked-v0.7 scientific field/entity;
- redefine Task 5.2 physics/knowledge integration;
- classify model/backbone families such as CNN, Transformer, GNN, KAN, GAN, VAE or diffusion models — Task 5.3 owns model/representation architecture;
- treat reinforcement learning as an architecture;
- treat deep learning as one architecture family;
- decide specialized future schema structure — Task 5.4;
- set ontology-promotion recurrence thresholds — Task 5.5;
- execute the full external methodology completeness audit — Task 5.2C.

The `LP-*` IDs below are **Task-5 coordination IDs only**. They are not ontology IDs, database keys or automatic canonical Atlas terms.

## 2. External research basis

Task 5.2B used an evidence stack rather than internet listicles.

### 2.1 Standards / authoritative terminology

- **NIST AI 100-2 E2025, _Adversarial Machine Learning: A Taxonomy and Terminology of Attacks and Mitigations_** and its NIST glossary entries provide current definitions for supervised, unsupervised, semi-supervised, self-supervised, reinforcement, federated and ensemble learning.
- NIST terminology is used as a stable definition anchor where available, not as the sole taxonomy authority.

### 2.2 General ML taxonomy / peer-reviewed reviews

- Emmert-Streib et al., **“Taxonomy of machine learning paradigms: A data-centric perspective,” WIREs Data Mining and Knowledge Discovery (2022), DOI 10.1002/widm.1470**. This review explicitly distinguishes traditional supervised/unsupervised/reinforcement paradigms and modern paradigms including semi-supervised, transfer, multi-task, one-shot, positive-unlabeled and related settings; it also distinguishes inductive and transductive learning.
- Hoi et al., **“Online learning: A comprehensive survey,” Neurocomputing 459 (2021) 249–289, DOI 10.1016/j.neucom.2021.04.112**.
- Wang et al., **“A Comprehensive Survey of Continual Learning: Theory, Method and Application,” IEEE TPAMI 46(8) (2024) 5362–5383, DOI 10.1109/TPAMI.2024.3367329**.
- Cacciarelli & Kulahci, **“Active learning for data streams: a survey,” Machine Learning 113 (2024) 185–239, DOI 10.1007/s10994-023-06454-2**.
- Bekker & Davis, **“Learning from positive and unlabeled data: a survey,” Machine Learning 109 (2020) 719–760, DOI 10.1007/s10994-020-05877-5**.
- Hernández-González et al., **“Weak supervision and other non-standard classification problems: A taxonomy,” Pattern Recognition Letters 69 (2016) 49–55, DOI 10.1016/j.patrec.2015.10.008**.
- Tian et al., **“Meta-learning approaches for learning-to-learn in deep learning: A survey,” Neurocomputing 494 (2022) 203–223, DOI 10.1016/j.neucom.2022.04.078**.
- Zhang & Yang, **“An overview of multi-task learning,” National Science Review 5(1) (2018) 30–43, DOI 10.1093/nsr/nwx105**.
- Liu et al., **“A survey on federated learning: a perspective from multi-party computation,” Frontiers of Computer Science (2023), DOI 10.1007/s11704-023-3282-7**; NIST terminology provides the stable federated-learning definition.
- Sagi & Rokach, **“Ensemble learning: A survey,” WIREs Data Mining and Knowledge Discovery 8(4) (2018), DOI 10.1002/widm.1249**.
- Kouw & Loog, **“A Review of Domain Adaptation without Target Labels,” IEEE TPAMI 43(3) (2021) 766–785, DOI 10.1109/TPAMI.2019.2945942**.
- Zhou et al., **“Domain Generalization: A Survey,” IEEE TPAMI 45(4) (2023) 4396–4415, DOI 10.1109/TPAMI.2022.3195549**.
- Pourpanah et al., **“A Review of Generalized Zero-Shot Learning Methods,” IEEE TPAMI 45(4) (2023) 4051–4070, DOI 10.1109/TPAMI.2022.3191696**.
- Liu & Webb, **“Generative and Discriminative Learning,” Encyclopedia of Machine Learning and Data Mining (2017), DOI 10.1007/978-1-4899-7687-1_113**.

### 2.3 PINN/SciML relevance check

General learning paradigms are not merely theoretical possibilities for SciML. External literature already demonstrates combinations such as active learning + PINNs, multi-task learning + PINNs, and decentralized federated learning + PINNs. These examples establish relevance but **do not create Atlas paper assignments**:

- Zhang & Shafieezadeh, _Simulation-free reliability analysis with active learning and Physics-Informed Neural Network_, Reliability Engineering & System Safety 226 (2022), DOI 10.1016/j.ress.2022.108716.
- Li & Zeng, _AW-EL-PINNs: A multi-task learning physics-informed neural network for Euler-Lagrange systems in optimal control problems_, Neural Networks 199 (2026), DOI 10.1016/j.neunet.2026.108694.
- Alfano et al., _Decentralized federated learning meets Physics-Informed Neural Networks_, Knowledge-Based Systems (2025), DOI 10.1016/j.knosys.2025.113717.

The Atlas must still verify any corresponding corpus assignment from the actual source paper/evidence before treating a paradigm as used by an Atlas paper.

## 3. Taxonomy architecture

Task 5.2B adopts **ten orthogonal facets**. A paper may occupy zero, one or several values in each facet when evidence supports them.

### LP-F1 — Supervision / feedback paradigm

This facet describes the nature of the learning signal.

| Coordination node | Meaning | External support | Atlas treatment |
|---|---|---|---|
| `LP-F1-01` supervised learning | learns mappings/predictions from explicit labels or output values | NIST; WIREs 2022 | taxonomy candidate; `data_regime[].label_status` may support context but does not itself prove paradigm identity |
| `LP-F1-02` unsupervised learning | learns patterns/structure from unlabeled data without explicit target labels | NIST; WIREs 2022 | taxonomy candidate; do not infer from absence of observational labels |
| `LP-F1-03` semi-supervised learning | combines labeled and unlabeled samples in one learning setting | NIST; WIREs 2022 | taxonomy candidate; `partially_labeled` data context is supportive but not sufficient by itself |
| `LP-F1-04` self-supervised learning | creates training targets/implicit labels from the data itself | NIST; self-supervised representation-learning reviews | taxonomy candidate; not equivalent to generic unsupervised learning for Atlas normalization |
| `LP-F1-05` reinforcement learning | learns behavior/policy through reward feedback from interaction with an environment | NIST; general ML literature | taxonomy candidate; **not an architecture family** |

#### PINN-specific caution

A PINN trained only with PDE residual/collocation constraints must **not automatically be labelled “unsupervised learning.”** Physics-residual training is already governed by Task 5.2 physics-integration semantics. General ML supervision labels require explicit source semantics or an operationally defensible mapping under later governance.

Likewise, physics-derived residual targets are not equivalent to human labels, but neither does their presence automatically establish self-supervision. Preserve the paper’s exact language and workflow.

### LP-F2 — Label availability / acquisition paradigm

This facet describes how labels or informative observations are obtained or constrained.

| Coordination node | Meaning | External support | Atlas treatment |
|---|---|---|---|
| `LP-F2-01` active learning | learner/selective process queries or chooses informative samples for labeling/measurement | Machine Learning 2024 survey | taxonomy candidate linked to data/sampling evidence; **not synonymous with adaptive collocation** |
| `LP-F2-02` weak supervision | learning with incomplete, inexact, noisy or otherwise non-standard supervision depending on the source-defined setting | Pattern Recognition Letters taxonomy | broad taxonomy slot; exact subtype/source semantics required |
| `LP-F2-03` positive-unlabeled learning | binary learning from labeled positive examples plus unlabeled data that may include positive and negative cases | Machine Learning 2020 survey; WIREs 2022 | specialized candidate; do not collapse into generic semi-supervised learning without evidence |
| `LP-F2-04` one-class learning / one-class classification | learns a target/normal class with absent or limited counter-class examples | WIREs 2022 taxonomy | specialized candidate; corpus relevance must be established before promotion |

`pseudo-labeling`, `query-by-committee`, uncertainty sampling and similar mechanisms are **technique-level terms**, not automatically first-class learning-paradigm nodes. They may be modeled beneath an evidenced active/semi-supervised concept or retained source-locally pending Task 5.2C/5.4.

### LP-F3 — Learning / update regime

This facet describes when and how the model is updated as data/tasks arrive.

| Coordination node | Meaning | External support | Atlas treatment |
|---|---|---|---|
| `LP-F3-01` batch/offline learning | model is trained from a bounded dataset or training collection rather than continuously updating per arriving instance/task | online-learning survey contrast | coordination baseline; do not infer solely because training occurred once |
| `LP-F3-02` online learning | learner updates from sequentially arriving information and makes successive predictions/decisions | Hoi et al. 2021 | taxonomy candidate |
| `LP-F3-03` incremental learning | model incorporates new data/tasks incrementally rather than rebuilding wholly from scratch | online/continual literature | taxonomy candidate with terminology-overlap warning |
| `LP-F3-04` continual/lifelong learning | system sequentially acquires, updates, accumulates and retains knowledge over a lifetime/task stream, with forgetting/stability-plasticity concerns | Wang et al. 2024 | taxonomy candidate |

Online, incremental and continual learning overlap in the literature but are **not globally interchangeable**. Source meaning, task sequence, update semantics and retention objective must be preserved.

### LP-F4 — Adaptation / reuse paradigm

This facet describes reuse or adaptation across domains, tasks or environments.

| Coordination node | Meaning | External support | Atlas treatment |
|---|---|---|---|
| `LP-F4-01` transfer learning | knowledge learned in a source setting is reused/adapted for a target setting | WIREs 2022; transfer literature | existing Task 5.2 transfer/reuse anchor; no new field |
| `LP-F4-02` domain adaptation | transfer setting that explicitly adapts from a source domain to a target domain under distribution/domain shift | IEEE TPAMI review | taxonomy candidate related to transfer, not synonymous with it |
| `LP-F4-03` domain generalization | learns from source domains with the goal of generalizing to unseen target domains without target-domain training access | IEEE TPAMI 2023 survey | taxonomy candidate; distinct from domain adaptation |
| `LP-F4-04` meta-learning | learns across tasks/experiences so the system can adapt efficiently to new tasks (“learning to learn”) | Neurocomputing 2022 survey | existing recognized Task 5.1/5.2 dimension anchor; no dedicated v0.7 field |
| `LP-F4-05` warm-start / continuation reuse | reuses prior parameters/state as initialization without necessarily satisfying transfer-learning semantics | Task 5.2 existing control | **not automatically transfer learning** |

Pretraining/fine-tuning scheduling remains `training_protocol[]` control. It does not prove transfer-learning identity unless the source semantics support transfer.

### LP-F5 — Target-support / sample-scarcity regime

This facet captures how much labeled/support information is available for a new task/class.

| Coordination node | Meaning | External support | Atlas treatment |
|---|---|---|---|
| `LP-F5-01` few-shot learning | adapts/generalizes to a new task/class from a small support set | few-shot literature; WIREs modern-paradigm taxonomy | taxonomy candidate; sparse data alone does not prove few-shot learning |
| `LP-F5-02` one-shot learning | special low-support setting with one example/support item per target class/task under the source-defined formulation | WIREs 2022 taxonomy | candidate; may be `is_a` few-shot only when governed definition supports it |
| `LP-F5-03` zero-shot learning | performs target-class/task inference for unseen classes/tasks using side/semantic information rather than target-class training examples | IEEE TPAMI GZSL review | taxonomy candidate; not equivalent to zero observational data in a PINN |

The Atlas must never infer few-/one-/zero-shot identity from `data_regime.amount_or_density` alone.

### LP-F6 — Task-organization paradigm

This facet describes how many related learning tasks are learned and how they share information.

| Coordination node | Meaning | External support | Atlas treatment |
|---|---|---|---|
| `LP-F6-01` multi-task learning | learns multiple related tasks jointly or with shared information to improve task learning | National Science Review 2018; WIREs 2022 | taxonomy candidate; future relation to task records may be needed |
| `LP-F6-02` single-task learning | one learning task is optimized without an MTL relation | coordination contrast only | do not persist as a positive scientific fact unless useful and evidenced |
| `LP-F6-03` multi-label / multi-output learning | one input may have multiple labels/outputs; may overlap with MTL in some formulations but is not globally identical | WIREs 2022; MTL review | keep distinct from MTL unless source framework establishes equivalence |

Multiple PDE residual/loss components are **not automatically multi-task learning**. Likewise, a PINN that predicts several physical variables is not automatically MTL.

### LP-F7 — Distributed / collaborative learning paradigm

This facet describes learning across multiple data owners/nodes while preserving the learning semantics of collaboration.

| Coordination node | Meaning | External support | Atlas treatment |
|---|---|---|---|
| `LP-F7-01` federated learning | collaborative training across decentralized data sources without pooling raw data centrally; model information/updates are exchanged | NIST; federated-learning surveys | taxonomy candidate; **not equivalent to generic distributed training** |
| `LP-F7-02` decentralized federated learning | federated collaboration without a central aggregation server, using decentralized communication/aggregation | peer-reviewed PINN relevance example + FL literature | provisional/specialized candidate pending broader taxonomy audit |
| `LP-F7-03` other decentralized/collaborative learning | explicit collaborative learning not adequately described by federated learning | extension slot | source-local/provisional until evidence supports normalization |

`parallel_execution[]`, data parallelism, domain parallelism, MPI/GPU distribution and distributed inference are **execution semantics**, not federated-learning identity.

### LP-F8 — Model-combination / ensemble paradigm

This facet describes learning through multiple constituent models whose outputs/models are combined.

| Coordination node | Meaning | External support | Atlas treatment |
|---|---|---|---|
| `LP-F8-01` ensemble learning | combines predictions/models from multiple learners to improve performance or robustness | NIST; WIREs ensemble survey | taxonomy candidate; distinct from UQ by default |
| `LP-F8-02` bagging-family ensemble | parallel/resampled member construction and aggregation | ensemble literature | subtype candidate; evidence/relevance required |
| `LP-F8-03` boosting-family ensemble | sequentially builds learners with emphasis on prior errors/residuals | ensemble literature | subtype candidate; evidence/relevance required |
| `LP-F8-04` stacking / meta-ensemble | learns a combiner/meta-model over base model outputs | ensemble literature | subtype candidate |

Deep ensembles used for uncertainty may instantiate both `ensemble learning` and `uncertainty_method[]`, but the two dimensions remain distinct. `mixture-of-experts` is not automatically an ensemble-learning synonym; its architecture/routing semantics belong to Task 5.3 unless the source explicitly supports an ensemble interpretation.

### LP-F9 — Statistical learning character

This facet classifies what probabilistic/statistical object is modeled for prediction/generation.

| Coordination node | Meaning | External support | Atlas treatment |
|---|---|---|---|
| `LP-F9-01` generative learning/modeling | models a data-generating/joint distribution or equivalent generative mechanism capable of representing/generating data under the method’s formulation | Springer ML encyclopedia; generative-model literature | taxonomy/model-character candidate; architecture identity remains Task 5.3 |
| `LP-F9-02` discriminative learning/modeling | directly models a target conditional relation/decision boundary rather than a full generative data model | Springer ML encyclopedia; classical ML literature | taxonomy/model-character candidate |
| `LP-F9-03` hybrid generative–discriminative | source explicitly combines both modeling principles | literature-supported extension slot | provisional until evidence and scope support normalization |

GAN, VAE, diffusion model and normalizing flow are **model families/architectures**, not synonyms for the general `generative` learning character. Task 5.3 owns those model families.

### LP-F10 — Inference / generalization regime

This facet describes whether learning produces a general rule/model for unseen instances or reasons directly over a known target/test set.

| Coordination node | Meaning | External support | Atlas treatment |
|---|---|---|---|
| `LP-F10-01` inductive learning | infers a general predictive rule/model from observed training cases for application to unseen cases | WIREs 2022 taxonomy discussion | taxonomy/query candidate |
| `LP-F10-02` transductive learning | reasons from observed training cases to a specific target/test set rather than first building a general rule for arbitrary future cases | WIREs 2022 taxonomy discussion | taxonomy/query candidate |

Inductive/transductive status must be established from the actual learning setup. It is not inferred from whether a paper reports interpolation or extrapolation performance.

## 4. Orthogonality and permitted coexistence

The facets deliberately cross rather than form one tree.

Examples of valid combinations include:

- supervised + active + online;
- self-supervised + transfer + few-shot;
- reinforcement + continual + multi-task;
- supervised + federated + multi-task;
- semi-supervised + transductive;
- supervised + ensemble + inductive;
- physics-informed integration from Task 5.2 + any compatible general-learning facet above.

A taxonomy implementation must therefore support **0..N evidence-backed assignments per facet**, not one global label.

## 5. Mapping to existing Atlas owners

Task 5.2B does not create a generic `learning_type[]` field. It maps each paradigm to existing scientific evidence/owners where possible and identifies unresolved structural ownership for Task 5.4.

| Learning facet | Existing Atlas owner(s) that may provide evidence/context | What those owners do **not** prove |
|---|---|---|
| Supervision / feedback | `data_regime[]`, loss/data evidence, Task 5.2 physics integration | `label_status` alone does not prove supervised/unsupervised/self-supervised paradigm |
| Label acquisition | `data_regime[]`, `sampling_strategy[]`, evidence/relationships | adaptive collocation/sampling does not automatically equal active learning |
| Update regime | `training_protocol[]`, task/time/component evidence | staged/continuation training does not automatically equal online/continual learning |
| Adaptation/reuse | Task 5.2 transfer/reuse facet, `training_protocol[]`, TR/RR | fine-tuning or warm-start alone does not prove transfer/meta-learning |
| Few/one/zero-shot | `data_regime[]`, task/domain evidence | sparse/zero observational data does not prove few-/zero-shot learning |
| Task organization | computational-task records, study-design/context associations, evidence/relations | multiple outputs or loss components do not prove multi-task learning |
| Federated/collaborative | no explicit locked paradigm owner; `parallel_execution[]` only covers execution | parallel/distributed execution does not prove federated learning |
| Ensemble/model combination | architecture/model evidence; `uncertainty_method[]` when ensemble is used for UQ | ensemble learning is not automatically an uncertainty method, and UQ is not automatically ensemble learning |
| Generative/discriminative | model/objective evidence; architecture relation where applicable | GAN/VAE/diffusion family identity is not the same as general statistical-learning character |
| Inductive/transductive | task/data/generalization evidence | interpolation/extrapolation result labels do not prove inductive/transductive learning setup |

Task 5.4 must determine whether these paradigms can remain taxonomy/relationship projections over existing owners or whether recurrent, irreducible evidence requires future specialized structure under controlled X6 governance.

## 6. Mandatory no-merge / non-equivalence guards

The following controls are mandatory for Task 5.2C, Task 5.3, Task 5.4 and later extraction:

1. general learning paradigm ≠ physics/knowledge integration mode;
2. general learning paradigm ≠ PINN type/family;
3. learning paradigm ≠ representation/model architecture;
4. reinforcement learning ≠ neural-network architecture;
5. deep learning ≠ one learning paradigm or one architecture family;
6. supervised ≠ data-present; unsupervised ≠ no observational data;
7. self-supervised ≠ generic unsupervised by automatic normalization;
8. semi-supervised ≠ weak supervision ≠ positive-unlabeled learning;
9. active learning ≠ adaptive collocation/sampling by default;
10. online ≠ incremental ≠ continual globally;
11. transfer learning ≠ fine-tuning schedule by default;
12. transfer learning ≠ domain adaptation ≠ domain generalization;
13. meta-learning ≠ transfer learning ≠ few-shot learning, although relations/overlaps may exist;
14. few-shot ≠ sparse data; zero-shot ≠ zero observational data;
15. multi-task learning ≠ multiple model outputs ≠ multiple loss components;
16. multi-task learning ≠ multi-label/multi-output learning globally;
17. federated learning ≠ distributed/parallel execution;
18. decentralized federated learning ≠ generic domain decomposition;
19. ensemble learning ≠ uncertainty quantification;
20. mixture-of-experts ≠ ensemble learning automatically;
21. generative/discriminative character ≠ model-family identity;
22. GAN/VAE/diffusion ≠ generic `generative learning` synonym;
23. inductive/transductive regime ≠ interpolation/extrapolation evaluation label;
24. lexical similarity, common acronym or paper title wording ≠ taxonomy equivalence.

## 7. Evidence and assignment rules

A future paper-level learning-paradigm assignment must retain:

- stable `paper_id`;
- exact source terminology where available;
- normalized learning-paradigm concept/facet;
- evidence record and verified locator when available;
- source role and scope;
- verification/support state;
- taxonomy status and alias scope;
- relation/context needed to distinguish overlapping paradigms;
- reviewer/version/change history.

General literature definitions are **not substitutes for paper evidence**. They establish semantic definitions and taxonomy structure. A paper receives a paradigm assignment only when its own scoped evidence supports the assignment.

Review-paper mentions must not manufacture direct primary-study assignments, consistent with Tasks 3–4.

## 8. Term lifecycle and extensibility

Locked v0.7 lifecycle states remain controlling:

- `canonical`;
- `provisional`;
- `alias`;
- `deprecated`;
- `paper_specific`.

The companion Task-5.2B machine-readable file uses coordination statuses such as `externally_supported_candidate`, `existing_atlas_anchor`, `coordination_baseline`, `specialized_candidate`, and `extension_slot`. These statuses are **not scientific ontology statuses**.

A newly encountered learning paradigm must follow the controlled extension lifecycle:

`preserve exact source evidence → inspect existing facet/term → normalize only if semantically adequate → otherwise retain provisional/source-local meaning → review recurrence/generalizability → promote only through governed ontology change when justified`.

Task 5.2B deliberately seeds a useful evidence-supported vocabulary but does not claim exhaustive coverage. Task 5.2C remains responsible for discovering omitted methodology dimensions and testing completeness.

## 9. Implications for the Paper Profile

The future Paper Profile may expose a PP-08 **Learning Paradigms** projection containing multiple evidence-backed facet assignments. This remains a future projection concept, not a locked-v0.7 structural change.

Do **not** add a scalar `learning_type` field.

Task 5.4 must decide the scientific owner and whether taxonomy/relationship projections are sufficient. If a new structural owner is scientifically necessary, it requires a governed future ontology/profile version rather than silent mutation of v0.7/Task 3.

## 10. Interaction with Task 4 PINN Types and Task 5.2 integration

A paper may simultaneously have:

- one or more PINN type/variant assignments (Task 4);
- one or more general learning-paradigm assignments (Task 5.2B);
- one or more physics/knowledge integration assignments (Task 5.2);
- one or more model/representation architecture assignments (future Task 5.3);
- existing optimizer, training, sampling, loss, differentiation, UQ, decomposition and other methodology records.

These dimensions may be linked, but they must not be collapsed.

## 11. Research disposition summary

| Facet | External support | PINN/SciML relevance | Existing Atlas representation | Task 5.2B disposition |
|---|---|---|---|---|
| Supervision/feedback | strong | direct/likely | partial context via `data_regime[]` | define faceted taxonomy; structure deferred |
| Label acquisition | strong | direct for active learning; others possible | partial via data/sampling evidence | define taxonomy with strict no-merge |
| Update regime | strong | emerging/direct | partial via training evidence | define taxonomy; preserve terminology overlap |
| Adaptation/reuse | strong | direct | Task 5.2 partial anchor | extend semantic taxonomy, no new field |
| Few/one/zero-shot | strong | plausible/emerging | no explicit owner | taxonomy candidates; relevance verified paper-by-paper |
| Task organization | strong | direct | no explicit paradigm owner | multi-task taxonomy + relation requirement |
| Federated/collaborative | strong | direct emerging PINN evidence | no explicit paradigm owner; `parallel_execution[]` is not sufficient | taxonomy candidate; structure deferred |
| Ensemble/model combination | strong | plausible/direct in SciML/UQ | architecture/UQ context only | separate learning paradigm from UQ/architecture |
| Generative/discriminative | established | potentially relevant | no explicit owner | model-character facet; architecture deferred to 5.3 |
| Inductive/transductive | established | generally relevant | no explicit owner | query/taxonomy facet; evidence required |

## 12. Acceptance checks

- authoritative terminology/peer-reviewed research basis: **PASS**;
- minimum roadmap axes covered: **8/8**;
- additional inference/generalization axis required by Memory discussion: **covered**;
- resulting taxonomy facets: **10**;
- single scalar `learning_type` introduced: **0**;
- new locked-v0.7 fields/entities: **0**;
- automatic canonical ontology promotions: **0**;
- automatic paper-level learning assignments: **0**;
- PINN-type hierarchy changes: **0**;
- Task 5.2 physics-integration redefinition: **0**;
- Task 5.3 model architecture work performed: **0**;
- production `main` changes: **0**;
- Computational Resources Stage 1/2/3 changes: **0**.

## 13. Governing revision rule

Later authoritative literature, Task 5.2C findings or primary-source paper evidence may add, split, merge, re-scope or reject a learning-paradigm coordination concept. Revisions must be explicit, evidence-backed, versioned and history-preserving. Exact source wording, earlier decisions, conflicts and superseded rationale must remain traceable.

## 14. Result and stop boundary

**TASK 5.2B FINAL RESULT: PASS / COMPLETE.**

Task 5.2B establishes a general learning-paradigm semantic framework sufficiently broad to prevent the Atlas from equating “learning type” with one flat list while remaining deliberately open to Task 5.2C discovery.

**STOP BOUNDARY: Task 5.2C was not started.**

Exact next action, only when separately authorized: **Task 5.2C — perform the External Methodology Coverage / Gap Audit using the expanded X → Y → Z traceability rule, with Task 5.2B as a controlling input.**
