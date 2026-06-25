"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const shopLinks = [
    { label: "Categories", href: "#" },
    { label: "Oils", href: "/products" },
    { label: "Bestsellers", href: "#" },
    { label: "New Arrivals", href: "#" },
  ];

  const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Our Story", href: "/about" },
    { label: "Sustainability", href: "#" },
    { label: "Contact Us", href: "/contact" },
  ];

  const helpLinks = [
    { label: "FAQs", href: "#" },
    { label: "Shipping Policy", href: "#" },
    { label: "Returns", href: "#" },
    { label: "Track Order", href: "#" },
  ];

  return (
    <footer className="bg-[#102a45] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-1 flex flex-col items-start pr-4">
            <Link href="/" className="inline-block mb-6">
              {/* Note: since logo is white text on dark in the mockup, using the same logo or an inverted one if exists. 
                  Assuming public/logo.png works or they have a white one. In mockup it is white. */}
              <Image
                src="/logo.png"
                alt="Naipunya Logo"
                width={140}
                height={45}
                className="object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/80 text-[13px] leading-relaxed mb-6">
              Nature&apos;s pure essence, crafted for your wellbeing. Cold-pressed, chemical-free oils for a healthier lifestyle.
            </p>
            <div className="flex gap-4">
              {/* Facebook */}
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#0e4da4] hover:border-transparent transition-all" aria-label="Facebook">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#0e4da4] hover:border-transparent transition-all" aria-label="Instagram">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* Twitter/X */}
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#0e4da4] hover:border-transparent transition-all" aria-label="Twitter">
                <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-bold text-white text-[15px] mb-5 tracking-wide">Shop</h4>
            <ul className="space-y-3.5">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/80 text-[13px] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white text-[15px] mb-5 tracking-wide">Company</h4>
            <ul className="space-y-3.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/80 text-[13px] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-bold text-white text-[15px] mb-5 tracking-wide">Help</h4>
            <ul className="space-y-3.5">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/80 text-[13px] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay in Touch */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-white text-[15px] mb-5 tracking-wide">Stay in touch</h4>
            <p className="text-white/80 text-[13px] leading-relaxed mb-4">
              Get 10% off your first order.
            </p>
            <div className="flex border border-white/20 rounded-[8px] overflow-hidden focus-within:border-white transition-colors">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent text-white placeholder-white/50 text-[13px] px-4 py-3 focus:outline-none"
              />
              <button className="bg-[#0e4da4] text-white font-semibold text-[13px] px-5 hover:bg-[#0c408a] transition-colors">
                Subscribe
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-[13px]">
            © {new Date().getFullYear()} Naipunya. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Payment Icons */}
            <div className="flex gap-2">
              <div className="bg-white px-2 py-1 rounded-[4px] text-[#102a45] text-[10px] font-bold">VISA</div>
              <div className="bg-white px-2 py-1 rounded-[4px] text-[#102a45] text-[10px] font-bold">MASTER</div>
              <div className="bg-white px-2 py-1 rounded-[4px] text-[#102a45] text-[10px] font-bold">AMEX</div>
              <div className="bg-white px-2 py-1 rounded-[4px] text-[#102a45] text-[10px] font-bold">UPI</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
