"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

/**
 * Wraps next-themes so app/layout.tsx doesn't need "use client" itself.
 * attribute="class" toggles a .light class on <html> (dark has no class —
 * it's the :root default in globals.css, .light overrides it).
 */
export function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
