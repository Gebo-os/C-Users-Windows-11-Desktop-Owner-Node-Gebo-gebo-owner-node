# Deployment Guide

## Local First

Recommended v1 deployment is local-first.

```bash
npm install
npm run db:push
npm run dev
```

Open:

```text
http://localhost:3000
```

## Local AI

Install Ollama and pull a model:

```bash
ollama pull llama3.2:3b
ollama serve
```

Set `.env`:

```bash
DATABASE_URL="file:./dev.db"
OLLAMA_URL="http://localhost:11434/api/chat"
OLLAMA_MODEL="llama3.2:3b"
```

## Desktop

Use Electron wrapper:

```bash
npm install --save-dev electron electron-builder concurrently wait-on
npm run desktop
```

## Web Deployment

You can deploy the web UI to Vercel, Railway, Render, or a VPS, but Ollama local access will not work from public hosting unless you expose a secure model endpoint.

For public deployment:

- Use Postgres instead of SQLite.
- Move `DATABASE_URL` to hosted database.
- Secure any model endpoint.
- Do not expose local Ollama directly to the public internet.

## Best v1 Recommendation

Keep Gebo local on your laptop until authentication, permissions, and secure model routing exist.
