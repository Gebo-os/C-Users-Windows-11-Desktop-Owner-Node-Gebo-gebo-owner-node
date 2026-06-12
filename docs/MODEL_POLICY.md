# Model Policy

## Default

Use `llama3.2:1b` as the first local reasoning model.

## Fallback

Use `llama3.2:3b` when the work needs more depth and the latency tradeoff is acceptable.

## Rules

- Keep one active model path at a time.
- Prefer local Ollama before any remote provider.
- Benchmark before making model changes permanent.
- Do not let the model list become the system.

## Benchmarked Result

- `llama3.2:1b` averaged `28,460 ms`
- `llama3.2:3b` averaged `58,815.33 ms`

## Practical Interpretation

On this hardware, the micro model is the right default for responsive owner-node work.

The 3B model is better as the heavier second choice.
