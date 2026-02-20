"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Scroll3DImageProps = {
  src: string;
  alt: string;
};

export function Scroll3DImage({ src, alt }: Scroll3DImageProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [16, 0, -16]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-8, 0, 8]);
  const y = useTransform(scrollYProgress, [0, 1], [42, -42]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.94]);

  return (
    <div ref={wrapperRef} style={{ perspective: "1100px" }}>
      <motion.div
        style={{ rotateX, rotateY, y, scale }}
        className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-cyan-400/30 bg-zinc-900/70 shadow-[0_24px_50px_-30px_rgba(34,211,238,0.7)]"
      >
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </motion.div>
    </div>
  );
}
