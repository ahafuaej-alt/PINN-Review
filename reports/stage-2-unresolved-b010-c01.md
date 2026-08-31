# Stage 2 B010 Checkpoint 01 Deferred and Qualified Findings

Verification date: 2026-08-28

B010 checkpoint 01 produced no new scientifically consequential ambiguity and no new ordinary manual-review item. PRL000100 through PRL000104 are verified from Atlas review paper 401. The following identity and documentation findings are resolved for Stage 2.

| Resource | Result | Status |
|---|---|---|
| CR000239 | The Stage-1 `NeuroDiffCym/neurodiffeq` path is unavailable; the primary paper gives `NeuroDiffGym/neurodiffeq`, already accepted as canonical CR000137. | VA000044 preserves CR000239 provenance and verifies PRL000100; canonical technical metadata are not duplicated. |
| CR000240 | The Stage-1 NeuralPDE documentation location is legacy. Current official SciML documentation identifies the same NeuralPDE.jl PINN solver represented by CR000227. | VA000045 records the current documentation location and verifies PRL000101; repository metadata remain on CR000227. |
| CR000241 | `pytorch.org` is the live project/documentation site for canonical PyTorch repository CR000049. | PRL000102 verified; canonical license, citation, dependency, and example/data evidence remain on CR000049. |
| CR000242 | Stage-1 `www.sciam.com` resolves to Scientific American, while the primary paper gives `www.sciann.com`, whose live documentation matches canonical SciANN CR000062. | VA000046 repairs the wrong-project URL and verifies PRL000103; CR000062 retains its canonical metadata and existing license-conflict review item. |
| CR000243 | The Stage-1 URL uses a plural NVIDIA developer hostname. The primary paper gives singular-host `/simnet`, which officially redirects to PhysicsNeMo, represented by CR000223. | VA000047 preserves the historical SimNet relationship and verifies PRL000104; current product metadata remain on CR000223. |

These qualified findings do not constitute Stage-2 verification failures. B010 remains in progress and the next resource is CR000244.
