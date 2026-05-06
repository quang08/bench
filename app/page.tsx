import Hero from "@/app/components/Hero";
import ImageAccordion from "@/app/components/ImageAccordion";
import SubmitForm from "@/app/components/SubmitForm";
import { FULL_WIDTH_IMAGES } from "@/app/data/images";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <ImageAccordion images={FULL_WIDTH_IMAGES} />
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <SubmitForm />
      </section>
    </main>
  );
}
