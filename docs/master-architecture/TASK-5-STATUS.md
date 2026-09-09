# Task 5 — Methodological Extensibility Status

Status: **IN PROGRESS — Tasks 5.1–5.2C PASS / COMPLETE; 5.3 NEXT**

Date: 2026-09-09

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

Implementation contract: frozen Master Plan v1.0.

## Current state

- **Task 5.1 — Catalogue existing methodology dimensions: PASS / COMPLETE**
- **Task 5.2 — Define learning/integration-type taxonomy: PASS / COMPLETE**
- **Task 5.2B — General Machine-Learning Learning-Paradigm Taxonomy: PASS / COMPLETE**
- **Task 5.2C — External Methodology Coverage / Gap Audit: PASS / COMPLETE**
- **Task 5.3 — Model / Representation / Coupled-ML Architecture Taxonomy: NEXT / NOT STARTED**
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
- `TASK-5.2B-REFERENCE-AUDIT-AND-MDPI-BIBLIOGRAPHY.md`
- `atlas-learning-paradigm-reference-register.json`

## Task 5.2C artifacts

- `TASK-5.2C-EXTERNAL-METHODOLOGY-COVERAGE-GAP-AUDIT.md`
- `atlas-external-methodology-coverage-gap-audit.json` — non-authoritative machine-readable X→Y→Z audit register
- `TASK-5.2C-REFERENCE-QA-ADDENDUM.md`
- `TASK-5.2C-MACHINE-READABLE-VALIDATION.md` — runtime syntax/consistency validation record

## Task 5.1 result

Task 5.1 inventoried the existing methodology model before extensibility redesign. It accounts for all 25 methodology-dimension labels already named in locked v0.7 Controlled Vocabularies; the complete PP-08 methodology/data ownership surface; structured subdimensions; the consolidated training protocol; physical-constraint and reproducibility boundaries; and composite/deferred dimensions.

Task 5.1 created **no new scientific fields, entities, canonical terms or relationships**.

## Task 5.2 result

Task 5.2 defines the physics/knowledge learning-integration system as a **faceted governed taxonomy graph**, not a replacement field and not a second PINN-type hierarchy. It separates physics incorporation, transfer/reuse/adaptation, multi-source/multi-fidelity integration, and operator/solver integration while preserving existing locked owners and no-merge boundaries.

## Task 5.2B result

Task 5.2B used authoritative external terminology and peer-reviewed taxonomy/review literature rather than flat internet lists. It defines **ten orthogonal general-learning facets**: supervision/feedback; label availability/acquisition; learning/update regime; adaptation/reuse; target-support/sample-scarcity; task organization; distributed/collaborative learning; model combination/ensemble; statistical learning character; and inference/generalization regime.

These are facets, not mutually exclusive global classes. Task 5.2B therefore forbids a single scalar `learning_type` as the architectural solution and creates no generic locked-v0.7 learning field.

## Task 5.2C result

Task 5.2C executed the broader external methodology-comprehensiveness audit using the mandatory **X → Y → Z** protocol:

- **X:** all 37 Task 5.1 internal methodology dimensions;
- **Y:** 16 externally researched methodological search axes covering general learning, architecture, prior/domain knowledge, formulation/enforcement, objective/loss, optimization/training, sampling/data acquisition, differentiation/operator evaluation, transformations/encodings, decomposition/distributed execution, transfer/multi-fidelity, UQ, operator/surrogate/solver coupling, lifecycle/deployment/reproducibility, task/data modality/system role, and emerging/cross-cutting methods;
- **Z:** a final coverage/disposition matrix.

Hard-gate result:

- **37/37** internal dimensions map to at least one external-search axis;
- **37/37** internal dimensions have an explicit final matrix disposition;
- **15/15** materially new or externally emphasized dimensions discovered during the audit have explicit dispositions.

The main externally emphasized gaps are **semantic/taxonomic coordination gaps rather than a foundational schema failure**. Important cross-cutting dimensions include:

1. general learning paradigms — already formalized in 5.2B;
2. prior/domain-knowledge source;
3. knowledge representation;
4. knowledge-integration locus;
5. distributed-learning topology/aggregation/partition, distinct from compute parallelism;
6. model lifecycle/deployment/inference organization;
7. model compression/efficiency transformations;
8. automated architecture/hyperparameter search;
9. data modality/structural form;
10. ML task/output type/system role;
11. neuro-symbolic/differentiable-programming integration;
12. robustness/privacy/security/fairness-aware learning techniques;
13. model combination/mixture and ensemble organization;
14. representation-learning/latent-representation objective;
15. surrogate/reduced-order/learned-model role.

No discovered external dimension was ignored merely because it was absent from X.

### Machine-readable validation

A focused runtime validation of `atlas-external-methodology-coverage-gap-audit.json` was executed after Task 5.2C. Result: **PASS with 0 validation errors**.

Verified conditions include valid JSON syntax; required top-level keys; unique `Y01`–`Y16`, `MDC-01`–`MDC-37` and `EX-01`–`EX-15` identifiers; 37/37 internal Y mappings; 15/15 external dispositions; valid declared coverage states; unique source-registry IDs; safety/authority flags remaining false; recomputed acceptance counts matching the human audit; and `task_5_3_started=false`.

No defect required modification of the JSON artifact. The complete validation record is `TASK-5.2C-MACHINE-READABLE-VALIDATION.md`.

### Structural conclusion

The audit did **not** identify evidence requiring Tasks 1–4 to be reopened or the locked v0.7 schema to be mutated immediately. Existing L1–L8 architecture, evidence/provenance, L5 dynamic taxonomy, typed relations and governed extension rules can accommodate the discovered space while Task 5.4 later decides whether recurrent evidence justifies specialized storage.

Thus:

- architecture comprehensiveness is supported;
- vocabulary exhaustiveness is **not** claimed;
- taxonomy/detail expansion remains evidence-driven;
- no field is added merely because an external taxonomy contains a term.

### Full-text refinements from the curated `Taxonomy resources` folder

The 21-item Drive resource folder was incorporated as a full-text evidence workspace. Four important refinements are preserved:

1. **Weak supervision / semi-supervised learning:** some authoritative taxonomies place semi-supervised learning inside a broader weak-supervision landscape. Atlas must therefore preserve source-specific hierarchy/context rather than assert universal equivalence or universal disjointness.
2. **Multi-task learning:** multiple loss components do not automatically prove MTL; explicit source formulation and task semantics can support a paper-scoped MTL assignment, as in AW-EL-PINNs.
3. **Domain adaptation:** source taxonomies may treat domain adaptation as a transfer-learning subtype and distinguish sample-, feature- and inference-based approaches; Atlas must preserve source framing rather than force one universal hierarchy.
4. **Federated/distributed learning:** learning organization, topology/aggregation/partition and compute parallelism are separate semantic axes.

These refine prior coordination rules without silently rewriting source evidence or historical decisions.

### Paper Profile consequence

PP-08 Methodology may later expose evidence-backed derived facets for learning paradigm, prior/domain-knowledge source and representation, knowledge-integration locus, architecture/model family, and distributed-learning organization. No scalar `learning_type` and no locked-v0.7 Paper Profile/schema mutation is authorized.

### Task 5.3 consequence

Task 5.3 can now begin as **Model / Representation / Coupled-ML Architecture Taxonomy**. It must preserve these boundaries:

- architecture family ≠ network configuration;
- architecture ≠ learning paradigm;
- architecture ≠ statistical learning character;
- architecture ≠ computational task/output type;
- latent/generative objective ≠ architecture automatically;
- neural operator ≠ PINN automatically;
- ensemble/mixture-of-experts/multi-network composition require typed composition semantics;
- compression/NAS/HPO describe transformation/search processes, not necessarily final architecture identity.

## Evidence basis

Task 5.2C used authoritative/publisher-verified external evidence plus the curated Drive full texts. The principal evidence set includes peer-reviewed work on general ML paradigms, informed machine learning, physics-informed machine learning, edge/distributed ML, weak supervision, meta-learning, domain adaptation, multi-task learning, decentralized federated PINNs, PINN optimization/training pathologies and multi-fidelity PINNs. The human Task 5.2C audit contains a checked MDPI-style reference list with DOI information.

General web pages and AI/checklist files were used only for terminology discovery and were not treated as scientific authority.

## Governing revision rule

Later authoritative external research, Task 5.3–5.5 findings or primary-source evidence may revise candidate dimensions, normalization, relationships, applicability or structural-promotion judgments. Any correction must be explicit, evidence-backed, versioned and history-preserving. Raw wording, locators, prior decisions, contradictions and deferred/rejected alternatives must remain traceable.

## Change boundary

- New locked-v0.7 scientific fields/entities: **0**.
- Automatic canonical ontology promotions: **0**.
- Automatic paper-level methodology/learning assignments: **0**.
- Tasks 1–4 reopened: **0**.
- Task 5.3 architecture taxonomy work performed: **0**.
- Production `main` changes: **0**.
- Computational Resources Stage 1/2/3 changes: **0**.

## Stop boundary

**Task 5.3 was not started by Task 5.2C or its machine-readable validation.**

Exact next action, only when separately authorized: **Task 5.3 — define the Model / Representation / Coupled-ML Architecture Taxonomy using Task 5.2C as a controlling coverage input.**
