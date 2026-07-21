/**
 * Thin banner flagging which parts of the site are still being built.
 * Update or remove the copy here as those pieces ship — Projects shipped
 * July 2026, so it's already been trimmed off this list once.
 */
export function StatusBanner() {
  return (
    <div className="border-t border-[var(--panel-line)] bg-[var(--panel)]/60 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-2 px-6 py-4 text-xs text-[var(--ink-muted)] sm:flex-row sm:items-center sm:px-10">
        <span className="font-mono-label tracking-[0.15em]">
          FULL SITE IN PROGRESS
        </span>
        <span>
          Role-based filtering and mentorship programme details are on
          the way.
        </span>
      </div>
    </div>
  );
}
