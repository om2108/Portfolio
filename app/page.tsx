"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "OneGate - Real Estate & Society Management System",
    description:
      "Full-stack web application for property and society management featuring secure authentication, resident workflows, billing automation, and admin dashboards.",
    stack: ["React", "Java", "Spring Boot", "MongoDB", "REST APIs", "JWT Auth"],
    year: "2025",
  },
  {
    title: "GitTagged Web",
    description:
      "MERN-based web application built with reusable components, responsive UI, and optimized API integration, improving cross-device compatibility and UX.",
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
    year: "2025",
  },
] as const;

const skills = [
  "Java",
  "Spring Boot",
  "JSP",
  "Servlets",
  "MongoDB",
  "Express.js",
  "React",
  "Node.js",
  "Mongoose",
  "JavaScript",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "REST APIs",
  "JWT Auth",
  "n8n",
] as const;


const certificates = [
  {
    name: "Gen AI Academy 2.0 - AI/ML Learning Track",
    issuer: "Google Cloud x H2S",
    year: "2025",
    link: "https://drive.google.com/file/d/159LDX_2A-yI2a3RJkq0KZKn3bUsbuoKU/view?usp=drive_link",
  },
  {
    name: "Gen AI Academy 2.0 - DevOps Learning Track",
    issuer: "Google Cloud x H2S",
    year: "2025",
    link: "https://drive.google.com/file/d/15fhQYghQSflEJqfsXxBZE2I7z1PKaldN/view?usp=drive_link",
  },
  {
    name: "Gen AI Academy 2.0 - Serverless Learning Track",
    issuer: "Google Cloud x H2S",
    year: "2025",
    link: "https://drive.google.com/file/d/1BE8BbGYkulEfN76gb5ZOtpjowfKxv2Yx/view?usp=drive_link",
  },
  {
    name: "Automate Data Capture at Scale with Document AI",
    issuer: "Google Cloud Skill Badge",
    year: "2025",
    link: "https://drive.google.com/file/d/1RhpMZfg2BnlwnO2B_RBstP_4sUtiHs6V/view?usp=drive_link",
  },
  {
    name: "Cloud Functions: 3 Ways",
    issuer: "Google Cloud Skill Badge",
    year: "2025",
    link: "https://drive.google.com/file/d/1_WT6zNJ1BrHO3fEIduCg7ruG9RVQoaCZ/view?usp=drive_link",
  },
  {
    name: "Develop Serverless Applications on Cloud Run",
    issuer: "Google Cloud Skill Badge",
    year: "2025",
    link: "https://drive.google.com/file/d/1qoPTTnyRPlLcGCZ0yOMe3j6aZ3lx1Cpg/view?usp=drive_link",
  },
  {
    name: "Develop Serverless Apps with Firebase",
    issuer: "Google Cloud Skill Badge",
    year: "2025",
    link: "https://drive.google.com/file/d/19RboTQChwnpR1UXLGYwWoPmxVXbTSAlY/view?usp=drive_link",
  },
  {
    name: "Implement CI/CD Pipelines on Google Cloud",
    issuer: "Google Cloud Skill Badge",
    year: "2025",
    link: "https://drive.google.com/file/d/1gwEsUk6yveoZkNAQ9PftUAF9irkth6Kr/view?usp=drive_link",
  },
  {
    name: "Manage Kubernetes in Google Cloud",
    issuer: "Google Cloud Skill Badge",
    year: "2025",
    link: "https://drive.google.com/file/d/1pnKlBmdhkCGoqLIphgPlmhzqZ7eGU2B4/view?usp=drive_link",
  },
  {
    name: "Prepare Data for ML APIs on Google Cloud",
    issuer: "Google Cloud Skill Badge",
    year: "2025",
    link: "https://drive.google.com/file/d/1lRHw89D8A1QWW3bKNK9UISPwZ7dplObO/view?usp=drive_link",
  },
  {
    name: "Protect Sensitive Data with Data Loss Prevention",
    issuer: "Google Cloud Skill Badge",
    year: "2025",
    link: "https://drive.google.com/file/d/1ett1-Z8poJw8KxT3COaWrg2hYqvPd7GX/view?usp=drive_link",
  },
  {
    name: "Java Basic Certificate",
    issuer: "HackerRank",
    year: "2025",
    link: "https://drive.google.com/file/d/1l-UGleIdSOEofm_-Krisd56SEpig3Wro/view?usp=drive_link",
  },
  {
    name: "Java DSA Certificate",
    issuer: "Course Completion",
    year: "2025",
    link: "https://drive.google.com/file/d/1ZOIhlqmkvxqmmBLobERvQP3hAzWP_eN_/view?usp=drive_link",
  },
  {
    name: "Getting Started with Cybersecurity",
    issuer: "IBM SkillsBuild",
    year: "2026",
    link: "https://drive.google.com/file/d/104mF965CwzfFxaVy0Po-0e2NHO-RdU5T/view?usp=drive_link",
  },
] as const;

const resumes = [
  {
    name: "Omkar Pawar - Full Stack Developer Resume",
    year: "2025",
    link: "https://drive.google.com/file/d/1f6WW7uz4Dm5-VMLgIDH7yA-BZJ6mS2eT/view?usp=drive_link",
  },
  {
    name: "Omkar Pawar - Resume",
    year: "2025",
    link: "https://drive.google.com/file/d/1WzjJ_HV9N6fTMXtonEIgwSOoajue4SZx/view?usp=drive_link",
  },
] as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function Spotlight({ className }: { className: string }) {
  return (
    <motion.div
      aria-hidden
      className={className}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    />
  );
}

type CredentialCardProps = {
  name: string;
  year: string;
  link: string;
  issuer?: string;
  ctaLabel: string;
};

function CredentialCard({ name, year, link, issuer, ctaLabel }: CredentialCardProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      variants={item}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-zinc-950/85 p-5 sm:p-6"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.22),transparent_55%)]" />
      </div>
      <div className="relative flex flex-col items-start justify-between gap-3 sm:flex-row sm:gap-4">
        <div>
          <p className="text-base font-semibold text-zinc-100 sm:text-lg">{name}</p>
          {issuer ? <p className="mt-2 text-sm text-zinc-400">{issuer}</p> : null}
        </div>
        <span className="rounded-full border border-white/10 bg-zinc-900 px-2.5 py-1 text-xs text-zinc-300">
          {year}
        </span>
      </div>
      <p className="relative mt-4 text-xs text-cyan-300/80">{ctaLabel}</p>
    </motion.a>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#020203] text-zinc-100">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Spotlight className="absolute -left-40 top-[-8rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.3),rgba(6,182,212,0.08)_45%,transparent_72%)] blur-3xl" />
        <Spotlight className="absolute right-[-8rem] top-28 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.28),rgba(59,130,246,0.08)_44%,transparent_74%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20 [mask-image:radial-gradient(circle_at_center,black_30%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#040409_0%,#010102_100%)]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/45 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-4 py-3 sm:h-16 sm:flex-row sm:gap-0 sm:px-8 sm:py-0">
          <a
            href="#home"
            className="text-sm font-semibold tracking-[0.18em] text-zinc-200"
          >
            OMKAR PAWAR
          </a>
          <nav className="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-zinc-400 sm:w-auto sm:justify-end sm:gap-5 sm:text-sm">
            <a
              className="transition-colors hover:text-cyan-300"
              href="#projects"
            >
              Projects
            </a>
            <a className="transition-colors hover:text-cyan-300" href="#skills">
              Skills
            </a>
            <a
              className="transition-colors hover:text-cyan-300"
              href="#certificates"
            >
              Certificates
            </a>
            <a className="transition-colors hover:text-cyan-300" href="#resume">
              Resume
            </a>
            <a
              className="transition-colors hover:text-cyan-300"
              href="#contact"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <motion.section
        id="home"
        className="mx-auto grid w-full max-w-6xl gap-9 px-4 pb-14 pt-20 sm:px-8 sm:pt-24 md:grid-cols-[1.2fr_0.8fr] md:items-end md:pt-28"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/80">
            Minimal. Modern. Fast.
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-zinc-100 sm:text-5xl md:text-6xl">
            MERN stack portfolio with neon-black visuals.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            I build modern full-stack web apps using MongoDB, Express, React,
            and Node.js with performance-focused architecture.
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
          className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-zinc-900/70 p-6 shadow-[0_0_40px_-20px_rgba(8,145,178,0.65)]"
        >
          <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-500/20 blur-3xl" />
          <p className="text-sm text-zinc-400">Current Focus</p>
          <p className="mt-2 text-xl font-semibold text-zinc-100">
            MERN products and scalable APIs
          </p>
          <div className="mt-6 space-y-3 text-sm text-zinc-400">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span>Role</span>
              <span className="text-zinc-200">MERN Stack Developer</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span>Stack</span>
              <span className="text-zinc-200">
                MongoDB + Express + React + Node
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Availability</span>
              <span className="text-zinc-200">Internships / Freelance</span>
            </div>
          </div>
        </motion.div>
      </motion.section>

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
            Aceternity-style glowing project cards.
          </h2>
        </motion.div>

        <motion.div
          className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3"
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
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-zinc-100">
                    {project.title}
                  </h3>
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

      <section
        id="certificates"
        className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/80">
            Credentials
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            Professional Certificates
          </h2>
        </motion.div>

        <motion.div
          className="mt-8 grid gap-4 md:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {certificates.map((certificate) => (
            <CredentialCard
              key={certificate.name}
              name={certificate.name}
              issuer={certificate.issuer}
              year={certificate.year}
              link={certificate.link}
              ctaLabel="Open certificate"
            />
          ))}
        </motion.div>
      </section>

      <section
        id="resume"
        className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/80">
            Resume
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            Resume Documents
          </h2>
        </motion.div>

        <motion.div
          className="mt-8 grid gap-4 md:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {resumes.map((resume) => (
            <CredentialCard
              key={resume.name}
              name={resume.name}
              year={resume.year}
              link={resume.link}
              ctaLabel="Open resume"
            />
          ))}
        </motion.div>
      </section>

      <section
        id="contact"
        className="mx-auto w-full max-w-6xl px-4 pb-20 pt-8 sm:px-8"
      >
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-zinc-950/85 p-7 sm:p-10"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute -left-20 top-0 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/80">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            Let&apos;s craft a standout product.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            Open for internships, freelance, and full product collaborations. I
            can help you ship premium web experiences with strong UI and code
            quality.
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
    </main>
  );
}
