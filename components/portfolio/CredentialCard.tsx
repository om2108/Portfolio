"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { item } from "./animations";
import { memo, useCallback, type MouseEvent } from "react";

type CredentialCardProps = {
  name: string;
  year: string;
  link: string;
  issuer?: string;
  preview?: string;
  ctaLabel: string;
};

export const CredentialCard = memo(function CredentialCard({
  name,
  year,
  link,
  issuer,
  preview,
  ctaLabel,
}: CredentialCardProps) {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [10, -10]), {
    stiffness: 220,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 220,
    damping: 24,
  });

  const handleMove = useCallback((event: MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    pointerX.set(x);
    pointerY.set(y);
  }, [pointerX, pointerY]);

  const resetTilt = useCallback(() => {
    pointerX.set(0);
    pointerY.set(0);
  }, [pointerX, pointerY]);

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      variants={item}
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
      whileHover={{ y: -10, scale: 1.04 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-zinc-950/85 p-5 will-change-transform sm:p-6"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.22),transparent_55%)]" />
      </div>
      {preview ? (
        <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl border border-white/10">
          <Image
            src={preview}
            alt={`${name} preview`}
            fill
            className="object-cover transition duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 33vw"
            quality={72}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
        </div>
      ) : null}
      <div className="relative flex flex-col items-start justify-between gap-3 sm:flex-row sm:gap-4 [transform:translateZ(30px)]">
        <div>
          <p className="text-base font-semibold text-zinc-100 sm:text-lg">{name}</p>
          {issuer ? <p className="mt-2 text-sm text-zinc-400">{issuer}</p> : null}
        </div>
        <span className="rounded-full border border-white/10 bg-zinc-900 px-2.5 py-1 text-xs text-zinc-300">
          {year}
        </span>
      </div>
      <p className="relative mt-4 text-xs text-cyan-300/80 [transform:translateZ(26px)]">
        {ctaLabel}
      </p>
    </motion.a>
  );
});
