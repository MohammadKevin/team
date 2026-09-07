import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://teamwork-coral.vercel.app"),
  title: "Voltiq Labs — High-Performance Fullstack & Systems Engineering Studio",
  description:
    "Voltiq Labs is a modern engineering studio founded by Mohammad Kevin & Danendra Athallah. We build fast, production-ready web apps, resilient APIs, and scalable infrastructure with zero agency bloat.",
  keywords: [
    "Voltiq Labs",
    "Voltiq Systems",
    "Mohammad Kevin",
    "Danendra Athallah",
    "Fullstack Engineer",
    "Backend Architect",
    "Next.js 16 Developer",
    "Go Golang Developer",
    "PostgreSQL",
    "Prisma",
    "TypeScript",
    "Web Engineering Duo",
    "Freelance Engineering Studio",
  ],
  authors: [{ name: "Mohammad Kevin" }, { name: "Danendra Athallah" }],
  creator: "Voltiq Labs (Mohammad Kevin & Danendra Athallah)",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://teamwork-coral.vercel.app",
    title: "Voltiq Labs — High-Performance Engineering Studio",
    description:
      "Direct technical collaboration with senior engineers. We build production-ready Next.js, Go, PostgreSQL, and payment systems with zero agency bloat.",
    siteName: "Voltiq Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voltiq Labs — High-Performance Engineering Studio",
    description:
      "Production-ready Next.js & Go web applications with zero agency bloat.",
    creator: "@mohammadkevin",
  },
  robots: {
    index: true,
    follow: true,
  },
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
