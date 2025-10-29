"use client"

import dynamic from "next/dynamic"

// Carica Aurora dinamicamente solo lato client
const Aurora = dynamic(() => import("@/components/ui/Aurora"), {
  ssr: false,
})

interface AuroraBackgroundProps {
  colorStops?: string[]
  amplitude?: number
  blend?: number
  speed?: number
}

export default function AuroraBackground({ 
  colorStops = ["#475569", "#64748b", "#475569"],
  amplitude = 1.2,
  blend = 0.6,
  speed = 0.8
}: AuroraBackgroundProps) {
  return (
    <div className="fixed inset-0 z-0 opacity-50">
      <Aurora 
        colorStops={colorStops} 
        amplitude={amplitude} 
        blend={blend}
        speed={speed}
      />
    </div>
  )
}
