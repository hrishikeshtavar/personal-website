"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, Link2, Code2, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { WordsPullUp } from "@/components/ui/words-pull-up";

const PILLARS = ["Product Owner", "AI/ML Engineer", "Data Analyst", "Mentor"];

const STATS = [
  { value: "25+", label: "Engineers led" },
  { value: "80%", label: "Client retention" },
  { value: "30%", label: "YoY revenue growth" },
  { value: "1st", label: "Google Cloud × NatWest Hackathon" },
];

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: "hrishikesh.tavar@gmail.com",
    href: "mailto:hrishikesh.tavar@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+44 7522 966058",
    href: "tel:+447522966058",
  },
  {
    icon: Link2,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "#", // TODO: add real LinkedIn URL
  },
  {
    icon: Code2,
    label: "GitHub",
    value: "Explore on GitHub",
    href: "#", // TODO: add real GitHub URL
  },
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  };
}

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio enquiry from ${form.name || "website visitor"}`
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:hrishikesh.tavar@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--void)]">
      {/* Hero: full-height, framed, bottom-anchored */}
      <section className="relative h-screen w-full px-3 pt-3 sm:px-4 sm:pt-4">
        <div className="relative h-full w-full overflow-hidden rounded-2xl border border-[var(--panel-line)] md:rounded-[2rem]">
          {/* Backdrop: background video + noise texture */}
          <div className="absolute inset-0 bg-[var(--void)]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
            />
            <div
              className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-overlay"
              aria-hidden="true"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--void)]/30 via-transparent to-[var(--void)]/85" />
          </div>

          {/* Top mark */}
          <header className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 pt-6 sm:px-10 sm:pt-8">
            <motion.span
              {...fadeUp(0)}
              className="font-mono-label text-xs tracking-[0.2em] text-[var(--ink-muted)]"
            >
              HT / 2026
            </motion.span>
            <motion.span
              {...fadeUp(0.05)}
              className="font-mono-label text-xs tracking-[0.2em] text-[var(--ink-muted)]"
            >
              UK · INDIA · MIDDLE EAST
            </motion.span>
          </header>

          {/* Bottom-anchored content */}
          <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-8 sm:px-10 sm:pb-10">
            <div className="grid grid-cols-12 items-end gap-6">
              <div className="col-span-12 lg:col-span-8">
                <p className="font-mono-label mb-3 text-xs uppercase tracking-[0.25em] text-[var(--teal)]">
                  Cross-border technology practice
                </p>
                <h1 className="font-display text-balance text-[13vw] font-semibold leading-[0.92] tracking-tight text-[var(--ink)] sm:text-[10vw] lg:text-[7.5vw]">
                  <WordsPullUp text="Hrishikesh Tavar" delayOffset={0.1} />
                </h1>
              </div>

              <div className="col-span-12 flex flex-col gap-5 rounded-2xl border border-[var(--panel-line)] bg-[var(--panel)]/70 p-5 backdrop-blur-md sm:p-6 lg:col-span-4">
                <motion.div
                  {...fadeUp(0.5)}
                  className="font-mono-label flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[var(--ink-muted)] sm:text-sm"
                >
                  {PILLARS.map((p, i) => (
                    <span key={p} className="flex items-center gap-2">
                      <span className="text-[var(--ink)]">{p}</span>
                      {i < PILLARS.length - 1 && (
                        <span className="text-[var(--gold)]">·</span>
                      )}
                    </span>
                  ))}
                </motion.div>

                <motion.p
                  {...fadeUp(0.58)}
                  className="text-balance text-sm leading-relaxed text-[var(--ink)] sm:text-base"
                >
                  I build AI, IoT and web systems for governments, startups
                  and enterprise clients across the UK, India and the Middle
                  East — work that has to hold up in the field, not just in a
                  demo.
                </motion.p>

                <motion.div
                  {...fadeUp(0.66)}
                  className="flex flex-wrap items-center gap-4"
                >
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-2 self-start rounded-full bg-[var(--ink)] py-1 pl-5 pr-1 text-sm font-medium text-[var(--void)] transition-all hover:gap-3"
                  >
                    Get in touch
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--teal)] transition-transform group-hover:scale-110">
                      <ArrowUpRight className="h-4 w-4 text-[var(--void)]" />
                    </span>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 flex flex-col">
        {/* Stats */}
        <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10">
          <div className="grid grid-cols-2 gap-x-8 gap-y-8 border-t border-[var(--panel-line)] pt-8 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-semibold text-[var(--gold)] sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs leading-snug text-[var(--ink-muted)] sm:text-sm">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Field proof — contained, framed photo strip */}
        <section className="mx-auto w-full max-w-4xl px-6 pb-16 sm:px-10">
          <div className="overflow-hidden rounded-2xl border border-[var(--panel-line)]">
            <Image
              src="/images/backdrop.png"
              alt="Field deployments across Google HQ London, the Indian Army, the Maharashtra Forest Department, and client sites in the UK and India"
              width={1920}
              height={1080}
              className="h-auto w-full object-cover"
            />
          </div>
          <p className="font-mono-label mt-3 text-center text-xs tracking-[0.1em] text-[var(--ink-muted)]">
            Google HQ · Indian Army · Maharashtra Forest Dept. · client sites — UK &amp; India
          </p>
        </section>
        <div className="border-t border-[var(--panel-line)] bg-[var(--panel)]/60 backdrop-blur-sm">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-2 px-6 py-4 text-xs text-[var(--ink-muted)] sm:flex-row sm:items-center sm:px-10">
            <span className="font-mono-label tracking-[0.15em]">
              FULL SITE IN PROGRESS
            </span>
            <span>
              Project write-ups, role-based filtering and mentorship
              programme details are on the way.
            </span>
          </div>
        </div>

        {/* Contact */}
        <section
          id="contact"
          className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10"
        >
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Let&rsquo;s talk.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-[var(--ink-muted)] sm:text-base">
            Reach out directly, or send a note below — it opens straight in
            your email client for now.
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
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
                className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--teal)] px-6 py-2.5 text-sm font-medium text-[var(--void)] transition-opacity hover:opacity-90"
              >
                Send message
              </button>
            </form>
          </div>
        </section>

        <footer className="mx-auto w-full max-w-6xl px-6 pb-10 sm:px-10">
          <div className="border-t border-[var(--panel-line)] pt-6 font-mono-label text-xs text-[var(--ink-muted)]">
            © {new Date().getFullYear()} Hrishikesh Tavar. Based in Coventry,
            UK — delivery HQ in Pune, India.
          </div>
        </footer>
      </div>
    </main>
  );
}
