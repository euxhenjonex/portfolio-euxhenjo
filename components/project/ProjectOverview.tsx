"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";

interface ProjectOverviewProps {
  project: {
    overview?: string;
  };
}

export default function ProjectOverview({ project }: ProjectOverviewProps) {
  if (!project.overview) return null;

  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Panoramica</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.overview}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
