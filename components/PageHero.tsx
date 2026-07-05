"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-16 sm:px-8 sm:pt-24 sm:pb-20 lg:px-12">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 -z-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl sm:h-96 sm:w-96"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-20 -z-10 h-72 w-72 rounded-full bg-coffee/10 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-accent uppercase shadow-sm">
          {eyebrow}
        </span>
        <h1 className="mt-6 font-display text-4xl font-semibold text-coffee sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-coffee/70 sm:text-lg">
          {subtitle}
        </p>
      </motion.div>

      {children && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-10"
        >
          {children}
        </motion.div>
      )}
    </section>
  );
}
