"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[100] origin-left pointer-events-none"
      style={{ scaleX }}
    >
      <div className="h-full w-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue shadow-[0_0_12px_rgba(139,92,246,0.6)]" />
    </motion.div>
  );
}
