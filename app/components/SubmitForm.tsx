"use client";

import { useState, useRef } from "react";

type Status = "idle" | "loading" | "success" | "error";

const MAX_BYTES = 3 * 1024 * 1024;

function readAsBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve((reader.result as string).split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function SubmitForm() {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imageError, setImageError] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorText, setErrorText] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    setImageError("");
    if (file && file.size > MAX_BYTES) {
      setImageError("Ảnh phải nhỏ hơn 3MB");
      e.target.value = "";
      setImage(null);
      return;
    }
    setImage(file);
  }

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault();
    setStatus("loading");
    setErrorText("");

    try {
      let imagePayload: { name: string; type: string; data: string } | undefined;
      if (image) {
        const data = await readAsBase64(image);
        imagePayload = { name: image.name, type: image.type, data };
      }

      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, image: imagePayload }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? `HTTP ${res.status}`);
      }

      setStatus("success");
      setMessage("");
      setImage(null);
      if (fileRef.current) fileRef.current.value = "";
    } catch (err) {
      setStatus("error");
      setErrorText(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 rounded-xl bg-white p-4 text-black">
        <label className="font-intel-mono flex flex-col gap-2 text-sm lg:text-xl">
          <span>Bạn ở tìm thấy quyển zine này ở đâu? Bạn ở thành phố nào và <b><i>cái ghế đá</i></b> của bạn là gì? Tôi sẽ ghé thăm và gửi một bản in vật lý (hoặc không haha).</span>
          <input
            type="text"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="…"
            className="font-intel-mono w-full rounded-lg border border-zinc-300 bg-zinc-100 px-4 py-3 text-base text-black placeholder-zinc-400 outline-none transition focus:border-zinc-600 focus:ring-2 focus:ring-zinc-600/10 disabled:opacity-50"
            disabled={status === "loading"}
          />
        </label>

        <label className="font-intel-mono flex flex-col gap-2 text-sm font-medium text-zinc-500 lg:text-xl">
          Ảnh chụp vị trí tìm thấy zine và vật thể/không gian trong câu chuyện của bạn (tuỳ chọn, tối đa 3MB)
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={status === "loading"}
            className="font-intel-mono w-full text-sm text-zinc-500 file:mr-4 file:rounded-lg file:border-0 file:bg-zinc-200 file:px-4 file:py-2 file:text-sm file:text-zinc-700 hover:file:bg-zinc-300 disabled:opacity-50"
          />
        </label>
        {imageError && (
          <p className="font-intel-mono text-sm text-red-500">{imageError}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading" || message.trim() === ""}
        className="font-intel-mono w-full rounded-lg bg-white px-6 py-3 text-base font-semibold text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-40 lg:text-xl"
      >
        {status === "loading" ? "Đang gửi.." : "Gửi"}
      </button>

      {status === "success" && (
        <p className="font-intel-mono text-sm text-green-400">Cảm ơn bạn!</p>
      )}
      {status === "error" && (
        <p className="font-intel-mono text-sm text-red-400">{errorText}</p>
      )}
    </form>
  );
}
