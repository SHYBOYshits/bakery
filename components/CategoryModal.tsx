"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Product } from "@/components/categoryProducts";
import { useWhatsAppModal } from "@/components/WhatsAppModalContext";

type CategoryModalProps = {
  title: string;
  products: Product[];
  onClose: () => void;
};

export default function CategoryModal({
  title,
  products,
  onClose,
}: CategoryModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    window.setTimeout(onClose, 300);
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
    };
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} menu`}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
    >
      <div
        aria-hidden
        onClick={handleClose}
        className={`absolute inset-0 bg-coffee/60 backdrop-blur-sm transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`relative flex max-h-[85vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-cream shadow-2xl transition-all duration-300 ease-out ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <div className="flex items-start justify-between gap-4 border-b border-coffee/10 px-6 py-6 sm:px-10">
          <div>
            <span className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
              Our Menu
            </span>
            <h2 className="mt-2 font-display text-3xl font-semibold text-coffee sm:text-4xl">
              {title}
            </h2>
          </div>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-coffee/15 text-coffee transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-white"
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
        </div>

        <div className="overflow-y-auto px-6 py-8 sm:px-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const { openOrderModal } = useWhatsAppModal();

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-[0_8px_24px_-10px_rgba(75,50,40,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_35px_-12px_rgba(75,50,40,0.28)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 220px, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-coffee">
          {product.name}
        </h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-coffee/70">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="font-display text-lg font-semibold text-accent">
            ${product.price.toFixed(2)}
          </span>
          <button
            type="button"
            onClick={() =>
              openOrderModal({ name: product.name, price: product.price })
            }
            className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-coffee px-4 py-2 text-xs font-medium text-cream transition-all duration-300 hover:bg-accent hover:shadow-md"
          >
            Order on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
