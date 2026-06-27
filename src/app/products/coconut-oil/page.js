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
            <div className="relative bg-gradient-to-br from-[#fdf6e3] to-[#fef3d0] rounded-3xl overflow-hidden shadow-lg h-[500px] md:h-[700px] border border-[#f5ead2] flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0)_100%)]"></div>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-8 md:p-16 hover:scale-110 transition-transform duration-700 relative z-10 drop-shadow-2xl"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              
              {/* Decorative badges */}
              <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur shadow-sm border border-white/50 text-[#102a45] text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1.5">
                <Leaf className="w-4 h-4" /> 100% Pure
              </div>
              <div className="absolute bottom-6 right-6 z-20 bg-white/90 backdrop-blur shadow-sm border border-white/50 text-[#102a45] text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Edible Grade
              </div>
            </div>

            {/* Custom Benefits Grid just for Coconut Oil */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#fcfdfd] border border-gray-100 p-6 rounded-2xl">
                <div className="text-[#102a45] mb-3"><Utensils className="w-8 h-8" /></div>
                <h3 className="font-bold text-[#102a45] mb-2">For Cooking</h3>
                <p className="text-sm text-gray-500">Perfect for frying, baking, and adding authentic flavor to your dishes.</p>
              </div>
              <div className="bg-[#fcfdfd] border border-gray-100 p-6 rounded-2xl">
                <div className="text-[#102a45] mb-3"><Sparkles className="w-8 h-8" /></div>
                <h3 className="font-bold text-[#102a45] mb-2">For Skin</h3>
                <p className="text-sm text-gray-500">A natural moisturizer that deeply hydrates and nourishes your skin.</p>
              </div>
              <div className="bg-[#fcfdfd] border border-gray-100 p-6 rounded-2xl">
                <div className="text-[#102a45] mb-3"><Droplet className="w-8 h-8" /></div>
                <h3 className="font-bold text-[#102a45] mb-2">For Hair</h3>
                <p className="text-sm text-gray-500">Strengthens roots, adds shine, and prevents protein loss.</p>
              </div>
              <div className="bg-[#fcfdfd] border border-gray-100 p-6 rounded-2xl">
                <div className="text-[#102a45] mb-3"><Baby className="w-8 h-8" /></div>
                <h3 className="font-bold text-[#102a45] mb-2">For Baby</h3>
                <p className="text-sm text-gray-500">Gentle and safe for baby massages and preventing diaper rash.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Product Details */}
          <div className="bg-white lg:py-8">
            <ProductClient product={product} />
          </div>

        </div>
      </div>
    </div>
  );
}
