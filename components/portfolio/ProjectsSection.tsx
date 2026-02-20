"use client";

import { motion } from "framer-motion";
import { container, item } from "./animations";
import { projects } from "./data";
import { Scroll3DImage } from "./Scroll3DImage";

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/80">
          Selected Work
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
          3D project previews that react on scroll.
        </h2>
      </motion.div>

      <motion.div
        className="mt-8 grid gap-4 md:grid-cols-2"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={item}
            whileHover={{ y: -8, scale: 1.01 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/85 p-5"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.25),transparent_55%)]" />
            </div>
            <div className="relative">
              <Scroll3DImage src={project.image} alt={`${project.title} preview image`} />
              <div className="mt-5 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-zinc-100">{project.title}</h3>
                <span className="text-xs text-zinc-500">{project.year}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-cyan-300/20 bg-cyan-500/10 px-2.5 py-1 text-xs text-cyan-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
