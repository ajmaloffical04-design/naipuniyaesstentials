const features = [
  {
    icon: (
      <svg className="w-[28px] h-[28px] text-[#0e4da4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "100% Natural",
    desc: "Pure & natural ingredients",
  },
  {
    icon: (
      <svg className="w-[28px] h-[28px] text-[#0e4da4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM12 4a8 8 0 100 16 8 8 0 000-16z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    ),
    title: "Cold Pressed",
    desc: "Extracted using traditional methods",
  },
  {
    icon: (
      <svg className="w-[28px] h-[28px] text-[#0e4da4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "No Chemicals",
    desc: "Free from additives & preservatives",
  },
  {
    icon: (
      <svg className="w-[28px] h-[28px] text-[#0e4da4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Cruelty Free",
    desc: "Kind to you and the environment",
  },
];

export default function FeatureBar() {
  return (
    <section className="bg-[#fdfaf6] sm:bg-transparent pb-8">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[24px] lg:rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 px-2 py-6 sm:px-6 lg:px-12 lg:py-8 -mt-6 sm:-mt-12 relative z-20 grid grid-cols-4 divide-x divide-gray-100 items-start">
          {features.map((feat, idx) => (
            <div
              key={feat.title}
              className="flex flex-col items-center text-center px-1 sm:px-4 w-full"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#f0f5fa] mb-3">
                {feat.icon}
              </div>
              <div className="flex flex-col items-center">
                <h3 className="font-bold text-[#102a45] text-[11px] sm:text-[14px] lg:text-[15px] leading-tight">{feat.title}</h3>
                <p className="text-[#6b7280] text-[9px] sm:text-[12px] lg:text-[13px] leading-tight mt-1">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
