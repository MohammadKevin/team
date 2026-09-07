import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kevin & Danendra — Fullstack & Backend Engineering Studio",
  description:
    "We engineer resilient backends, clean high-performance interfaces, and seamless payment/API integrations — delivered end-to-end with zero agency bloat.",
  keywords: [
    "Mohammad Kevin",
    "Danendra Athallah",
    "Fullstack Engineer",
    "Backend Architect",
    "Next.js Developer",
    "Go Developer",
    "PostgreSQL",
    "TypeScript",
    "Web Engineering Duo",
  ],
  authors: [{ name: "Mohammad Kevin" }, { name: "Danendra Athallah" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-cyan-100 selection:text-cyan-900 font-sans">
        {children}
      </body>
    </html>
  );
}
