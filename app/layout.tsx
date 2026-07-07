import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WhatsAppModalProvider } from "@/components/WhatsAppModalContext";
import OrderWhatsAppModal from "@/components/OrderWhatsAppModal";
import BookingWhatsAppModal from "@/components/BookingWhatsAppModal";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "BrownCrust Cafe | Luxury Bakery & Cafe",
  description:
    "BrownCrust Cafe — handcrafted pastries, artisan bread, and premium coffee, baked fresh daily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-coffee">
        <WhatsAppModalProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <OrderWhatsAppModal />
          <BookingWhatsAppModal />
        </WhatsAppModalProvider>
        <Analytics />
      </body>
    </html>
  );
}
