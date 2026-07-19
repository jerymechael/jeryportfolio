import ExperienceItem from "@/components/Experience/ExperienceItem";
import { experience } from "@/data/experience";

export default function ExperienceSection() {
  return (
   <section id="experience-section" className="relative pt-12 sm:pt-14 pb-10 sm:pb-14">
      <div className="container-content">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="flex flex-col gap-4">
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
            <p className="mt-1 text-sm leading-relaxed text-muted">
              
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 md:gap-0">
          {experience.map((entry, index) => (
            <ExperienceItem key={entry.id} entry={entry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}