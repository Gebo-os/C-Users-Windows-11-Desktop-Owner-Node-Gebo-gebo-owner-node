export type GeboPresence =
  | "owner_node"
  | "gebo_core"
  | "gebo_max"
  | "lockin"
  | "slatt_tool"
  | "dream"
  | "mya"
  | "news_router"
  | "output_system";

export type GeboTool =
  | "none"
  | "github"
  | "web"
  | "file"
  | "code"
  | "calendar"
  | "email"
  | "contacts"
  | "automation"
  | "image"
  | "local_manual";

export type GeboWorkflow =
  | "none"
  | "codex_build_flow"
  | "repo_audit_flow"
  | "local_llm_flow"
  | "prompt_to_product"
  | "realtime_news_check"
  | "memory_capture"
  | "presence_activation";

export type GeboOutputMode =
  | "direct_answer"
  | "copybox"
  | "architecture_spec"
  | "repo_action_summary"
  | "step_flow"
  | "correction"
  | "build_contract"
  | "realtime_news_read"
  | "gebo_builder"
  | "gebo_ceo"
  | "stl_light"
  | "stl_direct";

export type GeboMemoryTarget =
  | "none"
  | "owner_preference"
  | "mission_memory"
  | "architecture_decision"
  | "routing_seed"
  | "workflow_seed"
  | "presence_rule"
  | "output_pattern"
  | "repo_task"
  | "product_requirement"
  | "warning_rule";

export interface GeboRouteDecision {
  input: string;
  intent: string;
  domain: string;
  primaryPresence: GeboPresence;
  supportPresence?: GeboPresence;
  tool: GeboTool;
  workflow: GeboWorkflow;
  outputMode: GeboOutputMode;
  requiresRealtime: boolean;
  memoryTarget: GeboMemoryTarget;
  confidence: number;
  reason: string;
  flags: string[];
}
