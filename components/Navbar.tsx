"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useWhatsAppModal } from "@/components/WhatsAppModalContext";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openBookingModal } = useWhatsAppModal();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cream/90 backdrop-blur-md shadow-[0_4px_24px_-8px_rgba(75,50,40,0.15)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="font-display text-2xl font-semibold tracking-wide text-coffee"
        >
          Beany <span className="text-accent">Barista</span>
        </Link>

        <ul className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group relative text-sm font-medium tracking-wide text-coffee/80 transition-colors hover:text-coffee"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={openBookingModal}
          className="hidden min-h-11 items-center justify-center rounded-full bg-coffee px-6 py-2.5 text-sm font-medium text-cream shadow-sm transition-all duration-300 hover:bg-accent hover:shadow-md lg:inline-flex"
        >
          Reserve a Table
        </button>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="relative flex h-11 w-11 items-center justify-center rounded-full text-coffee transition-colors hover:bg-coffee/5 lg:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <div className="flex h-4 w-6 flex-col justify-between">
            <span
              className={`h-0.5 w-full origin-left bg-coffee transition-all duration-300 ${
                isMenuOpen ? "rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-coffee transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-full origin-left bg-coffee transition-all duration-300 ${
                isMenuOpen ? "-rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 ease-out lg:hidden ${
          isMenuOpen ? "max-h-96 border-t border-coffee/10" : "max-h-0"
        }`}
      >
        <ul
          className={`flex flex-col gap-1 bg-cream px-6 py-4 transition-all duration-300 ease-out ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-2 opacity-0"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-coffee/80 transition-colors hover:bg-coffee/5 hover:text-coffee"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <button
              type="button"
              onClick={() => {
                setIsMenuOpen(false);
                openBookingModal();
              }}
              className="block w-full rounded-full bg-coffee px-6 py-3 text-center text-sm font-medium text-cream transition-colors hover:bg-accent"
            >
              Reserve a Table
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
