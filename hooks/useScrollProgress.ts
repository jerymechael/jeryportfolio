"use client";

import { useScroll, useSpring } from "framer-motion";

/**
 * Returns a smoothed 0-1 motion value representing scroll progress
 * through the entire document. Useful for progress bars in the navbar.
 */
export function useScrollProgress() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  return progress;
}
