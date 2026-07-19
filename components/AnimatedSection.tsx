"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeInUp, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedSection({ children, className, delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
