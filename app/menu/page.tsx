"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { CATEGORY_PRODUCTS, type Product } from "@/components/categoryProducts";
import { useWhatsAppModal } from "@/components/WhatsAppModalContext";

const FILTERS = [
  { label: "All", emoji: null },
  { label: "Bread", emoji: "🍞" },
  { label: "Cakes", emoji: "🍰" },
  { label: "Puff", emoji: "🥐" },
  { label: "Coffee", emoji: "☕" },
  { label: "Sandwich", emoji: "🥪" },
  { label: "Ice Cream", emoji: "🍦" },
  { label: "Biscuits", emoji: "🍪" },
] as const;

type MenuItem = Product & { category: string };

const ALL_ITEMS: MenuItem[] = Object.entries(CATEGORY_PRODUCTS).flatMap(
  ([category, products]) =>
    products.map((product) => ({ ...product, category })),
);

function normalize(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

export default function MenuPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDebouncedSearch(searchInput);
    }, 300);
    return () => window.clearTimeout(timer);
  }, [searchInput]);

  const clearSearch = () => {
    setSearchInput("");
    setDebouncedSearch("");
  };

  const query = useMemo(() => normalize(debouncedSearch), [debouncedSearch]);

  const items = useMemo(() => {
    const byCategory =
      activeFilter === "All"
        ? ALL_ITEMS
        : ALL_ITEMS.filter((item) => item.category === activeFilter);

    if (!query) return byCategory;

    return byCategory.filter((item) => {
      const haystack = `${item.name} ${item.category} ${item.description}`.toLowerCase();
      return haystack.includes(query);
    });
  }, [activeFilter, query]);

  return (
    <>
      <PageHero
        eyebrow="Our Menu"
        title="Freshly Made, Always"
        subtitle="Browse every bake, brew and bite we craft daily — filter by category to find your favorite."
      >
        <div className="mx-auto mb-8 w-full lg:max-w-xl">
          <div className="flex items-center rounded-full border border-coffee/15 bg-cream px-5 py-3.5 shadow-[0_8px_24px_-12px_rgba(75,50,40,0.15)] transition-all duration-300 focus-within:border-accent focus-within:shadow-[0_12px_28px_-10px_rgba(75,50,40,0.25)] focus-within:ring-2 focus-within:ring-accent/20">
            <Search className="h-5 w-5 shrink-0 text-coffee/40" />
            <input
              type="text"
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Escape") clearSearch();
              }}
              placeholder="Search breads, cakes, coffee, sandwiches..."
              aria-label="Search menu"
              className="ml-3 w-full bg-transparent text-sm text-coffee outline-none placeholder:text-coffee/40"
            />
            {searchInput && (
              <button
                type="button"
                onClick={clearSearch}
                aria-label="Clear search"
                className="ml-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-coffee/50 transition-colors duration-200 hover:bg-coffee/10 hover:text-coffee"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {FILTERS.map((filter) => (
            <button
              key={filter.label}
              type="button"
              onClick={() => setActiveFilter(filter.label)}
              className={`inline-flex min-h-11 items-center gap-1.5 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.label
                  ? "border-coffee bg-coffee text-cream shadow-md"
                  : "border-coffee/20 bg-white text-coffee hover:border-accent hover:text-accent"
              }`}
            >
              {filter.emoji && <span>{filter.emoji}</span>}
              {filter.label}
            </button>
          ))}
        </div>
      </PageHero>

      <section className="px-6 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            layout
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <MenuProductCard product={item} query={debouncedSearch} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <AnimatePresence>
            {items.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="mt-16 flex flex-col items-center justify-center text-center"
              >
                <span className="text-4xl">🔍</span>
                <p className="mt-4 font-display text-xl font-semibold text-coffee">
                  No products found
                </p>
                <p className="mt-1 text-sm text-coffee/60">
                  Try another search.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}

function HighlightText({ text, query }: { text: string; query: string }) {
  const normalized = normalize(query);
  if (!normalized) return <>{text}</>;

  const escaped = normalized.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escaped})`, "gi"));

  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === normalized ? (
          <mark
            key={i}
            className="rounded bg-accent/30 px-0.5 text-coffee"
          >
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

function MenuProductCard({
  product,
  query,
}: {
  product: MenuItem;
  query: string;
}): ReactNode {
  const { openOrderModal } = useWhatsAppModal();

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-[0_8px_24px_-10px_rgba(75,50,40,0.18)] transition-shadow duration-300 hover:shadow-[0_20px_35px_-12px_rgba(75,50,40,0.28)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 290px, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium tracking-wide text-coffee uppercase shadow-sm">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-coffee">
          <HighlightText text={product.name} query={query} />
        </h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-coffee/70">
          <HighlightText text={product.description} query={query} />
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
    </motion.div>
  );
}
