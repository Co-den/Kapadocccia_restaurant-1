"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/data";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-white/5 py-3" : "bg-transparent py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        <Link href="#home" className="flex flex-col leading-none">
          <span className="font-serif text-2xl tracking-wide text-white">
            Kapadoccia
          </span>
          <span className="text-[10px] uppercase tracking-widest2 text-gold">
            Abuja
          </span>
        </Link>

        <ul className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xs font-medium uppercase tracking-[0.2em] text-white/80 transition-colors duration-300 hover:text-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href="#reserve" variant="outline" className="!px-6 !py-3 !text-[11px]">
            Reserve Table
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((o) => !o)}
          className="text-white lg:hidden"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="glass overflow-hidden border-t border-white/5 lg:hidden"
          >
            <ul className="flex flex-col gap-6 px-6 py-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm font-medium uppercase tracking-[0.2em] text-white/80 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Button href="#reserve" variant="solid" className="w-full">
                  Reserve Table
                </Button>
              </li>
              <li className="pt-2 text-xs text-muted">{SITE.phone}</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
