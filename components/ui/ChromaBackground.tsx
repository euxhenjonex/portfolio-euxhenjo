"use client";

import { useEffect, useRef } from "react";

interface ChromaBackgroundProps {
  className?: string;
}

export default function ChromaBackground({ className = "" }: ChromaBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    const drawChromaBackground = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      // Clear canvas
      ctx.clearRect(0, 0, w, h);

      // Create multiple radial gradients that move
      const gradients = [
        {
          x: w * 0.3 + Math.sin(time * 0.0008) * 100,
          y: h * 0.3 + Math.cos(time * 0.0006) * 80,
          radius: 300,
          color1: "rgba(168, 85, 247, 0.15)", // purple
          color2: "rgba(168, 85, 247, 0)",
        },
        {
          x: w * 0.7 + Math.cos(time * 0.0007) * 120,
          y: h * 0.6 + Math.sin(time * 0.0009) * 90,
          radius: 350,
          color1: "rgba(59, 130, 246, 0.12)", // blue
          color2: "rgba(59, 130, 246, 0)",
        },
        {
          x: w * 0.5 + Math.sin(time * 0.0005) * 60,
          y: h * 0.5 + Math.cos(time * 0.001) * 70,
          radius: 250,
          color1: "rgba(139, 92, 246, 0.1)", // violet
          color2: "rgba(139, 92, 246, 0)",
        },
      ];

      gradients.forEach(({ x, y, radius, color1, color2 }) => {
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, color1);
        gradient.addColorStop(1, color2);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
      });

      time++;
      animationFrameId = requestAnimationFrame(drawChromaBackground);
    };

    drawChromaBackground();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ mixBlendMode: "screen" }}
    />
  );
}
