import { prisma } from "../lib/prisma";
import { seedRootPresence } from "./actions";

const screens = [
  "Dashboard",
  "Presence Creator",
  "Presence Home",
  "Chat",
  "Context Memory",
  "Awareness Memory",
  "Reasoning Builder",
  "Evolution Logs",
  "Integration Settings"
];

export default async function Home() {
  const presences = await prisma.presence.findMany({
    include: { home: true, reasoningMechanisms: true },
    orderBy: { createdAt: "desc" }
  });

  return (
    <main className="min-h-screen bg-gebo-black px-6 py-8 text-white">
      <section className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-gebo-green">Gebo Owner Node</p>
            <h1 className="mt-4 text-4xl font-semibold md:text-6xl">Presence Application v1</h1>
            <p className="mt-4 max-w-2xl text-gebo-muted">
              Local-first foundation for creating, managing, reasoning with, and evolving Presences through Ollama.
            </p>
          </div>
          <form action={seedRootPresence}>
            <button className="rounded-full border border-gebo-green px-5 py-3 text-sm font-semibold text-gebo-green hover:bg-gebo-green hover:text-black">
              Seed Root Presence
            </button>
          </form>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {screens.map((title) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-gebo-panel p-5 shadow-lg shadow-black/20">
              <h2 className="text-xl font-semibold text-gebo-green">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-gebo-muted">Ready for v1 implementation and database wiring.</p>
            </article>
          ))}
        </div>

        <section className="mt-10 rounded-3xl border border-white/10 bg-gebo-panel p-6">
          <h2 className="text-2xl font-semibold text-gebo-green">Presences</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {presences.length === 0 ? (
              <p className="text-gebo-muted">No Presences yet. Seed the root Presence to start.</p>
            ) : (
              presences.map((presence) => (
                <article key={presence.id} className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <h3 className="text-xl font-semibold">{presence.name}</h3>
                  <p className="mt-2 text-sm text-gebo-muted">{presence.purpose}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-gebo-green">{presence.home?.title ?? "No Home"}</p>
                </article>
              ))
            )}
          </div>
        </section>
      </section>
    </main>
  );
}
