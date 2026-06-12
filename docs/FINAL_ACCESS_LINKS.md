# Final Access Links

These are the correct access targets for Gebo once the runtime is running.

## Laptop Link

```text
http://localhost:3000
```

Use this on the same Windows machine where the Owner Node runs.

## Mobile Link for iPhone

Best live option:

```text
https://career-flex-extra-res.trycloudflare.com
```

Fallback only on the same Wi-Fi network:

```text
http://<your-pc-lan-ip>:3000
```

## Ollama Link

Local only:

```text
http://localhost:11434
```

Do not expose this directly to the public internet.

## Recommended iOS Flow

1. Open the tunnel URL on iPhone.
2. Authenticate.
3. Open Open WebUI.
4. Route through Gebo Owner Node.
5. Keep Ollama local behind the edge.

## Reality Check

The Cloudflare quick tunnel above is live for this session.
The localhost link remains the best local laptop link.
