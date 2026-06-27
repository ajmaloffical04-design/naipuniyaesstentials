import Image from "next/image";
import Link from "next/link";
import { Leaf, CheckCircle2, Utensils, Sparkles, Droplet, Baby } from "lucide-react";
import products from "@/data/products";
import ProductClient from "@/components/ProductClient";
import { notFound } from "next/navigation";

export const metadata = {
  title: "First Crush Coconut Oil – Naipunya",
  description: "100% pure, cold-pressed coconut oil for cooking, skin care, and hair care.",
};

export default function CoconutOilPage() {
  const product = products.find((p) => p.slug === "coconut-oil");
  if (!product) notFound();

  return (
    <div className="min-h-screen bg-white">


      {/* Main Product Section */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Image & Highlights */}
          <div className="lg:sticky lg:top-24 flex flex-col gap-8">
            <div className="relative bg-gradient-to-br from-[#fdf6e3] to-[#fef3d0] rounded-3xl overflow-hidden shadow-sm h-[350px] md:h-[550px] border border-[#f5ead2] flex items-center justify-center p-6 md:p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0)_100%)]"></div>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-8 md:p-12 hover:scale-105 transition-transform duration-700 relative z-10 drop-shadow-xl"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              
              {/* Decorative badges */}
              <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20 bg-white/90 backdrop-blur shadow-sm border border-white/50 text-[#102a45] text-[10px] md:text-xs font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-1.5">
                <Leaf className="w-3.5 h-3.5 md:w-4 md:h-4" /> 100% Pure
              </div>
              <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-20 bg-white/90 backdrop-blur shadow-sm border border-white/50 text-[#102a45] text-[10px] md:text-xs font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4" /> Edible Grade
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Product Details */}
          <div className="bg-white lg:py-0">
            <ProductClient product={product}>
              {/* Custom Benefits Grid just for Coconut Oil */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
                <div className="bg-[#fcfdfd] border border-gray-100 p-4 rounded-xl flex items-start gap-3">
                  <div className="text-[#102a45] shrink-0 mt-0.5"><Utensils className="w-5 h-5" /></div>
                  <div>
                    <h3 className="font-bold text-[#102a45] text-sm mb-1">For Cooking</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">Perfect for frying, baking, and flavor.</p>
                  </div>
                </div>
                <div className="bg-[#fcfdfd] border border-gray-100 p-4 rounded-xl flex items-start gap-3">
                  <div className="text-[#102a45] shrink-0 mt-0.5"><Sparkles className="w-5 h-5" /></div>
                  <div>
                    <h3 className="font-bold text-[#102a45] text-sm mb-1">For Skin</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">Deeply hydrates and nourishes skin.</p>
                  </div>
                </div>
                <div className="bg-[#fcfdfd] border border-gray-100 p-4 rounded-xl flex items-start gap-3">
                  <div className="text-[#102a45] shrink-0 mt-0.5"><Droplet className="w-5 h-5" /></div>
                  <div>
                    <h3 className="font-bold text-[#102a45] text-sm mb-1">For Hair</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">Strengthens roots and adds shine.</p>
                  </div>
                </div>
                <div className="bg-[#fcfdfd] border border-gray-100 p-4 rounded-xl flex items-start gap-3">
                  <div className="text-[#102a45] shrink-0 mt-0.5"><Baby className="w-5 h-5" /></div>
                  <div>
                    <h3 className="font-bold text-[#102a45] text-sm mb-1">For Baby</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">Gentle and safe for baby massages.</p>
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
