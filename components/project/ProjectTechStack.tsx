"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import Container from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";

interface ProjectTechStackProps {
  project: {
    techStack?: string[];
  };
}

export default function ProjectTechStack({ project }: ProjectTechStackProps) {
  if (!project.techStack || project.techStack.length === 0) return null;

  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Code2 className="w-8 h-8" />
            <h2 className="text-3xl md:text-4xl font-bold">Tech Stack</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {project.techStack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-base py-2 px-4 border-2"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
