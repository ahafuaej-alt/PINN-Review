# PINN Review Atlas Releases

PINN Review Atlas uses **Atlas-level date-based releases** that are independent of the version identifiers used by individual datasets and modules.

## Atlas release convention

Atlas releases use:

`vYYYY.MM.N`

where:

- `YYYY` is the calendar year;
- `MM` is the calendar month;
- `N` is the sequential Atlas release number within that month.

The planned publication/reproducibility release is:

**`v2026.09.1`**

This identifier describes a complete Atlas repository snapshot. It does **not** replace or reset the version numbers of component datasets.

## Current component versions in the release candidate

| Component | Current version / snapshot |
|---|---|
| Master Bibliography | `2.3.1` |
| PINN Realm | `2.3.1` |
| Frameworks | `3.0.0` |
| PINN Ecosystem | `2026.08.17.2` |
| Performance Metrics | snapshot generated `2026-08-02` |
| Mathematical Formulations | manifest generated `2026-08-21` |

Other Atlas datasets may use their own schema versions, generated dates, checksums, or validation metadata. Those component identifiers remain authoritative for the corresponding dataset.

## Definition of a reproducible Atlas release

A formal PINN Review Atlas release is created only after all intended changes have been reviewed and merged into protected `main`.

For `v2026.09.1`, the release procedure is:

1. Complete all publication, licensing, citation, reproducibility, and scientific-maintenance edits on the release-preparation branch.
2. Run the repository's validation and deployment checks.
3. Merge the release-preparation branch once into protected `main`.
4. Record the exact resulting `main` commit SHA.
5. Create the immutable Git tag `v2026.09.1` on that exact commit.
6. Publish the GitHub Release from the same tag.
7. Record in the release notes:
   - Atlas release identifier;
   - release date;
   - exact commit SHA;
   - important component dataset/module versions and snapshot dates;
   - major changes and known scope limitations.
8. Update `CITATION.cff` so its `version`, `date-released`, and, where appropriate, `commit` fields identify the released snapshot.
9. After archival deposit, add the DOI metadata to `CITATION.cff`, the Cite page, README, and release record.

## Immutability

After publication, the tag for a released Atlas version must not be moved to another commit. Corrections or later revisions must receive a new Atlas release identifier, for example `v2026.09.2` or the corresponding later month.

## Reproducibility principle

A citation to an Atlas release should identify enough information to recover the same repository state. The preferred reproducibility chain is:

**Atlas release identifier → immutable Git tag → exact commit SHA → component dataset versions/provenance**

Until `v2026.09.1` is formally published, `CITATION.cff` correctly describes the repository version as `unreleased`.
