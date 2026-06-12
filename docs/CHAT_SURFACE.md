# Chat Surface

The Owner Node chat surface is a local-first browser UI that routes messages through:

Browser
-> Owner Node Python server
-> Gebo core prompt stack
-> Ollama
-> `llama3.2:1b`

## Local URL

```text
http://localhost:3000
```

## Remote URL

Use the active Cloudflare tunnel URL from `docs/FINAL_ACCESS_LINKS.md`.

## Runtime

Start the chat server:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\start-owner-node.ps1
```

## Security Rule

Do not expose Ollama directly.

Keep remote access behind Cloudflare authentication before using it as a real control surface.
