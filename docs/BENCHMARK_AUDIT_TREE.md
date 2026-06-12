# Benchmark Audit Tree

This tree keeps the build honest.

## Tree

Audit
-> Inventory
-> Runtime Check
-> Model Check
-> Security Check
-> Integration Check
-> Benchmark
-> Compare
-> Decide
-> Commit

## What each step means

### Inventory

List the repo, docs, scripts, and current runtime pieces.

### Runtime Check

Verify local services are actually running.

### Model Check

Verify Ollama sees the installed models.

### Security Check

Verify no raw public exposure is happening.

### Integration Check

Verify the provider ladder and repo seeds are documented.

### Benchmark

Measure model latency and output quality.

### Compare

Compare micro model vs stronger small model.

### Decide

Pick the default model for the current hardware.

### Commit

Record the result in Git.

## Practical Output

The benchmark should answer:
- which model is fastest
- which model is best balanced
- which model should be default
- which model should be fallback

## Founder Rule

Do not ship a complex system before the benchmark audit says the path is worth it.
