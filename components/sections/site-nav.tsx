"use client";

import { LiquidGlass } from "@/components/ui/liquid-glass";
import { ThemeToggle } from "@/components/ui/theme-toggle";

/**
 * Section anchors the nav links to. Kept in one place so future changes
 * are a one-line edit here rather than hunting through the nav markup.
 * Order matches the section order in app/page.tsx — keep the two in sync.
 * Deliberately no "Services" item — declined earlier as not a fit for a
 * founder who isn't soliciting freelance work.
 */
const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

/**
 * Floating glass nav, fixed above all page content. Persistent across the
 * whole site (not just the hero) — mounted once in app/layout.tsx. Sized to
 * match the reference: text-sm with generous padding, not a tiny capsule.
 */
export function SiteNav() {
  return (
    <nav className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:top-6">
      <LiquidGlass
        rounded="pill"
        className="max-w-[calc(100vw-2rem)]"
        contentClassName="flex items-center gap-1 overflow-x-auto whitespace-nowrap px-3 py-2.5"
      >
        <a
          href="#home"
          className="font-mono-label shrink-0 rounded-full px-3 py-2 text-sm tracking-[0.15em] text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)] sm:px-4"
        >
          HT
        </a>
        <div
          className="mx-1 h-5 w-px shrink-0 bg-[var(--glass-border)]"
          aria-hidden="true"
        />
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="shrink-0 rounded-full px-3 py-2 text-sm font-medium text-[var(--ink-muted)] transition-colors hover:bg-[var(--glass-border)] hover:text-[var(--ink)] sm:px-4"
          >
            {link.label}
          </a>
        ))}
        <div
          className="mx-1 h-5 w-px shrink-0 bg-[var(--glass-border)]"
          aria-hidden="true"
        />
        <ThemeToggle />
      </LiquidGlass>
    </nav>
  );
}
