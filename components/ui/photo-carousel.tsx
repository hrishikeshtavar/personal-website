"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { HeroPhoto } from "@/lib/photos";

/**
 * Crossfading photo carousel used inside the hero's centre tile.
 *
 * Behaviour notes, since a carousel is mostly edge cases:
 *  - Autoplay pauses on hover, on keyboard focus, and while the tab is
 *    hidden. It never restarts a timer the user is actively fighting.
 *  - Autoplay is disabled outright under prefers-reduced-motion, and the
 *    crossfade collapses to an instant swap. The arrows and dots still work,
 *    so the content stays reachable.
 *  - Arrow keys step through frames when any control has focus.
 *  - Only the first frame gets `priority`; it sits above the fold and is a
 *    plausible LCP candidate. The rest load lazily.
 *
 * Content lives in lib/photos.ts — this file is layout and behaviour only.
 */
export function PhotoCarousel({
  photos,
  className,
  interval = 5000,
}: {
  photos: HeroPhoto[];
  className?: string;
  interval?: number;
}) {
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const [reducedMotion, setReducedMotion] = React.useState(false);

  const count = photos.length;
  const go = React.useCallback(
    (step: number) => setIndex((i) => (i + step + count) % count),
    [count]
  );

  React.useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  React.useEffect(() => {
    if (paused || reducedMotion || count < 2) return;
    const id = window.setInterval(() => go(1), interval);
    return () => window.clearInterval(id);
  }, [paused, reducedMotion, count, interval, go]);

  React.useEffect(() => {
    const onVisibility = () =>
      setPaused(document.visibilityState !== "visible");
    document.addEventListener("visibilitychange", onVisibility);
    return () =>
      document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      go(1);
    }
  };

  if (count === 0) return null;
  const active = photos[index];
  const duration = reducedMotion ? 0 : 0.7;

  return (
    <div
      className={cn("group relative h-full w-full overflow-hidden", className)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Photos"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onKeyDown={onKeyDown}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={active.src}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration, ease: "easeInOut" }}
        >
          <Image
            src={active.src}
            alt={active.alt}
            fill
            priority={index === 0}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className={cn(
              active.fit === "contain" ? "object-contain" : "object-cover",
              "object-center"
            )}
          />
        </motion.div>
      </AnimatePresence>

      {/* Caption scrim — keeps the label readable over a bright frame. */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent"
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
        <p className="font-mono-label max-w-[60%] text-[10px] uppercase leading-snug tracking-[0.15em] text-white/90">
          {active.caption}
        </p>
        <div className="flex items-center gap-1.5" aria-hidden="true">
          {photos.map((photo, i) => (
            <span
              key={photo.src}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === index ? "w-4 bg-white" : "w-1.5 bg-white/40"
              )}
            />
          ))}
        </div>
      </div>

      {/* Arrows stay hidden until hover or keyboard focus so the tile reads
          as a photo first and a widget second. */}
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 opacity-0 transition-opacity duration-200 focus-within:opacity-100 group-hover:opacity-100">
        <CarouselButton label="Previous photo" onClick={() => go(-1)}>
          <ChevronLeft className="h-4 w-4" />
        </CarouselButton>
        <CarouselButton label="Next photo" onClick={() => go(1)}>
          <ChevronRight className="h-4 w-4" />
        </CarouselButton>
      </div>

      {/* Announces frame changes without moving focus. */}
      <span className="sr-only" aria-live="polite">
        {`Photo ${index + 1} of ${count}: ${active.caption}`}
      </span>
    </div>
  );
}

function CarouselButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="pointer-events-auto grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--teal)]"
    >
      {children}
    </button>
  );
}
