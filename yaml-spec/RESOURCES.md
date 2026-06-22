# YAML Spec Resources

## Knowledge

- [YAML 1.2.2 Specification — yaml.org](https://yaml.org/spec/1.2.2/)
  The authoritative reference. Dense, but every section is worth reading for full-spec coverage. Use for: resolving any ambiguity about what YAML actually permits.

- [YAML 1.1 Spec (legacy, still widely implemented) — yaml.org](https://yaml.org/spec/1.1/)
  Many YAML libraries (including Go's yaml.v2 and partially yaml.v3) implement YAML 1.1, not 1.2. Use for: understanding why `yes`/`no`/`on`/`off` parse as booleans in some libraries.

- [gopkg.in/yaml.v3 GoDoc](https://pkg.go.dev/gopkg.in/yaml.v3)
  The Go library the user's CLI will use. Use for: struct tags, custom marshallers, type mapping between YAML and Go.

- [YAML Multiline Strings — yaml-multiline.info](https://yaml-multiline.info/)
  Interactive cheat sheet for every combination of block scalar style (literal vs folded) and chomping indicator (clip/strip/keep). Use for: designing multi-line config values.

- [Learn YAML in Y Minutes — learnxinyminutes.com](https://learnxinyminutes.com/docs/yaml/)
  Fast, example-driven overview. Use for: quick recall exercises and checking syntax assumptions.

## Wisdom (Communities)

- [r/golang — Reddit](https://reddit.com/r/golang)
  Active Go community. Use for: practical questions about yaml.v3 behaviour, config file design patterns.

- [YAML Discussion — GitHub Issues, yaml/yaml](https://github.com/go-yaml/yaml/issues)
  Source of truth for Go yaml.v3 edge cases and known divergences from the spec.
