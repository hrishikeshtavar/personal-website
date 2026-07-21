/**
 * Shared animation variants for framer-motion.
 *
 * Every section on the site uses the same "fade up" entrance — content
 * starts 16px lower and transparent, then eases into place. Two variants
 * exist because *when* that animation should fire differs by position:
 *
 *  - `fadeUpOnMount`  — for content above the fold (the hero). There's no
 *    scrolling involved, so it should just animate in once the page loads.
 *  - `fadeUpOnScroll` — for everything below the fold. It waits until the
 *    element actually scrolls into view, and only plays once.
 */

/** Easing curve used across all entrance animations on the site. */
const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export function fadeUpOnMount(delay = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: EASE_OUT },
  };
}

export function fadeUpOnScroll(delay = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    // `once: true` stops it from re-animating every time you scroll past;
    // the `-80px` margin fires it slightly before the element is fully visible.
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, delay, ease: EASE_OUT },
  };
}
