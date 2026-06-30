"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Expand } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { GALLERY_IMAGES } from "@/lib/data";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-ink py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeading
          eyebrow="Gallery"
          title="A Glimpse Inside the Cave"
          description="A preview of the spaces, plates, and pours that make Kapadoccia Abuja unlike anywhere else in the city."
        />

        <div className="mt-16 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className={`group relative w-full overflow-hidden rounded-xl border border-white/5 ${
                img.tall ? "h-[420px]" : "h-[260px]"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-500 group-hover:bg-ink/40 group-hover:opacity-100">
                <Expand className="text-gold" size={24} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
