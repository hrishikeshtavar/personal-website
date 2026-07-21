import { STATS } from "@/lib/site-content";

/**
 * Headline numbers strip (engineers led, retention, growth, hackathon
 * result). Static content only — no hooks or animation — so this renders
 * as a Server Component.
 */
export function StatsSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10">
      <div className="grid grid-cols-2 gap-x-8 gap-y-8 border-t border-[var(--panel-line)] pt-8 sm:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label}>
            <div className="font-display text-3xl font-semibold text-[var(--gold)] sm:text-4xl">
              {s.value}
            </div>
            <div className="mt-1 text-xs leading-snug text-[var(--ink-muted)] sm:text-sm">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
