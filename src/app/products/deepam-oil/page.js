import Image from "next/image";
import { Flame, Wind, Hourglass, Flower2 } from "lucide-react";
import products from "@/data/products";
import ProductClient from "@/components/ProductClient";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Deepam Oil – Naipunya",
  description: "Pure and fragrant oil for rituals and daily use. Keeps the flame steady and burns cleanly.",
};

export default function DeepamOilPage() {
  const product = products.find((p) => p.slug === "deepam-oil");
  if (!product) notFound();

  return (
    <div className="min-h-screen bg-white pt-[130px]">

      {/* Main Product Section */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-start">

          {/* Left Column: Product Image */}
          <div className="lg:sticky lg:top-24">
            <div className="relative bg-gradient-to-br from-[#fff0f5] to-[#ffe4eb] rounded-3xl overflow-hidden shadow-sm h-[300px] sm:h-[420px] lg:h-[550px] border border-[#ffd1df] flex items-center justify-center">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0)_100%)]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#f5a623] blur-[80px] opacity-20 z-0"></div>

              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-8 hover:scale-105 transition-transform duration-700 relative z-10 drop-shadow-xl"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Decorative badges */}
              <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur shadow-sm border border-white/50 text-[#7c2840] text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5" /> Steady Flame
              </div>
              <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur shadow-sm border border-white/50 text-[#7c2840] text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <Wind className="w-3.5 h-3.5" /> Zero Soot
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Product Details */}
          <div className="bg-white">
            <ProductClient product={product}>
              {/* Benefits Grid — 2 cols */}
              <div className="grid grid-cols-2 gap-3 mb-2">
                <div className="bg-[#fcfdfd] border border-gray-100 p-3 rounded-xl flex items-start gap-2">
                  <div className="text-[#4a1a2c] shrink-0 mt-0.5"><Flame className="w-4 h-4" /></div>
                  <div>
                    <h3 className="font-bold text-[#4a1a2c] text-xs mb-0.5">Sacred Rituals</h3>
                    <p className="text-[11px] text-gray-500 leading-relaxed">Perfect for poojas & prayers.</p>
                  </div>
                </div>
                <div className="bg-[#fcfdfd] border border-gray-100 p-3 rounded-xl flex items-start gap-2">
                  <div className="text-[#4a1a2c] shrink-0 mt-0.5"><Wind className="w-4 h-4" /></div>
                  <div>
                    <h3 className="font-bold text-[#4a1a2c] text-xs mb-0.5">Smoke Free</h3>
                    <p className="text-[11px] text-gray-500 leading-relaxed">Burns cleanly, no soot.</p>
                  </div>
                </div>
                <div className="bg-[#fcfdfd] border border-gray-100 p-3 rounded-xl flex items-start gap-2">
                  <div className="text-[#4a1a2c] shrink-0 mt-0.5"><Hourglass className="w-4 h-4" /></div>
                  <div>
                    <h3 className="font-bold text-[#4a1a2c] text-xs mb-0.5">Long Lasting</h3>
                    <p className="text-[11px] text-gray-500 leading-relaxed">Optimized for longer burn.</p>
                  </div>
                </div>
                <div className="bg-[#fcfdfd] border border-gray-100 p-3 rounded-xl flex items-start gap-2">
                  <div className="text-[#4a1a2c] shrink-0 mt-0.5"><Flower2 className="w-4 h-4" /></div>
                  <div>
                    <h3 className="font-bold text-[#4a1a2c] text-xs mb-0.5">Mild Fragrance</h3>
                    <p className="text-[11px] text-gray-500 leading-relaxed">Divine, calming aroma.</p>
                  </div>
                </div>
              </div>
            </ProductClient>
          </div>

        </div>
      </div>
    </div>
  );
}
