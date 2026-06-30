import Link from "next/link";
import { Instagram, Mail, MapPin, Phone, Facebook } from "lucide-react";
import { HOURS, NAV_LINKS, SITE } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/5 bg-charcoal">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Link href="#home" className="flex flex-col leading-none">
            <span className="font-serif text-2xl text-white">Kapadoccia</span>
            <span className="text-[10px] uppercase tracking-widest2 text-gold">
              Abuja
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-muted">
            A cave-inspired fine dining destination in the heart of Abuja —
            modern Anatolian cuisine, candlelight, and live music nightly.
          </p>
          <div className="flex gap-3 pt-2">
            <a
              href={SITE.instagramHref}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/80 transition-all duration-300 hover:border-gold hover:text-gold"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/80 transition-all duration-300 hover:border-gold hover:text-gold"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-4">
          <h3 className="font-serif text-lg text-white">Explore</h3>
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted transition-colors duration-300 hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div className="flex flex-col gap-4">
          <h3 className="font-serif text-lg text-white">Opening Hours</h3>
          <ul className="flex flex-col gap-3">
            {HOURS.map((h) => (
              <li key={h.day} className="text-sm text-muted">
                <span className="block text-white/80">{h.day}</span>
                {h.time}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h3 className="font-serif text-lg text-white">Visit Us</h3>
          <ul className="flex flex-col gap-3 text-sm text-muted">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="shrink-0 text-gold" />
              <a href={SITE.phoneHref} className="hover:text-gold">
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="shrink-0 text-gold" />
              <a href={`mailto:${SITE.email}`} className="hover:text-gold">
                {SITE.email}
              </a>
            </li>
          </ul>

          <a
            href={SITE.mapsHref}
            target="_blank"
            rel="noreferrer"
            className="group relative mt-2 block h-32 w-full overflow-hidden rounded-lg border border-white/10"
          >
            <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_30%_30%,#2a2a2a,transparent_60%)] bg-charcoal text-xs uppercase tracking-widest2 text-muted transition-colors duration-300 group-hover:text-gold">
              View on Google Maps
            </div>
          </a>
        </div>
      </div>

      <div className="border-t border-white/5 px-6 py-6 text-center text-xs text-muted lg:px-12">
        &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved. ·
        Concept design — built to inspire your real website.
      </div>
    </footer>
  );
}
