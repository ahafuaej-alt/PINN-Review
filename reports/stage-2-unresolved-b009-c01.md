# Stage 2 B009 Checkpoint 01 Deferred and Qualified Findings

Verification date: 2026-08-28

B009 checkpoint 01 produced no new scientifically consequential ambiguity and no new ordinary manual-review item. The following findings are resolved for Stage 2 and remain bounded Stage-3 work where noted.

| Resource | Result | Status |
|---|---|---|
| CR000213 | The Stage-1 `google/jax-md` path permanently moved to `jax-md/jax-md` under immutable repository ID 186495365. The pinned library has Apache-2.0 licensing, citation/software-DOI metadata, `pyproject.toml`, documentation, and heterogeneous example/test/model assets. | Repository transfer resolved via VA000036 without changing CR identity; dependency-group and bundled-asset normalization and execution remain Stage 3 work. |
| CR000214 | TensorFlowFoam is MIT-licensed TensorFlow 1.15/OpenFOAM 5.0 integration software with citation metadata, a requirements freeze, OpenFOAM cases, CSV data, graph/model artifacts, logs, compiled objects, and archives. | Stage-2 identity/license/dependency/citation/data boundary verified without execution or archive unpacking; compatibility, archive inspection, environment recreation, and reproducibility testing remain Stage 3 work. |
| CR000215 | The SciML site represents an aggregate ecosystem of component packages. The official website source is MIT-licensed and has its own Franklin build manifest, while the citing page requires component-specific citations. | Do not propagate the website-source license, build manifest, or one citation DOI across the ecosystem; component-level normalization remains Stage 3 work. |
| CR000216 | The gradSim project page has CC-BY-4.0 website content and directly links its ICLR paper and code. The linked code has setup/dependency evidence and example/paper assets but no root license; setup.py contains inconsistent placeholder/classifier license signals and the bundled DFlex component has a separate license. | Preserve website-content licensing separately and do not infer a repository-level code SPDX value. Linked-code dependency, asset, execution, and reproducibility work remain Stage 3. |
| CR000217 | JAX-Fluids is a differentiable CFD solver whose exact repository files establish GPL-3.0-only despite API `NOASSERTION`. It has two framework-paper DOIs, package/documentation manifests, examples, reference curves, and sample HDF5 input. | Stage-2 identity/license/dependency/citation/data boundary verified; dependency-version and example/reference-data normalization and execution remain Stage 3 work. |

These qualified findings do not constitute Stage-2 verification failures. B009 remains in progress and the next resource is CR000218.
