import { SKILL_CATEGORIES } from "@/lib/skills";

/**
 * Skills grouped by category. Content lives in lib/skills.ts, same pattern
 * as lib/projects.ts and lib/site-content.ts — editing the skill list is a
 * data change here, not a markup change.
 */
export function SkillsSection() {
  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10"
    >
      <p className="font-mono-label mb-3 text-xs uppercase tracking-[0.25em] text-[var(--teal)]">
        Toolkit
      </p>
      <h2 className="font-display text-2xl font-semibold sm:text-3xl">
        Skills.
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SKILL_CATEGORIES.map((category) => (
          <div
            key={category.title}
            className="rounded-2xl border border-[var(--panel-line)] bg-[var(--panel)] p-5"
          >
            <h3 className="font-mono-label mb-4 text-[10px] uppercase tracking-[0.15em] text-[var(--ink-muted)]">
              {category.title}
            </h3>
            <ul className="flex flex-col gap-2">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="text-sm text-[var(--ink)] sm:text-base"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
