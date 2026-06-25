"use client";
import { useState } from "react";
import { openWhatsAppOrder } from "@/lib/whatsapp";

export default function WhatsAppButton({
  product,
  compact = false,
}) {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "");

  const handleWhatsApp = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }
    
    // Construct the message with the collected details
    const message = `Hello Naipunya,\n\nI want to order:\n\n*Product:* ${product.name}\n*Variant:* ${selectedSize}\n*Customer Name:* ${name.trim()}\n\nPlease confirm availability and delivery details.\n\nThank you!`;
    const whatsappUrl = `https://wa.me/919074342300?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setShowModal(false);
    setName(""); // Reset form
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className={compact 
          ? "w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fbb57] text-white font-semibold text-sm py-2.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
          : "flex w-full items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1fbb57] text-white font-bold text-base px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:-translate-y-0.5"
        }
      >
        <svg className={compact ? "w-4 h-4" : "w-6 h-6"} fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        {compact ? "Buy on WhatsApp" : "Order on WhatsApp"}
      </button>

      {/* Order Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#102a45]/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200">
            {/* Close button */}
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
                  <label className="block text-sm font-semibold text-[#102a45] mb-1.5">Select Variant</label>
                  <select 
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-[#102a45] text-sm focus:outline-none focus:ring-2 focus:ring-[#f5a623] focus:border-[#f5a623] transition-shadow appearance-none"
                    required
                  >
                    {product?.sizes?.map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#102a45] mb-1.5">Your Name</label>
                  <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-[#102a45] text-sm focus:outline-none focus:ring-2 focus:ring-[#f5a623] focus:border-[#f5a623] transition-shadow"
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
    </>
  );
}
