# Computational Resources Stage 2 Pilot Progress

Verification date: 2026-08-26

## Scope and stop condition

The mandatory 13-resource pilot is complete. This branch contains identity, provenance, relationship, and static repository verification only. No public Atlas pages, navigation, deployment configuration, live datasets, or application code were changed. Work stops at this pilot pending schema and scientific review.

## Resource summary

| Resource | Type | Availability | Classification | Paper relationships | License | Citation metadata | Documentation | Dependencies | Dataset classification | Confidence | Manual review |
|---|---|---|---|---|---|---|---|---|---|---|---|
| CR000002 | github_repository | verified | adjacent_physics_informed_ml_implementation | Official implementation and paper-described dataset source for Atlas paper 27. | verified (MIT License) | unavailable | verified | verified | repository_and_external_research_datasets | high | no |
| CR000016 | github_repository | verified | pinn_framework_or_library | Supporting dependency for paper 234 and secondary-review subject in papers 367 and 495. | verified (GNU Lesser General Public License v2.1) | verified | verified | verified | bundled_example_datasets | high | no |
| CR000184 | github_repository | verified | pinn_or_physics_informed_implementation | Official implementation for Atlas paper 312; canonical target for the broken source-line owner spelling. | unavailable | verified | verified | unavailable | bundled_geometry_and_simulation_data | high | no |
| CR000044 | github_repository | verified | non_pinn | Paper-provided sample code and data for Atlas paper 459; retained as an accepted non-PINN resource. | unavailable | unavailable | verified | unavailable | paper_provided_sample_data_and_code | high | no |
| CR000049 | github_repository | verified | supporting_software_or_library | Canonical repository for software discussed in Atlas paper 467; not official code for that paper. | verified (BSD-style license) | verified | verified | verified | no_research_dataset_identified | medium | no |
| CR000069 | github_repository | verified | pinn_or_physics_informed_implementation | Official implementation for paper 450, upstream implementation for paper 447, bibliography mention in paper 414, and upstream wake-data source for paper 526. | verified (MIT License) | verified | verified | unavailable | bundled_research_datasets | high | no |
| CR000117 | doi_record | verified | research_artifact | Supplementary code for Atlas paper 701; the paper's internal reference 32 is retained only as source provenance. | verified (Other (Open)) | verified | unknown | not_applicable | separate_related_dataset_record | high | yes |
| CR000137 | github_repository | verified | pinn_framework_or_library | Official software repository named by Atlas paper 745. | verified (MIT License) | verified | verified | verified | no_research_dataset_identified | high | no |
| CR000145 | github_profile | verified | github_profile | Author-associated profile supplied by Atlas paper 778; a likely paper-specific repository was discovered but not assigned a resource ID. | not_applicable | not_applicable | not_applicable | not_applicable | not_applicable | high | yes |
| CR000149 | github_repository | verified | pinn_or_physics_informed_implementation | Official implementation cited by Atlas paper 804; source-line spacing error repaired without changing CR000149. | unavailable | unavailable | verified | unavailable | no_research_dataset_identified | high | no |
| CR000154 | github_repository | verified | pinn_or_physics_informed_implementation | Official reproducibility repository for Atlas paper 822. | unavailable | verified | verified | unavailable | bundled_data_and_model_artifacts | high | no |
| CR000174 | github_profile | verified | github_profile | Useful author profile with scoped repository discoveries; no Atlas paper relationship was stated in Stage 1. | not_applicable | not_applicable | not_applicable | not_applicable | not_applicable | medium | yes |
| CR000221 | github_repository | verified | pinn_framework_or_library | Verified standalone PINN framework; no Atlas paper relationship was stated in Stage 1. | verified (Apache License 2.0) | unavailable | verified | verified | bundled_example_graph_data | high | no |

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
| 778 | Online primary publisher | Paper supplies the JeongsLee profile as the code location; candidate-specific repository recorded separately. |
| 804 | Online primary publisher | Software reference 52 names the exact PIRBFNN repository. |
| 822 | Online primary publisher | Paper states that the exact repository reproduces the results. |

No Google Drive paper retrieval was required. External dataset links found in repository documentation were recorded but not downloaded.

## Pilot counts

- Verified resources: 13
- Verified paper-resource relationships: 17
- Unique Atlas paper IDs represented: 16
- Alias or source-syntax resolutions: 4
- Profile records and scoped discoveries: 13
- Static license, citation, documentation, dependency, and dataset records: 13 each
- Evidence-log records: 34

## Review gate

Do not merge to `main`, publish the resources, or expand beyond this pilot until the Stage 2 schema, relationship vocabulary, and profile-discovery decisions receive scientific review.
