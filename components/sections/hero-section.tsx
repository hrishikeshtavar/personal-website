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
 * The grid (lg and up) is an explicit 12-column layout with each tile given
 * its own row-span, not a uniform 3-equal-thirds grid — that's what
 * actually produces an irregular "bento jumble" look instead of a plain
 * rectangle grid. Row unit is 46px (see lg:auto-rows-[46px]); a tile's
 * height is span-count × 46px plus the gaps it crosses. Photo is the
 * tallest (row-span-7), Interest is deliberately taller than Quote/Location
 * (row-span-5 vs 3) so the bottom of the grid staggers rather than lining
 * up — mirroring how the reference's Mindset tile runs taller than Quote/
 * Location because of its nested second image.
 *
 * Below lg, all of that is ignored — items just stack in DOM order in a
 * single (or 2-up) column, since the span/col-start classes are lg:-only.
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

        <div className="relative z-10 flex h-full w-full items-center overflow-y-auto px-6 py-28 sm:px-10">
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[46px]">
            {/* Name tile — top-left, medium height */}
            <motion.div
              {...fadeUpOnMount(0)}
              className="lg:col-span-4 lg:col-start-1 lg:row-span-4 lg:row-start-1"
            >
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

            {/* Photo tile — tallest tile in the grid, center column;
                placeholder until a headshot exists */}
            <motion.div
              {...fadeUpOnMount(0.08)}
              className="lg:col-span-4 lg:col-start-5 lg:row-span-7 lg:row-start-1"
            >
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

            {/* Bio tile — top-right, same height as Name */}
            <motion.div
              {...fadeUpOnMount(0.16)}
              className="lg:col-span-4 lg:col-start-9 lg:row-span-4 lg:row-start-1"
            >
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

            {/* Interest tile — bottom-left, deliberately taller than Quote/
                Location so the grid staggers instead of lining up evenly.
                Cooperative gaming, per the interests on file; swap if a
                different one should be featured */}
            <motion.div
              {...fadeUpOnMount(0.24)}
              className="lg:col-span-4 lg:col-start-1 lg:row-span-5 lg:row-start-5"
            >
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

            {/* Quote tile — bottom-right, upper half; placeholder, no
                personal quote on file yet */}
            <motion.div
              {...fadeUpOnMount(0.3)}
              className="lg:col-span-4 lg:col-start-9 lg:row-span-3 lg:row-start-5"
            >
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

            {/* Location tile — bottom-right, lower half */}
            <motion.div
              {...fadeUpOnMount(0.36)}
              className="lg:col-span-4 lg:col-start-9 lg:row-span-3 lg:row-start-8"
            >
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
