"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Music4, GlassWater, HeartHandshake, PartyPopper, Briefcase, UtensilsCrossed } from "lucide-react";

const FEATURES = [
  { icon: UtensilsCrossed, text: "Modern Anatolian fine dining" },
  { icon: Music4, text: "Live music every evening" },
  { icon: GlassWater, text: "Bespoke cocktail program" },
  { icon: HeartHandshake, text: "Intimate settings for date nights" },
  { icon: PartyPopper, text: "Celebrations & private events" },
  { icon: Briefcase, text: "Corporate dinners & private rooms" },
];

export default function Experience() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-12">
        <div className="order-2 flex flex-col gap-10 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-4"
          >
            <span className="text-[11px] font-medium uppercase tracking-widest2 text-gold">
              The Experience
            </span>
            <h2 className="font-serif text-4xl leading-[1.1] text-white sm:text-5xl">
              An Evening Designed to Be Remembered
            </h2>
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              From the first pour to the final course, every detail at
              Kapadoccia is composed — the lighting, the music, the pacing of
              service. Whether it&apos;s a quiet dinner for two or a hundred-guest
              celebration, our team builds the evening around you.
            </p>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {FEATURES.map((f) => (
              <motion.li
                key={f.text}
                variants={{
                  hidden: { opacity: 0, x: -16 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                }}
                className="flex items-center gap-3 rounded-lg border border-white/5 bg-charcoal/60 px-4 py-3.5 transition-colors duration-300 hover:border-gold/30"
              >
                <f.icon size={18} className="shrink-0 text-gold" />
                <span className="text-sm text-white/90">{f.text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 relative aspect-[3/4] w-full overflow-hidden rounded-xl shadow-deep lg:order-2"
        >
          <Image
            src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80"
            alt="Intimate booth seating at Kapadoccia Abuja"
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 rounded-lg glass border border-white/10 p-5">
            <p className="font-serif text-lg italic text-white">
              &ldquo;Every evening here feels choreographed, not served.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
