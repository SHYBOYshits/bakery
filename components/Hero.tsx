"use client";

import {
  BreadIcon,
  CookieIcon,
  CoffeeCupIcon,
  CroissantIcon,
  CupcakeIcon,
} from "@/components/icons";

const FLOATING_ICONS = [
  {
    Icon: CroissantIcon,
    className:
      "top-[12%] left-[6%] h-12 w-12 text-accent/70 animate-float sm:h-16 sm:w-16",
    style: { animationDelay: "0ms" },
  },
  {
    Icon: CoffeeCupIcon,
    className:
      "top-[20%] right-[8%] hidden h-14 w-14 text-coffee/60 animate-float-slow sm:block",
    style: { animationDelay: "300ms" },
  },
  {
    Icon: CupcakeIcon,
    className:
      "bottom-[16%] left-[10%] hidden h-12 w-12 text-accent/60 animate-float-fast md:block",
    style: { animationDelay: "600ms" },
  },
  {
    Icon: BreadIcon,
    className:
      "bottom-[10%] right-[12%] h-14 w-14 text-coffee/60 animate-float-slow sm:h-16 sm:w-16",
    style: { animationDelay: "150ms" },
  },
  {
    Icon: CookieIcon,
    className:
      "top-[8%] right-[26%] hidden h-10 w-10 text-accent/70 animate-float lg:block",
    style: { animationDelay: "450ms" },
  },
] as const;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[70vh] items-center overflow-hidden px-6 py-16 sm:min-h-[80vh] sm:px-8 sm:py-20 lg:min-h-[90vh] lg:px-12 lg:py-24"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-cream"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          color: "var(--color-coffee)",
          opacity: 0.05,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 -z-10 h-80 w-80 rounded-full bg-accent/20 blur-3xl sm:h-[26rem] sm:w-[26rem]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-20 -z-10 h-80 w-80 rounded-full bg-coffee/10 blur-3xl"
      />
      <svg
        aria-hidden
        viewBox="0 0 200 200"
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 text-coffee/[0.05]"
        fill="none"
      >
        <path
          d="M40 100c0-25 20-45 60-45s60 20 60 45c0 8-4 14-10 18 6 4 10 10 10 18 0 25-27 34-60 34s-60-9-60-34c0-8 4-14 10-18-6-4-10-10-10-18Z"
          stroke="currentColor"
          strokeWidth="3"
        />
      </svg>

      {FLOATING_ICONS.map(({ Icon, className, style }, index) => (
        <Icon
          key={index}
          aria-hidden
          className={`absolute -z-0 ${className}`}
          style={style}
        />
      ))}

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <span
          className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-accent uppercase shadow-sm"
          style={{ animationFillMode: "backwards" }}
        >
          Freshly Baked Daily
        </span>

        <h1
          className="animate-fade-in-up mt-6 font-display text-4xl leading-[1.1] font-semibold text-coffee sm:text-5xl lg:text-6xl"
          style={{ animationDelay: "120ms", animationFillMode: "backwards" }}
        >
          Freshly Baked <span className="text-accent italic">Happiness</span>{" "}
          Every Day
        </h1>

        <p
          className="animate-fade-in-up mt-6 max-w-xl text-base leading-relaxed text-coffee/70 sm:text-lg"
          style={{ animationDelay: "240ms", animationFillMode: "backwards" }}
        >
          Fresh breads, delicious cakes, handcrafted coffee and snacks made
          with love.
        </p>

        <div
          className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row"
        >
          <a
            href="/menu"
            className="animate-fade-in-left inline-flex items-center justify-center rounded-full border border-coffee/20 bg-white px-8 py-3.5 text-sm font-medium text-coffee shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-md"
            style={{ animationDelay: "360ms", animationFillMode: "backwards" }}
          >
            View Menu
          </a>
          <a
            href="/menu"
            className="animate-fade-in-right inline-flex items-center justify-center rounded-full bg-coffee px-8 py-3.5 text-sm font-medium text-cream shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:shadow-lg"
            style={{ animationDelay: "420ms", animationFillMode: "backwards" }}
          >
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
}
