import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";

type MemoryType =
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

export interface MemoryItem {
  id: string;
  type: MemoryType;
  title: string;
  content: string;
  source: string;
  confidence: number;
  createdAt: string; // ISO
  lastUsedAt: string; // ISO
  status: "active" | "archived";
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const memoryDir = path.resolve(__dirname, "../../memories");
const memoryFile = path.join(memoryDir, "memories.json");

function ensureMemoryFile() {
  if (!fs.existsSync(memoryDir)) fs.mkdirSync(memoryDir, { recursive: true });
  if (!fs.existsSync(memoryFile)) fs.writeFileSync(memoryFile, "[]", "utf-8");
}

ensureMemoryFile();

export function loadAll(): MemoryItem[] {
  ensureMemoryFile();
  const raw = fs.readFileSync(memoryFile, "utf-8");
  return JSON.parse(raw) as MemoryItem[];
}

export function save(item: MemoryItem) {
  const list = loadAll();
  list.push(item);
  fs.writeFileSync(memoryFile, JSON.stringify(list, null, 2));
}

export function captureFromRoute(routeDecision: {
  input: string;
  memoryTarget: MemoryType | "none";
  intent: string;
  reason: string;
}) {
  if (routeDecision.memoryTarget === "none") return;
  const id = `mem_${Date.now()}`;
  const now = new Date().toISOString();
  const item: MemoryItem = {
    id,
    type: routeDecision.memoryTarget,
    title: routeDecision.intent,
    content: routeDecision.reason + "\nInput: " + routeDecision.input,
    source: "router",
    confidence: 1.0,
    createdAt: now,
    lastUsedAt: now,
    status: "active",
  };
  save(item);
}
