"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";
import { socialLinks } from "@/data/nav";
import SocialLinks from "@/components/ui/SocialLinks";

const FULL_NAME = "Jery Mechael Pentagon Lumbantoruan";

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="relative overflow-hidden pt-32 pb-8 sm:pt-40 sm:pb-12"
    >
      {/* subtle dot-grid background accent */}
      <div
        className="pointer-events-none absolute right-0 top-0 -z-10 h-full w-1/2 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(37,99,235,0.2) 1.5px, transparent 1.5px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="container-content grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] items-center gap-16">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-7"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3">
            <span className="h-px w-8 bg-blue-400" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-blue-600">
              Portfolio &amp; Resume
            </span>
            <span className="h-px w-8 bg-blue-400" />
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-serif leading-[0.98] tracking-tight text-foreground text-balance break-words
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-[clamp(2.25rem,4.2vw,4.5rem)]"
          >
            {FULL_NAME}
          </motion.h1>

          <motion.div
            variants={fadeInUp}
            className="inline-flex w-fit items-center gap-3 rounded-full bg-blue-800 pl-3 pr-6 py-2"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
              <span className="h-2 w-2 rounded-full bg-white" />
            </span>
            <span className="text-sm sm:text-base font-bold text-white whitespace-nowrap">
              UI/UX Designer &amp; Front-End Developer
            </span>
            <span className="h-5 w-px bg-white/30" />
            <span className="font-serif italic text-sm sm:text-base text-white/90 whitespace-nowrap">
              IT Graduate
            </span>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="max-w-lg text-base sm:text-lg leading-relaxed text-muted text-justify"
          >
            Fresh graduate in Informatics from Universitas Mercu Buana Yogyakarta,
            with hands-on experience in technical project development, UI/UX design, and system development.
          </motion.p>

          <motion.div variants={fadeInUp} className="pt-1 relative">
            <SocialLinks links={socialLinks} variant="pill" />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block absolute left-0 right-[-16rem] top-full mt-10 h-px bg-gradient-to-r from-blue-500 via-blue-300 to-blue-100"
              style={{ transformOrigin: "left" }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="relative mx-auto w-full max-w-xs lg:max-w-none aspect-[4/5]"
        >
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-blue-600 shadow-lift">
            <Image
              src="/images/jerypoto.jpg"
              alt={FULL_NAME}
              fill
              priority
              className="object-cover object-center"
            />

            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-md backdrop-blur-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-sm font-semibold text-foreground whitespace-nowrap">
                Available for new work
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}