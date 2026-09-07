"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import TeamSection from "@/components/TeamSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-cyan-100 selection:text-cyan-900 font-sans antialiased">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ServicesSection />
        <ProjectShowcase />
        <TeamSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
