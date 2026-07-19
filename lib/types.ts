export interface NavItem {
  label: string;
  href: string;
  icon: "home" | "experience" | "work" | "skills" | "faq" | "contact";
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "linkedin" | "instagram" | "mail" | "whatsapp";
}

export interface ExperienceEntry {
  id: string;
  period: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
}

export interface HighlightEntry {
  id: string;
  title: string;
  image: string;
  href?: string;
}

export interface EducationEntry {
  id: string;
  period: string;
  school: string;
  program: string;
  description: string;
  tags: string[];
}

export interface SkillItem {
  name: string;
  icon: string; // lucide-react icon name, matched in the ICONS map
  color: string; // tailwind text color class, e.g. "text-blue-600"
  bg: string; // tailwind bg color class, e.g. "bg-blue-50"
}

export interface SkillGroup {
  id: string;
  eyebrow: string;
  title: string;
  items: SkillItem[];
}
export interface FaqItem {
  id: string;
  question: string;
  answer?: string;
}

export interface ContactInfo {
  availability: string;
  basedIn: string;
  response: string;
  whatsappHref: string;
}
