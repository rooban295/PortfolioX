"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TypewriterText from "@/components/animations/TypewriterText";
import FadeUp from "@/components/animations/FadeUp";
import { ArrowDown, Code, Briefcase, MessageSquare } from "lucide-react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const blobY1 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{ y: blobY1 }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div
          style={{ y: blobY2 }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-neon-blue/20 rounded-full blur-[100px] mix-blend-screen"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity, scale: contentScale }}
        className="z-10 text-center max-w-4xl px-4 flex flex-col items-center"
      >
        <FadeUp delay={0.2} className="mb-6">
          <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-gray-300 font-medium flex items-center gap-2">
            Available for new opportunities
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
          </div>
        </FadeUp>

        <TypewriterText
          text="Hi, I'm Thison Rooban"
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
          delay={0.4}
          speed={0.06}
        />

        <FadeUp delay={0.6}>
          <h2 className="text-xl md:text-3xl text-gray-400 font-light mb-8 max-w-2xl mx-auto">
            Frontend & Full Stack Developer building immersive digital experiences.
          </h2>
        </FadeUp>

        <FadeUp delay={0.8} className="flex gap-6 items-center">
          <a href="#projects" suppressHydrationWarning className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] cursor-none">
            View Projects
          </a>
          <a href="#contact" suppressHydrationWarning className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center gap-2 cursor-none">
            Contact Me
          </a>
        </FadeUp>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-12 flex flex-col gap-6 hidden md:flex z-20"
      >
        {[<Code key="gh" />, <Briefcase key="li" />, <MessageSquare key="tw" />].map((icon, i) => (
          <a
            key={i}
            href="#"
            className="text-gray-400 hover:text-white transition-colors hover:-translate-y-1 transform duration-300 cursor-none"
          >
            {icon}
          </a>
        ))}
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ opacity: contentOpacity }}
        className="absolute bottom-12 right-12 hidden md:flex flex-col items-center gap-2 z-20 text-gray-400"
      >
        <span className="text-sm tracking-widest" style={{ writingMode: "vertical-rl" }}>
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
