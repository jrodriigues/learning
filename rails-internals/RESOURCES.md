# Rails Internals Resources

## Knowledge

- [Rack Specification (SPEC.rdoc)](https://github.com/rack/rack/blob/main/SPEC.rdoc)
  The authoritative spec for the Rack interface. Use for: exactly what the env hash must contain, what a valid response looks like, what the Hijack API is.

- [Rails Source Code on GitHub](https://github.com/rails/rails)
  Primary source for all internals. Key dirs: `actionpack/`, `railties/`, `activesupport/`. Use for: tracing any behaviour to its actual implementation.

- [Rails Guides — Rails Initialization Process](https://guides.rubyonrails.org/initialization.html)
  Official walkthrough of what happens when you run `rails server`. Use for: bootup sequence, Railties, initializers.

- [Rails Guides — Rails on Rack](https://guides.rubyonrails.org/rails_on_rack.html)
  Official guide on how Rails sits on top of Rack, the middleware stack, and how to inspect/modify it. Use for: middleware ordering and configuration.

- [Rails Guides — Engines](https://guides.rubyonrails.org/engines.html)
  Official guide on Engines and how they mount into a host app. Use for: plugin architecture, mountable engines, Railties.

- [Book: _Rebuilding Rails_ — Noah Gibb](https://rebuilding-rails.com)
  Builds a Rails-like MVC framework from scratch in Ruby. Exceptional for understanding *why* Rails is structured the way it is. Use for: Rack apps, routing, controllers, middleware — any time you want to understand a concept by building a minimal version of it.

- [Tenderlove's Blog (Aaron Patterson)](https://tenderlovemaking.com)
  Deep technical posts from a longtime Rails core contributor. Use for: GC internals, Ractors, ActionDispatch internals, anything performance-related.

- [Rails Core Team Blog / This Week in Rails](https://rubyonrails.org/blog/)
  Official news on what's changing in Rails. Use for: context on why internal decisions were made.

- [RailsConf / RubyConf talks (YouTube)](https://www.youtube.com/@railsofficial)
  Conference talks from core contributors. Use for: high-level explanations of subsystems (middleware, ActionDispatch, Zeitwerk, etc.) with diagrams and examples.

## Wisdom (Communities)

- [Rails GitHub Issues & PRs](https://github.com/rails/rails/issues)
  Where Rails contributors discuss bugs, design decisions, and new features. Use for: understanding *why* the code is the way it is; finding good first contribution issues.

- [Ruby on Rails Discussions (GitHub)](https://github.com/rails/rails/discussions)
  Q&A and RFCs for Rails. Use for: design intent questions.

- [r/rails](https://www.reddit.com/r/rails/)
  General Rails community. Moderate signal — better for ecosystem questions than deep internals.

- [#rails-contrib channel on Ruby on Rails Slack](https://www.rubyonrails.link/)
  Active contributor community. Use for: getting a sense of current contribution priorities and asking core team questions.

## Gaps

- No canonical written resource on ActionDispatch routing internals (journey gem). The source code and RailsConf talks are currently the best approach.
- Limited up-to-date resources on Zeitwerk (autoloading) integration with Rails — the Zeitwerk README and changelogs are the most reliable.
