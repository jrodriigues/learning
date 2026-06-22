# Prior knowledge and mission established

User is building a CLI program in Go that uses a YAML configuration file. They want full YAML spec coverage — not just the common subset — so they can make deliberate design decisions about the config schema. The runtime is `gopkg.in/yaml.v3`.

**Evidence:** stated directly in the teaching request.

**Implications:** Prioritise yaml.v3 behaviour over the abstract spec where they diverge (YAML 1.1 vs 1.2 booleans, octal integers). Frame every lesson around config file design choices, not YAML authoring tooling.
