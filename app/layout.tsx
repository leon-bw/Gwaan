import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CallToAction from "@/components/CallToAction";
import { Toaster } from "@/components/ui/toaster";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gwaan",
  description: "Creator-Driven Movement Gamification",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${outfit.className} antialiased bg-seaSalt text-night`}
      >
        <Header />
        {children}
        <Toaster />
        <CallToAction />
        <Footer />
      </body>
    </html>
  );
}
