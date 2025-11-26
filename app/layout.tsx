import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://graysable.com"),
  title: "GraySable | Full-Stack Automation & Hardware Design",
  description: "Custom automation systems integrating software, embedded systems, and hardware. Built to your specific needs.",
  keywords: ["automation", "custom hardware", "PCB design", "FPGA", "embedded systems", "AI", "machine learning", "hardware design"],
  authors: [{ name: "GraySable" }],
  openGraph: {
    title: "GraySable | Full-Stack Automation & Hardware Design",
    description: "Custom automation systems from software to hardware.",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 1200,
        alt: "GraySable",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "GraySable | Custom Automation & AI Solutions",
    description: "We build intelligent systems that drive results.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
