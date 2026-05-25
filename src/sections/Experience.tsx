"use client";

import SectionHeading from "@/components/animations/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { easeOutExpo } from "@/lib/motion";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const experiences = [
    {
      role: "Analyst Trainee",
      company: "Cognizant Technology Solutions",
      duration: "2025 - Present",
      desc: "Led the development of a microservices-based enterprise platform, improving system scalability by 40%.",
    },
    {
      role: "Frontend Developer",
      company: "Creative Digital",
      duration: "2019 - 2021",
      desc: "Architected modern React web applications with GSAP animations, increasing user engagement by 25%.",
    },
    {
      role: "Web Developer Intern",
      company: "Startup Hub",
      duration: "2018 - 2019",
      desc: "Assisted in building responsive landing pages and maintaining legacy PHP backend systems.",
    },
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen w-full py-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto w-full relative">
        <SectionHeading title="Experience Timeline" align="left" className="mb-16" />

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div
              className="w-full bg-gradient-to-b from-neon-blue to-neon-purple origin-top"
              style={{ scaleY }}
            />
          </div>

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${isEven ? "md:flex-row" : ""}`}
                >
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-black border-2 border-neon-purple -translate-x-1/2 z-10 group-hover:bg-neon-purple group-hover:scale-150 transition-all duration-300" />

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isEven ? -72 : 72,
                      scale: 0.92,
                      filter: "blur(10px)",
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                      filter: "blur(0px)",
                    }}
                    viewport={{ once: true, margin: "-60px", amount: 0.35 }}
                    transition={{ duration: 0.85, delay: i * 0.1, ease: easeOutExpo }}
                    className="w-full md:w-5/12 pl-12 md:pl-0"
                  >
                    <GlassCard className="p-6">
                      <span className="text-neon-blue text-sm font-bold tracking-wider mb-2 block">{exp.duration}</span>
                      <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                      <p className="text-gray-300 font-medium mb-4">{exp.company}</p>
                      <p className="text-gray-400 text-sm">{exp.desc}</p>
                    </GlassCard>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
