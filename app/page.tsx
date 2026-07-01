"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, Link2, Code2, ArrowUpRight } from "lucide-react";
import { useState } from "react";

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
      {/* Backdrop: real field/deployment photos, scrimmed for legibility */}
      <div className="absolute inset-0">
        <Image
          src="/images/backdrop.png"
          alt=""
          fill
          priority
          className="object-cover opacity-[0.28]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--void)] via-[var(--void)]/85 to-[var(--void)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--void)] via-[var(--void)]/40 to-transparent" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Top mark */}
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-10 sm:px-10">
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

        {/* Hero */}
        <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-20 sm:px-10">
          <motion.p
            {...fadeUp(0.1)}
            className="font-mono-label text-xs uppercase tracking-[0.25em] text-[var(--teal)]"
          >
            Cross-border technology practice
          </motion.p>

          <motion.h1
            {...fadeUp(0.18)}
            className="font-display mt-5 text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl"
          >
            Hrishikesh
            <br />
            Tavar
          </motion.h1>

          <motion.div
            {...fadeUp(0.28)}
            className="font-mono-label mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-[var(--ink-muted)] sm:text-base"
          >
            {PILLARS.map((p, i) => (
              <span key={p} className="flex items-center gap-3">
                <span className="text-[var(--ink)]">{p}</span>
                {i < PILLARS.length - 1 && (
                  <span className="text-[var(--gold)]">·</span>
                )}
              </span>
            ))}
          </motion.div>

          <motion.p
            {...fadeUp(0.36)}
            className="mt-8 max-w-2xl text-balance text-base leading-relaxed text-[var(--ink-muted)] sm:text-lg"
          >
            I build AI, IoT and web systems for governments, startups and
            enterprise clients across the UK, India and the Middle East —
            work that has to hold up in the field, not just in a demo.
            Currently pairing that practice with an MSc in Business Analytics
            at Warwick.
          </motion.p>

          {/* Stats */}
          <motion.div
            {...fadeUp(0.46)}
            className="mt-14 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-[var(--panel-line)] pt-8 sm:grid-cols-4"
          >
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
          </motion.div>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.54)}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-medium text-[var(--void)] transition-colors hover:bg-[var(--teal)]"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="mailto:hrishikesh.tavar@gmail.com"
              className="font-mono-label text-sm text-[var(--ink-muted)] underline decoration-[var(--panel-line)] underline-offset-4 transition-colors hover:text-[var(--ink)]"
            >
              hrishikesh.tavar@gmail.com
            </a>
          </motion.div>
        </section>

        {/* Coming soon strip */}
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
