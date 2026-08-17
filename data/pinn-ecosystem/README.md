# PINN Ecosystem data

`reference-pinn-ecosystem-source.md` preserves the reviewed 35-group source taxonomy. `pinn-ecosystem.json` is the generated browser dataset used by `/pinn-ecosystem/`.

The generated file contains:

- nine ordered design layers;
- 35 normalized method groups and their source subgroups;
- every source item occurrence, including deliberate cross-context repetitions;
- explicit directional relationships with design, training, extension, reliability, and ecosystem lenses;
- the seven-stage, 31-field configuration used by the PINN Design Studio.

Regenerate and validate after changing the source, layer mapping, relationships, or builder configuration:

```bash
node scripts/build-pinn-ecosystem.mjs
node scripts/validate-pinn-ecosystem.mjs
```

Community proposals are review requests, not direct dataset writes. The public page prepares a GitHub issue containing the proposed group, subgroup, evidence URL, reference IDs, rationale, and cross-layer relationships.
