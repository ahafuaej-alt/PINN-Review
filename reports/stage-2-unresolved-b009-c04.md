# Stage 2 B009 Checkpoint 04 Deferred and Qualified Findings

Verification date: 2026-08-28

B009 checkpoint 04 produced no new scientifically consequential ambiguity and no new ordinary manual-review item. The following findings are resolved for Stage 2 and remain bounded Stage-3 work where noted.

| Resource | Result | Status |
|---|---|---|
| CR000228 | ADCME.jl is an MIT-licensed general automatic-differentiation/scientific-computing library with physics-constrained learning support, formal Julia dependencies, examples, documentation, and citation arXiv:2011.11955. | Preserve broader `supporting_software_or_library` classification; full Julia/TensorFlow/build dependency normalization and execution remain Stage 3 work. |
| CR000229 | Stage-1 `juanpedro/nangs` is unavailable; pinned package metadata at `juansensio/nangs` establishes the matching Nangs project, Apache-2.0 license, and PyTorch neural-PDE/PINN scope. | URL repaired via VA000040 without changing CR identity; dependency/example normalization and execution remain Stage 3 work. |
| CR000230 | TensorDiffEq is a verified TensorFlow PINN framework with citation arXiv:2103.16034 and multiple environment manifests, but no repository license was identified at the pinned commit. | Preserve verified-negative license finding; do not infer a license from README open-source wording or secondary-review tables. Cross-manifest normalization and execution remain Stage 3 work. |
| CR000231 | IDRLnet is Apache-2.0 licensed, cites arXiv:2107.04320, has formal Python dependencies, and bundles Navier-Stokes sample/test CSVs as example/reference inputs. Both paper-367 and paper-495 review mentions are verified. | Keep example CSVs as qualified framework/example data; dependency/data normalization and execution remain Stage 3 work. |
| CR000232 | Stage-1 `JacobYC-Araz/elvet` is unavailable and resolves to already verified canonical Elvet resource CR000063 at GitLab. | Alias resolved via VA000041; do not duplicate or propagate CR000063 license/citation/dependency metadata onto CR000232. |

These qualified findings do not constitute Stage-2 verification failures. B009 remains in progress and the next resource is CR000233.
