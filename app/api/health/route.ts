import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    app: "Gebo Presence App v1",
    ollama: process.env.OLLAMA_URL ?? "http://localhost:11434/api/chat",
    model: process.env.OLLAMA_MODEL ?? "llama3.2:3b"
  });
}
