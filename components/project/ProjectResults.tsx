"use client";

import { motion } from "framer-motion";
import { TrendingUp, Check } from "lucide-react";
import Container from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectResultsProps {
  project: {
    results?: string[];
  };
}

export default function ProjectResults({ project }: ProjectResultsProps) {
  if (!project.results || project.results.length === 0) return null;

  return (
    <section className="section-padding-sm">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <TrendingUp className="w-8 h-8 text-green-500" />
            <h2 className="heading-md">Risultati e Impatto</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {project.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full hover:border-foreground/20 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-green-500/10 rounded-full flex-shrink-0">
                        <Check className="w-5 h-5 text-green-500" />
                      </div>
                      <p className="text-lg font-medium leading-relaxed">
                        {result}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
