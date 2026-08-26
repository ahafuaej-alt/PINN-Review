# Canonical Atlas concept and evidence model

`registry.json` is the exhaustive maintained resolver for scientific concepts. Each object uses a stable `<namespace>:<slug>` ID and declares its canonical destination plus Atlas contexts in which the concept appears. `core.json` is the small initial browser payload for common cross-links; the exhaustive registry is loaded lazily for specialized objects.

`evidence-relationships.json` stores claim-level many-to-many relationships in the form:

`paper → supported claim/object → support type → rationale`

Reference IDs are the public Atlas master IDs `[1–853]`. The only support types are `Direct`, `Equivalent`, and `Synthesized`. Rebuild and validate both files with:

```sh
node scripts/build-concept-registry.mjs
node scripts/validate-concepts.mjs
```
