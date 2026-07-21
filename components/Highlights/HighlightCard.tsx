"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HighlightEntry } from "@/lib/types";
import { fadeInUp, viewportOnce } from "@/lib/motion";

interface HighlightCardProps {
  entry: HighlightEntry;
  index: number;
}

export default function HighlightCard({ entry, index }: HighlightCardProps) {
  return (
    <motion.article
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay: index * 0.06 }}
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-lavender-50">
        <Image
          src={entry.image}
          alt={entry.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 items-center justify-center p-4 text-center">
        <p className="text-sm font-medium text-foreground text-balance">{entry.title}</p>
      </div>
    </motion.article>
  );
}