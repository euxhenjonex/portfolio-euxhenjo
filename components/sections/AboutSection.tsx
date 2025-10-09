"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Chi Sono</h2>
          </div>

          {/* Content */}
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
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
        </motion.div>
      </Container>
    </section>
  );
}
