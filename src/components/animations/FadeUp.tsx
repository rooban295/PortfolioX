"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { revealTransition, viewportReveal } from "@/lib/motion";

export default function FadeUp({
  children,
  className,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}) {
  const offset = {
    up: { x: 0, y: 56 },
    left: { x: -56, y: 0 },
    right: { x: 56, y: 0 },
  }[direction];

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
        scale: 0.94,
        filter: "blur(12px)",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={viewportReveal}
      transition={{ ...revealTransition, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
