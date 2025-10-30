"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, TrendingUp, Check } from "lucide-react";
import { process } from "@/lib/data";
import Container from "../layout/Container";

const iconMap = {
  search: Search,
  "pen-tool": PenTool,
  code: Code,
  "trending-up": TrendingUp,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ProcessSection() {
  return (
    <section id="processo" className="section-padding">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg mb-4">
              Come Lavoro
            </h2>
            <p className="body-lg">
              Un processo strutturato in 4 fasi per trasformare le tue idee in soluzioni AI funzionanti
            </p>
          </motion.div>

          {/* Process Steps Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {process.map((step) => {
              const Icon = iconMap[step.icon as keyof typeof iconMap];
              return (
                <motion.div key={step.id} variants={itemVariants}>
                  <div className="card-elevated h-full p-6">
                    <div className="flex items-start gap-4 mb-4">
                      {/* Step Number */}
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/15 ring-1 ring-primary/30 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">
                          {step.step}
                        </span>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="icon-base text-foreground" />
                          <h3 className="heading-sm">{step.title}</h3>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>

                      {/* Deliverables */}
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Deliverable:</p>
                        <ul className="space-y-1">
                          {step.deliverables.map((deliverable, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <Check className="icon-sm text-foreground flex-shrink-0 mt-0.5" />
                              <span>{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
