# Benchmark Results

Benchmark date:
- 2026-06-12

## Tested Models

| Model | Status | Average Latency | Notes |
| --- | --- | ---: | --- |
| `llama3.2:1b` | ok | 28,460 ms | completed 3 prompts |
| `llama3.2:3b` | ok | 58,815.33 ms | completed 3 prompts |

## Readout

- `llama3.2:1b` is the faster local micro model.
- `llama3.2:3b` is the slower but deeper local fallback.
- Both models work locally in Ollama.

## Decision

Default model:
- `llama3.2:1b`

Fallback model:
- `llama3.2:3b`

## Why this matters

The system needs a fast local model for everyday owner-node reasoning.

The 1B model gives the best speed for low-friction multireasoning.

The 3B model remains available when the task needs more depth.

## Next Benchmark Target

If hardware changes, rerun the same benchmark tree against:
- a larger reasoning model
- a coding-focused model
- the current micro model

Keep the result in Git every time.
