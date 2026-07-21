import HighlightCard from "@/components/Highlights/HighlightCard";
import HighlightsCarouselMobile from "@/components/Highlights/HighlightsCarouselMobile";
import { highlights } from "@/data/highlights";

export default function HighlightsSection() {
  return (
    <section id="project-section" className="relative pt-4 sm:pt-6 pb-10 sm:pb-14 bg-lavender-50/60">
      <div className="container-content">
        <div className="text-center">
          <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-balance">
            <span className="text-foreground">Credentials &amp; </span>
            <span className="text-blue-600">Milestones</span>
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-muted text-sm sm:text-base leading-relaxed">
            Validated certifications and key achievements reflecting continuous technical growth and professional competence.
          </p>
        </div>

        {/* Mobile: infinite loop carousel */}
        <div className="mt-10 sm:mt-12">
          <HighlightsCarouselMobile items={highlights} />
        </div>

        {/* Desktop/tablet: grid biasa, sejajar tinggi */}
        <div className="hidden sm:grid mt-10 sm:mt-12 gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {highlights.map((entry, index) => (
            <HighlightCard key={entry.id} entry={entry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}