/**
 * Photos for the hero's centre tile carousel
 * (components/ui/photo-carousel.tsx).
 *
 * Adding, removing or reordering a photo is a data change here, not a JSX
 * change — same rule as lib/projects.ts. Files live in public/images/hero/
 * and are pre-sized to roughly 1400px on the long edge; next/image handles
 * the rest at request time.
 *
 * `fit` defaults to "cover", which is right for the portrait shots. The one
 * landscape frame uses "contain" so the people at the edges don't get
 * cropped out of a portrait tile.
 */
export type HeroPhoto = {
  src: string;
  alt: string;
  caption: string;
  fit?: "cover" | "contain";
};

export const HERO_PHOTOS: HeroPhoto[] = [
  {
    src: "/images/hero/google-natwest-win.webp",
    alt: "Hrishikesh with the SecureFlow AI team in front of a screen reading 'The Secure Intelligence Frontier — Winner: SecureFlow AI'.",
    caption: "SecureFlow AI, winner at Google x NatWest",
  },
  {
    src: "/images/hero/google-london-office.webp",
    alt: "Hrishikesh outside the entrance to Google's London office.",
    caption: "Google London",
  },
  {
    src: "/images/hero/agentic-workflows-talk.webp",
    alt: "Hrishikesh in front of a video wall showing slides titled 'Agentic Workflows For Startup Productivity'.",
    caption: "Agentic workflows for startup productivity",
  },
  {
    src: "/images/hero/google-11th-floor.webp",
    alt: "Hrishikesh in front of an eleventh-floor Google office sign.",
    caption: "On site, 11th floor",
  },
  {
    src: "/images/hero/recognition-ceremony.webp",
    alt: "Hrishikesh being presented with flowers alongside a group in a meeting room.",
    caption: "Recognition ceremony",
    fit: "contain",
  },
  {
    src: "/images/hero/tower-bridge-london.webp",
    alt: "Hrishikesh seated by the Thames with Tower Bridge behind him.",
    caption: "London",
  },
];
