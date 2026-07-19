"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { EducationEntry } from "@/lib/types";
import { fadeInUp, viewportOnce } from "@/lib/motion";

interface EducationCardProps {
  entry: EducationEntry;
  index: number;
}

export default function EducationCard({ entry, index }: EducationCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="flex flex-col gap-4 rounded-3xl border border-border bg-white p-7 shadow-soft hover:shadow-card transition-shadow"
    >
      <div className="flex items-center justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-lavender-50 text-lavender-600">
          <GraduationCap size={20} strokeWidth={1.8} />
        </span>
        <span className="text-sm font-medium text-lavender-600">{entry.period}</span>
      </div>
      <div>
        <h3 className="font-display text-lg font-medium text-foreground text-balance">
          {entry.school}
        </h3>
        <p className="mt-1 italic text-sm text-muted">{entry.program}</p>
      </div>
      <p className="text-sm leading-relaxed text-muted text-justify">{entry.description}</p>
      <div className="mt-auto flex flex-wrap gap-2 pt-2">
        {entry.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-lavender-50 px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase text-lavender-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}