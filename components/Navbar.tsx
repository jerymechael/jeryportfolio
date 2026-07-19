"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Briefcase, FolderKanban, Sparkles, HelpCircle, Mail, Menu, X, Download } from "lucide-react";
import { navItems, resumeHref } from "@/data/nav";
import { useActiveSection } from "@/hooks/useActiveSection";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const iconMap = {
  home: Home,
  experience: Briefcase,
  work: FolderKanban,
  skills: Sparkles,
  faq: HelpCircle,
  contact: Mail,
};

const sectionIds = navItems.map((item) => item.href.replace("#", ""));

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className="container-content py-4">
          <div className="flex items-center justify-between gap-4 rounded-full border border-border bg-white/80 px-5 py-3 shadow-soft backdrop-blur-md sm:px-6">
            <Link
              href="#hero-section"
              className="font-serif text-lg font-medium tracking-tight text-foreground shrink-0"
            >
              Jery Mechael P.L
            </Link>

            {/* Desktop nav with icon + label */}
            <nav
              aria-label="Main navigation"
              className="hidden md:flex items-center gap-1 rounded-full bg-lavender-50/70 px-2 py-2"
            >
              {navItems.map((item) => {
                const Icon = iconMap[item.icon];
                const id = item.href.replace("#", "");
                const isActive = activeId === id;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap",
                      isActive ? "text-lavender-700" : "text-muted hover:text-lavender-600"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-white shadow-soft"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <Icon size={16} strokeWidth={1.9} className="relative z-10" />
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:block shrink-0">
              <Button href={resumeHref} variant="gradient" size="sm" icon={<Download size={15} />}>
                Download CV
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white shadow-soft"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-40 rounded-3xl border border-border bg-white p-4 shadow-lift md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-foreground hover:bg-lavender-50"
                  >
                    <Icon size={17} strokeWidth={1.9} className="text-lavender-600" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-3 px-1">
              <Button href={resumeHref} variant="gradient" className="w-full" icon={<Download size={15} />}>
                Download CV
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}