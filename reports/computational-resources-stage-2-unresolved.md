# Computational Resources Stage 2 Pilot Unresolved Items

Verification date: 2026-08-26

The pilot has no unresolved canonical URL for its 13 required resources. The following bounded review items remain.

| Item | Resource | State | Evidence | Required decision |
|---|---|---|---|---|
| Paper-specific repository candidate | CR000145 | needs scientific review | `JeongsLee/PINN-for-ExtremeMechanics` matches the author, topic, dynamic beam, and fluid-structure scope of paper 778. The paper itself points to the profile rather than a repository. | Decide whether to assign a new stable CR ID and a new PRL ID. Preserve CR000145 regardless. |
| Profile discovery set | CR000174 | needs scientific review | Seven scoped repositories were verified, including one already represented by CR000024 / paper 339. No paper relationship was stated for CR000174. | Review candidates outside the pilot before assigning any new IDs. |
| Archive file internals | CR000117 | unknown | Landing metadata, DOI identity, resource type, openness, and paper relationship are verified. Deposited files were not unpacked. | Optional later inspection for dependency and README details. |
| License SPDX precision | CR000049 | identified without SPDX assertion | Repository metadata reports `NOASSERTION`; the README and LICENSE describe a BSD-style license. | Retain `NOASSERTION` unless a later license review maps the exact text. |
| Missing repository license | CR000184, CR000044, CR000149, CR000154 | unavailable | No license file or repository license metadata was identified at the verified commits. | Do not infer a license. Owners may add one upstream. |

## Resolved during the pilot

- The invalid `fashli/Delta-PINNs` source reference is remapped to CR000184 at `fsahli/Delta-PINNs`; PRL000332 records paper 312 without reusing CR000021.
- The canonical repository for paper 745 is CR000137 at `NeuroDiffGym/neurodiffeq`; the two alternate owner spellings return not found.
- The malformed space in the paper 804 URL is repaired without changing CR000149.
- CR000044 remains deliberately classified `non_pinn`, while its paper-provided sample-code relationship is verified.
- Paper 701's internal reference 32 is stored only as provenance and is not treated as an Atlas reference ID.
