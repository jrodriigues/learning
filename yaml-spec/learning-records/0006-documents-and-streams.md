---
name: documents-and-streams
description: Lesson 6 — stream/document/node hierarchy, --- and ... markers, %YAML/%TAG directives, yaml.v3 Decoder, multi-doc gotchas
metadata:
  type: project
---

User has been taught documents and streams (Lesson 6).

**Covered:**
- Stream → Document → Root node hierarchy
- `---` document start marker (mandatory with directives or in multi-doc streams; optional otherwise)
- `...` document end marker (asymmetric with `---` — does not reset anchor scope until next `---`)
- `%YAML` directive — parsed by yaml.v3 but ignored (behaviour doesn't change)
- `%TAG` directive — shorthand prefix for custom tag URIs; rare in config files
- Multi-document streams: anchors are scoped per document; cross-document aliases are a parse error
- `yaml.Unmarshal` silently drops all documents after the first
- `yaml.Decoder` + `io.EOF` loop for reading multiple documents
- Pattern for enforcing single-document config: decode once, check second decode returns `io.EOF`
- Empty documents are valid (decode to zero value)

**Zone of proximal development:** Full YAML spec coverage is now complete (scalars, collections, block scalars, anchors, tags, documents). The natural capstone is a synthesis lesson: designing a real Go CLI config file that deliberately uses the spec features covered — block scalars, anchors/merge keys, explicit tags, strict single-document enforcement.

**Implications for [[prior-knowledge-and-mission]]:** Use `yaml.Decoder` + single-document enforcement in the CLI's config loader rather than `yaml.Unmarshal` — prevents silent truncation from a stray `---` in the config file.
