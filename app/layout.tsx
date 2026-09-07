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
  title: "Mohammad Kevin & Danendra | Fullstack & Backend Engineering Duo",
  description:
    "Web development duo specializing in high-performance, scalable web systems, clean architecture, and reliable end-to-end web solutions for startups and businesses.",
  keywords: [
    "Mohammad Kevin",
    "Danendra",
    "Fullstack Developer",
    "Backend Developer",
    "Web Development Studio",
    "Next.js",
    "React",
    "Node.js",
    "Go",
    "PostgreSQL",
    "Tailwind CSS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 selection:bg-zinc-800 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
