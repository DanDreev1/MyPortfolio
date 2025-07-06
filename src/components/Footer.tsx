'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="w-full py-10 px-4 mb-20 md:mb-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl 2xl:text-3xl font-bold text-center md:text-left"
        >
          Have a project in mind?
          <br />
          Let&apos;s build something together!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/Contact"
            className="text-white text-xl 2xl:text-2xl px-8 py-4 rounded-xl font-semibold transition shadow-md"
            style={{
              background: 'linear-gradient(to right, #0ea5e9, #6366f1)', // тот самый градиент из лого
              border: 'none',
            }}
          >
            Contact
          </Link>
        </motion.div>
      </div>
    </footer>
  );
};