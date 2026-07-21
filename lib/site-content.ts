import type { LucideIcon } from "lucide-react";
import { Mail, Link2, Code2 } from "lucide-react";

/**
 * Site-wide copy and structured content that isn't a "project".
 *
 * Kept separate from the components that render it (same pattern as
 * lib/projects.ts) so copy changes never require touching JSX, and so each
 * section component stays focused on layout rather than content.
 */

/** Role pillars shown under the hero headline, e.g. "Product Owner · AI/ML Engineer". */
export const PILLARS = [
  "Product Owner",
  "AI/ML Engineer",
  "Data Analyst",
  "Mentor",
];

export type Stat = {
  value: string;
  label: string;
};

/** Headline numbers shown in the stats strip below the hero. */
export const STATS: Stat[] = [
  { value: "25+", label: "Engineers led" },
  { value: "80%", label: "Client retention" },
  { value: "30%", label: "YoY revenue growth" },
  { value: "1st", label: "Google Cloud × NatWest Hackathon" },
];

export type ContactLink = {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
};

/** Contact methods shown as cards in the Contact section. */
export const CONTACT_LINKS: ContactLink[] = [
  {
    icon: Mail,
    label: "Email",
    value: "hrishikesh.tavar@gmail.com",
    href: "mailto:hrishikesh.tavar@gmail.com",
  },
  {
    icon: Link2,
    label: "LinkedIn",
    value: "linkedin.com/in/hrishikesh-tavar",
    href: "https://www.linkedin.com/in/hrishikesh-tavar",
  },
  {
    icon: Code2,
    label: "GitHub",
    value: "Explore on GitHub",
    href: "https://github.com/hrishikeshtavar",
  },
];
