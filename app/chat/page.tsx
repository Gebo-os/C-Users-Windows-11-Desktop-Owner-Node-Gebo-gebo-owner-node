import { prisma } from "../../lib/prisma";

export default async function ChatPage() {
  const presences = await prisma.presence.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <main className="min-h-screen bg-gebo-black px-6 py-8 text-white">
      <section className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gebo-panel p-6">
        <p className="text-sm uppercase tracking-[0.35em] text-gebo-green">Local Presence Chat</p>
        <h1 className="mt-4 text-4xl font-semibold">Ollama Runtime</h1>
        <p className="mt-3 text-gebo-muted">Use the API route at <code>/api/chat</code> with a Presence ID. The visual chat composer is the next UI task.</p>
        <div className="mt-8 space-y-3">
          {presences.map((presence) => (
            <div key={presence.id} className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <h2 className="font-semibold text-gebo-green">{presence.name}</h2>
              <p className="mt-1 text-sm text-gebo-muted">{presence.id}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
