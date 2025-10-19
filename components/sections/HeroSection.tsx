"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AvailabilityBadge from "@/components/ui/AvailabilityBadge";
import { personalInfo } from "@/lib/data";
import Container from "../layout/Container";
import AIAssistantInterface from "@/components/ui/AIAssistantInterface";

// Varianti di animazione leggere - ottimizzate per LCP
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 5 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25 },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 md:pb-20 px-4 overflow-hidden">
      {/* Background Gradient Animated - Monocromatico */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/10 via-background via-50% to-muted/5 gradient-animated" />

        {/* Effetti Glow Animati - Monocromatico */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-muted/15 rounded-full blur-3xl opacity-40 gradient-glow-rotate" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-muted/10 rounded-full blur-3xl opacity-30" />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-5xl mx-auto"
        >
          {/* Avatar con stile moderno iOS */}
          <motion.div variants={itemVariants} className="mb-3 relative">
            {/* Glow senza blur - Safari friendly */}
            <div className="absolute inset-0 bg-primary/20 rounded-[28%] opacity-50" />

            {/* Avatar container con Next.js Image ottimizzato per LCP */}
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-[28%] ring-2 ring-primary/30 shadow-lg overflow-hidden">
              <Image
                src="/images/avatar/profile.webp"
                alt={`${personalInfo.name} - AI Integration Specialist and Developer`}
                width={96}
                height={96}
                priority
                sizes="(max-width: 768px) 80px, 96px"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Availability Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <AvailabilityBadge
              available={personalInfo.available}
              text={personalInfo.availability}
            />
          </motion.div>

          {/* AI Assistant Interface */}
          <motion.div variants={itemVariants} className="w-full">
            <AIAssistantInterface />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
