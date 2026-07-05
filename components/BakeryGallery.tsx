"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

function unsplash(id: string) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1000&q=80`;
}

const GALLERY_IMAGES = [
  {
    alt: "Warm, softly lit bakery interior",
    src: unsplash("1554118811-1e0d58224f24"),
    heightClass: "h-72",
  },
  {
    alt: "Fresh pastries displayed in a glass case",
    src: unsplash("1517686469429-8bdb88b9f907"),
    heightClass: "h-96",
  },
  {
    alt: "Rich chocolate layer cake slice",
    src: unsplash("1621303837174-89787a7d4729"),
    heightClass: "h-64",
  },
  {
    alt: "Hands shaping fresh dough",
    src: unsplash("1509440159596-0249088772ff"),
    heightClass: "h-80",
  },
  {
    alt: "Rustic loaves in a bread basket",
    src: unsplash("1533089860892-a7c6f0a88666"),
    heightClass: "h-72",
  },
  {
    alt: "Coffee being poured into a cup",
    src: unsplash("1509042239860-f550ce710b93"),
    heightClass: "h-96",
  },
  {
    alt: "Golden croissants fresh from the oven",
    src: unsplash("1509365465985-25d11c17e812"),
    heightClass: "h-64",
  },
  {
    alt: "Cozy cafe seating area",
    src: unsplash("1521017432531-fbd92d768814"),
    heightClass: "h-80",
  },
  {
    alt: "Assorted glazed donuts",
    src: unsplash("1551024506-0bccd828d307"),
    heightClass: "h-96",
  },
  {
    alt: "Colorful macarons arranged in a row",
    src: unsplash("1569864358642-9d1684040f43"),
    heightClass: "h-72",
  },
  {
    alt: "Coffee cup on a rustic wooden table",
    src: unsplash("1495474472287-4d71bcdd2085"),
    heightClass: "h-80",
  },
] as const;

export default function BakeryGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-accent uppercase shadow-sm">
            Behind The Counter
          </span>
          <h2 className="mt-6 font-display text-3xl font-semibold text-coffee sm:text-4xl lg:text-5xl">
            Bakery Gallery
          </h2>
          <p className="mt-4 text-base leading-relaxed text-coffee/70 sm:text-lg">
            A glimpse into our kitchen, our counter and the bakes that keep
            our guests coming back.
          </p>
        </div>

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {GALLERY_IMAGES.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`group relative mb-6 block w-full overflow-hidden rounded-2xl shadow-[0_8px_30px_-12px_rgba(75,50,40,0.2)] transition-shadow duration-300 hover:shadow-[0_20px_40px_-15px_rgba(75,50,40,0.35)] ${image.heightClass}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-coffee/0 opacity-0 transition-all duration-300 group-hover:bg-coffee/30 group-hover:opacity-100">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-coffee">
                  <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5">
                    <circle
                      cx="9"
                      cy="9"
                      r="6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M13.5 13.5 18 18"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={GALLERY_IMAGES}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onChangeIndex={setActiveIndex}
        />
      )}
    </section>
  );
}

type LightboxProps = {
  images: readonly { src: string; alt: string }[];
  index: number;
  onClose: () => void;
  onChangeIndex: (index: number) => void;
};

function Lightbox({ images, index, onClose, onChangeIndex }: LightboxProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    window.setTimeout(onClose, 300);
  }, [onClose]);

  const showPrev = useCallback(() => {
    onChangeIndex((index - 1 + images.length) % images.length);
  }, [index, images.length, onChangeIndex]);

  const showNext = useCallback(() => {
    onChangeIndex((index + 1) % images.length);
  }, [index, images.length, onChangeIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
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
  }, [handleClose, showPrev, showNext]);

  const current = images[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Gallery image preview"
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-8"
    >
      <div
        aria-hidden
        onClick={handleClose}
        className={`absolute inset-0 bg-coffee/80 backdrop-blur-sm transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />

      <button
        type="button"
        onClick={handleClose}
        aria-label="Close preview"
        className="absolute top-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-coffee sm:top-8 sm:right-8"
      >
        <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
          <path
            d="M5 5l10 10M15 5 5 15"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <button
        type="button"
        onClick={showPrev}
        aria-label="Previous image"
        className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-coffee sm:left-6"
      >
        <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
          <path
            d="M12 4 6 10l6 6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        type="button"
        onClick={showNext}
        aria-label="Next image"
        className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-coffee sm:right-6"
      >
        <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
          <path
            d="M8 4l6 6-6 6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        key={index}
        className={`animate-fade-in relative h-[70vh] w-full max-w-4xl overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 ease-out ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <Image
          src={current.src}
          alt={current.alt}
          fill
          sizes="(min-width: 1024px) 60vw, 90vw"
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
