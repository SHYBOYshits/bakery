"use client";

import { useState, type SVGProps } from "react";
import { getEnquiryWhatsAppUrl } from "@/lib/whatsapp";

type IconProps = SVGProps<SVGSVGElement>;

function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M6 4h3l1.5 4.5-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2L20 15v3a2 2 0 0 1-2 2C10.8 20 4 13.2 4 6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect
        x="3.5"
        y="5.5"
        width="17"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M4.5 6.5 12 12.5l7.5-6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M12 7.5V12l3 2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M7 17.5 4.5 20l1-3.6A7.7 7.7 0 1 1 12 19.7a7.6 7.6 0 0 1-5-1.9Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M9 9.3c0-.5.4-1 .9-1h.6c.3 0 .5.2.6.4l.6 1.5c.1.2 0 .5-.1.7l-.5.6c.4.9 1.1 1.6 2 2l.6-.5c.2-.1.5-.2.7-.1l1.5.6c.2.1.4.3.4.6v.6c0 .5-.5.9-1 .9-3 0-5.3-2.3-5.3-5.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

const CONTACT_INFO = [
  {
    label: "Phone",
    value: "+1 (555) 021-8842",
    href: "tel:+15550218842",
    Icon: PhoneIcon,
  },
  {
    label: "Email",
    value: "hello@browncrustcafe.com",
    href: "mailto:hello@browncrustcafe.com",
    Icon: MailIcon,
  },
  {
    label: "Opening Hours",
    value: "Mon – Sun: 7:00 AM – 9:00 PM",
    href: undefined,
    Icon: ClockIcon,
  },
  {
    label: "Instagram",
    value: "@browncrustcafe",
    href: "#",
    Icon: InstagramIcon,
  },
  {
    label: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/918544924982",
    Icon: WhatsAppIcon,
  },
] as const;

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    const whatsappUrl = getEnquiryWhatsAppUrl(
      form.name,
      form.phone,
      form.email,
      form.message,
    );
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    window.setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 900);
  };

  return (
    <section id="contact" className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-accent uppercase shadow-sm">
            Get In Touch
          </span>
          <h2 className="mt-6 font-display text-3xl font-semibold text-coffee sm:text-4xl lg:text-5xl">
            Visit Us Today
          </h2>
          <p className="mt-4 text-base leading-relaxed text-coffee/70 sm:text-lg">
            Stop by for a fresh bake and a warm cup of coffee, or reach out —
            we&apos;d love to hear from you.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div className="overflow-hidden rounded-2xl bg-card shadow-[0_8px_30px_-12px_rgba(75,50,40,0.15)]">
              <iframe
                title="BrownCrust Cafe location"
                src="https://www.google.com/maps?q=221B+Maple+Street,+Downtown&output=embed"
                className="h-72 w-full border-0 sm:h-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="rounded-2xl bg-card p-6 shadow-[0_8px_30px_-12px_rgba(75,50,40,0.15)] sm:p-8">
              <ul className="divide-y divide-coffee/10">
                {CONTACT_INFO.map(({ label, value, href, Icon }) => (
                  <li
                    key={label}
                    className="flex items-center gap-4 py-4 first:pt-0 last:pb-0"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-medium tracking-wide text-coffee/50 uppercase">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={
                            href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-sm font-medium text-coffee transition-colors duration-200 hover:text-accent"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-coffee">
                          {value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl bg-card p-6 shadow-[0_8px_30px_-12px_rgba(75,50,40,0.15)] sm:p-8">
            {status === "sent" ? (
              <div className="flex h-full min-h-[22rem] flex-col items-center justify-center gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
                    <path
                      d="M5 12.5 10 17l9-10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="font-display text-xl font-semibold text-coffee">
                  Message sent!
                </p>
                <p className="max-w-xs text-sm text-coffee/70">
                  Thanks for reaching out. Our team will get back to you
                  shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-2 inline-flex min-h-11 items-center justify-center rounded-full border border-coffee/20 px-6 py-2.5 text-sm font-medium text-coffee transition-all duration-300 hover:border-accent hover:text-accent"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="font-display text-xl font-semibold text-coffee">
                  Send Us a Message
                </h3>

                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-xs font-medium tracking-wide text-coffee/60 uppercase"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, name: event.target.value }))
                    }
                    placeholder="Your name"
                    className="w-full rounded-xl border border-coffee/15 bg-cream/60 px-4 py-3 text-sm text-coffee outline-none transition-colors duration-200 placeholder:text-coffee/40 focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-1.5 block text-xs font-medium tracking-wide text-coffee/60 uppercase"
                  >
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, phone: event.target.value }))
                    }
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-coffee/15 bg-cream/60 px-4 py-3 text-sm text-coffee outline-none transition-colors duration-200 placeholder:text-coffee/40 focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-xs font-medium tracking-wide text-coffee/60 uppercase"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, email: event.target.value }))
                    }
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-coffee/15 bg-cream/60 px-4 py-3 text-sm text-coffee outline-none transition-colors duration-200 placeholder:text-coffee/40 focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-1.5 block text-xs font-medium tracking-wide text-coffee/60 uppercase"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(event) =>
                      setForm((prev) => ({
                        ...prev,
                        message: event.target.value,
                      }))
                    }
                    placeholder="Tell us how we can help"
                    className="w-full resize-none rounded-xl border border-coffee/15 bg-cream/60 px-4 py-3 text-sm text-coffee outline-none transition-colors duration-200 placeholder:text-coffee/40 focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-coffee px-6 py-3.5 text-sm font-medium text-cream shadow-md transition-all duration-300 hover:bg-accent hover:shadow-lg disabled:opacity-70"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
