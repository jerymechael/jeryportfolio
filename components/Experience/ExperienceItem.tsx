"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ExperienceEntry } from "@/lib/types";

interface ExperienceItemProps {
  entry: ExperienceEntry;
  index: number;
}

export default function ExperienceItem({ entry, index }: ExperienceItemProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.6,
  });

  const scale = useTransform(smoothProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(smoothProgress, [0, 0.85, 1], [1, 1, 0.4]);
  const y = useTransform(smoothProgress, [0, 1], [0, -24]);
  const blur = useTransform(smoothProgress, [0, 1], [0, 4]);
  const filter = useTransform(blur, (v) => `blur(${v}px)`);

  return (
    <div
      ref={wrapperRef}
      className="mb-6 md:mb-0 md:min-h-[65vh] static md:sticky"
      style={{ top: `${88 + index * 16}px`, zIndex: index + 1 }}
    >
      <motion.article
        style={{ scale, opacity, y, filter }}
        className="grid grid-cols-1 md:grid-cols-[140px_1fr_1.3fr] gap-6 md:gap-10 rounded-3xl border border-border bg-white p-7 sm:p-9 shadow-lift will-change-transform"
      >
        <div className="text-sm font-medium text-foreground whitespace-nowrap">
  {entry.period}
</div>
        <div>
       <h3 className="font-display font-semibold text-lg sm:text-xl leading-snug tracking-tight text-foreground text-balance">
  {entry.title}
</h3>
          <p className="mt-1 font-serif italic text-muted">at {entry.company}</p>
        </div>

        <div>
          <p className="leading-relaxed text-muted text-justify">{entry.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase text-muted-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </div>
  );
}