# Integration Ladder

This is the complexity order for external systems.

## Rule

Start local.
Add remote layers only when they improve leverage.
Keep Gebo as the root coordinator.

## Ladder

1. Local core
   - Ollama
   - local memory
   - local preview UI

2. Secure edge
   - Cloudflare Tunnel
   - authentication
   - mobile access

3. Work and creation systems
   - GitHub
   - OpenAI
   - Anthropic
   - xAI
   - Higgsfield
   - n8n
   - LangGraph

4. Retrieval and knowledge systems
   - GitHub repo index
   - docs index
   - source notes
   - RAG seed repos

## Provider Roles

### xAI

Best for:
- real-time style awareness
- public conversation awareness
- fast iteration on product voice

### Anthropic

Best for:
- long-form code review
- structured writing
- thoughtful refactors

### OpenAI

Best for:
- reasoning
- tool orchestration
- product logic
- agentic flows when needed

### Higgsfield

Best for:
- creative media
- visual generation
- future content pipelines

### n8n

Best for:
- automation
- scheduled workflows
- glue between systems

### LangGraph

Best for:
- stateful control flow
- branching reasoning
- complex multi-step orchestration

## Default Policy

- Disable all paid providers by default.
- Prefer local Ollama first.
- Add providers only when they provide measurable value.
- Never let a provider become the system.

## Failure Rule

If a provider is down, the core Gebo path must still work locally.
