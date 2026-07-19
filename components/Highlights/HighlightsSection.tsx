import HighlightCard from "@/components/Highlights/HighlightCard";
import { highlights } from "@/data/highlights";

export default function HighlightsSection() {
  return (
    <section id="project-section" className="relative pt-8 sm:pt-10 pb-10 sm:pb-14 bg-lavender-50/60">
      <div className="container-content">
        <div className="text-center">
          <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-balance">
  <span className="text-foreground">Highlight &amp; </span>
  <span className="text-blue-600">Certificates</span>
</h2>
          <p className="mt-4 max-w-lg mx-auto text-muted leading-relaxed">
           Sertifikat pelatihan dan bootcamp yang menjadi bukti nyata proses belajar dan pengembangan diri saya di bidang teknologi.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((entry, index) => (
            <HighlightCard key={entry.id} entry={entry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}