"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/button";

interface ProjectCTAProps {
  project: {
    cta?: string;
  };
}

export default function ProjectCTA({ project }: ProjectCTAProps) {
  const ctaText = project.cta || "Vuoi lavorare insieme su un progetto come questo?";

  return (
    <section className="section-padding bg-muted/30">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <h2 className="heading-md">
            {ctaText}
          </h2>

          <p className="body-lg">
            Prenota una consulenza gratuita di 30 minuti per discutere delle esigenze del tuo progetto
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonLink
              size="lg"
              href="https://cal.com/euxhenjonex/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 gap-2"
            >
              <Calendar className="w-5 h-5" />
              Prenota Chiamata Gratuita
            </ButtonLink>

            <ButtonLink
              size="lg"
              variant="outline"
              href="/#projects"
              className="rounded-full px-8 gap-2"
            >
              Vedi Altri Progetti
              <ArrowRight className="w-5 h-5" />
            </ButtonLink>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
