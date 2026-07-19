import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/Experience/ExperienceSection";
import HighlightsSection from "@/components/Highlights/HighlightsSection";
import EducationSection from "@/components/Education/EducationSection";
import SkillsSection from "@/components/Skills/SkillsSection";
import FAQSection from "@/components/FAQ/FAQSection";
import ContactSection from "@/components/Contact/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ExperienceSection />
        <HighlightsSection />
        <EducationSection />
        <SkillsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
