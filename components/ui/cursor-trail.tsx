"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Ambient, cursor-reactive glowing "tubes" effect (three.js under the hood,
 * via the threejs-components package). Recoloured to the site's teal/gold
 * palette — the library's default is a rainbow neon look that doesn't match
 * the rest of the site.
 *
 * Lives in the Hero as its sole background (the video that used to be there
 * was removed). Rendered as an absolutely positioned layer by its parent —
 * give the parent `relative` and size it explicitly.
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
        "pointer-events-none absolute inset-0 h-full w-full opacity-60",
        className
      )}
    />
  );
}
