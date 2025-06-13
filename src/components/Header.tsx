'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Instagram } from 'lucide-react';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="py-4 2xl:py-8"
    >
      <div className="xl:container mx-auto px-5 sm:px-8 flex items-center justify-between">
        <Link href="/" className="w-14 h-14 2xl:w-18 2xl:h-18 flex items-center justify-center bg-white rounded-xl shadow-md text-sky-500 text-xl 2xl:text-2xl font-extrabold">
          DA
        </Link>

        <nav className="hidden md:flex space-x-10 text-[20px] 2xl:text-[28px] font-bold">
          <Link href="/About">About</Link>
          <Link href="/Projects">Projects</Link>
          <Link href="/Contact">Contact</Link>
        </nav>

        <div className="flex items-center gap-5">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Github className="w-10 h-10 2xl:w-12 2xl:h-12 hover:scale-110 transition" />
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-10 h-10 2xl:w-12 2xl:h-12 hover:scale-110 transition text-[#e1306c]" />
          </a>
        </div>
      </div>
    </motion.header>
  );
}