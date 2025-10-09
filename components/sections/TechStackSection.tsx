"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Container from "../layout/Container";

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="py-20 md:py-32">
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
              Strumenti e Tecnologie
            </h2>
            <p className="text-lg text-muted-foreground">
              Lo stack moderno che utilizzo per costruire soluzioni AI
            </p>
          </div>

          {/* Tech Stack Grid */}
          <TooltipProvider delayDuration={200}>
            <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge
                        variant="outline"
                        className="text-sm px-4 py-2 hover:bg-muted transition-colors cursor-help"
                      >
                        {tech.name}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p>{tech.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </motion.div>
              ))}
            </div>
          </TooltipProvider>
        </motion.div>
      </Container>
    </section>
  );
}
