export type OllamaMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

export async function askOllama(messages: OllamaMessage[], model = "llama3.2:3b") {
  const endpoint = process.env.OLLAMA_URL ?? "http://localhost:11434/api/chat";

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ model, stream: false, messages })
  });

  if (!response.ok) {
    throw new Error(`Ollama request failed: ${response.status}`);
  }

  const data = await response.json();
  return data?.message?.content?.trim() ?? "";
}
