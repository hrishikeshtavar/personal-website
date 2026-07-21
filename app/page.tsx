import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";
import { FieldProofSection } from "@/components/sections/field-proof-section";
import { StatusBanner } from "@/components/sections/status-banner";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";
import { SiteFooter } from "@/components/sections/site-footer";

/**
 * Home page. This file is intentionally thin — it just lays out the
 * sections in order. Each section owns its own markup, styling, and (where
 * needed) client-side state; see components/sections/.
 */
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--void)]">
      <HeroSection />

      <div className="relative z-10 flex flex-col">
        <StatsSection />
        <FieldProofSection />
        <StatusBanner />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <SiteFooter />
      </div>
    </main>
  );
}
