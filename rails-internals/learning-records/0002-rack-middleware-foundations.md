---
name: rack-middleware-foundations
description: Core middleware pattern — initialize(app), call(env), before/delegate/after — and how to add middleware to Rails
metadata:
  type: project
---

Lesson 2 introduced the middleware pattern. Key insights to reinforce in future lessons:

- A middleware is just a Rack app that stores `@app` and delegates to it in `#call`
- Three mutation points: env (before), response (after), short-circuit (skip @app entirely)
- Rails middleware stack lives in `railties/lib/rails/application/default_middleware_stack.rb`
- All ActionDispatch middlewares are in `actionpack/lib/action_dispatch/middleware/`
- Stack ordering is the key operational skill: `insert_before`/`insert_after` vs `use`
- `bin/rails middleware` is the diagnostic command for inspecting the stack

**Why:** User's goal is reading stack traces and understanding where behaviour originates — middleware is the layer where most "magic" actually happens.

**How to apply:** In Lesson 3 (ActionDispatch), connect back to specific middleware classes the user is now equipped to read in source. Avoid re-explaining the basic pattern.
