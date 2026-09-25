# PINN Review Atlas Releases

PINN Review Atlas uses **Atlas-level date-based releases** that are independent of the version identifiers used by individual datasets and modules.

## Atlas release convention

Atlas releases use:

`vYYYY.MM.N`

where:

- `YYYY` is the calendar year;
- `MM` is the calendar month;
- `N` is the sequential Atlas release number within that month.

The first formal publication/reproducibility release is:

**`v2026.09.1`**

This identifier describes a complete Atlas repository snapshot. It does **not** replace or reset the version numbers of component datasets.

## Component versions in v2026.09.1

| Component | Version / snapshot in v2026.09.1 |
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
3. Freeze the intended release metadata and component-version table.
4. Before the final merge, update `CITATION.cff` from `unreleased` to `v2026.09.1` and set the intended `date-released`. If a DOI has already been reserved, include it at this stage.
5. Merge the validated release-preparation branch **once** into protected `main`.
6. Record the exact resulting `main` commit SHA.
7. Create the immutable Git tag `v2026.09.1` on that exact commit and publish the GitHub Release from the same tag.
8. Record in the release notes:
   - Atlas release identifier;
   - release date;
   - exact commit SHA;
   - important component dataset/module versions and snapshot dates;
   - major changes and known scope limitations.
9. If the archival DOI is minted only after the GitHub Release, add that DOI to the live `CITATION.cff`, Cite page, README, and release metadata **without moving the published `v2026.09.1` tag**. The immutable release snapshot remains unchanged; the DOI then identifies that archived snapshot.

## Immutability

After publication, the tag for a released Atlas version must not be moved to another commit. Corrections or later revisions must receive a new Atlas release identifier, for example `v2026.09.2` or the corresponding later month.

## Reproducibility principle

A citation to an Atlas release should identify enough information to recover the same repository state. The preferred reproducibility chain is:

**Atlas release identifier → immutable Git tag → exact commit SHA → component dataset versions/provenance**

`CITATION.cff` identifies the first formal Atlas release as `v2026.09.1`, released on `2026-09-25`.

Archived identifiers:

- Version DOI: `10.5281/zenodo.22958038`
- Concept DOI: `10.5281/zenodo.22958037`
- Immutable Git tag: `v2026.09.1`
- Release commit: `9ec20fa7bcd4362390b3edeaab36dae1238d3d7e`

The immutable `v2026.09.1` Git tag remains the authoritative repository snapshot for this release. Post-release metadata updates on `main` do not alter that archived snapshot.
