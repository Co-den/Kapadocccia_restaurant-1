"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/data";

export default function Statistics() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-20 sm:py-28">
      <div className="absolute inset-0 cave-arch-divider bg-gold/5" />
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-12 px-6 lg:grid-cols-4 lg:px-12">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex flex-col items-center gap-2 text-center"
          >
            <AnimatedCounter
              value={stat.value}
              suffix={stat.suffix}
              decimals={stat.decimals ?? 0}
            />
            <span className="text-xs font-medium uppercase tracking-widest2 text-muted">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
