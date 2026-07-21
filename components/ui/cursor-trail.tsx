"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Ambient, cursor-reactive glowing "tubes" effect (three.js under the hood,
 * via the threejs-components package). Recoloured to the site's teal/gold
 * palette — the library's default is a rainbow neon look that doesn't match
 * the rest of the site.
 *
 * Mounted once at the root (app/layout.tsx) as a `fixed` full-viewport
 * layer behind every section, so it's visible consistently as you scroll
 * the whole site rather than confined to one section's box. For it to
 * actually show through, anything painted on top needs to be transparent
 * where there's no real content — see the removed `bg-[var(--void)]` on
 * `<main>` and the hero's panel wrapper, both of which used to sit as
 * opaque layers directly on top of this and would otherwise hide it
 * completely outside the hero.
 *
 * Opacity is intentionally low (20%) — it now sits behind text-heavy
 * sections like Skills and Experience, not just the hero, so it needs to
 * stay a subtle wash rather than something that competes with reading the
 * page.
 *
 * Known limitation: the colours below are tuned for the dark theme and
 * don't yet react to the light/dark toggle — dark is the default theme, so
 * this hasn't been a priority, but it's a real gap if that changes.
 *
 * Skipped entirely on touch devices (no cursor to react to) and under
 * prefers-reduced-motion.
 */
export function CursorTrail({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [enabled, setEnabled] = useState(false);

  // Decide once, on mount, whether this device/preference combination
  // should get the effect at all.
  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setEnabled(!isTouch && !reducedMotion);
  }, []);

  useEffect(() => {
    if (!enabled || !canvasRef.current) return;

    let app: { dispose?: () => void } | undefined;
    let cancelled = false;

    // Dynamic import so this ~250KB bundle only loads for visitors who'll
    // actually see it, and doesn't block the rest of the page's JS.
    import("threejs-components/build/cursors/tubes1.min.js").then(
      ({ default: TubesCursor }) => {
        if (cancelled || !canvasRef.current) return;
        app = TubesCursor(canvasRef.current, {
          tubes: {
            // Mapped to the site's dark-theme CSS variable values
            // (--teal, --gold, --panel-line) rather than the library's
            // default rainbow neon palette.
            colors: ["#56c2ab", "#cc9f56", "#23293e"],
            lights: {
              intensity: 120,
              colors: ["#56c2ab", "#cc9f56", "#9aa2b8", "#0a0e1a"],
            },
          },
        });
      }
    );

    return () => {
      cancelled = true;
      app?.dispose?.();
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 opacity-20",
        className
      )}
    />
  );
}
