"use client";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-0 lg:min-h-[calc(100vh-76px)] flex flex-col lg:flex-row items-start lg:items-center bg-[#fdfaf6]">
      {/* Mobile Image (inline to maintain aspect ratio without cropping) */}
      <div className="w-full block lg:hidden relative pt-[70px]">
        <Image
          src="/herobannermobileee.png"
          alt="Naipunya Natural Oils"
          width={1080}
          height={1350}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Desktop Background image */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <Image
          src="/hero.png"
          alt="Naipunya Natural Oils"
          fill
          priority
          className="object-cover object-[right_top]"
          sizes="100vw"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-16 lg:pt-36 lg:pb-24 relative z-10 hidden lg:block">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start lg:items-center">
          {/* Text Content */}
          <div className="space-y-6 max-w-xl">
            <h1 className="text-[44px] sm:text-[54px] lg:text-[64px] font-serif font-bold text-[#102a45] leading-[1.1] tracking-tight">
              Pure by Nature,<br/>
              Trusted for<br/>
              Generations
            </h1>
            <p className="text-[#102a45]/80 text-[16px] sm:text-[17px] leading-relaxed max-w-md">
              Discover our range of natural oils and ayurvedic essentials crafted
              for a healthier you and a better tomorrow.
            </p>
            <div className="pt-2">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 bg-[#0e4da4] text-white font-bold text-[15px] px-8 py-3.5 rounded-full hover:bg-[#0c408a] transition-all duration-200"
              >
                Shop Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            
            {/* Trusted by Families */}
            <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden z-[1] relative">
                    <svg className="w-6 h-6 text-gray-400 mt-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex text-[#f5a623] gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[13px] text-gray-600 font-medium mt-0.5 tracking-wide">Trusted by 10,000+ Families</span>
              </div>
            </div>
          </div>
          {/* The right side is intentionally left empty because the background image handles the visual of the bottles */}
          <div></div>
        </div>
      </div>
    </section>
  );
}
