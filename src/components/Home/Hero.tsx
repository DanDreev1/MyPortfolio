'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row items-center justify-around px-8 pt-8 md:py-16"
    >
      <div>
        <h1 className="text-5xl font-black mb-10 sm:mb-15 md:mb-20">DANIIL ANDRIEIEV</h1>
        <p className="mt-4 text-3xl font-extrabold mb-5">Frontend Developer</p>
        <p className="text-xl">Digital Portfolio</p>
      </div>
      <div className="relative w-72 md:w-96 h-[400px] md:h-[400px] mt-10 md:mt-0">
        <Image
          src="/Hero.png"
          alt="Portrait of Daniil"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
    </motion.section>
  );
}