"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type LightboxImage = {
  src: string;
  alt: string;
};

type LightboxProps = {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onChangeIndex: (index: number) => void;
};

export default function Lightbox({
  images,
  index,
  onClose,
  onChangeIndex,
}: LightboxProps) {
  const showPrev = useCallback(() => {
    onChangeIndex((index - 1 + images.length) % images.length);
  }, [index, images.length, onChangeIndex]);

  const showNext = useCallback(() => {
    onChangeIndex((index + 1) % images.length);
  }, [index, images.length, onChangeIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, showPrev, showNext]);

  const current = images[index];

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        aria-hidden
        onClick={onClose}
        className="absolute inset-0 bg-coffee/80 backdrop-blur-sm"
      />

      <button
        type="button"
        onClick={onClose}
        aria-label="Close preview"
        className="absolute top-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-coffee sm:top-8 sm:right-8"
      >
        <X className="h-4 w-4" />
      </button>

      <button
        type="button"
        onClick={showPrev}
        aria-label="Previous image"
        className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-coffee sm:left-6"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={showNext}
        aria-label="Next image"
        className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-coffee sm:right-6"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <motion.div
        key={current.src}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative h-[70vh] w-full max-w-4xl overflow-hidden rounded-2xl shadow-2xl"
      >
        <Image
          src={current.src}
          alt={current.alt}
          fill
          sizes="(min-width: 1024px) 60vw, 90vw"
          className="object-cover"
          priority
        />
      </motion.div>
    </motion.div>
  );
}
