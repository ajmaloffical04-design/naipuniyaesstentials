"use client";
import Image from "next/image";
import Link from "next/link";

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

          <Link
            href={`/products/${product.slug}`}
            className="flex items-center justify-center gap-2 bg-[#102a45] text-white font-semibold text-[13px] px-5 py-2.5 rounded-[8px] hover:bg-[#16385a] hover:shadow-md transition-all duration-200"
          >
            Select Options
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
