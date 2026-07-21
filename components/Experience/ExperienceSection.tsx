import ExperienceItem from "@/components/Experience/ExperienceItem";
import { experience } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience-section" className="relative pt-8 sm:pt-10 pb-24 sm:pb-32">
      <div className="container-content">
        <div className="flex flex-col items-center text-center gap-8 lg:flex-row lg:items-end lg:justify-between lg:text-left">
          <div className="flex flex-col items-center text-center gap-4 lg:items-start lg:text-left">
            <span className="flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-blue-600">
              <span className="h-px w-8 bg-blue-400" />
              Experience
              <span className="h-px w-8 bg-blue-400" />
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight text-foreground text-balance max-w-xl">
              A journey shaped by people, growth, and work
            </h2>
          </div>

          <div className="lg:text-right shrink-0 max-w-xs">
            <p className="font-serif italic text-xl text-foreground">
              {experience.length} roles
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted text-center lg:text-right">
              across research, technology, and community organizations.
            </p>
          </div>
        </div>

        {/* Jarak atas list experience diperkecil dari mt-16 menjadi mt-8 sm:mt-10 */}
        <div className="mt-8 sm:mt-10 flex flex-col gap-6">
          {experience.map((entry, index) => (
            <ExperienceItem key={entry.id} entry={entry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}