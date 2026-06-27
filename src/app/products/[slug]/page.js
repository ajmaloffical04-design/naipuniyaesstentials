import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import products from "@/data/products";
import ProductClient from "@/components/ProductClient";

export async function generateStaticParams() {
  const dynamicProducts = products.filter(
    (product) => product.slug !== "coconut-oil" && product.slug !== "deepam-oil"
  );

  if (dynamicProducts.length === 0) {
    return [{ slug: "dummy" }];
  }

  return dynamicProducts.map((product) => ({ slug: product.slug }));
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
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs font-semibold text-gray-400 tracking-wide uppercase">
          <Link href="/" className="hover:text-[#133261]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/products" className="hover:text-[#133261]">Shop</Link>
          <span className="mx-2">›</span>
          <span className="text-[#133261]">{product.category}</span>
          <span className="mx-2">›</span>
          <span className="text-gray-500">{product.name}</span>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Image Gallery */}
          <div className="sticky top-24 flex flex-col-reverse md:flex-row gap-6 h-[500px] md:h-[650px]">
            {/* Thumbnails (using same image for now to simulate layout) */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible no-scrollbar pb-2 md:pb-0">
              {[1, 2, 3].map((thumb) => (
                <div key={thumb} className={`relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 bg-[#fdf6e3] rounded-2xl overflow-hidden cursor-pointer border-2 transition-all ${thumb === 1 ? "border-[#0051ff]" : "border-transparent hover:border-[#133261]/20"}`}>
                  <Image src={product.image} alt={product.name} fill className="object-contain p-2" sizes="96px" />
                </div>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="relative flex-grow bg-[#fdf6e3] rounded-3xl overflow-hidden shadow-sm h-full w-full border border-[#f5ead2]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-8 md:p-12 hover:scale-105 transition-transform duration-700"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Column: Interactive Product Details */}
          <div>
            <ProductClient product={product} />
          </div>

        </div>
      </div>
    </div>
  );
}
