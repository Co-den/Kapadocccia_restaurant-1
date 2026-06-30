"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Flame, Mountain, Wine } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const PILLARS = [
  {
    icon: Mountain,
    title: "Carved From Stone",
    text: "Our dining hall is sculpted to echo the fairy chimneys of Cappadocia, arched ceilings and warm sandstone walls.",
  },
  {
    icon: Flame,
    title: "Fire & Smoke",
    text: "Every dish passes through open flame — slow-roasted, clay-sealed, or finished tableside in smoke.",
  },
  {
    icon: Wine,
    title: "Curated Cellar",
    text: "A reserve list of rare wines and bespoke cocktails, poured beneath flickering lantern light.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ink py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="cave-arch relative aspect-[4/5] w-full max-w-md overflow-hidden shadow-deep">
            <Image
              src="https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=1000&q=80"
              alt="Cave-carved stone interior of Kapadoccia Abuja"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden h-40 w-40 rounded-full border border-gold/30 sm:block" />
          <div className="absolute -top-6 -left-6 hidden h-24 w-24 rounded-full bg-gold/10 blur-2xl sm:block" />
        </motion.div>

        <div className="flex flex-col gap-10">
          <SectionHeading
            align="left"
            eyebrow="Our Story"
            title="A Cave Carved for the Modern Epicurean"
            description="Inspired by the ancient rock-cut dwellings of Cappadocia, Kapadoccia Abuja reimagines the cave as a setting for refined indulgence. Hand-finished stone arches, low amber light, and the quiet theatre of an open kitchen come together to create an atmosphere unlike anything else in the city — intimate enough for two, grand enough for a celebration of a hundred."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group rounded-xl border border-white/5 bg-charcoal/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/30 hover:shadow-gold"
              >
                <pillar.icon
                  className="mb-4 text-gold transition-transform duration-500 group-hover:scale-110"
                  size={22}
                />
                <h3 className="mb-2 font-serif text-lg text-white">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {pillar.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
