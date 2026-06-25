import Image from "next/image";

export default function CoconutOilBanner() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full rounded-[24px] overflow-hidden shadow-sm border border-gray-100 bg-[#0e4da4]">
          <Image
            src="/secondsection.png"
            alt="Naipunya Coconut Oil features"
            width={1200}
            height={500}
            className="w-full h-auto object-contain"
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
