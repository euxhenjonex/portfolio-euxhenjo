"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { services } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import ImageSkeleton from "@/components/ui/ImageSkeleton";
import Container from "../layout/Container";

export default function ServicesSection() {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (serviceId: string) => {
    setLoadedImages((prev) => ({ ...prev, [serviceId]: true }));
  };
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Section Title */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Come Posso Aiutarti
            </h2>
            <p className="text-lg text-muted-foreground">
              Trasforma il tuo business con soluzioni AI che fanno risparmiare tempo, riducono i costi e sbloccano nuove possibilità.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:border-foreground/20 transition-colors overflow-hidden">
                    {/* Service Image */}
                    <div className="relative h-64 bg-black">
                      {!loadedImages[service.id] && <ImageSkeleton />}
                      <Image
                        src={service.image}
                        alt={`${service.title} - Mockup showcasing ${service.examples[0]}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        onLoad={() => handleImageLoad(service.id)}
                      />
                    </div>

                    <CardHeader>
                      <CardTitle className="text-2xl">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-base leading-relaxed">
                        {service.description}
                      </CardDescription>

                      <div>
                        <p className="text-sm font-medium mb-2">Esempi:</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {service.examples.map((example, i) => (
                            <li key={i}>• {example}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {service.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
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
              Pronto a integrare l'AI nel tuo workflow?
            </p>
            <ButtonLink
              size="lg"
              href="https://cal.com/euxhenjonex/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 py-6 text-sm font-medium uppercase tracking-wider"
            >
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
