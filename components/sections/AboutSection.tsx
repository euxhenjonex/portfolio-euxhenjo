"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Container from "../layout/Container";
import ImageSkeleton from "@/components/ui/ImageSkeleton";

// Varianti di animazione leggere
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function AboutSection() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="about" className="section-padding bg-muted/30">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Title */}
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="heading-lg mb-4">Chi Sono</h2>
          </motion.div>

          {/* Content: 2 Columns Layout */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            {/* Left: Professional Photo */}
            <motion.div
              variants={fadeInUp}
              className="relative w-full aspect-[3/4] max-w-md mx-auto"
            >
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
            </motion.div>

            {/* Right: Bio Text */}
            <motion.div variants={fadeInUp} className="space-y-6">
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

                {/* Bento Card - Cosa sto studiando */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative mt-8 p-6 rounded-2xl bg-gradient-to-br from-accent-primary/5 via-background to-accent-primary/5 border border-accent-primary/10"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
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
                          <span className="text-accent-primary mt-1">•</span>
                          <span className="text-muted-foreground">Concetti base e architetture LLM</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-accent-primary mt-1">•</span>
                          <span className="text-muted-foreground">Orchestrazione e prompt engineering</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="text-accent-primary mt-1">•</span>
                          <span className="text-muted-foreground">LangChain & LangGraph</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-accent-primary mt-1">•</span>
                          <span className="text-muted-foreground">LlamaIndex & RAG patterns</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
