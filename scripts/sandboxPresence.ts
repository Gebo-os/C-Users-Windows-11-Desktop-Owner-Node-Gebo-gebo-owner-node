import fs from "node:fs";
import path from "node:path";

const presenceArgIndex = process.argv.indexOf("--presence");
if (presenceArgIndex === -1) {
  console.error("Usage: tsx scripts/sandboxPresence.ts --presence <presence_name> --input \"message\"");
  process.exit(1);
}
const presenceName = process.argv[presenceArgIndex + 1];
const inputIndex = process.argv.indexOf("--input");
const userInput = inputIndex !== -1 ? process.argv.slice(inputIndex + 1).join(" ") : "";

const presencePath = path.resolve(
  process.cwd(),
  `prompt-stack/presences/${presenceName}.md`
);
if (!fs.existsSync(presencePath)) {
  console.error(`Presence file not found: ${presencePath}`);
  process.exit(1);
}
const prompt = fs.readFileSync(presencePath, "utf-8");
console.log("--- PRESENCE PROMPT ---\n");
console.log(prompt.slice(0, 400) + "...\n");
console.log("--- USER INPUT ---\n" + userInput + "\n");
console.log("(This is a sandbox — connect to your LLM to get real completions.)");
