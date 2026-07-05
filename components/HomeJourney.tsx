const JOURNEY = [
  {
    step: "01",
    title: "Founded",
    description: "Our story began with a single oven and a big dream.",
  },
  {
    step: "02",
    title: "First Bakery",
    description: "We opened our very first bakery, loved by the neighborhood.",
  },
  {
    step: "03",
    title: "Expansion",
    description: "Growing demand led us to expand into a full bakery and cafe.",
  },
  {
    step: "04",
    title: "Today",
    description: "Serving fresh bakes and warm smiles, every single day.",
  },
];

export default function HomeJourney() {
  return (
    <section className="bg-card px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-cream px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-accent uppercase shadow-sm">
            Our Journey
          </span>
          <h2 className="mt-6 font-display text-3xl font-semibold text-coffee sm:text-4xl">
            From One Oven To A Neighborhood Favorite
          </h2>
        </div>

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute top-6 right-0 left-0 hidden h-px bg-coffee/15 lg:block"
          />
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {JOURNEY.map(({ step, title, description }) => (
              <div
                key={step}
                className="relative flex flex-col items-center text-center"
              >
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-coffee font-display text-sm font-semibold text-cream shadow-[0_8px_20px_-8px_rgba(75,50,40,0.4)]">
                  {step}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-coffee">
                  {title}
                </h3>
                <p className="mt-2 max-w-[14rem] text-sm leading-relaxed text-coffee/70">
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
