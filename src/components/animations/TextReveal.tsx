"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { easeOutExpo } from "@/lib/motion";

export default function TextReveal({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4, margin: "0px 0px -80px 0px" });
  const words = text.split(" ");

  return (
    <div ref={ref} className={className}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden align-bottom mr-[0.25em]">
          <motion.span
            initial={false}
            animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 1 }}
            transition={{
              duration: 0.75,
              delay: index * 0.05,
              ease: easeOutExpo,
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  );
}
