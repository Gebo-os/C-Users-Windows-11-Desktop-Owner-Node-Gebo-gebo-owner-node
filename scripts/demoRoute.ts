import { routeGeboInput } from "../src/router/geboRouter";

const demoInputs = [
  "add 5 deep STL output layers to the prompt stack",
  "what is the latest KMOV news in St. Louis today?",
  "do it, build the router now",
  "give me a Dream world UX concept",
  "help Mya make this message feel more supportive",
];

for (const input of demoInputs) {
  const route = routeGeboInput(input);
  console.log("\n--- GEBO ROUTE ---");
  console.log(JSON.stringify(route, null, 2));
}
