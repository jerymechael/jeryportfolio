"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillBadge from "@/components/ui/SkillBadge";
import { skillGroups } from "@/data/skills";
import { staggerContainer, fadeInUp, viewportOnce } from "@/lib/motion";

export default function SkillsSection() {
  return (
    <section id="skills-tools-section" className="relative pt-8 sm:pt-10 pb-10 sm:pb-14 bg-background">
      <div className="container-content">
       <SectionTitle
  eyebrow="Skills & Tools"
  title="Skills and tools I bring, every day."
  eyebrowStyle="lines"
/>

        <div className="mt-16 flex flex-col">
          {skillGroups.map((group, index) => (
            <div
              key={group.id}
              className={`grid grid-cols-1 md:grid-cols-3 gap-8 py-10 ${
                index !== skillGroups.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="md:sticky md:top-28 h-fit flex flex-col gap-1">
                <h3 className="font-serif text-xl sm:text-2xl text-foreground text-balance">
                  {group.title}
                </h3>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-2">
                  {group.eyebrow}
                </span>
              </div>

              <div className="md:col-span-2">
                <motion.div
                  variants={staggerContainer(0.05)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  className="flex flex-wrap gap-4"
                >
                  {group.items.map((item) => (
                    <motion.div key={item.name} variants={fadeInUp}>
                      <SkillBadge
                        name={item.name}
                        icon={item.icon}
                        color={item.color}
                        bg={item.bg}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}