import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata = {
  title: "Naipunya – Pure by Nature",
  description:
    "Discover Naipunya's range of 100% natural, cold-pressed oils and ayurvedic essentials crafted for a healthier you and a better tomorrow.",
  keywords: "coconut oil, mustard oil, deepam oil, natural oils, ayurvedic, cold pressed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-sans antialiased bg-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
