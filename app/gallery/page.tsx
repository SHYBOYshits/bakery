"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ZoomIn } from "lucide-react";
import PageHero from "@/components/PageHero";
import Lightbox from "@/components/Lightbox";
import { GALLERY_IMAGES, type GalleryImage } from "@/components/galleryImages";

const FILTERS = [
  "All",
  "Bread",
  "Coffee",
  "Cakes",
  "Interior",
  "Sandwich",
  "Desserts",
] as const;

const HEIGHT_CLASSES = ["h-56", "h-64", "h-72", "h-80", "h-96"];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof FILTERS)[number]>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filteredImages = useMemo<GalleryImage[]>(
    () =>
      activeFilter === "All"
        ? GALLERY_IMAGES
        : GALLERY_IMAGES.filter((image) => image.category === activeFilter),
    [activeFilter],
  );

  return (
    <>
      <PageHero
        eyebrow="Our Gallery"
        title="A Taste In Pictures"
        subtitle={`A closer look at our bakes, brews and the space we've built around them — ${GALLERY_IMAGES.length}+ photos and counting.`}
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`inline-flex min-h-11 items-center rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "border-coffee bg-coffee text-cream shadow-md"
                  : "border-coffee/20 bg-white text-coffee hover:border-accent hover:text-accent"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </PageHero>

      <section className="px-6 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.button
                  key={image.id}
                  type="button"
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative mb-6 block w-full overflow-hidden rounded-2xl shadow-[0_8px_30px_-12px_rgba(75,50,40,0.2)] transition-shadow duration-300 hover:shadow-[0_20px_40px_-15px_rgba(75,50,40,0.35)] ${
                    HEIGHT_CLASSES[index % HEIGHT_CLASSES.length]
                  }`}
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
                      <ZoomIn className="h-5 w-5" />
                    </span>
                  </div>
                  <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium tracking-wide text-coffee uppercase opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
                    {image.category}
                  </span>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeIndex !== null && (
          <Lightbox
            images={filteredImages}
            index={activeIndex}
            onClose={() => setActiveIndex(null)}
            onChangeIndex={setActiveIndex}
          />
        )}
      </AnimatePresence>
    </>
  );
}
