"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Calendar } from "lucide-react";
import { services } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import ImageSkeleton from "@/components/ui/ImageSkeleton";
import Container from "../layout/Container";

// Varianti di animazione leggere
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ServicesSection() {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (serviceId: string) => {
    setLoadedImages((prev) => ({ ...prev, [serviceId]: true }));
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Come Posso Aiutarti
            </h2>
            <p className="text-lg text-muted-foreground">
              Trasforma il tuo business con soluzioni AI che fanno risparmiare tempo, riducono i costi e sbloccano nuove possibilità.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              return (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  {/* Card Container */}
                  <div className="relative h-full rounded-2xl overflow-hidden ring-1 ring-border/50 bg-card shadow-lg hover:shadow-xl transition-all duration-300">
                    {/* Service Image with Gradient Overlay */}
                    <div className="relative h-48 overflow-hidden">
                      {/* Gradient overlay soft */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/5 to-primary/5 z-10" />

                      {!loadedImages[service.id] && <ImageSkeleton />}
                      <Image
                        src={service.image}
                        alt={`${service.title} - Mockup showcasing ${service.examples[0]}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        onLoad={() => handleImageLoad(service.id)}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      {/* Title */}
                      <h3 className="text-2xl font-bold">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {service.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {service.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{service.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center pt-8"
          >
            <p className="text-lg text-muted-foreground mb-6">
              Pronto a integrare l&apos;AI nel tuo workflow?
            </p>
            <ButtonLink
              size="lg"
              href="https://cal.com/euxhenjonex/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 py-6 text-sm font-medium uppercase tracking-wider gap-2"
            >
              <Calendar className="w-4 h-4" />
              Prenota una call gratuita
            </ButtonLink>
            <p className="text-sm text-muted-foreground/70 mt-4">
              Nessun impegno, solo idee pratiche per il tuo business.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
