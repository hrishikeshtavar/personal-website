import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names, resolving conflicting Tailwind utilities (e.g.
 * cn("px-4", "px-2") -> "px-2") rather than leaving both in the string.
 * Standard shadcn/ui convention — used by the liquid-glass components.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
