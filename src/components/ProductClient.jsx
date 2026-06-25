"use client";
import { useState } from "react";
import Image from "next/image";
import { openWhatsAppOrder } from "@/lib/whatsapp";

export default function ProductClient({ product }) {
  const [selectedSizeObj, setSelectedSizeObj] = useState(
    product.sizeOptions ? product.sizeOptions[0] : null
  );
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const handleWhatsApp = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }
    const message = `Hello Naipunya,\n\nI want to order:\n\n*Product:* ${product.name}\n*Variant:* ${selectedSizeObj?.size || "Default"}\n*Customer Name:* ${name.trim()}\n\nPlease confirm availability and delivery details.\n\nThank you!`;
    const whatsappUrl = `https://wa.me/919074342300?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setShowModal(false);
    setName(""); // Reset form
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-12">
      {/* Header Info */}
      <div>
        {/* Badge & Title */}
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-[#12b963] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            Best Seller
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#133261] mb-2 leading-tight tracking-tight">
          {product.name}
        </h1>
        <p className="text-[#133261] text-lg font-bold mb-4">
          Pure by Nature, Trusted for Generations
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-6">
          <div className="flex text-[#f5a623]">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <span className="text-[#133261] font-bold text-sm">
            ({product.rating}) <span className="text-gray-400 font-normal ml-1">|</span> {product.reviews} reviews
          </span>
        </div>

        <p className="text-[#4b5563] text-base leading-relaxed max-w-xl">
          {product.longDescription}
        </p>

        {/* Feature Icons */}
        <div className="flex items-center gap-8 mt-8 pb-8 border-b border-gray-100">
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full bg-[#133261]/5 flex items-center justify-center text-[#133261]">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            </div>
            <span className="text-xs font-bold text-[#133261] text-center">100% Natural<br/><span className="text-[10px] font-normal text-gray-500">Pure & natural<br/>ingredients</span></span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full bg-[#133261]/5 flex items-center justify-center text-[#133261]">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            </div>
            <span className="text-xs font-bold text-[#133261] text-center">Cold Pressed<br/><span className="text-[10px] font-normal text-gray-500">Extracted using<br/>traditional methods</span></span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full bg-[#133261]/5 flex items-center justify-center text-[#133261]">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </div>
            <span className="text-xs font-bold text-[#133261] text-center">Cruelty Free<br/><span className="text-[10px] font-normal text-gray-500">Kind to you and<br/>the environment</span></span>
          </div>
        </div>
      </div>

      {/* Choose Your Size */}
      {product.sizeOptions && (
        <div>
          <h2 className="text-2xl font-extrabold text-[#133261] mb-6">Choose Your Size</h2>
          <div className="grid grid-cols-3 gap-4">
            {product.sizeOptions.map((opt) => {
              const isSelected = selectedSizeObj?.size === opt.size;
              return (
                <div
                  key={opt.size}
                  onClick={() => setSelectedSizeObj(opt)}
                  className={`relative cursor-pointer rounded-2xl border-2 transition-all duration-200 overflow-hidden flex flex-col items-center p-4 bg-white ${
                    isSelected ? "border-[#0051ff] shadow-md scale-[1.02]" : "border-[#eaeaea] hover:border-[#133261]/30 hover:bg-gray-50"
                  }`}
                >
                  {/* Popular Badge */}
                  {opt.popular && (
                    <div className="absolute top-0 left-0 bg-[#0051ff] text-white text-[9px] font-bold px-2 py-0.5 rounded-br-lg uppercase tracking-wide">
                      Most Popular
                    </div>
                  )}
                  {/* Checkmark Icon */}
                  <div className={`absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                    isSelected ? "bg-[#0051ff] text-white" : "border-2 border-gray-200 bg-white"
                  }`}>
                    {isSelected && (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    )}
                  </div>

                  <div className="relative w-16 h-28 my-3">
                    <Image src={product.image} alt={product.name} fill className="object-contain" />
                  </div>
                  
                  <span className={`font-bold text-sm mb-1 ${isSelected ? "text-[#0051ff]" : "text-[#133261]"}`}>
                    {opt.size}
                  </span>
                  <span className="font-extrabold text-xl text-[#133261] mb-0.5">
                    ₹{opt.price}
                  </span>
                  <span className="text-[10px] text-gray-500 font-medium">
                    {opt.perUnit}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Action Banner */}
      <div className="bg-[#fcfdfd] border border-[#eef2f6] rounded-3xl p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-extrabold text-[#133261] mb-1">Ready to place your order?</h3>
          <p className="text-sm text-gray-600">Click the button to order on WhatsApp and complete your order securely.</p>
        </div>
        <div className="w-full sm:w-auto flex flex-col items-center">
          <button
            onClick={() => setShowModal(true)}
            className="w-full sm:w-64 flex items-center justify-center gap-3 bg-[#1ca953] hover:bg-[#158742] text-white font-bold text-[15px] px-8 py-3.5 rounded-xl transition-all duration-200 shadow-md shadow-[#1ca953]/20 hover:-translate-y-0.5"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Order on WhatsApp
          </button>
          <div className="flex items-center gap-3 text-[11px] font-semibold text-gray-500 mt-2 uppercase tracking-wide">
            <span className="flex items-center gap-1"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg> Secure</span>
            <span>•</span>
            <span>Fast</span>
            <span>•</span>
            <span>Reliable</span>
          </div>
        </div>
      </div>

      {/* Product Details Table */}
      {product.productDetails && (
        <div>
          <h2 className="text-2xl font-extrabold text-[#133261] mb-6">Product Details</h2>
          <div className="bg-[#fcfdfd] border border-[#eef2f6] rounded-3xl overflow-hidden shadow-sm">
            <div className="p-6">
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Naipunya Coconut Oil is made from carefully selected coconuts using a cold pressed extraction process. This preserves the natural nutrients, aroma, and flavour, making it perfect for cooking, skin and hair care.
              </p>
              <ul className="space-y-2.5 mb-6">
                {product.benefits.map((ben) => (
                  <li key={ben} className="flex items-center gap-3 text-sm text-[#133261] font-medium">
                    <div className="bg-[#0051ff] text-white rounded-full p-0.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    {ben}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="border-t border-[#eef2f6]">
              {product.productDetails.map((detail, index) => (
                <div key={detail.label} className={`flex flex-col sm:flex-row sm:items-center py-4 px-6 gap-2 sm:gap-6 ${index % 2 === 0 ? "bg-white" : "bg-[#fcfdfd]"}`}>
                  <div className="sm:w-1/3 flex items-center gap-3 text-[#133261] font-bold text-sm">
                    {/* Dummy icon for layout */}
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                    {detail.label}
                  </div>
                  <div className="sm:w-2/3 text-sm text-gray-600 font-medium">
                    {detail.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* FAQs */}
      {product.faqs && (
        <div className="pt-4">
          <h2 className="text-2xl font-extrabold text-[#133261] mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {product.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="bg-[#fcfdfd] border border-[#eef2f6] rounded-2xl overflow-hidden transition-all duration-200">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                  >
                    <span className="font-bold text-[#133261] text-sm">{faq.question}</span>
                    <svg className={`w-5 h-5 text-[#0051ff] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-gray-600 leading-relaxed animate-in slide-in-from-top-2 fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Order Modal (reused logic) */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#102a45]/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#102a45] mb-2">Order Details</h2>
              <p className="text-gray-500 text-sm mb-6">Please fill in your details to complete your order via WhatsApp.</p>
              <form onSubmit={handleWhatsApp} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-[#102a45] mb-1.5">Product</label>
                  <div className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#102a45] font-medium text-sm">
                    {product.name}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#102a45] mb-1.5">Variant Selected</label>
                  <div className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#102a45] font-medium text-sm">
                    {selectedSizeObj?.size} - ₹{selectedSizeObj?.price}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#102a45] mb-1.5">Your Name</label>
                  <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-[#102a45] text-sm focus:outline-none focus:ring-2 focus:ring-[#0051ff] focus:border-[#0051ff] transition-shadow"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full mt-4 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fbb57] text-white font-bold text-base px-8 py-3.5 rounded-xl transition-all duration-200 shadow-md"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Send to WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
