# Tunnel Layer

This layer exposes the local Gebo stack safely over the internet.

## Goal

Give iPhone, iPad, laptop, and future mobile access to the local Owner Node without opening raw ports to the public internet.

## Recommended Flow

Internet
-> Cloudflare Tunnel
-> Authentication
-> Open WebUI
-> Gebo Owner Node
-> Ollama

## What this layer does

- creates a secure edge endpoint
- keeps Ollama local
- keeps the shell local
- lets remote devices reach the app through one protected URL

## What this layer does not do

- it does not expose Ollama directly
- it does not remove authentication
- it does not replace the Owner Node
- it does not store secrets in the repo

## Local Runtime Targets

- Open WebUI / Owner Node UI: `http://localhost:3000`
- Ollama: `http://localhost:11434`

## Quick Tunnel Mode

Use quick tunnel mode when you want a temporary public URL for testing:

```powershell
cloudflared tunnel --url http://localhost:3000
```

## Persistent Tunnel Mode

Use a named Cloudflare Tunnel later when you want a stable domain and full auth controls.

That path requires Cloudflare account setup and domain configuration, which should stay outside the repo.

## Security Rules

- Never expose port `11434` directly.
- Never expose an unauthenticated shell.
- Never store tunnel credentials in Git.
- Prefer authentication before any public exposure.

## Reality Check

This repo can prepare the tunnel layer, but the tunnel is only live when `cloudflared` is installed and running.
