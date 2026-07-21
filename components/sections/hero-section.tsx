"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Gamepad2,
  Quote as QuoteIcon,
  ArrowUpRight,
  Cpu,
} from "lucide-react";
import { WordsPullUp } from "@/components/ui/words-pull-up";
import { LiquidGlass, LiquidGlassButton } from "@/components/ui/liquid-glass";
import { CursorTrail } from "@/components/ui/cursor-trail";
import { fadeUpOnMount } from "@/lib/motion";
import { PILLARS } from "@/lib/site-content";

/**
 * Full-height hero: a bento grid of six liquid-glass tiles (name, photo,
 * bio, interest, quote, location) over a flat background with the
 * cursor-reactive tube effect as the sole ambient motion — no video, no
 * gradient overlay.
 *
 * Grid is a plain 3-column layout (lg and up), tiles in DOM order — Name,
 * Photo, Bio on row one, Interest, Quote, Location on row two. No explicit
 * row/column spanning: row one just reads as "tall" because the Photo
 * tile's min-height is the largest in that row, and CSS Grid's default
 * align-items: stretch makes every item in the row match it. That's what
 * actually produces the reference's look — not a spanning trick.
 *
 * Two tiles are placeholders pending real content from Hrishi:
 *  - Photo tile: no headshot has been provided yet.
 *  - Quote tile: no personal quote/motto has been provided yet.
 *
 * `id="home"` is the anchor target for the persistent SiteNav's logo link.
 */
export function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen w-full px-3 pt-3 sm:px-4 sm:pt-4"
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-[var(--panel-line)] bg-[var(--void)] md:rounded-[2rem]">
        <CursorTrail />

        <div className="relative z-10 flex h-full w-full items-center px-6 py-28 sm:px-10">
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Name tile */}
            <motion.div {...fadeUpOnMount(0)}>
              <LiquidGlass
                className="h-full min-h-[220px]"
                contentClassName="flex h-full flex-col justify-end gap-3 p-6 sm:p-8"
              >
                <p className="flex items-center gap-2 font-mono-label text-xs uppercase tracking-[0.25em] text-[var(--teal)]">
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--teal)]"
                    aria-hidden="true"
                  />
                  Cross-border technology practice
                </p>
                <h1 className="font-display text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-[var(--ink)] sm:text-5xl">
                  <WordsPullUp text="Hrishikesh Tavar" delayOffset={0.1} />
                </h1>
                <div
                  className="mt-1 h-0.5 w-12 bg-[var(--teal)]"
                  aria-hidden="true"
                />
              </LiquidGlass>
            </motion.div>

            {/* Photo tile — tallest content in row one, so it drives the
                row's stretched height; placeholder until a headshot exists */}
            <motion.div {...fadeUpOnMount(0.08)}>
              <LiquidGlass
                className="h-full min-h-[380px] border-dashed"
                contentClassName="flex h-full items-center justify-center p-4"
              >
                <div className="flex flex-col items-center gap-1 text-center text-[var(--ink-muted)]">
                  <span className="font-mono-label text-[10px] uppercase tracking-[0.15em]">
                    Photo placeholder
                  </span>
                  <span className="text-xs">
                    Send a headshot to fill this in
                  </span>
                </div>
              </LiquidGlass>
            </motion.div>

            {/* Bio tile */}
            <motion.div {...fadeUpOnMount(0.16)}>
              <LiquidGlass
                className="h-full min-h-[220px]"
                contentClassName="flex h-full flex-col justify-start gap-3 p-6 sm:p-8"
              >
                <span className="flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-[var(--teal)]" />
                  <span className="font-mono-label text-[10px] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
                    What I do
                  </span>
                </span>
                <p className="text-sm leading-relaxed text-[var(--ink-muted)] sm:text-base">
                  I build AI, IoT and web systems for governments, startups
                  and enterprise clients across the UK, India and the Middle
                  East — work that has to hold up in the field, not just in
                  a demo.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {PILLARS.map((p) => (
                    <span
                      key={p}
                      className="font-mono-label rounded-full border border-[var(--glass-border)] px-2.5 py-0.5 text-[10px] tracking-wide text-[var(--ink-muted)]"
                    >
                      {p}
                    </span>
                  ))}
                </div>
                <LiquidGlassButton asChild size="sm" className="mt-1">
                  <a href="#contact" className="group">
                    Get in touch
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </LiquidGlassButton>
              </LiquidGlass>
            </motion.div>

            {/* Interest tile — cooperative gaming, per the interests on
                file; swap if a different one should be featured */}
            <motion.div {...fadeUpOnMount(0.24)}>
              <LiquidGlass
                className="h-full min-h-[160px]"
                contentClassName="flex h-full flex-col justify-center gap-2 p-6"
              >
                <Gamepad2 className="h-4 w-4 text-[var(--teal)]" />
                <span className="font-mono-label text-[10px] uppercase tracking-[0.15em] text-[var(--ink-muted)]">
                  Off the clock
                </span>
                <p className="text-sm text-[var(--ink)]">
                  Cooperative gaming — strategy and teamwork away from the
                  keyboard.
                </p>
              </LiquidGlass>
            </motion.div>

            {/* Quote tile — placeholder, no personal quote on file yet */}
            <motion.div {...fadeUpOnMount(0.3)}>
              <LiquidGlass
                className="h-full min-h-[160px] border-dashed"
                contentClassName="flex h-full flex-col justify-center gap-2 p-6"
              >
                <QuoteIcon className="h-4 w-4 text-[var(--gold)]" />
                <p className="text-balance text-sm italic text-[var(--ink-muted)]">
                  Your quote goes here — send me the words and I&rsquo;ll
                  swap this in.
                </p>
              </LiquidGlass>
            </motion.div>

            {/* Location tile */}
            <motion.div {...fadeUpOnMount(0.36)}>
              <LiquidGlass
                className="h-full min-h-[160px]"
                contentClassName="flex h-full flex-col justify-center gap-2 p-6"
              >
                <MapPin className="h-4 w-4 text-[var(--gold)]" />
                <span className="font-mono-label text-[10px] uppercase tracking-[0.15em] text-[var(--ink-muted)]">
                  Location
                </span>
                <span className="text-sm text-[var(--ink)] sm:text-base">
                  UK · India · Middle East
                </span>
              </LiquidGlass>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
