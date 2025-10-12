"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ButtonLink } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import AvailabilityBadge from "@/components/ui/AvailabilityBadge";
import { Calendar, ArrowRight } from "lucide-react";
import { personalInfo } from "@/lib/data";
import Container from "../layout/Container";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
    },
  },
};

const avatarVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax effect per il contenuto
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Background Gradient Animato */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10 dark:from-primary/10 dark:via-background dark:to-primary/5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        />

        {/* Effetti Glow Floating */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          style={{ y, opacity }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-5xl mx-auto"
        >
          {/* Avatar con stile moderno iOS */}
          <motion.div
            variants={avatarVariants}
            className="mb-3 relative"
          >
            {/* Glow sottile */}
            <div className="absolute inset-0 bg-primary/20 dark:bg-primary/30 rounded-[28%] blur-xl" />

            {/* Avatar container con bordo arrotondato iOS-style */}
            <Avatar className="relative w-20 h-20 md:w-24 md:h-24 rounded-[28%] ring-2 ring-primary/20 dark:ring-primary/30 shadow-lg">
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
          <AvailabilityBadge
            available={personalInfo.available}
            text={personalInfo.availability}
          />

          {/* Greeting */}
          <motion.h2
            variants={itemVariants}
            className="text-lg md:text-xl font-medium mb-4 mt-3"
          >
            Ciao, sono {personalInfo.firstName} 👋
          </motion.h2>

          {/* Main Headline con gradient animato */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] tracking-tight mb-6 px-4"
          >
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground dark:from-foreground dark:via-primary dark:to-foreground bg-clip-text text-transparent animate-gradient" style={{ backgroundSize: "200% auto" }}>
              {personalInfo.headline}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-foreground/70 dark:text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6 px-4"
          >
            {personalInfo.title}
          </motion.p>

          {/* CTA Buttons con hover effects migliorati */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto px-4 sm:px-0"
          >
            {/* Primary CTA */}
            <ButtonLink
              size="lg"
              href="https://cal.com/euxhenjonex/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group rounded-full px-8 py-4 text-sm font-medium uppercase tracking-wider relative overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/20 gap-2 justify-center"
            >
              <Calendar className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Prenota una call gratuita</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </ButtonLink>

            {/* Secondary CTA */}
            <ButtonLink
              size="lg"
              variant="outline"
              href="/#projects"
              className="w-full sm:w-auto rounded-full px-8 py-4 text-sm font-medium uppercase tracking-wider transition-all hover:scale-105 hover:bg-primary/5 gap-2 justify-center"
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
