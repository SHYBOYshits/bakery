const STATS = [
  { value: "1000+", label: "Happy Customers" },
  { value: "50+", label: "Fresh Items" },
  { value: "10+", label: "Years Experience" },
  { value: "5★", label: "Customer Rating" },
];

export default function HomeStats() {
  return (
    <section className="bg-coffee px-6 py-20 text-cream sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 lg:grid-cols-4">
        {STATS.map(({ value, label }) => (
          <div key={label} className="flex flex-col items-center text-center">
            <p className="font-display text-3xl font-semibold sm:text-4xl">
              {value}
            </p>
            <p className="mt-1 text-xs tracking-wide text-cream/60 uppercase">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
