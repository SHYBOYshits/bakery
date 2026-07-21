import Link from "next/link";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/gallery" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <path
        d="M12 8.2A3.8 3.8 0 1 0 12 15.8 3.8 3.8 0 1 0 12 8.2ZM12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm5.4-8.6a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8ZM12 4.8c2.4 0 2.7 0 3.6.05.9.04 1.4.19 1.7.32.4.16.7.36 1 .66.3.3.5.6.66 1 .13.3.28.8.32 1.7.05.9.05 1.2.05 3.6s0 2.7-.05 3.6c-.04.9-.19 1.4-.32 1.7-.16.4-.36.7-.66 1-.3.3-.6.5-1 .66-.3.13-.8.28-1.7.32-.9.05-1.2.05-3.6.05s-2.7 0-3.6-.05c-.9-.04-1.4-.19-1.7-.32a2.7 2.7 0 0 1-1-.66 2.7 2.7 0 0 1-.66-1c-.13-.3-.28-.8-.32-1.7C4.65 14.7 4.65 14.4 4.65 12s0-2.7.05-3.6c.04-.9.19-1.4.32-1.7.16-.4.36-.7.66-1 .3-.3.6-.5 1-.66.3-.13.8-.28 1.7-.32.9-.05 1.2-.05 3.6-.05ZM12 3c-2.44 0-2.75.01-3.7.06-.95.05-1.6.2-2.17.42-.6.24-1.1.55-1.6 1.05-.5.5-.81 1-1.05 1.6-.22.57-.37 1.22-.42 2.17C3.01 9.25 3 9.56 3 12s.01 2.75.06 3.7c.05.95.2 1.6.42 2.17.24.6.55 1.1 1.05 1.6.5.5 1 .81 1.6 1.05.57.22 1.22.37 2.17.42.95.05 1.26.06 3.7.06s2.75-.01 3.7-.06c.95-.05 1.6-.2 2.17-.42.6-.24 1.1-.55 1.6-1.05.5-.5.81-1 1.05-1.6.22-.57.37-1.22.42-2.17.05-.95.06-1.26.06-3.7s-.01-2.75-.06-3.7c-.05-.95-.2-1.6-.42-2.17a4.7 4.7 0 0 0-1.05-1.6 4.7 4.7 0 0 0-1.6-1.05c-.57-.22-1.22-.37-2.17-.42C14.75 3.01 14.44 3 12 3Z"
      />
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7C16.4 3.66 15.4 3.57 14.2 3.57c-2.4 0-4.05 1.47-4.05 4.17v2.16H7.4v3.1h2.75V21h3.35Z" />
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <path d="M20.5 6.4c-.6.27-1.24.45-1.9.53a3.3 3.3 0 0 0 1.45-1.83c-.64.38-1.34.65-2.1.8a3.3 3.3 0 0 0-5.63 3.01 9.36 9.36 0 0 1-6.8-3.45 3.3 3.3 0 0 0 1.02 4.4c-.55-.02-1.06-.17-1.51-.42v.04a3.3 3.3 0 0 0 2.65 3.24 3.3 3.3 0 0 1-1.5.06 3.3 3.3 0 0 0 3.08 2.3 6.62 6.62 0 0 1-4.1 1.41c-.27 0-.53-.02-.79-.05a9.34 9.34 0 0 0 5.06 1.48c6.07 0 9.39-5.03 9.39-9.39l-.01-.43a6.7 6.7 0 0 0 1.65-1.72Z" />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-coffee text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-display text-2xl font-semibold text-cream">
              Beany <span className="text-accent">Barista</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
              A modern bakery and cafe crafting warm, honest food with an
              artisan touch — baked fresh, served with love.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-all duration-300 hover:border-accent hover:bg-accent hover:text-coffee"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-[0.15em] text-cream uppercase">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/60 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-[0.15em] text-cream uppercase">
              Visit Us
            </p>
            <ul className="mt-5 space-y-3 text-sm text-cream/60">
              <li>221B Maple Street, Downtown</li>
              <li>Open Daily, 7:00 AM – 9:00 PM</li>
              <li>hello@beanybarista.com</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-[0.15em] text-cream uppercase">
              Contact
            </p>
            <ul className="mt-5 space-y-3 text-sm text-cream/60">
              <li>+1 (555) 021-8842</li>
              <li>Private events &amp; catering available</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 sm:flex-row">
          <p className="text-xs text-cream/50">
            &copy; {new Date().getFullYear()} Beany Barista. All rights
            reserved.
          </p>
          <p className="text-xs text-cream/50">
            Crafted with warmth, one bake at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}
