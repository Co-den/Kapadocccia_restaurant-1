"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/data";

export default function ReservationCTA() {
  return (
    <section
      id="reserve"
      className="relative overflow-hidden bg-ink py-28 sm:py-40"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[120px]" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-medium uppercase tracking-widest2 text-gold"
        >
          Reservations
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-5xl leading-[1.1] text-white sm:text-6xl"
        >
          Reserve Your Table
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-lg text-base text-muted sm:text-lg"
        >
          Tables are limited and fill quickly on weekends. Secure your seat
          at Abuja&apos;s most talked-about new dining destination.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-2 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button href="#contact" variant="solid" icon={<ArrowRight size={15} />}>
            Book Now
          </Button>
          <Button href={SITE.phoneHref} variant="outline" icon={<Phone size={15} />}>
            Call Restaurant
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
