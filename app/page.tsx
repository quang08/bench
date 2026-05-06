import Image from "next/image";
import Hero from "@/app/components/Hero";
import ImageAccordion from "@/app/components/ImageAccordion";
import ImageGrid from "@/app/components/ImageGrid";
import SubmitForm from "@/app/components/SubmitForm";
import {
  FULL_WIDTH_IMAGES,
  GRID_3X3_IMAGES,
  GRID_2X4_IMAGES,
} from "@/app/data/images";
import img1b from "@/app/data/1b.jpg";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />

      <ImageAccordion images={FULL_WIDTH_IMAGES} />

      <ImageGrid
        title=""
        images={GRID_3X3_IMAGES}
        cols={3}
        aspect="video"
      />
      <p className="px-4 pb-4 pt-1 text-center font-intel-mono text-xs text-zinc-500 sm:px-6 lg:px-8 lg:text-xl">
        Ghế yêu thích của Tom Hansen ở Angels Knoll trong phim 500 dáy of summer
      </p>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="relative w-full aspect-video">
          <Image src={img1b} alt="Bench in flood" fill className="object-cover" />
        </div>
      </section>
      <p className="px-4 pb-2 pt-1 text-center font-intel-mono text-xs text-zinc-500 sm:px-6 lg:px-8 lg:text-xl">
        Ghế đá công viên Hà Nội ngày ngập nước trong ảnh của Nguyễn Hữu Bảo
      </p>

      <ImageGrid
        title=""
        images={GRID_2X4_IMAGES.slice(0, 4)}
        cols={2}
        aspect="portrait"
      />
      <p className="px-4 pb-2 pt-1 text-center font-intel-mono text-xs text-zinc-500 sm:px-6 lg:px-8 lg:text-xl">
        Bàn bóng bàn của Tomiyasu Hayahis ở Leipzig trong dự án ảnh TTP
      </p>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <SubmitForm />
      </section>
    </main>
  );
}
