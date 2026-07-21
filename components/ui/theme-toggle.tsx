"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

/**
 * Sun/moon toggle for the SiteNav. Renders a neutral placeholder until
 * mounted — next-themes can't know the active theme on the server (it lives
 * in localStorage), so rendering the real icon before hydration would risk
 * a mismatch between server and client output.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      aria-label="Toggle light and dark theme"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[var(--ink-muted)] transition-colors hover:bg-[var(--glass-border)] hover:text-[var(--ink)]"
    >
      {mounted && resolvedTheme === "light" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </button>
  );
}
