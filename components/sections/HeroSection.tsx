"use client";

import { ButtonLink } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import AvailabilityBadge from "@/components/ui/AvailabilityBadge";
import { Calendar, ArrowRight } from "lucide-react";
import { personalInfo } from "@/lib/data";
import Container from "../layout/Container";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Background Gradient Statico */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10 dark:from-primary/10 dark:via-background dark:to-primary/5" />
        
        {/* Effetti Glow Statici */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto animate-in fade-in duration-700">
          {/* Avatar con stile moderno iOS */}
          <div className="mb-3 relative">
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
          </div>

          {/* Availability Badge */}
          <AvailabilityBadge
            available={personalInfo.available}
            text={personalInfo.availability}
          />

          {/* Greeting */}
          <h2 className="text-lg md:text-xl font-medium mb-4 mt-3">
            Ciao, sono {personalInfo.firstName} 👋
          </h2>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] tracking-tight mb-6 px-4">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              {personalInfo.headline}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-foreground/70 dark:text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6 px-4">
            {personalInfo.title}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto px-4 sm:px-0">
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
          </div>
        </div>
      </Container>
    </section>
  );
}
