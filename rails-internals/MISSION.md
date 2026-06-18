# Mission: Rails Internals

## Why
To move from being a Rails user to a Rails understander — able to read a stack trace and know *why* it happened, make informed architectural decisions about apps and APIs, and eventually contribute changes to the framework itself.

## Success looks like
- Read a Rails stack trace and identify exactly which layer (Rack, middleware, ActionDispatch, ActionController) is responsible
- Write a custom Rack middleware and understand where it sits in the request lifecycle
- Explain how a request travels from the socket to a controller action and back
- Read and navigate the Rails source code with confidence
- Understand how Engines and Railties work well enough to write or debug one
- Open a Rails issue or PR with genuine understanding of the affected subsystem

## Constraints
- Already a working Rails developer — no time wasted on syntax or basic Rails usage
- Goal is depth on internals, not breadth on features
- Contributing to Rails is a longer-horizon goal, not immediate pressure

## Out of scope
- Basic Rails CRUD tutorials
- Deployment, DevOps, infrastructure
- Frontend (Hotwire, Turbo, Stimulus) unless it touches the request lifecycle
