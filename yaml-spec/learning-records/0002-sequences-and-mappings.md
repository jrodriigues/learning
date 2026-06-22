---
name: sequences-and-mappings
description: Lesson 2 — sequences, mappings, block/flow styles, nesting, yaml.v3 struct tags and Go type mapping
metadata:
  type: project
---

User has been taught sequences and mappings (Lesson 2).

**Covered:**
- Block vs flow style for both sequences and mappings
- Nesting sequences inside mappings and vice versa
- Dash-on-same-line vs dash-on-own-line for sequences of mappings
- yaml.v3 type mapping: sequences → `[]T`, mappings → struct or `map[string]T`
- Struct tags: `yaml:"name"`, `yaml:",omitempty"`, `yaml:",inline"`, `yaml:"-"`
- Default key name lowercasing (no separator — use explicit tags)
- v2 → v3 migration gotcha: `map[interface{}]interface{}` vs `map[string]interface{}`
- Duplicate keys accepted silently (last wins)
- Null entries in sequences (`-` with no value)
- Map key ordering is undefined — use sequences for ordered steps

**Zone of proximal development:** User can now describe the full scalar + collection type system. Natural next step: block scalars (literal `|` and folded `>` styles) — essential for multi-line config values like embedded SQL, templates, or long descriptions.

**Implications for [[prior-knowledge-and-mission]]:** The map-ordering gotcha is a direct config design input — the user should default to sequences of mappings for any ordered list of named steps or phases.
