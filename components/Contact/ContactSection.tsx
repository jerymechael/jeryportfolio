"use client";

import { motion } from "framer-motion";
import { MessageCircle, MapPin, Clock3, ArrowUpRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import SocialLinks from "@/components/ui/SocialLinks";
import ContactForm from "@/components/Contact/ContactForm";
import { contactInfo } from "@/data/contact";
import { socialLinks } from "@/data/nav";
import { staggerContainer, fadeInUp, viewportOnce } from "@/lib/motion";

const infoCards = [
  { icon: MessageCircle, label: "Availability", value: "Open · 2026" },
  { icon: MapPin, label: "Based in", value: "Jakarta, Indonesia" },
  { icon: Clock3, label: "Response", value: "Within a day" },
];

export default function ContactSection() {
  return (
   <section id="get-in-touch-section" className="relative pt-8 sm:pt-10 pb-10 sm:pb-14">
      <div className="container-content">
        <div className="flex flex-col gap-8">
          
          {/* Grid Utama: Informasi Atas + Kartu Info sejajar dengan Form Kontak */}
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 items-stretch">
            
            {/* Sisi Kiri: Informasi & Kartu Info */}
            <div className="flex flex-col justify-between gap-8">
              <div className="flex flex-col gap-8">
                <SectionTitle
                  eyebrow="Get in touch"
                  title="Let's connect and grow together"
                  description="I'm actively looking for opportunities in UI/UX Design, Front-End Development, or related tech fields. If you think I'd be a great fit for your team, or simply want to connect, I'd love to hear from you."
                />

                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                >
                  {/* Warna tombol utama disesuaikan ke biru royal terang yang bold */}
                  <Button
                    href={contactInfo.whatsappHref}
                    size="lg"
                    icon={<ArrowUpRight size={18} />}
                    className="w-full sm:w-fit bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/10"
                  >
                    Chat with me on WhatsApp
                  </Button>
                </motion.div>
              </div>

              {/* Batas bawah grid kartu sejajar sempurna dengan batas bawah Form */}
              <motion.div
                variants={staggerContainer(0.08)}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              >
                {infoCards.map(({ icon: Icon, label, value }) => (
                  <motion.div
                    key={label}
                    variants={fadeInUp}
                    className="flex flex-col gap-3 rounded-2xl border border-border bg-white p-5 shadow-soft hover:shadow-card transition-shadow duration-300"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-sm">
                      <Icon size={16} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-2">
                        {label}
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-foreground">{value}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Sisi Kanan: Form Kontak */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex w-full"
            >
              <ContactForm />
            </motion.div>
          </div>

        {/* Bagian Sosmed diletakkan di bawah batas sejajar */}
<div className="flex flex-col gap-3 pt-6 border-t border-border/60 max-w-[45%]">
  <p className="text-sm font-medium text-muted-2">Or reach me directly</p>
  
  {/* Wrapper kustom untuk mengubah lingkaran putih ([&_a]) menjadi hitam minimalis */}
  <div className="[&_a]:bg-neutral-900 [&_a]:text-white [&_a]:border-neutral-800 [&_a:hover]:bg-black [&_a:hover]:text-white [&_a]:transition-all [&_a]:duration-300">
    <SocialLinks links={socialLinks} />
  </div>
</div>

        </div>
      </div>
    </section>
  );
}