# Task 5.3 — Model / Representation / Coupled-ML Architecture Taxonomy

Status: **PASS / COMPLETE**

Date: 2026-09-09

Branch: `docs/master-atlas-roadmap`

Starting branch head: `ddae939478930ea166f2e7ff8a03ec0329c5cbf8`

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

Machine-readable coordination contract: `atlas-model-representation-coupled-ml-taxonomy-spec.json` (`task-5.3-v1.0.1`).

Machine-readable validation: `TASK-5.3-MACHINE-READABLE-VALIDATION.md` — **PASS / 0 errors**.

This document is a **non-authoritative architecture/taxonomy coordination artifact**. It does not modify locked v0.7 scientific records, create a second PINN-type hierarchy, promote new canonical ontology terms, create global aliases, or create paper-level architecture assignments.

## 1. Task boundary

Task 5.3 resolves the architecture-side methodological gap identified by Tasks 5.1–5.2C. The purpose is not to enumerate every neural-network or machine-learning method. The purpose is to define scientifically defensible semantic boundaries so that future Atlas records can distinguish:

- PINN type/family;
- neural/model architecture;
- scientific representation;
- model composition;
- learning/integration mode;
- coupled external ML method;
- training protocol;
- numerical/solver coupling;
- application/equation specialization.

These dimensions are linkable but non-equivalent.

Task 5.3 remains inside the frozen architecture/governance system: **L1–L8**, **G1–G14**, **R1–R48**, **X1–X9**, and **H1–H11**.

**Task 5.4 is not started here.** Questions about future specialized storage are passed forward explicitly.

## 2. Controlling sources inspected

### 2.1 GitHub roadmap and Task 5 chain

The following were re-read before finalization:

- `CONTROLLED-ROADMAP.md`;
- `TASK-5-STATUS.md`;
- `TASK-5.1-METHODOLOGY-DIMENSION-CATALOGUE.md`;
- `atlas-methodology-dimension-catalogue.json`;
- `TASK-5.2-LEARNING-INTEGRATION-TYPE-TAXONOMY.md`;
- `atlas-learning-integration-taxonomy-spec.json`;
- `TASK-5.2B-GENERAL-ML-LEARNING-PARADIGM-TAXONOMY.md`;
- `atlas-learning-paradigm-taxonomy-spec.json`;
- `TASK-5.2B-REFERENCE-AUDIT-AND-MDPI-BIBLIOGRAPHY.md`;
- `atlas-learning-paradigm-reference-register.json`;
- `TASK-5.2C-EXTERNAL-METHODOLOGY-COVERAGE-GAP-AUDIT.md`;
- `atlas-external-methodology-coverage-gap-audit.json`;
- `TASK-5.2C-REFERENCE-QA-ADDENDUM.md`;
- `TASK-5.2C-MACHINE-READABLE-VALIDATION.md`.

### 2.2 Locked Google Drive v0.7 owners

The exact locked `v0.7-pilot-atlas-prefreeze` owners were re-read:

- `01_Canonical_Schema_Field_Dictionary — v0.7-pilot-atlas-prefreeze`;
- `02_Controlled_Vocabularies — v0.7-pilot-atlas-prefreeze`;
- `03_Taxonomy_Term_and_Alias_Registry — v0.7-pilot-atlas-prefreeze`;
- `04_Relationship_Registry — v0.7-pilot-atlas-prefreeze`;
- `05_Ontology_Governance_and_Change_Rules — v0.7-pilot-atlas-prefreeze`;
- latest `PINN Review Atlas — Master Architecture & Implementation Memory`.

No locked owner was edited by Task 5.3.

### 2.3 Existing Atlas architecture/methodology material

The review also inspected:

- `atlas-architecture-registry.json`;
- `atlas-pinn-type-taxonomy-spec.json`;
- `task-4.1c-terminology-collision-register.json`;
- all four `task-4.1d-pinn-type-candidate-inventory-part-00*.tsv` files;
- `ATLAS-PRODUCTION-SURFACE-REGISTER.md`;
- current `/architectures/` page scaffold and its shared section-page implementation.

The current `/architectures/` page is a production-surface **scaffold**, not a verified scientific classifier. Its wording is implementation context, not scientific authority.

## 3. Locked ownership boundaries preserved

| Scientific dimension | Controlling owner | Task 5.3 rule |
|---|---|---|
| PINN type/family | Task 4 / L4-P8 | Reference only; no second PINN hierarchy |
| Neural/model architecture | MDC-01 / `PINN_architecture[]` | Evidence-backed architecture-family identity |
| Explicit model input/output representation | MDC-02 / `model_variable_representation[]` | Scientific model-interface representation |
| Network configuration | MDC-03 / `network_configuration[]` | Depth, width, branch/subnetwork count, sharing and numeric latent dimension do not become architecture families |
| Learning/integration | Tasks 5.2 and 5.2B | Cross-reference only |
| Training protocol | MDC-13 / `training_protocol[]` | Training is not architecture |
| Numerical/solver coupling | Task 5.2 F4 + existing methodology owners | Coupling is not backbone identity |
| Application/equation specialization | Task 4 + application/problem/task owners | Specialization is not architecture identity |
| Internal learned latent semantics | Dynamic L5 coordination pending Task 5.4 | Do not force into `model_variable_representation[]` unless the latent/code variable is an explicit model interface |

A critical refinement is therefore explicit: `model_variable_representation[]` owns scientifically meaningful **model inputs and outputs**. `network_configuration.latent_dimension` can store a numeric latent dimension. Neither field, by itself, fully owns the semantic meaning/objective of an internal learned latent space. That structural question is deferred to Task 5.4.

## 4. Task 5.2C handoff resolved

Task 5.3 uses the Task 5.2C coverage audit as a controlling input and resolves its architecture-side coordination for:

- `MDC-01` — architecture family;
- `MDC-31` — operator-learning integration;
- `EX-07` — model compression/efficiency transformations;
- `EX-08` — automated architecture/hyperparameter search;
- `EX-09` — data modality/structural form, kept distinct from architecture identity;
- `EX-10` — ML task/output type/system role, kept distinct from architecture identity;
- `EX-13` — model combination/mixture/ensemble organization;
- `EX-14` — representation-learning/latent-representation objective;
- `EX-15` — surrogate/reduced-order/learned-model role.

Task 5.3 does **not** convert those externally emphasized dimensions into locked-v0.7 fields.

## 5. Six-facet architecture coordination model

A flat list is scientifically insufficient. Task 5.3 defines six orthogonal coordination facets.

### MRF-01 — Backbone model architecture

The actual reusable structural model family defining the connectivity/operator form of the learned approximator. Paper assignment requires explicit primary-source naming or unambiguous implementation evidence.

### MRF-02 — Model composition pattern

How multiple learned components are organized and what roles they play. Component roles and coupling must be evidenced; component counts alone are insufficient.

### MRF-03 — Scientific representation choice

The scientific representation at explicit model interfaces, plus separately governed internal latent semantics. Representation never determines architecture automatically.

### MRF-04 — Generative / latent model system

Multi-axis systems whose identity depends on composition, latent representation, objective and/or inference semantics. Autoencoders, VAEs, GANs and diffusion models cannot be represented faithfully as interchangeable backbone labels.

### MRF-05 — Coupled external ML / operator method

An external learned model or ML/operator method coupled to a PINN/physics-informed workflow while retaining its own identity.

### MRF-06 — Architecture lifecycle / search / transformation process

NAS, HPO, pruning, quantization, distillation and related processes. These act on architectures/model realizations but do not automatically define the final architecture identity.

## 6. Backbone-family decisions

The validated machine specification contains **13 architecture coordination nodes**. They are coordination concepts, not new locked ontology promotions.

| Family / node | Task 5.3 disposition | Scientific boundary |
|---|---|---|
| Dense feed-forward / MLP | Coordination family | Generic `DNN` wording alone is insufficient |
| CNN | Coordination family | Grid/tensor representation does not imply CNN; C018 remains controlling |
| Recurrent neural network | Coordination family | Sequence data do not imply a recurrent architecture |
| LSTM | Recurrent subfamily | Not a global alias for generic recurrent wording; C013 retained |
| GRU | Recurrent subfamily | External coverage node; no automatic Atlas assignment |
| Transformer | Coordination family | Attention mechanism alone does not establish Transformer architecture |
| GNN / GCN | GNN family with GCN subtype | Graph representation alone does not establish GNN |
| KAN | Coordination family | C012 prohibits global merging of PIKAN/KAN-PINN/Physics-KAN |
| PIKAN architecture family | Existing locked v0.7 concept | Atlas 150 preserved unchanged |
| Stacked residual PINN architecture | Existing locked v0.7 concept | Atlas 238 preserved; network residual/skip structure ≠ physics residual |
| RBF neural network | Atlas architecture candidate | Paper mappings require primary-source verification |
| SIREN | Coordination family with Atlas candidate | Sinusoidal activation occurrence alone does not prove SIREN architecture |
| GPT-PINN network-as-activation architecture | Existing locked provisional/source-specific concept | Remains source-specific pending independent recurrence |

This set is a governed baseline, **not an exhaustive vocabulary ceiling**.

## 7. Representation decisions

Task 5.3 distinguishes the following representation concepts without adding locked controlled-vocabulary values:

- coordinate / field-variable representation;
- grid/tensor/image-like representation;
- sequential/temporal-state representation;
- graph-structured representation;
- function-valued/operator input-output representation;
- internal latent/code representation;
- basis/spectral/Fourier representation;
- geometry/constraint representation.

Mandatory negative placements:

- grid/tensor representation ≠ CNN;
- sequence representation ≠ RNN/LSTM/GRU/Transformer;
- graph representation ≠ GNN;
- function-valued input/output ≠ neural-operator identity;
- latent representation ≠ autoencoder/VAE/generative learning automatically;
- Fourier-feature encoding ≠ FNO architecture;
- phi-function / R-function / TFC geometry representation ≠ neural architecture.

## 8. Composition and generative-model decisions

### 8.1 Autoencoder

An autoencoder is an encoder–decoder model system with a reconstruction/representation-learning objective. Encoder and decoder backbones remain separately classifiable.

`AutoPINN` is **not** interpreted as “autoencoder PINN” from its name.

### 8.2 Variational autoencoder

A VAE adds probabilistic latent-variable/inference semantics to an autoencoding system. `PI-VAE` and `PIVAE` remain governed by collision C017; Task 5.3 creates no global alias.

### 8.3 GAN

A GAN is generator–discriminator composition plus adversarial objective semantics. Generator and discriminator backbones can differ and remain separately classifiable.

Collision C016 remains controlling: `PI-GAN`, `PIGAN`, `GAN-PINN` and `PIG-GAN` are not automatic aliases.

### 8.4 Diffusion / score-based generative model

Diffusion denotes a generative process/model system with a separately classifiable backbone. “Diffusion” is therefore not treated as a unique neural backbone label.

### 8.5 Ensemble, mixture of experts and multi-network systems

The following remain non-equivalent:

- ensemble — model-combination semantics, with Task 5.2B as the primary learning-paradigm owner;
- mixture of experts — experts plus routing/gating;
- role-specific multi-network system — multiple learned components with explicit scientific roles.

`subnetwork_count > 1` is not sufficient to classify any of them.

Locked relation R-C21 remains exact for an unknown parameter/coefficient field represented by a dedicated parameter/coefficient network. It does not imply a generic “multi-network PINN” architecture family.

## 9. Coupled-method decisions

### 9.1 Neural operators

Neural operators retain their own operator-learning identity. Locked R-C03 remains controlling: `neural_operator → learns → solution_operator`.

Task 4 collision C014 remains unchanged for `PINO`, `PI-DeepONet`, `PINN-DeepONet`, `PI-FNO` and `DeepONet`.

Therefore:

- neural operator ≠ PINN;
- DeepONet/FNO ≠ PINN alias;
- operator-learning task ≠ neural-operator architecture;
- Fourier-feature input encoding ≠ Fourier neural operator;
- hybrid PINN/operator linkage requires source evidence.

### 9.2 Learned differential/operator evaluators

The locked learned-differential-operator concept remains differentiation/operator-evaluation methodology by default. An architecture role requires independent source evidence.

### 9.3 Reinforcement learning

Reinforcement learning / deep reinforcement learning remains a Task 5.2B learning/decision/control paradigm, **not a neural architecture**. A policy/value/function-approximator architecture is classified separately when evidence supports it.

Thus `CNN-PINN-DRL` cannot be normalized into one architecture class from its compound name.

### 9.4 Numerical solvers

Classical numerical/solver coupling remains Task 5.2 F4 integration semantics, not an external ML architecture.

### 9.5 Neural ODE and symbolic-neural candidates

Raw Atlas terms such as `PiNODE (NeuralODE with PINN)` and `SyCo-PINN (Symbolic-Neural Collaboration PINN)` remain source-local/candidate evidence. Task 5.3 creates no global family assignment from the terms.

## 10. Search/compression decisions

The Task 5.2C process gaps are positioned as follows:

- neural architecture search / DARTS-like search → architecture-search process (`EX-08`);
- hyperparameter optimization → search process (`EX-08`);
- pruning → compression/transformation process (`EX-07`);
- quantization → compression/deployment transformation (`EX-07`);
- knowledge distillation → training/model-transfer/compression process (`EX-07`).

The final selected architecture, teacher architecture and student architecture remain separately represented when evidence exists.

## 11. Collision and governed-review decisions

Six existing Task 4 collision classes are carried forward unchanged:

- C012 — PIKAN / KAN-PINN / Physics-KAN;
- C013 — PI-LSTM / PILSTM / LSTM-PINN / PI-RNN / PIRNN / recurrent PINN;
- C014 — PINO / PI-DeepONet / PINN-DeepONet / PI-FNO / DeepONet;
- C016 — PI-GAN / PIGAN / GAN-PINN / PIG-GAN;
- C017 — PI-VAE / PIVAE;
- C018 — PI-CNN / PICNN / CNN-PINN / PIDCNN / PiCNN.

No collision is force-resolved.

Four Task 5.3 governed-review flags are retained:

1. **GR-5.3-001 — `DARTS-PINN`, Atlas 247.** Task 4 historical disposition is preserved; primary-source review must determine architecture-search versus final-architecture versus paper-specific-method semantics.
2. **GR-5.3-002 — `AutoPINN`, Atlas 383.** Lexical `Auto` does not prove autoencoder, NAS or generic automation.
3. **GR-5.3-003 — `attention-based PINN`, Atlas 794.** Attention does not prove Transformer architecture.
4. **GR-5.3-004 — `CNN-PINN-DRL`, Atlas 695.** The name spans architecture and RL-learning semantics; decomposition requires primary-source verification.

These records do not rewrite Task 4 history.

## 12. Cross-dimensional link contract

Task 5.3 defines ten non-authoritative coordination link types:

1. PINN type/family → `uses_architecture` → architecture concept;
2. model/component → `represented_through` → representation record or governed latent relation;
3. model/component → `configured_by` → network configuration;
4. model system → `uses_learning_paradigm` → Task 5.2B facet;
5. coupled model/operator → `integrated_via` → Task 5.2 facet;
6. model system → `has_composition_pattern` → composition concept;
7. search process → `selects_or_configures` → candidate/final architecture;
8. compression process → `transforms` → model realization;
9. PINN/method → `specialized_for` → application/equation context;
10. parameter/coefficient field → `represented_by` → dedicated network, reusing locked R-C21 exactly.

None is promoted to the locked relationship registry by Task 5.3.

## 13. Mandatory no-merge rules

The validated machine contract records **35 explicit no-merge rules**. High-risk boundaries include:

- PINN type/family ≠ architecture;
- architecture ≠ network configuration;
- architecture ≠ scientific representation;
- representation ≠ transformation/encoding;
- architecture ≠ learning paradigm;
- RL/DRL ≠ architecture;
- physics-integration mode ≠ architecture;
- training protocol ≠ architecture;
- optimizer ≠ architecture;
- solver coupling ≠ architecture;
- application/equation specialization ≠ architecture;
- attention ≠ Transformer;
- generic recurrent wording ≠ LSTM alias;
- GRU ≠ LSTM;
- CNN ≠ grid/tensor representation;
- GNN ≠ graph representation;
- Transformer ≠ sequential representation;
- GAN ≠ generator backbone and GAN ≠ PINN;
- autoencoder ≠ VAE;
- VAE ≠ GAN;
- diffusion process ≠ backbone;
- ensemble ≠ mixture of experts ≠ generic multi-network;
- multi-output ≠ multi-network;
- neural operator ≠ PINN;
- NAS/HPO ≠ final architecture;
- pruning/quantization/distillation ≠ architecture identity;
- Fourier features ≠ architecture family;
- geometry/constraint representation ≠ neural architecture;
- sinusoidal activation occurrence ≠ SIREN classification;
- terminology occurrence ≠ scientifically verified classification.

## 14. Paper-classification gate

A paper receives an architecture classification only when eligible evidence establishes the actual model structure.

Minimum requirements:

1. preserve exact raw terminology and paper association;
2. treat names/acronyms/title occurrences/review lists as candidate signals only;
3. verify actual model structure from eligible evidence;
4. separate architecture, configuration, representation, activation, transformation, learning, training, solver and application dimensions;
5. for hybrids classify only evidenced component families while preserving compound raw wording;
6. apply collision/no-merge rules before alias normalization;
7. route contradictions to governed review rather than force-fitting;
8. make any new alias, relationship or family placement evidence-backed, explicit, versioned and traceable.

Task 5.3 creates **zero automatic paper assignments**.

## 15. External semantic anchors

External primary/peer-reviewed sources were used to stabilize generic model-family semantics; they do not override locked Atlas evidence and do not create paper assignments.

The checked semantic anchors include:

- LeCun et al., 1998 — convolutional neural networks;
- Hochreiter and Schmidhuber, 1997 — LSTM;
- Cho et al., 2014 — GRU;
- Vaswani et al., 2017 — Transformer;
- Scarselli et al., 2009 — graph neural networks;
- Liu et al., arXiv 2024 / ICLR 2025 — KAN;
- Sitzmann et al., 2020 — SIREN;
- Hinton and Salakhutdinov, 2006 — autoencoder/learned code representation;
- Kingma and Welling, 2014 — VAE;
- Goodfellow et al., 2014 — GAN;
- Ho et al., 2020 — diffusion probabilistic models;
- Jacobs et al., 1991 — mixture of experts;
- Lu et al., 2021 — DeepONet;
- Kovachki et al., 2023 — neural operator;
- Chen et al., 2018 — Neural ODE;
- Liu et al., 2019 — DARTS architecture search.

The external set is a semantic cross-check, not an exhaustive architecture bibliography.

## 16. Machine-readable result and validation

The coordination taxonomy is serialized in:

`atlas-model-representation-coupled-ml-taxonomy-spec.json`

Validated version: `task-5.3-v1.0.1`.

The specification contains:

- **6** facets;
- **13** architecture nodes;
- **8** representation nodes;
- **8** organization/composition nodes;
- **6** coupled-method nodes;
- **5** search/compression process nodes;
- **6** carried collision dependencies;
- **4** governed-review flags;
- **10** cross-dimensional link types;
- **35** explicit no-merge rules.

A focused runtime JSON parse and consistency validation was actually executed and returned **0 errors**. GitHub post-write readback confirmed the corrected specification version, ownership/crosswalk values and blob SHA. Full record: `TASK-5.3-MACHINE-READABLE-VALIDATION.md`.

No GitHub Actions/CI run, production deployment or production-page runtime validation is claimed.

## 17. Scientific conclusion

Task 5.3 finds that model architecture cannot be represented scientifically by one flat controlled vocabulary. The appropriate coordination model is faceted:

**PINN family + backbone architecture + composition + scientific representation + learning/integration + coupled external method + training/numerical coupling + application specialization** remain separable and linkable.

The existing L1–L8 architecture, L5 taxonomy/relationship controls, evidence/provenance model and locked v0.7 owners can coordinate this space without immediate schema mutation.

The main unresolved question is structural specialization, not taxonomy existence: whether internal latent semantics, reusable component roles, architecture-search/compression processes, and surrogate/ROM/learned-component system roles should remain dynamic taxonomy/link records or receive specialized future storage. That question belongs to Task 5.4.

## 18. Change boundary

- New locked-v0.7 scientific fields/entities: **0**.
- Automatic canonical ontology promotions: **0**.
- Automatic global alias promotions: **0**.
- Automatic paper-level architecture/method assignments: **0**.
- Locked scientific evidence modified: **0**.
- Production `main` changes from Task 5.3: **0**.
- Computational Resources Stage 1/2/3 changes from Task 5.3: **0**.
- Task 5.4 work performed: **0**.

## 19. Stop boundary

**Task 5.3 is complete. Task 5.4 has not started.**

Exact next substantive roadmap action, only when separately authorized: **Task 5.4 — decide which concepts require specialized structure versus dynamic taxonomy/linking records, using Tasks 5.1–5.3 as controlling inputs.**
