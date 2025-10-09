"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface AvailabilityBadgeProps {
  available?: boolean;
  text?: string;
}

export default function AvailabilityBadge({
  available = true,
  text = "Disponibile per nuovi progetti",
}: AvailabilityBadgeProps) {
  if (!available) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="inline-flex items-center"
    >
      <Badge
        variant="secondary"
        className="gap-2 px-3 py-1.5 text-xs font-medium bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20 hover:bg-green-500/20"
      >
        {/* Animated Pulse Dot */}
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        {text}
      </Badge>
    </motion.div>
  );
}
