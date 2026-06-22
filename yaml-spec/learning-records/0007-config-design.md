---
name: config-design
description: Lesson 7 — capstone synthesis; full CLI config design with block scalars, anchors, tags, strict yaml.v3 loader
metadata:
  type: project
---

User has completed the capstone synthesis lesson (Lesson 7).

**Covered:**
- Designed a complete `syncd` CLI config using all spec features deliberately
- `!!str 1.0` — prevents float implicit typing on version strings
- `&db-defaults` + `<<` merge key — DRY shared DB connection settings
- `!vault` local tag + `VaultRef` custom Unmarshaler — typed credentials, enforced at load time
- `|-` strip block scalar for template format strings — no trailing newline bug
- Flow sequence for short flat lists; sequence-of-mappings for ordered plugin list
- `yaml.Decoder` + `KnownFields(true)` + single-document enforcement in the loader
- `KnownFields` conflict with `_defaults` anchor block — fix: add discard field `Defaults interface{} \`yaml:"_defaults"\``

**Milestone:** Full YAML spec coverage complete per the mission. User can now:
- Read any valid YAML document without looking anything up
- Design a config file using YAML features intentionally
- Explain to a teammate exactly what any construct does and why
- Know the yaml.v3 edge cases (1.1 booleans, octal, map[string]interface{} vs v2, KnownFields)

**Remaining mission items to explore (optional follow-up lessons):**
- Config schema versioning
- Environment variable overlay pattern (e.g. `envconfig` or manual override after unmarshal)
- Generating a config file from Go structs (round-trip marshalling)
- YAML linting tools (`yamllint`, `yq`)
