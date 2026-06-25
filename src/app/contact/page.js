"use client";
import { useState } from "react";
import { openWhatsAppGeneral } from "@/lib/whatsapp";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleWhatsApp = () => {
    if (!form.name || !form.message) return;
    openWhatsAppGeneral(
      `Hello Naipunya!\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage: ${form.message}`
    );
  };

  const contactDetails = [
    { icon: "📞", label: "Phone", value: "+91 90743 42300" },
    { icon: "📧", label: "Email", value: "hello@naipunya.com" },
    { icon: "📍", label: "Location", value: "Kerala, India" },
    { icon: "🕐", label: "Hours", value: "Mon–Sat, 9 AM – 6 PM" },
  ];

  return (
    <div className="min-h-screen bg-[#f9f7f3]">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#133261] to-[#1a4a8a] py-16 text-center">
        <p className="text-[#f5a623] text-sm font-bold uppercase tracking-widest mb-2">Get in Touch</p>
        <h1 className="text-4xl font-extrabold text-white">Contact Us</h1>
        <p className="text-white/60 mt-2 text-base">We&apos;d love to hear from you</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-extrabold text-[#133261] mb-2">Let&apos;s Connect</h2>
              <p className="text-gray-500">
                Have a question about our products or want to place a bulk order? Reach out to us on
                WhatsApp for the quickest response!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactDetails.map((item) => (
                <div key={item.label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-wide">{item.label}</p>
                  <p className="text-[#133261] font-bold text-sm mt-0.5">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Quick WhatsApp CTA */}
            <div className="bg-gradient-to-r from-[#133261] to-[#1a4a8a] rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-1">Quick Order via WhatsApp</h3>
              <p className="text-white/70 text-sm mb-4">
                The fastest way to place an order or get support is directly on WhatsApp.
              </p>
              <button
                onClick={() => openWhatsAppGeneral("Hello Naipunya, I have a question about your products!")}
                className="flex items-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#1fbb57] transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-extrabold text-[#133261] mb-6">Send a Message</h2>
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-[#133261] mb-2">Message Sent!</h3>
                <p className="text-gray-500">We&apos;ll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-[#133261] mb-1.5">Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#133261] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#133261] mb-1.5">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#133261] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#133261] mb-1.5">Phone</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#133261] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#133261] mb-1.5">Message *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your query or order..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#133261] transition-colors resize-none"
                  />
                </div>
                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 bg-[#133261] text-white font-bold py-3.5 rounded-xl hover:bg-[#0e2548] transition-all"
                  >
                    Send Message
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="flex-1 bg-[#25D366] text-white font-bold py-3.5 rounded-xl hover:bg-[#1fbb57] transition-all"
                  >
                    Send via WhatsApp
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
