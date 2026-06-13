"use client";

import { useState } from "react";

export function ChatTest({ presenceId }: { presenceId?: string }) {
  const [message, setMessage] = useState("What should we build next?");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function send() {
    if (!presenceId || !message.trim()) return;
    setLoading(true);
    setAnswer("");
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ presenceId, message })
    });
    const data = await response.json();
    setAnswer(data.answer ?? data.error ?? "No response.");
    setLoading(false);
  }

  return (
    <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
      <textarea className="min-h-28 w-full rounded-xl border border-white/10 bg-black p-4 text-white" value={message} onChange={(event) => setMessage(event.target.value)} />
      <button onClick={send} disabled={!presenceId || loading} className="mt-3 rounded-full border border-gebo-green px-5 py-2 text-gebo-green disabled:opacity-40">
        {loading ? "Thinking..." : "Send To Presence"}
      </button>
      {answer ? <p className="mt-4 whitespace-pre-wrap text-sm leading-6 text-gebo-muted">{answer}</p> : null}
    </div>
  );
}
