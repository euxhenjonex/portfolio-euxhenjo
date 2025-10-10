"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ButtonLink } from "./button";

export default function MobileStickyBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 50vh and not dismissed
      const shouldShow = window.scrollY > window.innerHeight * 0.5 && !isDismissed;
      setIsVisible(shouldShow);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
        >
          <div className="bg-background/95 backdrop-blur-md border-t border-border shadow-lg">
            <div className="flex items-center justify-between p-4 gap-3">
              <div className="flex-1">
                <p className="text-sm font-medium">
                  Vuoi integrare l'AI nel tuo business?
                </p>
                <p className="text-xs text-muted-foreground">
                  Solo 3 slot disponibili questo mese
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <ButtonLink
                  size="sm"
                  href="https://cal.com/euxhenjonex/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-4 py-2 text-xs font-medium whitespace-nowrap"
                >
                  Prenota una call gratuita
                </ButtonLink>
                
                <button
                  onClick={handleDismiss}
                  className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Chiudi"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}