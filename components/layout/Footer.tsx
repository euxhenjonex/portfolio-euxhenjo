"use client";

import { Linkedin, Mail } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { socialLinks, personalInfo } from "@/lib/data";
import { toast } from "sonner";
import Container from "./Container";

// X (Twitter) Icon Component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      toast.success("Email copiata negli appunti!", {
        description: personalInfo.email,
      });
    } catch {
      toast.error("Impossibile copiare l&apos;email", {
        description: "Riprova di nuovo",
      });
    }
  };

  return (
    <footer className="border-t">
      <Container>
        <div className="flex flex-col items-center justify-center gap-8 py-12">
          {/* Social Links */}
          <TooltipProvider delayDuration={200}>
            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <ButtonLink
                    variant="ghost"
                    size="icon"
                    className="hover:bg-muted/50 transition-all duration-300 rounded-full min-h-[44px] min-w-[44px]"
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </ButtonLink>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Connettiti su LinkedIn</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <ButtonLink
                    variant="ghost"
                    size="icon"
                    className="hover:bg-muted/50 transition-all duration-300 rounded-full min-h-[44px] min-w-[44px]"
                    href={socialLinks.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (Twitter)"
                  >
                    <XIcon className="h-5 w-5" />
                  </ButtonLink>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Seguimi su X</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-muted/50 transition-all duration-300 rounded-full min-h-[44px] min-w-[44px]"
                    onClick={handleEmailClick}
                    aria-label="Copy email to clipboard"
                  >
                    <Mail className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copia email</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>

          {/* Creative Tagline */}
          <p className="text-sm text-muted-foreground text-center">
            Costruito con strumenti AI no-code e tanto caffè ☕
          </p>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-border" />

          {/* Copyright */}
          <p className="text-xs text-muted-foreground text-center">
            © {currentYear} {personalInfo.name} · Tutti i diritti riservati
          </p>
        </div>
      </Container>
    </footer>
  );
}
