import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";

// Lazy load below-the-fold sections with priority
const AboutSection = dynamic(() => import("@/components/sections/AboutSection"), {
  loading: () => <div className="min-h-[50vh]" />,
});
const ServicesSection = dynamic(() => import("@/components/sections/ServicesSection"), {
  loading: () => <div className="min-h-screen" />,
});
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
  description: "Aiuto aziende e clienti a integrare agenti AI, chatbot e workflow automatizzati per risparmiare tempo e ottenere risultati misurabili.",
  openGraph: {
    title: "Euxhenjo Nexhipi | Soluzioni AI, Automazioni e Siti Intelligenti",
    description: "Aiuto aziende e clienti a integrare agenti AI, chatbot e workflow automatizzati per risparmiare tempo e ottenere risultati misurabili.",
  },
  twitter: {
    title: "Euxhenjo Nexhipi | Soluzioni AI, Automazioni e Siti Intelligenti",
    description: "Aiuto aziende e clienti a integrare agenti AI, chatbot e workflow automatizzati per risparmiare tempo e ottenere risultati misurabili.",
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
