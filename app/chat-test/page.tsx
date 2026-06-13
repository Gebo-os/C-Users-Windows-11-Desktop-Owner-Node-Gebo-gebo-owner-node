import { prisma } from "../../lib/prisma";
import { ChatTest } from "../../components/ChatTest";

export default async function ChatTestPage() {
  const presences = await prisma.presence.findMany({ orderBy: { createdAt: "desc" } });
  const activePresence = presences[0];

  return (
    <main className="min-h-screen bg-gebo-black px-6 py-8 text-white">
      <section className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gebo-panel p-6">
        <p className="text-sm uppercase tracking-[0.35em] text-gebo-green">Gebo Presence Runtime</p>
        <h1 className="mt-4 text-4xl font-semibold">Live Local Chat Test</h1>
        <p className="mt-3 text-gebo-muted">This page sends messages to `/api/chat` using the newest Presence. Ollama must be running.</p>
        <ChatTest presenceId={activePresence?.id} />
      </section>
    </main>
  );
}
