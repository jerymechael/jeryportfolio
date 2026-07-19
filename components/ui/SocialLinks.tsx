"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram, Mail, MessageCircle } from "lucide-react";
import { SocialLink } from "@/lib/types";
import { cn } from "@/lib/utils";

const iconMap = {
  linkedin: Linkedin,
  instagram: Instagram,
  mail: Mail,
  whatsapp: MessageCircle,
};

const labelOverride: Partial<Record<SocialLink["icon"], string>> = {
  mail: "Gmail",
};

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
  iconClassName?: string;
  variant?: "icon" | "pill";
}

export default function SocialLinks({
  links,
  className,
  iconClassName,
  variant = "icon",
}: SocialLinksProps) {
  return (
   <ul className={cn("flex flex-nowrap items-center gap-3 overflow-x-auto", className)}>
      {links.map((link) => {
        const Icon = iconMap[link.icon];
        return (
          <li key={link.label}>
            <motion.a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              whileHover={{ y: -3, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className={cn(
                variant === "pill"
                 ? "flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-700 transition-colors"
                  : "flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-soft hover:border-lavender-300 hover:text-lavender-600 hover:shadow-card transition-colors",
                iconClassName
              )}
            >
              <Icon size={variant === "pill" ? 16 : 18} strokeWidth={1.9} />
              {variant === "pill" && <span>{labelOverride[link.icon] ?? link.label}</span>}
            </motion.a>
          </li>
        );
      })}
    </ul>
  );
}