"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb } from "lucide-react";
import Container from "@/components/layout/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectChallengeProps {
  project: {
    challenge?: string;
    solution?: string;
  };
}

export default function ProjectChallenge({ project }: ProjectChallengeProps) {
  if (!project.challenge && !project.solution) return null;

  return (
    <section className="py-12 md:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Sfida e Soluzione
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Challenge */}
            {project.challenge && (
              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-red-500/10 rounded-full">
                      <Target className="w-6 h-6 text-red-500" />
                    </div>
                    <CardTitle className="text-2xl">La Sfida</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.challenge}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Solution */}
            {project.solution && (
              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-green-500/10 rounded-full">
                      <Lightbulb className="w-6 h-6 text-green-500" />
                    </div>
                    <CardTitle className="text-2xl">La Soluzione</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
