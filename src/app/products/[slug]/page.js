import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import products from "@/data/products";
import WhatsAppButton from "@/components/WhatsAppButton";

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return {};
  return {
    title: `${product.name} – Naipunya`,
    description: product.longDescription,
  };
}

export default function ProductDetailPage({ params }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();

  return (
    <div className="min-h-screen bg-[#f9f7f3]">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#133261]">Home</Link>
          {" / "}
          <Link href="/products" className="hover:text-[#133261]">Products</Link>
          {" / "}
          <span className="text-[#133261] font-medium">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="relative h-80 md:h-[480px] bg-gradient-to-br from-[#fdf6e3] to-[#fef3d0] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-8"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <span className="inline-block bg-[#133261]/10 text-[#133261] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-3">
                {product.category}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#133261] leading-tight">
                {product.name}
              </h1>
              <p className="text-[#f5a623] font-extrabold text-2xl mt-2">{product.priceRange}</p>
            </div>

            <p className="text-gray-600 text-base leading-relaxed">{product.longDescription}</p>

            {/* Benefits */}
            <div>
              <h3 className="font-bold text-[#133261] text-base mb-3">Key Benefits</h3>
              <div className="flex flex-wrap gap-2">
                {product.benefits.map((benefit) => (
                  <span
                    key={benefit}
                    className="flex items-center gap-1.5 text-sm bg-green-50 text-green-700 border border-green-200 px-3 py-1.5 rounded-full font-medium"
                  >
                    <span className="text-green-500">✓</span>
                    {benefit}
                  </span>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h3 className="font-bold text-[#133261] text-base mb-3">Available Sizes</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <span
                    key={size}
                    className="text-sm border-2 border-[#133261]/20 text-[#133261] px-4 py-2 rounded-xl font-semibold hover:border-[#f5a623] hover:bg-[#f5a623]/10 cursor-pointer transition-all"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            {/* Order CTA */}
            <div className="pt-2 flex flex-col gap-3">
              <WhatsAppButton
                productName={product.name}
                price={product.price}
              />
              <Link
                href="/products"
                className="w-full text-center border-2 border-[#133261] text-[#133261] font-semibold py-3.5 rounded-2xl hover:bg-[#133261] hover:text-white transition-all"
              >
                ← Back to Products
              </Link>
            </div>
          </div>
        </div>

        {/* You might also like */}
        <div className="mt-20">
          <h2 className="text-2xl font-extrabold text-[#133261] mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products
              .filter((p) => p.slug !== product.slug)
              .map((p) => (
                <Link
                  key={p.id}
                  href={`/products/${p.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1 flex gap-4 p-4 items-center"
                >
                  <div className="relative w-20 h-20 flex-shrink-0 bg-[#fdf6e3] rounded-xl overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-contain p-2"
                      sizes="80px"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-[#133261] text-sm">{p.name}</p>
                    <p className="text-[#f5a623] font-extrabold text-base">{p.priceRange}</p>
                    <p className="text-[#133261] text-xs font-semibold mt-1 group-hover:text-[#f5a623] transition-colors">
                      View Details →
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
