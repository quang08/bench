"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function SubmitForm() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorText, setErrorText] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorText("");

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? `HTTP ${res.status}`);
      }

      setStatus("success");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorText(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label className="font-intel-mono flex flex-col gap-2 text-sm font-medium text-zinc-400 lg:text-xl">
        Bạn ở thành phố nào và cái ghế/bàn bóng bàn của bạn là gì? Tôi sẽ ghé thăm và gửi một bản in vật lý (hoặc không haha).
        <input
          type="text"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="…"
          className="font-intel-mono w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-base text-white placeholder-zinc-600 outline-none transition focus:border-white focus:ring-2 focus:ring-white/10 disabled:opacity-50"
          disabled={status === "loading"}
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading" || message.trim() === ""}
        className="font-intel-mono w-full rounded-lg bg-white px-6 py-3 text-base font-semibold text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-40 lg:text-xl"
      >
        {status === "loading" ? "Đang gửi.." : "Gửi"}
      </button>

      {status === "success" && (
        <p className="font-intel-mono text-sm text-green-400">
          Message sent successfully!
        </p>
      )}
      {status === "error" && (
        <p className="font-intel-mono text-sm text-red-400">{errorText}</p>
      )}
    </form>
  );
}
