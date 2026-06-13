const cards = [
  ["Dashboard", "Presence status, active tasks, recent memory, and ecosystem health."],
  ["Presence Creator", "Create a Presence with identity, Home, memory, reasoning, autonomy, and output style."],
  ["Presence Home", "Each Presence gets a stable place for identity, files, logs, growth, and missions."],
  ["Chat", "Runtime-ready interface for Ollama-backed Presence conversations."],
  ["Context Memory", "Active, project, user, mission, historical, and future context management."],
  ["Awareness Memory", "Situational, user, project, cultural, system, environmental, and self awareness records."],
  ["Reasoning Builder", "Design custom reasoning mechanisms per Presence."],
  ["Evolution Logs", "Track lessons, changes, growth, and upgraded behavior."],
  ["Integration Settings", "Ollama, OpenWebUI, GitHub, files, APIs, devices, and future systems."
  ]
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gebo-black px-6 py-8 text-white">
      <section className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.35em] text-gebo-green">Gebo Owner Node</p>
        <h1 className="mt-4 text-4xl font-semibold md:text-6xl">Presence Application v1</h1>
        <p className="mt-4 max-w-2xl text-gebo-muted">
          Local-first foundation for creating, managing, reasoning with, and evolving Presences inside the Gebo Ecosystem.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {cards.map(([title, body]) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-gebo-panel p-5 shadow-lg shadow-black/20">
              <h2 className="text-xl font-semibold text-gebo-green">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-gebo-muted">{body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
