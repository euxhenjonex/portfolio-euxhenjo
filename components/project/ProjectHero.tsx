"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Container from "@/components/layout/Container";

interface ProjectHeroProps {
  project: {
    id: string;
    title: string;
    tagline?: string;
    image: string;
    status: string;
    tags: string[];
    link?: string;
  };
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="section-padding">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Back Button */}
          <ButtonLink
            href="/#projects"
            variant="ghost"
            className="gap-2 -ml-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Torna ai Progetti
          </ButtonLink>

          {/* Title and Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="text-sm">
                {project.status}
              </Badge>
            </div>
            <h1 className="heading-xl">
              {project.title}
            </h1>
            {project.tagline && (
              <p className="body-lg">
                {project.tagline}
              </p>
            )}
          </div>

          {/* Hero Image */}
          <div className="relative w-full aspect-video bg-card rounded-2xl overflow-hidden ring-1 ring-border/50 shadow-lg">
            <Image
              src={project.image}
              alt={`${project.title} - Project mockup`}
              fill
              className="object-contain"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          {/* CTA Button for external projects */}
          {project.link && project.link !== "#" && project.id === "prompt-master" && (
            <div className="flex gap-3 pt-4">
              <ButtonLink
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="rounded-full gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Prova il GPT
              </ButtonLink>
            </div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
