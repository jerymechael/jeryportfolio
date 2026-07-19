"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FaqItem } from "@/lib/types";
import { fadeInUp, viewportOnce } from "@/lib/motion";

interface FAQItemProps {
  item: FaqItem;
  index: number;
}

export default function FAQItemRow({ item, index }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay: index * 0.05 }}
      className="border-b border-border"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-display text-lg sm:text-xl font-medium text-foreground">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lavender-50 text-lavender-600"
        >
          <Plus size={16} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && item.answer && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 max-w-2xl leading-relaxed text-muted text-justify">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
