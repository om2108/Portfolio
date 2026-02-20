"use client";

import { motion } from "framer-motion";
import { skills } from "./data";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-12 sm:px-8 md:grid-cols-[0.9fr_1.1fr]"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/80">
          Core Stack
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
          Built for speed, polish, and scale.
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
          I balance accessibility, performance, and visual identity with clean
          component systems and production-ready engineering workflows.
        </p>
      </motion.div>

      <motion.div
        className="rounded-2xl border border-white/10 bg-zinc-950/80 p-6"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
      >
        <div className="flex flex-wrap gap-2.5">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.25 }}
              className="rounded-full border border-white/10 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-300"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
