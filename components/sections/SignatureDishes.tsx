"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Plus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { DISHES } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function SignatureDishes() {
  return (
    <section id="menu" className="bg-charcoal py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeading
          eyebrow="The Menu"
          title="Signature Dishes"
          description="A modern Anatolian menu built around fire, smoke, and the rarest ingredients we can source — each plate designed to be remembered."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {DISHES.map((dish) => (
            <motion.article
              key={dish.id}
              variants={item}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-xl border border-white/5 bg-ink shadow-deep transition-colors duration-500 hover:border-gold/30"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80" />
                <span className="absolute right-4 top-4 rounded-full bg-ink/70 px-4 py-1.5 text-sm font-medium text-gold backdrop-blur-sm">
                  {dish.price}
                </span>
              </div>

              <div className="flex flex-col gap-3 p-6">
                <h3 className="font-serif text-xl text-white">{dish.name}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {dish.description}
                </p>
                <button
                  type="button"
                  className="mt-2 inline-flex w-fit items-center gap-2 text-[11px] font-medium uppercase tracking-widest2 text-gold/80 transition-colors duration-300 hover:text-gold"
                >
                  <Plus size={14} /> Add Note for Reservation
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-16 flex justify-center">
          <Button href="#reserve" variant="outline">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
