"use client";

import { motion } from "framer-motion";

export const MottoSection = () => {
  return (
    <section className="py-24 px-4 bg-[#cbd5e12a]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold italic leading-relaxed text-gray-800"
        >
          "Great design is not just what it looks like or feels like — it's how it works and connects people."
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 text-lg font-medium text-gray-600"
        >
          — Daniil A., Full-Stack Developer
        </motion.p>
      </div>
    </section>
  );
};