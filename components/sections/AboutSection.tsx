"use client";

import Image from "next/image";
import { useState } from "react";
import Container from "../layout/Container";
import ImageSkeleton from "@/components/ui/ImageSkeleton";

export default function AboutSection() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <Container>
        <div>
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Chi Sono</h2>
          </div>

          {/* Content: 2 Columns Layout */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            {/* Left: Professional Photo */}
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
              {/* Glow effect dietro la foto */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 blur-3xl rounded-2xl" />

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
            <div className="space-y-6">
              <div className="space-y-6">
                <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Sono <span className="text-foreground font-semibold">uno specialista in integrazione AI</span>: trasformo l'intelligenza artificiale in strumenti reali che semplificano il lavoro e generano valore misurabile.
                  </p>

                  <p>
                    Sviluppo agenti AI e GPT personalizzati, sistemi RAG con database vettoriali, chatbot su Telegram e WhatsApp, workflow automatizzati e esperienze web no-code pensate per scalare senza complessità.
                  </p>

                  <p>
                    Il mio approccio è pratico e orientato ai risultati: ogni progetto nasce da un obiettivo concreto e si traduce in <span className="text-foreground font-semibold">soluzioni facili da implementare, scalabili e subito efficaci</span>.
                    Niente tecnicismi inutili — solo <span className="text-foreground font-semibold">AI che funziona davvero</span>.
                  </p>
                </div>

                {/* Bento Card - Cosa sto studiando */}
                <div className="relative mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/5 via-background to-primary/5 border border-primary/10">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl blur-xl -z-10" />

                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                        Attualmente sto studiando
                      </h3>
                    </div>

                    <p className="text-base font-medium text-foreground">
                      Sviluppo di applicazioni LLM avanzate
                    </p>

                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">Concetti base e architetture LLM</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">Orchestrazione e prompt engineering</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">LangChain & LangGraph</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">LlamaIndex & RAG patterns</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
