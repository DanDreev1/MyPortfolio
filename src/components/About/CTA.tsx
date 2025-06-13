'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export const CTA = () => {
  return (
    <section className="py-20 bg-[#cbd5e12a]">
      <motion.div
        className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-gray-900"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="mb-6 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center md:text-start">
            Curious about my work?
          </h2>
          <p className="text-lg font-semibold text-center md:text-start">
            Check out my latest projects and real-world experience.
          </p>
        </div>

        <Link href="/projects">
          <motion.button
            className="px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-[#7B61FF] to-[#3029ff] hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          >
            View Projects
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};
