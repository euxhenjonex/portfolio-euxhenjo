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
    <section className="section-padding-sm bg-muted/30">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="heading-md mb-6">Panoramica</h2>
          <p className="body-lg">
            {project.overview}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
