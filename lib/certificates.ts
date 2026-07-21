export type Certificate = {
  name: string;
  issuer: string;
  /** TBC, not invented — see the note in lib/experience.ts. */
  date: string;
  status: "Certified" | "In progress";
};

export const CERTIFICATES: Certificate[] = [
  {
    name: "Certified ScrumMaster (CSM)",
    issuer: "Scrum Alliance",
    date: "Date TBC",
    status: "Certified",
  },
  {
    name: "Certified Scrum Product Owner (CSPO)",
    issuer: "Scrum Alliance",
    date: "Date TBC",
    status: "Certified",
  },
  {
    name: "Cybersecurity Certificate (CC)",
    issuer: "ISC2",
    date: "Date TBC",
    status: "Certified",
  },
  {
    name: "Project Management Professional (PMP)",
    issuer: "PMI",
    date: "Exam pending",
    status: "In progress",
  },
];
