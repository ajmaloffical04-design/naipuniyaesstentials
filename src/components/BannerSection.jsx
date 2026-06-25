import Image from "next/image";
import Link from "next/link";

export default function BannerSection() {
  return (
    <div className="bg-gradient-to-b from-[#e8f1f8] to-[#d3e5f4] rounded-[24px] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300 h-full border border-[#c1d9ed]">
      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-[#e8f1f8] to-[#d3e5f4]">
        <Image
          src="/hero.png"
          alt="Goodness in Every Drop"
          fill
          className="object-cover object-left-bottom"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col flex-grow p-6 sm:p-8 text-center items-center justify-between">
        <div>
          <h3 className="text-[22px] sm:text-[24px] font-[800] text-[#102a45] leading-tight mb-4">
            Godness in<br />Every Drop
          </h3>
          <p className="text-[#102a45]/80 text-[14px] leading-relaxed mb-6">
            Our oils are extracted using traditional methods to retain maximum nutrients and natural goodness.
          </p>
        </div>
        
        <Link
          href="/about"
          className="inline-flex items-center justify-center bg-[#102a45] text-white font-bold text-[13px] px-6 py-2.5 rounded-[6px] hover:bg-[#16385a] transition-all w-full max-w-[200px]"
        >
          Learn More About Us <span className="ml-2">→</span>
        </Link>
      </div>
    </div>
  );
}
