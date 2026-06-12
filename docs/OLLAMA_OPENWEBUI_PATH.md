# Secure Ollama / Open WebUI Path

Do not expose an unauthenticated Ollama or Open WebUI instance directly to the public internet.

## Recommended Path

Internet
-> Cloudflare Tunnel
-> Authentication
-> Open WebUI
-> Gebo Owner Node
-> Ollama Models

## Why this path

This gives:

- laptop access
- phone access
- iPad access
- future Gebo app access
- secure remote access
- no port forwarding

## What not to do yet

- Do not publish Ollama port `11434` directly.
- Do not expose the Owner Node shell without authentication.
- Do not leave Open WebUI open to the public without a gate.

## Small local model to start with

For the lightest practical local model, start with:

```bash
ollama pull llama3.2:1b
```

If you want a stronger small model later, move up to a compact 3B-class option.

## Operating rule

Keep the model local.

Keep the shell local.

Keep the public edge authenticated.

Let Gebo own the continuity, not the internet.
