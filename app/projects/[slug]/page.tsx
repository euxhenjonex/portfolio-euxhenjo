import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectOverview from "@/components/project/ProjectOverview";
import ProjectChallenge from "@/components/project/ProjectChallenge";
import ProjectTechStack from "@/components/project/ProjectTechStack";
import ProjectResults from "@/components/project/ProjectResults";
import ProjectCTA from "@/components/project/ProjectCTA";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project || !project.seo) {
    return {
      title: "Progetto Non Trovato",
    };
  }

  return {
    title: project.seo.metaTitle,
    description: project.seo.metaDescription,
    openGraph: {
      title: project.seo.metaTitle,
      description: project.seo.metaDescription,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <ProjectHero project={project} />
      <ProjectOverview project={project} />
      <ProjectChallenge project={project} />
      <ProjectTechStack project={project} />
      <ProjectResults project={project} />
      <ProjectCTA project={project} />
    </div>
  );
}
