# Computational Resources Stage 3 — Progress

Status date: 2026-08-31

| Field | Value |
|---|---|
| Stage-3 phase | Pilot scientifically accepted; controlled scale-out planning authorized |
| Current checkpoint | Stage3-A01 |
| Pilot extraction checkpoint | Stage3-P07 |
| Last completed resource | CR000091 |
| Next resource | None — define controlled scale-out plan before further extraction |
| Completed Stage-3 resource count | 10 |
| Remaining Stage-3 registry resource count | 354 |
| Approved pilot resources completed | 10 / 10 |
| Completed experiment count | 23 |
| Completed configuration count | 83 |
| Technical evidence records | 131 |
| Static reproducibility assessments | 10 |
| Current QA status | PASS |
| Current unresolved technical item count | 23 |
| Current conflicting-evidence finding count | 3 |
| Methodology status | Stage3-D01 accepted without schema change |
| Acceptance record | `reports/stage-3-pilot-acceptance.md` |

## Scientific acceptance

The ten-resource Stage3-D01 pilot has been scientifically accepted. The existing resource → experiment → configuration hierarchy, technical-evidence model, static reproducibility gates R0–R4, bounded-inspection rules, and current Stage-3 schemas are approved for controlled scale-out.

The acceptance is based on the completed pilot QA and acceptance-test matrix. No schema family or ontology revision is required before scale-out.

## Accepted operational interpretations

1. **Archive-equivalent release evidence:** a repository release may support static technical extraction when DOI/paper/release lineage is strong, but the DOI/archive remains the authoritative CR identity and byte equivalence is not claimed without direct comparison.
2. **Missing imported dependency:** a runtime dependency imported by the software but absent from the declared environment manifest is a critical reproducibility gap and blocks R4.
3. **Configuration-scoped conflicts:** a paper/code conflict affecting one configuration remains scoped to that configuration unless evidence demonstrates broader propagation; unrelated configurations are assessed independently.

## Completed pilot state

The accepted pilot covers ten heterogeneous resources spanning PINN implementations, a PINN framework/library, physics-informed operator learning, a supporting scientific-ML library, non-PINN research code, a differentiable simulator/solver, a scientific dataset, and a DOI-delivered software archive.

The pilot demonstrated that the Stage3-D01 model can represent zero or multiple experiments, zero or multiple configurations, paper-supported and repository-only experiments, source conflicts, missing dependencies, dataset consumer relationships, archive-equivalent evidence, and differentiated R1–R4 reproducibility classifications without schema proliferation.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. Stage 3 remains static-only: no scientific resource, environment, dependency, notebook, training process, inference workflow, solver, dataset payload, checkpoint, or model is executed. R5 remains prohibited.

## Next action

Define the **controlled Stage-3 scale-out plan** before extracting any additional resource. The plan must specify ordering, checkpoint/batch size, continuation rules, QA gates, and how the existing unresolved register will be maintained. After that plan is recorded, extraction may resume using the accepted Stage3-D01 methodology.
