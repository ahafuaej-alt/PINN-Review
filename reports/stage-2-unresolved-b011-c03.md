# Stage 2 B011 Checkpoint 03 Deferred and Qualified Findings

Verification date: 2026-08-29

B011 checkpoint 03 produced no new scientifically consequential ambiguity and no new ordinary manual-review item. The following findings are resolved for Stage 2 and remain bounded Stage-3 work where noted.

| Resource | Result | Status |
|---|---|---|
| CR000274 | The exact RADAR4KIT record verifies a published KIT dataset, DOI, CC BY-SA 4.0, archive size, checksum, experimental image data, and trained neural-network weights. | Dataset identity verified. The archive was not downloaded; file-level inventory, checksum revalidation, image/weight schema inspection, and execution remain Stage 3 work. |
| CR000275 | The authoritative TUM record verifies m1524895 as WeatherBench modified-ERA5 research data, documents the Stage-1 dataserv distribution service, and explicitly states CC BY 4.0. The direct Stage-1 endpoint did not return a reliable transport response during this check. | Identity, public distribution role, license, and metadata are verified. Direct redirect/final-URL semantics remain a bounded unknown, not a manual-review failure; file-level normalization remains Stage 3 work. |
| CR000276 | The live HYPERVIEW page and primary Atlas paper 128 verify the exact paper-dataset relationship. Stage 1 preserved Atlas ID 128 and source-line evidence but omitted a PRL record, so PRL000333 repairs the relationship layer without changing CR identity. Dataset use is governed by non-commercial research-use and required-citation terms rather than an inferred SPDX license. | PRL000333 verified as `paper_dataset_mention`. Linked starter material is separately pinned but remains supporting evidence. Dataset-file, spectral/target-schema, permanent-successor-record, and notebook normalization remain Stage 3 work. |

No code, archive, external dataset, model artifact, notebook, or bundled data file was executed, downloaded, unpacked, or parsed.

These qualified findings do not constitute Stage-2 verification failures. B011 remains in progress and the next resource is **CR000277**.
