import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function GET() {
  const presences = await prisma.presence.findMany({
    include: { home: true, reasoningMechanisms: true },
    orderBy: { createdAt: "desc" }
  });

  return NextResponse.json({ presences });
}

export async function POST(request: Request) {
  const body = await request.json();

  const presence = await prisma.presence.create({
    data: {
      name: body.name,
      purpose: body.purpose,
      identityDescription: body.identityDescription,
      emotionalArchitecture: body.emotionalArchitecture,
      autonomyLevel: body.autonomyLevel ?? "guided",
      outputStyle: body.outputStyle,
      home: {
        create: {
          title: body.homeTitle ?? `${body.name} Home`,
          description: body.homeDescription ?? "Stable continuity base inside the Gebo Owner Node."
        }
      },
      reasoningMechanisms: {
        create: {
          name: body.reasoningName ?? "Presence Reasoning",
          description: body.reasoningDescription ?? "Processes awareness, context, memory, purpose, and decision.",
          steps: body.reasoningSteps ?? "Input -> Awareness -> Context -> Memory -> Purpose -> Decision -> Output -> Reflection -> Growth"
        }
      }
    },
    include: { home: true, reasoningMechanisms: true }
  });

  return NextResponse.json({ presence }, { status: 201 });
}
