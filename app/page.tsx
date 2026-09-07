"use client";

import { PortfolioProvider } from "@/context/PortfolioContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ArchitectureFlow from "@/components/ArchitectureFlow";
import ProjectShowcase from "@/components/ProjectShowcase";
import TechMatrix from "@/components/TechMatrix";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import CmsDrawer from "@/components/CmsDrawer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <PortfolioProvider>
      <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col selection:bg-zinc-800 selection:text-white font-sans antialiased">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <ArchitectureFlow />
          <ProjectShowcase />
          <TechMatrix />
          <TestimonialsSection />
          <PricingSection />
          <ContactSection />
        </main>
        <Footer />
        <CmsDrawer />
      </div>
    </PortfolioProvider>
  );
}
