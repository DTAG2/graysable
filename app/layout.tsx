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
  title: "GraySable | Precision Automation Systems",
  description: "Custom automation systems built to your needs. Software and hardware integrated seamlessly.",
  keywords: ["automation", "custom software", "PCB design", "FPGA", "AI", "machine learning", "hardware design"],
  authors: [{ name: "GraySable" }],
  openGraph: {
    title: "GraySable | Precision Automation Systems",
    description: "Custom automation systems. Software and hardware integrated seamlessly.",
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
    title: "GraySable | Precision Automation Systems",
    description: "Custom automation systems. Software and hardware integrated seamlessly.",
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
