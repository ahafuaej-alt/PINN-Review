# Stage 2 B011 Checkpoint 02 Deferred and Qualified Findings

Verification date: 2026-08-29

B011 checkpoint 02 produced no new scientifically consequential ambiguity and no new ordinary manual-review item. The following findings are resolved for Stage 2 and remain bounded Stage-3 work where noted.

| Resource | Result | Status |
|---|---|---|
| CR000269 | The official EN4 service provides quality-controlled ocean temperature/salinity profiles and monthly objective analyses and is explicitly used by Atlas paper 50. Its access is governed by Met Office custom data-use conditions rather than an SPDX software license. | PRL000009 verified. Preserve scoped non-SPDX terms; archive/NetCDF inventory, checksums, and file inspection remain Stage 3 work. |
| CR000270 | The exact XJTU-SY dataset URL is given by Atlas paper 73. The official page documents run-to-failure bearing vibration data and download mirrors but no explicit reusable dataset license was independently identified. | PRL000015 verified. Do not infer a license from the cited publication; mirror/file normalization remains Stage 3 work. |
| CR000271 | Atlas paper 110 gives the exact PlantVillage Kaggle record. The public record establishes dataset identity, but an exact record-level reusable license was not independently established during Stage 2. | PRL000021 verified. Do not infer a license from other PlantVillage publications or mirrors; archive/image normalization remains Stage 3 work. |
| CR000272 | Stage-1 `minjiechen/magnetchallenge` permanently moved to `minjiechen/magnetchallenge-1` with unchanged immutable repository ID 635501712. The pinned MagNet Challenge 2023 repository is MIT licensed and points to newer MagNet Open Database, MagNet-AI, and MagNet Toolbox resources. | URL repaired via VA000053 without changing CR identity; PRL000022 verified. Historical challenge-file and successor-resource normalization remain Stage 3 work. |
| CR000273 | The pinned AM-dataset repository contains the BeltClip study's ANSYS FEA and experimental data files, but no repository license or formal dependency manifest was identified. | PRL000023 verified. Preserve verified-negative repository-license finding; file schema/checksum inspection remains Stage 3 work. |

No code, archive, external dataset, model artifact, or bundled data file was executed, downloaded, unpacked, or parsed.

These qualified findings do not constitute Stage-2 verification failures. B011 remains in progress and the next resource is **CR000274**.
