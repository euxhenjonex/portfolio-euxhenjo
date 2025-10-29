"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/data";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiSupabase,
  SiAnthropic,
  SiN8N,
  SiOpenai,
  SiGooglegemini,
  SiWordpress,
  SiShopify,
  SiWoo,
  SiVercel,
  SiDocker,
  SiGithub,
  SiStripe,
} from "react-icons/si";
import { Component, Code2, Database, FileCode } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Mapping icone (react-icons Simple Icons + lucide fallback)
const iconMap: Record<string, React.ElementType> = {
  nextjs: SiNextdotjs,
  react: SiReact,
  tailwind: SiTailwindcss,
  shadcn: Component, // Fallback lucide icon
  python: SiPython,
  supabase: SiSupabase,
  pinecone: Database, // Fallback lucide icon (Pinecone not in react-icons)
  anthropic: SiAnthropic,
  n8n: SiN8N,
  openai: SiOpenai,
  gemini: SiGooglegemini,
  wordpress: SiWordpress,
  shopify: SiShopify,
  woocommerce: SiWoo,
  vercel: SiVercel,
  docker: SiDocker,
  cursor: Code2, // Fallback lucide icon
  vscode: FileCode, // Fallback lucide icon (SiVisualstudiocode not working)
  github: SiGithub,
  stripe: SiStripe,
};

// Color mapping per icone (tutte bianche per consistenza)
const colorMap: Record<string, string> = {
  nextjs: "#FFFFFF",
  react: "#FFFFFF",
  tailwind: "#FFFFFF",
  shadcn: "#FFFFFF",
  python: "#FFFFFF",
  supabase: "#FFFFFF",
  pinecone: "#FFFFFF",
  anthropic: "#FFFFFF",
  n8n: "#FFFFFF",
  openai: "#FFFFFF",
  gemini: "#FFFFFF",
  wordpress: "#FFFFFF",
  shopify: "#FFFFFF",
  woocommerce: "#FFFFFF",
  vercel: "#FFFFFF",
  docker: "#FFFFFF",
  cursor: "#FFFFFF",
  vscode: "#FFFFFF",
  github: "#FFFFFF",
  stripe: "#FFFFFF",
};

export default function TechStackBento() {
  // Split stack in two rows
  const midPoint = Math.ceil(techStack.length / 2);
  const row1 = techStack.slice(0, midPoint);
  const row2 = techStack.slice(midPoint);

  return (
    <div className="relative mt-6 md:mt-8 w-full max-w-full overflow-hidden">
      <div className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-muted/5 via-background to-muted/5 border border-border">
        <div className="space-y-4 md:space-y-6">
          {/* Header */}
          <div className="flex items-center gap-2">
            <span className="text-lg md:text-xl">⚡</span>
            <h3 className="text-xs md:text-sm font-semibold text-foreground uppercase tracking-wider">
              Tech Stack
            </h3>
          </div>

          {/* Infinite Scroll Container */}
          <div className="space-y-3 md:space-y-4 -mx-4 md:-mx-6">
            <TooltipProvider delayDuration={200}>
              {/* Row 1: Scroll Left to Right */}
              <div className="relative overflow-hidden w-full">
                <motion.div
                  className="flex gap-4 md:gap-6"
                  animate={{
                    x: [0, -1000],
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {/* Duplicate for infinite scroll */}
                  {[...row1, ...row1, ...row1].map((tech, index) => {
                    const Icon = iconMap[tech.icon] || Component;
                    const color = colorMap[tech.icon] || "#FFFFFF";

                    return (
                      <Tooltip key={`row1-${tech.name}-${index}`}>
                        <TooltipTrigger asChild>
                          <div className="flex-shrink-0 group cursor-pointer">
                            <Icon
                              className="w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:scale-110"
                              style={{ color }}
                            />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs rounded-xl">
                          <p className="font-semibold">{tech.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
                </motion.div>
              </div>

              {/* Row 2: Scroll Right to Left */}
              <div className="relative overflow-hidden w-full">
                <motion.div
                  className="flex gap-4 md:gap-6"
                  animate={{
                    x: [-1000, 0],
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {/* Duplicate for infinite scroll */}
                  {[...row2, ...row2, ...row2].map((tech, index) => {
                    const Icon = iconMap[tech.icon] || Component;
                    const color = colorMap[tech.icon] || "#FFFFFF";

                    return (
                      <Tooltip key={`row2-${tech.name}-${index}`}>
                        <TooltipTrigger asChild>
                          <div className="flex-shrink-0 group cursor-pointer">
                            <Icon
                              className="w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:scale-110"
                              style={{ color }}
                            />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs rounded-xl">
                          <p className="font-semibold">{tech.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
                </motion.div>
              </div>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
