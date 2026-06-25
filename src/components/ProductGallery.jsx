import Link from "next/link";
import products from "@/data/products";
import ProductCard from "./ProductCard";
import BannerSection from "./BannerSection";

export default function ProductGallery() {
  const featured = products.filter((p) => p.featured);

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-gray-100">
          <h2 className="text-[32px] sm:text-[36px] font-serif font-bold text-[#102a45]">
            Shop Bestsellers
          </h2>
          <Link
            href="/products"
            className="hidden sm:flex items-center gap-1 text-[15px] font-bold text-[#102a45] hover:text-[#0e4da4] transition-colors mb-2"
          >
            View All Products
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          <BannerSection />
        </div>

        {/* Mobile View All */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/products"
            className="inline-block text-[15px] font-bold text-[#102a45] underline decoration-2 underline-offset-4"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
