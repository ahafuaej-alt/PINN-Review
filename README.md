# PINN Review Atlas

PINN Review Atlas is the web companion to a review of physics-informed neural networks. It is designed to publish evidence tables, interactive figures, comparisons, taxonomies, datasets, and research notes at stable URLs that can be cited from the manuscript.

## Sections

- `/pinn-types/` — PINN families, variants, aliases, and supporting references
- `/architectures/` — neural architectures and hybrid methods
- `/training/` — loss design, optimizers, sampling, and initialization
- `/applications/` — application domains and benchmark problems
- `/software/` — libraries, frameworks, solvers, and packages
- `/datasets/` — ready-made and generated datasets
- `/abbreviations/` — reported abbreviations, frequencies, and reference-level evidence
- `/pinn-realm/` — interactive country distribution and international affiliation co-occurrence across all 853 papers
- `/references/` — complete review bibliography with advanced search, shareable filters, reading lists, pagination, analytics, and BibTeX/RIS/EndNote/CSV exports
- `/references/changelog/` — bibliography version history and data-quality methodology
- `/dataset-manager/` — prepare validated, evidence-backed updates to the canonical paper register
- `/cite/` — citation and version guidance
- `/privacy/` — local-storage and privacy policy for the static site

## Local preview

The site is static and has no build dependencies.

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Publishing

The workflow in `.github/workflows/pages.yml` deploys the repository to GitHub Pages after a push to `main`. In the repository settings, choose **Pages → Build and deployment → GitHub Actions** if Pages has not already been configured.

## Evidence policy

The website separates presentation from evidence. Counts, classifications, and citation IDs should only be added after the source data have been checked. Every published view should provide its source data and a stable URL.

The authoritative record is `/data/papers-master.json`, validated against `/data/papers-master.schema.json`. The public bibliography, PINN Realm records, collaboration pairs, annual totals, filters, exports, and machine-readable metadata are generated from that master. Reader selections, recent searches, Dataset Manager drafts, and theme preferences remain in the reader's browser and are never submitted to the site.

## Updating one paper

1. Open `/dataset-manager/` and select the paper.
2. Edit the canonical fields and provide an HTTPS DOI or publisher evidence URL plus a reason.
3. Review the impact preview, then copy or download the small update package.
4. Repository maintainers paste the compact package into **Actions → Apply paper dataset update → Run workflow**.

The authenticated workflow accepts only approved fields, applies the update, increments the patch version, appends `/data/changes.json`, rebuilds every derived dataset, runs all invariants, commits the coordinated release, and triggers Pages. It stops without publishing if validation fails.

For local maintenance:

```bash
node scripts/apply-paper-update.mjs update.json --dry-run
node scripts/apply-paper-update.mjs update.json
node scripts/build-datasets.mjs --check
node scripts/validate-dataset.mjs
```

Legacy note: 112 pre-existing year disagreements between the bibliography extraction and standardized country/year source remain explicit `overrides.realm_year` values. A sourced year update removes that paper's override by default and uses the corrected year throughout the Atlas.
