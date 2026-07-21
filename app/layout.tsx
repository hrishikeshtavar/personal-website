import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LiquidGlassFilterDefs } from "@/components/ui/liquid-glass";
import { SiteNav } from "@/components/sections/site-nav";

// Each font is loaded via next/font/google and exposed as a CSS variable
// (--font-display, --font-body, --font-mono), which app/globals.css maps to
// the .font-display / .font-mono-label utility classes used throughout the
// site. next/font needs network access at build time to fetch these — that
// works automatically on Vercel, no setup required.
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

// Page title/description used for the browser tab and link previews (OG/Twitter cards).
export const metadata: Metadata = {
  title: "Hrishikesh Tavar — Product Owner · AI/ML Engineer · Data Analyst · Mentor",
  description:
    "Cross-border technology builder shipping AI, IoT and web systems for governments, startups and enterprise clients across the UK, India and the Middle East.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: next-themes sets the theme class (dark or
    // light) on <html> via an inline script that runs before React
    // hydrates, so the class next-themes applies won't match the
    // server-rendered markup — that mismatch is expected and this tells
    // React not to warn about it.
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {/* Rendered once here — every liquid-glass surface on the site
              references this by id, so it must not be duplicated. */}
          <LiquidGlassFilterDefs />
          <SiteNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
