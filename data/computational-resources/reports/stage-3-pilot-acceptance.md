# Computational Resources Stage 3 — Pilot Scientific Acceptance

Acceptance date: 2026-08-31

## Decision

The ten-resource Stage3-D01 pilot is **scientifically accepted**.

The existing Stage3-D01 methodology and Stage-3 schemas are approved for controlled scale-out without schema modification.

Accepted methodology components include:

- the resource → experiment → configuration hierarchy;
- technical-evidence records with source-scoped claims;
- explicit `verified`, `documented`, `partially_verified`, `unknown`, `not_available`, `not_applicable`, and `conflicting_evidence` states;
- confidence and source-relation semantics;
- static reproducibility levels R0–R4;
- prohibition of R5 in Stage 3;
- bounded static inspection without execution;
- preservation of Stage-2 pinned identities and relationships;
- configuration-specific conflict handling;
- dataset/product and archive-specific evidence boundaries.

## Accepted operational interpretations

### 1. Archive-equivalent repository releases

An archive-equivalent repository release may support static technical extraction when DOI/paper/release lineage is strong. The DOI/archive remains the authoritative computational-resource identity. Byte-for-byte equivalence must not be claimed unless the original archive payload and the repository release are directly compared.

### 2. Missing imported dependency blocks R4

If a runtime dependency is imported by the software but is absent from the declared environment/dependency manifest, the static environment is incomplete. This is a critical reproducibility gap and blocks R4 even when archived successful outputs or trained models are available.

### 3. Configuration-scoped conflicts remain configuration-scoped

A paper/code conflict affecting one configuration is attached to that configuration unless evidence shows that the defect propagates further. It does not automatically lower the reproducibility classification of unrelated configurations or the entire resource.

## Pilot basis

The accepted pilot contains:

- 10 resources;
- 23 experiments;
- 83 configurations;
- 131 technical-evidence records;
- 10 static reproducibility assessments;
- 23 bounded unresolved technical findings;
- 3 explicit conflicting-evidence findings;
- QA status: PASS.

The pilot covered PINN implementations, a PINN framework/library, physics-informed operator learning, a supporting scientific-ML library, non-PINN research code, a differentiable simulator/solver, a scientific dataset, and a DOI-delivered software archive.

## Scale-out authorization boundary

Scientific acceptance authorizes **controlled Stage-3 scale-out planning and subsequent checkpointed extraction using the accepted methodology**.

It does not authorize reopening Stage 1 or Stage 2, modifying public Atlas/site files, modifying `05-curated/`, executing scientific workloads, or assigning R5.

Before the first scale-out extraction checkpoint, define and record the scale-out ordering and checkpoint/batch policy. Continue to use small, independently QA-validated commits and preserve the same static-only evidence discipline.
