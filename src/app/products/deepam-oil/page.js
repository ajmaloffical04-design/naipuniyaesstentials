import Image from "next/image";
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
    <div className="min-h-screen bg-white">

      {/* Main Product Section */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Image & Highlights */}
          <div className="sticky top-24 flex flex-col gap-8">
            <div className="relative bg-gradient-to-br from-[#fff0f5] to-[#ffe4eb] rounded-3xl overflow-hidden shadow-lg h-[500px] md:h-[700px] border border-[#ffd1df] flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0)_100%)]"></div>
              
              {/* Optional: Add a subtle glow behind the bottle to mimic a lamp */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#f5a623] blur-[100px] opacity-30 z-0"></div>

              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-8 md:p-16 hover:scale-110 transition-transform duration-700 relative z-10 drop-shadow-2xl"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              
              {/* Decorative badges */}
              <div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur shadow-sm border border-white/50 text-[#7c2840] text-xs font-bold px-4 py-2 rounded-full">
                🔥 Steady Flame
              </div>
              <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur shadow-sm border border-white/50 text-[#7c2840] text-xs font-bold px-4 py-2 rounded-full">
                ✨ Zero Soot
              </div>
            </div>

            {/* Custom Benefits Grid just for Deepam Oil */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#fcfdfd] border border-gray-100 p-6 rounded-2xl">
                <div className="text-3xl mb-3">🪔</div>
                <h3 className="font-bold text-[#4a1a2c] mb-2">Sacred Rituals</h3>
                <p className="text-sm text-gray-500">Perfectly blended for daily poojas and festive lighting.</p>
              </div>
              <div className="bg-[#fcfdfd] border border-gray-100 p-6 rounded-2xl">
                <div className="text-3xl mb-3">💨</div>
                <h3 className="font-bold text-[#4a1a2c] mb-2">Smoke Free</h3>
                <p className="text-sm text-gray-500">Burns cleanly without releasing harmful black smoke or soot.</p>
              </div>
              <div className="bg-[#fcfdfd] border border-gray-100 p-6 rounded-2xl">
                <div className="text-3xl mb-3">⏳</div>
                <h3 className="font-bold text-[#4a1a2c] mb-2">Long Lasting</h3>
                <p className="text-sm text-gray-500">Optimized viscosity ensures the oil lasts longer per lighting.</p>
              </div>
              <div className="bg-[#fcfdfd] border border-gray-100 p-6 rounded-2xl">
                <div className="text-3xl mb-3">🌸</div>
                <h3 className="font-bold text-[#4a1a2c] mb-2">Mild Fragrance</h3>
                <p className="text-sm text-gray-500">Infused with a subtle divine aroma to elevate your spiritual space.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Product Details */}
          <div className="bg-white lg:py-8">
            {/* Customizing ProductClient props if needed, or just passing product directly */}
            <ProductClient product={product} />
          </div>

        </div>
      </div>
    </div>
  );
}
