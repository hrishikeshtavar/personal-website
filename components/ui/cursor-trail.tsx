"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Ambient, cursor-reactive glowing "tubes" effect (three.js under the hood,
 * via the threejs-components package). Recoloured to the site's teal/gold/
 * void palette — the library's default is a rainbow neon look that doesn't
 * match the rest of the site.
 *
 * Deliberately scoped to a single section (rendered as an absolutely
 * positioned layer by its parent — see ContactSection) rather than the
 * whole page: it's a ~250KB (gzipped) three.js bundle doing continuous
 * WebGL rendering, so keeping it to one section limits both the bundle
 * cost (code-split via dynamic import, only fetched if the effect will
 * actually render) and the ongoing GPU/battery cost of rendering it for
 * the entire time someone is on the page.
 *
 * Skipped entirely on touch devices (no cursor to react to) and under
 * prefers-reduced-motion.
 */
export function CursorTrail() {
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
            // Mapped to the site's CSS variables (--teal, --gold, --panel-line)
            // rather than the library's default rainbow neon palette.
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
      className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
    />
  );
}
