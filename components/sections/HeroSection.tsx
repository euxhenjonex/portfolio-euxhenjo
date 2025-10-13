"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import AvailabilityBadge from "@/components/ui/AvailabilityBadge";
import { Calendar, ArrowRight } from "lucide-react";
import { personalInfo } from "@/lib/data";
import Container from "../layout/Container";

// Varianti di animazione leggere
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 md:pb-20 px-4 overflow-hidden">
      {/* Background Gradient Statico - Ottimizzato Safari */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />

        {/* Effetti Glow Statici - Safari Friendly */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-2xl opacity-40" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-2xl opacity-30" />
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

            {/* Avatar container con bordo arrotondato iOS-style */}
            <Avatar className="relative w-20 h-20 md:w-24 md:h-24 rounded-[28%] ring-2 ring-primary/30 shadow-lg">
              <AvatarImage
                src="/images/avatar/profile.webp"
                alt={`${personalInfo.name} - AI Integration Specialist and Developer`}
                fetchPriority="high"
                className="object-cover"
              />
              <AvatarFallback className="text-xl font-bold bg-muted">
                {personalInfo.firstName.charAt(0)}
              </AvatarFallback>
            </Avatar>
          </motion.div>

          {/* Availability Badge */}
          <motion.div variants={itemVariants}>
            <AvailabilityBadge
              available={personalInfo.available}
              text={personalInfo.availability}
            />
          </motion.div>

          {/* Greeting */}
          <motion.h2 variants={itemVariants} className="text-lg md:text-xl font-medium mb-4 mt-3">
            Ciao, sono {personalInfo.firstName} 👋
          </motion.h2>

          {/* Main Headline */}
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] tracking-tight mb-6 px-4">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              {personalInfo.headline}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6 px-4">
            {personalInfo.title}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto px-4 sm:px-0">
            {/* Primary CTA */}
            <ButtonLink
              size="lg"
              href="https://cal.com/euxhenjonex/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group rounded-full px-8 py-4 text-sm font-medium uppercase tracking-wider transition-all hover:shadow-lg gap-2 justify-center"
            >
              <Calendar className="w-4 h-4" />
              <span>Prenota una call gratuita</span>
            </ButtonLink>

            {/* Secondary CTA */}
            <ButtonLink
              size="lg"
              variant="outline"
              href="/#projects"
              className="w-full sm:w-auto group rounded-full px-8 py-4 text-sm font-medium uppercase tracking-wider transition-all hover:bg-primary/5 gap-2 justify-center"
            >
              Guarda i progetti
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </ButtonLink>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
