# Stage 2 B009 Checkpoint 03 Deferred and Qualified Findings

Verification date: 2026-08-28

B009 checkpoint 03 produced no new scientifically consequential ambiguity and no new ordinary manual-review item. PRL000079 through PRL000083 are verified from the primary Atlas review paper. The following identity and technical findings are resolved for Stage 2 and remain bounded Stage-3 work where noted.

| Resource | Result | Status |
|---|---|---|
| CR000223 | The official Modulus URL redirects to PhysicsNeMo. Its current official page links `NVIDIA/physicsnemo`, pinned at `65ec388929884436051203bca9dfb912eabd4c18`, with Apache-2.0, citation and dependency metadata, documentation, and extensive heterogeneous example/test/reference/model assets. | Product continuity resolved via VA000037; PRL000079 to paper 367 verified. Component/example normalization, asset inspection, execution, and reproducibility testing remain Stage 3. |
| CR000224 | `sciann/sciann` is a one-README pointer to `ehsanhaghighat/sciann`, already verified as canonical CR000062. | VA000038 preserves the Stage-1 pointer; PRL000080 to paper 367 is verified with canonical-resource provenance. Canonical metadata are not duplicated. |
| CR000225 | The Stage-1 NeuroDiffEq path remains unavailable. Accepted VA000002 maps it to canonical CR000137, and paper 367 explicitly describes NeuroDiffEq. | PRL000081 verified with canonical-resource provenance; the accepted pilot resource is reused without reprocessing or metadata duplication. |
| CR000226 | The Stage-1 `analysis-bear/PyDEns` path is unavailable. Canonical CR000057 matches the PyDEns project identity and paper citation, while paper 367 explicitly describes the solver. | VA000039 resolves the alias and PRL000082 is verified; canonical metadata remain on CR000057. |
| CR000227 | NeuralPDE.jl is an MIT-licensed SciML PINN solver with DOI `10.48550/arXiv.2107.09443`, Julia dependency declarations, extensive documentation examples, and tests but no bundled research dataset. | PRL000083 to paper 367 verified. Dependency normalization, example/test execution, and reproducibility testing remain Stage 3. |

Paper 367's internal references 123, 55, 28, 84, and 137 remain source provenance only and are not promoted to Atlas IDs. These qualified findings do not constitute Stage-2 verification failures. B009 remains in progress and the next resource is CR000228.
