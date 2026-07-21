"use client";

import { LiquidGlass } from "@/components/ui/liquid-glass";
import { ThemeToggle } from "@/components/ui/theme-toggle";

/**
 * Section anchors the nav links to. Kept in one place so adding a future
 * section (e.g. once Experience/Certificates ship — pending dates/resume
 * from Hrishi) is a one-line change here rather than hunting through the
 * nav markup. Deliberately no "Services" item — declined earlier as not a
 * fit for a founder who isn't soliciting freelance work.
 */
const NAV_LINKS = [
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
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
        contentClassName="flex items-center gap-1 px-3 py-2.5"
      >
        <a
          href="#home"
          className="font-mono-label rounded-full px-4 py-2 text-sm tracking-[0.15em] text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)]"
        >
          HT
        </a>
        <div
          className="mx-1 h-5 w-px bg-[var(--glass-border)]"
          aria-hidden="true"
        />
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full px-4 py-2 text-sm font-medium text-[var(--ink-muted)] transition-colors hover:bg-[var(--glass-border)] hover:text-[var(--ink)]"
          >
            {link.label}
          </a>
        ))}
        <div
          className="mx-1 h-5 w-px bg-[var(--glass-border)]"
          aria-hidden="true"
        />
        <ThemeToggle />
      </LiquidGlass>
    </nav>
  );
}
