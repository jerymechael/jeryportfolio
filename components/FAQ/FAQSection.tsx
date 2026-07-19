import { MessageCircle } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import FAQItemRow from "@/components/FAQ/FAQItem";
import { faqItems } from "@/data/faq";
import { whatsappHref } from "@/data/nav";

export default function FAQSection() {
  return (
    <section id="faq-section" className="relative pt-8 sm:pt-10 pb-10 sm:pb-14">
      <div className="container-content">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionTitle
            eyebrow="FAQ"
            title="Things you might want to know."
            description="A few honest answers to questions recruiters often have about my background and availability."
          />
          <Button
            href={whatsappHref}
            variant="secondary"
            icon={<MessageCircle size={16} />}
            className="shrink-0"
          >
            Have another question?
          </Button>
        </div>

        <div className="mt-14">
          {faqItems.map((item, index) => (
            <FAQItemRow key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
