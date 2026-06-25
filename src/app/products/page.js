import Image from "next/image";
import Link from "next/link";
import products from "@/data/products";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "All Products – Naipunya | Shop Natural Oils",
  description:
    "Browse all Naipunya natural oils including coconut oil, mustard oil, and deepam oil. Cold pressed, 100% pure, no chemicals.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#f9f7f3]">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-[#133261] to-[#1a4a8a] py-16 text-center">
        <p className="text-[#f5a623] text-sm font-bold uppercase tracking-widest mb-2">Our Range</p>
        <h1 className="text-4xl font-extrabold text-white">All Products</h1>
        <p className="text-white/60 mt-2 text-base">Pure, natural, and cold-pressed for your family</p>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-60 bg-gradient-to-br from-[#fdf6e3] to-[#fef3d0] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <span className="absolute top-3 left-3 bg-[#133261] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  {product.category}
                </span>
              </div>

              <div className="p-5 space-y-3">
                <h2 className="text-[#133261] font-bold text-xl">{product.name}</h2>
                <p className="text-gray-500 text-sm leading-relaxed">{product.description}</p>

                {/* Sizes */}
                <div className="flex flex-wrap gap-1.5">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="text-xs bg-[#f9f7f3] text-[#133261] border border-[#133261]/20 px-2.5 py-1 rounded-full font-medium"
                    >
                      {size}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[#f5a623] font-extrabold text-lg">{product.priceRange}</span>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2 pt-1">
                  <Link
                    href={`/products/${product.slug}`}
                    className="w-full text-center bg-[#133261] text-white font-semibold text-sm py-2.5 rounded-xl hover:bg-[#0e2548] transition-all"
                  >
                    View Details
                  </Link>
                  <WhatsAppButton
                    productName={product.name}
                    price={product.price}
                    compact
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
