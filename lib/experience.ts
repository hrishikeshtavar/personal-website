export type ExperienceEntry = {
  role: string;
  org: string;
  /**
   * Deliberately not a real date — Hrishi hasn't provided exact start
   * dates for these roles yet. "TBC" rather than an invented date so this
   * doesn't silently ship as though it were confirmed fact.
   */
  dates: string;
  highlights: string[];
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: "Founder",
    org: "Zenture IT Solutions",
    dates: "2020 (age 21) — Present",
    highlights: [
      "Grown to a ~25-engineer software consultancy",
      "Clients include the Indian Army and Maharashtra Forest Department",
      "Operates across the UK, India, and the Middle East",
    ],
  },
  {
    role: "Co-founder & Technical Lead",
    org: "Invixa AI",
    dates: "Dates TBC — Present",
    highlights: [
      "Google Cloud–backed invoice fraud detection platform",
      "Won the Google Cloud × NatWest Hackathon Grand Final (March 2026)",
      "Part of the NatWest Accelerator",
    ],
  },
  {
    role: "Co-founder",
    org: "SimuLearning (IoTLMS)",
    dates: "Dates TBC — Present",
    highlights: [
      "K-12 IoT and embedded-systems learning platform, live at simulearning.ai",
      "Multi-tenant architecture serving multiple schools",
    ],
  },
];
