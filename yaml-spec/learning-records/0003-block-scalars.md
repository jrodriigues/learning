---
name: block-scalars
description: Lesson 3 — literal | and folded > block scalar styles, chomping indicators, indentation indicator, yaml.v3 round-trip behaviour
metadata:
  type: project
---

User has been taught block scalars (Lesson 3).

**Covered:**
- Literal `|` — preserves every newline exactly
- Folded `>` — folds single newlines to spaces; blank lines and extra-indented lines stay literal
- Chomping indicators: clip (default, one trailing `\n`), strip (`-`, no trailing `\n`), keep (`+`, all trailing newlines)
- Indentation indicator (digit after the block header) — rarely needed, mainly for first-blank-line edge case
- Decision guide: `|` for shell scripts, SQL, templates; `>` for prose, help text
- `|-` practical tip: use when the value feeds `exec.Command` to avoid a stray trailing newline
- yaml.v3 auto-chooses block literal style when marshalling strings containing newlines

**Zone of proximal development:** User now understands all scalar forms (types, quoting, block styles) and both collection types. Natural next step: anchors and aliases — the YAML feature most directly useful for DRY config files (the mission explicitly calls these out).

**Implications for [[prior-knowledge-and-mission]]:** The `|-` strip tip is directly actionable in the CLI config — any config value that will be passed to a shell command or template should use `|-` to avoid silent trailing-newline bugs.
