"use client";

import FadeUp from "@/components/animations/FadeUp";
import Parallax from "@/components/animations/Parallax";
import GlassCard from "@/components/ui/GlassCard";
import { Code, Layers, Server, Terminal } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Delivered", value: "50+" },
    { label: "Happy Clients", value: "30+" },
    { label: "Code Commits", value: "10k+" },
  ];

  return (
    <section className="relative min-h-screen w-full py-24 px-4 flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Image / Profile */}
        <Parallax speed={0.35} className="relative">
          <FadeUp>
            <GlassCard className="p-8 aspect-square flex flex-col justify-between">
              <div className="w-full h-full bg-white/5 rounded-xl border border-white/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/20 to-neon-purple/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Generic placeholder for profile */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Terminal size={120} className="text-white/20 group-hover:text-white/40 transition-colors duration-500" />
                </div>
              </div>
              <div className="mt-8 flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-bold">Thison Roban</h3>
                  <p className="text-neon-blue">Full Stack Developer</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
                  <Code size={20} className="text-neon-purple" />
                </div>
              </div>
            </GlassCard>
          </FadeUp>

          {/* Floating cards */}
          <FadeUp delay={0.3} className="absolute -right-8 top-12 hidden md:block">
            <GlassCard className="p-4 flex items-center gap-4">
              <div className="bg-neon-blue/20 p-3 rounded-full">
                <Server size={24} className="text-neon-blue" />
              </div>
              <div>
                <p className="font-bold">Backend</p>
                <p className="text-xs text-gray-400">Node.js & Spring</p>
              </div>
            </GlassCard>
          </FadeUp>
          
          <FadeUp delay={0.5} className="absolute -left-8 bottom-24 hidden md:block">
            <GlassCard className="p-4 flex items-center gap-4">
              <div className="bg-neon-purple/20 p-3 rounded-full">
                <Layers size={24} className="text-neon-purple" />
              </div>
              <div>
                <p className="font-bold">Frontend</p>
                <p className="text-xs text-gray-400">React & Next.js</p>
              </div>
            </GlassCard>
          </FadeUp>
        </Parallax>

        {/* Right Column: Text & Stats */}
        <div className="flex flex-col gap-8">
          <FadeUp direction="left">
            <h2 className="text-4xl md:text-5xl font-bold">
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">digital experiences</span> with precision.
            </h2>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <p className="text-gray-400 text-lg leading-relaxed">
              I am a passionate software engineer specializing in building high-performance web applications. With a strong foundation in modern JavaScript frameworks and robust backend architectures, I bridge the gap between aesthetic design and scalable engineering.
            </p>
          </FadeUp>
          
          <FadeUp delay={0.4}>
            <p className="text-gray-400 text-lg leading-relaxed">
              My approach focuses on clean code, seamless user interactions, and performance optimization. Whether it&apos;s crafting intricate GSAP animations or architecting complex databases, I bring ideas to life on the web.
            </p>
          </FadeUp>

          {/* Counters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {stats.map((stat, i) => (
              <FadeUp key={i} delay={0.6 + i * 0.1}>
                <div className="flex flex-col gap-2">
                  <span className="text-4xl font-bold text-white">{stat.value}</span>
                  <span className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
