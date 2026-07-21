import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";
import { FieldProofSection } from "@/components/sections/field-proof-section";
import { StatusBanner } from "@/components/sections/status-banner";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { CertificatesSection } from "@/components/sections/certificates-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ContactSection } from "@/components/sections/contact-section";
import { SiteFooter } from "@/components/sections/site-footer";

/**
 * Home page. This file is intentionally thin — it just lays out the
 * sections in order. Each section owns its own markup, styling, and (where
 * needed) client-side state; see components/sections/.
 *
 * Section order matches the nav order in site-nav.tsx (Projects, Skills,
 * Certifications, Experience, Contact) — keep the two in sync.
 */
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--void)]">
      <HeroSection />

      <div className="relative z-10 flex flex-col">
        <StatsSection />
        <FieldProofSection />
        <StatusBanner />
        <ProjectsSection />
        <SkillsSection />
        <CertificatesSection />
        <ExperienceSection />
        <ContactSection />
        <SiteFooter />
      </div>
    </main>
  );
}
