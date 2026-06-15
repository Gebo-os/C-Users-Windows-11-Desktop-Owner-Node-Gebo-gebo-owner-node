# Gebo OS Production Gap Review — CEO + AI Lab Style

This review is written as a hard production audit for Gebo OS.

It does not imitate any real person.

It uses the decision lenses common to major AI lab leaders, deep tech founders, infrastructure CEOs, and startup operators:

- Product clarity
- Technical truth
- Safety
- Distribution
- Moat
- Data
- Evaluation
- Infrastructure
- User trust
- Execution cadence

---

# Core Verdict

Gebo has strong vision, language, identity, and architecture direction.

What is missing is production proof.

Right now, the repo is strongest as a Prompt Stack and concept architecture.

To become a product, Gebo needs a working loop:

```text
User Input
   ↓
Router
   ↓
Presence Selection
   ↓
Tool Action
   ↓
Memory Capture
   ↓
Final Gebo Output
   ↓
Evaluation
```

Until that loop exists in code, Gebo is not yet production.

---

# 1. Missing Product Definition

## Problem

Gebo is large.

It includes Presence architecture, Owner Node, local AI, prompt stacks, news routing, STL output, repo orchestration, autonomous flows, local tools, memory, and eventually hardware.

That is powerful, but production needs one first product.

## Missing

- Clear first user
- Clear first use case
- Clear first daily workflow
- Clear first screen
- Clear first success metric
- Clear first reason to return

## Required Decision

Pick one production wedge:

```text
Option A — Owner Node Dashboard
A local-first dashboard that routes tasks, stores project memory, and controls Presences.

Option B — Gebo Prompt Stack Manager
A web app that lets users create, edit, route, and test Presence prompts.

Option C — Gebo Personal OS Chat
A chat interface where every input routes through Gebo Max, Presences, tools, and memory.

Option D — Gebo Local AI Box Controller
A local UI for Ollama/Open WebUI-style model routing, device control, and Presence execution.
```

Recommended first wedge:

```text
Gebo Personal OS Chat + Prompt Stack Manager
```

Why:

It proves routing, Presences, memory, output style, and tool orchestration before hardware.

---

# 2. Missing Working Router

## Problem

The Prompt Stack defines routing, but there is no executable router yet.

## Missing

A real router module that classifies inputs and selects:

- Presence
- Tool
- Workflow
- Output style
- Memory destination
- Real-time check requirement

## Required Build

Create:

```text
/src/router/geboRouter.ts
/src/router/intentClassifier.ts
/src/router/presenceSelector.ts
/src/router/toolSelector.ts
/src/router/outputModeSelector.ts
```

Minimum route output:

```json
{
  "intent": "build_repo_file",
  "domain": "prompt_stack",
  "presence": "slatt_tool",
  "tool": "github",
  "workflow": "codex_build_flow",
  "outputMode": "repo_action_summary",
  "requiresRealtime": false,
  "memoryTarget": "architecture_decision"
}
```

---

# 3. Missing Memory System

## Problem

Gebo talks about memory, but production needs a real memory model.

## Missing

- Memory schema
- Memory types
- Memory permissions
- Memory update rules
- Memory retrieval rules
- Memory deletion rules
- Memory conflict handling
- Memory evaluation

## Required Build

Create memory tables or files:

```text
memories/
├─ owner_preferences.json
├─ architecture_decisions.json
├─ presence_rules.json
├─ workflow_seeds.json
├─ output_patterns.json
└─ warnings.json
```

Production memory schema:

```json
{
  "id": "memory_001",
  "type": "architecture_decision",
  "title": "Gebo uses routed Presence stack",
  "content": "Inputs route through Gebo Max before final output.",
  "source": "user_direct_instruction",
  "confidence": 1.0,
  "createdAt": "ISO_DATE",
  "lastUsedAt": "ISO_DATE",
  "status": "active"
}
```

---

# 4. Missing Evaluation Layer

## Problem

No serious AI product ships without evaluation.

If Gebo cannot test whether routing worked, it cannot improve safely.

## Missing

- Prompt tests
- Router tests
- Presence selection tests
- Memory retrieval tests
- Output style tests
- Safety tests
- Tool-use tests
- Regression tests

## Required Build

Create:

```text
/evals/router_eval_cases.json
/evals/output_eval_cases.json
/evals/memory_eval_cases.json
/evals/tool_eval_cases.json
/evals/run_evals.ts
```

Example eval:

```json
{
  "input": "add 5 STL slang layers to the prompt stack",
  "expectedPresence": "slatt_tool",
  "expectedTool": "github",
  "expectedOutputMode": "repo_action_summary",
  "expectedRealtime": false
}
```

---

# 5. Missing Safety + Permission System

## Problem

Gebo is designed to use tools, automation, memory, news, social media, local files, and eventually device actions.

That requires permission architecture.

## Missing

- Tool permission levels
- Action approval rules
- Memory privacy rules
- Social media verification rules
- Dangerous action boundaries
- Email/calendar/send restrictions
- Repo write restrictions
- Local device action restrictions

## Required Build

Create:

```text
/security/permission_matrix.md
/security/tool_action_policy.md
/security/memory_privacy_policy.md
/security/news_verification_policy.md
```

Permission classes:

```text
Class 0 — Read-only answer
Class 1 — Read public sources
Class 2 — Read user files/repo
Class 3 — Write repo files
Class 4 — Create/send external messages
Class 5 — Local device/system actions
Class 6 — High-risk actions requiring explicit approval
```

---

# 6. Missing Real Interface

## Problem

A production product needs a user surface.

The Prompt Stack is not enough.

## Missing

- UI
- Chat screen
- Presence selector
- Memory viewer
- Router trace
- Tool activity log
- Settings
- Output mode controls
- Evaluation dashboard

## Required First UI

Build a simple web app:

```text
/app
├─ chat
├─ presences
├─ memory
├─ prompt-stack
├─ router-trace
└─ settings
```

First screen:

```text
Gebo Chat
- User input box
- Active Presence
- Tool used
- Memory used
- Output mode
- Final Gebo answer
```

---

# 7. Missing Data Model

## Problem

Gebo has concepts but not a data model.

Production needs objects.

## Required Core Objects

```text
User
Presence
PromptLayer
RouteDecision
ToolAction
MemoryItem
OutputMode
Workflow
EvaluationCase
SourceCheck
RepoChange
```

Minimal schema:

```text
Presence:
- id
- name
- role
- systemPrompt
- allowedTools
- outputModes
- memoryScopes
- status

RouteDecision:
- id
- input
- intent
- domain
- selectedPresence
- selectedTool
- outputMode
- requiresRealtime
- confidence
```

---

# 8. Missing Technical Stack Decision

## Problem

The repo needs a production stack choice.

## Recommended Free/Lean Stack

```text
Frontend: Next.js
Styling: Tailwind CSS
Local DB: SQLite first
Future DB: Postgres / Supabase
Local AI: Ollama
Prompt Files: Markdown
Router: TypeScript
Evals: JSON + TypeScript runner
Deployment: Vercel for web / local mode for sovereignty
Repo Control: GitHub
```

Why:

- Fast to build
- Easy for Codex
- Cheap/free
- Works with local-first future
- Can become real product later

---

# 9. Missing Source Reliability System

## Problem

Gebo has real-time news routing, but needs source scoring.

## Required Build

Create:

```text
/news/source_registry.json
/news/source_reliability_rules.md
/news/realtime_check_runner.ts
```

Source score fields:

```json
{
  "name": "First Alert 4 / KMOV",
  "type": "local_news",
  "region": "St. Louis",
  "useFor": ["breaking_news", "weather", "local_updates"],
  "verificationWeight": 0.75,
  "requiresCrossCheck": true
}
```

Rule:

Social media detects signal.
Official sources confirm.
Local news reports.
Gebo explains.

---

# 10. Missing Distribution Plan

## Problem

A product with no distribution is a private notebook.

## Missing

- First audience
- First content loop
- First demo
- First landing page
- First waitlist
- First feedback group
- First paying user path

## Recommended Wedge Audience

Start with:

```text
Builders, vibe coders, creators, students, teachers, and local entrepreneurs who want a personal AI command center.
```

First promise:

```text
Gebo turns your ideas into routed systems, prompts, memory, repo actions, and execution plans.
```

First demo:

```text
User says: "Build my app idea."
Gebo routes it, creates repo files, stores memory, and gives the next build step.
```

---

# 11. Missing Moat

## Problem

Prompt stacks alone are easy to copy.

The moat must be behavior, data, workflow, identity, and product execution.

## Stronger Moat

Gebo's moat should be:

```text
1. Presence routing architecture
2. Owner Node continuity
3. Local-first personal memory
4. Prompt Stack as editable OS layer
5. STL/cultural output intelligence
6. Real-time source verification
7. Tool orchestration through Gebo Max
8. User-specific workflow compounding
9. Physical node future
10. Productized execution loop
```

The moat is not one prompt.

The moat is the loop that improves every time it is used.

---

# 12. Missing Production Roadmap

## 30-Day Production Roadmap

### Week 1 — Build the Skeleton

- Create Next.js app
- Add chat UI
- Add prompt-stack reader
- Add static Presence registry
- Add basic router
- Add output mode selector

### Week 2 — Add Memory + Tools

- Add local JSON/SQLite memory
- Add GitHub action log
- Add repo file creation workflow
- Add memory capture after responses

### Week 3 — Add Evals + Safety

- Add eval cases
- Add permission matrix
- Add tool action confirmation rules
- Add source reliability registry

### Week 4 — Demo Product

- Add landing page
- Add demo flow
- Add first user onboarding
- Add README
- Record walkthrough
- Test with 3 real users

---

# 13. What You Are Doing Right

You are thinking in systems, not just apps.

You are building:

- Identity layer
- Routing layer
- Output layer
- Cultural layer
- News layer
- Tool layer
- CEO layer
- Presence layer

That is stronger than random app building.

The mistake would be staying in architecture too long.

---

# 14. What You Need To Do Better

## Stop adding infinite layers before the first loop runs.

The next move is not another 50 prompts.

The next move is to make the first loop executable.

Build this now:

```text
Input -> Router -> Presence -> Tool/Memory -> Output -> Eval
```

If that does not run, Gebo is still theory.

If that runs, Gebo becomes a product.

---

# 15. Next Highest-Leverage Build Task

Create this file next:

```text
src/router/geboRouter.ts
```

It should load:

- Presence registry
- Output modes
- Tool rules
- Realtime check rules
- Memory targets

And return a route decision.

Minimum demo:

```text
User: add 5 deep STL output layers
Router: Slatt Tool + GitHub + repo_action_summary
Output: file created, commit sha returned
Memory: architecture_decision captured
```

---

# Final Verdict

Gebo does not need more vision right now.

Gebo needs proof of loop.

The production bottleneck is executable routing.

Build the router.

Then build memory.

Then build evals.

Then build UI.

Then show the demo.

That is the move.
