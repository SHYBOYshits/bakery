"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function unsplash(id: string) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=200&q=80`;
}

const REVIEWS = [
  {
    name: "Sarah Mitchell",
    role: "Regular Customer",
    rating: 5,
    text: "The croissants here are the best I've had outside of Paris. Flaky, buttery, and always fresh.",
    avatar: unsplash("1494790108377-be9c29b29330"),
  },
  {
    name: "James Carter",
    role: "Food Blogger",
    rating: 5,
    text: "BrownCrust Cafe has become my go-to spot for both coffee and dessert. The Black Forest cake is unreal.",
    avatar: unsplash("1500648767791-00dcc994a43e"),
  },
  {
    name: "Priya Nair",
    role: "Local Resident",
    rating: 5,
    text: "Their sourdough is incredible, and the staff always greet you with a smile. Highly recommend.",
    avatar: unsplash("1517841905240-472988babdf9"),
  },
  {
    name: "David Chen",
    role: "Coffee Enthusiast",
    rating: 4,
    text: "Easily the best cappuccino in town. Cozy atmosphere and quick, friendly service every time.",
    avatar: unsplash("1506794778202-cad84cf45f1d"),
  },
  {
    name: "Emily Rodriguez",
    role: "Weekend Regular",
    rating: 5,
    text: "I order the Ferrero Rocher cake for every celebration now. It never disappoints.",
    avatar: unsplash("1544005313-94ddf0286df2"),
  },
  {
    name: "Michael Brooks",
    role: "First-time Visitor",
    rating: 5,
    text: "Walked in for a quick coffee and left with a box of pastries. Everything looked and tasted amazing.",
    avatar: unsplash("1522075469751-3a6694fb2f61"),
  },
] as const;

export default function CustomerReviews() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  const showPrev = () =>
    setIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  const showNext = () => setIndex((prev) => (prev + 1) % REVIEWS.length);

  const review = REVIEWS[index];

  return (
    <section className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-accent uppercase shadow-sm">
            Testimonials
          </span>
          <h2 className="mt-6 font-display text-3xl font-semibold text-coffee sm:text-4xl lg:text-5xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-base leading-relaxed text-coffee/70 sm:text-lg">
            Real words from the guests who keep our ovens warm and our
            counters busy.
          </p>
        </div>

        <div
          className="relative mt-14"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            type="button"
            onClick={showPrev}
            aria-label="Previous review"
            className="absolute top-1/2 left-0 z-10 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-coffee/15 bg-white text-coffee shadow-sm transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white sm:flex lg:-translate-x-full"
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
            aria-label="Next review"
            className="absolute top-1/2 right-0 z-10 hidden h-11 w-11 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-coffee/15 bg-white text-coffee shadow-sm transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white sm:flex lg:translate-x-full"
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
            key={review.name}
            className="animate-fade-in-up mx-auto flex max-w-2xl flex-col items-center rounded-3xl bg-card px-8 py-12 text-center shadow-[0_20px_45px_-20px_rgba(75,50,40,0.25)] sm:px-14"
          >
            <svg
              viewBox="0 0 32 24"
              fill="none"
              className="h-8 w-8 text-accent/40"
            >
              <path
                d="M3 24V15.5C3 8.6 7.5 3.3 14 1v5.4c-3.3 1.4-5 4-5 7.1h5V24H3Zm16 0V15.5c0-6.9 4.5-12.2 11-14.5v5.4c-3.3 1.4-5 4-5 7.1h5V24H19Z"
                fill="currentColor"
              />
            </svg>

            <p className="mt-6 font-display text-xl leading-relaxed text-coffee italic sm:text-2xl">
              &ldquo;{review.text}&rdquo;
            </p>

            <div className="mt-6 flex items-center gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  viewBox="0 0 20 20"
                  fill={i < review.rating ? "currentColor" : "none"}
                  className="h-4 w-4"
                >
                  <path
                    d="M10 1.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9L10 15l-5.2 2.8 1-5.9L1.5 7.7l5.9-.8L10 1.5Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                </svg>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-display font-semibold text-coffee">
                  {review.name}
                </p>
                <p className="text-xs text-coffee/60">{review.role}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            {REVIEWS.map((r, i) => (
              <button
                key={r.name}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-accent" : "w-2 bg-coffee/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
