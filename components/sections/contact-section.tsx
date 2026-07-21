"use client";

import { useState, type FormEvent } from "react";
import { CONTACT_LINKS } from "@/lib/site-content";
import { CursorTrail } from "@/components/ui/cursor-trail";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

const EMPTY_FORM: FormState = { name: "", email: "", message: "" };

/**
 * Contact section: static contact-method cards on the left, a controlled
 * form on the right. The form posts to /api/contact, which relays the
 * message through Resend — see app/api/contact/route.ts.
 *
 * Also hosts the ambient cursor-trail background effect (CursorTrail) —
 * this section was picked because it's otherwise a plain panel with no
 * competing imagery, unlike the hero (real video) or Projects (dense cards).
 */
export function ContactSection() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setForm(EMPTY_FORM);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  return (
    // Full-bleed wrapper so the background effect spans edge-to-edge behind
    // the centered content, rather than being clipped to the max-w-6xl box.
    <div className="relative w-full overflow-hidden">
      <CursorTrail />

      <section
        id="contact"
        className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20 sm:px-10"
      >
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">
          Let&rsquo;s talk.
        </h2>
        <p className="mt-3 max-w-xl text-sm text-[var(--ink-muted)] sm:text-base">
          Reach out directly, or send a note below — it opens straight in
          your email client for now.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {/* Static contact method cards, driven by CONTACT_LINKS in lib/site-content.ts */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {CONTACT_LINKS.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="group flex flex-col gap-3 rounded-2xl border border-[var(--panel-line)] bg-[var(--panel)] p-5 transition-colors hover:border-[var(--teal)]/50"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--void)] text-[var(--teal)]">
                  <Icon className="h-4 w-4" />
                </span>
                <span>
                  <span className="font-mono-label block text-xs uppercase tracking-[0.15em] text-[var(--ink-muted)]">
                    {label}
                  </span>
                  <span className="mt-1 block text-sm text-[var(--ink)]">
                    {value}
                  </span>
                </span>
              </a>
            ))}
          </div>

          {/* Controlled contact form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-2xl border border-[var(--panel-line)] bg-[var(--panel)] p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5 text-xs text-[var(--ink-muted)]">
                Name
                <input
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  className="rounded-lg border border-[var(--panel-line)] bg-[var(--void)] px-3 py-2 text-sm text-[var(--ink)] outline-none focus:border-[var(--teal)]"
                  placeholder="Your name"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-xs text-[var(--ink-muted)]">
                Email
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  className="rounded-lg border border-[var(--panel-line)] bg-[var(--void)] px-3 py-2 text-sm text-[var(--ink)] outline-none focus:border-[var(--teal)]"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="flex flex-col gap-1.5 text-xs text-[var(--ink-muted)]">
              Message
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
                className="resize-none rounded-lg border border-[var(--panel-line)] bg-[var(--void)] px-3 py-2 text-sm text-[var(--ink)] outline-none focus:border-[var(--teal)]"
                placeholder="What are you working on?"
              />
            </label>
            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--teal)] px-6 py-2.5 text-sm font-medium text-[var(--void)] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Sending…" : "Send message"}
            </button>
            {status === "success" && (
              <p className="text-sm text-[var(--teal)]">
                Thanks — your message is on its way.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400">
                {errorMessage || "Something went wrong. Please try again."}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
