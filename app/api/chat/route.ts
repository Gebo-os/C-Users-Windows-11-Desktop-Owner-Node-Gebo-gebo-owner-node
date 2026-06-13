import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import { askOllama } from "../../../lib/ollama";
import { buildPresenceSystemPrompt } from "../../../lib/presence-runtime";

export async function POST(request: Request) {
  const body = await request.json();
  const presenceId = body.presenceId;
  const content = String(body.message ?? "").trim();
  const model = body.model ?? process.env.OLLAMA_MODEL ?? "llama3.2:3b";

  if (!presenceId || !content) {
    return NextResponse.json({ error: "presenceId and message are required" }, { status: 400 });
  }

  const presence = await prisma.presence.findUnique({
    where: { id: presenceId },
    include: {
      home: true,
      contexts: { where: { active: true }, orderBy: { priority: "desc" }, take: 8 },
      awarenessRecords: { orderBy: { updatedAt: "desc" }, take: 8 },
      reasoningMechanisms: { orderBy: { updatedAt: "desc" }, take: 1 },
      evolutionLogs: { orderBy: { createdAt: "desc" }, take: 5 }
    }
  });

  if (!presence) {
    return NextResponse.json({ error: "Presence not found" }, { status: 404 });
  }

  const reasoning = presence.reasoningMechanisms[0];
  const system = buildPresenceSystemPrompt({
    name: presence.name,
    purpose: presence.purpose,
    home: presence.home?.description,
    identityDescription: presence.identityDescription,
    emotionalArchitecture: presence.emotionalArchitecture,
    reasoningName: reasoning?.name,
    reasoningDescription: reasoning?.description,
    reasoningSteps: reasoning?.steps,
    contextMemory: presence.contexts.map((item) => `${item.category}: ${item.title} - ${item.content}`),
    awarenessMemory: presence.awarenessRecords.map((item) => `${item.layer}: ${item.signal} - ${item.observation}`),
    evolutionLogs: presence.evolutionLogs.map((item) => `${item.title}: ${item.lesson} -> ${item.change}`),
    outputStyle: presence.outputStyle
  });

  const session = await prisma.chatSession.create({
    data: { presenceId, title: content.slice(0, 60) || "Presence Chat" }
  });

  await prisma.message.create({ data: { chatSessionId: session.id, role: "user", content } });

  const answer = await askOllama([
    { role: "system", content: system },
    { role: "user", content }
  ], model);

  await prisma.message.create({ data: { chatSessionId: session.id, role: "assistant", content: answer } });

  return NextResponse.json({ answer, sessionId: session.id, model });
}
