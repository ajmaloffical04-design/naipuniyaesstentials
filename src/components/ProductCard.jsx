"use client";
import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "./WhatsAppButton";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-[24px] overflow-hidden border border-[#eaeaea] shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col relative h-full">
      
      {/* Bestseller Badge */}
      <div className="absolute top-4 left-4 z-10 bg-[#0e4da4] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
        Bestseller
      </div>

      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] sm:aspect-square overflow-hidden bg-[#fdfaf6]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-[#102a45] font-bold text-[17px] mb-2 leading-tight">
          {product.name}
        </h3>
        
        <p className="text-[#6b7280] text-[13px] leading-relaxed mb-6 flex-grow">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div className="text-[#102a45] font-bold text-[17px]">
            {product.priceRange}
          </div>

          <WhatsAppButton product={product} compact={true} />
        </div>
      </div>
    </div>
  );
}
