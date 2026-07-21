"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * "Apple liquid glass" effect: a frosted panel (standard cross-browser
 * backdrop-blur) with an additional liquid-ripple distortion layered on top
 * via an SVG turbulence + displacement filter, referenced through
 * backdrop-filter: url(#liquid-glass-filter).
 *
 * The ripple layer is additive, not load-bearing — browsers that don't
 * support SVG filters inside backdrop-filter (notably Firefox, and older
 * Safari) simply drop that one declaration and fall back to the plain
 * blurred-glass look from LiquidGlass itself. Nothing breaks either way.
 *
 * LiquidGlassFilterDefs renders the shared <filter> definition and must be
 * mounted exactly once, near the root of the app (see app/layout.tsx) —
 * every glass surface on the page references the same id, so rendering it
 * more than once would create conflicting ids.
 */
export function LiquidGlassFilterDefs() {
  return (
    <svg aria-hidden="true" className="absolute h-0 w-0 overflow-hidden">
      <filter
        id="liquid-glass-filter"
        x="-20%"
        y="-20%"
        width="140%"
        height="140%"
        colorInterpolationFilters="sRGB"
      >
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.008 0.008"
          numOctaves="2"
          seed="6"
          result="turbulence"
        />
        <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
        <feDisplacementMap
          in="SourceGraphic"
          in2="blurredNoise"
          scale="18"
          xChannelSelector="R"
          yChannelSelector="B"
        />
      </filter>
    </svg>
  );
}

const glassSurfaceVariants = cva(
  "relative overflow-hidden border backdrop-blur-xl",
  {
    variants: {
      rounded: {
        tile: "rounded-2xl",
        pill: "rounded-full",
      },
    },
    defaultVariants: { rounded: "tile" },
  }
);

export interface LiquidGlassProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassSurfaceVariants> {
  /**
   * Classes for the content wrapper (flex/gap/padding/alignment). Keep
   * `className` for sizing/positioning that needs to reach the outermost
   * node instead (h-full, min-h-*, grid placement) — those only work
   * correctly on the element the parent grid/flex context actually sizes.
   * Mixing the two up is exactly what broke the nav: flex classes landed on
   * the outer surface while the children rendered one level deeper, inside
   * the content wrapper, so they never actually laid out in a row.
   */
  contentClassName?: string;
}

/** Base frosted-glass surface. Used directly for tiles/nav, and as the
 * wrapper underneath LiquidGlassButton. */
export const LiquidGlass = React.forwardRef<HTMLDivElement, LiquidGlassProps>(
  ({ className, contentClassName, rounded, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        glassSurfaceVariants({ rounded }),
        "border-[var(--glass-border)] bg-[var(--glass-bg)]",
        className
      )}
      {...props}
    >
      {/* Liquid ripple layer — see the note on LiquidGlassFilterDefs above */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ backdropFilter: "url(#liquid-glass-filter)" }}
      />
      {/* Inner highlight/shadow, same trick the original snippet used to
          sell the "glass edge" look — tinted per-theme via --glass-highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{
          boxShadow:
            "inset 0 1px 0 var(--glass-highlight), inset 0 -1px 0 var(--glass-border)",
        }}
      />
      <div className={cn("relative h-full", contentClassName)}>
        {children}
      </div>
    </div>
  )
);
LiquidGlass.displayName = "LiquidGlass";

const glassButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium text-[var(--ink)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
      },
    },
    defaultVariants: { size: "default" },
  }
);

export interface LiquidGlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glassButtonVariants> {
  /** Render as the child element instead of a <button> — e.g. asChild with
   * an <a> for the hero CTA, so it navigates rather than needing JS. */
  asChild?: boolean;
}

/** Liquid-glass button: a LiquidGlass pill wrapping an actual interactive
 * element, so it gets real button/link semantics rather than a styled div. */
export const LiquidGlassButton = React.forwardRef<
  HTMLButtonElement,
  LiquidGlassButtonProps
>(({ className, size, asChild = false, children, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <LiquidGlass rounded="pill" className="inline-flex w-fit">
      <Comp
        ref={ref}
        className={cn(glassButtonVariants({ size }), className)}
        {...props}
      >
        {children}
      </Comp>
    </LiquidGlass>
  );
});
LiquidGlassButton.displayName = "LiquidGlassButton";
