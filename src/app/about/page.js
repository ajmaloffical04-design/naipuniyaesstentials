import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us – Naipunya | Pure by Nature",
  description:
    "Learn about Naipunya's mission to bring 100% pure, cold-pressed natural oils and ayurvedic essentials to every Indian household.",
};

const values = [
  { icon: "🌿", title: "Natural Sourcing", desc: "We source only the finest natural ingredients from trusted farms across India." },
  { icon: "⚙️", title: "Traditional Methods", desc: "Our cold-press extraction preserves the complete nutritional profile of every ingredient." },
  { icon: "🧪", title: "No Additives", desc: "Zero preservatives, chemicals, or artificial flavours – ever." },
  { icon: "❤️", title: "Family First", desc: "Every product is crafted with the health and wellbeing of your family in mind." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#133261] to-[#1a4a8a] py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#f5a623] rounded-full -translate-y-1/2 translate-x-1/2" />
        </div>
        <div className="relative">
          <p className="text-[#f5a623] text-sm font-bold uppercase tracking-widest mb-3">Our Story</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">About Naipunya</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto px-4">
            Rooted in tradition, crafted for the modern family.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <span className="inline-block bg-[#f5a623]/20 text-[#c47f0a] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-[#f5a623]/40">
              Who We Are
            </span>
            <h2 className="text-3xl font-extrabold text-[#133261]">
              Pure by Nature, Trusted for Generations
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Naipunya was founded with a simple belief: nature holds the most powerful remedies for
              health and wellness. We set out to bring the purest, most authentic natural oils and
              ayurvedic essentials directly to your kitchen and home.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our name, <strong className="text-[#133261]">Naipunya</strong>, means "skill" or
              "excellence" in Sanskrit — and that is exactly what we strive for in every drop we
              produce. From sourcing to bottling, every step is done with care, precision, and respect
              for tradition.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#133261] text-white font-bold px-7 py-3.5 rounded-full hover:bg-[#0e2548] transition-all shadow-lg"
            >
              Shop Our Products
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="relative h-80 bg-gradient-to-br from-[#fdf6e3] to-[#fef3d0] rounded-3xl overflow-hidden">
            <Image
              src="/hero.png"
              alt="Naipunya Natural Oils"
              fill
              className="object-contain p-6"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <p className="text-[#f5a623] text-sm font-bold uppercase tracking-widest mb-2">Our Values</p>
            <h2 className="text-3xl font-extrabold text-[#133261]">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => (
              <div key={val.title} className="bg-[#f9f7f3] rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="text-4xl mb-3">{val.icon}</div>
                <h3 className="font-bold text-[#133261] text-base mb-2">{val.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
