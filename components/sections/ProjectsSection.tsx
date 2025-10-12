"use client";

import { ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { projects } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ImageSkeleton from "@/components/ui/ImageSkeleton";
import Container from "../layout/Container";

export default function ProjectsSection() {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const handleImageLoad = (projectId: string) => {
    setLoadedImages((prev) => ({ ...prev, [projectId]: true }));
  };

  return (
    <section id="projects" className="py-20 md:py-32">
      <Container>
        <div className="space-y-12">
          {/* Section Title */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Progetti in Evidenza
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Una selezione di progetti che mostrano le mie competenze
            </p>
          </div>

          {/* Featured Project */}
          {featuredProject && (
            <Card className="overflow-hidden border-2 hover:border-foreground/20 transition-colors">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative w-full pt-[56.25%] bg-black border-b md:border-b-0 md:border-r">
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
                <div className="p-6 md:p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="outline">{featuredProject.status}</Badge>
                      <Badge variant="secondary">In Evidenza</Badge>
                    </div>
                    <CardTitle className="text-xl md:text-2xl">
                      {featuredProject.title}
                    </CardTitle>
                    <CardDescription className="text-sm md:text-base leading-relaxed">
                      {featuredProject.description}
                    </CardDescription>
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
            </Card>
          )}

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <div key={project.id} className="transition-transform hover:-translate-y-1">
                <Card className="h-full flex flex-col hover:border-foreground/20 transition-colors overflow-hidden">
                  {/* Project Image */}
                  <div className="relative w-full pt-[56.25%] bg-black">
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

                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        {project.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl md:text-2xl">{project.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1 pt-0">
                    <CardDescription className="mb-4 text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="pt-4">
                    <ButtonLink
                      size="sm"
                      className="w-full gap-2 rounded-full justify-center"
                      href={`/projects/${project.id}`}
                    >
                      Vedi Progetto
                      <ArrowRight className="w-4 h-4" />
                    </ButtonLink>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
