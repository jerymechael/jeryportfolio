import SectionTitle from "@/components/ui/SectionTitle";
import EducationCard from "@/components/Education/EducationCard";
import { education } from "@/data/education";

export default function EducationSection() {
  return (
  <section id="education-section" className="relative pt-10 sm:pt-14 pb-8 sm:pb-10">
      <div className="container-content">
        <SectionTitle
          eyebrow="Education"
          title="Built on strong academic foundations"
          description="From secondary school to university — shaping who I am today."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((entry, index) => (
            <EducationCard key={entry.id} entry={entry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
