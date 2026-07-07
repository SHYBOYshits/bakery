"use client";

import Link from "next/link";
import { useWhatsAppModal } from "@/components/WhatsAppModalContext";

export default function HomeCTA() {
  const { openBookingModal } = useWhatsAppModal();

  return (
    <section className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-3xl"
      />

      <div className="mx-auto max-w-3xl rounded-3xl bg-card px-8 py-14 text-center shadow-[0_20px_45px_-20px_rgba(75,50,40,0.25)] sm:px-14">
        <h2 className="font-display text-3xl font-semibold text-coffee sm:text-4xl">
          Come experience freshly baked happiness.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-coffee/70 sm:text-lg">
          Stop by for a fresh bake and a warm cup of coffee, or reserve your
          table for something special.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/menu"
            className="inline-flex items-center justify-center rounded-full border border-coffee/20 bg-white px-8 py-3.5 text-sm font-medium text-coffee shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-md"
          >
            View Menu
          </Link>
          <button
            type="button"
            onClick={openBookingModal}
            className="inline-flex items-center justify-center rounded-full bg-coffee px-8 py-3.5 text-sm font-medium text-cream shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:shadow-lg"
          >
            Reserve a Table
          </button>
        </div>
      </div>
    </section>
  );
}
