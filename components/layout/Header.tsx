"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X as CloseIcon, Linkedin, User, FolderOpen, Mail, Briefcase } from "lucide-react";

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
import { Button, ButtonLink } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { socialLinks, personalInfo } from "@/lib/data";
import Container from "./Container";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Chi Sono", href: "/#about", icon: User },
    { name: "Servizi", href: "/#services", icon: Briefcase },
    { name: "Progetti", href: "/#projects", icon: FolderOpen },
    { name: "Contatti", href: "/#contact", icon: Mail },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isMobileMenuOpen
          ? "bg-background/95 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      )}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <Container>
        <nav className="flex items-center justify-center h-16 md:h-20 relative">
          {/* Logo/Email - Left */}
          <Link
            href="/"
            className="absolute left-0 text-sm md:text-base font-semibold hover:opacity-70 transition-opacity"
          >
            {personalInfo.email}
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-full hover:bg-muted/50 transition-all duration-300"
                >
                  <Icon className="h-4 w-4 opacity-60" />
                  <span className="relative">
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Right Side - Social Links */}
          <TooltipProvider delayDuration={200}>
            <div className="hidden md:flex absolute right-0 items-center gap-2">
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
            </div>
          </TooltipProvider>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden absolute right-0 items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              className="min-h-[44px] min-w-[44px]"
            >
              {isMobileMenuOpen ? (
                <CloseIcon className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden py-4 border-t animate-fade-in bg-background backdrop-blur-xl">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 text-sm font-medium px-3 py-3 rounded-2xl hover:bg-muted/50 transition-all duration-300 min-h-[44px]"
                  >
                    <Icon className="h-4 w-4 opacity-60" />
                    {link.name}
                  </Link>
                );
              })}

              {/* Social Links - Mobile */}
              <div className="flex items-center gap-2 pt-4 border-t">
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
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
