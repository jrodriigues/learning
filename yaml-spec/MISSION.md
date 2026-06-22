# Mission: The YAML Specification

## Why
To build a CLI program in Go with a well-structured, configuration-driven design — and to do that well, I need to know the full YAML spec, not just the subset I've stumbled across. The goal is to make deliberate, informed choices about how the config file is shaped, knowing exactly what features are available.

## Success looks like
- Read the YAML spec and understand every construct without looking anything up
- Design a config file that uses YAML features (anchors, aliases, multi-line strings, type tags) intentionally and correctly
- Know the full set of scalar types and their edge cases — especially the ones that surprise Go's `gopkg.in/yaml.v3` unmarshaller
- Distinguish block style from flow style and know when each is appropriate
- Explain to a teammate exactly what any valid YAML document does and why

## Constraints
- Learning for a practical purpose (Go CLI config), not for YAML authoring tools or editors
- Wants full-spec coverage, not just the common subset
- Go + `gopkg.in/yaml.v3` is the runtime — edge cases that matter are the ones that affect Go unmarshalling

## Out of scope
- YAML streaming/parsing internals (SAX-style events)
- Writing a YAML parser
- YAML in contexts unrelated to config files (CI pipelines, Kubernetes manifests, etc.) unless it illustrates the spec
