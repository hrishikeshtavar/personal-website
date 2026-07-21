"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/projects";
import { FEATURED_PROJECTS, MORE_PROJECTS } from "@/lib/projects";
import { fadeUpOnScroll } from "@/lib/motion";

/** Small pill row for a project's tech stack (e.g. "Next.js", "PostgreSQL"). */
function StackPills({ stack }: { stack: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {stack.map((s) => (
        <span
          key={s}
          className="font-mono-label rounded-full border border-[var(--panel-line)] px-2.5 py-0.5 text-[10px] tracking-wide text-[var(--ink-muted)]"
        >
          {s}
        </span>
      ))}
    </div>
  );
}

/** "Code" link (always present) + "Live site" link (only when liveUrl is set). */
function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex items-center gap-3 pt-1">
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group/link inline-flex items-center gap-1.5 text-xs font-medium text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)]"
      >
        {/* lucide-react dropped its brand/logo icon set, so Code2 stands in
            for GitHub here — same convention used in the Contact section. */}
        <Code2 className="h-3.5 w-3.5" />
        Code
      </a>
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-1.5 text-xs font-medium text-[var(--teal)] transition-colors hover:text-[var(--ink)]"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          Live site
        </a>
      )}
    </div>
  );
}

/** Larger card used for the 3 flagship projects at the top of the section. */
function FeaturedCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <motion.div
      {...fadeUpOnScroll(delay)}
      className="group flex flex-col gap-4 rounded-2xl border border-[var(--panel-line)] bg-[var(--panel)] p-6 transition-colors hover:border-[var(--teal)]/50"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="font-mono-label text-[10px] uppercase tracking-[0.15em] text-[var(--gold)]">
          {project.badge}
        </span>
      </div>
      <div>
        <h3 className="font-display text-lg font-semibold text-[var(--ink)] sm:text-xl">
          {project.title}
        </h3>
        {project.highlight && (
          <p className="font-mono-label mt-1 text-xs text-[var(--teal)]">
            {project.highlight}
          </p>
        )}
      </div>
      <p className="text-sm leading-relaxed text-[var(--ink-muted)]">
        {project.description}
      </p>
      <div className="mt-auto flex flex-col gap-4">
        <StackPills stack={project.stack} />
        <ProjectLinks project={project} />
      </div>
    </motion.div>
  );
}

/** Smaller card used for the broader project grid below the featured row. */
function CompactCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <motion.div
      {...fadeUpOnScroll(delay)}
      className="group flex flex-col gap-3 rounded-2xl border border-[var(--panel-line)] bg-[var(--panel)]/60 p-5 transition-colors hover:border-[var(--teal)]/50"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-base font-semibold text-[var(--ink)]">
          {project.title}
        </h3>
        <span className="font-mono-label shrink-0 text-[10px] uppercase tracking-[0.12em] text-[var(--gold)]">
          {project.badge}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-[var(--ink-muted)]">
        {project.description}
      </p>
      {project.highlight && (
        <p className="font-mono-label text-xs text-[var(--teal)]">
          {project.highlight}
        </p>
      )}
      <div className="mt-auto flex flex-col gap-3 pt-1">
        <StackPills stack={project.stack} />
        <ProjectLinks project={project} />
      </div>
    </motion.div>
  );
}

/**
 * Projects section: 3 flagship cards (SimuLearning, Invixa AI, GeM-Rag)
 * followed by a grid of the rest. Project content lives in lib/projects.ts —
 * this file only handles layout and presentation.
 */
export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10"
    >
      <motion.div {...fadeUpOnScroll(0)}>
        <p className="font-mono-label mb-3 text-xs uppercase tracking-[0.25em] text-[var(--teal)]">
          Selected work
        </p>
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">
          Projects.
        </h2>
        <p className="mt-3 max-w-xl text-sm text-[var(--ink-muted)] sm:text-base">
          A mix of shipped products and applied AI/ML, data and statistics
          work — code on GitHub, live links where the project is deployed.
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {FEATURED_PROJECTS.map((project, i) => (
          <FeaturedCard key={project.slug} project={project} delay={0.05 * i} />
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {MORE_PROJECTS.map((project, i) => (
          <CompactCard key={project.slug} project={project} delay={0.03 * i} />
        ))}
      </div>
    </section>
  );
}
