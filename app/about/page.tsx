"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  Clock,
  Coffee,
  Heart,
  Leaf,
  Users,
} from "lucide-react";
import CustomerReviews from "@/components/CustomerReviews";

function unsplash(id: string) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=80`;
}

const FADE_UP = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

const WHY_CHOOSE_US = [
  {
    title: "Natural Ingredients",
    description:
      "We source organic flour, real butter and seasonal produce — nothing artificial, ever.",
    Icon: Leaf,
  },
  {
    title: "Baked Fresh Daily",
    description:
      "Every loaf, cake and pastry is made from scratch each morning, never frozen or pre-made.",
    Icon: Clock,
  },
  {
    title: "Award-Winning Quality",
    description:
      "Recognized by local food critics and loved by regulars for consistent, honest craft.",
    Icon: Award,
  },
  {
    title: "Made With Love",
    description:
      "Every recipe carries a personal touch, refined over years of care for our craft.",
    Icon: Heart,
  },
];

const TEAM = [
  {
    name: "Elena Marchetti",
    role: "Founder & Head Baker",
    bio: "Trained in Lyon, Elena has led the ovens here for over 15 years.",
    image: unsplash("1560250097-0b93528c311a"),
  },
  {
    name: "Marcus Webb",
    role: "Pastry Chef",
    bio: "Marcus brings a modern touch to our classic cake and pastry recipes.",
    image: unsplash("1519085360753-af0119f7cbe7"),
  },
  {
    name: "Aisha Khan",
    role: "Head Barista",
    bio: "Aisha oversees every cup, from bean sourcing to the final pour.",
    image: unsplash("1607990281513-2c110a25bd8c"),
  },
  {
    name: "Daniel Osei",
    role: "Cafe Manager",
    bio: "Daniel makes sure every guest feels at home from the moment they walk in.",
    image: unsplash("1580489944761-15a19d654956"),
  },
];

const STATS = [
  { label: "Years of Craft", value: "15+", Icon: Calendar },
  { label: "Recipes Perfected", value: "40+", Icon: Coffee },
  { label: "Happy Customers", value: "10K+", Icon: Users },
  { label: "Awards Won", value: "6", Icon: Award },
];

const TIMELINE = [
  {
    year: "2010",
    title: "A Small Beginning",
    description:
      "Beany Barista opened its doors as a tiny corner bakery with just three ovens.",
  },
  {
    year: "2014",
    title: "Expanding Our Kitchen",
    description:
      "Growing demand led us to expand into the space next door and grow our team.",
  },
  {
    year: "2018",
    title: "A Fresh Renovation",
    description:
      "We redesigned our cafe into the warm, premium space guests enjoy today.",
  },
  {
    year: "2022",
    title: "Recognized Locally",
    description:
      "Named 'Best Neighborhood Bakery' by the city's food and lifestyle press.",
  },
  {
    year: "Today",
    title: "Baking For Our Community",
    description:
      "We continue to bake fresh daily, one loaf, cake and cup of coffee at a time.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Large Hero */}
      <section className="relative overflow-hidden px-6 pt-20 pb-20 sm:px-8 sm:pt-24 sm:pb-28 lg:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 -z-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-20 -z-10 h-96 w-96 rounded-full bg-coffee/10 blur-3xl"
        />

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-accent uppercase shadow-sm">
              About Beany Barista
            </span>
            <h1 className="mt-6 font-display text-4xl leading-[1.1] font-semibold text-coffee sm:text-5xl lg:text-6xl">
              Baking Happiness Into Every Corner Since 2010
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-coffee/70 sm:text-lg">
              What started as a three-oven corner bakery has grown into a
              neighborhood favorite — built on honest ingredients, patient
              craft, and a genuine love for bringing people together over
              good food.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_30px_60px_-15px_rgba(75,50,40,0.3)]"
          >
            <Image
              src={unsplash("1509440159596-0249088772ff")}
              alt="Freshly baked bread at Beany Barista"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <motion.div
            {...FADE_UP}
            className="relative order-2 aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_20px_45px_-20px_rgba(75,50,40,0.25)] lg:order-1"
          >
            <Image
              src={unsplash("1554118811-1e0d58224f24")}
              alt="Inside the Beany Barista kitchen"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div {...FADE_UP} className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-accent uppercase shadow-sm">
              Our Story
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold text-coffee sm:text-4xl">
              From One Oven To A Neighborhood Staple
            </h2>
            <p className="mt-4 leading-relaxed text-coffee/70">
              Beany Barista began in 2010 as a small family bakery with a
              single goal: bake bread the way it used to be made — slow,
              honest, and full of flavor. Word spread quickly, and what
              started with a handful of regulars grew into a full bakery and
              cafe loved across the neighborhood.
            </p>
            <p className="mt-4 leading-relaxed text-coffee/70">
              Today, we still measure success the same way we did on day
              one — by the smile on a guest&apos;s face when they take their
              first bite.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-card px-6 py-20 sm:px-8 lg:px-12">
        <motion.div {...FADE_UP} className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-cream px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-accent uppercase shadow-sm">
            Our Mission
          </span>
          <h2 className="mt-6 font-display text-3xl font-semibold text-coffee sm:text-4xl">
            Baking That Brings People Together
          </h2>
          <p className="mt-4 text-base leading-relaxed text-coffee/70 sm:text-lg">
            Our mission is simple: craft honest, high-quality food using
            time-tested techniques, and serve it in a space that feels like
            home. Every recipe is made with real ingredients and genuine
            care — because good food should never be complicated.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_US.map(({ title, description, Icon }, i) => (
            <motion.div
              key={title}
              {...FADE_UP}
              transition={{ ...FADE_UP.transition, delay: i * 0.08 }}
              className="flex flex-col items-center rounded-2xl bg-cream p-6 text-center shadow-[0_8px_24px_-12px_rgba(75,50,40,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-12px_rgba(75,50,40,0.25)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-coffee">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-coffee/70">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div {...FADE_UP} className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-accent uppercase shadow-sm">
              Meet Our Team
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold text-coffee sm:text-4xl">
              The Hands Behind Every Bake
            </h2>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                {...FADE_UP}
                transition={{ ...FADE_UP.transition, delay: i * 0.08 }}
                className="group overflow-hidden rounded-2xl bg-card shadow-[0_8px_24px_-12px_rgba(75,50,40,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_35px_-12px_rgba(75,50,40,0.28)]"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, 45vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-display text-lg font-semibold text-coffee">
                    {member.name}
                  </h3>
                  <p className="text-xs font-medium tracking-wide text-accent uppercase">
                    {member.role}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-coffee/70">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-coffee px-6 py-20 text-cream sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map(({ label, value, Icon }, i) => (
            <motion.div
              key={label}
              {...FADE_UP}
              transition={{ ...FADE_UP.transition, delay: i * 0.08 }}
              className="flex flex-col items-center text-center"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-accent">
                <Icon className="h-6 w-6" />
              </span>
              <p className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
                {value}
              </p>
              <p className="mt-1 text-xs tracking-wide text-cream/60 uppercase">
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <motion.div {...FADE_UP} className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-accent uppercase shadow-sm">
              Our Journey
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold text-coffee sm:text-4xl">
              Milestones Along The Way
            </h2>
          </motion.div>

          <div className="relative mt-14 pl-8">
            <div
              aria-hidden
              className="absolute top-1 bottom-1 left-2.5 w-px bg-coffee/15"
            />
            <div className="flex flex-col gap-10">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative"
                >
                  <span className="absolute top-1.5 -left-8 flex h-5 w-5 items-center justify-center rounded-full bg-accent shadow-[0_0_0_4px_rgba(198,156,109,0.2)]" />
                  <p className="font-display text-sm font-semibold tracking-wide text-accent">
                    {item.year}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-semibold text-coffee">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-coffee/70">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <CustomerReviews />
    </>
  );
}
