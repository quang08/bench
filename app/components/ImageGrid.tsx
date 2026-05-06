import Image from "next/image";
import type { LocalImageItem } from "@/app/data/images";

interface ImageGridProps {
  title?: string;
  images: LocalImageItem[];
  cols: 2 | 3 | 4;
  aspect?: "square" | "video" | "portrait";
  emptyLastCell?: boolean;
}

export default function ImageGrid({
  title,
  images,
  cols,
  aspect = "square",
  emptyLastCell = false,
}: ImageGridProps) {
  const gridCols =
    cols === 3 ? "grid-cols-3" : cols === 2 ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-4";

  const imgSizes =
    cols === 3
      ? "(max-width: 640px) 33vw, 33vw"
      : cols === 2
      ? "(max-width: 640px) 50vw, 50vw"
      : "(max-width: 640px) 50vw, 25vw";

  const aspectClass =
    aspect === "video" ? "aspect-video" : aspect === "portrait" ? "aspect-[3/4]" : "aspect-square";

  return (
    <section className="px-4 py-4 sm:px-6 lg:px-8">
      {title && (
        <h2 className="font-intel-mono mb-4 text-xl font-semibold sm:text-2xl">{title}</h2>
      )}
      <div className={`grid gap-2 sm:gap-3 ${gridCols}`}>
        {images.map((image, i) => (
          <div key={i} className={`relative overflow-hidden ${aspectClass}`}>
            <Image src={image.src} alt={image.alt} fill className="object-cover" sizes={imgSizes} />
          </div>
        ))}
        {emptyLastCell && <div className="aspect-square bg-zinc-900" aria-hidden="true" />}
      </div>
    </section>
  );
}
