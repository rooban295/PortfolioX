"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/animations/FadeUp";
import SectionHeading from "@/components/animations/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { useMemo } from "react";
import { easeOutExpo } from "@/lib/motion";

const SKILLS = [
  { name: "React.js", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "TypeScript", level: 85 },
  { name: "JavaScript", level: 95 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Spring Boot", level: 75 },
  { name: "MySQL", level: 80 },
  { name: "GitHub", level: 85 },
];

export default function Skills() {
  const marqueeSkills = useMemo(() => [...SKILLS, ...SKILLS, ...SKILLS], []);

  return (
    <section className="relative min-h-screen w-full py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <SectionHeading
          title="Technical Arsenal"
          subtitle="A comprehensive overview of my technical expertise and the tools I use to build robust digital solutions."
        />

        <div className="relative w-full flex overflow-x-hidden mb-24 -mx-4 px-4 mask-edges">
          <motion.div
            className="flex gap-8 whitespace-nowrap py-4"
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          >
            {marqueeSkills.map((skill, i) => (
              <GlassCard key={i} className="px-8 py-4 flex items-center justify-center min-w-[200px]">
                <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                  {skill.name}
                </span>
              </GlassCard>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {SKILLS.map((skill, i) => (
            <FadeUp key={i} delay={0.08 * (i % 4)} className="w-full">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-gray-500">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 1.2, delay: 0.15 + i * 0.06, ease: easeOutExpo }}
                />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
