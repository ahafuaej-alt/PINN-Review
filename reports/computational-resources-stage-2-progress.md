# Computational Resources Stage 2 Pilot Progress

Verification date: 2026-08-26

## Scope and stop condition

The mandatory 13-resource pilot is complete and its closure decisions are encoded. One verified profile discovery was promoted as CR000358 without creating a paper relationship. This branch contains identity, provenance, relationship, and static repository verification only. No public Atlas pages, navigation, deployment configuration, live datasets, or application code were changed.

## Resource summary

| Resource | Pilot role | Type | Classification | Paper relationships | License result | Citation metadata | Documentation | Dependencies | Dataset classification | Confidence | Pilot status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| CR000002 | mandatory resource | github_repository | adjacent_physics_informed_ml_implementation | Official implementation and paper-described dataset source for Atlas paper 27. | verified (MIT License) | unavailable | verified | verified | repository_and_external_research_datasets | high | verified |
| CR000016 | mandatory resource | github_repository | pinn_framework_or_library | Supporting dependency for paper 234 and secondary-review subject in papers 367 and 495. | verified (GNU Lesser General Public License v2.1) | verified | verified | verified | bundled_example_datasets | high | verified |
| CR000184 | mandatory resource | github_repository | pinn_or_physics_informed_implementation | Official implementation for Atlas paper 312; canonical target for the broken source-line owner spelling. | unavailable | verified | verified | unavailable | bundled_geometry_and_simulation_data | high | resolved_negative_license_finding |
| CR000044 | mandatory resource | github_repository | non_pinn | Paper-provided sample code and data for Atlas paper 459; retained as an accepted non-PINN resource. | unavailable | unavailable | verified | unavailable | paper_provided_sample_data_and_code | high | resolved_negative_license_finding |
| CR000049 | mandatory resource | github_repository | supporting_software_or_library | Canonical repository for software discussed in Atlas paper 467; not official code for that paper. | verified (BSD-style license) | verified | verified | verified | no_research_dataset_identified | medium | resolved_with_qualified_license_metadata |
| CR000069 | mandatory resource | github_repository | pinn_or_physics_informed_implementation | Official implementation for paper 450, upstream implementation for paper 447, bibliography mention in paper 414, and upstream wake-data source for paper 526. | verified (MIT License) | verified | verified | unavailable | bundled_research_datasets | high | verified |
| CR000117 | mandatory resource | doi_record | research_artifact | Supplementary code for Atlas paper 701; the paper's internal reference 32 is retained only as source provenance. | verified (Other (Open)) | verified | unknown | unknown | separate_related_dataset_record | high | resolved_stage3_archive_inspection_deferred |
| CR000137 | mandatory resource | github_repository | pinn_framework_or_library | Official software repository named by Atlas paper 745. | verified (MIT License) | verified | verified | verified | no_research_dataset_identified | high | verified |
| CR000145 | mandatory resource | github_profile | github_profile | Author-associated profile supplied by Atlas paper 778; CR000358 is a promoted profile discovery with no paper relationship assigned. | not_applicable | not_applicable | not_applicable | not_applicable | not_applicable | high | profile_relationship_verified_specific_repository_linkage_not_established |
| CR000149 | mandatory resource | github_repository | pinn_or_physics_informed_implementation | Official implementation cited by Atlas paper 804; source-line spacing error repaired without changing CR000149. | unavailable | unavailable | verified | unavailable | no_research_dataset_identified | high | resolved_negative_license_finding |
| CR000154 | mandatory resource | github_repository | pinn_or_physics_informed_implementation | Official reproducibility repository for Atlas paper 822. | unavailable | verified | verified | unavailable | bundled_data_and_model_artifacts | high | resolved_negative_license_finding |
| CR000174 | mandatory resource | github_profile | github_profile | Useful author profile with scoped repository discoveries; no Atlas paper relationship was stated in Stage 1. | not_applicable | not_applicable | not_applicable | not_applicable | not_applicable | high | resolved_for_pilot_registry_expansion_deferred |
| CR000221 | mandatory resource | github_repository | pinn_framework_or_library | Verified standalone PINN framework; no Atlas paper relationship was stated in Stage 1. | verified (Apache License 2.0) | unavailable | verified | verified | bundled_example_graph_data | high | verified |
| CR000358 | promoted profile discovery | github_repository | profile_level_discovery | Verified repository discovered under CR000145; no Atlas paper relationship is assigned. | unavailable | verified | verified | unavailable | bundled_code_checkpoints_and_results | high | stable_profile_discovery_identity_assigned |

## Relationship decisions

| Link | Resource | Atlas paper | Verified relationship | Confidence | Evidence basis |
|---|---|---:|---|---|---|
| PRL000004 | CR000002 | 27 | paper_dataset_mention | high | atlas_master_metadata_plus_repository, abstract; README; dataset/ |
| PRL000005 | CR000002 | 27 | official | high | atlas_master_metadata, paper 27 abstract |
| PRL000044 | CR000016 | 234 | supporting_dependency | high | archived_primary_paper, pages 5–6 |
| PRL000077 | CR000016 | 367 | secondary_review_mention | high | archived_primary_paper, pages 41–42 |
| PRL000107 | CR000069 | 414 | paper_resource_mention | medium | archived_primary_paper, page 4 |
| PRL000121 | CR000069 | 447 | supporting_dependency | high | archived_primary_paper, page 3 |
| PRL000122 | CR000069 | 450 | official | high | canonical_repository, README.md |
| PRL000125 | CR000044 | 459 | supplementary_code | high | archived_primary_paper, page 26 |
| PRL000130 | CR000049 | 467 | paper_software_mention | medium | archived_primary_paper, pages 2, 18, and 24 |
| PRL000142 | CR000016 | 495 | secondary_review_mention | high | archived_primary_paper, pages 11–13 |
| PRL000158 | CR000069 | 526 | paper_dataset_mention | high | archived_primary_paper, page 14 |
| PRL000228 | CR000117 | 701 | supplementary_code | high | archived_primary_paper, pages 2 and 19 |
| PRL000264 | CR000137 | 745 | official | high | archived_primary_paper, pages 5–6 |
| PRL000303 | CR000145 | 778 | author_associated | high | online_primary_publisher, Data Availability Statement |
| PRL000307 | CR000149 | 804 | official | high | online_primary_publisher, reference 52 |
| PRL000313 | CR000154 | 822 | official | high | online_primary_publisher, section 1, code-availability statement |
| PRL000332 | CR000184 | 312 | official | high | atlas_master_metadata_plus_live_identity, paper 312 abstract and canonical repository |

No PRL targets CR000358. PRL000303 continues to represent the publisher-stated association between paper 778 and profile CR000145.

## Profile-closure decisions

- **CR000145:** preserved as the profile explicitly supplied by paper 778. `JeongsLee/PINN-for-ExtremeMechanics` is promoted as CR000358 with classification `profile_level_discovery`. Scientific compatibility is recorded, but no direct paper relationship is inferred.
- **CR000174:** preserved as a useful profile. Seven verified discoveries remain profile-discovery records. CR000024 is reused for `Enhancement-of-PIV-via-PINNs`; promotion of the remaining repositories is deferred to registry expansion without inferred paper relationships.

## Verified limitations and deferred extraction

- **CR000117:** DOI identity, openness, resource type, and supplementary-code relationship are complete. Archive internals are deferred to Stage 3.
- **CR000049:** SPDX remains `NOASSERTION`; BSD-style repository wording is stored separately without normalization.
- **CR000184, CR000044, CR000149, CR000154, and CR000358:** no repository license was identified at the pinned commits. These are verified negative findings.

## Primary-paper evidence sources

| Atlas paper | Source category | Verification result |
|---:|---|---|
| 27 | Atlas master metadata with primary abstract | Exact repository named as implementation; dataset relationship retained. |
| 234 | Archived primary paper | DeepXDE 1.13.1 is an implementation dependency. |
| 312 | Atlas master metadata with primary abstract | Exact fsahli repository named; broken owner spelling remapped. |
| 367 | Archived primary paper | DeepXDE is covered in the review's software section. |
| 414 | Archived primary paper | Exact PINNs repository appears as a bibliographic resource. |
| 447 | Archived primary paper | Work is based on Raissi's open-source implementation. |
| 450 | Canonical repository and Atlas DOI metadata | Repository cites and implements the foundational JCP paper. |
| 459 | Archived primary paper | Exact repository supplies public sample data and code. |
| 467 | Archived primary paper | PyTorch is discussed as general-purpose software, not paper code. |
| 495 | Archived primary paper | DeepXDE appears as review software with an exact code link. |
| 526 | Archived primary paper and publisher record | PINNs repository supplies upstream wake data; separate paper code is elsewhere. |
| 701 | Archived primary paper and archive record | Internal reference 32 is supplementary code DOI 10.5281/zenodo.8014136; internal reference 33 is separate data. |
| 745 | Archived primary paper | Software-location section names NeuroDiffGym/neurodiffeq. |
| 778 | Online primary publisher | Paper supplies the JeongsLee profile; no specific-repository PRL is created. |
| 804 | Online primary publisher | Software reference 52 names the exact PIRBFNN repository. |
| 822 | Online primary publisher | Paper states that the exact repository reproduces the results. |

No Google Drive paper retrieval was required. External dataset links found in repository documentation were recorded but not downloaded.

## Closure counts

- Mandatory pilot resources: 13
- Promoted profile-derived resource identities: 1
- Total verified resource records in the overlay: 14
- Verified paper-resource relationships: 17
- Relationships assigned to CR000358: 0
- Unique Atlas paper IDs represented: 16
- Alias or source-syntax resolutions: 4
- Profile summaries and scoped discoveries: 13
- Static license, citation, documentation, dependency, and dataset records: 14 each
- Evidence-log records: 35

## Review gate

The Stage 2 pilot methodology is acceptable with two bounded scientific-review questions documented separately. Do not merge, deploy, publish, or begin registry-wide promotion from this branch without the corresponding review decision.
