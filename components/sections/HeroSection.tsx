"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import AvailabilityBadge from "@/components/ui/AvailabilityBadge";
import { personalInfo } from "@/lib/data";
import Container from "../layout/Container";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const avatarVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4">
      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-5xl mx-auto"
        >
          {/* Avatar */}
          <motion.div
            variants={avatarVariants}
            className="mb-4"
          >
            <Avatar className="w-20 h-20 md:w-24 md:h-24 shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_2px_12px_rgba(0,0,0,0.04)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_2px_16px_rgba(255,255,255,0.04)] ring-1 ring-border/30">
              <AvatarImage
                src="/images/avatar/profile.webp"
                alt={`${personalInfo.name} - AI Integration Specialist and Developer`}
              />
              <AvatarFallback>{personalInfo.firstName.charAt(0)}</AvatarFallback>
            </Avatar>
          </motion.div>

          {/* Availability Badge */}
          <AvailabilityBadge
            available={personalInfo.available}
            text={personalInfo.availability}
          />

          {/* Greeting */}
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl font-medium mb-6 mt-4"
          >
            Ciao, sono {personalInfo.firstName} 👋
          </motion.h2>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight mb-6 px-4"
          >
            {personalInfo.headline}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-foreground/70 dark:text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8 px-4"
          >
            {personalInfo.title}
          </motion.p>

          {/* CTA Buttons - Double */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary CTA */}
            <ButtonLink
              size="lg"
              href="https://cal.com/euxhenjonex/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 py-4 text-sm font-medium uppercase tracking-wider"
            >
              Prenota una call gratuita
            </ButtonLink>

            {/* Secondary CTA */}
            <ButtonLink
              size="lg"
              variant="outline"
              href="/#projects"
              className="rounded-full px-8 py-4 text-sm font-medium uppercase tracking-wider"
            >
              Guarda i progetti
            </ButtonLink>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
