# Gebo Presence App Architecture

## Status

This repository already contains a Python Owner Node server in `06-Code/owner_node_server.py` that serves a local preview and talks to Ollama.

The Presence App v1 adds a Next.js full-stack layer beside the existing Owner Node instead of replacing it.

## Architecture

```text
Existing Python Owner Node
        |
        v
Gebo Presence App UI
        |
        v
Presence Runtime
        |
        v
Context Memory + Awareness Memory + Reasoning + Evolution
        |
        v
Ollama / Local Models
```

## Core Layers

- App UI: dashboard and management screens.
- Prisma/SQLite: local-first persistence.
- Presence Runtime: builds dynamic Presence system prompts.
- Ollama Adapter: local model bridge.
- Documentation: keeps product architecture synchronized.

## Rule

Do not destroy working Owner Node code. Extend around it until the new app is proven stable.
