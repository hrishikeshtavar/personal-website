"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { WordsPullUp } from "@/components/ui/words-pull-up";
import { fadeUpOnMount } from "@/lib/motion";
import { PILLARS } from "@/lib/site-content";

/**
 * Full-height hero: looping background video, the name treatment, the role
 * pillars, and a single CTA into the Contact section.
 *
 * Content is pinned to the bottom of the frame (rather than centered) so it
 * reads well across viewport heights without needing separate mobile logic.
 */
export function HeroSection() {
  return (
    <section className="relative h-screen w-full px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-[var(--panel-line)] md:rounded-[2rem]">
        {/* Backdrop: background video + noise texture + darkening gradient */}
        <div className="absolute inset-0 bg-[var(--void)]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          />
          <div
            className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-overlay"
            aria-hidden="true"
          />
          {/* Fades the video toward the void colour so the bottom content panel stays legible */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--void)]/30 via-transparent to-[var(--void)]/85" />
        </div>

        {/* Top mark: initials/year on the left, region on the right */}
        <header className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 pt-6 sm:px-10 sm:pt-8">
          <motion.span
            {...fadeUpOnMount(0)}
            className="font-mono-label text-xs tracking-[0.2em] text-[var(--ink-muted)]"
          >
            HT / 2026
          </motion.span>
          <motion.span
            {...fadeUpOnMount(0.05)}
            className="font-mono-label text-xs tracking-[0.2em] text-[var(--ink-muted)]"
          >
            UK · INDIA · MIDDLE EAST
          </motion.span>
        </header>

        {/* Bottom-anchored content: headline on the left, intro card on the right */}
        <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-8 sm:px-10 sm:pb-10">
          <div className="grid grid-cols-12 items-end gap-6">
            <div className="col-span-12 lg:col-span-8">
              <p className="font-mono-label mb-3 text-xs uppercase tracking-[0.25em] text-[var(--teal)]">
                Cross-border technology practice
              </p>
              <h1 className="font-display text-balance text-[13vw] font-semibold leading-[0.92] tracking-tight text-[var(--ink)] sm:text-[10vw] lg:text-[7.5vw]">
                <WordsPullUp text="Hrishikesh Tavar" delayOffset={0.1} />
              </h1>
            </div>

            <div className="col-span-12 flex flex-col gap-5 rounded-2xl border border-[var(--panel-line)] bg-[var(--void)]/90 p-5 backdrop-blur-lg sm:p-6 lg:col-span-4">
              <motion.div
                {...fadeUpOnMount(0.5)}
                className="font-mono-label flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[var(--ink-muted)] sm:text-sm"
              >
                {PILLARS.map((p, i) => (
                  <span key={p} className="flex items-center gap-2">
                    <span className="text-[var(--ink)]">{p}</span>
                    {i < PILLARS.length - 1 && (
                      <span className="text-[var(--gold)]">·</span>
                    )}
                  </span>
                ))}
              </motion.div>

              <motion.p
                {...fadeUpOnMount(0.58)}
                className="text-balance text-sm leading-relaxed text-[var(--ink-muted)] sm:text-base"
              >
                I build AI, IoT and web systems for governments, startups
                and enterprise clients across the UK, India and the Middle
                East — work that has to hold up in the field, not just in a
                demo.
              </motion.p>

              <motion.div
                {...fadeUpOnMount(0.66)}
                className="flex flex-wrap items-center gap-4"
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 self-start rounded-full bg-[var(--ink)] py-1 pl-5 pr-1 text-sm font-medium text-[var(--void)] transition-all hover:gap-3"
                >
                  Get in touch
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--teal)] transition-transform group-hover:scale-110">
                    <ArrowUpRight className="h-4 w-4 text-[var(--void)]" />
                  </span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
