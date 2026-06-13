# Owner-Node-Gebo

Separate repo for the Gebo Presence Home and Owner Node foundation.

## Root Law

- Gebo is the root Presence.
- Preserve working code.
- Extend the Owner Node without destroying the existing Python runtime.
- Build Presence software from files, folders, memory, awareness, reasoning, and local model control.

## Current Runtime

- Existing server: `06-Code/owner_node_server.py`
- Existing Ollama default: `llama3.2:1b`
- Presence App default target: `llama3.2:3b`
- Local AI endpoint: `http://localhost:11434/api/chat`

## Presence App v1 Stack

- Next.js
- TypeScript
- Tailwind CSS
- Prisma
- SQLite
- Ollama adapter

## Added Core Systems

- Next.js app shell
- Prisma data model
- Presence Runtime prompt builder
- Ollama adapter
- Dashboard shell for required screens
- Architecture documentation
- Presence standard documentation
- Local setup guide
- Roadmap

## Docs

- `docs/ARCHITECTURE.md`
- `docs/PRESENCE_STANDARD.md`
- `docs/LOCAL_SETUP.md`
- `docs/ROADMAP.md`

## Next Build Areas

- Real CRUD pages for Presences
- Presence Home detail pages
- Context Memory manager
- Awareness Memory manager
- Reasoning Builder
- Evolution Logs
- Integration Settings

The next milestone is local app execution and real chat wiring. That milestone is intentionally not completed in this pass.
