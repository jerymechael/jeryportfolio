"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  icon: string;
  color: string;
  bg: string;
  className?: string;
}

export default function SkillBadge({ name, icon, color, bg, className }: SkillBadgeProps) {
  const IconComponent = (Icons as unknown as Record<string, LucideIcon>)[icon] ?? Icons.Sparkles;

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
      className={cn(
        "flex h-full w-full min-h-[104px] sm:min-h-[112px] flex-col items-center justify-center gap-2",
        "rounded-2xl border border-border bg-white px-3 sm:px-6 py-4",
        "text-center shadow-soft hover:border-blue-300 hover:shadow-card",
        "transition-colors duration-200 cursor-default select-none",
        className
      )}
    >
      <span
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
          bg
        )}
      >
        <IconComponent size={17} strokeWidth={1.8} className={color} />
      </span>
      <span className="font-body text-sm font-medium text-foreground text-balance leading-snug line-clamp-2 break-words">
        {name}
      </span>
    </motion.div>
  );
}