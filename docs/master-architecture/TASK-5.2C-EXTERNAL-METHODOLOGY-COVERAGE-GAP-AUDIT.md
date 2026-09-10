# Task 5.2C — External Methodology Coverage / Gap Audit

Status: **PASS — COMPLETE**

Date: 2026-09-09

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

Implementation contract: frozen Master Plan v1.0.

This document is an **architecture-completeness audit and coordination record**. It does not create, rename, delete or promote locked scientific fields, entities, vocabulary terms or paper assignments.

## 1. Purpose

Task 5.2C tests whether the Atlas methodology architecture is **semantically comprehensive and extensible**, not whether it already contains every machine-learning method or named model.

The controlling principle is:

> **Comprehensive architecture = complete semantic dimensions + extensible vocabularies + extensible typed relations + controlled structural extension.**

Comprehensiveness is therefore different from exhaustive vocabulary. A future method should have a scientifically correct semantic location and evidence path without forcing an immediate database redesign; its name need not be pre-enumerated today.

## 2. Controlling inputs

Internal authorities and prior roadmap outputs:

- Master Plan v1.0: R1–R48, X1–X9, H1–H11;
- locked `v0.7-pilot-atlas-prefreeze` schema, controlled vocabularies, taxonomy and relationship registries;
- Task 5.1 37-dimension methodology catalogue (`MDC-01`–`MDC-37`);
- Task 5.2 physics/knowledge learning-integration taxonomy;
- Task 5.2B general machine-learning learning-paradigm taxonomy;
- Task 3 PP-08 Methodology and PP-19 evidence/provenance boundaries;
- Task 4 PINN-type and cross-dimensional-linking boundaries;
- Master Memory Sections 57–60;
- curated Google Drive folder `Taxonomy resources` (21 items inspected before this audit).

External evidence was sought from standards/terminology, peer-reviewed taxonomy/review literature, scientific-ML/PIML reviews, and primary or method papers where necessary to verify PINN/SciML relevance. General web pages and AI-generated/checklist material were used only for **discovery**, never as ontology authority.

## 3. X → Y → Z protocol

### X — internal candidate universe

The 37 Task 5.1 methodology dimensions are the mandatory internal baseline. X is a starting checklist, not a ceiling.

### Y — external search axes

The audit used the following independent external-search axes:

| Axis | External search domain | Representative questions |
|---|---|---|
| Y01 | General learning paradigms | What forms of supervision, feedback, update, reuse, task organization and generalization are recognized? |
| Y02 | Model / neural / representation architectures | What families and composition mechanisms must the architecture be able to classify? |
| Y03 | Prior/domain knowledge | What knowledge sources, representations and integration locations are distinguished externally? |
| Y04 | Physics formulation / enforcement | How are strong/weak/variational/integral, hard/soft and other enforcement/formulation choices separated? |
| Y05 | Objective / loss construction and balancing | What belongs to objective construction versus weighting/balancing? |
| Y06 | Optimization and training control | What optimizer, schedule, initialization, regularization, curriculum and staged-training choices recur? |
| Y07 | Data, collocation, acquisition and sampling | How are data regimes, sampling and adaptive acquisition distinguished? |
| Y08 | Differentiation / operator evaluation | How are automatic, numerical, spectral and learned differentiation/operator-evaluation methods represented? |
| Y09 | Transformations / encodings / variable representation | How are normalization, nondimensionalization, coordinate transforms and feature/basis encodings separated from architecture and activation? |
| Y10 | Domain/time decomposition and distributed execution | What distinctions exist among decomposition, parallel execution, federated/distributed learning, topology and aggregation? |
| Y11 | Transfer and multi-fidelity | How are transfer, fidelity roles, fusion, sequential/concurrent training and adaptation related without being merged? |
| Y12 | Uncertainty / probabilistic methodology | What UQ families recur and how should they remain separate from ensembles and ordinary evaluation? |
| Y13 | Operator learning / surrogate / hybrid solver coupling | What distinguishes operator models, solver coupling, surrogate use and validation-only solver references? |
| Y14 | Lifecycle, inference, deployment, efficiency and reproducibility | Which training/inference/deployment/computational-context dimensions are broader than PP-08 methodology? |
| Y15 | ML task/output type, data modality and system role | Which externally common taxonomy axes actually belong to problem/task/data context rather than methodology? |
| Y16 | Emerging/cross-cutting methods | Do compression, NAS/HPO, neuro-symbolic/differentiable programming, robustness/privacy/fairness and related techniques reveal structural gaps? |

### Z — coverage/disposition matrix

Each internal dimension has at least one Y axis and at least one final matrix row. Every materially new external dimension discovered during Y is also dispositioned below.

Coverage states used here:

- `fully_covered` — an existing locked owner/boundary already represents the semantic dimension adequately;
- `covered_but_taxonomy_incomplete` — the owner exists, but vocabulary/family taxonomy can expand dynamically;
- `covered_compositely` — correct representation requires more than one existing owner plus evidence/relations;
- `partially_covered` — some semantics exist, but a new derived facet/relationship layer is needed;
- `not_explicitly_covered` — no current explicit owner; dynamic taxonomy/relationship or future structure must be considered;
- `not_PP08_methodology` — important externally, but its controlling owner belongs to another Atlas facet;
- `requires_evidence` — potentially useful but insufficiently recurrent/relevant for structural commitment;
- `possible_future_structure` — recurrent evidence may justify a specialized later ontology structure; Task 5.4/5.5 decide.

## 4. Z1 — mandatory internal X coverage matrix (`MDC-01`–`MDC-37`)

| X ID | Dimension | Y | Current Atlas owner / representation | Coverage | Structural gap? | Disposition |
|---|---|---|---|---|---|---|
| MDC-01 | Architecture family | Y02,Y13 | `PINN_architecture[]` | covered_but_taxonomy_incomplete | No | Expand family taxonomy in 5.3; keep architecture distinct from configuration and learning paradigm. |
| MDC-02 | Model variable representation | Y09 | `model_variable_representation[]` | fully_covered | No | Preserve structured input/output role and evidence. |
| MDC-03 | Network configuration | Y02,Y14 | `network_configuration[]` | fully_covered | No | Depth/width/count/parameter topology remain configuration, not architecture family. |
| MDC-04 | Physical constraints | Y03,Y04 | `PAPER_PROBLEMS.physical_constraints[]` | fully_covered | No | Own **what** physical/mathematical condition exists. |
| MDC-05 | Physics enforcement | Y04 | `physics_enforcement[]` | covered_but_taxonomy_incomplete | No | Keep enforcement distinct from formulation and integration locus. |
| MDC-06 | Physics integration mode | Y03,Y04 | `physics_integration_mode[]`; Task 5.2 | fully_covered | No | Existing six-mode controlled dimension remains valid; can cross-link to knowledge-source/representation facets. |
| MDC-07 | Strong/weak/variational formulation | Y04 | controlled-vocabulary dimension label + evidence/composite owners | covered_compositely | Not yet | Do not invent a field in 5.2C; 5.4 decides whether recurrence justifies specialization. |
| MDC-08 | Loss construction/components | Y05 | `loss_components[]` | fully_covered | No | Objective composition remains separate from weighting/balancing. |
| MDC-09 | Loss weighting/balancing | Y05,Y06 | `loss_weighting_method[]` | fully_covered | No | Fixed/adaptive/scheduled/learned modes remain extensible. |
| MDC-10 | Sampling/adaptive sampling | Y07 | `sampling_strategy[]` | covered_but_taxonomy_incomplete | No | Adaptive collocation, residual/importance/refinement families can extend under evidence. |
| MDC-11 | Data/collocation/observation regime | Y07,Y15 | `PAPER_PROBLEMS.data_regime[]` | fully_covered | No | Do not infer supervision paradigm from data-regime labels alone. |
| MDC-12 | Optimizer identity/strategy | Y06 | `optimizer[]` | covered_but_taxonomy_incomplete | No | Optimizer taxonomy may expand; identity stays distinct from transitions/schedules. |
| MDC-13 | Training protocol umbrella | Y06 | `training_protocol[]` | fully_covered | No | Protocol owns scheduling/application controls, not general learning-method identity. |
| MDC-14 | Learning-rate control | Y06 | `training_protocol[].protocol_type=learning_rate` | fully_covered | No | Retain as protocol subtype. |
| MDC-15 | Initialization | Y06 | `training_protocol[].protocol_type=initialization` | fully_covered | No | Initialization alone does not prove transfer/meta-learning. |
| MDC-16 | Stabilization/regularization | Y05,Y06 | `training_protocol[].protocol_type=stabilization_regularization` | fully_covered | No | Preserve distinction from physics enforcement and loss components. |
| MDC-17 | Batching | Y06,Y07 | `training_protocol[].protocol_type=batching` | fully_covered | No | Batch scheduling ≠ batch/offline learning paradigm automatically. |
| MDC-18 | Stopping/restart | Y06 | `training_protocol[].protocol_type=stopping_restart` | fully_covered | No | Retain protocol role. |
| MDC-19 | Curriculum/continuation | Y06 | `training_protocol[].protocol_type=curriculum_continuation` | fully_covered | No | Continuation can relate to reuse but is not transfer by default. |
| MDC-20 | Staged training | Y06,Y11 | `training_protocol[].protocol_type=staged_training` | fully_covered | No | Stage ordering stays protocol; learning identities remain typed relations. |
| MDC-21 | Pretraining/fine-tuning control | Y01,Y06,Y11 | `training_protocol[].protocol_type=pretraining_finetuning` + Task 5.2/5.2B relations | covered_compositely | No | Pretraining/fine-tuning ≠ transfer unless source evidence supports transfer semantics. |
| MDC-22 | Optimizer transition | Y06 | `training_protocol[].protocol_type=optimizer_transition` + `optimizer[]` | covered_compositely | No | Preserve optimizer identity + transition event separately. |
| MDC-23 | Activation strategy | Y02,Y06 | `activation_function[]` | covered_but_taxonomy_incomplete | No | Activation taxonomy remains independent of architecture and transformation. |
| MDC-24 | Differentiation/operator evaluation | Y08,Y13 | `differentiation_method[]` | covered_but_taxonomy_incomplete | No | Structured method/operator/spatial-temporal role is appropriate for AD, numerical, spectral or learned evaluation. |
| MDC-25 | Geometry representation | Y09,Y15 | `geometry_representation[]` | covered_but_taxonomy_incomplete | No | Geometry/data structure remains separate from network architecture. |
| MDC-26 | Domain decomposition | Y10 | `domain_decomposition_method[]` | covered_but_taxonomy_incomplete | No immediate | Richer structured enrichment remains evidence-driven. |
| MDC-27 | Time decomposition/time partitioning | Y10 | composite of decomposition, protocol and/or parallelism | partially_covered | Possible | Do not force into spatial DD; Task 5.4 may consider structure if recurrence warrants. |
| MDC-28 | Parallel execution | Y10,Y14 | `parallel_execution[]` | fully_covered | No | Compute execution is not federated/distributed-learning organization. |
| MDC-29 | Transformation/encoding/normalization | Y09 | `transformation_method[]` | covered_but_taxonomy_incomplete | No | Includes normalization, nondimensionalization, coordinate/feature transformations; activation excluded. |
| MDC-30 | Uncertainty/UQ method | Y12 | `uncertainty_method[]` | covered_but_taxonomy_incomplete | No | Bayesian/ensemble/probabilistic/conformal candidates require evidence-specific taxonomy; ensemble-learning identity remains separate. |
| MDC-31 | Operator-learning integration | Y02,Y13 | controlled dimension label + architecture/task/relationship evidence | covered_compositely | No immediate | 5.3 formalizes model families; do not equate neural operator with PINN or physics-informed status. |
| MDC-32 | Multi-fidelity integration | Y11 | `fidelity_source_role[]` + training/transfer/relationship evidence | covered_compositely | No | Preserve fidelity identity, source role and information-flow semantics separately. |
| MDC-33 | Fidelity source role | Y11 | `fidelity_source_role[]` | fully_covered | No | Low/high fidelity and source/workflow roles remain independent attributes. |
| MDC-34 | Transfer/meta-learning | Y01,Y11 | Task 5.2 + Task 5.2B taxonomy/relations + protocol evidence | partially_covered | No immediate | Semantic taxonomy now exists; Task 5.4 decides storage/projection, not a generic `learning_type`. |
| MDC-35 | Software framework | Y14 | `software_framework[]` | fully_covered | No | Framework identity ≠ code availability or CR resource identity. |
| MDC-36 | Derived scientific output method | Y13,Y14 | `derived_output_method[]` | fully_covered | No | Sole scientific post-inference derivation owner; generic visualization/cleanup excluded. |
| MDC-37 | Reproducibility/method-reporting context | Y14 | `REPRODUCIBILITY` | fully_covered | No | Seed/hyperparameter/hardware/training-cost reporting is context, not method identity. |

**Internal X gate:** **37/37** Task 5.1 dimensions have one or more Y search axes and a Z disposition.

## 5. Z2 — newly discovered / externally emphasized dimensions

The external audit found important axes that were absent from the original 37-row catalogue as explicit top-level coordination dimensions or were only implicit. None is silently converted into a locked-v0.7 field.

| External ID | Newly emphasized dimension | Evidence signal | Current Atlas fit | Coverage | Disposition |
|---|---|---|---|---|---|
| EX-01 | General learning paradigms | broad ML taxonomy literature | Task 5.2B + existing contextual owners | partially_covered | Semantic taxonomy exists; 5.4 decides projection/storage. |
| EX-02 | Prior/domain-knowledge source | informed-ML taxonomy | physical constraints, problem/evidence context, Task 5.2 relations | partially_covered | Add derived taxonomy facet/typed relations; do not replace physical-constraint owner. |
| EX-03 | Knowledge representation | informed-ML taxonomy: equations, logic, graphs, simulations, probabilistic relations, human feedback, etc. | evidence + formulation/constraint/model relations | not_explicitly_covered | Strong candidate for governed taxonomy/relationship layer; structural decision deferred 5.4. |
| EX-04 | Knowledge-integration locus | informed-ML taxonomy: data, hypothesis/model structure, learning algorithm, final hypothesis | Task 5.2 + existing physics-integration fields | covered_compositely | Formalize as derived crosswalk; never collapse enforcement, integration mode and architecture. |
| EX-05 | Distributed-learning topology / aggregation / partition | DML/edge-ML taxonomies | Task 5.2B federated facet + `parallel_execution[]` only for compute execution | partially_covered | Create taxonomy/relations for centralized/decentralized/federated/split/topology/aggregation; keep compute parallelism separate. |
| EX-06 | Model lifecycle / deployment / inference organization | edge-ML and AI lifecycle literature | reproducibility, software, performance/evaluation, CR boundary | not_PP08_methodology | Represent at appropriate architecture/reproducibility/implementation layers; do not force into PP-08. |
| EX-07 | Model compression / efficiency transformation | edge-ML literature: pruning, quantization, distillation, approximation | training/architecture/implementation relations; no dedicated v0.7 owner | possible_future_structure | Treat as method taxonomy/relations initially; promote only with Atlas recurrence and 5.5 evidence. |
| EX-08 | Automated architecture / hyperparameter search | NAS/HPO literature and architecture surveys | network configuration, training/optimization evidence | partially_covered | Record search/selection method separately from resulting architecture/configuration; 5.4 decides structure. |
| EX-09 | Data modality / structural form | general ML taxonomies | problem/data context + geometry/model representation | not_PP08_methodology | Keep modality/context separate from architecture identity; use it for query/facet relations. |
| EX-10 | ML task/output type / system role | general ML and ML-for-systems taxonomies | `computational_task`, problem/application owners | not_PP08_methodology | Do not duplicate classification/regression/forecasting/discovery/optimization as methodology fields when they describe the task. |
| EX-11 | Neuro-symbolic / differentiable-programming integration | informed/knowledge-enhanced ML literature | knowledge representation/integration + model/method relations | requires_evidence | Structurally supported through extensible taxonomy/relations; do not pre-seed a large vocabulary without Atlas evidence. |
| EX-12 | Robustness / privacy / security / fairness-aware learning techniques | trustworthy/edge/distributed ML literature | evaluation, data governance, training protocol/method links where explicit | covered_compositely | Separate **property/constraint/evaluation** from a specific training method; no generic method field. |
| EX-13 | Model combination / mixture and ensemble organization | general ML learning taxonomy | Task 5.2B model-combination facet + architecture relations + UQ where relevant | partially_covered | Ensemble identity ≠ UQ; mixture-of-experts ≠ ensemble automatically. 5.3 handles model composition. |
| EX-14 | Representation learning / latent representation objective | modern ML/DL literature | architecture/model representation + task/loss/training relations | covered_compositely | Treat objective/representation role independently from architecture family; 5.3 must preserve this boundary. |
| EX-15 | Surrogate / reduced-order / learned-model role | SciML/operator/multi-fidelity literature | computational task + architecture + fidelity/operator relations | covered_compositely | Role is not itself a universal architecture family; represent through task/method/model relations. |

**External-discovery gate:** **15/15** materially new/emphasized external dimensions are explicitly dispositioned.

## 6. Coverage result

### 6.1 What is already structurally strong

The locked v0.7 model is substantially stronger than a flat method catalogue. Existing owners already separate architecture, network configuration, physical constraints, physics enforcement/integration, loss construction, loss weighting, sampling, optimization, training control, activation, differentiation, geometry, decomposition, parallel execution, transformations, UQ, fidelity roles, software, derived outputs, data regime and reproducibility.

The external audit did **not** identify evidence requiring Tasks 1–4 to be reopened or the locked v0.7 schema to be mutated immediately.

### 6.2 What is incomplete

The principal incompleteness is **semantic coordination/taxonomy**, not failure of the foundational data architecture. The most important missing or only implicit cross-cutting facets are:

1. general learning paradigms — now defined by Task 5.2B;
2. prior/domain-knowledge **source**;
3. prior/domain-knowledge **representation**;
4. knowledge **integration locus** across the learning pipeline;
5. distributed-learning organization/topology/aggregation/partition, distinct from compute parallelism;
6. model/representation/composition architecture — intentionally deferred to Task 5.3;
7. lifecycle/deployment/efficiency/compression and automated-search methods, which require correct placement rather than immediate PP-08 fields.

### 6.3 Why no immediate schema expansion is authorized

Most discovered gaps can be represented safely through L5 taxonomy, typed relationships, evidence-backed derived projections and existing scientific owners. Task 5.4 is explicitly responsible for deciding where this remains sufficient and where recurrent evidence justifies specialized structure.

Adding fields now would preempt Tasks 5.4–5.5 and violate the controlled extension lifecycle.

## 7. Scientific boundary corrections/refinements from full-text audit

The curated Drive resources sharpen several Task 5.2B rules:

1. **Weak supervision and semi-supervised learning:** Hernández-González et al. organize semi-supervised learning within a broader weakly supervised classification landscape. Atlas therefore must not assert either universal equivalence or universal disjointness. The relation is taxonomy/source-context dependent and evidence must preserve the source framing.
2. **Multi-task learning:** multiple outputs or loss components do not automatically prove MTL. However, a source may explicitly formulate them as learning tasks. Li and Zeng explicitly describe AW-EL-PINNs as a multi-task learning paradigm and treat the ODE-constraint components as tasks; such a paper can receive a paper-scoped, evidence-backed MTL assignment.
3. **Domain adaptation:** Kouw and Loog treat domain adaptation as a special case of transfer learning in their formal setting and distinguish sample-, feature- and inference-based adaptation, as well as inductive/transductive targets. Atlas should preserve the source's stated hierarchy rather than impose one universal global tree.
4. **Federated/distributed learning:** decentralized federated PINNs demonstrate that learning organization, network topology/aggregation and physics integration can coexist and must be represented independently from compute parallelism.

These are **history-preserving refinements**, not silent rewrites of Task 5.2B.

## 8. Architecture implications

### 8.1 Paper Profile

PP-08 Methodology can ultimately expose evidence-backed derived facets for learning paradigm, knowledge source/representation/integration locus, architecture/model family and distributed-learning organization. It should not become a flat list and should not use one scalar `learning_type`.

No locked-v0.7 Paper Profile field is added by this task.

### 8.2 Task 5.3

Task 5.3 should now proceed as **Model / Representation / Coupled-ML Architecture Taxonomy** and explicitly preserve:

- architecture family ≠ network configuration;
- architecture ≠ learning paradigm;
- architecture ≠ statistical learning character;
- architecture ≠ task/output type;
- latent/generative objective ≠ architecture automatically;
- neural operator ≠ PINN automatically;
- mixture-of-experts / ensemble / multi-network composition require typed model-composition semantics;
- model compression/NAS/HPO describe transformation/search processes, not necessarily the final architecture identity.

### 8.3 Task 5.4

Task 5.4 must evaluate the candidate gaps EX-02–EX-08 and EX-11–EX-14 against recurrence, evidence burden and query needs before creating specialized storage.

### 8.4 Task 5.5

Task 5.5 must set promotion thresholds so external vocabulary discovery cannot bypass primary-source verification, recurrence requirements, collision handling and versioned governance.

## 9. Evidence-quality hierarchy used

Evidence priority:

1. standards/official terminology and publisher metadata;
2. peer-reviewed taxonomy/review papers;
3. high-quality SciML/PIML reviews;
4. primary method papers for PINN/SciML applicability checks;
5. books/tutorials for triangulation;
6. general web pages and AI/checklist text for discovery only.

The Drive files `txt.txt` and `A Unified Taxonomy of Machine Learning Learning-Paradigms.pdf` were **not** treated as scientific authority. Papers whose use of “taxonomy” meant a domain/category taxonomy supplied to a GNN were treated as knowledge-representation examples, not architecture-taxonomy authorities.

## 10. Checked MDPI-style reference set

The following references are the principal evidence stack used for this audit. Journal titles are retained in full where convenient; DOIs are included for auditability.

1. Emmert-Streib, F.; Dehmer, M. Taxonomy of machine learning paradigms: A data-centric perspective. *WIREs Data Mining and Knowledge Discovery* **2022**, *12*, e1470. https://doi.org/10.1002/widm.1470.
2. von Rueden, L.; Mayer, S.; Beckh, K.; Georgiev, B.; Giesselbach, S.; Heese, R.; Kirsch, B.; Pfrommer, J.; Pick, A.; Ramamurthy, R.; et al. Informed Machine Learning—A Taxonomy and Survey of Integrating Prior Knowledge into Learning Systems. *IEEE Transactions on Knowledge and Data Engineering* **2023**, *35*, 614–633. https://doi.org/10.1109/TKDE.2021.3079836.
3. Karniadakis, G.E.; Kevrekidis, I.G.; Lu, L.; Perdikaris, P.; Wang, S.; Yang, L. Physics-informed machine learning. *Nature Reviews Physics* **2021**, *3*, 422–440. https://doi.org/10.1038/s42254-021-00314-5.
4. Li, W.; Hacid, H.; Almazrouei, E.; Debbah, M. A Comprehensive Review and a Taxonomy of Edge Machine Learning: Requirements, Paradigms, and Techniques. *AI* **2023**, *4*, 729–786. https://doi.org/10.3390/ai4030039.
5. Ramírez-Gordillo, T.; Pujol, F.A.; Mora, H. Unpacking distributed machine learning: A unified taxonomy, formal foundations, and the rise of emerging paradigms. *Neurocomputing* **2026**, *673*, 132828. https://doi.org/10.1016/j.neucom.2026.132828.
6. Hernández-González, J.; Inza, I.; Lozano, J.A. Weak supervision and other non-standard classification problems: A taxonomy. *Pattern Recognition Letters* **2016**, *69*, 49–55. https://doi.org/10.1016/j.patrec.2015.10.008.
7. Tian, Y.; Zhao, X.; Huang, W. Meta-learning approaches for learning-to-learn in deep learning: A survey. *Neurocomputing* **2022**, *494*, 203–223. https://doi.org/10.1016/j.neucom.2022.04.078.
8. Kouw, W.M.; Loog, M. A Review of Domain Adaptation without Target Labels. *IEEE Transactions on Pattern Analysis and Machine Intelligence* **2021**, *43*, 766–785. https://doi.org/10.1109/TPAMI.2019.2945942.
9. Zhang, Y.; Yang, Q. An overview of multi-task learning. *National Science Review* **2018**, *5*, 30–43. https://doi.org/10.1093/nsr/nwx105.
10. Li, C.; Zeng, R. AW-EL-PINNs: A multi-task learning physics-informed neural network for Euler-Lagrange systems in optimal control problems. *Neural Networks* **2026**, *199*, 108694. https://doi.org/10.1016/j.neunet.2026.108694.
11. Alfano, G.; Greco, S.; Mandaglio, D.; Parisi, F.; Shahbazian, R.; Trubitsyna, I. Decentralized federated learning meets Physics-Informed Neural Networks. *Knowledge-Based Systems* **2025**, *323*, 113717. https://doi.org/10.1016/j.knosys.2025.113717.
12. Wang, S.; Teng, Y.; Perdikaris, P. Understanding and Mitigating Gradient Flow Pathologies in Physics-Informed Neural Networks. *SIAM Journal on Scientific Computing* **2021**, *43*, A3055–A3081. https://doi.org/10.1137/20M1318043.
13. Wang, S.; Yu, X.; Perdikaris, P. When and why PINNs fail to train: A neural tangent kernel perspective. *Journal of Computational Physics* **2022**, *449*, 110768. https://doi.org/10.1016/j.jcp.2021.110768.
14. Penwarden, M.; Zhe, S.; Narayan, A.; Kirby, R.M. Multifidelity modeling for Physics-Informed Neural Networks (PINNs). *Journal of Computational Physics* **2022**, *451*, 110844. https://doi.org/10.1016/j.jcp.2021.110844.
15. Badillo, S.; Banfai, B.; Birzele, F.; Davydov, I.I.; Hutchinson, L.; Kam-Thong, T.; Siebourg-Polster, J.; Steiert, B.; Zhang, J.D. An Introduction to Machine Learning. *Clinical Pharmacology & Therapeutics* **2020**. https://doi.org/10.1002/cpt.1796.
16. Maas, M. A Taxonomy of ML for Systems Problems. *IEEE Micro* **2020**. https://doi.org/10.1109/MM.2020.3012883.

The broader Task 5.2B reference register remains applicable for learning-paradigm subdimensions and is not duplicated exhaustively here.

## 11. Acceptance gates

| Gate | Result |
|---|---|
| All 37 internal methodology dimensions mapped to ≥1 Y axis | **PASS — 37/37** |
| All 37 internal dimensions represented in final Z matrix | **PASS — 37/37** |
| Newly discovered material external dimensions explicitly dispositioned | **PASS — 15/15** |
| Architecture-vs-vocabulary distinction preserved | **PASS** |
| Locked v0.7 fields/entities added | **0** |
| Automatic canonical promotions | **0** |
| Automatic paper assignments | **0** |
| Tasks 1–4 reopened | **0** |
| Task 5.3 executed | **0** |
| Production `main` modified | **0** |
| Computational Resources Stage 1/2/3 modified | **0** |

## 12. Result

**TASK 5.2C RESULT: PASS.**

The external audit found no foundational architectural failure. It found **taxonomy/coordination gaps and several cross-cutting dimensions**, all of which can currently be accommodated through the existing L1–L8 architecture, evidence layer, controlled dynamic taxonomy/relationships and later governed structural promotion.

The Atlas can therefore proceed to Task 5.3 without claiming that its vocabulary is exhaustive.

## Stop boundary

**Task 5.3 was not started.**
