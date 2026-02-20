"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { memo, useEffect, useState } from "react";
import { container, item } from "./animations";

export const HeroSection = memo(function HeroSection() {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setShowBackground(true);
    }, 350);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <motion.section
      id="home"
      className="relative mx-auto grid w-full max-w-6xl gap-9 overflow-hidden rounded-3xl px-4 pb-14 pt-20 sm:px-8 sm:pt-24 md:grid-cols-[1.15fr_0.85fr] md:items-end md:pt-28"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        {showBackground ? (
          <Image
            src="/bg.png"
            alt=""
            fill
            aria-hidden
            className="object-cover opacity-45"
            sizes="100vw"
            quality={45}
            loading="lazy"
            fetchPriority="low"
            decoding="async"
          />
        ) : null}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,2,3,0.2),rgba(2,2,3,0.72))]" />
      </div>

      <motion.div variants={item} className="relative z-10">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/80">
          Minimal. Modern. Fast.
        </p>
        <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-zinc-100 sm:text-5xl md:text-6xl">
          MERN stack portfolio with neon-black visuals.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          I build modern full-stack web apps using MongoDB, Express, React, and
          Node.js with performance-focused architecture.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="rounded-full border border-cyan-400/45 bg-gradient-to-br from-cyan-800 to-slate-900 px-5 py-2.5 text-sm font-semibold text-cyan-50 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]"
            href="#projects"
          >
            View Projects
          </a>
          <a
            className="rounded-full border border-white/20 bg-zinc-900/70 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-400/45 hover:text-cyan-200"
            href="#contact"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={item}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25 }}
        className="relative z-10 overflow-hidden rounded-2xl border border-cyan-500/20 bg-zinc-900/70 p-6 shadow-[0_0_40px_-20px_rgba(8,145,178,0.65)]"
      >
        <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="relative flex items-start gap-4">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-cyan-400/35">
            <Image
              src="/profile.png"
              alt="Omkar profile picture"
              fill
              className="object-cover object-top"
              sizes="80px"
            />
          </div>
          <div>
            <p className="text-sm text-zinc-400">Current Focus</p>
            <p className="mt-2 text-xl font-semibold text-zinc-100">
              MERN products and scalable APIs
            </p>
          </div>
        </div>
        <div className="mt-6 space-y-3 text-sm text-zinc-400">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span>Role</span>
            <span className="text-zinc-200">MERN Stack Developer</span>
          </div>
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span>Stack</span>
            <span className="text-right text-zinc-200">MongoDB + Express + React + Node</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Availability</span>
            <span className="text-zinc-200">Internships / Freelance</span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
});
