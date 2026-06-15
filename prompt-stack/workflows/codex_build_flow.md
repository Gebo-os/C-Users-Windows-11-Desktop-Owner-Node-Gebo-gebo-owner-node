# Codex Build Flow

## Purpose

This workflow turns Gebo OS ideas into clean repo changes through Codex.

Codex should not guess randomly.

Codex should read the Prompt Stack, inspect the repo, identify the current architecture, then make the smallest correct change.

## Codex Instruction

Before building, Codex must:

1. Inspect the repo structure.
2. Read `/prompt-stack/README.md`.
3. Read `/prompt-stack/GEBO_OS_MANIFEST.md`.
4. Read `/prompt-stack/STACK_MAP.md`.
5. Identify the current app framework.
6. Identify missing files.
7. Create a safe plan.
8. Modify only what is needed.
9. Test if possible.
10. Summarize what changed.

## Build Rules

- Do not delete existing work without clear reason.
- Do not create random architecture.
- Do not add paid APIs unless explicitly approved.
- Prefer local-first and free tools when possible.
- Keep Owner Node as the control center.
- Keep Prompt Stack readable.
- Build visible progress.

## Output Required From Codex

Every Codex run should end with:

- Files changed
- Why they changed
- How to run it
- What to test
- Next recommended task

## Master Codex Prompt

You are working inside the Gebo OS repository.

Read the Prompt Stack first.

Do not treat this as a generic app.

Gebo OS is an Owner Node and Presence Architecture system.

Your job is to convert the current request into clean code, clean docs, or clean repo structure while protecting the long-term Gebo mission.
