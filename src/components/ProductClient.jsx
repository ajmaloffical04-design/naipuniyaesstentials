"use client";
import { useState } from "react";
import Image from "next/image";
import { openWhatsAppOrder } from "@/lib/whatsapp";

export default function ProductClient({ product, children }) {
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
    <div className="space-y-8">
      {/* Header Info */}
      <div>
        {/* Badge & Title */}
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-[#12b963] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide">
            Best Seller
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-[#133261] mb-1.5 leading-tight tracking-tight">
          {product.name}
        </h1>
        <p className="text-[#133261] text-sm font-semibold mb-3">
          Pure by Nature, Trusted for Generations
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-2">
          <div className="flex text-[#f5a623]">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <span className="text-[#133261] font-semibold text-xs">
            ({product.rating}) <span className="text-gray-400 font-normal ml-1">|</span> {product.reviews} reviews
          </span>
        </div>
      </div>

      {/* Choose Your Size */}
      {product.sizeOptions && (
        <div>
          <h2 className="text-lg font-bold text-[#133261] mb-4">Choose Your Size</h2>
          <div className="grid grid-cols-3 gap-3">
            {product.sizeOptions.map((opt) => {
              const isSelected = selectedSizeObj?.size === opt.size;
              return (
                <div
                  key={opt.size}
                  onClick={() => setSelectedSizeObj(opt)}
                  className={`relative cursor-pointer rounded-xl border-2 transition-all duration-200 overflow-hidden flex flex-col items-center p-3 bg-white ${
                    isSelected ? "border-[#0051ff] shadow-sm scale-[1.02]" : "border-[#eaeaea] hover:border-[#133261]/30 hover:bg-gray-50"
                  }`}
                >
                  {/* Popular Badge */}
                  {opt.popular && (
                    <div className="absolute top-0 left-0 bg-[#0051ff] text-white text-[8px] font-bold px-1.5 py-0.5 rounded-br-md uppercase tracking-wide">
                      Popular
                    </div>
                  )}
                  {/* Checkmark Icon */}
                  <div className={`absolute top-1.5 right-1.5 w-4 h-4 rounded-full flex items-center justify-center transition-colors ${
                    isSelected ? "bg-[#0051ff] text-white" : "border-2 border-gray-200 bg-white"
                  }`}>
                    {isSelected && (
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    )}
                  </div>

                  <div className="relative w-12 h-20 my-2">
                    <Image src={product.image} alt={product.name} fill className="object-contain" />
                  </div>
                  
                  <span className={`font-semibold text-xs mb-0.5 ${isSelected ? "text-[#0051ff]" : "text-[#133261]"}`}>
                    {opt.size}
                  </span>
                  <span className="font-bold text-base text-[#133261] mb-0.5">
                    ₹{opt.price}
                  </span>
                  <span className="text-[9px] text-gray-500 font-medium">
                    {opt.perUnit}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Action Banner */}
      <div className="bg-[#fcfdfd] border border-[#eef2f6] rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <h3 className="text-base font-bold text-[#133261] mb-1">Ready to order?</h3>
          <p className="text-xs text-gray-600">Order securely via WhatsApp.</p>
        </div>
        <div className="w-full sm:w-auto flex flex-col items-center">
          <button
            onClick={() => setShowModal(true)}
            className="w-full sm:w-56 flex items-center justify-center gap-2 bg-[#1ca953] hover:bg-[#158742] text-white font-bold text-sm px-6 py-2.5 rounded-lg transition-all duration-200 shadow-sm hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Order on WhatsApp
          </button>
          <div className="flex items-center justify-center gap-2 text-[10px] font-semibold text-gray-500 mt-2 uppercase tracking-wide">
            <span className="flex items-center gap-1"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg> Secure</span>
            <span>•</span>
            <span>Fast</span>
            <span>•</span>
            <span>Reliable</span>
          </div>
        </div>
      </div>

      {/* Inserted Children (like Benefits Grid) */}
      {children && (
        <div className="pt-2">
          {children}
        </div>
      )}

      {/* Description & Feature Icons */}
      <div className="pt-6 border-t border-gray-100">
        <h2 className="text-lg font-bold text-[#133261] mb-2">About this product</h2>
        <p className="text-gray-600 text-sm leading-relaxed max-w-xl mb-6">
          {product.longDescription}
        </p>

        {/* Feature Icons */}
        <div className="flex flex-wrap items-center gap-6 sm:gap-8 pb-4">
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-10 h-10 rounded-full bg-[#133261]/5 flex items-center justify-center text-[#133261]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            </div>
            <span className="text-[10px] font-bold text-[#133261] text-center leading-tight">100% Natural<br/><span className="font-normal text-gray-500">Pure ingredients</span></span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-10 h-10 rounded-full bg-[#133261]/5 flex items-center justify-center text-[#133261]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            </div>
            <span className="text-[10px] font-bold text-[#133261] text-center leading-tight">Cold Pressed<br/><span className="font-normal text-gray-500">Traditional extract</span></span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-10 h-10 rounded-full bg-[#133261]/5 flex items-center justify-center text-[#133261]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </div>
            <span className="text-[10px] font-bold text-[#133261] text-center leading-tight">Cruelty Free<br/><span className="font-normal text-gray-500">Kind to nature</span></span>
          </div>
        </div>
      </div>

      {/* Product Details Table */}
      {product.productDetails && (
        <div className="pt-2">
          <h2 className="text-lg font-bold text-[#133261] mb-4">Product Details</h2>
          <div className="bg-[#fcfdfd] border border-[#eef2f6] rounded-2xl overflow-hidden shadow-sm">
            <div className="p-5">
              <ul className="space-y-2">
                {product.benefits.map((ben) => (
                  <li key={ben} className="flex items-center gap-2.5 text-xs text-[#133261] font-medium">
                    <div className="bg-[#0051ff] text-white rounded-full p-0.5 flex-shrink-0">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    {ben}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="border-t border-[#eef2f6]">
              {product.productDetails.map((detail, index) => (
                <div key={detail.label} className={`flex flex-col sm:flex-row sm:items-center py-3 px-5 gap-1 sm:gap-4 ${index % 2 === 0 ? "bg-white" : "bg-[#fcfdfd]"}`}>
                  <div className="sm:w-1/3 flex items-center gap-2.5 text-[#133261] font-semibold text-xs">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                    {detail.label}
                  </div>
                  <div className="sm:w-2/3 text-xs text-gray-600 font-medium">
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
        <div className="pt-2">
          <h2 className="text-lg font-bold text-[#133261] mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2.5">
            {product.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="bg-[#fcfdfd] border border-[#eef2f6] rounded-xl overflow-hidden transition-all duration-200">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                  >
                    <span className="font-semibold text-[#133261] text-xs">{faq.question}</span>
                    <svg className={`w-4 h-4 flex-shrink-0 text-[#0051ff] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-0.5 text-xs text-gray-600 leading-relaxed animate-in slide-in-from-top-2 fade-in duration-200">
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
          <div className="bg-white rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 w-7 h-7 rounded-full flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="p-5">
              <h2 className="text-xl font-bold text-[#102a45] mb-1.5">Order Details</h2>
              <p className="text-gray-500 text-xs mb-5">Please fill in your details to complete your order via WhatsApp.</p>
              <form onSubmit={handleWhatsApp} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#102a45] mb-1">Product</label>
                  <div className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-[#102a45] font-medium text-xs">
                    {product.name}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#102a45] mb-1">Variant Selected</label>
                  <div className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-[#102a45] font-medium text-xs">
                    {selectedSizeObj?.size} - ₹{selectedSizeObj?.price}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#102a45] mb-1">Your Name</label>
                  <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-[#102a45] text-xs focus:outline-none focus:ring-2 focus:ring-[#0051ff] focus:border-[#0051ff] transition-shadow"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full mt-2 flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#1fbb57] text-white font-bold text-sm px-6 py-2.5 rounded-lg transition-all duration-200 shadow-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
