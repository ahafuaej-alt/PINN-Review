# Computational Resources Stage 2 Pilot Review and Deferred Items

Verification date: 2026-08-26

The pilot has no unresolved canonical resource identity. Two bounded questions require scientific judgment; the remaining items are verified limitations or explicitly deferred technical work.

## Requires scientific review

| Item | Resource | Established result | Open decision | Pilot effect |
|---|---|---|---|---|
| Specific repository attribution | CR000145 / CR000358 | CR000358 is a verified repository discovered under the profile explicitly cited by paper 778. CR000145 retains PRL000303 to paper 778. | Determine whether later direct evidence establishes `paper 778 ↔ CR000358`. No PRL is created now. | Does not block pilot acceptance. |
| Registry promotion scope | CR000174 | The profile and seven scoped discoveries are verified. CR000024 is reused for `Enhancement-of-PIV-via-PINNs`; no duplicate is created. | During registry expansion, decide which remaining discoveries warrant stable CR IDs. No PRL may be created without paper evidence. | Resolved for pilot; expansion decision deferred. |

### CR000145 graph rule

```text
Atlas paper 778
  └── verified association → CR000145 JeongsLee profile
        ├── profile discovery → CR000358 PINN-for-ExtremeMechanics
        ├── profile discovery → ADAF
        ├── profile discovery → NTO-ADA
        └── profile discovery → MOTION
```

CR000358 is a stable resource identity with classification `profile_level_discovery`. Its paper relationship status is `not_established`.

## Verified limitations and deferred work

| Item | Resource | Verified Stage 2 result | Disposition |
|---|---|---|---|
| Archive internals | CR000117 | Identity, DOI, openness, software type, and supplementary-code relationship to paper 701 are verified. | Archive unpacking is deferred to Stage 3 technical extraction. |
| Qualified license metadata | CR000049 | Machine-readable SPDX result is `NOASSERTION`; repository documentation describes a BSD-style license. | Retain both facts. Do not normalize to BSD-2-Clause or BSD-3-Clause without exact text verification. |
| No repository license identified | CR000184, CR000044, CR000149, CR000154, CR000358 | No repository license was identified at the pinned commit for each resource. | Treat as verified negative findings. Never infer a license. |

## Closed pilot decisions

- CR000358 is assigned as the next unused stable resource ID after Stage 1 CR000357.
- No new PRL is created for CR000358.
- PRL000303 remains attached to CR000145 and paper 778.
- CR000174 is resolved for the pilot; promotion decisions are deferred to registry expansion.
- CR000117 is resolved for Stage 2.
- CR000049 is resolved with qualified license metadata.
- Missing licenses are verified negative findings, not unresolved failures.
