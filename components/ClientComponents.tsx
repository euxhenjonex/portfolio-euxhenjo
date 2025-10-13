"use client";

import dynamic from "next/dynamic";

// Lazy load ChatWidget (non-critical, client-only)
export const ChatWidget = dynamic(() => import("@/components/ui/ChatWidget"), {
  ssr: false,
  loading: () => null,
});

// Lazy load SpeedInsights (analytics, non-critical)
export const SpeedInsights = dynamic(
  () => import("@vercel/speed-insights/next").then((mod) => mod.SpeedInsights),
  { ssr: false }
);
