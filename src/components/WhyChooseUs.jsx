const reasons = [
  {
    icon: (
      <svg className="w-[32px] h-[32px] text-[#0e4da4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Premium Quality",
    desc: "Sourced from the finest ingredients",
  },
  {
    icon: (
      <svg className="w-[32px] h-[32px] text-[#0e4da4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Trusted by Families",
    desc: "Loved and trusted by thousands",
  },
  {
    icon: (
      <svg className="w-[32px] h-[32px] text-[#0e4da4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Secure Payments",
    desc: "100% secure and safe checkout",
  },
  {
    icon: (
      <svg className="w-[32px] h-[32px] text-[#0e4da4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        <rect x="2" y="8" width="16" height="10" rx="2" strokeWidth={1.5} />
        <circle cx="6" cy="18" r="2" strokeWidth={1.5} />
        <circle cx="14" cy="18" r="2" strokeWidth={1.5} />
      </svg>
    ),
    title: "Fast Delivery",
    desc: "Delivered fresh to your doorstep",
  },
  {
    icon: (
      <svg className="w-[32px] h-[32px] text-[#0e4da4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Easy Returns",
    desc: "No questions asked return policy",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-[32px] sm:text-[36px] font-serif font-bold text-[#102a45]">
            Why Choose Naipunya?
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-12">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="flex-shrink-0 flex items-center justify-center mb-1">
                {reason.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-[#102a45] text-[16px] leading-tight mb-1.5">{reason.title}</h3>
                <p className="text-[#6b7280] text-[13.5px] leading-relaxed max-w-[200px] mx-auto">{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
