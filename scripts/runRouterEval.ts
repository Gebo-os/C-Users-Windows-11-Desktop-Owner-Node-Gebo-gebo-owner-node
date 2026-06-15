import fs from "node:fs";
import path from "node:path";
import { routeGeboInput } from "../src/router/geboRouter";

type ExpectedRoute = Partial<ReturnType<typeof routeGeboInput>>;

type EvalCase = {
  name: string;
  input: string;
  expected: ExpectedRoute;
};

const evalPath = path.resolve(process.cwd(), "evals/router_eval_cases.json");
const evalCases = JSON.parse(fs.readFileSync(evalPath, "utf-8")) as EvalCase[];

let passed = 0;
let failed = 0;

for (const testCase of evalCases) {
  const actual = routeGeboInput(testCase.input);
  const mismatches: string[] = [];

  for (const [key, expectedValue] of Object.entries(testCase.expected)) {
    const actualValue = actual[key as keyof typeof actual];
    if (actualValue !== expectedValue) {
      mismatches.push(`${key}: expected ${String(expectedValue)}, got ${String(actualValue)}`);
    }
  }

  if (mismatches.length === 0) {
    passed += 1;
    console.log(`✅ ${testCase.name}`);
  } else {
    failed += 1;
    console.log(`❌ ${testCase.name}`);
    console.log(`   Input: ${testCase.input}`);
    console.log(`   ${mismatches.join("\n   ")}`);
  }
}

console.log("\n--- GEBO ROUTER EVAL SUMMARY ---");
console.log(`Passed: ${passed}`);
console.log(`Failed: ${failed}`);
console.log(`Total: ${evalCases.length}`);

if (failed > 0) {
  process.exitCode = 1;
}
