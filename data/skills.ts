import { SkillGroup } from "@/lib/types";

export const skillGroups: SkillGroup[] = [
  {
    id: "productivity",
    eyebrow: "Productivity",
    title: "Productivity & Office Tools",
    items: [
      { name: "Microsoft Word", icon: "FileText", color: "text-blue-600", bg: "bg-blue-50" },
      { name: "Microsoft Excel", icon: "Table", color: "text-emerald-600", bg: "bg-emerald-50" },
      { name: "Microsoft PowerPoint", icon: "Presentation", color: "text-orange-600", bg: "bg-orange-50" },
      { name: "Google Workspace", icon: "LayoutGrid", color: "text-blue-500", bg: "bg-blue-50" },
      { name: "Gmail", icon: "Mail", color: "text-red-500", bg: "bg-red-50" },
    ],
  },
  {
    id: "creative",
    eyebrow: "Creative",
    title: "Creative & Design Tools",
    items: [
      { name: "Canva", icon: "Palette", color: "text-sky-600", bg: "bg-sky-50" },
      { name: "CapCut", icon: "Scissors", color: "text-neutral-800", bg: "bg-neutral-100" },
      { name: "Figma", icon: "Figma", color: "text-purple-600", bg: "bg-purple-50" },
      { name: "Framer", icon: "box", color: "text-purple-600", bg: "bg-purple-50" },
    ],
  },
  {
    id: "development",
    eyebrow: "Development",
    title: "Front-End Development",
    items: [
      { name: "HTML & CSS", icon: "Code2", color: "text-orange-600", bg: "bg-orange-50" },
      { name: "JavaScript", icon: "Braces", color: "text-yellow-600", bg: "bg-yellow-50" },
      { name: "React / Next.js", icon: "Atom", color: "text-sky-600", bg: "bg-sky-50" },
      { name: "Tailwind CSS", icon: "Wind", color: "text-cyan-600", bg: "bg-cyan-50" },
      { name: "Git & GitHub", icon: "GitBranch", color: "text-neutral-800", bg: "bg-neutral-100" },
    ],
  },
  {
    id: "soft-skill",
    eyebrow: "Soft skill",
    title: "Soft Skills",
    items: [
      { name: "Communication", icon: "MessageCircle", color: "text-blue-600", bg: "bg-blue-50" },
      { name: "Teamwork", icon: "Users", color: "text-blue-600", bg: "bg-blue-50" },
      { name: "Adaptability", icon: "Sprout", color: "text-blue-600", bg: "bg-blue-50" },
      { name: "Leadership", icon: "Compass", color: "text-blue-600", bg: "bg-blue-50" },
      { name: "Creativity", icon: "Sparkles", color: "text-blue-600", bg: "bg-blue-50" },
      { name: "Problem Solving", icon: "Lightbulb", color: "text-blue-600", bg: "bg-blue-50" },
    
    ],
  },
];