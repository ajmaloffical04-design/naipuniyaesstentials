import HeroSection from "@/components/HeroSection";
import FeatureBar from "@/components/FeatureBar";
import CoconutOilBanner from "@/components/CoconutOilBanner";
import ProductGallery from "@/components/ProductGallery";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata = {
  title: "Naipunya – Pure by Nature | Natural Oils & Ayurvedic Essentials",
  description:
    "Shop Naipunya's range of cold-pressed coconut oil, mustard oil, and deepam oil. 100% natural, no chemicals, cruelty free. Order on WhatsApp for fast delivery.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureBar />
      <CoconutOilBanner />
      <ProductGallery />
      <WhyChooseUs />
    </>
  );
}
