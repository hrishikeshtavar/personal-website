export type SkillCategory = {
  title: string;
  skills: string[];
};

/**
 * Skills grouped by category for the Skills section. Unlike Experience and
 * Certificates, this doesn't depend on any dates or documents Hrishi still
 * needs to provide — it's built from what's already established about his
 * stack across Invixa AI, SimuLearning, and Zenture's client work.
 */
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Full-Stack & Web",
    skills: ["React", "TypeScript", "Next.js", "NestJS", "Node.js"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["Python", "PyTorch", "RAG Systems", "LLM Evaluation", "Fraud Detection"],
  },
  {
    title: "Cloud & Data",
    skills: ["Google Cloud Platform", "PostgreSQL", "Docker", "Prisma"],
  },
  {
    title: "Delivery & Leadership",
    skills: ["Agile / Scrum", "Product Ownership", "Cybersecurity Fundamentals"],
  },
];
