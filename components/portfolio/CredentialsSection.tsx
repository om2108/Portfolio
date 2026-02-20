"use client";

import { motion } from "framer-motion";
import { container } from "./animations";
import { CredentialCard } from "./CredentialCard";

type Credential = {
  name: string;
  year: string;
  link: string;
  issuer?: string;
  preview?: string;
};

type CredentialsSectionProps = {
  id: string;
  tag: string;
  title: string;
  ctaLabel: string;
  columns?: "one" | "two" | "three";
  items: readonly Credential[];
};

export function CredentialsSection({
  id,
  tag,
  title,
  ctaLabel,
  columns = "two",
  items,
}: CredentialsSectionProps) {
  const columnsClass =
    columns === "one"
      ? "md:grid-cols-1"
      : columns === "three"
        ? "md:grid-cols-2 lg:grid-cols-3"
        : "md:grid-cols-2";
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/80">{tag}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
          {title}
        </h2>
      </motion.div>

      <motion.div
        className={`mt-8 grid gap-4 ${columnsClass}`}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {items.map((entry) => (
          <CredentialCard
            key={entry.name}
            name={entry.name}
            year={entry.year}
            issuer={entry.issuer}
            preview={entry.preview}
            link={entry.link}
            ctaLabel={ctaLabel}
          />
        ))}
      </motion.div>
    </section>
  );
}
