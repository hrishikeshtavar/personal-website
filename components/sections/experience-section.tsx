import { EXPERIENCE } from "@/lib/experience";

/**
 * Experience timeline. Dates are marked "TBC" in the data rather than
 * invented — see lib/experience.ts. Swap them in once Hrishi confirms
 * exact start dates for Invixa AI and SimuLearning.
 */
export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10"
    >
      <p className="font-mono-label mb-3 text-xs uppercase tracking-[0.25em] text-[var(--teal)]">
        Track record
      </p>
      <h2 className="font-display text-2xl font-semibold sm:text-3xl">
        Experience.
      </h2>

      <div className="mt-10 flex flex-col gap-4">
        {EXPERIENCE.map((entry) => (
          <div
            key={`${entry.org}-${entry.role}`}
            className="rounded-2xl border border-[var(--panel-line)] bg-[var(--panel)] p-6"
          >
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 className="font-display text-lg font-semibold text-[var(--ink)]">
                {entry.role} · {entry.org}
              </h3>
              <span className="font-mono-label text-xs text-[var(--ink-muted)]">
                {entry.dates}
              </span>
            </div>
            <ul className="mt-3 flex flex-col gap-1.5">
              {entry.highlights.map((h) => (
                <li
                  key={h}
                  className="text-sm leading-relaxed text-[var(--ink-muted)]"
                >
                  {h}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
