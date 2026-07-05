"use client";

import { useState } from "react";
import {
  BreadIcon,
  CakeIcon,
  CoffeeCupIcon,
  CookieIcon,
  CroissantIcon,
  IceCreamIcon,
  SandwichIcon,
} from "@/components/icons";
import { CATEGORY_PRODUCTS } from "@/components/categoryProducts";
import CategoryModal from "@/components/CategoryModal";

const CATEGORIES = [
  {
    title: "Bread",
    description:
      "Golden, crusty loaves baked fresh every morning from slow-fermented dough.",
    Icon: BreadIcon,
  },
  {
    title: "Cakes",
    description:
      "Rich, moist layers finished with silky frosting for every celebration.",
    Icon: CakeIcon,
  },
  {
    title: "Puff",
    description:
      "Buttery, flaky pastries layered and baked to golden, crisp perfection.",
    Icon: CroissantIcon,
  },
  {
    title: "Coffee",
    description:
      "Ethically sourced beans, roasted in-house and brewed to bring out every note.",
    Icon: CoffeeCupIcon,
  },
  {
    title: "Sandwich",
    description:
      "Freshly stacked fillings between our house-baked artisan bread.",
    Icon: SandwichIcon,
  },
  {
    title: "Ice Cream",
    description:
      "Creamy, small-batch scoops churned with real, natural ingredients.",
    Icon: IceCreamIcon,
  },
  {
    title: "Biscuits",
    description:
      "Crisp, buttery bakes finished with a light golden crumb.",
    Icon: CookieIcon,
  },
] as const;

export default function FeaturedCategories() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="menu" className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-accent uppercase shadow-sm">
            Our Selection
          </span>
          <h2 className="mt-6 font-display text-3xl font-semibold text-coffee sm:text-4xl lg:text-5xl">
            Featured Categories
          </h2>
          <p className="mt-4 text-base leading-relaxed text-coffee/70 sm:text-lg">
            Every category crafted daily with the same care, quality
            ingredients and attention to detail.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map(({ title, description, Icon }) => (
            <article
              key={title}
              role="button"
              tabIndex={0}
              onClick={() => setActiveCategory(title)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActiveCategory(title);
                }
              }}
              className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-card shadow-[0_8px_30px_-12px_rgba(75,50,40,0.15)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_50px_-15px_rgba(75,50,40,0.3)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-accent/15 via-cream to-coffee/10">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "radial-gradient(currentColor 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                    color: "var(--color-coffee)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon className="h-24 w-24 text-coffee transition-transform duration-500 ease-out group-hover:scale-110 sm:h-28 sm:w-28" />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold text-coffee">
                  {title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-coffee/70">
                  {description}
                </p>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setActiveCategory(title);
                  }}
                  className="mt-5 inline-flex min-h-11 w-fit items-center gap-2 rounded-full border border-coffee/20 px-5 py-2.5 text-sm font-medium text-coffee transition-all duration-300 hover:border-accent hover:bg-accent hover:text-coffee hover:shadow-md"
                >
                  Explore
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M4 10h12M11 5l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeCategory && (
        <CategoryModal
          title={activeCategory}
          products={CATEGORY_PRODUCTS[activeCategory]}
          onClose={() => setActiveCategory(null)}
        />
      )}
    </section>
  );
}
