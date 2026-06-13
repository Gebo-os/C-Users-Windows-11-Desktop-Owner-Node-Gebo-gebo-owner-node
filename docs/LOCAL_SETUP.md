# Local Setup

## Requirements

- Node.js
- npm
- Ollama
- Local model such as `llama3.2:3b`

## Install

```bash
npm install
```

## Environment

Create `.env`:

```bash
DATABASE_URL="file:./dev.db"
OLLAMA_URL="http://localhost:11434/api/chat"
```

## Database

```bash
npm run db:push
```

## Development

```bash
npm run dev
```

## Existing Owner Node

The previous Python server remains in `06-Code/owner_node_server.py`. Keep it available while the Next.js Presence App matures.
