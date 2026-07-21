import { CERTIFICATES } from "@/lib/certificates";

/**
 * Certificates grid. Dates are marked "TBC" in the data rather than
 * invented — see lib/certificates.ts. Swap them in once Hrishi confirms
 * exact issue dates.
 */
export function CertificatesSection() {
  return (
    <section
      id="certifications"
      className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10"
    >
      <p className="font-mono-label mb-3 text-xs uppercase tracking-[0.25em] text-[var(--teal)]">
        Credentials
      </p>
      <h2 className="font-display text-2xl font-semibold sm:text-3xl">
        Certificates.
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {CERTIFICATES.map((cert) => (
          <div
            key={cert.name}
            className="flex flex-col gap-2 rounded-2xl border border-[var(--panel-line)] bg-[var(--panel)] p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-sm font-semibold text-[var(--ink)] sm:text-base">
                {cert.name}
              </h3>
              <span
                className={
                  "font-mono-label shrink-0 rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wide " +
                  (cert.status === "Certified"
                    ? "border-[var(--teal)]/40 text-[var(--teal)]"
                    : "border-[var(--gold)]/40 text-[var(--gold)]")
                }
              >
                {cert.status}
              </span>
            </div>
            <p className="text-xs text-[var(--ink-muted)]">
              {cert.issuer} · {cert.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
