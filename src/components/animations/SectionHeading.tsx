"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { revealTransition } from "@/lib/motion";

const headingViewport = { once: true, amount: 0.2, margin: "0px 0px -60px 0px" } as const;

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
  titleClassName,
}: {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
  titleClassName?: string;
}) {
  const slideX = align === "left" ? -40 : 0;

  return (
    <div
      className={cn(
        "mb-16",
        align === "center" && "text-center flex flex-col items-center",
        className
      )}
    >
      <motion.h2
        initial={{ opacity: 0, x: slideX, y: 28 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={headingViewport}
        transition={revealTransition}
        className={cn(
          "text-4xl md:text-5xl font-bold mb-4",
          titleClassName
        )}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={headingViewport}
          transition={{ ...revealTransition, delay: 0.1 }}
          className={cn(
            "text-gray-400 text-lg",
            align === "center" ? "max-w-2xl" : "max-w-xl"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
