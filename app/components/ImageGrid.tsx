import Image from "next/image";
import { type ImageItem, type LocalImageItem, picsum } from "@/app/data/images";

type GridImage = ImageItem | LocalImageItem;

interface ImageGridProps {
  title: string;
  images: GridImage[];
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
}: ImageGridProps) {3
  const gridCols =
    cols === 3
      ? "grid-cols-3"
      : cols === 2
      ? "grid-cols-2"
      : "grid-cols-2 sm:grid-cols-4";

  const imgSizes =
    cols === 3
      ? "(max-width: 640px) 33vw, 33vw"
      : cols === 2
      ? "(max-width: 640px) 50vw, 50vw"
      : "(max-width: 640px) 50vw, 25vw";

  const imgSrc = (id: number) =>
    picsum(id, cols === 3 ? 600 : 400, cols === 3 ? 600 : 400);

  return (
    <section className="px-4 py-4 sm:px-6 lg:px-8">
      {title && (
        <h2 className="font-intel-mono mb-4 text-xl font-semibold sm:text-2xl">
          {title}
        </h2>
      )}
      <div className={`grid gap-2 sm:gap-3 ${gridCols}`}>
        {images.map((image, i) => {
          const src = "src" in image ? image.src : imgSrc(image.id);
          return (
            <div key={i} className={`relative overflow-hidden ${aspect === "video" ? "aspect-video" : aspect === "portrait" ? "aspect-[3/4]" : "aspect-square"}`}>
              <Image
                src={src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes={imgSizes}
              />
            </div>
          );
        })}
        {emptyLastCell && (
          <div className="aspect-square bg-zinc-900" aria-hidden="true" />
        )}
      </div>
    </section>
  );
}
