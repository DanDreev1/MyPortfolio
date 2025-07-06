"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const FeaturedProjects = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-semibold mb-16 text-center">
        Featured Projects
      </h2>

      <div className="space-y-24">
        {/* Project 1 – Productivity Planner */}
        <motion.div
          className="flex flex-col md:flex-row items-start gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-full md:w-1/2">
            <Image
              src="/projects/productivity.jpg"
              alt="Productivity Planner"
              width={800}
              height={600}
              className="rounded-xl shadow-xl object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <h3 className="text-3xl font-bold">Daily Planner & Goal Tracker</h3>
            <p className="text-lg text-gray-700">
              A powerful tool I built to manage my day, track goals, and stay focused. It helps me stay productive
              and intentional every single day.
            </p>
            <p className="text-lg text-gray-700">
              In the future, this tool will be integrated into my Contact page — allowing users to book meetings
              directly based on my real-time availability.
            </p>
          </div>
        </motion.div>

        {/* Project 2 – Placeholder for Clients */}
        <motion.div
            className="flex flex-col md:flex-row-reverse items-start gap-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
        >
            <div className="w-full md:w-1/2">
                <Image
                    src="/projects/future.jpg"
                    alt="Your Next Project"
                    width={800}
                    height={600}
                    className="rounded-xl shadow-xl object-cover"
                />
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-between h-full gap-4">
                <div>
                    <h3 className="text-3xl font-bold mb-2">Your Project — Delivered Flawlessly</h3>
                    <p className="text-lg text-gray-700 mb-2">
                        Imagine a website that fits your brand, your goals, and your workflow — designed and built specifically
                        for you. Smooth animations, clear structure, fully responsive, and SEO-ready.
                    </p>
                    <p className="text-lg text-gray-700">
                        Whether it’s a portfolio, booking system, product showcase or something truly unique — let’s make
                        it real together.
                    </p>
                </div>

                <Link
                    href="/Contact"
                    className="w-40 mt-5 py-4 rounded-xl font-semibold text-white text-center"
                    style={{
                        background: 'linear-gradient(to right, #0ea5e9, #6366f1)',
                    }}
                >
                    Let’s Talk
                </Link>
            </div>
        </motion.div>
      </div>
    </section>
  );
};