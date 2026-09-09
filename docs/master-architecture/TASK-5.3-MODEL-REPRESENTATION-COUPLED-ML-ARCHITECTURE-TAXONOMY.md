# Task 5.3 — Model / Representation / Coupled-ML Architecture Taxonomy

Status: **PASS / COMPLETE**

Date: 2026-09-09

Branch: `docs/master-atlas-roadmap`

Starting branch head: `ddae939478930ea166f2e7ff8a03ec0329c5cbf8`

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

This document is a **non-authoritative architecture/taxonomy coordination artifact**. It does not modify locked v0.7 scientific records, create a second PINN-type hierarchy, promote new canonical ontology terms, or create paper-level architecture assignments.

## 1. Task boundary

Task 5.3 resolves the architecture-side methodological gap identified by Tasks 5.1–5.2C. The purpose is not to enumerate every neural-network or machine-learning method. The purpose is to define scientifically defensible semantic boundaries so that future Atlas records can distinguish model architecture, scientific representation, model composition, external/coupled ML methods and architecture-lifecycle processes without corrupting PINN-family, learning, training, numerical-coupling or application semantics.

The task remains inside the frozen architecture/governance system:

- L1–L8 conceptual architecture;
- G1–G14 governance;
- R1–R48 non-negotiable scientific rules;
- X1–X9 controlled dynamic-extension lifecycle;
- H1–H11 operational acceptance gates.

Task 5.4 is **not** started here. Any question about whether a recurring concept deserves specialized future structure is passed forward explicitly to Task 5.4.

## 2. Sources inspected

The readback covered the following controlling sources before any Task 5.3 change.

### 2.1 GitHub roadmap and Task 5 chain

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

The current `/architectures/` page is a production-surface **scaffold**, not a verified scientific classifier. Its wording therefore provides implementation context, not scientific authority.

## 3. Controlling ownership boundaries

Task 5.3 preserves the following owners exactly.

| Scientific dimension | Controlling owner | Task 5.3 rule |
|---|---|---|
| PINN type/family | Task 4 / L4-P8 | Reference only; no second PINN hierarchy |
| Neural/model architecture | MDC-01 / `PINN_architecture[]` | Architecture-family coordination |
| Model-variable representation | MDC-02 / `model_variable_representation[]` | Scientific representation only |
| Network configuration | MDC-03 / `network_configuration[]` | Depth, width, branch/subnetwork count and sharing do not become architecture families |
| Physics/knowledge integration | Task 5.2 | Cross-reference only |
| General ML learning paradigm | Task 5.2B | Cross-reference only |
| Training protocol | MDC-15 / `training_protocol[]` | Never architecture by default |
| Numerical/solver coupling | Task 5.2 F4 and related methodology owners | Coupling, not backbone |
| Application/equation specialization | Task 4 specialization relations and application/problem/task owners | Never architecture identity by name alone |

This means the locked field name `PINN_architecture[]` remains the current storage owner for evidence-supported architecture terms, but Task 5.3 does **not** use that field name to collapse PINN family, backbone, representation, composition or learning mode into one concept.

## 4. Six-facet architecture coordination model

A flat list is scientifically insufficient. Task 5.3 therefore defines six orthogonal coordination facets.

### MRF-01 — Backbone model architecture

A reusable structural model family defining the connectivity/operator form of the learned approximator. Paper assignment requires explicit primary-source naming or unambiguous implementation evidence.

Examples investigated: dense feed-forward/MLP, CNN, recurrent/RNN, LSTM, GRU, Transformer, GNN/GCN, KAN, RBF networks, SIREN-like architectures and existing source-supported Atlas architecture concepts.

### MRF-02 — Model composition pattern

How multiple learned components are organized. Examples include encoder–decoder, generator–discriminator, mixture of experts, ensemble and role-specific multi-network systems.

Composition is not inferred from `subnetwork_count`, branch count or a plural network label. Component roles and coupling must be evidenced.

### MRF-03 — Scientific representation choice

The scientific form represented at model inputs, outputs or latent interfaces: coordinate, grid/tensor, sequence, graph, function-valued or latent/code representations, for example.

This facet remains owned by `model_variable_representation[]`. Representation does not automatically determine architecture: graph data do not prove GNN use, sequence data do not prove an RNN/LSTM/Transformer, and gridded fields do not prove a CNN.

### MRF-04 — Generative or latent model system

Some named model families cannot be represented faithfully as one backbone node. Autoencoders, VAEs, GANs and diffusion models combine composition, representation, objectives and/or statistical/inference semantics.

Task 5.3 therefore treats them as **multi-axis model-system patterns**, not as simple interchangeable architecture labels.

### MRF-05 — Coupled external ML or operator method

External learned models or ML methods may be coupled to a PINN/physics-informed workflow while retaining their own identity. Neural operators, learned differential operators, Neural ODE-like components and symbolic-neural components fall under this coordination facet when supported.

A coupled model does not become a PINN by adjacency.

### MRF-06 — Architecture lifecycle/search/transformation process

NAS/HPO, pruning, quantization and distillation describe search, selection, transformation, transfer or deployment processes. They do not by themselves define the final architecture identity.

This facet is carried to Task 5.4 because locked v0.7 does not currently have one dedicated owner for every lifecycle process discovered by Task 5.2C.

## 5. Backbone-family decisions

The following are **coordination concepts**, not new locked-v0.7 ontology promotions.

| Family | Task 5.3 disposition | Atlas consequence |
|---|---|---|
| Dense feed-forward / MLP | Backbone family concept | Do not infer from generic `DNN` alone |
| CNN | Backbone family concept | Convolution-related Atlas acronyms remain collision/paper scoped until verified |
| Recurrent neural network | Backbone family umbrella | PI-RNN/PIRNN/recurrent-PINN wording is not a global alias set |
| LSTM | Recurrent subfamily | Related to RNN but not equivalent to generic recurrent wording |
| GRU | Recurrent subfamily | Investigated because roadmap named it; Task 5.3 found no verified Atlas paper assignment and creates none |
| Transformer | Backbone family | Attention mechanism alone is insufficient to classify a Transformer |
| GNN | Backbone family | Graph representation alone is insufficient |
| GCN | GNN subtype | `GCN-PINN` occurrence remains primary-source dependent |
| KAN | Backbone family | Shared KAN ancestry does not make PIKAN/KAN-PINN/Physics-KAN aliases |
| PIKAN | Existing locked v0.7 architecture concept, Atlas 150 | Preserved; no new promotion or PINN-type recasting |
| Stacked residual PINN architecture | Existing locked v0.7 architecture concept, Atlas 238 | Preserved; no universal benefit claim |
| RBF neural network | Atlas architecture candidate | Primary-source verification required for paper mappings |
| SIREN | Atlas architecture candidate | Sinusoidal activation alone does not prove SIREN architecture |
| GPT-PINN network-as-activation architecture | Existing locked provisional/source-specific concept | Remains provisional/source-specific pending independent recurrence |

The taxonomy is deliberately extensible. It does not claim these 14 entries exhaust model architectures relevant to PINNs.

## 6. Generative, latent and composition decisions

### 6.1 Autoencoder

An autoencoder is represented as an encoder–decoder model system with a reconstruction/representation-learning objective. It is **not** reduced to one generic backbone family. The encoder and decoder may themselves use different backbone architectures.

### 6.2 Variational autoencoder

A VAE adds probabilistic latent-variable and inference semantics to an autoencoding model system. `PI-VAE` and `PIVAE` remain governed by collision C017: possible source-scoped orthographic equivalence does not authorize a global alias.

### 6.3 GAN

A GAN is represented as generator–discriminator composition plus an adversarial objective. Generator/discriminator backbones remain separately classifiable. Collision C016 is retained: `PI-GAN`, `PIGAN`, `GAN-PINN` and `PIG-GAN` are not automatic aliases, and exact PINN/generative integration must remain source-scoped.

### 6.4 Diffusion models

Diffusion models are treated as a generative training/inference process with a separately classifiable model backbone. The word `diffusion` therefore does not become an architecture-family assignment automatically.

### 6.5 Ensemble, mixture of experts and multi-network systems

These are deliberately separated:

- **ensemble**: model-combination semantics; primary general-learning owner remains Task 5.2B;
- **mixture of experts**: experts plus a routing/gating mechanism;
- **role-specific multi-network**: multiple learned components with explicit scientific roles.

None is equivalent to the others. `subnetwork_count > 1` is not enough to classify any of them.

Locked relation R-C21 is retained exactly: an unknown parameter/coefficient field may be represented by a dedicated parameter/coefficient network. That relation does **not** imply a generic `multi-network PINN` architecture class.

## 7. Representation decisions

Task 5.3 establishes the following coordination semantics without adding locked controlled-vocabulary values:

- coordinate / independent-variable representation;
- grid/tensor field representation;
- sequential/temporal representation;
- graph-structured representation;
- function-valued input/output representation;
- latent/code representation.

Two important negative placements are explicit:

1. **Fourier features** remain a transformation/encoding concern under MDC-29 unless evidence demonstrates a separate architecture identity. Raw `Fourier Feature PINN` terminology is not enough to create one.
2. **phi-functions, R-functions and TFC geometry/constraint representations** remain geometry/constraint representation concepts, not neural/model architecture.

## 8. Coupled-method decisions

### 8.1 Neural operators

Neural operators retain their own operator-learning identity. Locked R-C03 remains controlling: a neural operator learns an operator between function spaces / a solution operator. Collision C014 is preserved for `PINO`, `PI-DeepONet`, `PINN-DeepONet`, `PI-FNO` and `DeepONet`.

Therefore:

`neural operator ≠ PINN` and `DeepONet/FNO ≠ PINN alias`.

A physics-informed neural operator may have an evidence-backed physics-integration relation, but that does not erase operator identity.

### 8.2 Learned differential/operator evaluators

The locked learned-differential-operator concept remains differentiation/operator-evaluation methodology unless a source independently establishes a model-architecture role.

### 8.3 Reinforcement learning

Reinforcement learning remains a Task 5.2B **learning/decision/control paradigm**, not a neural architecture. A deep-RL workflow must classify its policy/value/function-approximator architecture separately when evidence supports it.

Consequently, `CNN-PINN-DRL` cannot be normalized into one architecture class merely from the compound label.

### 8.4 Numerical solvers

Classical numerical/solver coupling remains Task 5.2 F4 integration semantics, not an external ML architecture.

### 8.5 Neural ODE and symbolic-neural candidates

Current raw Atlas terms such as `PiNODE (NeuralODE with PINN)` and `SyCo-PINN (Symbolic-Neural Collaboration PINN)` are useful discovery evidence but remain source-local/candidate evidence. Task 5.3 creates no global family assignment from them.

## 9. Search/compression decisions

The 5.2C gaps around NAS/HPO and model efficiency are resolved semantically without premature schema promotion:

- neural architecture search / DARTS-like search → architecture-search process;
- hyperparameter optimization → search process;
- pruning → compression/transformation process;
- quantization → compression/deployment transformation;
- knowledge distillation → training/model-transfer/compression process.

The final selected architecture, teacher architecture and student architecture remain separately represented when evidence exists.

## 10. Collision and governed-review decisions

Six existing Task 4 collision classes are carried forward unchanged:

- C012 — PIKAN / KAN-PINN / Physics-KAN;
- C013 — PI-LSTM / PILSTM / LSTM-PINN / PI-RNN / PIRNN / recurrent PINN;
- C014 — PINO / PI-DeepONet / PINN-DeepONet / PI-FNO / DeepONet;
- C016 — PI-GAN / PIGAN / GAN-PINN / PIG-GAN;
- C017 — PI-VAE / PIVAE;
- C018 — PI-CNN / PICNN / CNN-PINN / PIDCNN / PiCNN.

No collision is force-resolved.

Four Task 5.3 governed-review flags are registered:

1. **GR-5.3-001 — `DARTS-PINN`, Atlas 247.** Task 4 currently preserves it as a likely PINN-variant candidate needing primary-source verification, while DARTS terminology ordinarily denotes architecture search. Task 5.3 does not overwrite the historical disposition. The primary source must determine whether the paper names a final architecture, a search process or a paper-specific method.
2. **GR-5.3-002 — `AutoPINN`, Atlas 383.** `Auto` must not be interpreted as autoencoder, architecture search or generic automation without evidence.
3. **GR-5.3-003 — `attention-based PINN`, Atlas 794.** Attention does not establish Transformer architecture.
4. **GR-5.3-004 — `CNN-PINN-DRL`, Atlas 695.** The label spans CNN architecture and deep-RL learning paradigm; it must be decomposed across dimensions after primary-source verification.

These flags are coordination records only. They do not modify historical Task 4 decisions.

## 11. Cross-dimensional link contract

Task 5.3 permits ten typed coordination links. None is promoted to the locked relationship registry by this task.

| ID | Coordination link | Rule |
|---|---|---|
| XDL-01 | PINN type/family → uses architecture → architecture concept | Reuse Task 4 coordination semantics; evidence required |
| XDL-02 | architecture/model component → represented through → scientific representation record | Evidence required; no `is_a` implication |
| XDL-03 | architecture/model component → configured by → network-configuration record | Record association only |
| XDL-04 | model system → uses learning paradigm → Task 5.2B facet value | Cross-reference only |
| XDL-05 | coupled model/operator → integrated via → Task 5.2 integration facet | Cross-reference only |
| XDL-06 | model system → has composition pattern → composition concept | Coordination only pending Task 5.4 |
| XDL-07 | search process → selects/configures → candidate/final architecture | Process ≠ architecture |
| XDL-08 | compression/transformation → transforms → model realization | Process ≠ architecture |
| XDL-09 | PINN/method → specialized for → application/equation context | Reuse Task 4 specialization semantics |
| XDL-10 | parameter/coefficient field → represented by → dedicated parameter/coefficient network | Reuse locked R-C21 exactly |

Any paper-level use of these links requires evidence and provenance. A link cannot be inferred from name co-occurrence.

## 12. Mandatory no-merge rules

The machine-readable specification records 34 no-merge rules. The highest-risk rules are:

- PINN type/family ≠ neural/model architecture;
- architecture ≠ network configuration;
- architecture ≠ scientific representation;
- representation ≠ feature transformation;
- architecture ≠ learning paradigm;
- reinforcement learning ≠ architecture;
- physics-integration mode ≠ architecture;
- training protocol ≠ architecture;
- numerical-solver coupling ≠ architecture;
- application/equation specialization ≠ architecture;
- attention mechanism ≠ Transformer;
- LSTM ≠ generic RNN alias and GRU ≠ LSTM;
- CNN ≠ gridded/tensor representation;
- GNN ≠ graph representation;
- GAN ≠ generator backbone and GAN ≠ PINN;
- autoencoder ≠ VAE and VAE ≠ GAN;
- diffusion process ≠ backbone architecture;
- ensemble ≠ MoE ≠ generic multi-network;
- multi-output ≠ multi-network;
- neural operator ≠ PINN;
- NAS/HPO ≠ final architecture;
- pruning/quantization/distillation ≠ architecture identity;
- Fourier-feature encoding ≠ architecture;
- geometry representation ≠ architecture;
- sinusoidal activation ≠ SIREN architecture;
- terminology occurrence ≠ verified classification.

## 13. Evidence basis and external-definition check

Task 5.3 used locked Atlas evidence for Atlas-specific meanings/collisions and external primary literature only to establish generic ML/model-family semantics. Generic model definitions do not create Atlas paper assignments.

External sources checked include:

1. LeCun, Y.; Bottou, L.; Bengio, Y.; Haffner, P. Gradient-Based Learning Applied to Document Recognition. *Proc. IEEE* **1998**, *86*, 2278–2324. DOI: 10.1109/5.726791.
2. Hochreiter, S.; Schmidhuber, J. Long Short-Term Memory. *Neural Comput.* **1997**, *9*, 1735–1780. DOI: 10.1162/neco.1997.9.8.1735.
3. Cho, K.; van Merrienboer, B.; Gulcehre, C.; Bahdanau, D.; Bougares, F.; Schwenk, H.; Bengio, Y. Learning Phrase Representations using RNN Encoder–Decoder for Statistical Machine Translation. **2014**. arXiv:1406.1078.
4. Vaswani, A.; et al. Attention Is All You Need. *NeurIPS* **2017**. arXiv:1706.03762.
5. Scarselli, F.; Gori, M.; Tsoi, A.C.; Hagenbuchner, M.; Monfardini, G. The Graph Neural Network Model. *IEEE Trans. Neural Netw.* **2009**, *20*, 61–80. DOI: 10.1109/TNN.2008.2005605.
6. Liu, Z.; et al. KAN: Kolmogorov-Arnold Networks. **2024**. arXiv:2404.19756.
7. Raissi, M.; Perdikaris, P.; Karniadakis, G.E. Physics-informed neural networks: A deep learning framework for solving forward and inverse problems involving nonlinear partial differential equations. *J. Comput. Phys.* **2019**, *378*, 686–707. DOI: 10.1016/j.jcp.2018.10.045.
8. Hinton, G.E.; Salakhutdinov, R.R. Reducing the Dimensionality of Data with Neural Networks. *Science* **2006**, *313*, 504–507. DOI: 10.1126/science.1127647.
9. Kingma, D.P.; Welling, M. Auto-Encoding Variational Bayes. **2013/2014**. arXiv:1312.6114.
10. Goodfellow, I.J.; et al. Generative Adversarial Nets. *NeurIPS* **2014**. arXiv:1406.2661.
11. Ho, J.; Jain, A.; Abbeel, P. Denoising Diffusion Probabilistic Models. *NeurIPS* **2020**. arXiv:2006.11239.
12. Jacobs, R.A.; Jordan, M.I.; Nowlan, S.J.; Hinton, G.E. Adaptive Mixtures of Local Experts. *Neural Comput.* **1991**, *3*, 79–87. DOI: 10.1162/neco.1991.3.1.79.
13. Lu, L.; Jin, P.; Pang, G.; Zhang, Z.; Karniadakis, G.E. Learning nonlinear operators via DeepONet based on the universal approximation theorem of operators. *Nat. Mach. Intell.* **2021**, *3*, 218–229. DOI: 10.1038/s42256-021-00302-5.
14. Kovachki, N.; Li, Z.; Liu, B.; Azizzadenesheli, K.; Bhattacharya, K.; Stuart, A.; Anandkumar, A. Neural Operator: Learning Maps Between Function Spaces With Applications to PDEs. *J. Mach. Learn. Res.* **2023**, *24*(89), 1–97.
15. Sagi, O.; Rokach, L. Ensemble learning: A survey. *WIREs Data Min. Knowl. Discov.* **2018**, *8*, e1249. DOI: 10.1002/widm.1249. This reference is inherited from the Task 5.2B checked register.

## 14. Machine-readable artifact

The coordination taxonomy is serialized in:

`atlas-model-representation-coupled-ml-taxonomy-spec.json`

The machine artifact contains:

- 6 taxonomy facets;
- 14 backbone/architecture coordination entries;
- 8 composition/generative dispositions;
- 8 representation dispositions;
- 6 coupled-method dispositions;
- 5 search/compression dispositions;
- 6 carried-forward collision decisions;
- 4 governed-review flags;
- 10 typed cross-dimensional coordination links;
- 34 no-merge rules;
- a versioned evidence register and zero-promotion acceptance boundary.

A focused runtime parse/consistency validation is recorded separately in `TASK-5.3-MACHINE-READABLE-VALIDATION.md` after the repository copy is written and re-read.

## 15. Scientific conclusion

Task 5.3 finds that **model architecture cannot be represented scientifically by one flat controlled vocabulary**. The correct coordination model is faceted:

**PINN family + backbone architecture + model composition + scientific representation + learning/integration mode + coupled external method + training/numerical coupling + application specialization** must remain separable and linkable.

This structure is compatible with the existing L1–L8 architecture and the locked v0.7 ownership model. Task 5.3 therefore identifies **no evidence requiring immediate locked-v0.7 schema mutation**.

The principal unresolved structural question is not scientific classification but storage specialization: whether composition patterns, architecture roles and lifecycle/search/compression processes should remain dynamic taxonomy/link records or receive specialized future structure. That decision belongs exclusively to Task 5.4.

## 16. Change boundary

- New locked-v0.7 scientific fields/entities: **0**.
- Automatic canonical ontology promotions: **0**.
- Automatic global alias promotions: **0**.
- Automatic paper-level architecture/method assignments: **0**.
- Locked scientific evidence modified: **0**.
- Production `main` changes: **0**.
- Computational Resources Stage 1/2/3 changes: **0**.
- Task 5.4 work performed: **0**.

## 17. Stop boundary

**Task 5.3 stops here. Task 5.4 has not started.**

Exact next substantive roadmap action: **Task 5.4 — decide which concepts require specialized structure versus dynamic taxonomy/linking records, using Tasks 5.1–5.3 as controlling inputs.**
