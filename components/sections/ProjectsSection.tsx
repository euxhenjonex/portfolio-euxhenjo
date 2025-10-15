"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { projects } from "@/lib/data";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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

export default function ProjectsSection() {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const handleImageLoad = (projectId: string) => {
    setLoadedImages((prev) => ({ ...prev, [projectId]: true }));
  };

  return (
    <section id="projects" className="section-padding">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="heading-lg mb-4">
              Progetti in Evidenza
            </h2>
            <p className="body-lg max-w-2xl mx-auto">
              Una selezione di progetti che mostrano le mie competenze
            </p>
          </motion.div>

          {/* Featured Project */}
          {featuredProject && (
            <motion.div
              variants={fadeInUp}
              className="card-elevated relative"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative w-full pt-[56.25%] overflow-hidden rounded-t-2xl md:rounded-t-none md:rounded-l-2xl">
                  {/* Gradient overlay soft */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/5 to-primary/5 z-10" />

                  {!loadedImages[featuredProject.id] && <ImageSkeleton />}
                  <Image
                    src={featuredProject.image}
                    alt={`${featuredProject.title} - Project mockup showing ${featuredProject.description.slice(0, 80)}`}
                    fill
                    className="absolute top-0 left-0 w-full h-full object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    onLoad={() => handleImageLoad(featuredProject.id)}
                    priority
                  />
                </div>

                {/* Project Content */}
                <div className="p-6 md:p-8 flex flex-col justify-between rounded-b-2xl md:rounded-bl-none md:rounded-r-2xl">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="outline">{featuredProject.status}</Badge>
                      <Badge variant="secondary">In Evidenza</Badge>
                    </div>
                    <h3 className="heading-sm">
                      {featuredProject.title}
                    </h3>
                    <p className="body-base">
                      {featuredProject.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <ButtonLink
                      href={`/projects/${featuredProject.id}`}
                      className="rounded-full gap-2 flex-1 justify-center"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Vedi Progetto
                    </ButtonLink>
                    {featuredProject.link && featuredProject.link !== "#" && (
                      <ButtonLink
                        href={featuredProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outline"
                        className="rounded-full gap-2 flex-1 justify-center"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Prova il GPT
                      </ButtonLink>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="group relative"
              >
                <div className="card-elevated relative h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative w-full pt-[56.25%] overflow-hidden rounded-t-2xl">
                    {/* Gradient overlay soft */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/5 to-primary/5 z-10" />

                    {!loadedImages[project.id] && <ImageSkeleton />}
                    <Image
                      src={project.image}
                      alt={`${project.title} - ${project.description.slice(0, 100)}`}
                      fill
                      className="absolute top-0 left-0 w-full h-full object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      onLoad={() => handleImageLoad(project.id)}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        {project.status}
                      </Badge>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3">{project.title}</h3>

                    <p className="mb-4 text-sm text-muted-foreground leading-relaxed flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <ButtonLink
                      size="sm"
                      className="w-full gap-2 rounded-full justify-center"
                      href={`/projects/${project.id}`}
                    >
                      Vedi Progetto
                      <ArrowRight className="w-4 h-4" />
                    </ButtonLink>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
