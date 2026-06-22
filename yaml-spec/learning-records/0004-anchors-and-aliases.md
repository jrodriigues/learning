---
name: anchors-and-aliases
description: Lesson 4 — anchors (&), aliases (*), merge key (<<), yaml.v3 copy semantics, KnownFields gotcha
metadata:
  type: project
---

User has been taught anchors and aliases (Lesson 4).

**Covered:**
- `&name` defines an anchor on any node (scalar, sequence, or mapping)
- `*name` expands an alias — resolved at parse time before Go sees the document
- `<<` merge key — merges aliased mapping keys into the current mapping; local keys win over merged keys
- Merging multiple anchors via a sequence: `<<: [*a, *b]` — first listed wins on conflict
- yaml.v3 expands aliases into independent copies — Go structs share no memory
- Circular aliases are a parse error
- Duplicate anchor names: second definition shadows the first from that point
- Practical pattern: `_defaults` anchor-only block at the top; yaml.v3 ignores unknown keys by default
- `KnownFields(true)` catches unknown keys but will flag anchor-only blocks — design around this

**Zone of proximal development:** User has now covered all the major structural features of YAML. Natural next step: tags and explicit types (`!!str`, `!!int`, `!!map`, custom tags) — the last mission item before practical config design exercises. Alternatively: documents and directives (multi-document streams) if config files with multiple docs become relevant.

**Implications for [[prior-knowledge-and-mission]]:** The merge key pattern is directly applicable to the Go CLI config — use `_defaults` for shared timeout/log settings across multiple service blocks.
