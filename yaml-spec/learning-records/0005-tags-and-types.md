---
name: tags-and-types
description: Lesson 5 — explicit tags (!!str, !!int, etc.), local/custom tags, yaml.Node tag inspection, custom Unmarshaler
metadata:
  type: project
---

User has been taught tags and explicit types (Lesson 5).

**Covered:**
- Tag syntax: `!!shorthand`, full URI `!<tag:yaml.org,2002:str>`, local `!mytype`
- Core schema tags: `!!str`, `!!int`, `!!float`, `!!bool`, `!!null`, `!!seq`, `!!map`
- `!!str` vs quoting: equivalent for strings; quoting is idiomatic, `!!str` is self-documenting
- Tags on collections (`!!seq`, `!!map`) — valid but rarely needed in config files
- Local tags (`!vault`, `!duration`) for application-defined type semantics
- yaml.v3 silently discards unrecognised tags when the value can be assigned to the target field
- `yaml.Node.Tag` holds the shorthand form `"!!str"`, not the full URI
- Custom `yaml.Unmarshaler` interface for acting on local tags
- Practical rule: prefer quoting for ambiguous scalars; use local tags only when Go code must enforce the type

**Zone of proximal development:** User has now covered the full YAML data model (scalars, collections, anchors, tags). Natural next step: documents and streams (multi-document YAML with `---` and `...`) — completes full-spec coverage before the synthesis lesson on config design.

**Implications for [[prior-knowledge-and-mission]]:** Local tags (`!vault`, `!duration`) are a clean pattern for a Go CLI config that needs to distinguish plain strings from secret references or typed durations — implement via `yaml.Unmarshaler` rather than post-unmarshal string parsing.
