"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  eyebrowStyle?: "dot" | "lines";
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  eyebrowStyle = "dot",
  className,
}: SectionTitleProps) {
  return (
    <motion.div
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && eyebrowStyle === "lines" && (
        <motion.div variants={fadeInUp} className="flex items-center gap-3">
          <span className="h-px w-8 bg-blue-400" />
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-blue-600">
            {eyebrow}
          </span>
          <span className="h-px w-8 bg-blue-400" />
        </motion.div>
      )}
      {eyebrow && eyebrowStyle === "dot" && (
        <motion.span variants={fadeInUp} className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-lavender-500" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeInUp}
        className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-balance max-w-2xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeInUp}
          className="text-muted text-base sm:text-lg max-w-xl leading-relaxed text-justify"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}