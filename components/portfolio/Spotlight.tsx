"use client";

import { motion } from "framer-motion";

type SpotlightProps = {
  className: string;
};

export function Spotlight({ className }: SpotlightProps) {
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
