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
- `/references/` — complete review bibliography with linked paper IDs
- `/cite/` — citation and version guidance

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
