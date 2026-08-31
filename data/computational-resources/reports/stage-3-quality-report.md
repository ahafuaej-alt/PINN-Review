# Computational Resources Stage 3 — Quality Report

Status date: 2026-08-31  
Acceptance checkpoint: Stage3-A01  
Pilot extraction checkpoint: Stage3-P07
Latest scale-out checkpoint: Stage3-S003

## Pilot QA

Status: **PASS**

The completed ten-resource pilot contains:

- 10 resource records;
- 23 experiment records;
- 83 configuration records;
- 131 technical-evidence records;
- 10 static reproducibility assessments;
- 23 bounded unresolved technical findings;
- 3 explicit conflicting-evidence findings.

Across the pilot, identifiers are unique, fact-level evidence references resolve, resource/experiment/configuration relationships resolve, inferred evidence uses the required inferred semantics, reproducibility remains restricted to R0–R4, Stage-2 identities and pinned snapshots are preserved where available, and no scientific workload execution is claimed.

## Scientific acceptance decision

Status: **ACCEPTED FOR CONTROLLED SCALE-OUT**

The Stage3-D01 methodology and existing schemas are scientifically accepted without modification.

The resource → experiment → configuration hierarchy successfully represented all deliberately heterogeneous pilot cases without requiring a second ontology family or type-specific record tree. The evidence model remained discriminating across direct implementation evidence, repository documentation, primary-paper claims, provider metadata, archive-equivalent evidence, inference, missing information, and explicit conflict.

The static reproducibility gates also behaved as intended: the pilot produced differentiated R1–R4 outcomes, withheld higher levels when critical environment/data/result/code-path evidence was missing, and never assigned R5.

## Accepted operational interpretations

1. **Archive-equivalent repository releases** may support static technical extraction when DOI/paper/release lineage is strong. The DOI/archive remains the authoritative resource identity. Byte-level equivalence must not be claimed without direct comparison.
2. **An imported runtime dependency missing from the declared environment manifest** is a critical reproducibility gap and blocks R4, even if archived successful outputs are available.
3. **Configuration-specific paper/code conflicts** remain scoped to the affected configuration unless evidence shows broader propagation. They do not automatically lower unrelated configurations or the whole resource.

## Pilot acceptance-test matrix

| Acceptance test | Result |
|---|---|
| One resource → multiple experiments | PASS |
| One experiment → multiple configurations | PASS |
| Resource can have zero experiments | PASS |
| Experiment can have zero configurations | PASS |
| One fact → multiple evidence records | PASS |
| Paper reporting ≠ repository implementation | PASS |
| Resource identity ≠ paper relationship | PASS |
| Official relationship can target one experiment in a multi-experiment resource | PASS |
| Resource can have no Atlas relationship | PASS |
| Framework citations ≠ Atlas relationships | PASS |
| Supporting library ≠ PINN implementation | PASS |
| Non-PINN research code ≠ PINN implementation | PASS |
| Simulator/solver ≠ PINN implementation | PASS |
| Operator learning ≠ classical PINN | PASS |
| Dataset consumer use ≠ intrinsic provider dataset definition | PASS |
| Bundled files ≠ reusable dataset automatically | PASS |
| Multiple dataset product DOIs can remain under one CR identity | PASS |
| DOI archive identity ≠ archive-equivalent source snapshot | PASS |
| Repository-only experiment remains source-scoped | PASS |
| `unknown` ≠ `false` | PASS |
| `not_available` ≠ `not_applicable` | PASS |
| Unversioned or omitted dependency ≠ exact environment | PASS |
| Consequential source conflicts remain explicit | PASS |
| Bounded binary/archive inspection can be deferred without inventing facts | PASS |
| Pinned Stage-2 snapshots remain authoritative where available | PASS |
| R3 can be assigned with complete use/configuration evidence but an incomplete exact environment | PASS |
| R4 can be assigned statically only when all critical gates are met | PASS |
| R4 is withheld when a critical environment/result gate is missing | PASS |
| R5 cannot be assigned | PASS |

## Scale-out readiness

The methodology is ready for controlled scale-out. Before further extraction, the scale-out plan must define resource ordering, small checkpoint/batch size, restart/continuation semantics, QA requirements, unresolved-register maintenance, and commit boundaries.

No schema change is required before that planning step.

## Scale-out checkpoint Stage3-S001

Status: **PASS**

`CR000001` and `CR000002` were extracted without schema or methodology change. Cumulative Stage-3 totals are 12 resources, 24 experiments, 84 configurations, 146 technical-evidence records, 12 reproducibility assessments, 26 unresolved findings, and 4 explicit conflicting-evidence findings.

`CR000001` remains the corrected official PINA solver-documentation identity established by Stage2-RC01. The current project repository was used only as dated supporting evidence and was not substituted as an authoritative Stage-2 pin. The framework documentation was not forced into artificial experiment records; its bounded static classification is R1.

`CR000002` preserves the Stage-2 pinned PI-MPN snapshot and its two verified paper relationships. One repository-supported XC forecasting experiment/configuration is recorded at R3. R4 is withheld because the required `od.npy` payload remains external, the dependency manifest is unpinned, and the evaluation routine reverses prediction/reference assignments before direction-sensitive MAPE and R2 calculations.

All schemas validate; identifiers and evidence references are unique and resolved; no Stage-1, Stage-2, `05-curated/`, or public Atlas/site file changed; and no scientific workload was executed.

## Scale-out checkpoint Stage3-S002

Status: **PASS**

`CR000004` was separated into an adaptive single-resource checkpoint because it contains three distinct workflows and consequential code-path defects. The TV-AR/TV-VAR method, two simulations, and bundled real-world application are represented without treating manually toggled scenario comments as additional configurations.

The resource is R1. No environment or license is supplied; all application drivers import an absent comparator module; and both simulation drivers use invalid `range(list)` calls. These defects remain configuration-scoped and explicit. Cumulative totals are 13 resources, 27 experiments, 87 configurations, 156 technical-evidence records, 13 reproducibility assessments, 30 unresolved findings, and 6 explicit conflicting-evidence findings.

## Scale-out checkpoint Stage3-S003

Status: **PASS**

`CR000005` preserves the pinned paper-appendix repository and `PRL000016`, while accurately bounding the artifact as two mathematical PDFs plus a README. No executable source, environment, dataset, or configuration exists, so no experiment/configuration is manufactured and reproducibility is R1.

The Stage-2 `supplementary_code` label versus the actual PDF-only artifact and the internally inconsistent Lipschitz condition in `Appendix.pdf` equation (1) remain explicit conflicting evidence. Cumulative totals are 14 resources, 27 experiments, 87 configurations, 162 technical-evidence records, 14 reproducibility assessments, 33 unresolved findings, and 8 explicit conflicting-evidence findings.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. The accepted Stage-3 methodology remains static-only and does not authorize scientific workload execution.
