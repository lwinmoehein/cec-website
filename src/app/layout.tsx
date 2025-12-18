import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans", // Keeping variable name for compatibility with CSS
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clouds English Center | Learn English Effectively",
  description: "Join Clouds English Center to master English with expert teachers and interactive apps.",
  keywords: ["English Learning", "Clouds English Center", "Online English Classes", "Learn English"],
  metadataBase: new URL("https://cloudsenglish.com"),
  openGraph: {
    title: "Clouds English Center",
    description: "Join Clouds English Center to master English with expert teachers and interactive apps.",
    images: ["/images/playstore.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
