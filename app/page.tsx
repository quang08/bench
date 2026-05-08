import Hero from "@/app/components/Hero";
import ImageAccordion from "@/app/components/ImageAccordion";
import SubmitForm from "@/app/components/SubmitForm";
import { FULL_WIDTH_IMAGES } from "@/app/data/images";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <ImageAccordion images={FULL_WIDTH_IMAGES} />
      <section className="px-4 pt-10 sm:px-6 lg:px-8">
        <p className="font-intel-mono text-justify text-xs text-white md:text-base lg:text-lg">
          Một ngày tôi quay lại và nhận ra hai điều, một là mình đã đến rất gần nó từ lúc nào không hay, và hai là hôm nay **nó trống?!** *Đến lượt mình rồi sao, mình sẽ làm gì với nó đây?* Tôi nghĩ bụng, với tất cả những hoạt động kỳ quái và tuyệt vời mà tôi đã quan sát được, tôi sẽ làm gì cho bõ ngần ấy ngày chờ đợi đây... Thế rồi tôi chụp ảnh nó, ngồi thử rồi đứng dậy đi về. Sau những lần quay lại với những người khác và mục đích khác trong khoảng một năm, tôi quyết định sẽ làm quyển mini-zine này để kể cho mọi người về cái ghế đá của tôi.
        </p>
        <div className="font-intel-mono mt-6 flex justify-between text-xs text-white md:text-sm lg:text-base">
          <span>Hà Nội, 2026.</span>
          <span>Trần Trung</span>
        </div>
      </section>
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <SubmitForm />
      </section>
    </main>
  );
}
