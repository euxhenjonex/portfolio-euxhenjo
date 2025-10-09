import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";

// Lazy load below-the-fold sections
const ProcessSection = dynamic(() => import("@/components/sections/ProcessSection"), {
  loading: () => <div className="min-h-[50vh]" />,
});
const ProjectsSection = dynamic(() => import("@/components/sections/ProjectsSection"), {
  loading: () => <div className="min-h-screen" />,
});
const TechStackSection = dynamic(() => import("@/components/sections/TechStackSection"), {
  loading: () => <div className="min-h-[50vh]" />,
});
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"), {
  loading: () => <div className="min-h-[50vh]" />,
});
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"), {
  loading: () => <div className="min-h-[50vh]" />,
});

export const metadata: Metadata = {
  title: "Euxhenjo Nexhipi | Soluzioni AI, Automazioni e Siti Intelligenti",
  description: "Aiuto aziende e creator a integrare agenti AI, chatbot e workflow automatizzati per risparmiare tempo e ottenere risultati misurabili.",
  openGraph: {
    title: "Euxhenjo Nexhipi | Soluzioni AI, Automazioni e Siti Intelligenti",
    description: "Aiuto aziende e creator a integrare agenti AI, chatbot e workflow automatizzati per risparmiare tempo e ottenere risultati misurabili.",
  },
  twitter: {
    title: "Euxhenjo Nexhipi | Soluzioni AI, Automazioni e Siti Intelligenti",
    description: "Aiuto aziende e creator a integrare agenti AI, chatbot e workflow automatizzati per risparmiare tempo e ottenere risultati misurabili.",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <TechStackSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
