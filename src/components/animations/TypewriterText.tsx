"use client";

import { motion } from "framer-motion";

export default function TypewriterText({
  text,
  className,
  delay = 0,
  speed = 0.05,
}: {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}) {
  const characters = text.split("");

  return (
    <div className={className}>
      <span className="inline">
        {characters.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0,
              delay: delay + index * speed,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
        {/* Blinking cursor — inline, right after the last character */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay + characters.length * speed,
          }}
          className="text-neon-purple"
        >
          |
        </motion.span>
      </span>
    </div>
  );
}
