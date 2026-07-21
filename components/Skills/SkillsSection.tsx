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
        
        {/* Pembungkus SectionTitle untuk membuat posisinya center di HP dan rata kiri di PC */}
        <div className="flex flex-col text-center md:text-left items-center md:items-start w-full">
          <SectionTitle
            eyebrow="Skills & Tools"
            title="Skills and tools I bring, every day."
            eyebrowStyle="lines"
            className="items-center md:items-start text-center md:text-left"
          />
        </div>

        <div className="mt-8 sm:mt-16 flex flex-col">
          {skillGroups.map((group, index) => (
            <div
              key={group.id}
              className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 py-6 sm:py-8 md:py-10 ${
                index !== skillGroups.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="md:sticky md:top-28 h-fit flex flex-col gap-1.5 text-center md:text-left items-center md:items-start">
                <h3 className="font-serif text-xl sm:text-2xl text-foreground text-balance">
                  {group.title}
                </h3>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-2/70">
                  {group.eyebrow}
                </span>
              </div>

              <div className="md:col-span-2">
                <motion.div
                  variants={staggerContainer(0.05)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
                >
                  {group.items.map((item) => (
                    <motion.div key={item.name} variants={fadeInUp} className="h-full">
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