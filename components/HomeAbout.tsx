import Image from "next/image";
import Link from "next/link";

const DIFFERENTIATORS = [
  {
    emoji: "🥖",
    title: "Freshly Baked Daily",
    description: "Every loaf and pastry is baked fresh from scratch each morning.",
  },
  {
    emoji: "☕",
    title: "Premium Coffee",
    description: "Ethically sourced beans, roasted and brewed to perfection.",
  },
  {
    emoji: "🎂",
    title: "Custom Cakes",
    description: "Handmade cakes and desserts crafted for every celebration.",
  },
  {
    emoji: "❤️",
    title: "Made with Love",
    description: "A warm, family atmosphere in every recipe and every visit.",
  },
];

export default function HomeAbout() {
  return (
    <section className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_20px_45px_-20px_rgba(75,50,40,0.25)] lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&w=900&q=80"
              alt="Fresh pastries displayed at Beany Barista"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-accent uppercase shadow-sm">
              About Beany Barista
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold text-coffee sm:text-4xl lg:text-5xl">
              About Us
            </h2>

            <p className="mt-6 leading-relaxed text-coffee/70">
              Beany Barista began as a small neighborhood bakery with a
              simple goal: bake bread the way it used to be made — slow,
              honest, and full of flavor. That same care now goes into every
              loaf, cake and cup of coffee we serve.
            </p>
            <p className="mt-4 leading-relaxed text-coffee/70">
              Our mission is to craft honest, high-quality food using fresh
              ingredients and time-tested techniques, then serve it in a
              space that feels like home — from our daily bakes and premium
              coffee to our handmade desserts and warm, family atmosphere.
            </p>

            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors duration-200 hover:text-coffee"
            >
              Read our full story
              <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                <path
                  d="M4 10h12M11 5l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-center font-display text-2xl font-semibold text-coffee sm:text-3xl">
            Why Choose Beany Barista
          </h3>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DIFFERENTIATORS.map(({ emoji, title, description }) => (
              <div
                key={title}
                className="flex flex-col items-center rounded-2xl bg-card p-6 text-center shadow-[0_8px_24px_-12px_rgba(75,50,40,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-12px_rgba(75,50,40,0.25)]"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-2xl">
                  {emoji}
                </span>
                <h4 className="mt-4 font-display text-lg font-semibold text-coffee">
                  {title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-coffee/70">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
