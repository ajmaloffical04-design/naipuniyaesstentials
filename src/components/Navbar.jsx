"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/30 backdrop-blur-md shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)]">
      {/* Announcement bar */}
      <div className="bg-[#102a45]/70 backdrop-blur-md text-white text-center text-[11px] sm:text-[12px] font-medium py-2 px-4 flex items-center justify-center gap-2 tracking-wide">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
        Free shipping on orders over ₹500
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px]">
          {/* Logo - Left */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Naipunya Logo"
                width={140}
                height={45}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Nav Links - Center */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-6 lg:gap-8">
            <div className="relative group whitespace-nowrap">
              <Link href="/" className="text-[#102a45] text-[13px] font-bold hover:text-[#f5a623] transition-colors pb-1 border-b-2 border-[#102a45]">
                Home
              </Link>
            </div>
            
            <div className="group relative flex items-center gap-1 cursor-pointer whitespace-nowrap">
              <Link href="/products" className="text-[#102a45] text-[13px] font-bold group-hover:text-[#f5a623] transition-colors">
                Shop
              </Link>
              <svg className="w-3.5 h-3.5 text-[#102a45] group-hover:text-[#f5a623]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <div className="group relative flex items-center gap-1 cursor-pointer whitespace-nowrap">
              <span className="text-[#102a45] text-[13px] font-bold group-hover:text-[#f5a623] transition-colors">
                Categories
              </span>
              <svg className="w-3.5 h-3.5 text-[#102a45] group-hover:text-[#f5a623]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <Link href="/about" className="text-[#102a45] text-[13px] font-bold hover:text-[#f5a623] transition-colors whitespace-nowrap">
              About Us
            </Link>
            <Link href="#" className="text-[#102a45] text-[13px] font-bold hover:text-[#f5a623] transition-colors whitespace-nowrap">
              Blog
            </Link>
            <Link href="/contact" className="text-[#102a45] text-[13px] font-bold hover:text-[#f5a623] transition-colors whitespace-nowrap">
              Contact
            </Link>
          </div>

          {/* Desktop Icons - Right */}
          <div className="hidden md:flex flex-1 justify-end items-center gap-5 lg:gap-6 text-[#102a45]">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="hover:text-[#f5a623] transition-colors"
              aria-label="Search"
            >
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <Link href="#" className="hover:text-[#f5a623] transition-colors" aria-label="Account">
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
            <Link href="#" className="hover:text-[#f5a623] transition-colors relative" aria-label="Cart">
              <svg className="w-[20px] h-[20px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-1.5 -right-2 bg-[#102a45] text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-[1.5px] border-white">
                2
              </span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex flex-1 justify-end">
            <button
              className="text-[#102a45] p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Search Bar (expandable) */}
        {searchOpen && (
          <div className="pb-4">
            <div className="relative max-w-sm ml-auto">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-white/50 backdrop-blur-md text-[#102a45] border border-gray-200 rounded-full px-5 py-2.5 text-sm focus:outline-none focus:border-[#102a45]"
              />
              <svg className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-[#102a45]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/40 backdrop-blur-lg border-t border-white/20 px-4 pb-6 pt-2 shadow-lg">
          <Link href="/" className="block text-[#102a45] py-3 text-[14px] font-bold border-b border-[#102a45]/10" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/products" className="block text-[#102a45] py-3 text-[14px] font-bold border-b border-[#102a45]/10" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link href="/about" className="block text-[#102a45] py-3 text-[14px] font-bold border-b border-[#102a45]/10" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link href="/contact" className="block text-[#102a45] py-3 text-[14px] font-bold border-b border-[#102a45]/10" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
