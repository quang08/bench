"use client";

import { useState } from "react";
import Image from "next/image";
import { type LocalImageItem } from "@/app/data/images";

export default function ImageAccordion({ images }: { images: LocalImageItem[] }) {
  const [open, setOpen] = useState(false);
  const [first, ...rest] = images;

  return (
    <div className="flex flex-col gap-3 px-4 sm:gap-4 sm:px-6 lg:px-8">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="relative w-full overflow-hidden focus:outline-none"
        style={{ height: "min(56vw, 600px)" }}
        aria-expanded={open}
        aria-label={open ? "Collapse images" : "Expand images"}
      >
        <Image
          src={first.src}
          alt={first.alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1024px) calc(100vw - 3rem), calc(100vw - 4rem)"
          priority
        />
        <span className="font-intel-mono absolute bottom-4 right-4 flex items-center gap-1.5 bg-black/50 px-3 py-1.5 text-xs text-white backdrop-blur-sm">
          {open ? "collapse" : `+${rest.length} more`}
        </span>
      </button>

      {open &&
        rest.map(({ src, alt }) => (
          <div
            key={src.src}
            className="relative w-full overflow-hidden"
            style={{ height: "min(56vw, 600px)" }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1024px) calc(100vw - 3rem), calc(100vw - 4rem)"
            />
          </div>
        ))}
    </div>
  );
}
