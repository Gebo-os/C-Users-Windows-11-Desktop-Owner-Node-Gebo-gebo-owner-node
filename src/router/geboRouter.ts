import type {
  GeboMemoryTarget,
  GeboOutputMode,
  GeboPresence,
  GeboRouteDecision,
  GeboTool,
  GeboWorkflow,
} from "./types";

const realtimeTerms = [
  "latest",
  "today",
  "yesterday",
  "tomorrow",
  "current",
  "breaking",
  "news",
  "weather",
  "traffic",
  "score",
  "price",
  "law",
  "rules",
  "update",
  "recent",
  "right now",
  "social media",
  "twitter",
  "x.com",
  "instagram",
  "tiktok",
  "facebook",
  "kmov",
  "ksdk",
  "fox 2",
  "post-dispatch",
  "stlpr",
];

const repoTerms = [
  "repo",
  "github",
  "commit",
  "file",
  "add",
  "create",
  "update",
  "push",
  "codex",
  "src/",
  ".ts",
  ".md",
  "package.json",
];

const architectureTerms = [
  "architecture",
  "stack",
  "layer",
  "system",
  "router",
  "workflow",
  "framework",
  "infrastructure",
  "presence",
  "owner node",
  "gebo max",
];

const executionTerms = [
  "do it",
  "build",
  "run",
  "make",
  "ship",
  "execute",
  "next move",
  "lock in",
  "production",
];

const creativeTerms = [
  "dream",
  "world",
  "imagine",
  "story",
  "brand",
  "ux",
  "design",
  "creative",
  "image",
];

const relationshipTerms = ["mya", "bestie", "woman", "confidence", "support", "feelings", "emotion"];

function includesAny(input: string, terms: string[]): boolean {
  return terms.some((term) => input.includes(term));
}

function clampConfidence(value: number): number {
  return Math.max(0.1, Math.min(0.99, Number(value.toFixed(2))));
}

export function routeGeboInput(rawInput: string): GeboRouteDecision {
  const input = rawInput.trim();
  const normalized = input.toLowerCase();
  const flags: string[] = [];

  const requiresRealtime = includesAny(normalized, realtimeTerms);
  const isRepoTask = includesAny(normalized, repoTerms);
  const isArchitectureTask = includesAny(normalized, architectureTerms);
  const isExecutionTask = includesAny(normalized, executionTerms);
  const isCreativeTask = includesAny(normalized, creativeTerms);
  const isRelationshipTask = includesAny(normalized, relationshipTerms);
  const isNewsTask = requiresRealtime || normalized.includes("source") || normalized.includes("media");

  if (requiresRealtime) flags.push("realtime_check_required");
  if (isRepoTask) flags.push("repo_action_possible");
  if (isArchitectureTask) flags.push("architecture_impact");
  if (isExecutionTask) flags.push("execution_pressure");

  let intent = "general_guidance";
  let domain = "general";
  let primaryPresence: GeboPresence = "gebo_max";
  let supportPresence: GeboPresence | undefined = "owner_node";
  let tool: GeboTool = "none";
  let workflow: GeboWorkflow = "none";
  let outputMode: GeboOutputMode = "direct_answer";
  let memoryTarget: GeboMemoryTarget = "none";
  let confidence = 0.64;
  let reason = "Default route through Gebo Max for unified final output.";

  if (isNewsTask) {
    intent = "realtime_source_check";
    domain = "news_and_current_information";
    primaryPresence = "news_router";
    supportPresence = "gebo_max";
    tool = "web";
    workflow = "realtime_news_check";
    outputMode = "realtime_news_read";
    memoryTarget = "routing_seed";
    confidence = 0.86;
    reason = "Input needs current source verification before Gebo outputs it as fact.";
  }

  if (isArchitectureTask) {
    intent = "architecture_design";
    domain = "gebo_os_architecture";
    primaryPresence = "gebo_core";
    supportPresence = "owner_node";
    tool = isRepoTask ? "github" : tool;
    workflow = isRepoTask ? "codex_build_flow" : "presence_activation";
    outputMode = isRepoTask ? "repo_action_summary" : "architecture_spec";
    memoryTarget = "architecture_decision";
    confidence = 0.88;
    reason = "Input affects Gebo OS structure, stack, layers, routing, or Presence architecture.";
  }

  if (isRepoTask) {
    intent = "repo_file_operation";
    domain = isArchitectureTask ? "prompt_stack" : "repository";
    primaryPresence = "slatt_tool";
    supportPresence = isArchitectureTask ? "gebo_core" : "gebo_max";
    tool = "github";
    workflow = "codex_build_flow";
    outputMode = "repo_action_summary";
    memoryTarget = isArchitectureTask ? "architecture_decision" : "repo_task";
    confidence = 0.9;
    reason = "Input asks for file/repo/prompt-stack changes and should route to Slatt Tool plus GitHub workflow.";
  }

  if (isExecutionTask && !isRepoTask) {
    intent = "execute_next_move";
    domain = isArchitectureTask ? "gebo_os_architecture" : "execution";
    primaryPresence = "lockin";
    supportPresence = isArchitectureTask ? "gebo_core" : "gebo_max";
    tool = tool === "none" ? "local_manual" : tool;
    workflow = isArchitectureTask ? "presence_activation" : "prompt_to_product";
    outputMode = "step_flow";
    memoryTarget = isArchitectureTask ? "workflow_seed" : "none";
    confidence = 0.82;
    reason = "Input contains execution pressure and needs a clear next move.";
  }

  if (isCreativeTask && !isRepoTask && !isNewsTask) {
    intent = "creative_system_design";
    domain = "creative_presence_or_brand";
    primaryPresence = normalized.includes("mya") ? "mya" : "dream";
    supportPresence = "gebo_core";
    tool = normalized.includes("image") ? "image" : "none";
    workflow = "presence_activation";
    outputMode = "architecture_spec";
    memoryTarget = "product_requirement";
    confidence = 0.78;
    reason = "Input asks for creative world, UX, brand, image, or imagination-heavy system work.";
  }

  if (isRelationshipTask && !isRepoTask) {
    intent = "relational_or_emotional_support";
    domain = "emotional_output_system";
    primaryPresence = "mya";
    supportPresence = "output_system";
    tool = tool === "none" ? "none" : tool;
    workflow = "presence_activation";
    outputMode = "stl_light";
    memoryTarget = "output_pattern";
    confidence = 0.74;
    reason = "Input contains relational, emotional, feminine-supportive, or confidence-related context.";
  }

  return {
    input,
    intent,
    domain,
    primaryPresence,
    supportPresence,
    tool,
    workflow,
    outputMode,
    requiresRealtime,
    memoryTarget,
    confidence: clampConfidence(confidence),
    reason,
    flags,
  };
}
