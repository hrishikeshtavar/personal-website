/** Sign-off footer: copyright and base location. Static — Server Component. */
export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-6 pb-10 sm:px-10">
      <div className="border-t border-[var(--panel-line)] pt-6 font-mono-label text-xs text-[var(--ink-muted)]">
        © {new Date().getFullYear()} Hrishikesh Tavar. Based in Coventry,
        UK — delivery HQ in Pune, India.
      </div>
    </footer>
  );
}
