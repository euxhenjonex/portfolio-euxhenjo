"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useState, useRef } from "react";
import { testimonials } from "@/lib/data";
import Container from "../layout/Container";

// Varianti di animazione leggere
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }

    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section id="testimonials" className="section-padding bg-muted/30">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg mb-4">
              Cosa Dicono i Clienti
            </h2>
            <p className="body-lg">
              La fiducia di aziende e creator per risultati concreti
            </p>
          </motion.div>

          {/* Testimonials Grid - Desktop */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className="card-elevated h-full p-6">
                  <div className="space-y-4">
                    {/* Quote Icon */}
                    <Quote className="w-8 h-8 text-muted-foreground/40" />

                    {/* Testimonial Quote */}
                    <p className="text-base leading-relaxed">{`"${testimonial.quote}"`}</p>

                    {/* Author Info */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                      {/* Avatar with Initials */}
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-medium">
                          {testimonial.avatar}
                        </span>
                      </div>

                      {/* Name and Company */}
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role} @ {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonials Carousel - Mobile with Swipe */}
          <div className="md:hidden">
            <div
              ref={containerRef}
              className="relative overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <motion.div
                animate={{ x: `-${currentIndex * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="flex"
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
                    <div className="card-elevated h-full p-6">
                      <div className="space-y-4">
                        {/* Quote Icon */}
                        <Quote className="w-8 h-8 text-muted-foreground/40" />

                        {/* Testimonial Quote */}
                        <p className="text-base leading-relaxed">{`"${testimonial.quote}"`}</p>

                        {/* Author Info */}
                        <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                          {/* Avatar with Initials */}
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-sm font-medium">
                              {testimonial.avatar}
                            </span>
                          </div>

                          {/* Name and Company */}
                          <div>
                            <p className="font-medium">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.role} @ {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-foreground"
                      : "w-2 bg-foreground/20"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
