"use client";

import Image from "next/image";
import { useState } from "react";
import Container from "../layout/Container";
import ImageSkeleton from "@/components/ui/ImageSkeleton";
import TechStackBento from "@/components/ui/TechStackBento";

export default function AboutSection() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="about" className="section-padding bg-muted/30 overflow-hidden">
      <Container>
        <div className="animate-fade-in">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Chi Sono</h2>
          </div>

          {/* Content: 2 Columns Layout */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start max-w-6xl mx-auto">
            {/* Left: Professional Photo */}
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
              {/* Photo container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden ring-1 ring-border/50 shadow-2xl">
                {!imageLoaded && <ImageSkeleton />}
                <Image
                  src="/images/about/professional-photo.webp"
                  alt="Euxhenjo Nexhipi - AI Integration Specialist"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onLoad={() => setImageLoaded(true)}
                  priority
                />
              </div>
            </div>

            {/* Right: Bio Text */}
            <div className="space-y-6 w-full min-w-0">
              <div className="space-y-6">
                <div className="space-y-6 body-base">
                  <p>
                    Sono un <span className="text-foreground font-semibold">AI Solution Specialist</span>: trasformo l&apos;intelligenza artificiale in strumenti reali che semplificano il lavoro e generano valore misurabile.
                  </p>

                  <p>
                    Sviluppo agenti AI e GPT personalizzati, sistemi RAG con database vettoriali, chatbot su Telegram e WhatsApp, workflow automatizzati e esperienze web no-code pensate per scalare senza complessità.
                  </p>

                  <p>
                    Il mio approccio è pratico e orientato ai risultati: ogni progetto nasce da un obiettivo concreto e si traduce in <span className="text-foreground font-semibold">soluzioni facili da implementare, scalabili e subito efficaci</span>.
                    Niente tecnicismi inutili — solo <span className="text-foreground font-semibold">AI che funziona davvero</span>.
                  </p>
                </div>

                {/* Bento Card - Tech Stack */}
                <TechStackBento />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
