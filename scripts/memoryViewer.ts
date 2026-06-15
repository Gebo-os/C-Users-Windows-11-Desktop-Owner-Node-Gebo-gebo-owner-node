import { loadAll } from "../src/memory/memoryStore";

const mems = loadAll();
console.log("--- GEBO MEMORY ---");
for (const m of mems) {
  console.log(`[${m.type}] ${m.title} (${m.createdAt})`);
  console.log(`   ${m.content.slice(0, 120)}...`);
}
console.log(`Total memories: ${mems.length}`);
