# Computational Resources Stage 3 — Quality Report

Status date: 2026-09-04  
Acceptance checkpoint: Stage3-A01  
Pilot extraction checkpoint: Stage3-P07  
Latest scale-out checkpoint: Stage3-S062

## Current QA status

Status: **PASS**

Stage3-D01 remains accepted without schema modification. Static-only execution boundaries, Stage-2 authority, evidence-source semantics, missing-value semantics, identifier continuity, resource → experiment → configuration ontology, type-specific profiles, and the R0–R4 ceiling remain unchanged.

## Recent checkpoint continuity

- `Stage3-S060`: CR000069 maziarraissi/PINNs canonical PINN implementation, R1 — PASS.
- `Stage3-S061`: CR000070 PINN-for-NS-equation PINN implementation, R1 — PASS.
- `Stage3-S062`: CR000071 Dual-Cone-Gradient-Descent PINN implementation / PINN-optimization research code, R1 — **PASS**.

## Stage3-S062 checkpoint

`CR000071` preserves final Stage-2 authority for `https://github.com/youngsikhwang/Dual-Cone-Gradient-Descent`, pinned commit `7242cd76e8f94616c7e4611ba971c5bc33244e9e`, MIT license, and verified official relationship `PRL000160` to Atlas paper 527.

### Scope classification

The resource is classified as a **PINN implementation** because the pinned repository directly implements physics-informed PDE benchmarks and the proposed DCGD optimizer, while the broader Stage-2 `research_code_related_to_pinn_corpus` classification remains preserved as provenance.

Three bounded primary experiments represent 2D Helmholtz, viscous Burgers, and nonlinear Klein-Gordon. SPINN 3D Helmholtz, CausalPINNs chaotic Kuramoto-Sivashinsky, and PINNsFormer convection adaptations are retained as variant capability evidence under the accepted bounded-extraction rule rather than expanded into additional experiments.

### Reproducibility

Static reproducibility is **R1**. Strong positive evidence includes MIT licensing, a large version-pinned manifest, Python/PyTorch/CUDA versions, an explicit seed, documented architecture/hyperparameters, bundled Burgers data, exact/analytic benchmark targets, and relative-L2 evaluation.

R2 is withheld because four consequential explicit conflicts and one additional portability defect affect the documented runnable path:

1. README says `pip install -r requirements.txt`, but the file is Conda-export-style with single-equals version/build entries.
2. `main.py` passes an extra positional `betas` argument relative to all three primary benchmark model constructors.
3. `run_dcgd.sh` uses `klein-gordon`, while `main.py` accepts `klein_gordon`.
4. The documented Adam+DCGD path calls `DCGD.step()` without the required `losses` argument.
5. The Burgers sampler loads a host-specific absolute MAT path rather than the bundled MAT path.

These observations are recorded as source-scoped static evidence; Stage 3 does not repair the scientific repository.

Checkpoint additions:

- resources: **1**
- experiments: **3**
- configurations: **3**
- technical-evidence records: **16**
- reproducibility assessments: **1**
- unresolved findings: **9**
- new explicit conflicts: **4**

No dependency installation, external dataset download, model deserialization, training, evaluation, test or benchmark was performed.

## Aggregate batch state

Canonical aggregate QA remains PASS for **SOB001–SOB006**.

`SOB007` is in progress with **6 / 10** canonical members complete: CR000066, CR000067, CR000068, CR000069, CR000070, and CR000071. Aggregate SOB007 QA is not yet due.

## Current cumulative totals

After `Stage3-S062`: **76 resources, 136 experiments, 282 configurations, 1014 technical-evidence records, 76 reproducibility assessments, 482 unresolved findings, 93 explicit conflicts**.

## Registry accounting

With 363 independently extractable technical identities and 76 completed Stage-3 technical records, **287** remain.

## Continuation QA

`Stage3-S062` is PASS. The exact next independently extractable resource is **`CR000072`**, to be processed as `Stage3-S063`.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. No scientific workload execution occurred. R5 remains prohibited.
