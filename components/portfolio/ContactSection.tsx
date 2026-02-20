"use client";

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-4 pb-16 pt-8 sm:px-8">
      <motion.div
        className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-zinc-950/85 p-7 sm:p-10"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute -left-20 top-0 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/80">Contact</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
          Let&apos;s craft a standout product.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
          Open for internships, freelance, and full product collaborations. I can
          help you ship premium web experiences with strong UI and code quality.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="mailto:omkar@example.com"
            className="rounded-full border border-cyan-400/45 bg-gradient-to-br from-cyan-800 to-slate-900 px-5 py-2.5 text-sm font-semibold text-cyan-50 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]"
          >
            pawarom2108@gmail.com
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 bg-zinc-900/70 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-400/45 hover:text-cyan-200"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 bg-zinc-900/70 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-400/45 hover:text-cyan-200"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
