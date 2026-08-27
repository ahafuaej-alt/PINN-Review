# Stage 2 B008 Checkpoint 05 Deferred and Qualified Findings

Verification date: 2026-08-28

B008 checkpoint 05 produced no new scientifically consequential ambiguity and no new ordinary manual-review item. The following findings are resolved for Stage 2 and remain bounded Stage-3 work where noted.

| Resource | Result | Status |
|---|---|---|
| CR000208 | GitHub identifies the tutorial repository as a distinct fork of CR000202 with immutable repository ID 574269713 versus upstream ID 477501518; the pinned fork has bundled Burgers/Euler MAT tutorial data but no license, project self-citation metadata, or formal manifest. | Possible-alias candidate resolved via VA000034; preserve CR000208, and defer notebook/dependency/data inspection and execution to Stage 3. |
| CR000209 | Extended physics-informed operator repository links training/evaluation data through Google Drive while bundling problem notebooks and `Posting.zip`; no repository license, project citation metadata, or formal dependency manifest was identified. | External-data and archive boundary recorded without download/unpacking; dependency normalization, archive inspection, execution, and reproducibility testing remain Stage 3 work. |
| CR000210 | FEniCS is an aggregate FEniCS/FEniCSx finite-element software platform. PRL000321 is verified for paper 836 through the cited simcardems title explicitly naming FEniCS; Stage-1 Atlas ID 752 has no PRL. Current FEniCSx comprises multiple components rather than one site-level package/license. | Preserve the verified paper-software mention only for PRL000321; do not invent a paper-752 link or single aggregate SPDX license. Component-level license/dependency normalization remains Stage 3 work. |
| CR000211 | PhiFlow is an MIT-licensed differentiable simulation framework with setup metadata, a PhiML submodule, citation metadata, docs, and demos. README references external public datasets created with PhiFlow rather than bundling those datasets. | Stage-2 identity/license/dependency/citation/data boundary verified; backend/submodule normalization, execution, and reproducibility testing remain Stage 3 work. |
| CR000212 | Stage-1 `yuanming-hu/difftaichi` permanently moved to `taichi-dev/difftaichi` under the same immutable GitHub repository ID 225531542. The pinned examples repository has citation metadata and `requirements.txt` but no repository license or standalone research dataset. | Repository transfer resolved via VA000035 without changing CR identity; do not inherit a Taichi license. Dependency normalization, execution, and reproducibility testing remain Stage 3 work. |

These qualified findings do not constitute Stage-2 verification failures. B008 is complete and the next resource is CR000213 in B009.
