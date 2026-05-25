"use client";

import SectionHeading from "@/components/animations/SectionHeading";
import { StaggerReveal, StaggerItem } from "@/components/animations/StaggerReveal";
import GlassCard from "@/components/ui/GlassCard";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Product Manager at TechFlow",
      text: "Thison delivered an exceptional product ahead of schedule. The code quality and attention to detail, particularly with the animations, is world-class.",
    },
    {
      name: "Michael Chen",
      role: "CTO at StartupX",
      text: "Working with Thison was a breeze. They have a deep understanding of UX engineering and made our complex dashboard feel incredibly intuitive.",
    },
    {
      name: "Emily Rodriguez",
      role: "Design Lead at Creative Co",
      text: "A rare developer who truly understands design. The portfolio they built for us exceeded all expectations and won industry recognition.",
    },
  ];

  return (
    <section className="relative min-h-screen w-full pt-32 md:pt-40 pb-24 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <SectionHeading
          title="Client Testimonials"
          subtitle="What collaborators say about working together."
        />

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <GlassCard className="p-8 h-full flex flex-col">
                <Quote className="text-neon-purple mb-4 opacity-50" size={32} />
                <p className="text-gray-300 italic flex-grow mb-6">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
